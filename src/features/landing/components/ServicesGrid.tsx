// src/features/landing/components/ServicesGrid.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { FEATURED_SERVICE_KEYS } from '@/features/services/config';
import ServiceCard from '@/features/services/components/ServiceCard';

export default function ServicesGrid() {
  const t = useTranslations('services');

  return (
    <section id="services" className="py-20 px-4 bg-slate-50">
      <div className="mx-auto max-w-6xl text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-3">
          {t('sectionTitle')}
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">{t('sectionSubtitle')}</p>
      </div>

      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURED_SERVICE_KEYS.map(({ category, item }) => (
          <ServiceCard
            key={`${category}-${item}`}
            category={category}
            imageKey={item}
            title={t(`categories.${category}.items.${item}.title`)}
            description={t(`categories.${category}.items.${item}.description`)}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/services"
          className="inline-block bg-brand-navy hover:bg-brand-navy/90 text-white font-bold px-8 py-3.5 rounded-full transition-all"
        >
          {t('viewAllCta')}
        </Link>
      </div>
    </section>
  );
}