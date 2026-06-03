'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  moveX: number;
  moveY: number;
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = Math.min(Math.floor(window.innerWidth / 40), 50);
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      moveX: Math.random() * 100 - 50,
      moveY: Math.random() * 100 - 50,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particle-background" id="particle-background">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            x: [0, p.moveX],
            y: [0, p.moveY],
            opacity: [0, 0.6, 0],
            scale: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
