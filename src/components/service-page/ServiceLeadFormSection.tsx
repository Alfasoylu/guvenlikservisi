import QuoteForm from "@/components/forms/QuoteForm";
import type { ServiceBusinessIntent } from "@/data/seo/services";
import { siteConfig } from "@/data/site-config";

interface ServiceLeadFormSectionProps {
  cityName: string;
  citySlug: string;
  serviceName: string;
  serviceSlug: string;
  intentType: ServiceBusinessIntent;
  defaultServiceType: string;
}

interface LeadFormCopy {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  whatsappText: string;
}

const copyByIntent: Record<ServiceBusinessIntent, LeadFormCopy> = {
  installation: {
    eyebrow: "Kurulum Talebi",
    title: "Keşif isteyin, doğru kurulumu birlikte planlayalım",
    description:
      "Kurulum kararını hızlandırmak için alan tipi, cihaz sayısı ve kapsama ihtiyacını tek formda netleştiriyoruz.",
    bullets: [
      "Şehir içi keşif ve uygun ürün planlaması",
      "Kablolama, kayıt ve mobil izleme ihtiyaçlarının netleşmesi",
      "Aynı gün geri dönüşe uygun teklif akışı",
    ],
    whatsappText: "Kurulum için keşif ve hızlı teklif istiyorum.",
  },
  "fault-repair": {
    eyebrow: "Arıza Talebi",
    title: "Arıza belirtilerini paylaşın, hızlı geri dönüş sağlayalım",
    description:
      "Görüntü yok, kayıt alınmıyor veya kamera offline ise belirtileri kısa notla iletin; uygun müdahale yolunu hızla netleştirelim.",
    bullets: [
      "Kayıt kesintisi ve offline kamera sorunlarına hızlı ön değerlendirme",
      "NVR, HDD, PoE ve bağlantı problemlerine göre yönlendirme",
      "Telefon ve WhatsApp ile acil iletişim seçeneği",
    ],
    whatsappText: "Kamera arızası için hızlı geri dönüş istiyorum.",
  },
  maintenance: {
    eyebrow: "Bakım ve Süreklilik",
    title: "Bakım kapsamını netleştirin, sistem sürekliliğini koruyalım",
    description:
      "Bakım, servis ve uzaktan izleme ihtiyaçlarını tek planda toplayarak sözleşme kapsamı ve servis önceliğini belirliyoruz.",
    bullets: [
      "Periyodik kontrol ve kayıt sağlığı takibi",
      "Arıza riskini azaltan bakım planı",
      "Uzaktan izleme ve servis önceliği için hızlı görüşme",
    ],
    whatsappText: "Bakım ve servis planı için teklif istiyorum.",
  },
  "technical-service": {
    eyebrow: "Teknik Servis",
    title: "Teknik servis ihtiyacınızı paylaşın, doğru müdahaleyi planlayalım",
    description:
      "Cihaz, bağlantı veya sistem davranışıyla ilgili teknik sorunu iletin; saha müdahalesi gerekip gerekmediğini hızlıca değerlendirelim.",
    bullets: [
      "Cihaz bazlı teşhis ve servis planlaması",
      "Yanlış parça değişimi yerine doğru arıza ayrıştırması",
      "Sorunun kaynağına göre öncelikli geri dönüş",
    ],
    whatsappText: "Teknik servis için hızlı değerlendirme istiyorum.",
  },
  monitoring: {
    eyebrow: "Uzaktan İzleme",
    title: "Merkezi izleme ihtiyacınızı paylaşın, uygun yapıyı kuralım",
    description:
      "Tek lokasyon veya çoklu saha fark etmeksizin izleme, kayıt akışı ve kullanıcı erişimini ihtiyaca göre planlıyoruz.",
    bullets: [
      "Merkezi görünürlük ve kullanıcı erişimi planlaması",
      "Kayıt akışı ve mobil izleme ihtiyaçlarının netleşmesi",
      "Süreklilik odaklı destek modeli",
    ],
    whatsappText: "Uzaktan izleme hizmeti için görüşmek istiyorum.",
  },
  solution: {
    eyebrow: "Kurumsal Çözüm",
    title: "Kurumsal keşif talebi bırakın, kapsamı birlikte netleştirelim",
    description:
      "Site, fabrika, depo ve benzeri çok alanlı yapılarda kapsam, risk noktaları ve bakım ihtiyacını tek form üzerinden topluyoruz.",
    bullets: [
      "Site, fabrika ve depo projeleri için kapsam netleştirme",
      "Bakım ve uzaktan izleme ihtimali olan kurumsal akış",
      "Karar vericiye uygun keşif ve teklif planı",
    ],
    whatsappText: "Kurumsal proje için keşif ve teklif istiyorum.",
  },
};

function getTrackingProps(
  pagePath: string,
  citySlug: string,
  serviceSlug: string,
  intentType: ServiceBusinessIntent,
  ctaSlot: string,
  leadChannel: "phone" | "whatsapp"
) {
  return {
    "data-page-path": pagePath,
    "data-city": citySlug,
    "data-service": serviceSlug,
    "data-cta-slot": ctaSlot,
    "data-lead-channel": leadChannel,
    "data-intent-type": intentType,
    "data-page-template": "city_service",
  } as const;
}

export default function ServiceLeadFormSection({
  cityName,
  citySlug,
  serviceName,
  serviceSlug,
  intentType,
  defaultServiceType,
}: ServiceLeadFormSectionProps) {
  const pagePath = `/${citySlug}/${serviceSlug}`;
  const copy = copyByIntent[intentType] ?? copyByIntent.installation;

  return (
    <section id="teklif-formu" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
              {copy.eyebrow}
            </div>
            <h2 className="mt-4 text-2xl font-black text-slate-950 md:text-3xl">
              {cityName} {serviceName} için hızlı talep bırakın
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              {copy.title} {copy.description}
            </p>
            <ul className="mt-5 space-y-3">
              {copy.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                {...getTrackingProps(
                  pagePath,
                  citySlug,
                  serviceSlug,
                  intentType,
                  "embedded-form-phone",
                  "phone"
                )}
              >
                {siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  `${cityName} ${serviceName} için ${copy.whatsappText}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-emerald-300 bg-white px-5 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50"
                {...getTrackingProps(
                  pagePath,
                  citySlug,
                  serviceSlug,
                  intentType,
                  "embedded-form-whatsapp",
                  "whatsapp"
                )}
              >
                WhatsApp ile yazın
              </a>
            </div>
          </div>

          <QuoteForm
            compact
            defaultCity={cityName}
            defaultService={defaultServiceType}
            lockCity
            lockService
            formSource="city_service_quote_form"
            pageTemplate="city_service"
            intentType={intentType}
            trackingContext={{
              page_path: pagePath,
              city: citySlug,
              service: serviceSlug,
              page_template: "city_service",
            }}
            extraNotes={[`city_name:${cityName}`, `service_name:${serviceName}`]}
          />
        </div>
      </div>
    </section>
  );
}
