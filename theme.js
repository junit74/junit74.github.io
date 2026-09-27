// Apply before styles load so a saved theme does not flash on navigation.
(() => {
  const key = 'uniway-theme';
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = 'dark';
  try {
    const saved = localStorage.getItem(key);
    if (['light', 'dark', 'system'].includes(saved)) preference = saved;
  } catch (_) { /* The theme remains usable when browser storage is blocked. */ }

  const apply = () => {
    const dark = preference === 'dark' || (preference === 'system' && system.matches);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    const chromeColor = document.querySelector('meta[name="theme-color"]');
    if (chromeColor) chromeColor.content = dark ? '#121212' : '#ffffff';
  };
  apply();
  if (system.addEventListener) system.addEventListener('change', apply);

  document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('theme-select');
    if (!select) return;
    select.value = preference;
    select.closest('.theme-control').hidden = false;
    select.addEventListener('change', () => {
      preference = select.value;
      try {
        localStorage.setItem(key, preference);
      } catch (_) { /* Changes still apply for this page. */ }
      apply();
    });
  });
})();
