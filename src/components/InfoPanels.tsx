'use client';

import ScrollReveal from './ScrollReveal';
import { TrophyIcon, SparkIcon, GitHubIcon, CapIcon, LayersIcon, JoystickIcon } from './Icons';
import GitHubHeatmap from './GitHubHeatmap';
import type { GitHubStats, ContributionData } from '@/lib/github';

const TECH = ['C', 'C++', 'Java', 'HTML/CSS/JS', 'Python', 'NumPy', 'Pandas', 'Linux (Arch)', 'Hyprland', 'Git', 'Notion API', 'Blockchain', 'IoT Concepts'];

const HIGHLIGHTS = [
  { icon: CapIcon, text: 'Learning ML/AI from scratch via ml-research-journey — Python → NumPy/Pandas → Classical ML' },
  { icon: LayersIcon, text: 'Built ClearPath, a full-stack university clearance system, out of frustration with paper forms' },
  { icon: TrophyIcon, text: 'Won "Best Emerging Team" at UIU CSE FEST 2025 with Wastopia, a blockchain waste-tracking platform' },
  { icon: SparkIcon, text: 'Also teach — wrote OOP (Java) notes classmates actually use, hosted on Notion' },
  { icon: JoystickIcon, text: 'Off the keyboard: esports (SpicyFalcon619, Valorant Gold 1), Rubik’s cubes, tuning Arch Linux + Hyprland' },
];

export default function InfoPanels({ githubStats, contributions }: { githubStats: GitHubStats; contributions: ContributionData }) {
  return (
    <ScrollReveal id="profile" className="container">
      <div className="panel-row">
        <div className="info-panel-v3">
          <h3 className="panel-title">About</h3>
          <p className="about-p">
            I&apos;m <strong>SpicyFalcon619</strong> — a CSE undergrad at United International University (2nd year), split between two tracks: systems programming, and, more recently, machine learning &amp; AI.
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

      <div className="activity-panel">
        <div className="activity-head">
          <div className="now-learning">
            <SparkIcon size={20} />
            <div>
              <div className="award-title">Currently learning: Classical ML</div>
              <div className="award-sub muted">Building on Python, NumPy &amp; Pandas foundations</div>
            </div>
          </div>
          <a className="text-link small" href="https://spicyfalcon619.github.io/ml-research-journey/ml-research-roadmap.html" target="_blank" rel="noreferrer">View roadmap &rarr;</a>
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
