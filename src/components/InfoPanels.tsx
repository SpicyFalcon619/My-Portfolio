'use client';

import ScrollReveal from './ScrollReveal';
import { TrophyIcon, SparkIcon, GitHubIcon, CapIcon, PinIcon, JoystickIcon } from './Icons';
import GitHubHeatmap from './GitHubHeatmap';
import type { GitHubStats, ContributionData } from '@/lib/github';

const TECH = [
  'C', 'C++', 'Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'PHP',
  'React', 'Next.js', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'MySQL', 'SQLite / Turso',
  'NumPy', 'Pandas', 'scikit-learn', 'PyTorch', 'Flask', 'ESP32',
  'Playwright', 'GitHub Actions', 'Git', 'Linux (Arch)', 'Hyprland',
];

const INTERESTS = [
  { area: 'Human-Computer Interaction', topics: ['Human-centred AI', 'Explainable and controllable AI', 'Interactive ML', 'AR/VR', 'Learning technology'] },
  { area: 'Artificial Intelligence', topics: ['Machine learning', 'NLP for Bangla and Banglish', 'Applied AI with people in the loop'] },
  { area: 'Systems', topics: ['Blockchain', 'IoT and embedded systems'] },
];

const HIGHLIGHTS = [
  { icon: TrophyIcon, text: 'Selected as Undergraduate Assistant (UGA) in the CSE department at UIU — assisting in the Database Management System Lab since July 2026' },
  { icon: PinIcon, text: 'Built Nestly with Sadia Noman Tonni, Nazha Tarannum Roza and Mohammad Mahadi Hasan — a housing & flatmate-matching platform for UIU students on Next.js and Supabase; the project I\'m proudest of, and a fully original idea' },
  { icon: CapIcon, text: 'Teach through three interactive Field Guides (Java, ML, AI Engineering) where every example runs in the browser; the Java one follows UIU\'s OOP courses' },
  { icon: SparkIcon, text: 'Published Drawer 378 — my whole degree (3,000+ files, 37 courses) as a searchable archive that juniors use for past papers and slides' },
  { icon: TrophyIcon, text: 'Won "Best Emerging Team" at UIU CSE FEST 2025 with Wastopia, a blockchain waste-tracking platform' },
  { icon: JoystickIcon, text: 'Off the keyboard: casual gaming (Valorant Gold 3 among others), Rubik’s cubes, tuning Arch Linux + Hyprland' },
];

export default function InfoPanels({ githubStats, contributions }: { githubStats: GitHubStats; contributions: ContributionData }) {
  return (
    <ScrollReveal id="profile" className="container">
      <div className="panel-row">
        <div className="info-panel-v3">
          <h3 className="panel-title">About</h3>
          <p className="about-p">
            I&apos;m <strong>SpicyFalcon619</strong> — a CSE undergrad at United International University (3rd year, 8th trimester) and an Undergraduate Assistant for the Database Management System Lab. I build complete, working products, teach what I learn through interactive guides, and am going deep on machine learning &amp; AI.
          </p>
          <ul className="highlight-list">
            {HIGHLIGHTS.map((h) => (
              <li key={h.text}>
                <h.icon size={15} />
                <span>{h.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="info-panel-v3">
          <h3 className="panel-title">Tech Stack</h3>
          <div className="tech-grid">
            {TECH.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="interests-panel" id="research">
        <h3 className="panel-title">Research Interests</h3>
        <p className="interests-lead">
          I want to work on <strong>AI that people can understand and stay in control of</strong>, from how it explains itself to how it handles Bangla and code-mixed Banglish. My blockchain work (finalist at Blockchain Olympiad Bangladesh 2025, third at the UIU Computer Club competition, best emerging team at UIU CSE FEST 2025) is where I started.
        </p>
        <div className="interest-grid">
          {INTERESTS.map((g) => (
            <div className="interest-group" key={g.area}>
              <h4>{g.area}</h4>
              <div className="tech-grid">
                {g.topics.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="activity-panel">
        <div className="activity-head">
          <div className="now-learning">
            <SparkIcon size={20} />
            <div>
              <div className="award-title">Currently learning: Deep learning with PyTorch</div>
              <div className="award-sub muted">Python, NumPy, Pandas and classical ML done; next, React + FastAPI apps with a model behind them</div>
            </div>
          </div>
          <a className="text-link small" href="https://spicyfalcon619.github.io/ml-research-journey/" target="_blank" rel="noreferrer">Open the ML Field Guide &rarr;</a>
        </div>

        <GitHubHeatmap data={contributions} />

        <div className="github-live">
          <GitHubIcon size={16} />
          <span>{githubStats.publicRepos} public repos</span>
          <span className="dot-sep">&middot;</span>
          <span>mostly {githubStats.topLanguages.slice(0, 2).join(' & ')}</span>
          <span className="dot-sep">&middot;</span>
          <span>active {githubStats.lastActive}</span>
        </div>
      </div>
    </ScrollReveal>
  );
}
