// Inline utility functions
function whatsappHref(config) {
  const mensaje = encodeURIComponent(config.whatsappMensaje);
  return `https://wa.me/${config.whatsapp}?text=${mensaje}`;
}

function telefonoHref(config) {
  return `tel:${config.telefono.replace(/\s+/g, "")}`;
}

function renderStars(rating) {
  let html = '<div class="stars">';
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(rating)) {
      html += '<svg class="star star-filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6.06 6.6.77-4.86 4.6 1.28 6.57L12 17.35l-5.92 3.15 1.28-6.57-4.86-4.6 6.6-.77L12 2.5Z" /></svg>';
    } else {
      html += '<svg class="star star-empty" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2.5l2.9 6.06 6.6.77-4.86 4.6 1.28 6.57L12 17.35l-5.92 3.15 1.28-6.57-4.86-4.6 6.6-.77L12 2.5Z" /></svg>';
    }
  }
  html += '</div>';
  return html;
}

function updateYear() {
  const yearElements = document.querySelectorAll('[data-year]');
  const year = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = year;
  });
}

function getAverageRating(resenas, notaGoogle) {
  if (notaGoogle) return notaGoogle;
  if (resenas.length === 0) return 0;
  const total = resenas.reduce((sum, r) => sum + r.estrellas, 0);
  return total / resenas.length;
}

console.log('main.js loaded');

let config = null;

async function loadConfig() {
  console.log('loadConfig called');
  try {
    const response = await fetch('./data/config.json');
    config = await response.json();
    console.log('Config loaded:', config.nombre);
    renderPage();
  } catch (error) {
    console.error('Error loading config:', error);
  }
}

function renderPage() {
  if (!config) return;

  // Set CSS variables from config
  document.documentElement.style.setProperty('--primary', config.colores.primario);
  document.documentElement.style.setProperty('--accent', config.colores.acento);

  renderDemoBanner();
  renderHero();
  renderServices();
  renderReviews();
  renderTeam();
  renderLocation();
  renderFooter();

  // Initialize advanced features (navbar, sliders, gallery, FAQ)
  if (typeof initializeAdvancedFeatures === 'function') {
    initializeAdvancedFeatures(config);
  }

  updateYear();
}

function renderDemoBanner() {
  if (!config.demo) return;

  const banner = document.querySelector('.demo-banner');
  if (banner) {
    banner.innerHTML = `Demo — propuesta para ${config.nombre}. Los datos de contacto de esta página son de prueba.`;
  }
}

function renderHero() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  const avgRating = getAverageRating(config.resenas, config.notaGoogle);
  const totalReviews = config.resenasTotales || config.resenas.length;

  heroSection.innerHTML = `
    <div class="hero-content">
      <div class="hero-text">
        <div class="hero-badge">${config.nombre} · ${config.ciudad}</div>
        <h1>${config.eslogan}</h1>
        <p>Presupuesto sin compromiso y primera visita de valoración incluida.</p>

        <div class="hero-buttons">
          <a href="${whatsappHref(config)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98 0-1.41.74-2.11 1-2.4.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.68.79 1.97.93.29.15.48.22.55.34.07.13.07.75-.17 1.43Z"/></svg>
            Pedir cita por WhatsApp
          </a>
          <a href="${telefonoHref(config)}" class="btn btn-secondary">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
            Llamar ahora
          </a>
        </div>

        <div class="hero-rating">
          ${renderStars(avgRating)}
          <span>${avgRating.toFixed(1).replace('.', ',')} · ${totalReviews} reseñas en Google</span>
        </div>
      </div>

      <div class="hero-image">
        <div class="hero-image-placeholder">
          Foto de la clínica / equipo
        </div>
      </div>
    </div>
  `;
}

