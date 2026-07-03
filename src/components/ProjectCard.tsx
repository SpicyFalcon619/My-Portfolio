'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  tags: string[];
  extraInfo?: string;
  link?: string;
  linkText?: string;
  variant?: 'accent' | 'accent-2';
}

export default function ProjectCard({ title, description, tags, extraInfo, link, linkText = 'View Project', variant = 'accent' }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isExternal = link?.startsWith('http');

  return (
    <motion.div
      layout
      className={`panel proj${variant === 'accent-2' ? ' accent-2' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
      transition={{ layout: { type: 'spring', stiffness: 300, damping: 30 } }}
      tabIndex={0}
    >
      <motion.h3 layout="position">{title}</motion.h3>
      <motion.p layout="position">{description}</motion.p>
      
      <motion.div layout="position" className="tags">
        {tags.map((tag, i) => (
          <motion.div 
            key={tag} 
            className="tag"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {tag}
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {isExpanded && extraInfo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="proj-extra-content"
            style={{ marginTop: '12px', overflow: 'hidden' }}
          >
            <p style={{ marginBottom: '12px' }}>{extraInfo}</p>

            {link && (
              isExternal ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-link"
                  onClick={e => e.stopPropagation()}
                >
                  {linkText}
                </a>
              ) : (
                <Link
                  href={link}
                  className="proj-link"
                  onClick={e => e.stopPropagation()}
                >
                  {linkText}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
