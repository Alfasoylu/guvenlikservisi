import ServiceImageBlock from "@/components/service-page/ServiceImageBlock";
import { imageGridCompactClass } from "@/components/service-page/styles";
import type { ServicePageImage } from "@/lib/service-page-factory";

interface ServiceImageGridProps {
  images: ServicePageImage[];
  priorityFirst?: boolean;
}

export default function ServiceImageGrid({
  images,
  priorityFirst = false,
}: ServiceImageGridProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className={imageGridCompactClass}>
      {images.map((image, index) => (
        <ServiceImageBlock
          key={`${image.src}-${image.alt}`}
          src={image.src}
          alt={image.alt}
          title={image.title}
          caption={image.caption}
          aspect={image.aspect}
          priority={priorityFirst && index === 0}
        />
      ))}
    </div>
  );
}
