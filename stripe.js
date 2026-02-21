'use strict';

// StripePayment — stub module (no-op until Stripe/Firebase is wired)
const StripePayment = (function () {
  'use strict';

  function redirectToCheckout(priceId) {
    console.log('[Stripe] redirectToCheckout called with priceId:', priceId);
    alert('Stripe not configured yet — coming soon!');
  }

  function redirectToCustomerPortal() {
    console.log('[Stripe] redirectToCustomerPortal called');
    alert('Stripe not configured yet — coming soon!');
  }

  function getSubscriptionStatus() {
    // Returns a stub subscription status from localStorage if set
    try {
      var user = JSON.parse(localStorage.getItem('parlaara_user') || 'null');
      return (user && user.subscriptionStatus) || 'trial';
    } catch (e) {
      return 'trial';
    }
  }

  return {
    redirectToCheckout: redirectToCheckout,
    redirectToCustomerPortal: redirectToCustomerPortal,
    getSubscriptionStatus: getSubscriptionStatus
  };

})();
