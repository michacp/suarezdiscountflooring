// src/features/gallery/components/LatestPostsCarousel.tsx
import Carousel from './Carousel';
import { LATEST_POSTS } from '@/features/gallery/data/latest-posts-mock';

const POST_WIDTH = 340;

export default function LatestPostsCarousel() {
  return (
    <Carousel autoPlayMs={5000} edgeFadeClassName="from-slate-50">
      {LATEST_POSTS.map((post) => {
        const embedSrc = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
          post.url
        )}&show_text=true&width=${POST_WIDTH}`;

        return (
          <div
            key={post.id}
            className="shrink-0 snap-start rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white"
            style={{ width: POST_WIDTH }}
          >
            <iframe
              src={embedSrc}
              width={POST_WIDTH}
              height={500}
              style={{ border: 'none', overflow: 'hidden', display: 'block' }}
              scrolling="no"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title={`Post ${post.id}`}
            />
          </div>
        );
      })}
    </Carousel>
  );
}