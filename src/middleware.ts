import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    matcher: [
        // corre en todo excepto api, _next, archivos estáticos, login y admin
        '/((?!api|_next|_vercel|login|leads|.*\\..*).*)',
    ],
};