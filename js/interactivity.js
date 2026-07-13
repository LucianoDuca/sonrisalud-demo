// Advanced interactivity for navbar, sliders, gallery, and FAQ

// ===== PROCEDURE MAPPING =====
const procedureMapping = {
  'Implantes': 'implantes',
  'Limpiezas': null, // General info
  'Empastes': null,
  'Endodoncia': 'endodoncia',
  'Blanqueamiento': 'blanqueamiento',
  'Carillas': 'estetica',
  'Diseño de sonrisa': 'estetica',
  'Extracciones': null,
  'Cirugía ósea': null
};

// ===== NAVBAR DROPDOWNS =====
function initNavbar() {
  const menuToggle = document.getElementById('menuToggle');
  const navDesktop = document.querySelector('.nav-desktop');
  const dropdowns = document.querySelectorAll('.nav-dropdown');

  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navDesktop.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
          navDesktop.classList.remove('active');
        }
      });
    });
  }

  // Mobile dropdown expansion
  dropdowns.forEach(dropdown => {
    const navLink = dropdown.querySelector('.nav-link');
    if (navLink && window.innerWidth <= 768) {
      navLink.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
      });
    }
  });

  // Connect dropdown items to procedures
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const procedureName = item.textContent.trim();
      const procedureKey = procedureMapping[procedureName];

      if (procedureKey && typeof renderProcedurePage === 'function') {
        renderProcedurePage(procedureKey);
      } else if (procedureName === 'Limpiezas' || procedureName === 'Empastes' || procedureName === 'Extracciones' || procedureName === 'Cirugía ósea') {
        // Scroll to servicios section for general info
        document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Connect main nav items
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#') && href !== '#') {
      link.addEventListener('click', (e) => {
        const section = document.querySelector(href);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
}

// ===== BEFORE/AFTER SLIDER =====
function initBeforeAfterSlider() {
  const sliders = document.querySelectorAll('.slider-container');

  sliders.forEach(slider => {
    const handle = slider.querySelector('.slider-handle');
    const afterImage = slider.querySelector('.slider-image.after');
    let isActive = false;

    if (!handle || !afterImage) return;

    function updateSlider(e) {
      if (!isActive) return;

      const rect = slider.getBoundingClientRect();
      let x = e.clientX - rect.left;

      // Handle touch events
      if (e.touches) {
        x = e.touches[0].clientX - rect.left;
      }

      x = Math.max(0, Math.min(x, rect.width));
      const percentage = (x / rect.width) * 100;

      handle.style.left = percentage + '%';
      afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    }

    // Mouse events
    handle.addEventListener('mousedown', () => {
      isActive = true;
    });

    document.addEventListener('mouseup', () => {
      isActive = false;
    });

    document.addEventListener('mousemove', updateSlider);

    // Touch events
    handle.addEventListener('touchstart', () => {
      isActive = true;
    });

    document.addEventListener('touchend', () => {
      isActive = false;
    });

    document.addEventListener('touchmove', updateSlider);

    // Click anywhere on slider to move handle
    slider.addEventListener('click', (e) => {
      const rect = slider.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;

      handle.style.left = percentage + '%';
      afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    });
  });
}

// ===== GALLERY ITEMS =====
function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    const afterImage = item.querySelector('.gallery-item-after');
    if (!afterImage) return;

    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    });

    item.addEventListener('mouseleave', () => {
      afterImage.style.clipPath = 'inset(0 50% 0 0)';
    });
  });
}

// ===== FAQ ACCORDION =====
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      // Close other items if desired (uncomment for accordion behavior)
      // faqItems.forEach(otherItem => {
      //   if (otherItem !== item) {
      //     otherItem.classList.remove('active');
      //   }
      // });

      item.classList.toggle('active');
    });
  });
}

// ===== RENDER SECTIONS =====
function renderBeforeAfterSlider(config) {
  const section = document.querySelector('.before-after-slider');
  if (!section) return;

  section.innerHTML = `
    <div class="slider-content">
      <div class="slider-container">
        <img src="https://via.placeholder.com/500x500?text=Antes" alt="Antes" class="slider-image before">
        <img src="https://via.placeholder.com/500x500?text=Después" alt="Después" class="slider-image after">
        <div class="slider-handle"></div>
      </div>

      <div class="slider-text">
        <h2>Galería de Sonrisas y Más</h2>
        <p>El cambio de una sonrisa tiene un impacto significativo en la confianza y la salud oral general de alguien. ¡Vea algunos de estos impresionantes antes y después!</p>
        <a href="#galeria" class="btn btn-primary slider-button">Ver más sonrisas</a>
      </div>
    </div>
  `;

  // Initialize slider after rendering
  setTimeout(initBeforeAfterSlider, 0);
}

