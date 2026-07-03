'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import ThemeToggle from '@/components/ThemeToggle';
import ScrollReveal from '@/components/ScrollReveal';
import MagneticButton from '@/components/MagneticButton';
import ProjectCard from '@/components/ProjectCard';
import Dock from '@/components/Dock';

export default function HomePage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topPos = el.offsetTop - 80;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* BRAND MARK */}
      <motion.button
        className="brand-mark"
        onClick={() => scrollTo('hero')}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        aria-label="Back to top"
      >
        <span className="logo-wrap">
          <Image src="/assets/my-logo.png" alt="" width={26} height={26} style={{ objectFit: 'contain' }} priority />
        </span>
        <span>
          <span className="name">Ahmad Maruf Hossain</span>
          <span className="role">CSE &middot; UIU</span>
        </span>
      </motion.button>

      <ThemeToggle />

      <div className="wrap">
        <main>
          {/* HERO */}
          <ScrollReveal id="hero" className="hero">
            <div className="glow-blob accent" style={{ width: 420, height: 420, top: -120, left: -160 }} />
            <div className="glow-blob accent-2" style={{ width: 320, height: 320, top: 80, right: -120 }} />

            <div>
              <motion.div
                className="hero-eyebrow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {'// undergrad · cse · uiu'}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Ahmad Maruf <span className="accent">Hossain</span>
              </motion.h1>

              <motion.div
                className="lead"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <TypeAnimation
                  sequence={[
                    'I tinker with code, Linux, and blockchains. Self-taught coder who loves gaming, problem-solving, and unsolved mysteries. Aiming to become a solid software / AI / Web3 engineer. Gamer tag: spicyfalcon619',
                    1000,
                  ]}
                  wrapper="span"
                  speed={70}
                  cursor={true}
                />
              </motion.div>

              <motion.div
                className="mini"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="pill">C · C++ · Java</div>
                <div className="pill">Linux Enthusiast</div>
                <div className="pill">Esports Player</div>
              </motion.div>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <MagneticButton>
                  <a className="btn primary" href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>See Projects →</a>
                </MagneticButton>
                <MagneticButton>
                  <a className="btn" href="https://github.com/SpicyFalcon619" target="_blank" rel="noreferrer">GitHub</a>
                </MagneticButton>
                <MagneticButton>
                  <a className="btn" href="https://www.linkedin.com/in/ahmad-maruf-hossain/" target="_blank" rel="noreferrer">LinkedIn</a>
                </MagneticButton>
              </motion.div>
            </div>

            <motion.aside
              className="panel hero-card accent-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="avatar">
                <Image src="/assets/avatar.jpg" alt="Ahmad Maruf Hossain" width={340} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover' }} priority />
              </div>

              <div className="hero-card-meta">
                <div>
                  <div className="tag-name">SpicyFalcon619</div>
                  <div className="tag-sub">Valorant: Gold 1</div>
                </div>
                <div className="award">
                  Award
                  <strong>Best Emerging Team</strong>
                  <strong>Blockchain Category</strong>
                  <strong>UIU CSE FEST 2025</strong>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
                <MagneticButton><a className="pill" href="mailto:a.marufhossain619@gmail.com">Email</a></MagneticButton>
                <MagneticButton><a className="pill" href="https://www.instagram.com/spicy_falconn/" target="_blank" rel="noreferrer">Instagram</a></MagneticButton>
              </div>
            </motion.aside>
          </ScrollReveal>

          {/* ABOUT */}
          <ScrollReveal id="about" parallax={16}>
            <h2>About</h2>
            <div className="panel info-panel">
              <p>
                I&apos;m a passionate CSE undergrad at United International University, currently in my 2nd year. My journey in tech started with curiosity about how things work under the hood, leading me to explore system-level programming, blockchain technology, and software development.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me competing in esports, solving Rubik&apos;s cubes, or tinkering with my Arch Linux with Hyprland setup. I believe in learning by building, which is why I work on projects like Wastopia and various cipher implementations to deepen my understanding of technology.
              </p>
            </div>
          </ScrollReveal>

          {/* EDUCATION */}
          <ScrollReveal id="education">
            <h2>Education</h2>
            <div className="education-timeline">
              <ScrollReveal direction="left" className="panel education-item" delay={0.1}>
                <div className="education-header">
                  <div>
                    <h3>Bachelor of Science in Computer Science &amp; Engineering</h3>
                    <div className="education-org">United International University</div>
                  </div>
                  <div className="education-date">
                    <div>June 2024 - Present</div>
                    <div className="yr">2nd Year</div>
                  </div>
                </div>
                <p className="education-body">
                  Currently pursuing my undergraduate degree. Focusing on core CS fundamentals, programming languages, and emerging tech like blockchain and AI.
                </p>
                <div className="education-tags">
                  <span className="tag">Data Structures</span>
                  <span className="tag">Algorithms</span>
                  <span className="tag">OOP</span>
                  <span className="tag">Database Systems</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" className="panel education-item accent-2" delay={0.2}>
                <div className="education-header">
                  <div>
                    <h3>Higher Secondary Certificate (HSC)</h3>
                    <div className="education-org">Sena Public School &amp; College</div>
                  </div>
                  <div className="education-date">
                    <div>2022 - 2023</div>
                  </div>
                </div>
                <p className="education-body">
                  Completed higher secondary with a focus on Mathematics, Physics, and Chemistry - a solid foundation for CS studies.
                </p>
                <div className="education-tags">
                  <span className="tag">Mathematics</span>
                  <span className="tag">Physics</span>
                  <span className="tag">Chemistry</span>
                  <span className="tag">ICT</span>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* TIMELINE */}
          <ScrollReveal id="timeline">
            <h2>My Journey</h2>
            <div className="panel static timeline-container">
              <div className="timeline">
                <ScrollReveal delay={0.1} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">January 2025</div>
                    <h4>UIU CSE FEST 2025 Winner</h4>
                    <p>Won &quot;Best Emerging Team&quot; in Blockchain Category with Wastopia project</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">2024</div>
                    <h4>Started University Journey</h4>
                    <p>Began CSE at United International University, diving deep into programming and computer science fundamentals</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">2023</div>
                    <h4>Completed HSC</h4>
                    <p>Graduated from Sena Public School &amp; College with Science background</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">2022</div>
                    <h4>Started Higher Secondary</h4>
                    <p>Began HSC journey at Sena Public School &amp; College, building foundation in sciences</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>

          {/* PROJECTS */}
          <ScrollReveal id="projects">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
              <h2>Projects</h2>
              <div className="section-note">click a card to expand</div>
            </div>

            <div className="projects">
              <ProjectCard
                title="UIUNest"
                description="A comprehensive housing, flatmate matching, and peer-to-peer marketplace platform built exclusively for UIU students and landlords."
                tags={['HTML', 'CSS', 'JavaScript', 'Marketplace']}
                extraInfo="Simplifying student housing and item marketplace specifically designed for the UIU community."
                link="https://uiunest-production.up.railway.app/"
                linkText="View Live Project"
                variant="accent"
              />

              <ProjectCard
                title="YT-DeepNote"
                description="Your ultimate companion for deep learning on YouTube. Seamlessly capture timestamped Markdown notes, drop precision bookmarks, capture video screenshots, and 1-click sync your entire learning session directly to a Notion workspace."
                tags={['JavaScript', 'Chrome Extension', 'Notion API']}
                extraInfo="Boost your productivity and never lose track of a YouTube tutorial again with Notion integration."
                link="https://github.com/SpicyFalcon619/YT-DeepNote"
                linkText="View on GitHub"
                variant="accent-2"
              />

              <ProjectCard
                title="Wastopia - Waste to blockchain"
                description="Design & research for a blockchain-based waste-tracking & incentive platform."
                tags={['Blockchain', 'Research', 'IoT (planned)']}
                extraInfo="Won Emerging Team (Blockchain) at UIU CSE FEST 2025."
                link="https://project-wastopia.vercel.app/"
                linkText="View Live Project"
                variant="accent"
              />

              <ProjectCard
                title="spicyfalcon-os"
                description="A browser-based OS simulation acting as an interactive portfolio and desktop environment."
                tags={['JavaScript', 'HTML', 'CSS', 'OS Simulation']}
                extraInfo="A creative way to showcase skills through a familiar desktop UI entirely in the browser."
                link="https://spicyfalcon-os.vercel.app"
                linkText="View Live Project"
                variant="accent-2"
              />

              <ProjectCard
                title="Morse Code Translator"
                description="Classic Morse code translator for learning and teaching Java."
                tags={['Java', 'Crypto']}
                extraInfo="Console and GUI implementations available."
                link="https://spicy-morse-code-java.vercel.app/"
                linkText="View Live Project"
                variant="accent"
              />

              <ProjectCard
                title="OOP Notes (Notion)"
                description="Teaching notes prepared for classmates, including small utilities, references, and concepts explained in a simple and structured way."
                tags={['Teaching', 'Notion']}
                extraInfo="OOP (Java) notes created for classmates, available on Notion."
                link="https://bold-ocelot-ae1.notion.site/Theory-1d9b38bc56448124b6fce299b5459c4e"
                linkText="View Notes"
                variant="accent-2"
              />
            </div>
          </ScrollReveal>

          {/* SKILLS */}
          <ScrollReveal id="skills">
            <h2>Skills</h2>
            <div className="panel info-panel">
              <div className="skills-category">
                <h3>Programming Languages</h3>
                <div className="chips">
                  <MagneticButton><div className="chip">C</div></MagneticButton>
                  <MagneticButton><div className="chip">C++</div></MagneticButton>
                  <MagneticButton><div className="chip">Java</div></MagneticButton>
                  <MagneticButton><div className="chip">HTML/CSS/JS</div></MagneticButton>
                  <MagneticButton><div className="chip">Python (Basic)</div></MagneticButton>
                </div>
              </div>

              <div className="skills-category">
                <h3>Technologies &amp; Tools</h3>
                <div className="chips">
                  <MagneticButton><div className="chip">Linux (Arch)</div></MagneticButton>
                  <MagneticButton><div className="chip">Hyprland</div></MagneticButton>
                  <MagneticButton><div className="chip">Git</div></MagneticButton>
                  <MagneticButton><div className="chip">Notion API</div></MagneticButton>
                  <MagneticButton><div className="chip">Blockchain</div></MagneticButton>
                  <MagneticButton><div className="chip">IoT Concepts</div></MagneticButton>
                </div>
              </div>

              <div className="skills-category">
                <h3>Soft Skills</h3>
                <div className="chips">
                  <MagneticButton><div className="chip">Problem Solving</div></MagneticButton>
                  <MagneticButton><div className="chip">Research</div></MagneticButton>
                  <MagneticButton><div className="chip">Team Collaboration</div></MagneticButton>
                  <MagneticButton><div className="chip">Quick Learning</div></MagneticButton>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CONTACT */}
          <ScrollReveal id="contact">
            <h2>Contact</h2>
            <div className="contact-grid">
              <form action="https://formspree.io/f/myzdbzdy" method="POST" className="panel">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" placeholder="Message" rows={4} required></textarea>
                <MagneticButton>
                  <button type="submit" className="primary" style={{ width: '100%' }}>Send</button>
                </MagneticButton>
              </form>

              <div className="panel info-panel accent-2" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3>Get in touch</h3>
                <p>Email me at <a href="mailto:a.marufhossain619@gmail.com" style={{ color: 'var(--accent)' }}>a.marufhossain619@gmail.com</a></p>
                <p>Follow me on social media or check my GitHub for projects.</p>
              </div>
            </div>
          </ScrollReveal>

          <footer>© 2026 Ahmad Maruf Hossain — built with Next.js</footer>
        </main>
      </div>

      <Dock />

      {/* SOCIAL SIDEBAR */}
      <motion.div
        className="social-sidebar"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <a href="https://github.com/SpicyFalcon619" target="_blank" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.85 10.89.57.11.77-.25.77-.55 0-.27-.01-1.16-.02-2.11-3.19.69-3.87-1.54-3.87-1.54-.52-1.31-1.28-1.66-1.28-1.66-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.76.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.44.11-3 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.56.23 2.71.12 3 .74.8 1.18 1.82 1.18 3.08 0 4.44-2.69 5.42-5.25 5.7.41.36.77 1.08.77 2.18 0 1.57-.01 2.84-.01 3.23 0 .3.2.66.78.55A10.513 10.513 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"/></svg>
        </a>

        <a href="https://www.linkedin.com/in/ahmad-maruf-hossain/" target="_blank" title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.63 1.34 2.97 2.98 2.97 1.63 0 2.98-1.34 2.98-2.97 0-1.64-1.34-2.98-2.98-2.98zM2.4 21.5h5.16v-11H2.4v11zM9.56 10.5h4.96v1.49h.07c.69-1.3 2.37-2.68 4.88-2.68 5.23 0 6.2 3.44 6.2 7.92v9.76h-5.16v-8.65c0-2.07-.04-4.73-2.88-4.73-2.88 0-3.32 2.25-3.32 4.57v8.81H9.56v-11z"/></svg>
        </a>

        <a href="https://www.instagram.com/spicy_falconn/" target="_blank" title="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.21 0 3.59.01 4.85.07 1.17.06 1.98.25 2.44.42.6.23 1.03.51 1.48.97.45.45.74.88.97 1.48.17.46.36 1.27.42 2.44.06 1.26.07 1.64.07 4.85s-.01 3.59-.07 4.85c-.06 1.17-.25 1.98-.42 2.44-.23.6-.51 1.03-.97 1.48-.45.45-.88.74-1.48.97-.46.17-1.27.36-2.44.42-1.26.06-1.64.07-4.85.07s-3.59-.01-4.85-.07c-1.17-.06-1.98-.25-2.44-.42-.6-.23-1.03-.51-1.48-.97-.45-.45-.74-.88-.97-1.48-.17-.46-.36-1.27-.42-2.44C2.17 15.59 2.16 15.21 2.16 12s.01-3.59.07-4.85c.06-1.17.25-1.98.42-2.44.23-.6.51-1.03.97-1.48.45-.45.88-.74 1.48-.97.46-.17 1.27-.36 2.44-.42C8.41 2.17 8.79 2.16 12 2.16zm0-2.16C8.73 0 8.33 0 7.06.07 5.79.13 4.84.31 4.01.57 3.08.87 2.31 1.3 1.57 2.04.83 2.78.39 3.55.09 4.48c-.26.83-.44 1.78-.5 3.05C-.01 8.33 0 8.73 0 12s-.01 3.67.09 4.94c.06 1.27.24 2.22.5 3.05.3.93.74 1.7 1.48 2.44.74.74 1.51 1.18 2.44 1.48.83.26 1.78.44 3.05.5C8.33 23.99 8.73 24 12 24s3.67-.01 4.94-.09c1.27-.06 2.22-.24 3.05-.5.93-.3 1.7-.74 2.44-1.48.74-.74 1.18-1.51 1.48-2.44.26-.83.44-1.78.5-3.05.08-1.27.09-1.67.09-4.94s-.01-3.67-.09-4.94c-.06-1.27-.24-2.22-.5-3.05-.3-.93-.74-1.7-1.48-2.44-.74-.74-1.51-1.18-2.44-1.48-.83-.26-1.78-.44-3.05-.5C15.67.01 15.27 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a3.99 3.99 0 1 1 0-7.98 3.99 3.99 0 0 1 0 7.98zm6.4-11.86a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
        </a>
      </motion.div>
    </>
  );
}
