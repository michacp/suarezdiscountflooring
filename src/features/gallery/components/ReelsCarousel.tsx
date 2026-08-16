// src/features/gallery/components/ReelsCarousel.tsx
import Carousel from './Carousel';
import { WORK_REELS } from '@/features/gallery/data/work-mock';

const REEL_WIDTH = 220;

export default function ReelsCarousel() {
  return (
    <Carousel autoPlayMs={6000} edgeFadeClassName="from-white">
      {WORK_REELS.map((reel) => {
        const embedSrc = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
          reel.url
        )}&show_text=false&width=${REEL_WIDTH}&t=0`;

        return (
          <div
            key={reel.id}
            className="shrink-0 snap-start rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-black"
            style={{ width: REEL_WIDTH }}
          >
            <iframe
              src={embedSrc}
              width={REEL_WIDTH}
              height={Math.round(REEL_WIDTH * 1.78)}
              style={{ border: 'none', overflow: 'hidden', display: 'block' }}
              scrolling="no"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title={`Reel ${reel.id}`}
            />
          </div>
        );
      })}
    </Carousel>
  );
}