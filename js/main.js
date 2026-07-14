function updateYear() {
  const yearElements = document.querySelectorAll('[data-year]');
  const year = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = year;
  });
}

function init() {
  updateYear();
  initSite();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
