'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useQuoteModal } from '@/features/landing/context/QuoteModalContext';

const TOPBAR_HEIGHT = 80;

// Franja de materiales: refuerza qué se ofrece, no es solo decoración.
const MATERIALS = [
  { color: '#B45309', labelKey: 'materials.hardwood' },
  { color: '#78716C', labelKey: 'materials.tile' },
  { color: '#57534E', labelKey: 'materials.vinyl' },
  { color: '#7C2D12', labelKey: 'materials.carpet' },
];

export default function HeroSection() {
  const t = useTranslations('hero');
  const { openModal } = useQuoteModal();

  return (
    <section className="relative flex items-center justify-center min-h-screen min-h-[100svh] w-full overflow-hidden">
      <Image
        src="/images/hero-flooring1.webp"
        alt="Professional flooring installation"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Capas de superposición aclaradas */}
      <div className="absolute inset-0 bg-brand-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/25 to-transparent" />
      {/* Viñeta sutil para enfocar el centro */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,30,45,0.35)_100%)]" />

      <div
        className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white"
        style={{ paddingTop: TOPBAR_HEIGHT, paddingBottom: 32 }}
      >
        {/* Eyebrow / sello de confianza */}
        <div
          className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/25 backdrop-blur-sm px-4 py-1.5 mb-6 text-xs sm:text-sm font-semibold tracking-wide uppercase text-amber-200"
          style={{ animationDelay: '0ms' }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
          {t('eyebrow')}
        </div>

        <h1
          className="animate-fade-up font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6 drop-shadow-md"
          style={{ animationDelay: '80ms' }}
        >
          {t('title')}
        </h1>

        <p
          className="animate-fade-up text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl mx-auto mb-10 font-medium drop-shadow"
          style={{ animationDelay: '160ms' }}
        >
          {t('subtitle')}
        </p>

        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          style={{ animationDelay: '240ms' }}
        >
          <button
            onClick={openModal}
            className="bg-brand-red hover:bg-brand-red-hover text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-red-500/30 transition-all transform active:scale-95"
          >
            {t('cta')}
          </button>

          <a
            href="#services"
            className="border-2 border-white/70 hover:border-white text-white font-semibold text-base px-8 py-4 rounded-full transition-all backdrop-blur-sm hover:bg-white/10"
          >
            {t('servicesCta')}
          </a>
        </div>

        {/* Franja de materiales ofrecidos */}
        <div
          className="animate-fade-up flex items-center justify-center gap-5 flex-wrap"
          style={{ animationDelay: '320ms' }}
        >
          {MATERIALS.map((m) => (
            <div key={m.labelKey} className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full ring-2 ring-white/40"
                style={{ backgroundColor: m.color }}
              />
              <span className="text-xs font-medium text-white/80">{t(m.labelKey)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70">
        <span className="text-[10px] uppercase tracking-widest">{t('scrollHint')}</span>
        <div className="h-8 w-px bg-white/40" style={{ animation: 'bounce-soft 1.6s ease-in-out infinite' }} />
      </div>

      {/* Borde inferior tipo "corte de tabla" — conecta con la sección de Servicios (bg-slate-50) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-12 sm:h-16 z-10"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,80 L0,40 L100,20 L220,45 L340,15 L460,50 L580,25 L700,55 L820,20 L940,48 L1060,18 L1200,42 L1200,80 Z"
          className="fill-slate-50"
        />
      </svg>
    </section>
  );
}