'use client';

import FadeIn from './FadeIn';

export default function HeroSection() {
  return (
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
        <nav className="relative z-10 flex justify-between items-center max-w-7xl w-full mx-auto text-xs xs:text-sm sm:text-lg md:text-xl font-pixelify tracking-wider pt-1 sm:pt-2 flex-wrap gap-1 sm:gap-2">
          <span className="text-white hover:text-[#2A30FF] transition-colors duration-200 cursor-pointer">Hello!</span>
          <span className="text-[#2A30FF] hover:text-white transition-colors duration-200 cursor-pointer">Hai?</span>
          <span className="text-white hover:text-[#2A30FF] transition-colors duration-200 cursor-pointer">Welcome</span>
          <span className="text-[#2A30FF] hover:text-white transition-colors duration-200 cursor-pointer">To</span>
          <span className="text-white hover:text-[#2A30FF] transition-colors duration-200 cursor-pointer">My</span>
          <span className="text-[#2A30FF] hover:text-white transition-colors duration-200 cursor-pointer">Web</span>
        </nav>
      </FadeIn>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl w-full mx-auto my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Huge PORTFOLIO Bitmap Typography using Press Start 2P */}
        <div className="lg:col-span-8 select-none text-left">
          <FadeIn direction="left" delay={200}>
            <h1 className="font-pixel text-[42px] xs:text-5xl sm:text-6xl md:text-8xl lg:text-[100px] xl:text-[118px] leading-[1.05] sm:leading-[1.08] tracking-normal uppercase">
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
        <div className="lg:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <FadeIn direction="right" delay={350}>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 animate-float">
              {/* Top Right Blue Block */}
              <div className="absolute top-0 right-6 sm:right-8 w-20 h-20 sm:w-28 sm:h-28 bg-[#2A30FF] hover:scale-110 hover:z-20 transition-all duration-300 shadow-xl cursor-pointer" />
              {/* Middle Upper White Block */}
              <div className="absolute top-6 sm:top-8 left-10 sm:left-12 w-20 h-20 sm:w-28 sm:h-28 bg-white hover:scale-110 hover:z-20 transition-all duration-300 shadow-xl cursor-pointer" />
              {/* Middle Left Blue Block */}
              <div className="absolute top-16 sm:top-20 left-0 w-20 h-20 sm:w-28 sm:h-28 bg-[#2A30FF] hover:scale-110 hover:z-20 transition-all duration-300 shadow-xl cursor-pointer" />
              {/* Middle Right White Block */}
              <div className="absolute top-20 sm:top-24 right-0 w-20 h-20 sm:w-28 sm:h-28 bg-white hover:scale-110 hover:z-20 transition-all duration-300 shadow-xl cursor-pointer" />
              {/* Bottom Right Blue Block */}
              <div className="absolute bottom-6 sm:bottom-8 right-8 sm:right-10 w-20 h-20 sm:w-28 sm:h-28 bg-[#2A30FF] hover:scale-110 hover:z-20 transition-all duration-300 shadow-xl cursor-pointer" />
              {/* Bottom Left White Block */}
              <div className="absolute bottom-0 left-8 sm:left-10 w-20 h-20 sm:w-28 sm:h-28 bg-white hover:scale-110 hover:z-20 transition-all duration-300 shadow-xl cursor-pointer" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer Section */}
      <FadeIn direction="up" delay={500} className="w-full">
        <footer className="relative z-10 max-w-7xl w-full mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 pb-2 sm:pb-3">
          {/* Bottom Left Description */}
          <p className="font-pixelify text-xs sm:text-sm md:text-base text-gray-200 max-w-lg leading-relaxed">
            Welcome to my <span className="text-[#2A30FF] font-bold">portfolio.</span> I&apos;m excited to share this curated collection of <span className="text-[#2A30FF] font-bold">projects with you</span>, which demonstrates my skills and my approach to solving creative challenges.
          </p>

          {/* Bottom Right Stacked Year Badge */}
          <div className="font-pixel grid grid-cols-2 gap-x-2 gap-y-1 text-lg sm:text-2xl leading-none select-none text-left sm:text-right hover:scale-105 transition-transform duration-300 cursor-default self-end sm:self-auto">
            <span className="text-white">2</span>
            <span className="text-white">0</span>
            <span className="text-[#2A30FF]">2</span>
            <span className="text-[#2A30FF]">6</span>
          </div>
        </footer>
      </FadeIn>
    </section>
  );
}
