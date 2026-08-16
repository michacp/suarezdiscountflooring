// src/features/landing/components/LatestPostsSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Rss } from 'lucide-react';
import LatestPostsCarousel from '@/features/gallery/components/LatestPostsCarousel';

export default function LatestPostsSection() {
  const t = useTranslations('latestPosts');

  return (
    <section id="latest-posts" className="py-20 px-4 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-red mb-3">
            <Rss className="h-3.5 w-3.5" />
            {t('eyebrow')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-4 leading-tight">
            {t('sectionTitle')}
          </h2>
          <p className="text-slate-600 leading-relaxed">{t('sectionSubtitle')}</p>
        </div>

        <LatestPostsCarousel />
      </div>
    </section>
  );
}