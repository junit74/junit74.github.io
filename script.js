// Optional enhancement; the complete site remains usable without JavaScript.
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

// Refresh the tab icon when the browser's preferred color scheme changes.
const themeFavicon = document.querySelector('[data-theme-favicon]');
if (themeFavicon && typeof window.matchMedia === 'function') {
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  const updateFavicon = () => {
    themeFavicon.href = './assets/uniway-favicon-mono-' + (preference.matches ? 'dark' : 'light') + '.svg';
  };
  updateFavicon();
  if (preference.addEventListener) preference.addEventListener('change', updateFavicon);
}
