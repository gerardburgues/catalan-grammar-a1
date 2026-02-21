'use strict';

// Analytics — stub module (no-op until Firebase is wired)
const Analytics = (function () {
  'use strict';

  function trackLessonStarted(sectionId, sectionType) {
    console.log('[Analytics] lessonStarted', { sectionId: sectionId, sectionType: sectionType });
  }

  function trackLessonCompleted(sectionId, sectionType, score, total) {
    console.log('[Analytics] lessonCompleted', { sectionId: sectionId, sectionType: sectionType, score: score, total: total });
  }

  function trackReviewSessionStarted(itemCount) {
    console.log('[Analytics] reviewSessionStarted', { itemCount: itemCount });
  }

  function trackVocabStudied(sectionId, cardCount) {
    console.log('[Analytics] vocabStudied', { sectionId: sectionId, cardCount: cardCount });
  }

  function trackError(context, error) {
    console.log('[Analytics] error', { context: context, error: error && (error.message || error) });
  }

  return {
    trackLessonStarted: trackLessonStarted,
    trackLessonCompleted: trackLessonCompleted,
    trackReviewSessionStarted: trackReviewSessionStarted,
    trackVocabStudied: trackVocabStudied,
    trackError: trackError
  };

})();
