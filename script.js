// Portfolio script – scroll reveal & back‑to‑top (dark‑theme only)

// Scroll‑reveal – add .visible when element enters viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Observe all elements with .animate class (optional for animated sections)
document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Back‑to‑top button
const topBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  topBtn.style.display = (window.scrollY > 200) ? 'flex' : 'none';
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
