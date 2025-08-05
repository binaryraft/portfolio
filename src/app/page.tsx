
"use client";

import HeroSection from '@/components/sections/hero-section';
import AboutMeSection from '@/components/sections/about-me-section';
import AcademicHistorySection from '@/components/sections/academic-history-section';
import SkillsSection from '@/components/sections/skills-section';
import ProjectShowcaseSection from '@/components/sections/project-showcase-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import AchievementsSection from '@/components/sections/achievements-section';
import BlogSection from '@/components/sections/blog-section';
import ContactSection from '@/components/sections/contact-section';
import { useTheme } from '@/contexts/theme-context';

export default function HomePage() {
  const { isHackerMode } = useTheme();

  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <AcademicHistorySection /> 
      <SkillsSection />
      {!isHackerMode && (
        <>
          <ProjectShowcaseSection />
          <TestimonialsSection />
          <AchievementsSection />
          <BlogSection />
        </>
      )}
      <ContactSection />
    </>
  );
}
