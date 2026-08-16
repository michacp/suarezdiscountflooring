// src/features/gallery/data/work-mock.ts

// ⚠️ TEMPORAL — Enfoque actual: embeds estáticos de Facebook (plugins/post.php y video.php)
// TODO(api-meta): cuando la Graph API esté lista:
//   1. Crear /api/facebook/photos/route.ts y /api/facebook/reels/route.ts
//   2. Reemplazar el fetch de estos arrays por fetch a esos endpoints
//   3. En PhotoCarousel.tsx: cambiar <iframe plugins/post.php> por <Image src={photo.imageUrl} />
//   4. En ReelsCarousel.tsx: puede quedarse igual (el embed de video no tiene alternativa
//      "más limpia" vía API sin usar el reproductor propio, así que probablemente no cambie)
//   5. Borrar este archivo work-mock.ts

// Cómo conseguir la URL de una foto SIN contexto de álbum:
// abre la foto en modo ampliado (lightbox) → "..." → Insertar → copia el href
// (debe verse como /photos/a.XXXXXXX/YYYYYYY/, NO como photo.php?fbid=...&set=...)
export const WORK_PHOTOS = [
    { id: 'p1', src: '/images/work/photo-1.jpg', alt: 'Hardwood flooring installation' },
    { id: 'p2', src: '/images/work/photo-2.jpg', alt: 'Modern tile flooring project' },
    { id: 'p3', src: '/images/work/photo-3.jpg', alt: 'Vinyl plank flooring finished' },
    { id: 'p4', src: '/images/work/photo-4.jpg', alt: 'Carpet installation living room' },
    { id: 'p5', src: '/images/work/photo-5.jpg', alt: 'Custom hardwood pattern' },
    { id: 'p6', src: '/images/work/photo-6.jpg', alt: 'Commercial flooring project' },
    { id: 'p7', src: '/images/work/photo-7.jpg', alt: 'Commercial flooring project' },
    { id: 'p8', src: '/images/work/photo-8.jpg', alt: 'Commercial flooring project' },
];

// Link completo del post de video/reel (debe ser público)
export const WORK_REELS = [
    { id: 'r1', url: 'https://www.facebook.com/suarezdiscountflooring/videos/2261907291424238' },
    { id: 'r2', url: 'https://www.facebook.com/suarezdiscountflooring/videos/1937646670224377' },
    { id: 'r3', url: 'https://www.facebook.com/suarezdiscountflooring/videos/1299365812364903' },
    { id: 'r4', url: 'https://www.facebook.com/suarezdiscountflooring/videos/774730275661280' },
    { id: 'r5', url: 'https://www.facebook.com/suarezdiscountflooring/videos/4126870577450551' },
    { id: 'r6', url: 'https://www.facebook.com/suarezdiscountflooring/videos/27075871572104257' },
    { id: 'r7', url: 'https://www.facebook.com/suarezdiscountflooring/videos/1313705367093777' },
    { id: 'r8', url: 'https://www.facebook.com/suarezdiscountflooring/videos/27085599651069082' },
    { id: 'r9', url: 'https://www.facebook.com/suarezdiscountflooring/videos/922997760557337' },
    { id: 'r10', url: 'https://www.facebook.com/suarezdiscountflooring/videos/1326153762665705' },
];