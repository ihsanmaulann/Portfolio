'use client';

import { useState, useEffect, useRef } from 'react';

// Reusable Scroll Fade-In Observer Component for Smooth Page Animations
function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode;
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
        <FadeIn direction="down" delay={100} className="w-full">
          <nav className="relative z-10 flex justify-between items-center max-w-7xl w-full mx-auto text-base sm:text-lg md:text-xl font-pixelify tracking-wider pt-1 sm:pt-2">
            <span className="text-white hover:text-[#2A30FF] transition-colors duration-200 cursor-pointer">Hello!</span>
            <span className="text-[#2A30FF] hover:text-white transition-colors duration-200 cursor-pointer">Hai?</span>
            <span className="text-white hover:text-[#2A30FF] transition-colors duration-200 cursor-pointer">Welcome</span>
            <span className="text-[#2A30FF] hover:text-white transition-colors duration-200 cursor-pointer">To</span>
            <span className="text-white hover:text-[#2A30FF] transition-colors duration-200 cursor-pointer">My</span>
            <span className="text-[#2A30FF] hover:text-white transition-colors duration-200 cursor-pointer">Web</span>
          </nav>
        </FadeIn>

        {/* Hero Section */}
        <section className="relative z-10 max-w-7xl w-full mx-auto my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Huge PORTFOLIO Bitmap Typography using Press Start 2P */}
          <div className="lg:col-span-8 select-none">
            <FadeIn direction="left" delay={200}>
              <h1 className="font-pixel text-4xl sm:text-6xl md:text-8xl lg:text-[100px] xl:text-[118px] leading-[1.08] tracking-normal uppercase">
                <div className="flex flex-wrap">
                  <span className="text-white hover:text-[#2A30FF] transition-colors duration-300">POR</span>
                  <span className="text-[#2A30FF] hover:text-white transition-colors duration-300">T</span>
                </div>
                <div className="flex flex-wrap">
                  <span className="text-white hover:text-[#2A30FF] transition-colors duration-300">F</span>
                  <span className="text-[#2A30FF] hover:text-white transition-colors duration-300">O</span>
                  <span className="text-white hover:text-[#2A30FF] transition-colors duration-300">LIO</span>
                </div>
              </h1>
            </FadeIn>
          </div>

          {/* Right: Abstract Interlocking Blocks Composition */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <FadeIn direction="right" delay={350}>
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 animate-float">
                {/* Top Right Blue Block */}
                <div className="absolute top-0 right-8 w-24 h-24 sm:w-28 sm:h-28 bg-[#2A30FF] hover:scale-110 hover:z-20 transition-all duration-300 shadow-xl cursor-pointer" />
                {/* Middle Upper White Block */}
                <div className="absolute top-8 left-12 w-24 h-24 sm:w-28 sm:h-28 bg-white hover:scale-110 hover:z-20 transition-all duration-300 shadow-xl cursor-pointer" />
                {/* Middle Left Blue Block */}
                <div className="absolute top-20 left-0 w-24 h-24 sm:w-28 sm:h-28 bg-[#2A30FF] hover:scale-110 hover:z-20 transition-all duration-300 shadow-xl cursor-pointer" />
                {/* Middle Right White Block */}
                <div className="absolute top-24 right-0 w-24 h-24 sm:w-28 sm:h-28 bg-white hover:scale-110 hover:z-20 transition-all duration-300 shadow-xl cursor-pointer" />
                {/* Bottom Right Blue Block */}
                <div className="absolute bottom-8 right-10 w-24 h-24 sm:w-28 sm:h-28 bg-[#2A30FF] hover:scale-110 hover:z-20 transition-all duration-300 shadow-xl cursor-pointer" />
                {/* Bottom Left White Block */}
                <div className="absolute bottom-0 left-10 w-24 h-24 sm:w-28 sm:h-28 bg-white hover:scale-110 hover:z-20 transition-all duration-300 shadow-xl cursor-pointer" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Footer Section */}
        <FadeIn direction="up" delay={500} className="w-full">
          <footer className="relative z-10 max-w-7xl w-full mx-auto flex flex-col sm:flex-row justify-between items-end gap-6 pb-1 sm:pb-2">
            {/* Bottom Left Description */}
            <p className="font-pixelify text-sm sm:text-base text-gray-200 max-w-lg leading-relaxed">
              Welcome to my <span className="text-[#2A30FF]">portfolio.</span> I&apos;m excited to share this curated collection of <span className="text-[#2A30FF]">projects with you</span>, which demonstrates my skills and my approach to solving creative challenges.
            </p>

            {/* Bottom Right Stacked Year Badge */}
            <div className="font-pixel grid grid-cols-2 gap-x-2 gap-y-1 text-xl sm:text-2xl leading-none select-none text-right hover:scale-105 transition-transform duration-300 cursor-default">
              <span className="text-white">2</span>
              <span className="text-white">0</span>
              <span className="text-[#2A30FF]">2</span>
              <span className="text-[#2A30FF]">6</span>
            </div>
          </footer>
        </FadeIn>
      </section>

      {/* Page 2: About / Profile Section */}
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

      {/* Page 3: Tools & Languages Compact Slider Strip */}
      <section className="relative bg-[#0B0B0D] py-8 sm:py-10 px-4 flex flex-col items-center justify-center overflow-hidden border-t border-b border-white/10">
        <FadeIn direction="up" delay={100} className="w-full">
          {/* Compact Header */}
          <div className="text-center mb-5 select-none z-10">
            <span className="font-pixelify text-xs sm:text-sm text-[#2A30FF] tracking-widest uppercase font-bold">
              TOOLS  <span className='text-white'>&</span> LANGUAGES
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

      {/* Page 4: Experience Section (Main Page Scroll Driven Timeline - Swapped to Page 4) */}
      <ExperienceSection />

      {/* Page 5: All Project Section (Swapped to Page 5) */}
      <AllProjectSection />

      {/* Page 6: Footer CTA & Social Links Section */}
      <FooterSection />
    </main>
  );
}

