'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="theme-btn magnetic" aria-label="Toggle dark/light theme">
        <div style={{ width: 20, height: 20 }} />
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      className="theme-btn magnetic"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      title="Toggle theme"
      aria-label="Toggle dark/light theme"
    >
      <motion.svg
        className="theme-icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: isDark ? 0 : 90 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      >
        {isDark ? (
          <motion.g
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
          </motion.g>
        ) : (
          <motion.g
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </motion.g>
        )}
      </motion.svg>
    </button>
  );
}
