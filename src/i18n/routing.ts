import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localePrefix: 'as-needed', // "en" no lleva prefijo, "es" sí (/es/galery)
});