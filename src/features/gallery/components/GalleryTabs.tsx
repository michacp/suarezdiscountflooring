// src/features/gallery/components/GalleryTabs.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Image as ImageIcon, Video } from 'lucide-react';
import { cn } from '@/shared/utils/cn';
import PhotoGrid from './PhotoGrid';
import ReelsGrid from './ReelsGrid';

type Tab = 'photos' | 'reels';

export default function GalleryTabs() {
  const t = useTranslations('gallery');
  const [tab, setTab] = useState<Tab>('photos');

  return (
    <div>
      <div className="flex items-center justify-center gap-2 mb-10">
        <button
          onClick={() => setTab('photos')}
          className={cn(
            'flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all',
            tab === 'photos'
              ? 'bg-brand-navy text-white shadow-md'
              : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
          )}
        >
          <ImageIcon className="h-4 w-4" />
          {t('photosTab')}
        </button>
        <button
          onClick={() => setTab('reels')}
          className={cn(
            'flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all',
            tab === 'reels'
              ? 'bg-brand-navy text-white shadow-md'
              : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
          )}
        >
          <Video className="h-4 w-4" />
          {t('reelsTab')}
        </button>
      </div>

      {tab === 'photos' ? <PhotoGrid /> : <ReelsGrid />}
    </div>
  );
}