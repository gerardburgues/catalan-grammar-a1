'use strict';

// SpacedRepetition — SM-2 algorithm, localStorage-based
const SpacedRepetition = (function () {
  'use strict';

  var STORAGE_KEY = 'parlaara_reviewItems';

  // ─── Helpers ────────────────────────────────────────────────────────────────

  function today() {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  }

  function daysFromNow(n) {
    return today() + n * 24 * 60 * 60 * 1000;
  }

  function loadItems() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.warn('[SpacedRepetition] Failed to parse reviewItems:', e);
      return {};
    }
  }

  function saveItems(items) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('[SpacedRepetition] Failed to save reviewItems:', e);
    }
  }

  function makeKey(sectionId, exerciseType, itemIdx) {
    return sectionId + '::' + exerciseType + '::' + itemIdx;
  }

  // ─── SM-2 core ──────────────────────────────────────────────────────────────

  /**
   * recordAnswer(sectionId, exerciseType, itemIdx, correct, sectionType)
   *
   * sectionType: 'grammar' | 'vocabulary'
   */
  function recordAnswer(sectionId, exerciseType, itemIdx, correct, sectionType) {
    var items = loadItems();
    var key = makeKey(sectionId, exerciseType, itemIdx);
    var item = items[key];

    if (!item) {
      // Brand-new item
      item = {
        sectionId: sectionId,
        sectionType: sectionType || 'grammar',
        exerciseType: exerciseType,
        itemIdx: itemIdx,
        interval: 0,
        easeFactor: 2.5,
        nextReview: today(),
        lastReviewed: null,
        repetitions: 0
      };
    }

    var now = Date.now();

    if (correct) {
      if (item.repetitions === 0) {
        // First correct answer
        item.interval = 1;
        item.nextReview = daysFromNow(1);
      } else if (item.repetitions === 1) {
        item.interval = 3;
        item.nextReview = daysFromNow(3);
      } else {
        item.interval = Math.round(item.interval * item.easeFactor);
        item.nextReview = daysFromNow(item.interval);
      }
      item.repetitions += 1;
      item.easeFactor = Math.max(1.3, item.easeFactor + 0.1);
    } else {
      item.repetitions = 0;
      item.interval = 1;
      item.easeFactor = Math.max(1.3, item.easeFactor - 0.2);
      item.nextReview = daysFromNow(1);
    }

    item.lastReviewed = now;
    items[key] = item;
    saveItems(items);
  }

  /**
   * getDueItems(sectionType?)
   *
   * Returns items where nextReview <= today's timestamp.
   * Optional sectionType filter: 'grammar' | 'vocabulary'
   */
  function getDueItems(sectionType) {
    var items = loadItems();
    var now = today();
    var due = [];

    Object.keys(items).forEach(function (key) {
      var item = items[key];
      if (item.nextReview <= now) {
        if (!sectionType || item.sectionType === sectionType) {
          due.push(Object.assign({}, item, { key: key }));
        }
      }
    });

    // Sort by nextReview ascending (most overdue first)
    due.sort(function (a, b) { return a.nextReview - b.nextReview; });
    return due;
  }

  /**
   * getDueCount(sectionType?)
   */
  function getDueCount(sectionType) {
    return getDueItems(sectionType).length;
  }

  /**
   * getAllItems(sectionType?)
   */
  function getAllItems(sectionType) {
    var items = loadItems();
    var result = [];
    Object.keys(items).forEach(function (key) {
      var item = items[key];
      if (!sectionType || item.sectionType === sectionType) {
        result.push(Object.assign({}, item, { key: key }));
      }
    });
    return result;
  }

  /**
   * getWeakSections(n)
   * Returns the top n sections with the most wrong answers (interval=1, easeFactor low).
   */
  function getWeakSections(n) {
    var items = loadItems();
    var sectionScores = {};

    Object.keys(items).forEach(function (key) {
      var item = items[key];
      var sid = item.sectionId;
      if (!sectionScores[sid]) {
        sectionScores[sid] = { sectionId: sid, sectionType: item.sectionType, weakCount: 0, total: 0 };
      }
      sectionScores[sid].total += 1;
      if (item.easeFactor < 2.0 || item.repetitions === 0) {
        sectionScores[sid].weakCount += 1;
      }
    });

    return Object.values(sectionScores)
      .filter(function (s) { return s.weakCount > 0; })
      .sort(function (a, b) { return b.weakCount - a.weakCount; })
      .slice(0, n || 3);
  }

  // ─── Review page rendering ──────────────────────────────────────────────────

  function renderReviewPage() {
    var page = document.getElementById('review-page');
    if (!page) return;

    var container = document.getElementById('review-exercises');
    if (!container) {
      container = document.createElement('div');
      container.id = 'review-exercises';
      page.appendChild(container);
    }

    var dueItems = getDueItems();

    if (dueItems.length === 0) {
      container.innerHTML =
        '<div class="review-complete">' +
          '<div class="review-complete-icon">🎉</div>' +
          '<h2>All caught up! <span class="ca-label">Tot al dia!</span></h2>' +
          '<p>No items due for review right now. Come back later or start a new lesson.</p>' +
          '<button class="btn-primary" onclick="showPage(\'dashboard\')">Back to Dashboard</button>' +
        '</div>';
      return;
    }

    var total = dueItems.length;
    var current = 0;

    function renderItem() {
      if (current >= dueItems.length) {
        showComplete();
        return;
      }

      var item = dueItems[current];
      var section = null;

      // Find the section data from DATA
      if (typeof DATA !== 'undefined' && DATA.chapters) {
        DATA.chapters.forEach(function (ch) {
          if (ch.sections) {
            ch.sections.forEach(function (sec) {
              if (sec.id === item.sectionId) section = sec;
            });
          }
        });
      }

      var pct = Math.round((current / total) * 100);
      var html = '<div class="review-progress-bar"><div class="review-progress-fill" style="width:' + pct + '%"></div></div>' +
                 '<div class="review-counter">' + (current + 1) + ' / ' + total + '</div>';

      if (!section) {
        // Section not found, skip
        current++;
        renderItem();
        return;
      }

      // Find the exercise and item
      var exercises = section.exercises || [];
      var exType = item.exerciseType;
      var ex = null;

      exercises.forEach(function (e) {
        if (e.type === exType && !ex) ex = e;
      });

      if (!ex || !ex.items || !ex.items[item.itemIdx]) {
        current++;
        renderItem();
        return;
      }

      var exItem = ex.items[item.itemIdx];
      html += '<div class="review-section-label">' +
              '<span class="review-section-type">' + (item.sectionType === 'vocabulary' ? '📚 Vocab' : '📖 Grammar') + '</span> ' +
              (section.title || item.sectionId) +
              '</div>';

      html += renderSingleExercise(ex, exItem, item, function (correct) {
        recordAnswer(item.sectionId, item.exerciseType, item.itemIdx, correct, item.sectionType);
        current++;
        setTimeout(renderItem, 800);
      });

      container.innerHTML = html;
      attachReviewHandlers(container, exItem, item, function (correct) {
        recordAnswer(item.sectionId, item.exerciseType, item.itemIdx, correct, item.sectionType);
        current++;
        setTimeout(renderItem, 800);
      });
    }

    function showComplete() {
      container.innerHTML =
        '<div class="review-complete">' +
          '<div class="review-complete-icon">✅</div>' +
          '<h2>Review Complete! <span class="ca-label">Revisió completada!</span></h2>' +
          '<p>You reviewed ' + total + ' item' + (total !== 1 ? 's' : '') + '. Great work!</p>' +
          '<button class="btn-primary" onclick="showPage(\'dashboard\')">Back to Dashboard</button>' +
        '</div>';
    }

    renderItem();
  }

  function renderSingleExercise(ex, exItem, item, onAnswer) {
    // Returns HTML string for the exercise item (simplified for review)
    var type = ex.type;

    if (type === 'fillblank' || type === 'transformation') {
      var prompt = exItem.prompt || exItem.sentence || '';
      return '<div class="review-exercise fb-exercise">' +
               '<div class="fb-prompt">' + escapeHtmlSafe(prompt) + '</div>' +
               '<input type="text" class="fb-input review-fb-input" placeholder="Type your answer…" />' +
               '<button class="btn-check review-check-btn">Check</button>' +
               '<div class="review-feedback"></div>' +
             '</div>';
    }

    if (type === 'multichoice') {
      var qHtml = '<div class="review-exercise mc-exercise">' +
                  '<div class="mc-question">' + escapeHtmlSafe(exItem.question || '') + '</div>' +
                  '<div class="mc-options">';
      (exItem.options || []).forEach(function (opt, i) {
        qHtml += '<button class="mc-option review-mc-opt" data-idx="' + i + '">' + escapeHtmlSafe(opt) + '</button>';
      });
      qHtml += '</div><div class="review-feedback"></div></div>';
      return qHtml;
    }

    if (type === 'matching') {
      var prompt2 = exItem.left || exItem.prompt || '';
      return '<div class="review-exercise fb-exercise">' +
               '<div class="fb-prompt">Match: <strong>' + escapeHtmlSafe(prompt2) + '</strong></div>' +
               '<input type="text" class="fb-input review-fb-input" placeholder="Type the matching word…" />' +
               '<button class="btn-check review-check-btn">Check</button>' +
               '<div class="review-feedback"></div>' +
             '</div>';
    }

    // Default: skip
    return '<div class="review-exercise"><em>Unsupported type: ' + escapeHtmlSafe(type) + '</em>' +
           '<button class="btn-secondary review-skip-btn">Skip</button></div>';
  }

  function attachReviewHandlers(container, exItem, item, callback) {
    // Fill-blank / transformation check
    var checkBtn = container.querySelector('.review-check-btn');
    var input = container.querySelector('.review-fb-input');
    var feedback = container.querySelector('.review-feedback');

    if (checkBtn && input) {
      var handleCheck = function () {
        var val = input.value.trim().toLowerCase();
        var correct_answer = (exItem.answer || exItem.right || '').toLowerCase().trim();
        var correct = val === correct_answer;
        showReviewFeedback(feedback, correct, exItem.answer || exItem.right || '');
        input.disabled = true;
        checkBtn.disabled = true;
        callback(correct);
      };
      checkBtn.addEventListener('click', handleCheck);
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') handleCheck();
      });
    }

    // Multiple choice
    var mcOpts = container.querySelectorAll('.review-mc-opt');
    if (mcOpts.length > 0) {
      mcOpts.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var idx = parseInt(btn.getAttribute('data-idx'), 10);
          var correct = idx === exItem.correctIndex;
          showReviewFeedback(feedback, correct, exItem.options ? exItem.options[exItem.correctIndex] : '');
          mcOpts.forEach(function (b) { b.disabled = true; });
          btn.classList.add(correct ? 'correct' : 'wrong');
          callback(correct);
        });
      });
    }

    // Skip button
    var skipBtn = container.querySelector('.review-skip-btn');
    if (skipBtn) {
      skipBtn.addEventListener('click', function () { callback(false); });
    }
  }

  function showReviewFeedback(el, correct, answer) {
    if (!el) return;
    el.textContent = correct ? '✓ Correct!' : '✗ Answer: ' + answer;
    el.className = 'review-feedback ' + (correct ? 'correct-fb' : 'wrong-fb');
  }

  function escapeHtmlSafe(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ─── Public API ─────────────────────────────────────────────────────────────

  return {
    recordAnswer: recordAnswer,
    getDueItems: getDueItems,
    getDueCount: getDueCount,
    getAllItems: getAllItems,
    getWeakSections: getWeakSections,
    renderReviewPage: renderReviewPage
  };

})();
