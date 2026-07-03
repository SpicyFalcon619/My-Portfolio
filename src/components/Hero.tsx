'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';
import {
  GitHubIcon, LinkedInIcon, InstagramIcon, MailIcon,
  PinIcon, CompassIcon, LayersIcon, CodeIcon, CapIcon,
} from './Icons';
import type { GitHubStats } from '@/lib/github';

export default function Hero({ githubStats }: { githubStats: GitHubStats }) {
  return (
    <ScrollReveal id="hero" className="hero-v3 container">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="section-mark">Undergrad &middot; CSE &middot; UIU</span>

          <h1 className="hero-title">
            Ahmad Maruf<br />
            <span className="accent-block">Hossain</span>
          </h1>

          <p className="hero-tagline-v3">
            <span className="tagline-handle">SpicyFalcon619</span>
            <span className="tagline-sep">&mdash;</span>
            <TypeAnimation
              sequence={['Self-taught coder going deep on machine learning and AI, with Linux and systems programming along the way.', 1000]}
              wrapper="span"
              speed={70}
              cursor={false}
            />
            <span className="type-caret">|</span>
          </p>

          <div className="hero-tags">
            <span className="pill">Machine Learning</span>
            <span className="pill">C &middot; C++ &middot; Java</span>
            <span className="pill">Linux Enthusiast</span>
            <span className="pill">Esports Player</span>
          </div>

          <div className="hero-cta-row">
            <MagneticButton>
              <a className="btn-solid" href="https://github.com/SpicyFalcon619" target="_blank" rel="noreferrer">
                <GitHubIcon /> GitHub
              </a>
            </MagneticButton>
            <MagneticButton>
              <a className="btn-outline" href="https://www.linkedin.com/in/ahmad-maruf-hossain/" target="_blank" rel="noreferrer">
                <LinkedInIcon /> LinkedIn
              </a>
            </MagneticButton>
            <MagneticButton>
              <a className="btn-outline" href="mailto:a.marufhossain619@gmail.com">
                <MailIcon /> Email
              </a>
            </MagneticButton>
            <MagneticButton>
              <a className="btn-outline" href="https://www.instagram.com/spicy_falconn/" target="_blank" rel="noreferrer">
                <InstagramIcon /> Instagram
              </a>
            </MagneticButton>
          </div>
        </div>

        <motion.aside
          className="profile-card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="profile-header">
            <div className="profile-photo-round">
              <Image src="/assets/avatar.jpg" alt="Ahmad Maruf Hossain" fill sizes="104px" priority />
            </div>
            <div>
              <div className="profile-name-line">Ahmad Maruf Hossain</div>
              <div className="profile-role-line">CSE Undergrad &middot; UIU</div>
            </div>
          </div>

          <div className="profile-meta-grid">
            <div className="meta-cell">
              <PinIcon size={15} />
              <div>
                <div className="label">Based in</div>
                <div className="value">Dhaka, BD</div>
              </div>
            </div>
            <div className="meta-cell">
              <CompassIcon size={15} />
              <div>
                <div className="label">Focus</div>
                <div className="value">ML/AI &amp; Systems</div>
              </div>
            </div>
            <div className="meta-cell">
              <GitHubIcon size={15} />
              <div>
                <div className="label">Handle</div>
                <div className="value">@SpicyFalcon619</div>
              </div>
            </div>
            <div className="meta-cell">
              <CapIcon size={15} />
              <div>
                <div className="label">University</div>
                <div className="value">United International University</div>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>

      <div className="stats-row">
        <div className="stat-tile">
          <LayersIcon />
          <div className="stat-num">8</div>
          <div className="stat-label">Projects Shipped</div>
        </div>
        <div className="stat-tile">
          <GitHubIcon />
          <div className="stat-num">{githubStats.publicRepos}</div>
          <div className="stat-label">Public Repos</div>
        </div>
        <div className="stat-tile">
          <CodeIcon />
          <div className="stat-num">19</div>
          <div className="stat-label">Languages &amp; Tools</div>
        </div>
      </div>
    </ScrollReveal>
  );
}
