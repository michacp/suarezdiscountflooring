// src/features/landing/components/QuoteModal.tsx
'use client';

import { useTranslations } from 'next-intl';
import { useQuoteModal } from '@/features/landing/context/QuoteModalContext';
import QuoteForm from '@/features/quote/components/QuoteForm';

export default function QuoteModal() {
  const t = useTranslations('quoteModal');
  const { isOpen, closeModal } = useQuoteModal();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100"
        >
          ✕
        </button>

        <h2 className="text-2xl font-extrabold text-brand-navy mb-1">{t('title')}</h2>
        <p className="text-sm text-slate-500 mb-6">{t('subtitle')}</p>

        <QuoteForm variant="compact" />
      </div>
    </div>
  );
}