import {
  bodyTextClass,
  chipClass,
  chipWrapClass,
  compactCardClass,
  sectionClass,
  sectionIntroClass,
  sectionTitleClass,
} from "@/components/service-page/styles";

interface ServiceDistrictsProps {
  cityName: string;
  serviceName?: string;
  title?: string;
  description?: string;
  note?: string;
  primaryDistricts: string[];
  otherDistricts?: string[];
}

export default function ServiceDistricts({
  cityName,
  serviceName,
  title,
  description,
  note,
  primaryDistricts,
  otherDistricts = [],
}: ServiceDistrictsProps) {
  if (primaryDistricts.length === 0 && otherDistricts.length === 0) {
    return null;
  }

  return (
    <section className={sectionClass}>
      <h2 className={sectionTitleClass}>
        {title ?? `${cityName} içinde ${serviceName ?? "hizmet"} verdiğimiz ilçeler`}
      </h2>

      {description ? <p className={sectionIntroClass}>{description}</p> : null}

      {primaryDistricts.length > 0 ? (
        <div className={compactCardClass}>
          <h3 className="mb-3 text-[20px] text-[#0F2B46]">Öncelikli ilçe kapsaması</h3>
          <div className={chipWrapClass}>
            {primaryDistricts.map((district) => (
              <span key={district} className={chipClass}>
                {district}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {otherDistricts.length > 0 ? (
        <div className="mt-5">
          <h3 className="mb-3 text-[20px] text-[#0F2B46]">Diğer hizmet bölgeleri</h3>
          <div className={chipWrapClass}>
            {otherDistricts.map((district) => (
              <span key={district} className={chipClass}>
                {district}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {note ? <p className={`${bodyTextClass} mt-5`}>{note}</p> : null}
    </section>
  );
}
