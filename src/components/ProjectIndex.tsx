'use client';

import { useState, type ComponentType } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { SparkIcon, LayersIcon, PinIcon, CompassIcon, CodeIcon, JoystickIcon, CapIcon, TrophyIcon, GlobeIcon } from './Icons';

type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkText: string;
  repoLink?: string;
  repoText?: string;
  icon: ComponentType<{ size?: number; className?: string }>;
};

const PROJECTS: Project[] = [
  {
    title: 'Nestly',
    description: 'My proudest build, made with Sadia Noman Tonni, Nazha Tarannum Roza and Mohammad Mahadi Hasan: a platform for finding, verifying and living in shared student housing near Dhaka campuses. Every listing carries an itemised cost breakdown (rent, utilities, fees, no hidden costs), flatmates get an 8-dimension compatibility score before moving in, landlords are verified by admins, mess bills split themselves, and Nestly Exchange trades second-hand furniture with offers and counter-offers. Real-time messaging and an admin analytics dashboard sit on top.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Realtime'],
    link: 'https://nestly-core.vercel.app',
    linkText: 'View Live Project',
    repoLink: 'https://github.com/SpicyFalcon619/nestly-core',
    icon: PinIcon,
  },
  {
    title: 'Field Guides',
    description: 'Three interactive learning sites on one shared app. The Java Field Guide follows UIU’s OOP courses (CSE 1115/1116) and grew out of the notes I wrote for classmates; the ML Field Guide goes from Python to PyTorch; the AI Engineering guide goes from JavaScript to a React + FastAPI app. Every code block runs in the browser, the output shown is real captured output, and each guide has a rail map of progress, a glossary and Ctrl+K search.',
    tags: ['React', 'TypeScript', 'Vite', 'Java', 'Python', 'Teaching'],
    link: 'https://spicyfalcon619.github.io/java-field-guide/',
    linkText: 'Java Field Guide',
    repoLink: 'https://spicyfalcon619.github.io/ml-research-journey/',
    repoText: 'ML Field Guide',
    icon: CapIcon,
  },
  {
    title: 'Drawer 378',
    description: 'My whole CSE degree as a searchable catalogue: 3,000+ files across 37 courses. Typo-tolerant search that understands course abbreviations, a built-in viewer for PDFs, slides, documents and notebooks, and whole folders zipped in the browser with cancel and stall handling. GitHub Pages caps a site at 1 GB, so a Python pipeline packs 4.3 GB across five sites and publishes everything with one command.',
    tags: ['JavaScript', 'Python', 'PDF.js', 'GitHub Pages', 'Automation'],
    link: 'https://spicyfalcon619.github.io/University/',
    linkText: 'Open the Archive',
    icon: LayersIcon,
  },
  {
    title: 'PhytoCast',
    description: 'A prevention-first smart plant-care system, built by a team of six for the Electronics Lab. One ESP32 forecasts leaf-spot risk from temperature and humidity, irrigates in calibrated pulses, runs a fan and shade, watches the reservoir and rain, and deters pests, streaming to a Flask dashboard over WiFi. A MobileNetV2 disease detector was retrained on 87,867 images across 38 classes, reaching 94.7% validation accuracy.',
    tags: ['ESP32', 'C++', 'Flask', 'MobileNetV2', 'IoT'],
    link: 'https://github.com/SpicyFalcon619/PhytoCast',
    linkText: 'View on GitHub',
    icon: SparkIcon,
  },
  {
    title: 'Mandela Catalogue Field Guide',
    description: 'An interactive fan guide to an analog-horror series: tape explorer, case files, threaded discussion with votes and moderation, accounts, and a full admin CMS. One async database interface runs on local SQLite or hosted Turso, covered by unit and Playwright end-to-end tests.',
    tags: ['Next.js', 'TypeScript', 'SQLite', 'Turso', 'Playwright'],
    link: 'https://mandela-catalogue.vercel.app',
    linkText: 'View Live Project',
    repoLink: 'https://github.com/SpicyFalcon619/mandela-catalogue',
    icon: CompassIcon,
  },
  {
    title: 'Wastopia',
    description: 'Design and research for a blockchain-based waste-tracking and incentive platform. Won "Best Emerging Team" (Blockchain) at UIU CSE FEST 2025.',
    tags: ['Blockchain', 'Research', 'Next.js'],
    link: 'https://project-wastopia.vercel.app/',
    linkText: 'View Live Project',
    icon: TrophyIcon,
  },
  {
    title: 'Shetu',
    description: 'An AI system that keeps a job intact through a long leave, starting with maternity leave. MAP: an AI interview in Bangla, English or Banglish turns her real duties into an evidence-backed Role Map and finds the ones she forgot. HOLD: colleagues cover them, and a change typed in plain words is re-planned. FIT: her return is planned around the arrangement she needs. AI proposes, rules check, people decide. Selected for Round 2 (the Concept Pitch) of Grameenphone FutureMakers 2026, Gender Equality & Inclusion, with Sadia Noman Tonni and Mohammad Mahadi Hasan.',
    tags: ['AI', 'FastAPI', 'React', 'SQLite', 'Team project'],
    link: 'https://github.com/SpicyFalcon619/shetu-prototype',
    linkText: 'See the Prototype',
    icon: GlobeIcon,
  },
  {
    title: 'YT-DeepNote',
    description: 'A companion for learning on YouTube: timestamped Markdown notes, precision bookmarks, video screenshots, and one-click sync of the whole session to a Notion workspace.',
    tags: ['JavaScript', 'Chrome Extension', 'Notion API'],
    link: 'https://github.com/SpicyFalcon619/YT-DeepNote',
    linkText: 'View on GitHub',
    icon: CodeIcon,
  },
  {
    title: 'ClearPath',
    description: 'A full-stack university clearance system with real-time approval tracking and PDF certificate generation, replacing paper-based clearance.',
    tags: ['PHP', 'MySQL', 'Full-Stack'],
    link: 'https://github.com/SpicyFalcon619/ClearPath',
    linkText: 'View on GitHub',
    icon: LayersIcon,
  },
  {
    title: 'spicyfalcon-os',
    description: 'A browser desktop with windows, a taskbar, a start menu and working apps (Paint, Minesweeper, a calculator, a command prompt and a music player), acting as an interactive portfolio.',
    tags: ['React', 'Zustand', 'Framer Motion', 'Vite'],
    link: 'https://spicyfalcon-os.vercel.app',
    linkText: 'View Live Project',
    icon: JoystickIcon,
  },
  {
    title: 'research-os',
    description: 'A beginner-friendly workspace for learning to find, read and evaluate academic papers: note templates, a literature matrix, a read-only Zotero sync with offline tests in CI, and an AI mentor setup that coaches instead of ghostwriting.',
    tags: ['Python', 'Zotero', 'GitHub Actions'],
    link: 'https://github.com/SpicyFalcon619/research-os',
    linkText: 'View on GitHub',
    icon: SparkIcon,
  },
  {
    title: 'claude-skills-setup',
    description: 'One idempotent script (PowerShell and Bash) that installs a global AI coding toolkit on any machine: design skills checked in a real browser, Playwright, and 84 brand design systems, with security-sensitive tools deliberately left out.',
    tags: ['PowerShell', 'Bash', 'Automation'],
    link: 'https://github.com/SpicyFalcon619/claude-skills-setup',
    linkText: 'View on GitHub',
    icon: CodeIcon,
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
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            >
              <span className="idx mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="index-title">{proj.title}</span>
              <span className="index-tags">{proj.tags.join(' / ')}</span>
            </motion.button>
          ))}
        </div>

        <div className={`index-detail v${active % 4}`}>
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
                {p.repoLink && (
                  <a className="text-link" href={p.repoLink} target="_blank" rel="noreferrer" style={{ marginLeft: 16 }}>
                    {p.repoText ?? 'View on GitHub'} &rarr;
                  </a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
