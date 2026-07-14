// Shared site chrome injected on every page from a single source:
// footer, cookie-consent banner and the floating WhatsApp button.
// Keeping this in one file avoids duplicating the same markup across
// index.html and every procedure page, so they can never drift apart.

(function () {
  var CLINIC = {
    nombre: 'Clínica Dental Sonrisalud',
    eslogan: 'Tu sonrisa, en las mejores manos de Salamanca',
    telefono: '+34 923 000 000',
    telefonoHref: 'tel:+34923000000',
    email: 'citas@sonrisalud.es',
    direccion: 'Calle Toro 45, 37001 Salamanca',
    whatsapp: '34600000000',
    whatsappMensaje: 'Hola, quería pedir una cita en Clínica Dental Sonrisalud',
    logo: './assets/img/logotipo-transparente.png'
  };

  var COOKIE_KEY = 'sonrisalud-cookies';
  var COOKIE_DELAY = 700;

  function whatsappHref() {
    return 'https://wa.me/' + CLINIC.whatsapp + '?text=' + encodeURIComponent(CLINIC.whatsappMensaje);
  }

  var ICON_PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
  var ICON_PHONE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>';
  var ICON_MAIL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>';
  var ICON_WA = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98 0-1.41.74-2.11 1-2.4.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.68.79 1.97.93.29.15.48.22.55.34.07.13.07.75-.17 1.43Z"/></svg>';

  function buildFooter() {
    var year = new Date().getFullYear();
    var footer = document.createElement('footer');
    footer.innerHTML = [
      '<div class="footer-grid">',
      '  <div class="footer-col">',
      '    <div class="footer-brand">',
      '      <span class="footer-logo-chip"><img src="' + CLINIC.logo + '" alt="' + CLINIC.nombre + '"></span>',
      '      <span class="footer-brand-name">Sonrisalud</span>',
      '    </div>',
      '    <p class="footer-desc">' + CLINIC.eslogan + '. Odontología integral con trato cercano y tecnología de última generación.</p>',
      '  </div>',
      '  <div class="footer-col">',
      '    <p class="footer-title">Navegación</p>',
      '    <nav class="footer-nav">',
      '      <a href="index.html#servicios">Servicios</a>',
      '      <a href="index.html#galeria">Antes y Después</a>',
      '      <a href="index.html#equipo">Equipo</a>',
      '      <a href="index.html#faq">Preguntas frecuentes</a>',
      '    </nav>',
      '  </div>',
      '  <div class="footer-col">',
      '    <p class="footer-title">Tratamientos</p>',
      '    <nav class="footer-nav">',
      '      <a href="implantes.html">Implantes dentales</a>',
      '      <a href="ortodoncia.html">Ortodoncia invisible</a>',
      '      <a href="blanqueamiento.html">Blanqueamiento</a>',
      '      <a href="estetica.html">Estética dental</a>',
      '    </nav>',
      '  </div>',
      '  <div class="footer-col">',
      '    <p class="footer-title">Contacto</p>',
      '    <div class="footer-contact-item">' + ICON_PIN + '<span>' + CLINIC.direccion + '</span></div>',
      '    <div class="footer-contact-item">' + ICON_PHONE + '<a href="' + CLINIC.telefonoHref + '">' + CLINIC.telefono + '</a></div>',
      '    <div class="footer-contact-item">' + ICON_MAIL + '<a href="mailto:' + CLINIC.email + '">' + CLINIC.email + '</a></div>',
      '    <div class="footer-contact-item">' + ICON_WA + '<a href="' + whatsappHref() + '" target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp</a></div>',
      '  </div>',
      '</div>',
      '<div class="footer-divider">',
      '  <span>&copy; ' + year + ' ' + CLINIC.nombre + '. Todos los derechos reservados.</span>',
      '  <span class="footer-divider-links"><a href="legal.html#aviso-legal">Aviso legal</a><span aria-hidden="true">·</span><a href="legal.html#privacidad">Privacidad</a><span aria-hidden="true">·</span><a href="legal.html#cookies">Cookies</a></span>',
      '</div>'
    ].join('');
    return footer;
  }

  function buildWhatsappFab() {
    var a = document.createElement('a');
    a.className = 'whatsapp-fab';
    a.href = whatsappHref();
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', 'Escribir por WhatsApp');
    a.innerHTML = ICON_WA;
    return a;
  }

  function buildCookieBanner() {
    var banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.id = 'cookieBanner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Aviso de cookies');
    banner.innerHTML = [
      '<p class="cookie-title">Tu privacidad</p>',
      '<p class="cookie-text">Usamos cookies propias y de terceros para mejorar tu experiencia y analizar el uso del sitio. Puedes leer más en nuestra <a href="legal.html#cookies">política de cookies</a>.</p>',
      '<div class="cookie-buttons">',
      '  <button class="btn-cookie-reject" data-cookie-action="reject">Rechazar</button>',
      '  <button class="btn-cookie-accept" data-cookie-action="accept">Aceptar</button>',
      '</div>'
    ].join('');
    return banner;
  }

  function setupCookies(banner) {
    var decided = null;
    try { decided = localStorage.getItem(COOKIE_KEY); } catch (e) {}

    if (!decided) {
      setTimeout(function () { banner.classList.add('open'); }, COOKIE_DELAY);
    }

    banner.querySelectorAll('[data-cookie-action]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        try { localStorage.setItem(COOKIE_KEY, btn.getAttribute('data-cookie-action')); } catch (e) {}
        banner.classList.remove('open');
      });
    });
  }

  function ensureFavicon() {
    if (document.querySelector('link[rel~="icon"]')) return;
    var link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = './assets/img/logotipo.png';
    document.head.appendChild(link);
  }

  function renderChrome() {
    // Guard against double insertion (e.g. if the script is included twice).
    if (document.getElementById('cookieBanner')) return;

    ensureFavicon();

    if (!document.querySelector('footer')) {
      document.body.appendChild(buildFooter());
    }
    // Banner is inserted before the WhatsApp button so the CSS sibling
    // selector (.cookie-banner.open ~ .whatsapp-fab) can lift the button on mobile.
    var banner = buildCookieBanner();
    document.body.appendChild(banner);
    document.body.appendChild(buildWhatsappFab());
    setupCookies(banner);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderChrome);
  } else {
    renderChrome();
  }
})();
