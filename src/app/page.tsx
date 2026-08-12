'use client';

import { useState } from 'react';

export default function Home() {
  const [isPolaroidFront, setIsPolaroidFront] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#0B0B0D] text-white overflow-x-hidden selection:bg-[#2A30FF] selection:text-white">
      {/* Page 1: Hero Landing Section */}
      <section className="relative min-h-screen pt-3 sm:pt-5 md:pt-6 pb-3 sm:pb-4 md:pb-5 px-6 sm:px-10 md:px-14 flex flex-col justify-between overflow-hidden">
        {/* Top Left Brush / Scribble SVG background (Half Cropped) */}
        <svg
          className="absolute -top-30 -left-30 md:-top-32 md:-left-32 w-56 h-56 md:w-80 md:h-80 pointer-events-none opacity-80 text-[#1E1D69] -rotate-12"
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

        {/* Bottom Right Brush / Scribble SVG background (Half Cropped) */}
        <svg
          className="absolute -bottom-30 -right-30 md:-bottom-32 md:-right-32 w-56 h-56 md:w-80 md:h-80 pointer-events-none opacity-80 text-[#1E1D69] -rotate-12"
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

        {/* Top Navigation */}
        <nav className="relative z-10 flex justify-between items-center max-w-7xl w-full mx-auto text-base sm:text-lg md:text-xl font-pixelify tracking-wider pt-1 sm:pt-2">
          <span className="text-white">Hello!</span>
          <span className="text-[#2A30FF]">Hai?</span>
          <span className="text-white">Welcome</span>
          <span className="text-[#2A30FF]">To</span>
          <span className="text-white">My</span>
          <span className="text-[#2A30FF]">Web</span>
        </nav>

        {/* Hero Section */}
        <section className="relative z-10 max-w-7xl w-full mx-auto my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Huge PORTFOLIO Bitmap Typography using Press Start 2P */}
          <div className="lg:col-span-8 select-none">
            <h1 className="font-pixel text-4xl sm:text-6xl md:text-8xl lg:text-[100px] xl:text-[118px] leading-[1.08] tracking-normal uppercase">
              <div className="flex flex-wrap">
                <span className="text-white">POR</span>
                <span className="text-[#2A30FF]">T</span>
              </div>
              <div className="flex flex-wrap">
                <span className="text-white">F</span>
                <span className="text-[#2A30FF]">O</span>
                <span className="text-white">LIO</span>
              </div>
            </h1>
          </div>

          {/* Right: Abstract Interlocking Blocks Composition */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
              {/* Top Right Blue Block */}
              <div className="absolute top-0 right-8 w-24 h-24 sm:w-28 sm:h-28 bg-[#2A30FF]" />
              {/* Middle Upper White Block */}
              <div className="absolute top-8 left-12 w-24 h-24 sm:w-28 sm:h-28 bg-white" />
              {/* Middle Left Blue Block */}
              <div className="absolute top-20 left-0 w-24 h-24 sm:w-28 sm:h-28 bg-[#2A30FF]" />
              {/* Middle Right White Block */}
              <div className="absolute top-24 right-0 w-24 h-24 sm:w-28 sm:h-28 bg-white" />
              {/* Bottom Right Blue Block */}
              <div className="absolute bottom-8 right-10 w-24 h-24 sm:w-28 sm:h-28 bg-[#2A30FF]" />
              {/* Bottom Left White Block */}
              <div className="absolute bottom-0 left-10 w-24 h-24 sm:w-28 sm:h-28 bg-white" />
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="relative z-10 max-w-7xl w-full mx-auto flex flex-col sm:flex-row justify-between items-end gap-6 pb-1 sm:pb-2">
          {/* Bottom Left Description */}
          <p className="font-pixelify text-sm sm:text-base text-gray-200 max-w-lg leading-relaxed">
            Welcome to my <span className="text-[#2A30FF]">portfolio.</span> I&apos;m excited to share this curated collection of <span className="text-[#2A30FF]">projects with you</span>, which demonstrates my skills and my approach to solving creative challenges.
          </p>

          {/* Bottom Right Stacked Year Badge */}
          <div className="font-pixel grid grid-cols-2 gap-x-2 gap-y-1 text-xl sm:text-2xl leading-none select-none text-right">
            <span className="text-white">2</span>
            <span className="text-white">0</span>
            <span className="text-[#2A30FF]">2</span>
            <span className="text-[#2A30FF]">6</span>
          </div>
        </footer>
      </section>

      {/* Page 2: About / Profile Section */}
      <section className="relative min-h-screen bg-grid-pattern px-6 sm:px-10 md:px-14 py-16 sm:py-24 flex items-center justify-center overflow-hidden">
        {/* Top Right Scribble Brush SVG (Half Cropped) */}
        <svg
          className="absolute -top-28 -right-28 md:-top-36 md:-right-36 w-64 h-64 md:w-96 md:h-96 pointer-events-none opacity-80 text-[#1E1D69] rotate-12 z-0"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 20L180 40L40 70L170 100L50 130L160 160"
            stroke="currentColor"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Bottom Left Scribble Brush SVG (Half Cropped) */}
        <svg
          className="absolute -bottom-28 -left-28 md:-bottom-36 md:-left-36 w-64 h-64 md:w-96 md:h-96 pointer-events-none opacity-80 text-[#1E1D69] -rotate-12 z-0"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 40L170 20L30 80L160 110L20 150L150 170"
            stroke="currentColor"
            strokeWidth="15"
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
          <div className="relative z-20 lg:z-10 w-full lg:flex-1 -mt-10 lg:mt-0 lg:-ml-32 bg-[#2A30FF] rounded-xl p-6 sm:p-8 lg:py-7 lg:pl-56 lg:pr-10 shadow-2xl shadow-[#2A30FF]/30 flex items-center justify-end">
            {/* White Rectangle Outline Frame (Aligned to right) */}
            <div className="border-2 border-white p-6 sm:p-7 rounded-sm relative flex flex-col justify-between gap-4 sm:gap-5 ml-auto w-full max-w-2xl">
              {/* Small Solid White Square Corner Box */}
              <div className="absolute -top-2.5 -right-2.5 w-4 h-4 bg-white" />

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
                <span className="bg-white text-black font-pixelify text-base sm:text-[16px] font-medium px-4 py-2 sm:py-2.5 rounded-lg uppercase shadow-sm">
                  UI/UX DESIGNER
                </span>
                <span className="bg-white text-black font-pixelify text-base sm:text-[16px] font-medium px-4 py-2 sm:py-2.5 rounded-lg uppercase shadow-sm">
                  GRAPHIC DESIGNER
                </span>
                <span className="bg-white text-black font-pixelify text-base sm:text-[16px] font-medium px-4 py-2 sm:py-2.5 rounded-lg uppercase shadow-sm">
                  FE DEVELOPER
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}



