'use client';

import FadeIn from './FadeIn';

export default function FooterSection() {
  return (
    <footer className="relative bg-[#0B0B0D] px-6 sm:px-10 md:px-14 py-10 sm:py-14 flex flex-col justify-between overflow-hidden border-t border-white/10">
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-4">
        {/* Main CTA Header Title (Compact Page 1 Style) */}
        <FadeIn direction="left" delay={100}>
          <div>
            <h2 className="font-pixel text-xl sm:text-3xl md:text-4xl leading-snug text-white uppercase select-none tracking-wide">
              Ready To Start
              <br />
              <span className="text-white hover:text-[#2A30FF] transition-colors duration-300">Something </span>
              <span className="text-[#2A30FF] hover:text-white transition-colors duration-300">Great?</span>
            </h2>
            <p className="font-pixelify text-xs sm:text-sm text-gray-400 mt-2">
              Let&apos;s build something extraordinary together.
            </p>
          </div>
        </FadeIn>

        {/* Social Media & GitHub Links Badges (Right Aligned Rows) */}
        <FadeIn direction="right" delay={200}>
          <div className="flex flex-col items-start md:items-end gap-3 ml-auto">
            <span className="font-pixelify text-xs font-bold text-[#2A30FF] uppercase tracking-widest text-left md:text-right">
              LET&apos;S <span className="text-white">CONNECT</span>
            </span>
            <div className="flex flex-wrap justify-start md:justify-end items-center gap-2.5 sm:gap-3 max-w-md">
              {/* GitHub */}
              <a
                href="https://github.com/Ihsanmaulanas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#141417] text-gray-200 hover:text-white border border-white/15 hover:border-[#2A30FF] hover:bg-[#2A30FF] font-pixelify font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2.5 shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-300 select-none group text-xs sm:text-sm whitespace-nowrap"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>

              {/* Dribbble */}
              <a
                href="https://dribbble.com/Ihsanmaulanas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#141417] text-gray-200 hover:text-white border border-white/15 hover:border-[#EA4C89] hover:bg-[#EA4C89] font-pixelify font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2.5 shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-300 select-none group text-xs sm:text-sm whitespace-nowrap"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm8.903 10.377a10.05 10.05 0 01-4.707 1.047c-.156-.402-.323-.807-.506-1.21 3.52-1.442 5.034-1.258 5.213-1.237a9.96 9.96 0 010 1.4zm-1.127-3.056c-.231-.02-1.921-.14-5.263 1.341a34.73 34.73 0 00-3.32-4.598A10.007 10.007 0 0119.776 7.32zM10.15 3.326a36.438 36.438 0 013.435 4.675 22.84 22.84 0 01-6.19 1.724A10.027 10.027 0 0110.15 3.326zM5.79 11.23a24.78 24.78 0 006.591-1.802c.2.433.385.867.556 1.297-4.475 1.38-8.214 1.378-8.624 1.373a10.024 10.024 0 011.477-0.868zM3.46 13.91c.477.005 3.993-.005 8.243-1.282a32.96 32.96 0 011.83 5.438A10.038 10.038 0 013.46 13.91zm11.884 5.39a31.42 31.42 0 00-1.848-5.385 11.87 11.87 0 004.819-1.077 10.032 10.032 0 01-2.971 6.462z" />
                </svg>
                <span>Dribbble</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/Ihsanmaulanas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#141417] text-gray-200 hover:text-white border border-white/15 hover:border-[#E4405F] hover:bg-[#E4405F] font-pixelify font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2.5 shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-300 select-none group text-xs sm:text-sm whitespace-nowrap"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/Ihsanmaulanas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#141417] text-gray-200 hover:text-white border border-white/15 hover:border-[#0A66C2] hover:bg-[#0A66C2] font-pixelify font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2.5 shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-300 select-none group text-xs sm:text-sm whitespace-nowrap"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* Email Button (Primary Accent) */}
              <a
                href="mailto:contact@ihsanmaulana.id"
                className="bg-[#2A30FF] text-white border border-[#2A30FF] hover:bg-white hover:text-black font-pixelify font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2.5 shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300 select-none group text-xs sm:text-sm whitespace-nowrap"
              >
                <svg className="w-4 h-4 fill-none stroke-current shrink-0" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Me</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom Bar: Copyright (Compact Page 1 Style) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto border-t border-white/10 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-pixelify text-xs text-gray-400">
          © 2026 <span className="text-white font-bold">IHSAN MAULANA</span>. ALL RIGHTS RESERVED.
        </p>
        <div className="font-pixel flex items-center gap-1.5 text-sm select-none">
          <span className="text-white">2</span>
          <span className="text-white">0</span>
          <span className="text-[#2A30FF]">2</span>
          <span className="text-[#2A30FF]">6</span>
        </div>
      </div>
    </footer>
  );
}
