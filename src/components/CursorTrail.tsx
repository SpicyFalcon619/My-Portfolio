'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
      if (!isVisible) setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <motion.div
      className="cursor-trail"
      style={{
        x: cursorX,
        y: cursorY,
        opacity: isVisible ? 0.6 : 0,
      }}
    />
  );
}
