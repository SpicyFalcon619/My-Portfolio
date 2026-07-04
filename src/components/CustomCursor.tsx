'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [active, setActive] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;

    document.documentElement.classList.add('has-custom-cursor');
    setActive(true);

    const onMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    const onDown = () => dotRef.current?.classList.add('is-down');
    const onUp = () => dotRef.current?.classList.remove('is-down');

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  if (!active) return null;

  return <div ref={dotRef} className="custom-cursor" aria-hidden="true" />;
}
