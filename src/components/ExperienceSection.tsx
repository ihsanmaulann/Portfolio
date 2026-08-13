'use client';

import { useState, useEffect, useRef } from 'react';
import FadeIn from './FadeIn';
import { experiencesList } from '../data/portfolioData';

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineHeightPercent, setLineHeightPercent] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress of main page scroll relative to Experience container
      const startPoint = windowHeight * 0.65;
      const totalDistance = rect.height;
      const scrolled = startPoint - rect.top;

      let progress = scrolled / totalDistance;
      progress = Math.max(0, Math.min(1, progress));

      setLineHeightPercent(progress * 100);

      // Determine active item based on viewport position
      let currentActive = 0;
      itemRefs.current.forEach((el, index) => {
        if (el) {
          const itemRect = el.getBoundingClientRect();
          if (itemRect.top <= windowHeight * 0.6) {
            currentActive = index;
          }
        }
      });
      setActiveIndex(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#0B0B0D] py-20 sm:py-28 px-6 sm:px-10 md:px-14 flex flex-col justify-center overflow-hidden border-t border-white/10"
    >
      {/* Top Right Brush SVG */}
      <svg
        className="absolute -top-30 -right-30 md:-top-32 md:-right-32 w-56 h-56 md:w-80 md:h-80 pointer-events-none opacity-80 text-[#1E1D69] -rotate-12 z-0"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 10L40 180L70 20L100 170L130 30L160 190L190 40"
          stroke="currentColor"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Bottom Left Brush SVG */}
      <svg
        className="absolute -bottom-30 -left-30 md:-bottom-32 md:-left-32 w-56 h-56 md:w-80 md:h-80 pointer-events-none opacity-80 text-[#1E1D69] -rotate-12 z-0"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 160L40 20L70 180L100 30L130 170L160 10L190 150"
          stroke="currentColor"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Section Header Title */}
        <FadeIn direction="left" delay={100}>
          <h2 className="font-pixel text-2xl sm:text-4xl md:text-6xl leading-tight uppercase text-white mb-12 sm:mb-16 tracking-wider">
            Experience
          </h2>
        </FadeIn>

        {/* Timeline Main Container (Shifted left, no inner scrollbar) */}
        <div className="relative grid grid-cols-[10px_1fr] sm:grid-cols-[14px_1fr] gap-4 sm:gap-8 items-start max-w-4xl">
          {/* Vertical Timeline Track Line */}
          <div className="relative w-full h-full min-h-[450px] flex justify-center">
            {/* Background Track Line (Gray) */}
            <div className="w-2.5 sm:w-3 h-full bg-[#808080]/40 rounded-full" />

            {/* Active Highlight Line (Electric Blue fill driven by main page scroll) */}
            <div
              className="absolute top-0 w-2.5 sm:w-3 bg-[#2A30FF] rounded-full shadow-[0_0_15px_#2A30FF] transition-all duration-300 ease-out"
              style={{ height: `${lineHeightPercent}%` }}
            />
          </div>

          {/* Timeline Items List */}
          <div className="space-y-12 sm:space-y-16 py-2">
            {experiencesList.map((item, index) => {
              const isActive = index <= activeIndex;
              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`transition-all duration-500 transform ${
                    isActive
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-40 translate-x-4'
                  }`}
                >
                  {/* Experience Role Title */}
                  <h3
                    className={`font-pixel text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-[#2A30FF] drop-shadow-[0_0_12px_rgba(42,48,255,0.6)]' : 'text-[#2A30FF]/60'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Year / Period */}
                  <p className="font-pixel text-base sm:text-lg md:text-xl text-gray-200 mt-2 mb-4 tracking-wider">
                    {item.period}
                  </p>

                  {/* Description */}
                  <p className="font-pixelify text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
