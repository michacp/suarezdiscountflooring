// src/features/gallery/components/Carousel.tsx
'use client';

import { useRef, useState, useEffect, useCallback, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/shared/utils/cn';

interface CarouselProps {
  children: ReactNode;
  className?: string;
  autoPlayMs?: number; // ej. 4000 — omite para desactivar el auto-scroll
  edgeFadeClassName?: string; // color del fondo de la sección, ej. 'from-slate-50'
}

export default function Carousel({
  children,
  className,
  autoPlayMs,
  edgeFadeClassName = 'from-white',
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const isPaused = useRef(false);

  const updateState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);

    const children = Array.from(el.children) as HTMLElement[];
    setItemCount(children.length);
    if (children.length === 0) return;
    const itemWidth = children[0].offsetWidth + 16; // gap-4
    setActiveIndex(Math.min(Math.round(el.scrollLeft / itemWidth), children.length - 1));
  }, []);

  useEffect(() => {
    updateState();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('resize', updateState);
    return () => {
      el.removeEventListener('scroll', updateState);
      window.removeEventListener('resize', updateState);
    };
  }, [updateState]);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: trackRef.current.clientWidth * 0.8 * dir, behavior: 'smooth' });
  };

  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    const child = el?.children[i] as HTMLElement | undefined;
    if (!el || !child) return;
    el.scrollTo({ left: child.offsetLeft - 16, behavior: 'smooth' });
  };

  // Auto-scroll: avanza solo, vuelve al inicio al llegar al final, se pausa con interacción
  useEffect(() => {
    if (!autoPlayMs) return;
    const el = trackRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (isPaused.current) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      el.scrollTo(
        atEnd
          ? { left: 0, behavior: 'smooth' }
          : { left: el.scrollLeft + el.clientWidth * 0.8, behavior: 'smooth' }
      );
    }, autoPlayMs);

    return () => clearInterval(interval);
  }, [autoPlayMs]);

  return (
    <div
      className={cn('relative', className)}
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
      onTouchStart={() => (isPaused.current = true)}
      onTouchEnd={() => setTimeout(() => (isPaused.current = false), 3000)}
    >
      <div
        ref={trackRef}
        className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
      >
        {children}
      </div>

      {/* Degradados: insinúan visualmente que hay más contenido a los lados */}
      <div
        className={cn(
          'pointer-events-none absolute left-0 top-0 bottom-2 w-10 sm:w-14 bg-gradient-to-r to-transparent transition-opacity duration-300',
          edgeFadeClassName,
          canLeft ? 'opacity-100' : 'opacity-0'
        )}
      />
      <div
        className={cn(
          'pointer-events-none absolute right-0 top-0 bottom-2 w-10 sm:w-14 bg-gradient-to-l to-transparent transition-opacity duration-300',
          edgeFadeClassName,
          canRight ? 'opacity-100' : 'opacity-0'
        )}
      />

      {canLeft && (
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Previous"
          className="absolute left-2 top-[calc(50%-8px)] -translate-y-1/2 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-slate-100 text-brand-navy hover:bg-slate-50 transition-colors z-10"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}
      {canRight && (
        <button
          onClick={() => scrollBy(1)}
          aria-label="Next"
          className="absolute right-2 top-[calc(50%-8px)] -translate-y-1/2 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-slate-100 text-brand-navy hover:bg-slate-50 transition-colors z-10"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {itemCount > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {Array.from({ length: itemCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to item ${i + 1}`}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                i === activeIndex ? 'w-6 bg-brand-navy' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}