// src/features/quote/components/QuoteForm.tsx
'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/shared/utils/cn';

interface QuoteFormProps {
  // compact: una columna (Modal, espacio angosto) | wide: dos columnas (Sección del Home)
  variant?: 'compact' | 'wide';
  className?: string;
}

export default function QuoteForm({ variant = 'wide', className }: QuoteFormProps) {
  const t = useTranslations('quoteForm');
  const isWide = variant === 'wide';

  return (
    <form
      className={cn('grid grid-cols-1 gap-5 text-left', isWide && 'md:grid-cols-2', className)}
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label className="block text-xs font-bold uppercase mb-1.5 text-slate-700">
          {t('fullName')}
        </label>
        <input
          type="text"
          placeholder={t('fullNamePlaceholder')}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:outline-none text-sm transition-shadow"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase mb-1.5 text-slate-700">
          {t('phone')}
        </label>
        <input
          type="tel"
          placeholder={t('phonePlaceholder')}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:outline-none text-sm transition-shadow"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase mb-1.5 text-slate-700">
          {t('email')}
        </label>
        <input
          type="email"
          placeholder={t('emailPlaceholder')}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:outline-none text-sm transition-shadow"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase mb-1.5 text-slate-700">
          {t('service')}
        </label>
        <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:outline-none text-sm text-slate-700 transition-shadow">
          <option value="hardwood">{t('serviceOptions.hardwood')}</option>
          <option value="lvp">{t('serviceOptions.lvp')}</option>
          <option value="carpet">{t('serviceOptions.carpet')}</option>
          <option value="repair">{t('serviceOptions.repair')}</option>
        </select>
      </div>

      <div className={cn(isWide && 'md:col-span-2')}>
        <label className="block text-xs font-bold uppercase mb-1.5 text-slate-700">
          {t('message')}
        </label>
        <textarea
          rows={isWide ? 3 : 4}
          placeholder={t('messagePlaceholder')}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:outline-none text-sm resize-none transition-shadow"
        />
      </div>

      <div className={cn(isWide && 'md:col-span-2')}>
        <button
          type="submit"
          className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 text-base"
        >
          {t('submit')}
        </button>
      </div>
    </form>
  );
}