// Scroll‑reveal – add .visible when element enters viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Existing language toggle code (unchanged) – placed after the reveal logic
const toggleBtn = document.getElementById('lang-toggle');
let currentLang = 'en';

// Show back‑to‑top button when scrolling
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

toggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'de' : 'en';
  document.documentElement.setAttribute('lang', currentLang);
  const keys = document.querySelectorAll('[data-key]');
  keys.forEach(el => {
    const key = el.getAttribute('data-key');
    const text = translations[currentLang][key];
    if (text) el.textContent = text;
  });
});

// Initial load – keep English (fallback) if translation missing.

  de: {
    heroTagline: "Computer‑Science‑ und ML‑Student – auf der Suche nach Daten‑, ML‑ oder Software‑Jobs in Deutschland.",
    projectsTitle: "Projekte",
    proj1Title: "Strom‑Wächter",
    proj1Problem: "Deutsche Strompreise schwanken stark.",
    proj1What: "Ich habe einen Live‑Tracker gebaut, der SMARD‑Daten abruft und Preistrends visualisiert.",
    proj1Tech: "Python, pandas, Plotly, Streamlit, GitHub Actions",
    proj1Result: "Nutzer können günstige Stunden erkennen und ihren Verbrauch planen.",
    proj2Title: "Germany Student Companion",
    proj2Problem: "Internationale Studierende finden kaum praktische Infos zum Studium in Deutschland.",
    proj2What: "Ich habe ein Web‑Portal erstellt, das Visa‑Leitfäden, Wohnungs‑Tipps und Stipendien‑Übersichten bündelt.",
    proj2Tech: "Python (Flask), SQLite, Bootstrap, Netlify (statischer Build)",
    proj2Result: "Besucher finden schnell die gesuchten Ressourcen.",
    proj3Title: "LSTM‑basierte Zeitreihen‑Prognose",
    proj3Problem: "Landwirte benötigen zuverlässige Preisprognosen für hortikulturelle Produkte.",
    proj3What: "Ich habe ein LSTM‑Modell mit‑entwickelt, das wöchentliche Preisentwicklungen vorhersagt.",
    proj3Tech: "Python, TensorFlow/Keras, pandas, scikit‑learn",
    proj3Result: "Das Modell erreichte einen MAPE von < 8 % auf Testdaten.",
    aboutTitle: "Über mich",
    bio: "Ich studiere Informatik an der Saarland‑Universität. Ich mag Daten in Einsichten zu verwandeln und saubere Front‑Ends zu bauen. Ich suche Daten‑Science‑, ML‑ oder Software‑Positionen in Deutschland.",
    skillsTitle: "Fähigkeiten",
    contactTitle: "Kontakt",
    cvBtn: "Lebenslauf herunterladen"
  },
  en: {}
};

const toggleBtn = document.getElementById('lang-toggle');
let currentLang = 'en';

// Show back‑to‑top button when scrolling
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

toggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'de' : 'en';
  document.documentElement.setAttribute('lang', currentLang);
  const keys = document.querySelectorAll('[data-key]');
  keys.forEach(el => {
    const key = el.getAttribute('data-key');
    const text = translations[currentLang][key];
    if (text) el.textContent = text;
  });
});

// Initial load – keep English (fallback) if translation missing.
