import Link from "next/link";
import {
  bodyTextSmallClass,
  infoPanelClass,
  sectionClass,
} from "@/components/service-page/styles";

interface CityHubSectionProps {
  cityName: string;
  cityPath: string;
}

export default function CityHubSection({ cityName, cityPath }: CityHubSectionProps) {
  return (
    <section className={`${sectionClass} ${infoPanelClass}`}>
      <div className="mb-2.5 text-sm font-bold text-[#1D4ED8]">Şehir genel sayfası</div>
      <Link href={cityPath} className="text-[20px] font-bold text-[#0F2B46] no-underline">
        {cityName} güvenlik sistemleri sayfasına dön
      </Link>
      <p className={`${bodyTextSmallClass} mt-2.5`}>
        {cityName} hub sayfasında bu şehirdeki tüm hizmet kombinasyonlarına, diğer servis sayfalarına
        ve keşif odaklı bağlantılara geri dönebilirsiniz.
      </p>
    </section>
  );
}
