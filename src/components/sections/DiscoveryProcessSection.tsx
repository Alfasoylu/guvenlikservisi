import { Container } from "@/components/ui/Container";
import { ClipboardList } from "lucide-react";

export interface DiscoveryStep {
  step: number;
  title: string;
  description: string;
}

interface DiscoveryProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps: DiscoveryStep[];
}

const defaultSteps: DiscoveryStep[] = [
  {
    step: 1,
    title: "Kısa Bilgi Alıyoruz",
    description:
      "Mekan tipi, tahmini alan ve öncelikli ihtiyacınızı form veya telefonda öğreniyoruz.",
  },
  {
    step: 2,
    title: "Telefonla İhtiyaç Analizi",
    description:
      "Teknik ekibimiz sizi arayarak bileşen kapsamını ve bütçe aralığını netleştiriyor.",
  },
  {
    step: 3,
    title: "Ücretsiz Keşif Planlıyoruz",
    description:
      "Alan ölçümleri, kör nokta tespiti ve altyapı durumu için yerinde keşif yapıyoruz.",
  },
  {
    step: 4,
    title: "Proje ve Teklif Hazırlıyoruz",
    description:
      "Keşif sonrası detaylı proje çıkarıyor, bileşen listesi ve fiyat teklifini gönderiyoruz.",
  },
  {
    step: 5,
    title: "Kurulum ve Teslim",
    description:
      "Profesyonel montaj, devreye alma, mobil erişim kurulumu ve kullanıcı eğitimi ile teslim.",
  },
  {
    step: 6,
    title: "Bakım Desteği",
    description:
      "Yıllık bakım sözleşmesi ile sistem performansını garanti altına alıyoruz.",
  },
];

export default function DiscoveryProcessSection({
  title = "Keşif ve Teklif Süreci",
  subtitle = "Altı adımda ihtiyaç analizinden çalışan sisteme",
  steps = defaultSteps,
}: DiscoveryProcessSectionProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            <ClipboardList size={14} />
            Net süreç
          </div>
          <h2 className="mb-4 text-2xl font-bold text-primary sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm leading-7 text-text-light">{subtitle}</p>
          )}
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-accent/15 md:block" />

          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex items-start gap-5">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg">
                  {s.step}
                </div>
                <div className="pb-2">
                  <h3 className="mb-1 text-base font-bold text-primary">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-6 text-text-light">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
