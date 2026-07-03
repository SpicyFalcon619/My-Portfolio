'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { MenuIcon, CloseIcon } from './Icons';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'profile', label: 'Profile' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contact' },
];

export default function TopBar() {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 24, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`topbar${scrolled ? ' scrolled' : ''}`}>
      <button className="topbar-mark" onClick={() => scrollTo('hero')} aria-label="Back to top">
        <span className="dot" />
        AMH
      </button>

      <nav className="topbar-nav" aria-label="Section navigation">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            className={`topbar-link${active === s.id ? ' active' : ''}`}
            onClick={() => scrollTo(s.id)}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div className="topbar-right">
        <ThemeToggle />
        <button
          className="topbar-burger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="topbar-mobile-nav" aria-label="Section navigation (mobile)">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className={`topbar-mobile-link${active === s.id ? ' active' : ''}`}
              onClick={() => scrollTo(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
