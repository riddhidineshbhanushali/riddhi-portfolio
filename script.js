// Portfolio script – scroll reveal, back‑to‑top, theme toggle

// Scroll‑reveal – add .visible when element enters viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Observe all elements with .animate class (you can add this class to any section you want animated)
document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Back‑to‑top button
const topBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  topBtn.style.display = (window.scrollY > 200) ? 'flex' : 'none';
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Theme toggle – light / dark mode
const themeSwitch = document.getElementById('theme-switch');
// Initialize based on stored preference or default light
let isDark = localStorage.getItem('theme') === 'dark';
if (isDark) {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', () => {
  isDark = themeSwitch.checked;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
