'use client';

import { useState } from 'react';

export default function AboutSection() {
  const [isPolaroidFront, setIsPolaroidFront] = useState(false);

  return (
    <section className="relative min-h-screen bg-grid-pattern px-6 sm:px-10 md:px-14 py-16 sm:py-24 flex items-center justify-center overflow-hidden">
      {/* Top Right Brush SVG (Page 1 Style) */}
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

      {/* Bottom Left Brush SVG (Page 1 Style) */}
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

      {/* Content Container (Perfectly Centered Composition Alignment) */}
      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6">

        {/* Mobile Tap Instruction Button */}
        <button
          onClick={() => setIsPolaroidFront(!isPolaroidFront)}
          className="lg:hidden mb-3 px-4 py-2 bg-[#2A30FF] border-2 border-white text-white font-pixelify text-xs font-bold rounded-full shadow-xl animate-bounce flex items-center gap-2 cursor-pointer z-40 active:scale-95 transition-transform select-none"
        >
          <span>📸</span>
          <span>{isPolaroidFront ? "Klik untuk masukkan foto ke saku" : "Klik untuk keluarkan foto dari saku"}</span>
        </button>

        {/* Left: Polaroid Photo Card (Pocket Photo behavior on Mobile: Straight without tilt, deeply tucked, pops in front on tap) */}
        <div
          onClick={() => setIsPolaroidFront(!isPolaroidFront)}
          className={`cursor-pointer shrink-0 w-full max-w-[280px] sm:max-w-[320px] bg-white rounded-2xl p-4 sm:p-5 pb-6 shadow-2xl shadow-black/80 transform transition-all duration-500 ease-out
            rotate-0 lg:rotate-6 lg:hover:rotate-0
            ${isPolaroidFront
              ? 'relative z-30 translate-y-0 opacity-100 scale-100'
              : 'relative z-10 lg:z-20 -mb-48 lg:mb-0 translate-y-12 lg:translate-y-0 opacity-90 lg:opacity-100 scale-90 lg:scale-100'
            }
            lg:translate-x-12
          `}
        >
          {/* Photo Container Frame */}
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#2D3812] flex flex-col items-center justify-center">
            {/* Photo tag (Pointing to public/profile.png) */}
            <img
              src="/profile.png"
              alt="Profile Photo"
              className="w-full h-full object-cover relative z-10"
              onLoad={(e) => {
                e.currentTarget.style.display = 'block';
                const fallback = e.currentTarget.parentElement?.querySelector('.photo-fallback');
                if (fallback) fallback.classList.add('hidden');
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.parentElement?.querySelector('.photo-fallback');
                if (fallback) fallback.classList.remove('hidden');
              }}
            />

            {/* Styled Retro Halftone Fallback Graphic (Shown when profile.jpg is missing) */}
            <div className="photo-fallback absolute inset-0 bg-gradient-to-b from-[#3C4A15] to-[#252F0C] text-[#CBEB43] flex flex-col items-center justify-center p-6 text-center">
              {/* SVG Silhouette / Camera Icon */}
              <div className="w-20 h-20 rounded-full bg-[#4A5B1B] flex items-center justify-center mb-3 border-2 border-[#CBEB43]/30 shadow-inner">
                <svg className="w-10 h-10 text-[#CBEB43]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="font-pixelify text-base font-bold text-white tracking-wide">FOTO ANDA</p>
              <p className="font-pixelify text-xs text-[#CBEB43] mt-1">Ganti file di <br /><code className="bg-black/40 px-1.5 py-0.5 rounded text-[11px]">/public/profile.jpg</code></p>
            </div>
          </div>

          {/* Bottom Polaroid Caption */}
          <div className="mt-4 text-center">
            <p className="font-pixelify font-bold text-2xl sm:text-3xl text-[#2A30FF] tracking-wider">
              Hai !!!
            </p>
          </div>
        </div>

        {/* Right: Blue Name Card (Stretches behind Polaroid, content positioned on right) */}
        <div className="relative z-20 lg:z-10 w-full lg:flex-1 -mt-10 lg:mt-0 lg:-ml-32 bg-[#2A30FF] rounded-xl p-6 sm:p-8 lg:py-7 lg:pl-56 lg:pr-10 shadow-2xl shadow-[#2A30FF]/30 hover:shadow-[#2A30FF]/60 transition-all duration-500 flex items-center justify-end">
          {/* White Rectangle Outline Frame (Aligned to right) */}
          <div className="border-2 border-white p-6 sm:p-7 rounded-sm relative flex flex-col justify-between gap-4 sm:gap-5 ml-auto w-full max-w-2xl">
            {/* Small Solid White Square Corner Box */}
            <div className="absolute -top-2.5 -right-2.5 w-4 h-4 bg-white animate-pulse" />

            {/* Greeting Header */}
            <div>
              <h3 className="font-poppins text-xl sm:text-xl lg:text-[24px] font-bold tracking-wider uppercase text-white leading-tight">
                HI! MY NAME
              </h3>
            </div>

            {/* Name Display */}
            <div>
              <h2 className="font-poppins text-3xl sm:text-5xl lg:text-[64px] font-black uppercase tracking-tight leading-[1.05] text-white">
                IHSAN<br />MAULANA
              </h2>
            </div>

            {/* Professional Role Badges */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              <span className="bg-white text-black font-pixelify text-base sm:text-[16px] font-medium px-4 py-2 sm:py-2.5 rounded-lg uppercase shadow-sm hover:-translate-y-1 hover:scale-105 hover:bg-[#0B0B0D] hover:text-white transition-all duration-300 cursor-pointer select-none">
                UI/UX DESIGNER
              </span>
              <span className="bg-white text-black font-pixelify text-base sm:text-[16px] font-medium px-4 py-2 sm:py-2.5 rounded-lg uppercase shadow-sm hover:-translate-y-1 hover:scale-105 hover:bg-[#0B0B0D] hover:text-white transition-all duration-300 cursor-pointer select-none">
                GRAPHIC DESIGNER
              </span>
              <span className="bg-white text-black font-pixelify text-base sm:text-[16px] font-medium px-4 py-2 sm:py-2.5 rounded-lg uppercase shadow-sm hover:-translate-y-1 hover:scale-105 hover:bg-[#0B0B0D] hover:text-white transition-all duration-300 cursor-pointer select-none">
                FE DEVELOPER
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
