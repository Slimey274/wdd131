document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const navList = document.getElementById('site-nav');
  const BREAKPOINT = 1000;

  if (!menuButton || !navList) return;

  function updateAria() {
    const expanded = !navList.classList.contains('hide');
    menuButton.setAttribute('aria-expanded', String(expanded));
  }

  function handleResize() {
    if (window.innerWidth > BREAKPOINT) {
      navList.classList.remove('hide');
      menuButton.setAttribute('aria-hidden', 'true'); // hide from screen readers
    } else {
      navList.classList.add('hide');
      menuButton.removeAttribute('aria-hidden');
    }
    updateAria();
  }

  // Toggle nav on button click
  menuButton.addEventListener('click', () => {
    navList.classList.toggle('hide');
    updateAria();

    // If opened on mobile, trap focus inside nav
    if (!navList.classList.contains('hide') && window.innerWidth <= BREAKPOINT) {
      trapFocus(navList);
    }
  });

  // Close nav when a link is clicked (on mobile only)
  navList.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a' && window.innerWidth <= BREAKPOINT) {
      navList.classList.add('hide');
      updateAria();
    }
  });

  // Close nav with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      navList.classList.add('hide');
      updateAria();
      menuButton.focus();
    }
  });

  // Debounced resize handler
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 150);
  });

  handleResize(); // initial check

  // ---------- Focus Trap ----------
  function trapFocus(container) {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ];

    const focusableElements = container.querySelectorAll(focusableSelectors.join(','));
    if (focusableElements.length === 0) return;

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    document.addEventListener('keydown', function handleTrap(e) {
      if (navList.classList.contains('hide')) {
        document.removeEventListener('keydown', handleTrap);
        return;
      }

      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }
});
