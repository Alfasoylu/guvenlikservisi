import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";

interface PageProps {
  params: Promise<{ sehir: string }>;
}

const sehirData: Record<
  string,
  {
    name: string;
    districts: string;
    projectCount: string;
    description: string;
    highlight: string;
  }
> = {
  istanbul: {
    name: "İstanbul",
    districts:
      "Kadıköy, Beşiktaş, Şişli, Üsküdar, Maltepe, Pendik, Ümraniye, Bakırköy ve tüm ilçeler",
    projectCount: "250+",
    description:
      "İstanbul'un Avrupa ve Anadolu yakasında güvenlik kamera, alarm ve yangın alarm sistemi kurulumu yapıyoruz. Yoğun nüfus ve ticari yapısı nedeniyle güvenlik sistemleri İstanbul'da özellikle kritik önem taşır.",
    highlight:
      "İstanbul'da hem konut hem kurumsal projelerde kapsamlı deneyimimiz bulunmaktadır.",
  },
  bursa: {
    name: "Bursa",
    districts: "Osmangazi, Nilüfer, Yıldırım, Gemlik, Mudanya, İnegöl",
    projectCount: "80+",
    description:
      "Bursa'nın organize sanayi bölgelerinden büyük konut projelerine, tekstil fabrikalarından alışveriş merkezlerine kadar her ölçekte güvenlik sistemi kurulumu yapıyoruz.",
    highlight: "Bursa OSB'lerinde endüstriyel güvenlik deneyimimiz öne çıkmaktadır.",
  },
  kocaeli: {
    name: "Kocaeli",
    districts: "İzmit, Gebze, Darıca, Körfez, Dilovası, Gölcük",
    projectCount: "70+",
    description:
      "Kocaeli'nin yoğun sanayi altyapısına uygun güvenlik çözümleri sunuyoruz. Petrokimya, otomotiv ve lojistik tesislerinde endüstriyel güvenlik sistemleri kuruyoruz.",
    highlight: "Kocaeli'de özellikle fabrika ve depo güvenliği konusunda uzmanlaştık.",
  },
  sakarya: {
    name: "Sakarya",
    districts: "Serdivan, Adapazarı, Arifiye, Erenler, Sapanca",
    projectCount: "40+",
    description:
      "Sakarya'da konut, işyeri ve sanayi tesislerinde güvenlik sistemi kurulumu yapıyoruz. Hızlı büyüyen şehirde güvenlik ihtiyaçlarına pratik çözümler sunuyoruz.",
    highlight: "Sakarya'da anahtar teslim güvenlik sistemleri sunuyoruz.",
  },
  tekirdag: {
    name: "Tekirdağ",
    districts: "Çorlu, Çerkezköy, Süleymanpaşa, Ergene, Malkara",
    projectCount: "35+",
    description:
      "Tekirdağ'ın Çorlu ve Çerkezköy ilçelerindeki yoğun sanayi bölgelerinde fabrika ve depo güvenlik sistemleri, şehir merkezinde ise konut ve işyeri kurulumları yapıyoruz.",
    highlight: "Tekirdağ OSB'lerinde güvenlik altyapısı konusunda deneyimliyiz.",
  },
  yalova: {
    name: "Yalova",
    districts: "Merkez, Çiftlikköy, Altınova, Armutlu",
    projectCount: "25+",
    description:
      "Yalova'da konut sitelerinden sanayi tesislerine güvenlik sistemi kuruyoruz. Şehrin site ve villa yoğunluğu nedeniyle apartman ve site güvenliği alanında özellikle aktifiz.",
    highlight: "Yalova'da özellikle site ve villa güvenliği projelerinde deneyimliyiz.",
  },
};

