// src/features/gallery/components/PhotoCarousel.tsx
import Image from 'next/image';
import Carousel from './Carousel';
import { WORK_PHOTOS } from '@/features/gallery/data/work-mock';

export default function PhotoCarousel() {
  return (
    <Carousel autoPlayMs={4000} edgeFadeClassName="from-white">
      {WORK_PHOTOS.map((photo) => (
        <div
          key={photo.id}
          className="group relative shrink-0 snap-start w-[240px] sm:w-[280px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-slate-100"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="280px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </Carousel>
  );
}