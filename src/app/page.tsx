'use client';

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ToolsSection from '@/components/ToolsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AllProjectSection from '@/components/AllProjectSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0D] text-white overflow-x-hidden selection:bg-[#2A30FF] selection:text-white">
      {/* Page 1: Hero Landing Section */}
      <HeroSection />

      {/* Page 2: About / Profile Section */}
      <AboutSection />

      {/* Page 3: Tools & Languages Compact Slider Strip */}
      <ToolsSection />

      {/* Page 4: Experience Section */}
      <ExperienceSection />

      {/* Page 5: All Project Section */}
      <AllProjectSection />

      {/* Page 6: Footer CTA & Social Links Section */}
      <FooterSection />
    </main>
  );
}
