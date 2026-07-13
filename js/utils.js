export function whatsappHref(config) {
  const mensaje = encodeURIComponent(config.whatsappMensaje);
  return `https://wa.me/${config.whatsapp}?text=${mensaje}`;
}

export function telefonoHref(config) {
  return `tel:${config.telefono.replace(/\s+/g, "")}`;
}

export function renderStars(rating) {
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

export function updateYear() {
  const yearElements = document.querySelectorAll('[data-year]');
  const year = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = year;
  });
}

export function getAverageRating(resenas, notaGoogle) {
  if (notaGoogle) return notaGoogle;
  if (resenas.length === 0) return 0;
  const total = resenas.reduce((sum, r) => sum + r.estrellas, 0);
  return total / resenas.length;
}
