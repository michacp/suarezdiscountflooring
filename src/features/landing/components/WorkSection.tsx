// src/features/landing/components/WorkSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Image as ImageIcon, Video } from 'lucide-react';
import PhotoCarousel from '@/features/gallery/components/PhotoCarousel';
import ReelsCarousel from '@/features/gallery/components/ReelsCarousel';

export default function WorkSection() {
  const t = useTranslations('work');

  return (
    <section id="our-work" className="py-20 px-4 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-red mb-3">
            {t('eyebrow')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-4 leading-tight">
            {t('sectionTitle')}
          </h2>
          <p className="text-slate-600 leading-relaxed">{t('sectionSubtitle')}</p>
        </div>

        <div className="flex flex-col gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ImageIcon className="h-4 w-4 text-brand-navy" strokeWidth={2} />
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                {t('photosLabel')}
              </h3>
            </div>
            <PhotoCarousel />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Video className="h-4 w-4 text-brand-navy" strokeWidth={2} />
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                {t('reelsLabel')}
              </h3>
            </div>
            <ReelsCarousel />
          </div>
        </div>

        <div className="text-center mt-14">
          <Link
            href="/gallery"
            className="inline-block bg-brand-navy hover:bg-brand-navy/90 text-white font-bold px-8 py-3.5 rounded-full transition-all"
          >
            {t('viewAllCta')}
          </Link>
        </div>
      </div>
    </section>
  );
}