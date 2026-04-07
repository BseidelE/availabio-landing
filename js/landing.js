/**
 * Availabio Landing Page — Minimal JS
 * Behaviours: nav scroll solidify + IntersectionObserver reveal
 * No fetch, no frameworks, no external dependencies.
 */

document.addEventListener('DOMContentLoaded', function () {

  // ── 1. Nav scroll solidify ─────────────────────────────────
  var nav = document.getElementById('nav');

  if (nav) {
    function onScroll() {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load in case page is already scrolled
  }

  // ── 2. IntersectionObserver reveal ────────────────────────
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio >= 0.12) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: make all elements visible if IO not supported
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

});
