'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'timeline', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

function DockItem({
  id,
  label,
  active,
  mouseX,
  onClick,
}: {
  id: string;
  label: string;
  active: boolean;
  mouseX: MotionValue<number>;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return Infinity;
    return val - (rect.left + rect.width / 2);
  });

  const scale = useTransform(distance, [-160, 0, 160], [1, 1.28, 1]);
  const springScale = useSpring(scale, { stiffness: 350, damping: 22, mass: 0.6 });

  return (
    <motion.button
      ref={ref}
      className={`dock-item${active ? ' active' : ''}`}
      style={{ scale: springScale }}
      onClick={onClick}
      aria-label={label}
      aria-current={active}
    >
      {label}
    </motion.button>
  );
}

export default function Dock() {
  const [active, setActive] = useState('hero');
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="dock"
      aria-label="Section navigation"
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 20 }}
    >
      {SECTIONS.map((s) => (
        <DockItem
          key={s.id}
          id={s.id}
          label={s.label}
          active={active === s.id}
          mouseX={mouseX}
          onClick={() => scrollTo(s.id)}
        />
      ))}
    </motion.nav>
  );
}
