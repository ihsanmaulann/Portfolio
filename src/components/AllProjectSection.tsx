'use client';

import FadeIn from './FadeIn';
import { projectsList } from '../data/portfolioData';

export default function AllProjectSection() {
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
