// STEINGLANZ PREMIUM – main.js

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initSliders();
  initMobileMenu();
  initSmoothScroll();
});

// ── Sticky nav: glass on scroll, hide on fast scroll-down ──
function initNav() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  let lastY = window.scrollY;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    nav.classList.toggle('nav--scrolled', y > 80);

    // Hide when scrolling down fast, show on scroll up
    if (y > lastY + 8 && y > 200) {
      nav.classList.add('nav--hidden');
    } else if (y < lastY - 4) {
      nav.classList.remove('nav--hidden');
    }

    lastY = y;
  }, { passive: true });
}

// ── Scroll-triggered reveal ──
function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -32px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ── Before/After comparison sliders ──
function initSliders() {
  document.querySelectorAll('[data-slider]').forEach(slider => {
    const before = slider.querySelector('.ba-before');
    const handle = slider.querySelector('.ba-handle');
    if (!before || !handle) return;

    let isDragging = false;

    function setPosition(clientX) {
      const rect = slider.getBoundingClientRect();
      const pct = Math.min(Math.max((clientX - rect.left) / rect.width, 0.04), 0.96);
      before.style.width = `${pct * 100}%`;
      handle.style.left = `${pct * 100}%`;
    }

    // Mouse
    handle.addEventListener('mousedown', e => {
      isDragging = true;
      e.preventDefault();
    });
    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', e => {
      if (isDragging) setPosition(e.clientX);
    });

    // Touch
    handle.addEventListener('touchstart', e => {
      isDragging = true;
      e.preventDefault();
    }, { passive: false });
    window.addEventListener('touchend', () => { isDragging = false; });
    window.addEventListener('touchmove', e => {
      if (isDragging) setPosition(e.touches[0].clientX);
    }, { passive: false });

    // Also allow dragging anywhere on the slider body
    slider.addEventListener('mousedown', e => {
      if (e.target === handle || handle.contains(e.target)) return;
      setPosition(e.clientX);
      isDragging = true;
    });
    slider.addEventListener('touchstart', e => {
      if (e.target === handle || handle.contains(e.target)) return;
      setPosition(e.touches[0].clientX);
      isDragging = true;
    }, { passive: true });
  });
}

// ── Mobile hamburger menu ──
function initMobileMenu() {
  const btn = document.querySelector('.nav-hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  function closeMenu() {
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Menü öffnen');
    menu.setAttribute('aria-hidden', 'true');
    menu.classList.remove('mobile-menu--open');
    document.body.style.overflow = '';
  }

  function openMenu() {
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Menü schließen');
    menu.setAttribute('aria-hidden', 'false');
    menu.classList.add('mobile-menu--open');
    document.body.style.overflow = 'hidden';
  }

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  // Close on any menu link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      btn.focus();
    }
  });
}

// ── Smooth scroll with nav offset ──
function initSmoothScroll() {
  const navHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '72'
  );

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}
