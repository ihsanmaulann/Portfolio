'use client';

import FadeIn from './FadeIn';
import { toolsList } from '../data/portfolioData';

export default function ToolsSection() {
  return (
    <section className="relative bg-[#0B0B0D] py-8 sm:py-10 px-4 flex flex-col items-center justify-center overflow-hidden border-t border-b border-white/10">
      <FadeIn direction="up" delay={100} className="w-full">
        {/* Compact Header */}
        <div className="text-center mb-5 select-none z-10">
          <span className="font-pixelify text-xs sm:text-sm text-[#2A30FF] tracking-widest uppercase font-bold">
            TOOLS  <span className="text-white">&</span> LANGUAGES
          </span>
        </div>

        {/* Marquee Ribbon Container (Single Row) */}
        <div className="w-full relative z-10">
          {/* Gradient Fades on edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0B0B0D] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0B0B0D] to-transparent z-20 pointer-events-none" />

          {/* Marquee Row */}
          <div className="overflow-hidden w-full flex">
            <div className="animate-marquee flex gap-4 sm:gap-6 pr-4 sm:pr-6">
              {[...toolsList, ...toolsList].map((tool, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#141417]/90 border border-white/10 shadow-lg hover:border-[#2A30FF] hover:bg-[#1a1a24] transition-all duration-300 shrink-0 select-none group"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <span className="font-poppins text-xs sm:text-sm font-bold text-gray-200 group-hover:text-white tracking-wide whitespace-nowrap">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
