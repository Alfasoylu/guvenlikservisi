import ServiceImageGrid from "@/components/service-page/ServiceImageGrid";
import {
  gridClass,
  sectionClass,
  sectionIntroClass,
  sectionTitleClass,
  softCardClass,
  useCaseTextClass,
} from "@/components/service-page/styles";
import type { ServicePageImage } from "@/lib/service-page-factory";

interface ServiceUseCasesProps {
  title: string;
  description: string;
  localContext?: string;
  items: string[];
  images?: ServicePageImage[];
}

export default function ServiceUseCases({
  title,
  description,
  localContext,
  items,
  images = [],
}: ServiceUseCasesProps) {
  return (
    <section className={sectionClass}>
      <h2 className={sectionTitleClass}>{title}</h2>
      <p className={sectionIntroClass}>{description}</p>
      {localContext ? <p className={sectionIntroClass}>{localContext}</p> : null}

      <div className={gridClass}>
        {items.map((item) => (
          <div key={item} className={softCardClass}>
            <div className={useCaseTextClass}>{item}</div>
          </div>
        ))}
      </div>

      {images.length > 0 ? (
        <div className="mt-6">
          <ServiceImageGrid images={images.slice(0, 2)} />
        </div>
      ) : null}
    </section>
  );
}
