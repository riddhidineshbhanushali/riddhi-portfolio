// Scroll‑reveal – add .visible when element enters viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Observe all elements with .animate class
document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Back‑to‑top button
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  topBtn.style.display = (window.scrollY > 200) ? 'block' : 'none';
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Theme toggle (dark / light)
const themeToggleBtn = document.getElementById('themeToggle');
let isDark = false;

themeToggleBtn.addEventListener('click', () => {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
});
