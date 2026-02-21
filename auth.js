'use strict';

// Auth — localStorage-based stub (no Firebase yet)
const Auth = (function () {
  'use strict';

  var USER_KEY = 'parlaara_user';

  // ─── Helpers ──────────────────────────────────────────────────────────────

  function getUser() {
    try {
      var raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.warn('[Auth] Failed to read user from localStorage:', e);
      return null;
    }
  }

  function saveUser(userData) {
    try {
      localStorage.setItem(USER_KEY, JSON.stringify(userData));
    } catch (e) {
      console.warn('[Auth] Failed to save user to localStorage:', e);
    }
  }

  function getUserData() {
    var scores = {};
    var streak = { count: 0, lastDate: null };
    var history = [];

    try {
      scores = JSON.parse(localStorage.getItem('parlaara_scores') || '{}');
    } catch (e) {}
    try {
      streak = JSON.parse(localStorage.getItem('parlaara_streak') || '{"count":0,"lastDate":null}');
    } catch (e) {}
    try {
      history = JSON.parse(localStorage.getItem('parlaara_history') || '[]');
    } catch (e) {}

    var user = getUser();
    return {
      scores: scores,
      streak: streak,
      history: history,
      displayName: user ? (user.displayName || user.email.split('@')[0]) : 'Learner',
      email: user ? user.email : null,
      subscriptionStatus: user ? (user.subscriptionStatus || 'trial') : 'trial'
    };
  }

  // ─── Auth actions ─────────────────────────────────────────────────────────

  function signIn(email, password) {
    if (!email || !password) {
      showAuthError('Please enter your email and password.');
      return;
    }
    var userData = {
      email: email,
      displayName: email.split('@')[0],
      subscriptionStatus: 'trial',
      createdAt: Date.now()
    };
    saveUser(userData);
    hideAuthModal();
    handleAuthenticated();
  }

  function signUp(email, password, name) {
    if (!email || !password) {
      showAuthError('Please fill in all fields.');
      return;
    }
    var displayName = (name && name.trim()) ? name.trim() : email.split('@')[0];
    var userData = {
      email: email,
      displayName: displayName,
      subscriptionStatus: 'trial',
      createdAt: Date.now()
    };
    saveUser(userData);
    hideAuthModal();
    handleAuthenticated();
  }

  function signOut() {
    localStorage.removeItem(USER_KEY);
    if (typeof showPage === 'function') showPage('landing-page');
    if (typeof setActiveNav === 'function') setActiveNav('landing');
    // Hide sidebar / app shell if shown
    var sidebar = document.getElementById('sidebar');
    var appShell = document.getElementById('app-shell');
    var topnav = document.getElementById('topnav');
    if (sidebar) sidebar.style.display = 'none';
    if (appShell) appShell.style.display = 'none';
    if (topnav) topnav.style.display = 'none';
  }

  // ─── Post-auth flow ───────────────────────────────────────────────────────

  function handleAuthenticated() {
    var userData = getUserData();

    // Show app shell elements
    var sidebar = document.getElementById('sidebar');
    var appShell = document.getElementById('app-shell');
    var topnav = document.getElementById('topnav');
    if (sidebar) sidebar.style.display = '';
    if (appShell) appShell.style.display = '';
    if (topnav) topnav.style.display = '';

    // Render dashboard
    if (typeof Dashboard !== 'undefined' && typeof Dashboard.render === 'function') {
      Dashboard.render(userData);
    }

    // Initialize app (builds sidebar, sets up nav)
    if (typeof App !== 'undefined' && typeof App.initApp === 'function') {
      App.initApp();
    }

    if (typeof showPage === 'function') showPage('dashboard-page');
    if (typeof setActiveNav === 'function') setActiveNav('dashboard');
  }

  // ─── Modal controls ───────────────────────────────────────────────────────

  function showAuthModal(mode) {
    var overlay = document.getElementById('auth-modal-overlay');
    if (!overlay) return;
    overlay.style.display = 'flex';

    // Switch between sign-in and sign-up tabs
    var tabSignin = document.getElementById('auth-tab-signin');
    var tabSignup = document.getElementById('auth-tab-signup');
    var formSignin = document.getElementById('auth-form-signin');
    var formSignup = document.getElementById('auth-form-signup');

    if (mode === 'signup') {
      if (tabSignup) tabSignup.classList.add('active');
      if (tabSignin) tabSignin.classList.remove('active');
      if (formSignup) formSignup.style.display = '';
      if (formSignin) formSignin.style.display = 'none';
    } else {
      if (tabSignin) tabSignin.classList.add('active');
      if (tabSignup) tabSignup.classList.remove('active');
      if (formSignin) formSignin.style.display = '';
      if (formSignup) formSignup.style.display = 'none';
    }

    // Clear errors and inputs
    clearAuthErrors();
    var inputs = overlay.querySelectorAll('input');
    inputs.forEach(function (inp) { inp.value = ''; });

    // Focus first input
    setTimeout(function () {
      var first = overlay.querySelector('input:not([type="hidden"])');
      if (first) first.focus();
    }, 100);
  }

  function hideAuthModal() {
    var overlay = document.getElementById('auth-modal-overlay');
    if (overlay) overlay.style.display = 'none';
    clearAuthErrors();
  }

  function showAuthError(msg) {
    var errEl = document.querySelector('.auth-error-msg');
    if (errEl) {
      errEl.textContent = msg;
      errEl.style.display = 'block';
    } else {
      console.warn('[Auth] auth-error-msg element not found. Error:', msg);
    }
  }

  function clearAuthErrors() {
    var errEls = document.querySelectorAll('.auth-error-msg');
    errEls.forEach(function (el) {
      el.textContent = '';
      el.style.display = 'none';
    });
  }

  // ─── Wire up form handlers ────────────────────────────────────────────────

  function wireFormHandlers() {
    // Sign-in form
    var formSignin = document.getElementById('auth-form-signin');
    if (formSignin) {
      formSignin.addEventListener('submit', function (e) {
        e.preventDefault();
        var email = (formSignin.querySelector('[name="email"], #signin-email') || {}).value || '';
        var password = (formSignin.querySelector('[name="password"], #signin-password') || {}).value || '';
        signIn(email.trim(), password);
      });
    }

    // Sign-up form
    var formSignup = document.getElementById('auth-form-signup');
    if (formSignup) {
      formSignup.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = (formSignup.querySelector('[name="name"], #signup-name') || {}).value || '';
        var email = (formSignup.querySelector('[name="email"], #signup-email') || {}).value || '';
        var password = (formSignup.querySelector('[name="password"], #signup-password') || {}).value || '';
        signUp(email.trim(), password, name.trim());
      });
    }

    // Tab switching
    var tabSignin = document.getElementById('auth-tab-signin');
    var tabSignup = document.getElementById('auth-tab-signup');
    if (tabSignin) {
      tabSignin.addEventListener('click', function () { showAuthModal('signin'); });
    }
    if (tabSignup) {
      tabSignup.addEventListener('click', function () { showAuthModal('signup'); });
    }

    // Close modal on overlay click
    var overlay = document.getElementById('auth-modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) hideAuthModal();
      });
    }

    // Close button
    var closeBtn = document.querySelector('.auth-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', hideAuthModal);
    }

    // Sign-out buttons
    var signOutBtns = document.querySelectorAll('[data-action="signout"], .signout-btn, #btn-signout');
    signOutBtns.forEach(function (btn) {
      btn.addEventListener('click', signOut);
    });

    // CTA buttons that open auth modal
    var signinBtns = document.querySelectorAll('[data-action="signin"], .btn-signin');
    var signupBtns = document.querySelectorAll('[data-action="signup"], .btn-signup, .lp-cta-btn');
    signinBtns.forEach(function (btn) {
      btn.addEventListener('click', function () { showAuthModal('signin'); });
    });
    signupBtns.forEach(function (btn) {
      btn.addEventListener('click', function () { showAuthModal('signup'); });
    });

    // ESC key closes modal
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') hideAuthModal();
    });

    // Demo button — skip auth, enter as guest
    var demoBtn = document.getElementById('hero-demo-btn');
    if (demoBtn) {
      demoBtn.addEventListener('click', function () {
        signIn('demo@parlaara.com', 'demo');
      });
    }
  }

  // ─── Init ─────────────────────────────────────────────────────────────────

  function init() {
    wireFormHandlers();

    var user = getUser();
    if (user) {
      handleAuthenticated();
    } else {
      // Hide app shell, show landing
      var sidebar = document.getElementById('sidebar');
      var appShell = document.getElementById('app-shell');
      var topnav = document.getElementById('topnav');
      if (sidebar) sidebar.style.display = 'none';
      if (appShell) appShell.style.display = 'none';
      if (topnav) topnav.style.display = 'none';

      if (typeof showPage === 'function') showPage('landing-page');
    }
  }

  // ─── Public API ──────────────────────────────────────────────────────────

  return {
    init: init,
    signIn: signIn,
    signUp: signUp,
    signOut: signOut,
    getUser: getUser,
    getUserData: getUserData,
    showAuthModal: showAuthModal,
    hideAuthModal: hideAuthModal,
    handleAuthenticated: handleAuthenticated
  };

})();

// Boot the app when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  Auth.init();
});
