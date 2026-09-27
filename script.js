// Optional enhancement; the complete site remains usable without JavaScript.
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
