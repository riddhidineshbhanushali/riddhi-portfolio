# Riddhi Dinesh Bhanushali – Personal Portfolio

This repository hosts the source code for my **dark‑theme‑only** personal portfolio site, which is live at:

> https://riddhidineshbhanushali.github.io/riddhi-portfolio/

## Overview

- **Design** – Inspired by the `vCard‑personal‑portfolio` template, featuring a hero banner, a vertical sidebar (vCard) with navigation, and a dark colour scheme (`#1e1e1e` background, warm accent `#ffb400`).
- **Content** – Includes:
  - About me
  - Projects (Strom‑Wächter, Germany Student Companion, LSTM‑Based Time‑Series Forecasting)
  - Work experience (Frontend Intern, Software Engineer, Intern)
  - Technical skills grid
  - Contact links (email, GitHub, LinkedIn)
- **Technologies** – Pure static HTML, CSS and a small JavaScript file for scroll‑reveal, back‑to‑top, and (now removed) theme toggle.
- **Responsive** – Works on desktop and mobile, with a column‑stack layout on narrow screens.

## How to run locally

```bash
# Clone the repo (if you haven't already)
git clone https://github.com/riddhidineshbhanushali/riddhi-portfolio.git
cd riddhi-portfolio

# Start a simple HTTP server (Python 3)
python3 -m http.server 8000
# Open http://localhost:8000 in your browser
```

## Customisation

- Replace `assets/profile.jpg` with your own profile picture.
- Add or edit project cards in the `index.html` file – each card uses the `.card` class.
- To change colours, edit the CSS variables in `style.css` (look for `--primary`, `--bg`, etc.).

## License

The layout and static assets are my own work, but feel free to fork and adapt the design for your own portfolio.
