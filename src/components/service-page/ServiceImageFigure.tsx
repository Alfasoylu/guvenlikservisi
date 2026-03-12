import Image from "next/image";
import {
  imageContentClass,
  imageFrameClass,
  imageTitleClass,
  imageCaptionClass,
} from "@/components/service-page/styles";

export type ServiceImageAspect = "hero" | "landscape" | "square";

interface ServiceImageFigureProps {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  priority?: boolean;
  aspect?: ServiceImageAspect;
}

const aspectClassMap: Record<ServiceImageAspect, string> = {
  hero: "aspect-[16/11]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
};

export default function ServiceImageFigure({
  src,
  alt,
  title,
  caption,
  priority = false,
  aspect = "landscape",
}: ServiceImageFigureProps) {
  return (
    <>
      <div className={`${imageFrameClass} ${aspectClassMap[aspect]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {title || caption ? (
        <div className={imageContentClass}>
          {title ? <h3 className={imageTitleClass}>{title}</h3> : null}
          {caption ? <p className={imageCaptionClass}>{caption}</p> : null}
        </div>
      ) : null}
    </>
  );
}
