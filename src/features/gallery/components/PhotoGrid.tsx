// src/features/gallery/components/PhotoGrid.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GALLERY_PHOTOS } from '@/features/gallery/data/gallery-mock';
import PhotoLightbox from './PhotoLightbox';

export default function PhotoGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {GALLERY_PHOTOS.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => setActiveIndex(i)}
            className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-navy"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <PhotoLightbox
          photos={GALLERY_PHOTOS}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  );
}