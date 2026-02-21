'use strict';

// Dashboard — renders the main dashboard UI using localStorage data
const Dashboard = (function () {
  'use strict';

  var currentLang = 'en';

  // ─── i18n ────────────────────────────────────────────────────────────────

  var i18n = {
    en: {
      greeting: 'Hello, {name}!',
      subtitle: 'Keep up the great work',
      xpLabel: 'XP Earned',
      lessonsLabel: 'Lessons',
      goalLabel: 'Today',
      reviewTitle: 'Review Mistakes',
      heroLabel: 'Continue Learning',
      startLesson: 'Start \u2192',
      practiceAgain: 'Practice Again \u2192',
      streakDay: 'day streak',
      streakDays: 'day streak',
      tipTitle: '\uD83D\uDCA1 Tip of the Day',
      allClear: 'All clear!',
      allClearSub: 'No mistakes yet. Start a lesson to see weak areas here.',
      browseLessons: 'Browse lessons \u2192',
      progressTitle: 'Overall Progress',
      weeklyTitle: 'This Week',
      chapterTitle: 'Chapters',
      dueReview: 'Due for review',
      noSuggestion: 'Pick a lesson from the sidebar to get started!'
    },
    ca: {
      greeting: 'Hola, {name}!',
      subtitle: 'Continua aix\xED, molt b\xE9!',
      xpLabel: 'XP Guanyats',
      lessonsLabel: 'Lliçons',
      goalLabel: 'Avui',
      reviewTitle: 'Repassar Errors',
      heroLabel: 'Continua Aprenent',
      startLesson: 'Comença \u2192',
      practiceAgain: 'Practica de Nou \u2192',
      streakDay: 'dia seguit',
      streakDays: 'dies seguits',
      tipTitle: '\uD83D\uDCA1 Consell del Dia',
      allClear: 'Tot net!',
      allClearSub: 'Sense errors encara. Comença una lliçó per veure les àrees febles.',
      browseLessons: 'Navega les lliçons \u2192',
      progressTitle: 'Progrés General',
      weeklyTitle: 'Aquesta Setmana',
      chapterTitle: 'Capítols',
      dueReview: 'Pendent de repàs',
      noSuggestion: 'Tria una lliçó del menú per començar!'
    }
  };

  var tips = [
    'Catalan has two genders (masculine and feminine) but no neuter. Most nouns ending in -a are feminine.',
    'The definite articles in Catalan are: el (masc. sing.), la (fem. sing.), els (masc. pl.), les (fem. pl.).',
    'Catalan uses the periphrastic past (vaig + infinitive) more than the simple past in spoken language.',
    'Many Catalan words look similar to Spanish or French — use these cognates to your advantage!',
    'Catalan has two verbs for "to be": ser (permanent) and estar (temporary/location). Just like Spanish!',
    'Practice reading Catalan menus and signs — the vocabulary overlaps heavily with what you learn in lessons.',
    'Catalan vowels can be open or closed, and stressed vs unstressed vowels sound very different. Listen carefully!',
    'The Catalan word "gràcies" (thanks) is a great first word to learn — locals truly appreciate the effort.',
    'Try to find a language exchange partner who speaks Catalan — even 15 minutes of conversation per week helps.',
    'Don\'t skip the review queue! Spaced repetition is the most evidence-backed method for vocabulary retention.'
  ];

  // ─── Data helpers ─────────────────────────────────────────────────────────

  function safeParseLS(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function getUserDataInternal() {
    var scores = safeParseLS('parlaara_scores', {});
    var streak = safeParseLS('parlaara_streak', { count: 0, lastDate: null });
    var history = safeParseLS('parlaara_history', []);
    var user = safeParseLS('parlaara_user', null);

    return {
      scores: scores,
      streak: streak,
      history: history,
      displayName: user ? (user.displayName || (user.email ? user.email.split('@')[0] : 'Learner')) : 'Learner',
      email: user ? user.email : null,
      subscriptionStatus: user ? (user.subscriptionStatus || 'trial') : 'trial'
    };
  }

  function getOverallProgress() {
    var total = 0;
    var started = 0;
    var scores = safeParseLS('parlaara_scores', {});

    if (typeof DATA !== 'undefined' && DATA.chapters) {
      DATA.chapters.forEach(function (ch) {
        (ch.sections || []).forEach(function (sec) {
          total++;
          if (scores[sec.id] && scores[sec.id].completed) started++;
        });
      });
    }

    return { started: started, total: Math.max(total, 1) };
  }

  function getTodayStats() {
    var history = safeParseLS('parlaara_history', []);
    var todayStr = new Date().toISOString().slice(0, 10);
    var count = 0;
    var correct = 0;

    history.forEach(function (entry) {
      if (entry.date === todayStr) {
        count++;
        if (entry.correct) correct++;
      }
    });

    var accuracy = count > 0 ? Math.round((correct / count) * 100) : 0;
    return { count: count, accuracy: accuracy };
  }

  function getWeeklyActivity() {
    var history = safeParseLS('parlaara_history', []);
    var counts = [0, 0, 0, 0, 0, 0, 0]; // Mon=0 … Sun=6
    var now = new Date();
    var dayOfWeek = now.getDay(); // 0=Sun
    // Convert to Mon-based index
    var monBased = (dayOfWeek + 6) % 7;

    history.forEach(function (entry) {
      if (!entry.date) return;
      var d = new Date(entry.date);
      var diffDays = Math.floor((now - d) / (24 * 60 * 60 * 1000));
      if (diffDays >= 0 && diffDays < 7) {
        var entryDow = d.getDay();
        var entryMon = (entryDow + 6) % 7;
        counts[entryMon] += 1;
      }
    });

    return counts;
  }

  function getStreakDays() {
    var streak = safeParseLS('parlaara_streak', { count: 0, lastDate: null });
    return streak.count || 0;
  }

  function getTotalXP() {
    var history = safeParseLS('parlaara_history', []);
    var xp = 0;
    history.forEach(function (entry) {
      if (entry.correct) xp += 10;
    });
    return xp;
  }

  function getSuggestedLesson(userData) {
    if (typeof DATA === 'undefined' || !DATA.chapters) return null;
    var scores = userData.scores || {};
    var first = null;
    var lowest = null;
    var lowestScore = Infinity;

    DATA.chapters.forEach(function (ch) {
      (ch.sections || []).forEach(function (sec) {
        var s = scores[sec.id];
        if (!s || !s.completed) {
          if (!first) first = sec;
        } else {
          var pct = s.correct / Math.max(s.total, 1);
          if (pct < lowestScore) {
            lowestScore = pct;
            lowest = sec;
          }
        }
      });
    });

    return first || lowest || null;
  }

  function getChapterProgress(userData) {
    if (typeof DATA === 'undefined' || !DATA.chapters) return [];
    var scores = userData.scores || {};

    return DATA.chapters.map(function (ch) {
      var total = (ch.sections || []).length;
      var done = (ch.sections || []).filter(function (sec) {
        return scores[sec.id] && scores[sec.id].completed;
      }).length;
      var pct = total > 0 ? Math.round((done / total) * 100) : 0;
      return { title: ch.title || 'Chapter', pct: pct };
    });
  }

  function getTopMistakes(n) {
    // Returns top n sections with lowest accuracy
    var scores = safeParseLS('parlaara_scores', {});
    var items = [];

    if (typeof DATA !== 'undefined' && DATA.chapters) {
      DATA.chapters.forEach(function (ch) {
        (ch.sections || []).forEach(function (sec) {
          var s = scores[sec.id];
          if (s && s.total > 0) {
            var accuracy = s.correct / s.total;
            if (accuracy < 1.0) {
              items.push({ section: sec, accuracy: accuracy, wrong: s.total - s.correct });
            }
          }
        });
      });
    }

    items.sort(function (a, b) { return a.accuracy - b.accuracy; });
    return items.slice(0, n || 3);
  }

  // ─── SVG Progress Ring ────────────────────────────────────────────────────

  function buildProgressRing(pct) {
    var radius = 54;
    var circ = 2 * Math.PI * radius;
    var offset = circ - (pct / 100) * circ;
    return (
      '<svg class="dash-progress-ring" viewBox="0 0 120 120" width="120" height="120">' +
        '<circle cx="60" cy="60" r="' + radius + '" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="10"/>' +
        '<circle cx="60" cy="60" r="' + radius + '" fill="none" stroke="#E63946" stroke-width="10"' +
          ' stroke-dasharray="' + circ.toFixed(2) + '"' +
          ' stroke-dashoffset="' + offset.toFixed(2) + '"' +
          ' stroke-linecap="round"' +
          ' transform="rotate(-90 60 60)"/>' +
        '<text x="60" y="65" text-anchor="middle" fill="#fff" font-size="22" font-weight="700">' + pct + '%</text>' +
      '</svg>'
    );
  }

  // ─── Tip of the Day ───────────────────────────────────────────────────────

  function getDailyTip() {
    var dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / (24 * 60 * 60 * 1000));
    return tips[dayOfYear % tips.length];
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  function render(userData) {
    if (!userData) userData = getUserDataInternal();

    var t = i18n[currentLang] || i18n.en;
    var streak = getStreakDays();
    var xp = getTotalXP();
    var progress = getOverallProgress();
    var todayStats = getTodayStats();
    var weeklyActivity = getWeeklyActivity();
    var chapterProgress = getChapterProgress(userData);
    var suggested = getSuggestedLesson(userData);
    var topMistakes = getTopMistakes(3);
    var dueCount = (typeof SpacedRepetition !== 'undefined') ? SpacedRepetition.getDueCount() : 0;
    var progressPct = Math.round((progress.started / progress.total) * 100);

    var greeting = t.greeting.replace('{name}', userData.displayName || 'Learner');

    // ── Header ──
    var headerHtml =
      '<div class="dash-header">' +
        '<div class="dash-greeting">' +
          '<h1>' + escapeHtml(greeting) + '</h1>' +
          '<p class="dash-subtitle">' + t.subtitle + '</p>' +
        '</div>' +
        '<div class="dash-streak-pill">' +
          '<span class="streak-fire">🔥</span>' +
          '<span class="streak-count">' + streak + '</span>' +
          '<span class="streak-label">&nbsp;' + (streak === 1 ? t.streakDay : t.streakDays) + '</span>' +
        '</div>' +
      '</div>';

    // ── Stats row ──
    var statsHtml =
      '<div class="dash-stats-row">' +
        '<div class="dash-stat-card">' +
          '<div class="dash-stat-value">' + xp + '</div>' +
          '<div class="dash-stat-label">' + t.xpLabel + '</div>' +
        '</div>' +
        '<div class="dash-stat-card">' +
          '<div class="dash-stat-value">' + progress.started + ' <span class="dash-stat-total">/ ' + progress.total + '</span></div>' +
          '<div class="dash-stat-label">' + t.lessonsLabel + '</div>' +
        '</div>' +
        '<div class="dash-stat-card clickable" id="dash-daily-goal-card">' +
          '<div class="dash-stat-value">' + todayStats.count + '</div>' +
          '<div class="dash-stat-label">' + t.goalLabel + '</div>' +
        '</div>' +
        (dueCount > 0 ?
          '<div class="dash-stat-card dash-stat-card--review" onclick="showPage(\'review-page\')">' +
            '<div class="dash-stat-value">' + dueCount + '</div>' +
            '<div class="dash-stat-label">' + t.dueReview + '</div>' +
          '</div>' : ''
        ) +
      '</div>';

    // ── Hero: Continue Learning ──
    var heroHtml = '<div class="dash-hero-card">' +
      '<div class="dash-hero-label">' + t.heroLabel + '</div>';
    if (suggested) {
      var isVocab = suggested.type === 'vocabulary';
      var scores = userData.scores || {};
      var hasScore = scores[suggested.id] && scores[suggested.id].completed;
      var actionLabel = hasScore ? t.practiceAgain : t.startLesson;
      var onclickStr = isVocab
        ? 'showVocab(\'' + suggested.id + '\')'
        : 'showLesson(\'' + suggested.id + '\')';
      heroHtml +=
        '<h2 class="dash-hero-title">' + escapeHtml(suggested.navLabelEn || (suggested.subtitle ? suggested.subtitle.split('—')[0].trim() : suggested.id)) + '</h2>' +
        '<p class="dash-hero-sub">' + (isVocab ? '📚 Vocabulary' : '📖 Grammar') + '</p>' +
        '<button class="btn-primary dash-hero-btn" onclick="' + onclickStr + '">' + actionLabel + '</button>';
    } else {
      heroHtml +=
        '<p class="dash-hero-empty">' + t.noSuggestion + '</p>' +
        '<button class="btn-secondary" onclick="showPage(\'lessons\')">' + t.browseLessons + '</button>';
    }
    heroHtml += '</div>';

    // ── Review mistakes ──
    var reviewHtml = '<div class="dash-review-section">' +
      '<h3 class="dash-section-title">' + t.reviewTitle + '</h3>';
    if (topMistakes.length === 0) {
      reviewHtml +=
        '<div class="dash-all-clear">' +
          '<div class="dash-all-clear-icon">✅</div>' +
          '<div><strong>' + t.allClear + '</strong><br><span>' + t.allClearSub + '</span></div>' +
        '</div>';
    } else {
      reviewHtml += '<div class="dash-mistake-list">';
      topMistakes.forEach(function (item) {
        var isVocab = item.section.type === 'vocabulary';
        var onclickStr = isVocab
          ? 'showVocab(\'' + item.section.id + '\')'
          : 'showLesson(\'' + item.section.id + '\')';
        var accPct = Math.round(item.accuracy * 100);
        reviewHtml +=
          '<div class="dash-mistake-item" onclick="' + onclickStr + '">' +
            '<span class="dash-mistake-icon">' + (isVocab ? '📚' : '📖') + '</span>' +
            '<div class="dash-mistake-info">' +
              '<div class="dash-mistake-title">' + escapeHtml(item.section.navLabelEn || (item.section.subtitle ? item.section.subtitle.split('—')[0].trim() : item.section.id)) + '</div>' +
              '<div class="dash-mistake-acc">' + accPct + '% accuracy &middot; ' + item.wrong + ' wrong</div>' +
            '</div>' +
            '<div class="dash-mistake-arrow">\u2192</div>' +
          '</div>';
      });
      reviewHtml += '</div>';
    }
    reviewHtml += '</div>';

    // ── Right panel ──
    // Progress ring
    var ringHtml =
      '<div class="dash-panel-card">' +
        '<div class="dash-panel-card-title">' + t.progressTitle + '</div>' +
        '<div class="dash-progress-ring-wrap">' + buildProgressRing(progressPct) + '</div>' +
        '<div class="dash-progress-sub">' + progress.started + ' of ' + progress.total + ' sections</div>' +
      '</div>';

    // Chapter bars
    var chapBarsHtml = '<div class="dash-panel-card">' +
      '<div class="dash-panel-card-title">' + t.chapterTitle + '</div>' +
      '<div class="dash-chapter-bars">';
    chapterProgress.forEach(function (ch) {
      chapBarsHtml +=
        '<div class="dash-chap-row">' +
          '<div class="dash-chap-title">' + escapeHtml(ch.title) + '</div>' +
          '<div class="dash-chap-bar-wrap">' +
            '<div class="dash-chap-bar-fill" style="width:' + ch.pct + '%"></div>' +
          '</div>' +
          '<div class="dash-chap-pct">' + ch.pct + '%</div>' +
        '</div>';
    });
    if (chapterProgress.length === 0) {
      chapBarsHtml += '<p class="dash-empty-state">Start a lesson to see progress here.</p>';
    }
    chapBarsHtml += '</div></div>';

    // Weekly activity bars
    var dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    var maxActivity = Math.max.apply(null, weeklyActivity.concat([1]));
    var weekHtml = '<div class="dash-panel-card">' +
      '<div class="dash-panel-card-title">' + t.weeklyTitle + '</div>' +
      '<div class="dash-weekly-bars">';
    weeklyActivity.forEach(function (count, i) {
      var heightPct = Math.round((count / maxActivity) * 100);
      weekHtml +=
        '<div class="dash-week-col">' +
          '<div class="dash-week-bar-wrap">' +
            '<div class="dash-week-bar-fill" style="height:' + heightPct + '%"></div>' +
          '</div>' +
          '<div class="dash-week-label">' + dayLabels[i] + '</div>' +
        '</div>';
    });
    weekHtml += '</div></div>';

    // Tip card
    var tipHtml =
      '<div class="dash-panel-card dash-tip-card">' +
        '<div class="dash-panel-card-title">' + t.tipTitle + '</div>' +
        '<p class="dash-tip-text">' + escapeHtml(getDailyTip()) + '</p>' +
      '</div>';

    // ── Assemble layout ──
    var mainEl = document.getElementById('dash-main');
    var rightEl = document.getElementById('dash-right-panel');
    if (!mainEl) {
      console.warn('[Dashboard] #dash-main element not found');
      return;
    }

    mainEl.innerHTML = headerHtml + statsHtml + heroHtml + reviewHtml;
    if (rightEl) rightEl.innerHTML = ringHtml + chapBarsHtml + weekHtml + tipHtml;

    // Wire daily goal card
    var goalCard = document.getElementById('dash-daily-goal-card');
    if (goalCard) {
      goalCard.addEventListener('click', function () {
        var goal = prompt('Set your daily exercise goal (number of exercises):', '10');
        if (goal && !isNaN(parseInt(goal, 10))) {
          localStorage.setItem('parlaara_dailyGoal', parseInt(goal, 10));
          // Re-render
          render(userData);
        }
      });
    }
  }

  // ─── Language toggle ──────────────────────────────────────────────────────

  function setLanguage(lang) {
    currentLang = lang === 'ca' ? 'ca' : 'en';
    applyI18nToSidebar();
  }

  function applyI18nToSidebar() {
    // Update elements with [data-i18n]
    var els = document.querySelectorAll('[data-i18n]');
    els.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var t = i18n[currentLang] || i18n.en;
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // Update nav links with data-label-en / data-label-ca
    var navLinks = document.querySelectorAll('.nav-link[data-label-en]');
    navLinks.forEach(function (link) {
      var label = currentLang === 'ca'
        ? (link.getAttribute('data-label-ca') || link.getAttribute('data-label-en'))
        : link.getAttribute('data-label-en');
      // Update text node (preserve icon span if present)
      var iconSpan = link.querySelector('.nav-icon');
      if (iconSpan) {
        // Set text after icon
        var textNode = link.childNodes[link.childNodes.length - 1];
        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
          textNode.textContent = ' ' + label;
        } else {
          link.appendChild(document.createTextNode(' ' + label));
        }
      } else {
        link.textContent = label;
      }
    });

    // Update chapter headings with data-label-en
    var chapEls = document.querySelectorAll('.nav-chapter[data-label-en]');
    chapEls.forEach(function (el) {
      var label = currentLang === 'ca'
        ? (el.getAttribute('data-label-ca') || el.getAttribute('data-label-en'))
        : el.getAttribute('data-label-en');
      el.textContent = label;
    });
  }

  function getCurrentLang() {
    return currentLang;
  }

  // ─── Public API ──────────────────────────────────────────────────────────

  return {
    render: render,
    setLanguage: setLanguage,
    applyI18nToSidebar: applyI18nToSidebar,
    getCurrentLang: getCurrentLang,
    getUserData: getUserDataInternal,
    getOverallProgress: getOverallProgress,
    getTodayStats: getTodayStats,
    getWeeklyActivity: getWeeklyActivity,
    getStreakDays: getStreakDays,
    getTotalXP: getTotalXP,
    getSuggestedLesson: getSuggestedLesson,
    getChapterProgress: getChapterProgress
  };

})();
