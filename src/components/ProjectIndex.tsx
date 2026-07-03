'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { SparkIcon, LayersIcon, PinIcon, CompassIcon, CodeIcon, JoystickIcon, CapIcon } from './Icons';

const PROJECTS = [
  {
    title: 'ml-research-journey',
    description: 'Documenting my machine learning & AI journey from the ground up — Python foundations through NumPy, Pandas, and now Classical ML, working toward neural networks.',
    tags: ['Python', 'NumPy', 'Pandas', 'Machine Learning'],
    link: 'https://github.com/SpicyFalcon619/ml-research-journey',
    linkText: 'View on GitHub',
    icon: SparkIcon,
  },
  {
    title: 'ClearPath',
    description: 'A full-stack University Clearance System with Student, Department Admin, and Master Admin portals — real-time approval tracking and PDF certificate generation, replacing paper-based clearance.',
    tags: ['PHP', 'MySQL', 'Full-Stack'],
    link: 'https://github.com/SpicyFalcon619/ClearPath',
    linkText: 'View on GitHub',
    icon: LayersIcon,
  },
  {
    title: 'UIUNest',
    description: 'A comprehensive housing, flatmate matching, and peer-to-peer marketplace platform built exclusively for UIU students and landlords.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Marketplace'],
    link: 'https://uiunest-production.up.railway.app/',
    linkText: 'View Live Project',
    icon: PinIcon,
  },
  {
    title: 'Wastopia',
    description: 'Design & research for a blockchain-based waste-tracking & incentive platform. Won "Best Emerging Team" (Blockchain) at UIU CSE FEST 2025.',
    tags: ['Blockchain', 'Research', 'IoT (planned)'],
    link: 'https://project-wastopia.vercel.app/',
    linkText: 'View Live Project',
    icon: CompassIcon,
  },
  {
    title: 'YT-DeepNote',
    description: 'A companion for deep learning on YouTube — timestamped Markdown notes, precision bookmarks, video screenshots, and 1-click sync to a Notion workspace.',
    tags: ['JavaScript', 'Chrome Extension', 'Notion API'],
    link: 'https://github.com/SpicyFalcon619/YT-DeepNote',
    linkText: 'View on GitHub',
    icon: CodeIcon,
  },
  {
    title: 'spicyfalcon-os',
    description: 'A browser-based OS simulation acting as an interactive portfolio and desktop environment.',
    tags: ['JavaScript', 'HTML', 'CSS', 'OS Simulation'],
    link: 'https://spicyfalcon-os.vercel.app',
    linkText: 'View Live Project',
    icon: JoystickIcon,
  },
  {
    title: 'Morse Code Translator',
    description: 'Classic Morse code translator for learning and teaching Java, with console and GUI implementations.',
    tags: ['Java', 'Crypto'],
    link: 'https://spicy-morse-code-java.vercel.app/',
    linkText: 'View Live Project',
    icon: CodeIcon,
  },
  {
    title: 'OOP Notes (Notion)',
    description: 'Teaching notes prepared for classmates — utilities, references, and OOP (Java) concepts explained simply, available on Notion.',
    tags: ['Teaching', 'Notion'],
    link: 'https://bold-ocelot-ae1.notion.site/Theory-1d9b38bc56448124b6fce299b5459c4e',
    linkText: 'View Notes',
    icon: CapIcon,
  },
];

export default function ProjectIndex() {
  const [active, setActive] = useState(0);
  const p = PROJECTS[active];
  const ActiveIcon = p.icon;

  return (
    <ScrollReveal id="work" className="container">
      <div className="projects-head">
        <h2 className="section-title">Selected Work</h2>
        <span className="section-mark">{String(active + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}</span>
      </div>

      <div className="project-index">
        <div className="index-list">
          {PROJECTS.map((proj, i) => (
            <motion.button
              key={proj.title}
              className={`index-row${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            >
              {active === i && (
                <motion.span
                  className="index-row-indicator"
                  layoutId="index-row-indicator"
                  transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                />
              )}
              <span className="idx mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="index-title">{proj.title}</span>
              <span className="index-tags">{proj.tags.join(' / ')}</span>
            </motion.button>
          ))}
        </div>

        <div className="index-detail">
          <div className={`index-visual v${active % 4}`} aria-hidden="true">
            <ActiveIcon size={40} className="index-visual-icon" />
            <span className="index-visual-num mono">{String(active + 1).padStart(2, '0')}</span>
          </div>
          <div className="index-detail-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tag-row">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <a className="text-link" href={p.link} target="_blank" rel="noreferrer">{p.linkText} &rarr;</a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
