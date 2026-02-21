'use strict';

// ─── Global helpers (must be global for onclick attributes) ──────────────────

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function showPage(id) {
  var sections = document.querySelectorAll('.page-section');
  sections.forEach(function (sec) {
    sec.style.display = 'none';
    sec.classList.remove('active');
  });
  var target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
    target.classList.add('active');
  } else {
    console.warn('[showPage] No element with id:', id);
  }
}

function setActiveNav(id) {
  var links = document.querySelectorAll('.nav-link');
  links.forEach(function (link) {
    link.classList.remove('active');
    if (link.getAttribute('data-page-id') === id) {
      link.classList.add('active');
    }
  });
  // Also handle top-nav links
  var topLinks = document.querySelectorAll('.topnav-link');
  topLinks.forEach(function (link) {
    link.classList.remove('active');
    if (link.getAttribute('data-page-id') === id) {
      link.classList.add('active');
    }
  });
}

function showLesson(sectionId) {
  var section = _findSection(sectionId);
  if (!section) {
    console.warn('[App] Section not found:', sectionId);
    return;
  }
  showPage('lesson-page');
  setActiveNav(sectionId);
  if (typeof Analytics !== 'undefined') Analytics.trackLessonStarted(sectionId, 'grammar');
  var userData = typeof Dashboard !== 'undefined' ? Dashboard.getUserData() : {};
  App.renderLesson(section, userData);
}

function showVocab(sectionId) {
  var section = _findSection(sectionId);
  if (!section) {
    console.warn('[App] Vocab section not found:', sectionId);
    return;
  }
  showPage('vocabulary-page');
  setActiveNav(sectionId);
  if (typeof Analytics !== 'undefined') Analytics.trackLessonStarted(sectionId, 'vocabulary');
  var userData = typeof Dashboard !== 'undefined' ? Dashboard.getUserData() : {};
  App.renderVocab(section, userData);
}

function _findFirstSectionOfType(type) {
  if (typeof DATA === 'undefined' || !DATA.chapters) return null;
  for (var ci = 0; ci < DATA.chapters.length; ci++) {
    var secs = DATA.chapters[ci].sections || [];
    for (var si = 0; si < secs.length; si++) {
      if (secs[si].type === type) return secs[si];
    }
  }
  return null;
}

function _findSection(sectionId) {
  if (typeof DATA === 'undefined' || !DATA.chapters) return null;
  var found = null;
  DATA.chapters.forEach(function (ch) {
    (ch.sections || []).forEach(function (sec) {
      if (sec.id === sectionId) found = sec;
    });
  });
  return found;
}

// ─── App module ───────────────────────────────────────────────────────────────

