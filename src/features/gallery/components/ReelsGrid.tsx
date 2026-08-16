// src/features/gallery/components/ReelsGrid.tsx
import { GALLERY_REELS } from '@/features/gallery/data/gallery-mock'

const REEL_WIDTH = 260;

export default function ReelsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
      {GALLERY_REELS.map((reel) => {
        const embedSrc = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
          reel.url
        )}&show_text=false&width=${REEL_WIDTH}&t=0`;

        return (
          <div
            key={reel.id}
            className="w-full max-w-[260px] rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-black"
          >
            <iframe
              src={embedSrc}
              width={REEL_WIDTH}
              height={Math.round(REEL_WIDTH * 1.78)}
              style={{ border: 'none', overflow: 'hidden', display: 'block', width: '100%' }}
              scrolling="no"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title={`Reel ${reel.id}`}
            />
          </div>
        );
      })}
    </div>
  );
}