// src/components/layout/Footer.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { useQuoteModal } from '@/features/landing/context/QuoteModalContext';
import { CONTACT } from '@/shared/config/contact'

const NAV_LINKS = [
  { href: '/', key: 'home' },
  { href: '/services', key: 'services' },
  { href: '/gallery', key: 'gallery' },
] as const;

 
// Un solo lugar para agregar/quitar redes sociales sin tocar el JSX
const SOCIAL_LINKS = [
  { href: CONTACT.facebookUrl, icon: FaFacebookF, label: 'Facebook' },
  { href: CONTACT.instagramUrl, icon: FaInstagram, label: 'Instagram' },
] as const;

export default function Footer() {
  const t = useTranslations('footer');
  const { openModal } = useQuoteModal();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-navy text-white overflow-hidden">
      {/* Franja superior: mismo degradado ámbar del Topbar/Hero */}
      <div className="h-[3px] w-full bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 lg:gap-8">
          {/* Marca */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group w-fit">
              <Image
                src="/images/blanco.png"
                alt="Suarez Discount Flooring"
                width={48}
                height={48}
                className="rounded-full object-cover w-11 h-11 border border-white/20 shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-base font-serif italic font-bold tracking-wide bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Discount Flooring
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
              {t('tagline')}
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-red transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">
              {t('quickLinksTitle')}
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ href, key }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {t(key)}
                  </Link>
                </li>
              ))}
              <li>
                <button onClick={openModal} className="text-sm text-white/70 hover:text-white transition-colors">
                  {t('getQuote')}
                </button>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">
              {t('hoursTitle')}
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li className="flex justify-between gap-4">
                <span>{t('weekdays')}</span>
                <span className="text-white/50">8:00 – 6:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{t('saturday')}</span>
                <span className="text-white/50">9:00 – 4:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{t('sunday')}</span>
                <span className="text-white/50">{t('closed')}</span>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">
              {t('contactTitle')}
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href={CONTACT.phoneHref} className="flex items-start gap-2.5 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-amber-300" strokeWidth={2} />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-2.5 hover:text-white transition-colors break-all">
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-amber-300" strokeWidth={2} />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-amber-300" strokeWidth={2} />
                {CONTACT.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {year} Suarez Discount Flooring. {t('rightsReserved')}
          </p>
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" />
            <span>{t('madeWith')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}