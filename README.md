<p align="center">
  <img src="assets/banner.png" alt="CAREER-DNA Banner" width="100%">
</p>

# ◈ CAREER DNA — Career Discovery Engine

[![CI](https://github.com/ISBANDURAHUMAN-R/CAREER-DNA/actions/workflows/ci.yml/badge.svg)](https://github.com/ISBANDURAHUMAN-R/CAREER-DNA/actions/workflows/ci.yml)

## ◆ About the Project
CAREER DNA is an interactive, client-side career discovery assessment designed to help users identify potential technical paths through their problem-solving and thinking preferences. By completing a 20-question multi-weighted quiz, users receive a personalized profile that ranks career matches, calculates dimensional strengths, and outlines learning roadmaps.

## ❖ Key Features
- 20-question sequential assessment interface with dynamic answer weighting across 8 career categories and 8 skill dimensions.
- Normalization scoring algorithm mapping cumulative answer weights into ranked career recommendations.
- Interactive results dashboard featuring an HTML5 Canvas radar chart, progress meters, and project ideas.
- Interactive Three.js 3D DNA double helix hero graphic responsive to cursor movement.
- LocalStorage client persistence retaining previous results, retake history, and unlocked achievements without requiring account creation.

## ◆ System Architecture
```mermaid
graph TD
    subgraph UI ["Interactive UI & Visual Presentation"]
        Hero[Three.js 3D DNA Double Helix] --> UserInput[20-Question Assessment Flow]
        UserInput --> Nav[Question Sequencer & State]
    end

    subgraph AnalyticsEngine ["Scoring & Analytical Matrix"]
        Nav --> Answers[Weighted Multi-Response Vectors]
        Answers --> ScoringEngine[scoring.js Normalization Engine]
        ScoringEngine --> DimCalc[8 Skill Dimensions Evaluator]
        ScoringEngine --> CareerRank[8 Career Categories Ranker]
    end

    subgraph Visualization ["Dashboard & Insights Engine"]
        DimCalc --> RadarChart[HTML5 Canvas Radar Chart]
        CareerRank --> MatchCard[Ranked Recommendations & Roadmap]
        CareerRank --> ProjectRecs[Curated Project Ideas]
    end

    subgraph Persistence ["Client Persistence Layer"]
        ScoringEngine --> LocalStore[storage.js LocalStorage Cache]
        LocalStore --> History[Retake History & Unlocked Achievements]
    end
```

## ⬢ Technologies Used
- HTML5 & CSS3
- JavaScript (ES6+ Vanilla)
- Three.js (r128)
- GSAP (GreenSock Animation Platform)
- HTML5 Canvas API

## § Requirements
- Modern web browser

## ▲ Installation & Execution
```bash
# Serve locally via Python
python -m http.server 8080

# Or serve via Node.js
npx serve .
```
Open `http://localhost:8080` in your web browser.

## ※ Developer
Developer: ISBANDU RAHUMAN R  
GitHub: https://github.com/ISBANDURAHUMAN-R