var App = (function () {
  'use strict';

  var currentLang = 'en';
  var currentSectionId = null;

  // ─── Score & streak helpers ─────────────────────────────────────────────

  function safeParseLS(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function saveToLS(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('[App] localStorage write failed:', e);
    }
  }

  function recordExerciseAnswer(sectionId, correct) {
    // History entry
    var history = safeParseLS('parlaara_history', []);
    history.push({
      date: new Date().toISOString().slice(0, 10),
      sectionId: sectionId,
      correct: correct,
      ts: Date.now()
    });
    // Keep last 2000 entries
    if (history.length > 2000) history = history.slice(-2000);
    saveToLS('parlaara_history', history);
  }

  function updateSectionScore(sectionId, correct, total) {
    var scores = safeParseLS('parlaara_scores', {});
    if (!scores[sectionId]) {
      scores[sectionId] = { correct: 0, total: 0, completed: false };
    }
    scores[sectionId].correct += correct;
    scores[sectionId].total += total;
    scores[sectionId].completed = true;
    scores[sectionId].lastAttempt = Date.now();
    saveToLS('parlaara_scores', scores);
  }

  function updateStreak() {
    var streak = safeParseLS('parlaara_streak', { count: 0, lastDate: null });
    var today = new Date().toISOString().slice(0, 10);
    if (!streak.lastDate) {
      streak.count = 1;
      streak.lastDate = today;
    } else if (streak.lastDate === today) {
      // Already counted today, no change
    } else {
      var last = new Date(streak.lastDate);
      var now = new Date(today);
      var diffDays = Math.round((now - last) / (24 * 60 * 60 * 1000));
      if (diffDays === 1) {
        streak.count += 1;
      } else {
        streak.count = 1;
      }
      streak.lastDate = today;
    }
    saveToLS('parlaara_streak', streak);
  }

  // ─── Sidebar building ────────────────────────────────────────────────────

  function buildSidebar() {
    var sidebar = document.getElementById('sb-chapters');
    if (!sidebar) return;
    if (typeof DATA === 'undefined' || !DATA.chapters) {
      sidebar.innerHTML = '<p class="sb-empty">No content loaded.</p>';
      return;
    }

    var html = '';
    DATA.chapters.forEach(function (chapter, chIdx) {
      var chId = 'sb-ch-' + chIdx;
      var titleEn = chapter.titleEn || chapter.title || ('Chapter ' + (chIdx + 1));
      var titleCa = chapter.title || titleEn;

      html +=
        '<div class="sb-chapter-group" id="' + chId + '">' +
          '<button class="sb-chapter-toggle" data-target="' + chId + '-sections"' +
            ' data-label-en="' + escapeHtml(titleEn) + '"' +
            ' data-label-ca="' + escapeHtml(titleCa) + '">' +
            '<span class="sb-chapter-arrow">▶</span>' +
            '<span class="sb-chapter-title">' + escapeHtml(titleEn) + '</span>' +
          '</button>' +
          '<div class="sb-chapter-sections" id="' + chId + '-sections" style="display:none">';

      (chapter.sections || []).forEach(function (sec) {
        var isVocab = sec.type === 'vocabulary';
        var icon = isVocab ? '📚' : '📖';
        var labelEn = sec.navLabelEn || (sec.subtitle ? sec.subtitle.split('—')[0].trim() : sec.id);
        var labelCa = sec.navLabel || labelEn;
        var onclick = isVocab
          ? 'showVocab(\'' + sec.id + '\')'
          : 'showLesson(\'' + sec.id + '\')';

        html +=
          '<button class="nav-link"' +
            ' data-page-id="' + sec.id + '"' +
            ' data-label-en="' + escapeHtml(labelEn) + '"' +
            ' data-label-ca="' + escapeHtml(labelCa) + '"' +
            ' onclick="' + onclick + '">' +
            '<span class="nav-icon">' + icon + '</span>' +
            '<span class="nav-label"> ' + escapeHtml(labelEn) + '</span>' +
          '</button>';
      });

      html += '</div></div>';
    });

    sidebar.innerHTML = html;

    // Wire toggle buttons
    var toggleBtns = sidebar.querySelectorAll('.sb-chapter-toggle');
    toggleBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-target');
        var targetEl = document.getElementById(targetId);
        if (!targetEl) return;
        var isOpen = targetEl.style.display !== 'none';
        targetEl.style.display = isOpen ? 'none' : '';
        btn.classList.toggle('open', !isOpen);
        var arrow = btn.querySelector('.sb-chapter-arrow');
        if (arrow) arrow.textContent = isOpen ? '▶' : '▼';
      });
    });

    // Open first chapter by default
    var firstSections = sidebar.querySelector('.sb-chapter-sections');
    var firstToggle = sidebar.querySelector('.sb-chapter-toggle');
    if (firstSections) firstSections.style.display = '';
    if (firstToggle) {
      firstToggle.classList.add('open');
      var arrow = firstToggle.querySelector('.sb-chapter-arrow');
      if (arrow) arrow.textContent = '▼';
    }
  }

  // ─── Menu toggle (mobile) ────────────────────────────────────────────────

  function setupMenuToggle() {
    var toggleBtn = document.getElementById('dash-burger-toggle');
    var sidebar = document.getElementById('sb-sidebar');
    if (!toggleBtn || !sidebar) return;

    toggleBtn.addEventListener('click', function () {
      sidebar.classList.toggle('sidebar-open');
    });

    // Close on overlay click
    document.addEventListener('click', function (e) {
      if (sidebar.classList.contains('sidebar-open') &&
          !sidebar.contains(e.target) &&
          e.target !== toggleBtn) {
        sidebar.classList.remove('sidebar-open');
      }
    });
  }

  // ─── Language toggle ─────────────────────────────────────────────────────

  function setLanguage(lang) {
    currentLang = lang === 'ca' ? 'ca' : 'en';
    applyLanguageToSidebar();
    if (typeof Dashboard !== 'undefined') Dashboard.setLanguage(lang);
  }

  function applyLanguageToSidebar() {
    // Chapter toggles
    var toggleBtns = document.querySelectorAll('.sb-chapter-toggle[data-label-en]');
    toggleBtns.forEach(function (btn) {
      var label = currentLang === 'ca'
        ? (btn.getAttribute('data-label-ca') || btn.getAttribute('data-label-en'))
        : btn.getAttribute('data-label-en');
      var titleSpan = btn.querySelector('.sb-chapter-title');
      if (titleSpan) titleSpan.textContent = label;
    });

    // Nav links
    var navLinks = document.querySelectorAll('.nav-link[data-label-en]');
    navLinks.forEach(function (link) {
      var label = currentLang === 'ca'
        ? (link.getAttribute('data-label-ca') || link.getAttribute('data-label-en'))
        : link.getAttribute('data-label-en');
      var labelSpan = link.querySelector('.nav-label');
      if (labelSpan) {
        labelSpan.textContent = ' ' + label;
      }
    });
  }

  // ─── Lesson rendering ─────────────────────────────────────────────────────

  function renderLesson(section, userProgress) {
    currentSectionId = section.id;

    var titleEl = document.getElementById('lesson-title');
    var descEl = document.getElementById('lesson-grammar-text');
    var exContainer = document.getElementById('lesson-exercise-area');

    if (titleEl) titleEl.textContent = section.subtitle || section.id;
    if (descEl) descEl.textContent = section.explanation || '';
    if (!exContainer) return;

    exContainer.innerHTML = '';

    var exercises = section.exercises || [];
    if (exercises.length === 0) {
      exContainer.innerHTML = '<p class="no-exercises">No exercises available for this section yet.</p>';
      return;
    }

    renderExerciseSet(exContainer, section.id, exercises, 'grammar', function (correct, total) {
      onSectionComplete(section, correct, total, 'grammar');
    });
  }

  // ─── Vocabulary rendering ─────────────────────────────────────────────────

  function renderVocab(section, userProgress) {
    currentSectionId = section.id;

    var titleEl = document.getElementById('voc-title');
    var container = document.getElementById('voc-exercise-area');

    if (titleEl) titleEl.textContent = section.subtitle || section.id;
    if (!container) return;

    container.innerHTML = '';

    var words = section.words || [];
    var exercises = section.exercises || [];

    if (words.length > 0) {
      renderFlashcardStudy(container, section.id, words, function () {
        // After study phase, show exercises
        container.innerHTML = '';
        if (exercises.length === 0) {
          showVocabComplete(container, section, 0, 0);
          return;
        }
        renderExerciseSet(container, section.id, exercises, 'vocabulary', function (correct, total) {
          onSectionComplete(section, correct, total, 'vocabulary');
        });
      });
    } else if (exercises.length > 0) {
      renderExerciseSet(container, section.id, exercises, 'vocabulary', function (correct, total) {
        onSectionComplete(section, correct, total, 'vocabulary');
      });
    } else {
      container.innerHTML = '<p class="no-exercises">No vocabulary content available yet.</p>';
    }
  }

  // ─── Flashcard study phase ────────────────────────────────────────────────

  function renderFlashcardStudy(container, sectionId, words, onComplete) {
    var current = 0;
    var knownCount = 0;

    function showCard() {
      if (current >= words.length) {
        if (typeof Analytics !== 'undefined') Analytics.trackVocabStudied(sectionId, words.length);
        container.innerHTML =
          '<div class="voc-study-done">' +
            '<div class="voc-study-done-icon">📚</div>' +
            '<h3>Study phase complete!</h3>' +
            '<p>You knew <strong>' + knownCount + '</strong> of <strong>' + words.length + '</strong> words.</p>' +
            '<button class="btn-primary" id="voc-proceed-btn">Start Exercises →</button>' +
          '</div>';
        var proceedBtn = document.getElementById('voc-proceed-btn');
        if (proceedBtn) proceedBtn.addEventListener('click', onComplete);
        return;
      }

      var word = words[current];
      var pct = Math.round((current / words.length) * 100);

      container.innerHTML =
        '<div class="voc-study-header">' +
          '<div class="voc-study-progress-bar"><div class="voc-study-progress-fill" style="width:' + pct + '%"></div></div>' +
          '<div class="voc-study-counter">' + (current + 1) + ' / ' + words.length + '</div>' +
        '</div>' +
        '<div class="voc-flashcard" id="voc-flashcard">' +
          '<div class="voc-flashcard-inner" id="voc-flashcard-inner">' +
            '<div class="voc-flashcard-front">' +
              '<div class="voc-card-word">' + escapeHtml(word.ca || word.word || '') + '</div>' +
              (word.pronunciation ? '<div class="voc-card-pron">[' + escapeHtml(word.pronunciation) + ']</div>' : '') +
              '<div class="voc-card-tap">Tap to reveal</div>' +
            '</div>' +
            '<div class="voc-flashcard-back">' +
              '<div class="voc-card-translation">' + escapeHtml(word.en || word.translation || '') + '</div>' +
              (word.example ? '<div class="voc-card-example">' + escapeHtml(word.example) + '</div>' : '') +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="voc-study-actions" id="voc-study-actions" style="display:none">' +
          '<button class="btn-secondary voc-didnt-know" id="voc-didnt-know">✗ Didn\'t know</button>' +
          '<button class="btn-primary voc-got-it" id="voc-got-it">✓ Got it!</button>' +
        '</div>';

      var flashcard = document.getElementById('voc-flashcard');
      var actions = document.getElementById('voc-study-actions');
      var flipped = false;

      if (flashcard) {
        flashcard.addEventListener('click', function () {
          if (!flipped) {
            flashcard.classList.add('flipped');
            if (actions) actions.style.display = '';
            flipped = true;
          }
        });
      }

      var gotItBtn = document.getElementById('voc-got-it');
      var didntKnowBtn = document.getElementById('voc-didnt-know');

      if (gotItBtn) {
        gotItBtn.addEventListener('click', function () {
          knownCount++;
          if (typeof SpacedRepetition !== 'undefined') {
            SpacedRepetition.recordAnswer(sectionId, 'flashcard', current, true, 'vocabulary');
          }
          current++;
          showCard();
        });
      }

      if (didntKnowBtn) {
        didntKnowBtn.addEventListener('click', function () {
          if (typeof SpacedRepetition !== 'undefined') {
            SpacedRepetition.recordAnswer(sectionId, 'flashcard', current, false, 'vocabulary');
          }
          current++;
          showCard();
        });
      }
    }

    showCard();
  }

  // ─── Exercise set rendering ───────────────────────────────────────────────

  function renderExerciseSet(container, sectionId, exercises, sectionType, onComplete) {
    // Flatten exercises into individual items
    var items = [];
    exercises.forEach(function (ex) {
      (ex.items || []).forEach(function (item, idx) {
        items.push({ ex: ex, item: item, itemIdx: idx });
      });
    });

    if (items.length === 0) {
      container.innerHTML = '<p class="no-exercises">No exercises available.</p>';
      return;
    }

    var current = 0;
    var correctCount = 0;

    function showItem() {
      if (current >= items.length) {
        showSectionComplete(container, sectionId, correctCount, items.length, sectionType, onComplete);
        return;
      }

      var entry = items[current];
      var pct = Math.round((current / items.length) * 100);

      var progressHtml =
        '<div class="ex-progress-bar"><div class="ex-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="ex-counter">' + (current + 1) + ' / ' + items.length + '</div>';

      var exHtml = renderExerciseItem(entry.ex, entry.item, entry.itemIdx, sectionId);
      container.innerHTML = progressHtml + exHtml;

      attachExerciseHandlers(container, entry.ex, entry.item, entry.itemIdx, sectionId, sectionType, function (correct) {
        recordExerciseAnswer(sectionId, correct);
        if (typeof SpacedRepetition !== 'undefined') {
          SpacedRepetition.recordAnswer(sectionId, entry.ex.type, entry.itemIdx, correct, sectionType);
        }
        if (correct) correctCount++;
        current++;
        setTimeout(showItem, 700);
      });
    }

    showItem();
  }

  // ─── Single exercise item HTML ────────────────────────────────────────────

  function renderExerciseItem(ex, item, itemIdx, sectionId) {
    var type = ex.type;
    var html = '<div class="ex-card ex-type-' + type + '">';

    if (ex.instruction) {
      html += '<div class="ex-instruction">' + escapeHtml(ex.instruction) + '</div>';
    }

    switch (type) {

      case 'fillblank': {
        var parts = (item.sentence || item.prompt || '').split('___');
        html += '<div class="fb-sentence">';
        parts.forEach(function (part, i) {
          html += '<span class="fb-text">' + escapeHtml(part) + '</span>';
          if (i < parts.length - 1) {
            html += '<input type="text" class="fb-input" data-ex-input="true" autocomplete="off" spellcheck="false" placeholder="…"/>';
          }
        });
        html += '</div>';
        if (item.hint) html += '<div class="ex-hint">' + escapeHtml(item.hint) + '</div>';
        html += '<button class="btn-check fb-check-btn">Check</button>';
        html += '<div class="ex-feedback"></div>';
        break;
      }

      case 'multichoice': {
        html += '<div class="mc-question">' + escapeHtml(item.sentence || item.question || '') + '</div>';
        html += '<div class="mc-options">';
        (item.options || []).forEach(function (opt, i) {
          html += '<button class="mc-option" data-opt-idx="' + i + '">' + escapeHtml(opt) + '</button>';
        });
        html += '</div>';
        html += '<div class="ex-feedback"></div>';
        break;
      }

      case 'matching': {
        // Show left side, user types right
        html += '<div class="match-prompt">Match: <strong>' + escapeHtml(item.left || item.prompt || '') + '</strong></div>';
        html += '<input type="text" class="fb-input match-input" data-ex-input="true" autocomplete="off" spellcheck="false" placeholder="Type the matching term…"/>';
        if (item.hint) html += '<div class="ex-hint">' + escapeHtml(item.hint) + '</div>';
        html += '<button class="btn-check match-check-btn">Check</button>';
        html += '<div class="ex-feedback"></div>';
        break;
      }

      case 'sorting': {
        html += '<div class="sort-question">' + escapeHtml(item.question || item.prompt || '') + '</div>';
        html += '<div class="sort-categories">';
        (item.categories || []).forEach(function (cat, ci) {
          html += '<div class="sort-category" data-cat-idx="' + ci + '">' +
                    '<div class="sort-cat-label">' + escapeHtml(cat) + '</div>' +
                    '<div class="sort-cat-drop"></div>' +
                  '</div>';
        });
        html += '</div>';
        html += '<div class="sort-items">';
        var shuffled = (item.items || []).slice().sort(function () { return Math.random() - 0.5; });
        shuffled.forEach(function (si, idx) {
          html += '<button class="sort-item" data-item-text="' + escapeHtml(si.text || si) + '" data-item-idx="' + idx + '">' +
                    escapeHtml(si.text || si) + '</button>';
        });
        html += '</div>';
        html += '<button class="btn-check sort-check-btn">Check</button>';
        html += '<div class="ex-feedback"></div>';
        break;
      }

      case 'transformation': {
        html += '<div class="tf-prompt">' + escapeHtml(item.prompt || item.original || '') + '</div>';
        if (item.instruction) html += '<div class="tf-instruction">' + escapeHtml(item.instruction) + '</div>';
        html += '<input type="text" class="fb-input tf-input" data-ex-input="true" autocomplete="off" spellcheck="false" placeholder="Transform…"/>';
        if (item.hint) html += '<div class="ex-hint">' + escapeHtml(item.hint) + '</div>';
        html += '<button class="btn-check tf-check-btn">Check</button>';
        html += '<div class="ex-feedback"></div>';
        break;
      }

      case 'reorder': {
        html += '<div class="ro-instruction">' + escapeHtml(item.instruction || 'Put the words in the correct order:') + '</div>';
        html += '<div class="ro-built" id="ro-built-' + itemIdx + '"></div>';
        var tokens = (item.words || []).slice().sort(function () { return Math.random() - 0.5; });
        html += '<div class="ro-tokens" id="ro-tokens-' + itemIdx + '">';
        tokens.forEach(function (tok, ti) {
          html += '<button class="ro-token" data-token="' + escapeHtml(tok) + '" data-ti="' + ti + '">' + escapeHtml(tok) + '</button>';
        });
        html += '</div>';
        html += '<button class="btn-secondary ro-clear-btn" style="margin-right:8px">Clear</button>';
        html += '<button class="btn-check ro-check-btn">Check</button>';
        html += '<div class="ex-feedback"></div>';
        break;
      }

      default: {
        html += '<p>Unsupported exercise type: ' + escapeHtml(type) + '</p>';
        html += '<button class="btn-secondary ex-skip-btn">Skip</button>';
        break;
      }
    }

    html += '</div>'; // .ex-card
    return html;
  }

  // ─── Exercise event handlers ──────────────────────────────────────────────

  function attachExerciseHandlers(container, ex, item, itemIdx, sectionId, sectionType, callback) {
    var type = ex.type;
    var feedback = container.querySelector('.ex-feedback');

    function showFeedback(correct, correctAnswer) {
      if (!feedback) return;
      feedback.textContent = correct
        ? '✓ Correct!'
        : '✗ Answer: ' + correctAnswer;
      feedback.className = 'ex-feedback ' + (correct ? 'correct-fb' : 'wrong-fb');
    }

    function normalise(s) {
      return String(s || '').toLowerCase().trim()
        .replace(/[.,!?;:]/g, '');
    }

    switch (type) {

      case 'fillblank': {
        var checkBtn = container.querySelector('.fb-check-btn');
        var inputs = container.querySelectorAll('.fb-input[data-ex-input]');

        var doCheck = function () {
          var answers = item.answers || (item.answer ? [item.answer] : []);
          var correct = true;
          inputs.forEach(function (inp, i) {
            var expected = answers[i] || answers[0] || '';
            if (normalise(inp.value) !== normalise(expected)) correct = false;
          });
          var displayAnswer = (item.answers || [item.answer]).join(', ');
          showFeedback(correct, displayAnswer);
          inputs.forEach(function (inp) { inp.disabled = true; });
          if (checkBtn) checkBtn.disabled = true;
          callback(correct);
        };

        if (checkBtn) checkBtn.addEventListener('click', doCheck);
        inputs.forEach(function (inp) {
          inp.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') doCheck();
          });
        });
        // Focus first input
        if (inputs[0]) setTimeout(function () { inputs[0].focus(); }, 50);
        break;
      }

      case 'multichoice': {
        var opts = container.querySelectorAll('.mc-option');
        opts.forEach(function (btn) {
          btn.addEventListener('click', function () {
            var idx = parseInt(btn.getAttribute('data-opt-idx'), 10);
            var correctIdx = item.answer !== undefined ? item.answer : item.correctIndex;
            var correct = idx === correctIdx;
            showFeedback(correct, item.options ? item.options[correctIdx] : '');
            opts.forEach(function (b) {
              b.disabled = true;
              if (parseInt(b.getAttribute('data-opt-idx'), 10) === correctIdx) {
                b.classList.add('correct');
              }
            });
            btn.classList.add(correct ? 'correct' : 'wrong');
            callback(correct);
          });
        });
        break;
      }

      case 'matching': {
        var matchCheck = container.querySelector('.match-check-btn');
        var matchInput = container.querySelector('.match-input');
        var doMatchCheck = function () {
          var expected = item.right || item.answer || '';
          var correct = normalise(matchInput.value) === normalise(expected);
          showFeedback(correct, expected);
          if (matchInput) matchInput.disabled = true;
          if (matchCheck) matchCheck.disabled = true;
          callback(correct);
        };
        if (matchCheck) matchCheck.addEventListener('click', doMatchCheck);
        if (matchInput) {
          matchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') doMatchCheck();
          });
          setTimeout(function () { matchInput.focus(); }, 50);
        }
        break;
      }

      case 'sorting': {
        var selected = null; // currently selected item button
        var assignments = {}; // itemText -> categoryIdx

        var itemBtns = container.querySelectorAll('.sort-item');
        var catDrops = container.querySelectorAll('.sort-cat-drop');
        var sortCheckBtn = container.querySelector('.sort-check-btn');

        itemBtns.forEach(function (btn) {
          btn.addEventListener('click', function () {
            itemBtns.forEach(function (b) { b.classList.remove('selected'); });
            if (selected === btn) {
              selected = null;
            } else {
              selected = btn;
              btn.classList.add('selected');
            }
          });
        });

        catDrops.forEach(function (drop) {
          drop.addEventListener('click', function () {
            if (!selected) return;
            var catIdx = parseInt(drop.closest('.sort-category').getAttribute('data-cat-idx'), 10);
            var itemText = selected.getAttribute('data-item-text');
            assignments[itemText] = catIdx;

            // Move button into drop zone visually
            drop.appendChild(selected);
            selected.classList.remove('selected');
            selected = null;
          });
        });

        if (sortCheckBtn) {
          sortCheckBtn.addEventListener('click', function () {
            var correct = true;
            (item.items || []).forEach(function (si) {
              var text = si.text || si;
              var expectedCat = si.category !== undefined ? si.category : -1;
              if (assignments[text] !== expectedCat) correct = false;
            });
            var answerStr = (item.items || []).map(function (si) {
              return (si.text || si) + ' → ' + ((item.categories || [])[si.category] || '?');
            }).join(', ');
            showFeedback(correct, answerStr);
            itemBtns.forEach(function (b) { b.disabled = true; });
            sortCheckBtn.disabled = true;
            callback(correct);
          });
        }
        break;
      }

      case 'transformation': {
        var tfCheck = container.querySelector('.tf-check-btn');
        var tfInput = container.querySelector('.tf-input');
        var doTfCheck = function () {
          var expected = item.answer || '';
          var correct = normalise(tfInput.value) === normalise(expected);
          showFeedback(correct, expected);
          if (tfInput) tfInput.disabled = true;
          if (tfCheck) tfCheck.disabled = true;
          callback(correct);
        };
        if (tfCheck) tfCheck.addEventListener('click', doTfCheck);
        if (tfInput) {
          tfInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') doTfCheck();
          });
          setTimeout(function () { tfInput.focus(); }, 50);
        }
        break;
      }

      case 'reorder': {
        var builtEl = document.getElementById('ro-built-' + itemIdx);
        var tokensEl = document.getElementById('ro-tokens-' + itemIdx);
        var roCheckBtn = container.querySelector('.ro-check-btn');
        var roClearBtn = container.querySelector('.ro-clear-btn');
        var builtWords = [];

        var roTokenBtns = container.querySelectorAll('.ro-token');

        function refreshBuilt() {
          if (!builtEl) return;
          builtEl.innerHTML = '';
          builtWords.forEach(function (tok, i) {
            var span = document.createElement('span');
            span.className = 'ro-built-token';
            span.textContent = tok;
            span.addEventListener('click', function () {
              // Remove from built, put back in pool
              builtWords.splice(i, 1);
              refreshBuilt();
              refreshTokens();
            });
            builtEl.appendChild(span);
          });
        }

        var usedTokens = {};
        function refreshTokens() {
          roTokenBtns.forEach(function (btn) {
            var ti = btn.getAttribute('data-ti');
            btn.style.display = usedTokens[ti] ? 'none' : '';
          });
        }

        roTokenBtns.forEach(function (btn) {
          btn.addEventListener('click', function () {
            var tok = btn.getAttribute('data-token');
            var ti = btn.getAttribute('data-ti');
            if (usedTokens[ti]) return;
            usedTokens[ti] = true;
            builtWords.push(tok);
            refreshBuilt();
            refreshTokens();
          });
        });

        if (roClearBtn) {
          roClearBtn.addEventListener('click', function () {
            builtWords = [];
            usedTokens = {};
            refreshBuilt();
            refreshTokens();
          });
        }

        if (roCheckBtn) {
          roCheckBtn.addEventListener('click', function () {
            var rawAnswer = item.answer || '';
            var expected = Array.isArray(rawAnswer) ? rawAnswer.join(' ') : rawAnswer;
            var built = builtWords.join(' ');
            var correct = normalise(built) === normalise(expected);
            showFeedback(correct, expected);
            roTokenBtns.forEach(function (b) { b.disabled = true; });
            roCheckBtn.disabled = true;
            if (roClearBtn) roClearBtn.disabled = true;
            callback(correct);
          });
        }
        break;
      }

      default: {
        var skipBtn = container.querySelector('.ex-skip-btn');
        if (skipBtn) {
          skipBtn.addEventListener('click', function () { callback(false); });
        }
        break;
      }
    }
  }

  // ─── Section complete screens ────────────────────────────────────────────

  function showSectionComplete(container, sectionId, correct, total, sectionType, onComplete) {
    var xp = correct * 10;
    var pct = total > 0 ? Math.round((correct / total) * 100) : 0;

    updateSectionScore(sectionId, correct, total);
    updateStreak();

    if (typeof onComplete === 'function') onComplete(correct, total);

    // Refresh dashboard if visible
    if (typeof Dashboard !== 'undefined') {
      var userData = Dashboard.getUserData();
      var dashEl = document.getElementById('dashboard');
      if (dashEl && dashEl.classList.contains('page-active')) {
        Dashboard.render(userData);
      }
    }

    container.innerHTML =
      '<div class="section-complete">' +
        '<div class="section-complete-icon">' + (pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪') + '</div>' +
        '<h2>Section Complete!</h2>' +
        '<div class="section-complete-score">' +
          '<span class="score-correct">' + correct + '</span> / ' + total + ' correct' +
        '</div>' +
        '<div class="section-complete-xp">+' + xp + ' XP</div>' +
        '<div class="section-complete-actions">' +
          '<button class="btn-secondary" onclick="showPage(\'dashboard-page\')">Dashboard</button>' +
          '<button class="btn-primary" onclick="' +
            (sectionType === 'vocabulary' ? 'showVocab' : 'showLesson') +
            '(\'' + sectionId + '\')">Try Again</button>' +
        '</div>' +
      '</div>';
  }

  function showVocabComplete(container, section, correct, total) {
    container.innerHTML =
      '<div class="section-complete">' +
        '<div class="section-complete-icon">📚</div>' +
        '<h2>Vocabulary Complete!</h2>' +
        '<p>You studied all the words in this set.</p>' +
        '<div class="section-complete-actions">' +
          '<button class="btn-secondary" onclick="showPage(\'dashboard-page\')">Dashboard</button>' +
          '<button class="btn-primary" onclick="showVocab(\'' + section.id + '\')">Study Again</button>' +
        '</div>' +
      '</div>';
  }

  function onSectionComplete(section, correct, total, sectionType) {
    if (typeof Analytics !== 'undefined') {
      Analytics.trackLessonCompleted(section.id, sectionType, correct, total);
    }
  }

  // ─── initApp ──────────────────────────────────────────────────────────────

  function initApp() {
    buildSidebar();
    setupMenuToggle();

    // Wire language toggle buttons if present
    var langBtns = document.querySelectorAll('[data-lang]');
    langBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        setLanguage(lang);
        langBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
      });
    });

    // Wire all sidebar nav links via data-page attribute
    document.querySelectorAll('.sb-nav-link[data-page]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var page = link.getAttribute('data-page');

        // Update active state
        document.querySelectorAll('.sb-nav-link').forEach(function (l) { l.classList.remove('sb-nav-link--active'); });
        link.classList.add('sb-nav-link--active');

        if (page === 'dashboard') {
          showPage('dashboard-page');
          if (typeof Dashboard !== 'undefined') Dashboard.render(Dashboard.getUserData());
        } else if (page === 'lessons') {
          // Grammar: stay on dashboard, expand sidebar
          showPage('dashboard-page');
          if (typeof Dashboard !== 'undefined') Dashboard.render(Dashboard.getUserData());
          var sb = document.getElementById('sb-chapters');
          if (sb) sb.scrollIntoView({ behavior: 'smooth' });
        } else if (page === 'vocabulary-page') {
          // Vocabulary: open first vocab section
          var firstVocab = _findFirstSectionOfType('vocabulary');
          if (firstVocab) showVocab(firstVocab.id);
        } else if (page === 'review-page') {
          showPage('review-page');
          if (typeof SpacedRepetition !== 'undefined') SpacedRepetition.renderReviewPage();
        } else if (page === 'study-plan-page') {
          showPage('study-plan-page');
        } else if (page === 'progress-page') {
          showPage('progress-page');
        }
      });
    });

    // Back buttons
    document.querySelectorAll('.btn-back').forEach(function (btn) {
      btn.addEventListener('click', function () {
        showPage('dashboard-page');
        document.querySelectorAll('.sb-nav-link').forEach(function (l) { l.classList.remove('sb-nav-link--active'); });
        var dashLink = document.querySelector('.sb-nav-link[data-page="dashboard"]');
        if (dashLink) dashLink.classList.add('sb-nav-link--active');
        if (typeof Dashboard !== 'undefined') Dashboard.render(Dashboard.getUserData());
      });
    });

    // Wire sign-out
    var signOutBtns = document.querySelectorAll('[data-action="signout"], .signout-btn, #btn-signout');
    signOutBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (typeof Auth !== 'undefined') Auth.signOut();
      });
    });

    // Initialize spaced repetition due count badge
    updateDueBadge();

    // Refresh dashboard
    if (typeof Dashboard !== 'undefined') {
      Dashboard.render(Dashboard.getUserData());
    }
  }

  function updateDueBadge() {
    var badge = document.getElementById('review-due-badge');
    if (!badge) return;
    var count = typeof SpacedRepetition !== 'undefined' ? SpacedRepetition.getDueCount() : 0;
    badge.textContent = count > 0 ? count : '';
    badge.style.display = count > 0 ? '' : 'none';
  }

  // ─── Public API ──────────────────────────────────────────────────────────

  return {
    initApp: initApp,
    renderLesson: renderLesson,
    renderVocab: renderVocab,
    setLanguage: setLanguage,
    updateDueBadge: updateDueBadge
  };

})();
