'use client';

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
  delay?: number;
  id?: string;
  style?: React.CSSProperties;
  parallax?: number;
  as?: 'section' | 'div';
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  id,
  style,
  parallax = 0,
  as = 'section',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(8px)',
      y: direction === 'up' ? 36 : 0,
      x: direction === 'left' ? -60 : direction === 'right' ? 60 : 0,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.2, 0.8, 0.2, 1],
        delay,
      },
    },
  };

  const MotionTag = as === 'div' ? motion.div : motion.section;

  return (
    <MotionTag
      ref={ref as never}
      id={id}
      className={className}
      style={parallax ? { ...style, y } : style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
