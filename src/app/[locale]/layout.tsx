// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Topbar from '@/components/layout/Topbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { QuoteModalProvider } from '@/features/landing/context/QuoteModalContext';
import QuoteModal from '@/features/landing/components/QuoteModal';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) notFound();

  // Pasa el locale explícitamente para compatibilidad con Cloudflare Edge
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <QuoteModalProvider>
            <Topbar />
            {children}
            <Footer />
            <QuoteModal />
            <FloatingWhatsApp />
          </QuoteModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}