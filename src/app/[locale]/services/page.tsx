// src/app/[locale]/services/page.tsx
export const runtime = 'edge';
import { getTranslations } from 'next-intl/server';
import { CATEGORY_ORDER, CATEGORY_ITEMS, CATEGORY_META } from '@/features/services/config';
import ServiceCard from '@/features/services/components/ServiceCard';

export default async function ServicesPage() {
  const t = await getTranslations('services');

  return (
    <main className="pt-32 pb-20 px-4">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-navy mb-4">
          {t('pageTitle')}
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">{t('pageSubtitle')}</p>
      </div>

      <div className="mx-auto max-w-6xl space-y-20">
        {CATEGORY_ORDER.map((category) => {
          const { icon: Icon, accent, accentSoft } = CATEGORY_META[category];
          return (
            <section key={category}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: accentSoft }}
                >
                  <Icon className="h-5 w-5" style={{ color: accent }} strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-bold text-brand-navy">
                  {t(`categories.${category}.title`)}
                </h2>
              </div>
              <div
                className="h-0.5 w-full rounded-full mb-8"
                style={{ backgroundColor: accentSoft }}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CATEGORY_ITEMS[category].map((item) => (
                  <ServiceCard
                    key={item}
                    category={category}
                    imageKey={item}
                    size="compact"
                    title={t(`categories.${category}.items.${item}.title`)}
                    description={t(`categories.${category}.items.${item}.description`)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}