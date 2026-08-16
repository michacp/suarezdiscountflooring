// src/components/layout/FloatingWhatsApp.tsx
'use client';

import { useTranslations, useLocale } from 'next-intl';
import { FaWhatsapp } from 'react-icons/fa6';
import { CONTACT } from '@/shared/config/contact';

export default function FloatingWhatsApp() {
  const t = useTranslations('whatsapp');
  const locale = useLocale();

  const message = encodeURIComponent(t('prefilledMessage'));
  const href = `https://wa.me/${CONTACT.whatsappNumber}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('ariaLabel')}
      className="group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center"
    >
      {/* Tooltip: visible solo en desktop al pasar el mouse */}
      <span className="hidden sm:block mr-3 max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-brand-navy px-0 py-0 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:max-w-xs group-hover:px-4 group-hover:py-2.5 group-hover:opacity-100">
        {t('tooltip')}
      </span>

      {/* Anillo de pulso: llama la atención sin ser invasivo */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping [animation-duration:2.5s]" />

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform duration-300 group-hover:scale-110 active:scale-95">
        <FaWhatsapp className="h-7 w-7" />
      </span>
    </a>
  );
}