// Page 5: All Project Section Component
function AllProjectSection() {
  return (
    <section className="relative min-h-screen bg-[#0B0B0D] bg-grid-pattern py-20 px-6 sm:px-10 md:px-14 flex flex-col justify-between overflow-hidden border-t border-white/10">
      {/* Top Left Brush SVG (Page 1 Style) */}
      <svg
        className="absolute -top-30 -left-30 md:-top-32 md:-left-32 w-56 h-56 md:w-80 md:h-80 pointer-events-none opacity-80 text-[#1E1D69] -rotate-12 z-0"
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

      {/* Mid Right Brush SVG (Page 1 Style) */}
      <svg
        className="absolute top-1/3 -right-30 md:-right-32 w-56 h-56 md:w-80 md:h-80 pointer-events-none opacity-80 text-[#1E1D69] -rotate-12 z-0"
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

      {/* Bottom Left Brush SVG (Page 1 Style) */}
      <svg
        className="absolute bottom-1/4 -left-30 md:-left-32 w-56 h-56 md:w-80 md:h-80 pointer-events-none opacity-80 text-[#1E1D69] -rotate-12 z-0"
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

      {/* Bottom Right Brush SVG (Page 1 Style) */}
      <svg
        className="absolute -bottom-30 -right-30 md:-bottom-32 md:-right-32 w-56 h-56 md:w-80 md:h-80 pointer-events-none opacity-80 text-[#1E1D69] -rotate-12 z-0"
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

      {/* Section Header */}
      <FadeIn direction="left" delay={100}>
        <div className="relative z-10 max-w-7xl w-full mx-auto mb-12 sm:mb-16 select-none">
          <h2 className="font-pixel text-4xl sm:text-6xl md:text-7xl leading-tight uppercase">
            <div className="text-white hover:text-[#2A30FF] transition-colors duration-300">All</div>
            <div className="text-[#2A30FF] hover:text-white transition-colors duration-300">Project</div>
          </h2>
          <p className="font-pixelify text-xs sm:text-sm text-gray-400 mt-2">
            *beberapa project tidak di <span className="text-[#2A30FF]">publish</span>
          </p>
        </div>
      </FadeIn>

      {/* Staggered Project Cards Layout */}
      <div className="relative z-10 max-w-7xl w-full mx-auto space-y-16 sm:space-y-20 mb-16">
        {projectsList.map((project, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <FadeIn
              key={project.id}
              direction={isEven ? 'right' : 'left'}
              delay={150 + idx * 100}
              className="w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div
                  className={`md:col-span-8 lg:col-span-7 ${
                    isEven ? 'md:col-start-5 lg:col-start-6' : ''
                  }`}
                >
                  {/* Card Container (Hover Lift & Glow Shadow) */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#16161a] group hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-[#2A30FF]/30 hover:border-[#2A30FF]/60 transition-all duration-500">
                    {/* Project Preview Image (Automatic Live Screenshot Preview or Local Image) */}
                    <img
                      src={
                        project.image && !project.image.includes('project-2') && !project.image.includes('project-3')
                          ? project.image
                          : `https://image.thum.io/get/width/1200/crop/750/noanimate/${project.link}`
                      }
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        // Try alternative microlink screenshot service if first service fails
                        const target = e.currentTarget;
                        if (!target.dataset.retried) {
                          target.dataset.retried = 'true';
                          target.src = `https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=true&embed=screenshot.url`;
                          return;
                        }
                        // Fallback styled mockup preview if image cannot be loaded
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.project-fallback');
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />

                    {/* Fallback Mockup View (Shown when project image is loading or blocked by target site like Dribbble) */}
                    <div
                      className={`project-fallback hidden absolute inset-0 p-6 sm:p-10 flex flex-col justify-between ${
                        project.link.includes('dribbble')
                          ? 'bg-gradient-to-br from-[#2B1B2C] via-[#1A1224] to-[#0D0D12] border-t-2 border-[#EA4C89]/50'
                          : 'bg-gradient-to-br from-[#1a1a24] to-[#0d0d12]'
                      }`}
                    >
                      {/* Fake Browser Address Bar */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-3 h-3 rounded-full bg-green-500/80" />
                          <span className="font-pixelify text-xs text-gray-300 ml-3">
                            {project.link}
                          </span>
                        </div>
                        {project.link.includes('dribbble') && (
                          <span className="bg-[#EA4C89]/20 text-[#EA4C89] border border-[#EA4C89]/40 font-pixelify text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full font-bold">
                            @Ihsanmaulanas
                          </span>
                        )}
                      </div>

                      {/* Content Body */}
                      <div className="my-auto space-y-3 max-w-md">
                        {project.link.includes('dribbble') ? (
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-[#EA4C89]/20 border border-[#EA4C89]/40 flex items-center justify-center">
                              <svg className="w-6 h-6 text-[#EA4C89]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm8.903 10.377a10.05 10.05 0 01-4.707 1.047c-.156-.402-.323-.807-.506-1.21 3.52-1.442 5.034-1.258 5.213-1.237a9.96 9.96 0 010 1.4zm-1.127-3.056c-.231-.02-1.921-.14-5.263 1.341a34.73 34.73 0 00-3.32-4.598A10.007 10.007 0 0119.776 7.32zM10.15 3.326a36.438 36.438 0 013.435 4.675 22.84 22.84 0 01-6.19 1.724A10.027 10.027 0 0110.15 3.326zM5.79 11.23a24.78 24.78 0 006.591-1.802c.2.433.385.867.556 1.297-4.475 1.38-8.214 1.378-8.624 1.373a10.024 10.024 0 011.477-0.868zM3.46 13.91c.477.005 3.993-.005 8.243-1.282a32.96 32.96 0 011.83 5.438A10.038 10.038 0 013.46 13.91zm11.884 5.39a31.42 31.42 0 00-1.848-5.385 11.87 11.87 0 004.819-1.077 10.032 10.032 0 01-2.971 6.462z" />
                              </svg>
                            </div>
                            <span className="font-pixelify text-xs text-[#EA4C89] uppercase tracking-widest font-bold">
                              DRIBBBLE SHOTS & DESIGNS
                            </span>
                          </div>
                        ) : (
                          <span className="font-pixelify text-xs text-[#2A30FF] uppercase tracking-widest font-bold">
                            PROJECT PREVIEW
                          </span>
                        )}
                        <h4 className="font-poppins text-xl sm:text-3xl font-extrabold text-white leading-tight">
                          {project.description}
                        </h4>
                      </div>
                    </div>

                    {/* Bottom Translucent Overlay Bar */}
                    <div className="absolute bottom-0 inset-x-0 bg-black/80 backdrop-blur-md p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 z-20">
                      {/* Left Side: Title & Role Badge */}
                      <div>
                        <h3 className="font-pixelify text-lg sm:text-2xl font-bold text-white tracking-wide group-hover:text-[#2A30FF] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="mt-1.5">
                          <span className="bg-[#2A30FF]/70 text-white border border-white/60 font-pixelify text-xs sm:text-sm font-bold px-3 py-1 rounded inline-block shadow-sm">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Right Side: Visit Link Button */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black font-pixelify font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-[#2A30FF] hover:text-white active:scale-95 transition-all duration-300 flex items-center gap-2 shadow-lg text-sm sm:text-base whitespace-nowrap select-none group/btn"
                      >
                        <span>Visit</span>
                        <svg
                          className="w-4 h-4 text-black group-hover/btn:text-white transition-colors duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Bottom Center Button */}
      <FadeIn direction="up" delay={200} className="w-full flex justify-center">
        <div className="relative z-10 flex justify-center pb-6 select-none">
          <button className="bg-white text-black font-pixelify font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg hover:bg-[#2A30FF] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl cursor-pointer">
            Tampilkan Semua
          </button>
        </div>
      </FadeIn>
    </section>
  );
}

// Page 4: Experience Section Component with Page Scroll Progression
function ExperienceSection() {
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

const experiencesList = [
  {
    id: 1,
    title: "GRAPHIC DESIGNER",
    period: "2021 - 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eget ullamcorper faucibus aliquet scelerisque. Risus in aliquet nisl pharetra adipiscing. Id commodo fermentum morbi eros. Nunc fames sed id praesent purus consectetur.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    period: "2021 - 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eget ullamcorper faucibus aliquet scelerisque. Risus in aliquet nisl pharetra adipiscing. Id commodo fermentum morbi eros. Nunc fames sed id praesent purus consectetur.",
  },
  {
    id: 3,
    title: "FE Developer",
    period: "2023 - Present",
    description:
      "Developing high performance modern web applications with Next.js, React, and Tailwind CSS. Crafting interactive retro-brutalist user experiences and responsive designs.",
  },
];

const toolsList = [
  {
    name: "Antigravity",
    icon: (
      <svg className="w-6 h-6 text-[#2A30FF]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 180 180">
        <path d="M90 0a90 90 0 100 180 90 90 0 000-180zm43.3 147.2L74.8 67.5V135H60V45h17.3l55.8 77V45h14.8v102.2h-4.6z" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg className="w-6 h-6 text-[#61DAFB]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg className="w-6 h-6 text-[#3178C6]" fill="currentColor" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <text x="5" y="17" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">TS</text>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="w-6 h-6 text-[#06B6D4]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg className="w-6 h-6 text-[#F7DF1E]" fill="currentColor" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <text x="5" y="17" fill="#000" fontSize="13" fontWeight="bold" fontFamily="sans-serif">JS</text>
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    icon: (
      <svg className="w-6 h-6 text-[#E34F26]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718h10.059l.236-2.625H5.404l.698 8.062h9.107l-.375 4.125-3.864 1.05-3.864-1.05-.25-2.765H4.18l.492 5.563 7.302 2.016 7.286-2.016 1.016-11.64H8.531z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg className="w-6 h-6 text-[#1572B6]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718h10.059l.236-2.625H5.404l.698 8.062h9.107l-.375 4.125-3.864 1.05-3.864-1.05-.25-2.765H4.18l.492 5.563 7.302 2.016 7.286-2.016 1.016-11.64H8.531z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg className="w-6 h-6 text-[#339933]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0L1.75 5.92v11.84L12 23.68l10.25-5.92V5.92L12 0zm-1 16.5l-4-2.3v-4.6l4 2.3v4.6zm6-3.5l-4 2.3v-4.6l4-2.3v4.6z" />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg className="w-6 h-6 text-[#F05032]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.41-1.994L12.7 8.795v6.52c.16.082.31.189.439.319.72.72.72 1.884 0 2.604-.719.719-1.882.719-2.601 0-.719-.719-.719-1.884 0-2.604.181-.182.387-.311.605-.39v-6.57c-.218-.079-.424-.208-.605-.39-.533-.533-.674-1.321-.422-1.974L6.685 3.65 1.454 8.882c-.604.604-.604 1.583 0 2.188l10.479 10.478c.604.604 1.583.604 2.188 0l9.425-9.425c.604-.604.604-1.583 0-2.188z" />
      </svg>
    ),
  },
  {
    name: "VS Code",
    icon: (
      <svg className="w-6 h-6 text-[#007ACC]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63L2.8 5.865a.747.747 0 00-1.026.195L.19 8.21a.747.747 0 00.19 1.027l4.084 3.064L.38 15.367a.747.747 0 00-.19 1.027l1.583 2.15a.747.747 0 001.026.195l4.246-3.267 9.46 8.63a1.494 1.494 0 001.705.29l4.94-2.377A1.495 1.495 0 0024 20.627V3.973a1.495 1.495 0 00-.85-1.386zM18 16.5L12.5 12 18 7.5v9z" />
      </svg>
    ),
  },
  {
    name: "Photoshop",
    icon: (
      <svg className="w-6 h-6 text-[#31A8FF]" fill="currentColor" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#001E36" />
        <text x="4" y="16" fill="#31A8FF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Ps</text>
      </svg>
    ),
  },
];

const projectsList = [
  {
    id: 1,
    title: "Bali Limestone.id",
    category: "UI/UX Designer",
    image: "/projects/bali-limestone.jpg",
    link: "https://balilimestone.id",
    description: "Trusted Construction Materials & Heavy Equipment Solutions in Bali",
  },
  {
    id: 2,
    title: "Project Portfolio.id",
    category: "FE Developer",
    image: "/projects/project-2.jpg",
    link: "https://github.com",
    description: "Modern Retro-Brutalist Web Application Portfolio",
  },
  {
    id: 3,
    title: "Dribbble Portfolio.id",
    category: "Graphic Designer",
    image: "/projects/project-3.jpg",
    link: "https://dribbble.com/Ihsanmaulanas",
    description: "Creative Design Shots & Brand Identity Portfolio",
  },
];

// Page 6: Compact Footer CTA & Social Media Links Section (Clean Obsidian Style without Brush)
function FooterSection() {
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
              LET&apos;S <span className='text-white'>CONNECT</span>
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



