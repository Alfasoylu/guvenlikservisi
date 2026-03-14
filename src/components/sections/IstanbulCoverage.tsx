import { Container } from "@/components/ui/Container";
import { MapPin } from "lucide-react";

interface IstanbulCoverageProps {
  title?: string;
  subtitle?: string;
  bgClass?: string;
}

const avrupaYakasi = [
  "Arnavutköy",
  "Avcılar",
  "Bağcılar",
  "Bahçelievler",
  "Bakırköy",
  "Başakşehir",
  "Bayrampaşa",
  "Beşiktaş",
  "Beylikdüzü",
  "Beyoğlu",
  "Büyükçekmece",
  "Çatalca",
  "Esenler",
  "Esenyurt",
  "Eyüpsultan",
  "Fatih",
  "Gaziosmanpaşa",
  "Güngören",
  "Kağıthane",
  "Küçükçekmece",
  "Sarıyer",
  "Silivri",
  "Sultangazi",
  "Şişli",
  "Zeytinburnu",
];

const anadoluYakasi = [
  "Adalar",
  "Ataşehir",
  "Beykoz",
  "Çekmeköy",
  "Kadıköy",
  "Kartal",
  "Maltepe",
  "Pendik",
  "Sancaktepe",
  "Sultanbeyli",
  "Şile",
  "Tuzla",
  "Ümraniye",
  "Üsküdar",
];

export default function IstanbulCoverage({
  title = "İstanbul'da Hangi Bölgelerde Hizmet Veriyoruz?",
  subtitle = "Avrupa ve Anadolu yakasında tüm ilçelere aynı gün keşif ve profesyonel kurulum hizmeti sunuyoruz.",
  bgClass = "bg-white",
}: IstanbulCoverageProps) {
  return (
    <section className={`py-16 md:py-20 ${bgClass}`}>
      <Container>
        <div className="mb-10 text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            <MapPin size={14} />
            İstanbul geneli 39 ilçe
          </div>
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-text-light sm:text-base">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Avrupa Yakası */}
          <div className="rounded-2xl border border-gray-200 bg-surface p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-primary">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                A
              </span>
              Avrupa Yakası
            </h3>
            <div className="flex flex-wrap gap-2">
              {avrupaYakasi.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Anadolu Yakası */}
          <div className="rounded-2xl border border-gray-200 bg-surface p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-primary">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cta text-sm font-bold text-white">
                A
              </span>
              Anadolu Yakası
            </h3>
            <div className="flex flex-wrap gap-2">
              {anadoluYakasi.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
