// src/features/services/components/ServiceCard.tsx
import Image from 'next/image';
import { CATEGORY_META, getServiceImage, type ServiceCategory } from '@/features/services/config';

interface ServiceCardProps {
  category: ServiceCategory;
  title: string;
  description: string;
  imageKey: string;
  size?: 'default' | 'compact';
}

export default function ServiceCard({
  category,
  title,
  description,
  imageKey,
  size = 'default',
}: ServiceCardProps) {
  const { icon: Icon, accent, accentSoft } = CATEGORY_META[category];
  const image = getServiceImage(imageKey);
  const imageHeight = size === 'compact' ? 'h-36' : 'h-48';

  return (
    <div className="group relative flex flex-col rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Imagen */}
      <div className={`relative w-full ${imageHeight} overflow-hidden bg-slate-100`}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${accentSoft}, white)`,
            }}
          >
            <Icon className="h-10 w-10" style={{ color: accent }} strokeWidth={1.5} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      </div>

      {/* Sello circular de categoría, montado sobre el borde imagen/texto */}
      <div
        className="absolute left-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white shadow-md"
        style={{
          top: size === 'compact' ? '7.5rem' : '9.5rem',
          backgroundColor: accent,
        }}
      >
        <Icon className="h-5 w-5 text-white" strokeWidth={2} />
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-1.5 px-6 pb-6 pt-8">
        <h3 className="font-bold text-brand-navy leading-snug">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>

      {/* Franja de color inferior: identifica la familia del servicio */}
      <div className="h-1 w-full" style={{ backgroundColor: accent }} />
    </div>
  );
}