function renderGallery(config) {
  const section = document.querySelector('.gallery');
  if (!section) return;

  // Sample gallery data - replace with real data if available
  const cases = [
    { before: 'Caso 1 Antes', after: 'Caso 1 Después' },
    { before: 'Caso 2 Antes', after: 'Caso 2 Después' },
    { before: 'Caso 3 Antes', after: 'Caso 3 Después' },
    { before: 'Caso 4 Antes', after: 'Caso 4 Después' },
    { before: 'Caso 5 Antes', after: 'Caso 5 Después' },
    { before: 'Caso 6 Antes', after: 'Caso 6 Después' },
    { before: 'Caso 7 Antes', after: 'Caso 7 Después' },
    { before: 'Caso 8 Antes', after: 'Caso 8 Después' },
  ];

  let galleryHTML = `
    <div class="gallery-content">
      <div class="gallery-header">
        <h2>Algunos de Nuestros Casos Clínicos</h2>
        <p>En esta sección mostramos varios de los trabajos que realizamos en nuestra clínica dental. Desliza en cada imagen para ver el cambio de sonrisas de nuestros pacientes.</p>
      </div>

      <div class="gallery-grid">
  `;

  cases.forEach((caseItem, index) => {
    galleryHTML += `
      <div class="gallery-item">
        <img src="https://via.placeholder.com/400x400?text=${caseItem.before}" alt="${caseItem.before}" class="gallery-item-image gallery-item-before">
        <img src="https://via.placeholder.com/400x400?text=${caseItem.after}" alt="${caseItem.after}" class="gallery-item-image gallery-item-after">
        <div class="gallery-divider"></div>
        <div class="gallery-toggle">⟳</div>
      </div>
    `;
  });

  galleryHTML += `
      </div>
    </div>
  `;

  section.innerHTML = galleryHTML;

  // Initialize gallery after rendering
  setTimeout(initGallery, 0);
}

function renderFAQ(config) {
  const section = document.querySelector('.faq');
  if (!section) return;

  const faqs = [
    {
      question: '¿Cuál es el costo de un implante dental?',
      answer: 'El costo de un implante dental varía según el tipo y la complejidad del caso. Te recomendamos agendar una consulta para que podamos evaluar tu situación específica y brindarte un presupuesto personalizado.'
    },
    {
      question: '¿Duele el tratamiento de ortodoncia?',
      answer: 'La ortodoncia moderna es mucho menos incómoda que en el pasado. Durante el tratamiento puedes sentir una ligera presión, pero no dolor agudo. Nuestro equipo está capacitado para minimizar cualquier molestia.'
    },
    {
      question: '¿Cuánto dura el blanqueamiento dental?',
      answer: 'Los resultados del blanqueamiento dental pueden durar varios meses a un año, dependiendo de tus hábitos de higiene y consumo de alimentos/bebidas que manchan los dientes. Ofrecemos sesiones de mantenimiento.'
    },
    {
      question: '¿Qué debo hacer después de una extracción?',
      answer: 'Después de una extracción, es importante descansar y seguir las instrucciones específicas que te proporcionaremos. Evita enjuagues vigorosos, fuma, o usa popotes durante los primeros días.'
    },
    {
      question: '¿Con qué frecuencia debo visitarte?',
      answer: 'Se recomienda visitarnos cada 6 meses para limpiezas y revisiones regulares. Algunos pacientes con problemas específicos pueden necesitar más frecuencia.'
    },
    {
      question: '¿Realizan trabajos de urgencia?',
      answer: 'Sí, tenemos disponibilidad para emergencias dentales. Contacta directamente por teléfono o WhatsApp para informar sobre tu situación.'
    }
  ];

  let faqHTML = `
    <div class="faq-content">
      <div class="faq-header">
        <h2>Preguntas Frecuentes</h2>
      </div>
  `;

  faqs.forEach((faq, index) => {
    faqHTML += `
      <div class="faq-item ${index === 0 ? 'active' : ''}">
        <div class="faq-question">
          <h3>${faq.question}</h3>
          <span class="faq-toggle">▼</span>
        </div>
        <div class="faq-answer">${faq.answer}</div>
      </div>
    `;
  });

  faqHTML += `
    </div>
  `;

  section.innerHTML = faqHTML;

  // Initialize FAQ after rendering
  setTimeout(initFAQ, 0);
}

// ===== SCROLL REVEAL ANIMATIONS =====
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .service-card, .review-card, .gallery-item, .team-member, .faq-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: stop observing after reveal
        // observer.unobserve(entry.target);
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

// ===== SMOOTH SCROLL BEHAVIOR =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== INITIALIZE ALL =====
function initializeAdvancedFeatures(config) {
  console.log('Initializing advanced features');
  renderBeforeAfterSlider(config);
  renderGallery(config);
  renderFAQ(config);
  initNavbar();

  // Initialize additional features
  setTimeout(() => {
    initScrollReveal();
    initSmoothScroll();
  }, 100);
}

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initializeAdvancedFeatures, initScrollReveal, initSmoothScroll };
}
