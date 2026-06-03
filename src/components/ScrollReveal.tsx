'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  id?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  id,
  style
}: ScrollRevealProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay,
      },
    },
  };

  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