export async function generateStaticParams() {
  return siteConfig.cities.map((city) => ({
    sehir: `${city.slug}-guvenlik-sistemi-kurulumu`,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { sehir } = await params;
  const citySlug = sehir.replace("-guvenlik-sistemi-kurulumu", "");
  const data = sehirData[citySlug];

  if (!data) return {};

  return {
    title: `${data.name} Güvenlik Sistemi Kurulumu | Kamera + Alarm Montajı`,
    description: `${data.name} ve çevresinde güvenlik kamera, alarm ve yangın alarm sistemi kurulumu. Ücretsiz keşif, anahtar teslim montaj.`,
    alternates: {
      canonical: `https://guvenlikservisi.com/${sehir}`,
    },
  };
}

export default async function SehirSayfasi({ params }: PageProps) {
  const { sehir } = await params;
  const citySlug = sehir.replace("-guvenlik-sistemi-kurulumu", "");
  const data = sehirData[citySlug];

  if (!data) notFound();

  const faqItems = [
    {
      question: `${data.name}'de kamera montajı ne kadar sürer?`,
      answer: `${data.name}'de konut projeleri için 1 gün, işyerleri için 1-3 gün. Keşifte net süre bildirilir.`,
    },
    {
      question: `${data.name}'de hangi ilçelere hizmet veriyorsunuz?`,
      answer: `${data.districts} bölgelerinde aktif olarak hizmet veriyoruz.`,
    },
    {
      question: `${data.name}'de kurulum fiyatları ne kadar?`,
      answer: `Konut kamera sistemi 12.000 TL'den, işyeri sistemleri 15.000 TL'den başlar. Keşif sonrası net fiyat oluşur.`,
    },
    {
      question: `${data.name}'de acil servis desteği var mı?`,
      answer:
        "Evet, bakım sözleşmesi müşterilerimize 7/24 teknik destek ve öncelikli yerinde müdahale sağlıyoruz.",
    },
  ];

  const lbSchema = generateLocalBusinessSchema();
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: `${data.name} Güvenlik Sistemi`, url: `/${sehir}` },
  ]);
  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-surface border-b border-gray-100 py-3">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">{data.name} Güvenlik Sistemi</span>
          </nav>
        </Container>
      </div>

      <section className="bg-gradient-to-br from-primary to-[#1A3A5C] text-white py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <MapPin size={14} />
              <span>{data.name}, Türkiye</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              {data.name} Güvenlik Sistemi Kurulumu — Kamera, Alarm, Yangın
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {data.name} ve çevresinde profesyonel güvenlik sistemi kurulumu. Ücretsiz keşif +
              anahtar teslim montaj.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white font-bold px-8 py-4 rounded-xl transition-colors"
              >
                Ücretsiz Teklif Al
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-xl transition-colors"
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                {data.name}&apos;de Güvenlik Sistemi Hizmetlerimiz
              </h2>
              <p className="text-text-light leading-relaxed mb-4">{data.description}</p>
              <p className="text-text-light leading-relaxed mb-6">{data.highlight}</p>
              <div className="bg-surface rounded-xl p-5">
                <p className="font-semibold text-primary mb-2">Hizmet Verilen Bölgeler:</p>
                <p className="text-text-light text-sm">{data.districts}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { label: `${data.name}'de Tamamlanan Proje`, value: data.projectCount },
                { label: "Ortalama Kurulum Süresi", value: "1-3 Gün" },
                { label: "Garanti Süresi", value: "1-3 Yıl" },
                { label: "Teknik Destek", value: "7/24" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-surface rounded-lg px-5 py-4"
                >
                  <span className="text-text-light text-sm">{item.label}</span>
                  <span className="font-bold text-primary">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-surface">
        <Container>
          <h2 className="text-2xl font-bold text-primary text-center mb-10">
            {data.name}&apos;de Sunduğumuz Hizmetler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "📷",
                title: "Kamera Sistemi",
                desc: "2K/4K IP kameralar, gece görüşü, mobil izleme.",
                href: "/kamera-sistemi-kurulumu",
              },
              {
                icon: "🔔",
                title: "Alarm Sistemi",
                desc: "Kablosuz/kablolu alarm, GSM bildirim, izleme merkezi.",
                href: "/alarm-sistemi-kurulumu",
              },
              {
                icon: "🔥",
                title: "Yangın Alarmı",
                desc: "Yasal uyumlu yangın algılama, proje ve belgeler dahil.",
                href: "/yangin-alarm-sistemi-kurulumu",
              },
            ].map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-text-light text-sm">{s.desc}</p>
                <p className="text-accent text-sm font-semibold mt-3">Detaylı bilgi →</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FAQSection items={faqItems} title={`${data.name} Hakkında Sık Sorulan Sorular`} />

      <CTASection
        title={`${data.name}'de Ücretsiz Keşif Alın`}
        subtitle={`${data.name} ve çevresinde aynı gün keşif ayarlayabiliriz.`}
      />
    </>
  );
}
 
