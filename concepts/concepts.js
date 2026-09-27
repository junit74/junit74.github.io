const select = document.getElementById('concept-theme');
select.value = document.documentElement.dataset.theme;
select.addEventListener('change', () => { document.documentElement.dataset.theme = select.value; });
