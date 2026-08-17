// src/app/[locale]/gallery/page.tsx
export const runtime = 'edge';
import { getTranslations } from 'next-intl/server';
import GalleryTabs from '@/features/gallery/components/GalleryTabs';

export default async function GalleryPage() {
  const t = await getTranslations('gallery');

  return (
    <main className="pt-32 pb-20 px-4 bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-navy mb-4">
            {t('pageTitle')}
          </h1>
          <p className="text-slate-600 leading-relaxed">{t('pageSubtitle')}</p>
        </div>

        <GalleryTabs />
      </div>
    </main>
  );
}