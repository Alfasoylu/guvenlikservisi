import {
  chipClass,
  chipWrapClass,
  sectionClass,
  sectionTitleClass,
} from "@/components/service-page/styles";

interface ServiceDistrictsProps {
  cityName: string;
  districts: string[];
}

export default function ServiceDistricts({ cityName, districts }: ServiceDistrictsProps) {
  if (districts.length === 0) {
    return null;
  }

  return (
    <section className={sectionClass}>
      <h2 className={sectionTitleClass}>{cityName} içinde hizmet verdiğimiz ilçeler</h2>

      <div className={chipWrapClass}>
        {districts.map((district) => (
          <span key={district} className={chipClass}>
            {district}
          </span>
        ))}
      </div>
    </section>
  );
}
