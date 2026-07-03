'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CursorTrail() {
  const [isVisible, setIsVisible] = useState(false);

  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringX = useSpring(dotX, { damping: 30, stiffness: 260, mass: 0.4 });
  const ringY = useSpring(dotY, { damping: 30, stiffness: 260, mass: 0.4 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    const hide = () => setIsVisible(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', hide);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', hide);
    };
  }, [dotX, dotY, isVisible]);

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        style={{ x: dotX, y: dotY, opacity: isVisible ? 1 : 0 }}
      />
      <motion.div
        className="custom-cursor"
        style={{ x: ringX, y: ringY, opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
}
