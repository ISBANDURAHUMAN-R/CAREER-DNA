# CAREER DNA

**"Don't tell us what job you want. Tell us how you think."**

CAREER DNA is a frontend-only, interactive career discovery experience. Instead of picking a job title from a dropdown, the user answers 20 short questions about how they think, solve problems and create. Their answers are scored across 8 career categories and 8 skill dimensions, producing a personalized dashboard: a radar chart, ranked career matches, a tailored project recommendation, a learning roadmap, a full career explorer, and a small achievement system.

>  This is a self-assessment tool for exploration, not a scientifically validated career test. Every result is phrased as a "potential match" or "suggested path."

---

##  Features

- **20-question DNA Sequence** — a full-screen, one-question-at-a-time quiz with animated answer cards and an in-flow AI guide, **NOVA**, who reacts to each pick.
- **Weighted scoring engine** — every answer contributes points to multiple career categories *and* multiple skill dimensions at once; nothing is hardcoded.
- **Cinematic analysis screen** — a short animated sequence ("Reading patterns... Mapping interests...") before the reveal.
- **Results dashboard** — a canvas-drawn radar chart, animated skill bars, 5 ranked career matches, 3 dynamic project recommendations, and a roadmap generated from your top career.
- **Career Explorer** — browse all 8 career categories manually, independent of your quiz result.
- **Achievements** — 6 badges unlocked based on real scoring conditions, persisted in `localStorage`.
- **History & retake** — view your previous result, retake the assessment, or wipe all local data.
- **3D hero visual** — a Three.js DNA helix that responds to cursor movement (falls back gracefully if WebGL/Three.js is unavailable).
- Fully responsive, keyboard-navigable, and respects `prefers-reduced-motion`.

---

## 🧱 Tech stack

- HTML5 / CSS3 / Vanilla JavaScript (no framework, no build step)
- [Three.js](https://threejs.org/) (r128, via CDN) for the hero DNA visual
- [GSAP](https://gsap.com/) (via CDN) for entrance and transition animations
- `localStorage` for all state — answers, results, history and achievements
- **No backend. No database. No authentication.**

---

## 📁 Project structure

```
career-dna/
│
├── index.html              # All screens: landing, assessment, analysis, results
├── css/
│   ├── style.css            # Core design system (colors, type, components)
│   └── responsive.css       # Breakpoints — mobile layouts are restructured, not shrunk
│
├── js/
│   ├── questions.js          # The 20-question bank + weighted answer scoring
│   ├── scoring.js            # Pure scoring functions (accumulate, normalize, rank)
│   ├── careers.js            # Metadata for the 8 career categories
│   ├── projects.js           # Project recommendations grouped by career
│   ├── storage.js            # localStorage read/write/reset helpers
│   └── app.js                # Screen management, DOM rendering, Three.js/GSAP wiring
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── models/
│
└── README.md
```

The app is a single-page experience: `index.html` contains four `<section>` "screens" (`#screen-landing`, `#screen-assessment`, `#screen-analysis`, `#screen-results`) that `app.js` shows/hides — there is no page reload or router.

---

## 🚀 Running it locally

No build step, no npm install. Two options:

**Option A — just open it**
Double-click `index.html`. Everything works, though some browsers restrict certain features (like `localStorage` in some setups) when opened via `file://`.

**Option B — serve it locally (recommended)**
```bash
cd career-dna
python3 -m http.server 8080
# then open http://localhost:8080
```
or, with Node installed:
```bash
npx serve .
```

---

## 🧠 How the scoring works

1. **`questions.js`** defines 20 questions, each with 4 answers. Every answer carries two weighted point objects:
   - `career`: points toward one or more of `ai, ml, software, frontend, uiux, data, cybersecurity, devops`
   - `dims`: points toward one or more of `logic, creativity, analysis, technical, design, curiosity, communication, problemSolving`
2. **`scoring.js`** walks the user's 20 answers, sums the raw points per key, then **normalizes** each key against the maximum possible score achievable for that key across the whole question bank — so categories that appear in fewer questions aren't unfairly capped.
3. The top 5 careers are ranked by normalized percentage. The top 1–2 feed the **project recommendation engine** (`projects.js`) and the **roadmap** (`CDNA_ROADMAPS` in `scoring.js`).
4. A short humor line is picked based on the resulting profile (e.g. a very flat profile across all 8 careers triggers *"NOVA is confused. You appear to have chosen EVERYTHING."*).

Nothing about this mapping is shown to the user during the quiz — the questions read as ordinary preference questions, not "pick your career" prompts.

---

## 💾 What's stored in `localStorage`

Key: `careerDnaState_v1`

```json
{
  "completed": true,
  "answers": [],
  "lastResult": { "careerPct": {}, "dimPct": {}, "topCareers": [], "projects": [] },
  "history": [ /* up to 10 previous results */ ],
  "achievements": { "first-sequence": true }
}
```

- **View previous result** — reads `lastResult` without retaking the quiz.
- **Retake Assessment** — starts a fresh run; on completion, the previous `lastResult` is pushed into `history`.
- **Reset Data** — clears the key entirely (with a confirmation prompt).

---

## ♿ Accessibility

- Semantic headings and landmark elements throughout.
- Answer cards use `role="radiogroup"` / `role="radio"` with `aria-checked`.
- All interactive elements are reachable and operable by keyboard, with visible focus rings.
- Color contrast targets WCAG AA on all text against its background.
- `prefers-reduced-motion` disables the DNA helix animation, GSAP entrance effects, and analysis-screen pacing speeds up rather than looping.

---

## 📸 Screenshots

_Add screenshots here once deployed — suggested shots:_
- `screenshots/hero.png` — landing page hero with the 3D DNA helix
- `screenshots/assessment.png` — a question mid-assessment with NOVA's reaction visible
- `screenshots/results-radar.png` — the results dashboard radar chart + career matches
- `screenshots/explorer.png` — the Career Explorer grid

---

## 🔭 Possible extensions

- Swap the canvas radar chart for a WebGL/animated version.
- Add a shareable results card (image export) for social sharing.
- Expand the question bank and add a "confidence" weighting per answer.
- Add light/dark theme support via `prefers-color-scheme`.

---

Built as a portfolio piece to demonstrate frontend architecture, animation, data-driven UI, and clean vanilla-JS state management without a framework.