function renderServices() {
  const servicesSection = document.getElementById('servicios');
  if (!servicesSection) return;

  servicesSection.innerHTML = `
    <div class="services-content">
      <div class="section-header">
        <div class="section-header-label">Tratamientos</div>
        <h2 class="section-header-title">Todo lo que tu sonrisa necesita, en un solo lugar</h2>
      </div>

      <div class="grid grid-3">
        ${config.servicios.map(servicio => `
          <div class="service-card">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3c-2.2 0-3.3 1.2-4.5 1.2C6.2 4.2 5 3 3.6 3.9 2.2 4.8 2 7 2.4 9c.4 2 1.4 3.5 1.8 5.6.4 2 .5 4.4 1.8 5.2 1.3.8 2-1 2.6-2.8.5-1.5.9-2.6 1.4-2.6s.9 1.1 1.4 2.6c.6 1.8 1.3 3.6 2.6 2.8 1.3-.8 1.4-3.2 1.8-5.2.4-2.1 1.4-3.6 1.8-5.6.4-2 .2-4.2-1.2-5.1-1.4-.9-2.6.3-3.9.3C15.3 4.2 14.2 3 12 3Z"/></svg>
            </div>
            <h3 class="service-title">${servicio.nombre}</h3>
            <p class="service-description">${servicio.descripcion}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderReviews() {
  const reviewsSection = document.getElementById('resenas');
  if (!reviewsSection) return;

  const avgRating = getAverageRating(config.resenas, config.notaGoogle);

  reviewsSection.innerHTML = `
    <div class="reviews-content">
      <div class="section-header">
        <div class="section-header-label">Opiniones reales</div>
        <h2 class="section-header-title">Lo que dicen nuestros pacientes en Google</h2>
      </div>

      <div class="grid grid-4">
        ${config.resenas.map(resena => `
          <div class="review-card">
            <div class="review-stars">
              ${renderStars(resena.estrellas)}
            </div>
            <p class="review-text">"${resena.texto}"</p>
            <div class="review-author">${resena.autor}</div>
            <div class="review-source">Reseña de Google</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderTeam() {
  const teamSection = document.getElementById('equipo');
  if (!teamSection) return;

  teamSection.innerHTML = `
    <div class="team-content">
      <div class="section-header">
        <div class="section-header-label">Nuestro equipo</div>
        <h2 class="section-header-title">Profesionales en los que puedes confiar</h2>
      </div>

      <div class="grid grid-2">
        ${config.equipo.map(miembro => `
          <div class="team-member">
            <div class="team-member-avatar">${miembro.iniciales}</div>
            <div class="team-member-info">
              <h3>${miembro.nombre}</h3>
              <div class="team-member-role">${miembro.rol}</div>
              <p class="team-member-bio">${miembro.bio}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderLocation() {
  const locationSection = document.getElementById('ubicacion');
  if (!locationSection) return;

  locationSection.innerHTML = `
    <div class="location-content">
      <div class="location-map">
        <iframe src="${config.mapaEmbedUrl}" title="Mapa de ubicación" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div class="location-info">
        <div class="section-header" style="text-align: left;">
          <div class="section-header-label">Visítanos</div>
          <h2 class="section-header-title">Estamos en el centro de ${config.ciudad}</h2>
        </div>

        <div class="location-details">
          <div class="location-detail">
            <div class="location-detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div class="location-detail-content">
              <dt>Dirección</dt>
              <dd>${config.direccion}</dd>
            </div>
          </div>

          <div class="location-detail">
            <div class="location-detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            </div>
            <div class="location-detail-content">
              <dt>Horario</dt>
              <dd>${config.horarios}</dd>
            </div>
          </div>

          <div class="location-detail">
            <div class="location-detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
            </div>
            <div class="location-detail-content">
              <dt>Teléfono</dt>
              <dd><a href="${telefonoHref(config)}">${config.telefono}</a></dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-col">
        <h4>${config.nombre}</h4>
        <p style="font-size: 0.875rem; color: rgba(255, 255, 255, 0.7);">${config.eslogan}</p>
      </div>
      <div class="footer-col">
        <h4>Enlaces</h4>
        <ul>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#resenas">Opiniones</a></li>
          <li><a href="#equipo">Equipo</a></li>
          <li><a href="#ubicacion">Contacto</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Aviso legal</a></li>
          <li><a href="#">Privacidad</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© <span data-year>${new Date().getFullYear()}</span> ${config.nombre}. Todos los derechos reservados.</p>
    </div>
  `;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadConfig);
} else {
  loadConfig();
}
