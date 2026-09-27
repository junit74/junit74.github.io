// Follow the browser preference before the page is painted and on later changes.
(() => {
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const apply = () => {
    document.documentElement.dataset.theme = system.matches ? 'dark' : 'light';
    const chromeColor = document.querySelector('meta[name="theme-color"]');
    if (chromeColor) chromeColor.content = system.matches ? '#121212' : '#ffffff';
  };
  apply();
  if (system.addEventListener) system.addEventListener('change', apply);
})();
