'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100 scale-100';
    switch (direction) {
      case 'up':
        return 'translate-y-10 opacity-0';
      case 'down':
        return '-translate-y-10 opacity-0';
      case 'left':
        return '-translate-x-12 opacity-0';
      case 'right':
        return 'translate-x-12 opacity-0';
      default:
        return 'opacity-0 scale-95';
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
}
