// Site behavior: navbar, before/after slider, gallery hover, FAQ accordion, scroll reveal

// ===== NAVBAR =====
const NAV_BREAKPOINT = 1120;

function initNavbar() {
  const menuToggle = document.getElementById('menuToggle');
  const navDesktop = document.querySelector('.nav-desktop');
  const dropdowns = document.querySelectorAll('.nav-dropdown');

  function closeMobileMenu() {
    if (!navDesktop) return;
    navDesktop.classList.remove('active');
    dropdowns.forEach(d => d.classList.remove('active'));
  }

  // Mobile menu toggle
  if (menuToggle && navDesktop) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navDesktop.classList.toggle('active');
    });

    // Close menu when clicking a real link (not a dropdown category label)
    document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
          closeMobileMenu();
        }
      });
    });

    // Close the mobile menu when clicking outside of it
    document.addEventListener('click', (e) => {
      if (!navDesktop.classList.contains('active')) return;
      if (navDesktop.contains(e.target) || menuToggle.contains(e.target)) return;
      closeMobileMenu();
    });

    // Reset menu state if the viewport crosses the nav breakpoint (e.g. rotating a tablet)
    window.addEventListener('resize', () => {
      if (window.innerWidth > NAV_BREAKPOINT) {
        closeMobileMenu();
      }
    });
  }

  // Dropdown category labels only toggle their submenu (href="#", no real destination).
  // Checked at click time, not at page load, so it keeps working if the window is resized.
  dropdowns.forEach(dropdown => {
    const navLink = dropdown.querySelector('.nav-link');
    if (!navLink) return;

    navLink.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('active');
      dropdowns.forEach(d => d.classList.remove('active'));
      dropdown.classList.toggle('active', !isOpen);
    });
  });

  // Close any click-opened dropdown when clicking outside of it (desktop + mobile),
  // so a toggled-open menu can't stay stuck after the pointer leaves.
  document.addEventListener('click', (e) => {
    if (e.target.closest('.nav-dropdown')) return;
    dropdowns.forEach(d => d.classList.remove('active'));
  });

  // Close open dropdowns with the Escape key for keyboard accessibility.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdowns.forEach(d => d.classList.remove('active'));
    }
  });
}

// ===== BEFORE/AFTER SLIDER =====
function initBeforeAfterSlider() {
  const sliders = document.querySelectorAll('.slider-container');

  sliders.forEach(slider => {
    const handle = slider.querySelector('.slider-handle');
    const afterImage = slider.querySelector('.slider-image.after');
    if (!handle || !afterImage) return;

    let dragging = false;

    function setPercentage(clientX) {
      const rect = slider.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      handle.style.left = percentage + '%';
      afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    }

    // Pointer Events unify mouse, touch and pen. Dragging anywhere on the
    // container works (not just the thin handle), which makes it usable on
    // mobile. `touch-action: none` on .slider-container stops the page from
    // scrolling while dragging.
    slider.addEventListener('pointerdown', (e) => {
      dragging = true;
      try { slider.setPointerCapture(e.pointerId); } catch (_) {}
      setPercentage(e.clientX);
    });

    slider.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      setPercentage(e.clientX);
    });

    function endDrag(e) {
      dragging = false;
      try { slider.releasePointerCapture(e.pointerId); } catch (_) {}
    }

    slider.addEventListener('pointerup', endDrag);
    slider.addEventListener('pointercancel', endDrag);
  });
}

// ===== GALLERY ITEMS =====
function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    const afterImage = item.querySelector('.gallery-item-after');
    const divider = item.querySelector('.gallery-divider');
    const toggle = item.querySelector('.gallery-toggle');
    if (!afterImage) return;

    let dragging = false;

    // Each gallery case is its own before/after slider. A single click/tap
    // sets the split at that point (works on press) and dragging compares
    // continuously. Pointer Events cover mouse, touch and pen.
    function setSplit(clientX) {
      const rect = item.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      if (divider) divider.style.left = percentage + '%';
      if (toggle) toggle.style.left = percentage + '%';
    }

    item.addEventListener('pointerdown', (e) => {
      dragging = true;
      try { item.setPointerCapture(e.pointerId); } catch (_) {}
      setSplit(e.clientX);
    });

    item.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      setSplit(e.clientX);
    });

    function endDrag(e) {
      dragging = false;
      try { item.releasePointerCapture(e.pointerId); } catch (_) {}
    }

    item.addEventListener('pointerup', endDrag);
    item.addEventListener('pointercancel', endDrag);
  });
}

// ===== FAQ ACCORDION =====
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}

// ===== SCROLL REVEAL ANIMATIONS =====
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .service-card, .review-card, .gallery-item, .team-member, .faq-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(element => {
    observer.observe(element);
  });
}

// ===== SMOOTH SCROLL (same-page anchors only) =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== INITIALIZE ALL =====
function initSite() {
  initNavbar();
  initBeforeAfterSlider();
  initGallery();
  initFAQ();
  initScrollReveal();
  initSmoothScroll();
}
