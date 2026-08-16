'use client';

import { useEffect, useState } from 'react';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import { cn } from '@/shared/utils/cn';
import Image from 'next/image';
import { Home, Wrench, Images } from 'lucide-react';
import { useQuoteModal } from '@/features/landing/context/QuoteModalContext';

const NAV_LINKS = [
  { href: '/', key: 'home', icon: Home },
  { href: '/services', key: 'services', icon: Wrench },
  { href: '/gallery', key: 'gallery', icon: Images },
] as const;

export default function Topbar() {
  const t = useTranslations('topbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useQuoteModal();

  // Solo el Home tiene un Hero oscuro detrás; en cualquier otra página
  // el Topbar debe verse "sólido" desde el inicio, sin esperar el scroll.
  const isHomePage = pathname === '/';
  const showSolid = scrolled || menuOpen || !isHomePage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value });
  };

  const handleCtaClick = () => {
    setMenuOpen(false);
    openModal();
  };

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300',
        showSolid
          ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-white/10 backdrop-blur-md border-b border-white/10 py-4'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group z-50">
          <Image
            src="/images/logo.png"
            alt="Suarez Discount Flooring"
            width={48}
            height={48}
            priority
            className="rounded-full object-cover w-10 h-10 sm:w-12 sm:h-12 border border-white/20 shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
            <span className="text-sm sm:text-base font-serif italic font-bold tracking-wide bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
              Discount Flooring
            </span>
          </div>
        </Link>

        {/* Navegación Desktop con indicador activo */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-white">
          {NAV_LINKS.map(({ href, key }) => {
            const active = isActive(href);
            return (
              <Link key={href} href={href} className="relative py-1 group">
                <span className={cn('transition-colors', active ? 'text-brand-yellow' : 'group-hover:text-brand-yellow')}>
                  {t(key)}
                </span>
                <span
                  className={cn(
                    'absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 origin-left transition-transform duration-300',
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Idioma + CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <select
            value={locale}
            onChange={handleLocaleChange}
            className="bg-white/10 border border-white/30 text-white text-xs font-semibold uppercase rounded-full px-3 py-1.5 cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-yellow"
          >
            {routing.locales.map((loc) => (
              <option key={loc} value={loc} className="bg-brand-navy text-white">
                {loc}
              </option>
            ))}
          </select>

          <span className="h-6 w-px bg-white/20" aria-hidden="true" />

          <button
            onClick={openModal}
            className="bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95"
          >
            {t('cta')}
          </button>
        </div>

        {/* Botón Menú Hamburguesa + Idioma (Móvil) */}
        <div className="flex items-center gap-2 md:hidden">
          <select
            value={locale}
            onChange={handleLocaleChange}
            className="bg-white/10 border border-white/30 text-white text-xs font-semibold uppercase rounded-full px-2.5 py-1 cursor-pointer focus:outline-none"
          >
            {routing.locales.map((loc) => (
              <option key={loc} value={loc} className="bg-brand-navy text-white">
                {loc}
              </option>
            ))}
          </select>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/10',
          menuOpen ? 'max-h-96 opacity-100 mt-2 py-4' : 'max-h-0 opacity-0 py-0'
        )}
      >
        <div className="flex flex-col items-stretch gap-1 px-4">
          {NAV_LINKS.map(({ href, key, icon: Icon }, i) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-base font-semibold transition-colors',
                  active ? 'bg-white/10 text-brand-yellow' : 'text-white hover:bg-white/5'
                )}
                style={menuOpen ? { animation: `fade-up 0.4s ease-out both`, animationDelay: `${i * 60}ms` } : undefined}
              >
                <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
                {t(key)}
              </Link>
            );
          })}

          <button
            onClick={handleCtaClick}
            className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm py-3 rounded-full shadow-md transition-all active:scale-95 mt-3"
            style={menuOpen ? { animation: 'fade-up 0.4s ease-out both', animationDelay: `${NAV_LINKS.length * 60}ms` } : undefined}
          >
            {t('cta')}
          </button>
        </div>
      </div>

      {/* Franja inferior: mismo degradado ámbar del logo/eyebrow del Hero */}
      <div
        className={cn(
          'absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 transition-opacity duration-300',
          showSolid ? 'opacity-100' : 'opacity-0'
        )}
      />
    </header>
  );
}