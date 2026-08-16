// src/features/gallery/components/PhotoLightbox.tsx
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt: string;
}

interface PhotoLightboxProps {
  photos: Photo[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function PhotoLightbox({ photos, activeIndex, onClose, onNavigate }: PhotoLightboxProps) {
  const photo = photos[activeIndex];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % photos.length);
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeIndex, photos.length, onClose, onNavigate]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white h-10 w-10 flex items-center justify-center rounded-full hover:bg-white/10 z-10"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((activeIndex - 1 + photos.length) % photos.length);
        }}
        aria-label="Previous"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white h-10 w-10 flex items-center justify-center rounded-full hover:bg-white/10 z-10"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      <div
        className="relative w-full max-w-3xl aspect-[4/5] sm:aspect-[16/10]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={photo.src} alt={photo.alt} fill sizes="90vw" className="object-contain" />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((activeIndex + 1) % photos.length);
        }}
        aria-label="Next"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white h-10 w-10 flex items-center justify-center rounded-full hover:bg-white/10 z-10"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs font-medium">
        {activeIndex + 1} / {photos.length}
      </span>
    </div>
  );
}