'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [active, setActive] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const downRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;

    document.documentElement.classList.add('has-custom-cursor');
    setActive(true);

    const apply = () => {
      if (!wrapRef.current) return;
      const { x, y } = posRef.current;
      const scale = downRef.current ? 0.86 : 1;
      wrapRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    };

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      apply();
    };
    const onDown = () => { downRef.current = true; apply(); };
    const onUp = () => { downRef.current = false; apply(); };

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

  return (
    <div ref={wrapRef} className="custom-cursor" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      </svg>
    </div>
  );
}
