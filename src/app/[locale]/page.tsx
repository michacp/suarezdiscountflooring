// src/app/[locale]/page.tsx
import HeroSection from '@/features/landing/components/HeroSection';
import ServicesGrid from '@/features/landing/components/ServicesGrid';
import WorkSection from '@/features/landing/components/WorkSection';
import LatestPostsSection from '@/features/landing/components/LatestPostsSection';
import QuoteSection from '@/features/landing/components/QuoteSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <WorkSection />
      <LatestPostsSection />
      <QuoteSection />
    </main>
  );
}