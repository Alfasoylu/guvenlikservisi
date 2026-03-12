import type { ServiceSEOContentBlock } from "@/lib/service-page-factory";
import {
  bodyTextClass,
  sectionClass,
  sectionIntroClass,
  sectionTitleClass,
  softCardClass,
  wideGridClass,
} from "@/components/service-page/styles";

interface ServiceSEOContentProps {
  blocks: ServiceSEOContentBlock[];
}

export default function ServiceSEOContent({ blocks }: ServiceSEOContentProps) {
  return (
    <section className={sectionClass}>
      <div className="space-y-8">
        {blocks.map((block) => (
          <div key={block.title}>
            <h2 className={sectionTitleClass}>{block.title}</h2>

            <div className="space-y-4">
              {block.paragraphs.map((paragraph) => {
                const isLead = paragraph.endsWith(":");

                return (
                  <p
                    key={`${block.title}-${paragraph}`}
                    className={isLead ? sectionIntroClass : bodyTextClass}
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {block.items?.length ? (
              <div className={`${wideGridClass} mt-5`}>
                {block.items.map((item) => (
                  <div key={`${block.title}-${item}`} className={softCardClass}>
                    <p className={bodyTextClass}>{item}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
