import ServiceImageFigure, {
  type ServiceImageAspect,
} from "@/components/service-page/ServiceImageFigure";
import { imageCardClass } from "@/components/service-page/styles";

interface ServiceImageBlockProps {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  priority?: boolean;
  aspect?: ServiceImageAspect;
}

export default function ServiceImageBlock(props: ServiceImageBlockProps) {
  return (
    <figure className={imageCardClass}>
      <ServiceImageFigure {...props} />
    </figure>
  );
}
