// src/features/landing/components/QuoteSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Phone, ShieldCheck, Clock3 } from 'lucide-react';
import { CONTACT } from '@/shared/config/contact';
import QuoteForm from '@/features/quote/components/QuoteForm';

const TRUST_BADGES = [
  { icon: ShieldCheck, key: 'licensed' },
  { icon: Clock3, key: 'fastResponse' },
  { icon: Phone, key: 'freeConsult' },
] as const;

export default function QuoteSection() {
  const t = useTranslations('quoteSection');

  return (
    <section id="contact-quote" className="relative py-20 bg-brand-navy text-white overflow-hidden">
      {/* Franja superior: mismo degradado ámbar del Topbar/Footer */}
      <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500" />

      {/* Textura de puntos, igual que el Footer, para dar continuidad visual */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Resplandor decorativo detrás del título */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <span className="text-amber-300 font-extrabold text-xs uppercase tracking-widest">
          {t('eyebrow')}
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-extrabold mt-2 mb-4">
          {t('title')}
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
          {t('subtitle')}
        </p>

        {/* Badges de confianza */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12">
          {TRUST_BADGES.map(({ icon: Icon, key }) => (
            <div key={key} className="flex items-center gap-2 text-sm text-white/80">
              <Icon className="h-4 w-4 text-amber-300" strokeWidth={2} />
              {t(`badges.${key}`)}
            </div>
          ))}
        </div>

        {/* Formulario */}
        <div className="bg-white text-brand-navy p-6 md:p-10 rounded-3xl shadow-2xl">
          <QuoteForm variant="wide" />
        </div>

        {/* Alternativa: llamar directamente */}
        <p className="mt-8 text-sm text-white/60">
          {t('preferCall')}{' '}
          <a href={CONTACT.phoneHref} className="text-amber-300 font-bold hover:text-amber-200 transition-colors">
            {CONTACT.phone}
          </a>
        </p>
      </div>
    </section>
  );
}