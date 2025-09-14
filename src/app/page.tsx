'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard'; // keep your existing ProjectCard
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function HomePage() {
  useEffect(() => {
    // Prevent duplicate injection in dev fast-refresh
    if (document.getElementById('page-interactive-script')) return;

    const script = document.createElement('script');
    script.id = 'page-interactive-script';

    // NOTE: kept as innerHTML injection to mirror original 1:1 behavior.
    // This is fine for local static content; if you prefer, these can be migrated to React handlers.
    script.innerHTML = `
      // THEME TOGGLE
      const themeBtn = document.getElementById('themeToggle');
      if(themeBtn) themeBtn.onclick = () => {
        document.documentElement.classList.toggle('light');
        document.body.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => { document.body.style.transition = 'background .45s ease, color .35s ease'; }, 500);
      };

      // MOBILE NAV
      const mobileBtn = document.getElementById('openMobile');
      const mobileNav = document.getElementById('mobileNav');
      if(mobileBtn && mobileNav) mobileBtn.onclick = () => mobileNav.style.display = mobileNav.style.display==='block'?'none':'block';

      // Typing effect
      const text = "I tinker with code, Linux, and blockchains. Self-taught coder who loves gaming, problem-solving, and unsolved mysteries. Aiming to become a solid software / AI / Web3 engineer. Gamer tag: ";
      const boldText = "spicyfalcon619";
      const typedEl = document.getElementById('typedText');
      const typedBold = document.getElementById('typedBold');

      if(typedEl && typedBold && typedEl.textContent === '') {
        let i = 0, j = 0;
        function typeWriter() {
          if (i < text.length) { typedEl.textContent += text.charAt(i); i++; setTimeout(typeWriter, 20); } 
          else { typeBold(); }
        }
        function typeBold() {
          if (j < boldText.length) { typedBold.textContent += boldText.charAt(j); j++; setTimeout(typeBold, 20); }
        }
        typeWriter();
      }

      // SMOOTH SCROLL for nav & mobile nav
      document.querySelectorAll('nav a, #mobileNav a').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          const target = document.querySelector(link.getAttribute('href'));
          if (target) {
            const offset = 80;
            const topPos = target.offsetTop - offset;
            window.scrollTo({ top: topPos, behavior: 'smooth' });
            if(mobileNav && mobileNav.style.display === 'block') mobileNav.style.display = 'none';
          }
        });
      });

      // PROJECT CARD EXPAND / LINK HANDLING
      document.querySelectorAll('.proj').forEach(card => {
        card.addEventListener('click', (e) => {
          if (e.target.tagName === 'A' || e.target.closest('a') || e.target.classList.contains('proj-link')) return;
          card.classList.toggle('expanded');
        });
      });

      document.querySelectorAll('.proj-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.stopPropagation();
          e.preventDefault();
          const href = link.getAttribute('href');
          if (!href) return;
          if (href.startsWith('http')) window.open(href, '_blank', 'noopener,noreferrer');
          else window.location.href = href;
        });
        link.style.position = 'relative';
        link.style.zIndex = '1000';
      });

      // BACK TO TOP
      const backTop = document.getElementById("backTop");
      if(backTop) {
        const handleScroll = () => { window.scrollY > 200 ? backTop.classList.add("show") : backTop.classList.remove("show"); };
        window.addEventListener("scroll", handleScroll);
        backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
      }

      // REVEAL ON SCROLL & SOCIAL SIDEBAR
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            if (entry.target.id === 'hero') {
              document.querySelector('.social-sidebar')?.classList.add('visible');
            }
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.reveal, #hero').forEach(el => observer.observe(el));

      // MAGNETIC EFFECT
      document.querySelectorAll('.magnetic').forEach(el => {
        el.addEventListener('mousemove', (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          el.style.transform = \`translate(\${x * 0.1}px, \${y * 0.1}px)\`;
        });
        el.addEventListener('mouseleave', () => { el.style.transform = 'translate(0, 0)'; });
      });

      // CURSOR TRAIL
      const cursorTrail = document.getElementById('cursorTrail');
      let mouseX = 0, mouseY = 0;
      let trailX = 0, trailY = 0;
      if (cursorTrail) {
        cursorTrail.style.opacity = '0';
        document.addEventListener('mousemove', (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
          cursorTrail.style.opacity = '0.6';
        });
        function animateTrail() {
          trailX += (mouseX - trailX) * 0.3;
          trailY += (mouseY - trailY) * 0.3;
          cursorTrail.style.transform = \`translate(\${trailX - 10}px, \${trailY - 10}px)\`;
          requestAnimationFrame(animateTrail);
        }
        document.addEventListener('mouseleave', () => { cursorTrail.style.opacity = '0'; });
        animateTrail();
      }

      // BACKGROUND PARALLAX (subtle)
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.body;
        const speed = scrolled * 0.25;
        parallax.style.backgroundPosition = \`center \${-speed}px\`;
      });

      // PARTICLE BACKGROUND: generate a few particles dynamically
      (function createParticles(){
        const container = document.getElementById('particle-background');
        if (!container) return;
        const particleCount = Math.min(Math.floor(window.innerWidth / 40), 50);
        for (let i = 0; i < particleCount; i++) {
          const el = document.createElement('div');
          el.className = 'particle';
          const size = Math.random() * 3 + 1;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const mvX = (Math.random() * 100 - 50) + 'px';
          const mvY = (Math.random() * 100 - 50) + 'px';
          el.style.width = size + 'px';
          el.style.height = size + 'px';
          el.style.left = left + '%';
          el.style.top = top + '%';
          el.style.setProperty('--particle-move-x', mvX);
          el.style.setProperty('--particle-move-y', mvY);
          container.appendChild(el);
        }
      })();

      // ensure links that use target=_blank are safe (noopener)
      document.querySelectorAll('a[target="_blank"]').forEach(a => { a.setAttribute('rel', 'noopener noreferrer'); });

    `;

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      const existingScript = document.getElementById('page-interactive-script');
      if (existingScript) existingScript.remove();
      // Also remove dynamically created particles & cursor if any
      const particleBg = document.getElementById('particle-background');
      if (particleBg) particleBg.innerHTML = '';
    };
  }, []);

  return (
    <>
      <div className="particle-background" id="particle-background"></div>
      <div className="cursor-trail" id="cursorTrail"></div>

      <div className="wrap">
        <header>
          <a className="brand" href="#hero" aria-label="home">
            <div className="logo magnetic">
              <Image src="/assets/my-logo.png" alt="Ahmad Maruf Hossain Logo" width={52} height={52} style={{ objectFit: 'contain' }} />
            </div>
            <div>
              <div style={{ fontWeight: 800 }}>Ahmad Maruf Hossain</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)' }}>CSE • United International University</div>
            </div>
          </a>

          <nav aria-label="primary navigation">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#timeline">Timeline</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button className="theme-btn magnetic" id="themeToggle" title="Toggle theme">🌓</button>
            <button className="burger" id="openMobile" aria-label="open menu">☰</button>
          </div>
        </header>

        {/* MOBILE NAV */}
        <div id="mobileNav" style={{ display: 'none', marginTop: '12px', padding: '12px', borderRadius: '12px', background: 'var(--glass)' }}>
          <a href="#about" style={{ display: 'block', padding: '8px 0' }}>About</a>
          <a href="#education" style={{ display: 'block', padding: '8px 0' }}>Education</a>
          <a href="#timeline" style={{ display: 'block', padding: '8px 0' }}>Timeline</a>
          <a href="#projects" style={{ display: 'block', padding: '8px 0' }}>Projects</a>
          <a href="#skills" style={{ display: 'block', padding: '8px 0' }}>Skills</a>
          <a href="#contact" style={{ display: 'block', padding: '8px 0' }}>Contact</a>
        </div>

        <main>
          {/* HERO */}
          <section id="hero" className="hero">
            <div>
              <div className="hi">Undergrad • CSE • UIU</div>
              <h1>Ahmad Maruf <span className="accent">Hossain</span></h1>
              <p className="lead"><span id="typedText"></span><strong id="typedBold"></strong></p>

              <div className="mini" style={{ marginTop: '14px' }}>
                <div className="pill">C • C++ • Java</div>
                <div className="pill">Linux Enthusiast</div>
                <div className="pill">Esports Player</div>
              </div>

              <div style={{ marginTop: '14px', display: 'flex', gap: '10px' }}>
                <a className="pill magnetic" href="#projects">See Projects →</a>
                <a className="pill magnetic" href="https://github.com/SpicyFalcon619" target="_blank" rel="noreferrer">Github</a>
                <a className="pill magnetic" href="https://www.linkedin.com/in/ahmad-maruf-hossain/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>

            <aside className="card" aria-hidden={false}>
              <div className="avatar">
                <Image src="/assets/avatar.jpg" alt="Ahmad Maruf Hossain" width={340} height={320} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} priority />
              </div>

              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 800 }}>SpicyFalcon619</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)' }}>Valorant: Gold 1</div>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: 12, color: 'var(--muted)' }}>
                    <div>Award</div>
                    <div style={{ fontWeight: 700 }}>Best Emerging Team</div>
                    <div style={{ fontWeight: 700 }}>Blockchain Category</div>
                    <div style={{ fontWeight: 700 }}>UIU CSE FEST 2025</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <a className="pill magnetic" href="mailto:a.marufhossain619@gmail.com">Email</a>
                  <a className="pill magnetic" href="https://www.instagram.com/spicy_falconn/" target="_blank" rel="noreferrer">Instagram</a>
                </div>
              </div>
            </aside>
          </section>

          {/* ABOUT */}
          <section id="about" className="reveal">
            <div className="card" style={{ padding: 18 }}>
              <h2 style={{ marginBottom: 8 }}>About</h2>
              <p style={{ color: 'var(--muted)' }}>
                I&apos;m a passionate CSE undergrad at United International University, currently in my 2nd year. My journey in tech started with curiosity about how things work under the hood, leading me to explore system-level programming, blockchain technology, and software development.
              </p>
              <p style={{ color: 'var(--muted)', marginTop: 8 }}>
                When I&apos;m not coding, you&apos;ll find me competing in esports, solving Rubik&apos;s cubes, or tinkering with my Arch Linux with Hyprland setup. I believe in learning by building, which is why I work on projects like Wastopia and various cipher implementations to deepen my understanding of technology.
              </p>
            </div>
          </section>

          {/* EDUCATION */}
          <section id="education" className="reveal">
            <h2 style={{ marginBottom: 12 }}>Education</h2>
            <div className="education-timeline">
              <div className="education-item card reveal slide-left">
                <div className="education-header">
                  <div>
                    <h3 style={{ marginBottom: 4 }}>Bachelor of Science in Computer Science & Engineering</h3>
                    <div style={{ color: 'var(--accent1)', fontWeight: 600, fontSize: 14 }}>United International University</div>
                  </div>
                  <div style={{ textAlign: 'right', color: 'var(--muted)', fontSize: 13 }}>
                    <div>June 2024 - Present</div>
                    <div style={{ fontWeight: 600 }}>2nd Year</div>
                  </div>
                </div>
                <p style={{ color: 'var(--muted)', marginTop: 8 }}>
                  Currently pursuing my undergraduate degree. Focusing on core CS fundamentals, programming languages, and emerging tech like blockchain and AI.
                </p>
                <div style={{ marginTop: 10 }}>
                  <span className="pill">Data Structures</span>
                  <span className="pill">Algorithms</span>
                  <span className="pill">OOP</span>
                  <span className="pill">Database Systems</span>
                </div>
              </div>

              <div className="education-item card reveal slide-right" style={{ marginTop: 12 }}>
                <div className="education-header">
                  <div>
                    <h3 style={{ marginBottom: 4 }}>Higher Secondary Certificate (HSC)</h3>
                    <div style={{ color: 'var(--accent1)', fontWeight: 600, fontSize: 14 }}>Sena Public School & College</div>
                  </div>
                  <div style={{ textAlign: 'right', color: 'var(--muted)', fontSize: 13 }}>
                    <div>2022 - 2023</div>
                  </div>
                </div>
                <p style={{ color: 'var(--muted)', marginTop: 8 }}>
                  Completed higher secondary with a focus on Mathematics, Physics, and Chemistry — a solid foundation for CS studies.
                </p>
                <div style={{ marginTop: 10 }}>
                  <span className="pill">Mathematics</span>
                  <span className="pill">Physics</span>
                  <span className="pill">Chemistry</span>
                  <span className="pill">ICT</span>
                </div>
              </div>
            </div>
          </section>

          {/* TIMELINE */}
          <section id="timeline" className="reveal">
            <h2 style={{ marginBottom: 12 }}>My Journey</h2>
            <div className="timeline-container card" style={{ padding: 24 }}>
              <div className="timeline">
                <div className="timeline-item reveal">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">January 2025</div>
                    <h4>UIU CSE FEST 2025 Winner</h4>
                    <p>Won &quot;Best Emerging Team&quot; in Blockchain Category with Wastopia project</p>
                  </div>
                </div>

                <div className="timeline-item reveal">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">2024</div>
                    <h4>Started University Journey</h4>
                    <p>Began CSE at United International University, diving deep into programming and computer science fundamentals</p>
                  </div>
                </div>

                <div className="timeline-item reveal">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">2023</div>
                    <h4>Completed HSC</h4>
                    <p>Graduated from Sena Public School & College with Science background</p>
                  </div>
                </div>

                <div className="timeline-item reveal">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">2022</div>
                    <h4>Started Higher Secondary</h4>
                    <p>Began HSC journey at Sena Public School & College, building foundation in sciences</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ marginBottom: 8 }}>Projects</h2>
              <div style={{ color: 'var(--muted)', fontSize: 13 }}>Click a card to expand</div>
            </div>

            <div className="projects" style={{ marginTop: 12 }}>
              <div className="proj magnetic" tabIndex={0}>
                <h3>Wastopia - Waste to blockchain</h3>
                <p>Design & research for a blockchain-based waste-tracking & incentive platform.</p>
                <div className="tags">
                  <div className="tag">Blockchain</div>
                  <div className="tag">Research</div>
                  <div className="tag">IoT (planned)</div>
                </div>
                <div className="proj-extra">
                  <p>Won Emerging Team (Blockchain) at UIU CSE FEST 2025.</p>
                  <a href="https://spicy-portfolio.vercel.app/wastopia.html" className="proj-link">View Project</a>
                </div>
              </div>

              {/* Example: using ProjectCard component for other projects */}
              <ProjectCard title="Morse Code Translator" description="Classic Morse code translator for learning and teaching Java." tags={['Java','Crypto']} extraInfo="Console and GUI implementations available." link="https://spicy-morse-code-java.vercel.app/" linkText="View Project" />

              <ProjectCard title="OOP Notes (Notion)" description="Teaching notes prepared for classmates, including small utilities, references, and concepts explained in a simple and structured way." tags={['Teaching','Notion']} extraInfo="OOP (Java) notes created for classmates, available on Notion." link="https://bold-ocelot-ae1.notion.site/Theory-1d9b38bc56448124b6fce299b5459c4e" linkText="View Notes" />
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="reveal">
            <h2 style={{ marginBottom: 10 }}>Skills</h2>
            <div className="card" style={{ padding: 18 }}>
              <h3 style={{ marginBottom: 12, fontSize: 16 }}>Programming Languages</h3>
              <div className="chips">
                <div className="chip magnetic">C</div>
                <div className="chip magnetic">C++</div>
                <div className="chip magnetic">Java</div>
                <div className="chip magnetic">HTML/CSS/JS</div>
                <div className="chip magnetic">Python (Basic)</div>
              </div>

              <h3 style={{ marginTop: 16, marginBottom: 12, fontSize: 16 }}>Technologies & Tools</h3>
              <div className="chips">
                <div className="chip magnetic">Linux (Arch)</div>
                <div className="chip magnetic">Hyprland</div>
                <div className="chip magnetic">Git</div>
                <div className="chip magnetic">Notion</div>
                <div className="chip magnetic">Blockchain</div>
                <div className="chip magnetic">IoT Concepts</div>
              </div>

              <h3 style={{ marginTop: 16, marginBottom: 12, fontSize: 16 }}>Soft Skills</h3>
              <div className="chips">
                <div className="chip magnetic">Problem Solving</div>
                <div className="chip magnetic">Research</div>
                <div className="chip magnetic">Team Collaboration</div>
                <div className="chip magnetic">Quick Learning</div>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="reveal">
            <h2>Contact</h2>
            <div className="contact-grid">
              <form action="https://formspree.io/f/myzdbzdy" method="POST">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" placeholder="Message" rows={4} required></textarea>
                <button type="submit" className="primary magnetic">Send</button>
              </form>

              <div className="card" style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3>Get in touch</h3>
                <p style={{ color: 'var(--muted)' }}>Email me at <a href="mailto:a.marufhossain619@gmail.com" style={{ color: 'var(--accent1)' }}>a.marufhossain619@gmail.com</a></p>
                <p style={{ color: 'var(--muted)' }}>Follow me on social media or check my GitHub for projects.</p>
              </div>
            </div>
          </section>

          <footer>© 2025 Ahmad Maruf Hossain</footer>
        </main>
      </div>

      {/* BACK TO TOP */}
      <div id="backTop" title="Back to top">↑</div>

      {/* SOCIAL SIDEBAR */}
      <div className="social-sidebar">
        <a href="https://github.com/SpicyFalcon619" target="_blank" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.85 10.89.57.11.77-.25.77-.55 0-.27-.01-1.16-.02-2.11-3.19.69-3.87-1.54-3.87-1.54-.52-1.31-1.28-1.66-1.28-1.66-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.76.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.44.11-3 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.56.23 2.71.12 3 .74.8 1.18 1.82 1.18 3.08 0 4.44-2.69 5.42-5.25 5.7.41.36.77 1.08.77 2.18 0 1.57-.01 2.84-.01 3.23 0 .3.2.66.78.55A10.513 10.513 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"/></svg>
        </a>

        <a href="https://www.linkedin.com/in/ahmad-maruf-hossain/" target="_blank" title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.63 1.34 2.97 2.98 2.97 1.63 0 2.98-1.34 2.98-2.97 0-1.64-1.34-2.98-2.98-2.98zM2.4 21.5h5.16v-11H2.4v11zM9.56 10.5h4.96v1.49h.07c.69-1.3 2.37-2.68 4.88-2.68 5.23 0 6.2 3.44 6.2 7.92v9.76h-5.16v-8.65c0-2.07-.04-4.73-2.88-4.73-2.88 0-3.32 2.25-3.32 4.57v8.81H9.56v-11z"/></svg>
        </a>

        <a href="https://www.instagram.com/spicy_falconn/" target="_blank" title="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.21 0 3.59.01 4.85.07 1.17.06 1.98.25 2.44.42.6.23 1.03.51 1.48.97.45.45.74.88.97 1.48.17.46.36 1.27.42 2.44.06 1.26.07 1.64.07 4.85s-.01 3.59-.07 4.85c-.06 1.17-.25 1.98-.42 2.44-.23.6-.51 1.03-.97 1.48-.45.45-.88.74-1.48.97-.46.17-1.27.36-2.44.42-1.26.06-1.64.07-4.85.07s-3.59-.01-4.85-.07c-1.17-.06-1.98-.25-2.44-.42-.6-.23-1.03-.51-1.48-.97-.45-.45-.74-.88-.97-1.48-.17-.46-.36-1.27-.42-2.44C2.17 15.59 2.16 15.21 2.16 12s.01-3.59.07-4.85c.06-1.17.25-1.98.42-2.44.23-.6.51-1.03.97-1.48.45-.45.88-.74 1.48-.97.46-.17 1.27-.36 2.44-.42C8.41 2.17 8.79 2.16 12 2.16zm0-2.16C8.73 0 8.33 0 7.06.07 5.79.13 4.84.31 4.01.57 3.08.87 2.31 1.3 1.57 2.04.83 2.78.39 3.55.09 4.48c-.26.83-.44 1.78-.5 3.05C-.01 8.33 0 8.73 0 12s-.01 3.67.09 4.94c.06 1.27.24 2.22.5 3.05.3.93.74 1.7 1.48 2.44.74.74 1.51 1.18 2.44 1.48.83.26 1.78.44 3.05.5C8.33 23.99 8.73 24 12 24s3.67-.01 4.94-.09c1.27-.06 2.22-.24 3.05-.5.93-.3 1.7-.74 2.44-1.48.74-.74 1.18-1.51 1.48-2.44.26-.83.44-1.78.5-3.05.08-1.27.09-1.67.09-4.94s-.01-3.67-.09-4.94c-.06-1.27-.24-2.22-.5-3.05-.3-.93-.74-1.7-1.48-2.44-.74-.74-1.51-1.18-2.44-1.48-.83-.26-1.78-.44-3.05-.5C15.67.01 15.27 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a3.99 3.99 0 1 1 0-7.98 3.99 3.99 0 0 1 0 7.98zm6.4-11.86a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
        </a>
      </div>
      <SpeedInsights />
    </>
  );
}
