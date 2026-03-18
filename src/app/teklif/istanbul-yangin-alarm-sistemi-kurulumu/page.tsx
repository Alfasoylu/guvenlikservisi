import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import Image from "next/image";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Flame,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import YanginAlarmQuoteForm from "@/components/YanginAlarmQuoteForm";
import TrustSignals, {
  type TrustItem,
} from "@/components/sections/TrustSignals";
import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import IstanbulCoverage from "@/components/sections/IstanbulCoverage";

const canonicalUrl = getCanonicalUrlForKnownPath(
  "/teklif/istanbul-yangin-alarm-sistemi-kurulumu",
);

export const metadata: Metadata = {
  title:
    "İstanbul Yangın Alarm Sistemi Kurulumu ve Periyodik Bakım | Ücretsiz Keşif",
  description:
    "İstanbul'da yönetmeliğe uygun yangın alarm sistemi kurulumu ve aylık bakım hizmeti. Ücretsiz keşif ve hızlı teklif için hemen iletişime geçin.",
  keywords: [
    "istanbul yangın alarm sistemi kurulumu",
    "yangın alarm sistemi bakım",
    "yangın alarm periyodik kontrol",
    "yangın algılama sistemi istanbul",
    "yangın alarm zorunlu mu",
    "işyeri yangın alarm sistemi",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title:
      "İstanbul Yangın Alarm Sistemi Kurulumu ve Periyodik Bakım | Ücretsiz Keşif",
    description:
      "İstanbul'da yönetmeliğe uygun yangın alarm sistemi kurulumu ve periyodik bakım. Ücretsiz keşif ve hızlı teklif.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/landing/yangin-alarm-sistemi-kurulumu-istanbul-hero.webp`,
        width: 1200,
        height: 630,
        alt: "İstanbul Yangın Alarm Sistemi Kurulumu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "İstanbul Yangın Alarm Sistemi Kurulumu ve Periyodik Bakım | Ücretsiz Keşif",
    description:
      "İstanbul'da yönetmeliğe uygun yangın alarm sistemi kurulumu ve periyodik bakım. Ücretsiz keşif ve hızlı teklif.",
    images: [
      `${siteConfig.url}/images/landing/yangin-alarm-sistemi-kurulumu-istanbul-hero.webp`,
    ],
  },
};

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Denetimde eksiklik → faaliyet durdurma ve mühürleme",
    text: "İtfaiye denetimleri önceden haber vermez. Ekip kapınıza geldiğinde yangın alarm sisteminiz yoksa veya bakımsızsa sizi yerinde mühürleyebilir. Mühür bozulmadan işletmenizi açamazsınız — iş durur, müşteriler gider, itibar gider.",
  },
  {
    icon: ShieldCheck,
    title: "Sigorta, hasarı ödemeyi reddeder",
    text: "Yangın sonrası sigorta eksperiniz ilk önce yönetmeliğe uygun alarm sisteminiz olup olmadığını sorar. Yoksa veya bakımsızsa 'öngörülebilir ihmal' gerekçesiyle tazminat talebiniz reddedilebilir. Hasar ne kadar büyük olursa riski de o kadar büyüktür.",
  },
  {
    icon: Flame,
    title: "Hukuki ve cezai sorumluluk size kalır",
    text: "Yangında can veya mal kaybı yaşandığında savcılık soruşturması başlar. 'Gerekli önlemleri almadınız' tespiti; işletme sahibi sıfatıyla size tazminat davası, idari para cezası, hatta hapis cezası riski doğurabilir.",
  },
];

const targetSegments = [
  { title: "Fabrikalar ve Atölyeler", description: "Üretim alanı, hammadde deposu, makine parkı ve personel bölgeleri" },
  { title: "Lojistik Depolar", description: "Raf koridorları, soğuk hücre çıkışları, yükleme alanları" },
  { title: "Oteller ve Pansiyonlar", description: "Kat koridorları, mutfak, çamaşırhane ve teknik katlar" },
  { title: "Restoranlar ve Kafeler", description: "Mutfak davlumbaz hattı, salon, depo ve gaz hattı bölgeleri" },
  { title: "AVM ve İş Merkezleri", description: "Ortak alanlar, mağaza bölümleri ve otopark katları" },
  { title: "Apartman ve Siteler", description: "Bina girişleri, bodrum kat, otopark ve teknik sığınaklar" },
];

const installationSteps = [
  {
    title: "Ücretsiz Keşif ve Risk Analizi",
    text: "Bina yapısı, kat planı, risk noktaları ve yönetmelik gereksinimleri yerinde analiz edilir. Dedektör tipi, konum ve kablo güzergahı belirlenir.",
  },
  {
    title: "Kablo Altyapı Döşenmesi",
    text: "Yangın alarm paneli ile dedektörler arasındaki kablo hatları binanın yapısına uygun şekilde çekilir. Estetik ve güvenlik birlikte gözetilir.",
  },
  {
    title: "Panel ve Dedektör Kurulumu",
    text: "Merkezi yangın alarm paneli, duman dedektörleri, ısı dedektörleri, butonlar ve sirenler belirlenen noktalara monte edilir.",
  },
  {
    title: "Test, Devreye Alma ve Eğitim",
    text: "Tüm dedektörler tek tek test edilir. Panel bağlantıları, siren çalışması ve alarm senaryoları doğrulanarak sistem devreye alınır; kullanım eğitimi verilir.",
  },
];

const packages = [
  {
    name: "Basic",
    subtitle: "Kurulum",
    featured: false,
    items: [
      "Keşif ve projelendirme",
      "Yangın alarm paneli kurulumu",
      "Duman ve ısı dedektörleri",
      "Manuel ihbar butonları",
      "Siren ve flaşör montajı",
      "Test ve devreye alma",
    ],
  },
  {
    name: "Pro",
    subtitle: "Kurulum + Test",
    featured: true,
    badge: "En Çok Tercih Edilen",
    items: [
      "Basic paketteki her şey",
      "Genişletilmiş dedektör planı",
      "Adresli sistem seçeneği",
      "Detaylı test raporu",
      "Kullanım ve acil durum eğitimi",
      "1 yıl garanti",
    ],
  },
  {
    name: "Premium",
    subtitle: "Kurulum + Bakım + Periyodik Kontrol",
    featured: false,
    items: [
      "Pro paketteki her şey",
      "Yıllık periyodik bakım sözleşmesi",
      "3 ayda bir kontrol ve test",
      "Denetim öncesi hazırlık desteği",
      "Arıza durumunda öncelikli müdahale",
      "Bakım ve test raporlaması",
    ],
  },
];

const faqs = [
  {
    q: "Hangi binalar yangın alarm sistemi kurmak zorunda?",
    a: "Binaların Yangından Korunması Hakkında Yönetmelik kapsamında oteller, yatakhaneler, hastane ve sağlık tesisleri, fabrikalar, depolar, AVM'ler, 4 kattan yüksek ofis ve konut binaları, eğitim kurumları, restoranlar ve toplu yaşam alanları için yangın alarm sistemi zorunludur. Yüzölçümü veya kat sayısı yönetmelik eşiğini aşıyorsa işletmeniz kapsama giriyor olabilir. Kesin bilgi için ücretsiz keşif talep edin.",
  },
  {
    q: "İtfaiye denetiminde eksiklik çıkarsa ne olur?",
    a: "Denetimde yangın alarm sistemi eksik veya yetersiz bulunan işletmelere idari para cezası uygulanır, eksiklik giderilinceye kadar faaliyetleri durdurulabilir ve bina mühürlenebilir. Mühürlü işletme, karar kaldırılmadan açılamaz. Süreç birkaç günden birkaç haftaya uzayabilir.",
  },
  {
    q: "Yangın alarm sistemi zorunlu mu?",
    a: "Evet. Binaların Yangından Korunması Hakkında Yönetmelik kapsamında pek çok işletme, otel, fabrika, depo ve toplu yaşam alanında yangın algılama ve uyarı sistemi bulunması zorunludur. Denetimde eksiklik tespit edilmesi faaliyetin durdurulmasına kadar varabilir.",
  },
  {
    q: "Kurulum ne kadar sürer?",
    a: "Bina büyüklüğü, kat sayısı ve dedektör adedine bağlı olarak küçük ve orta ölçekli işletmelerde kurulum genellikle 1-3 gün içinde tamamlanır. Büyük projelerde süre keşif sonrası netleştirilir.",
  },
  {
    q: "Fiyat neye göre değişir?",
    a: "Bina metrekaresi, kat adedi, dedektör sayısı, panel tipi (konvansiyonel veya adresli), kablo mesafesi ve ek bileşen ihtiyacı fiyatı doğrudan etkiler. En doğru teklif keşif sonrası hazırlanır.",
  },
  {
    q: "Periyodik bakım zorunlu mu?",
    a: "Evet. Yönetmelik gereği yangın alarm sistemlerinin düzenli aralıklarla test edilmesi ve bakımının yapılması gerekir. Bakımsız sistem denetimde sorun çıkarır ve acil durumda çalışmama riski taşır.",
  },
  {
    q: "Mevcut sistemimizi kontrol edebilir misiniz?",
    a: "Evet. Mevcut yangın alarm sisteminizin denetim standartlarına uygun olup olmadığını yerinde inceleyerek rapor hazırlıyoruz. Eksiklik veya arıza varsa bakım veya yenileme önerisi sunuyoruz.",
  },
];

const testimonials = [
  {
    text: "Fabrikamız için İstanbul itfaiyesinin denetiminden önce yangın alarm sistemimizi yenilettik. Ekip çok hızlı geldi, keşiften devreye almaya 3 günde tamamladılar. Denetimden herhangi bir sorun çıkmadan geçtik.",
    name: "Mehmet K.",
    role: "Üretim Fabrikası Yöneticisi — Esenyurt",
    rating: 5,
  },
  {
    text: "Sitemizde sistemin bakımı uzun süre yapılmamıştı, denetimde ceza kesildi. Güvenlik Servisi'ni aradık, aynı hafta keşif yaptılar ve 10 günde tüm sistemi yenilediler. Periyodik bakım sözleşmesi de imzaladık, artık içim rahat.",
    name: "Ayşe T.",
    role: "Site Yöneticisi — Ataşehir",
    rating: 5,
  },
  {
    text: "Otelimiz için hem kurulum hem 3 aylık periyodik bakım sözleşmesi yaptık. Her gelişlerinde test edip raporluyorlar. Sigorta şirketimiz de memnun kaldı, denetim sertifikamız güncel tutuluyor.",
    name: "Hüseyin A.",
    role: "Otel İşletmecisi — Beyoğlu",
    rating: 5,
  },
];

const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Merhaba, İstanbul yangın alarm sistemi kurulumu için bilgi ve fiyat almak istiyorum.",
)}`;

export default function IstanbulYanginAlarmKurulumuPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "İstanbul Yangın Alarm Sistemi Kurulumu",
    serviceType: "Yangın alarm sistemi kurulumu ve periyodik bakım",
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: canonicalUrl,
      areaServed: "İstanbul",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: canonicalUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressCountry: "TR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="bg-white text-slate-950">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ───────── ACİL UYARI ŞERİDİ ───────── */}
      <div className="bg-red-600 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-center text-sm font-semibold md:px-6">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          <span>
            İtfaiye denetimleri önceden haber vermez — Hazır değilseniz mühürleme riskiyle karşılaşabilirsiniz
          </span>
        </div>
      </div>

      {/* ───────── HERO SECTION ───────── */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/landing/yangin-alarm-sistemi-kurulumu-istanbul-hero.webp"
            alt="İstanbul yangın alarm sistemi kurulumu"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.15),_transparent_32%),linear-gradient(120deg,rgba(2,6,23,0.98),rgba(15,23,42,0.9),rgba(3,7,18,0.95))]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/15 px-4 py-1.5 text-sm font-bold text-red-300">
              <Flame className="h-4 w-4" />
              Yangın yönetmeliği zorunlu kılıyor
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl xl:text-[54px] xl:leading-[1.08]">
              İstanbul Yangın Alarm Sistemi Kurulumu ve Periyodik Bakım
            </h1>

            <p className="mt-4 max-w-xl text-xl font-semibold text-red-400 md:text-2xl">
              Denetimden önce değil, denetim gelmeden hazır olun. Aynı gün keşif ve teklif.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-black">100+</div>
                <div className="mt-1 text-xs text-slate-300">Tamamlanan yangın alarm projesi</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-black">12+ Yıl</div>
                <div className="mt-1 text-xs text-slate-300">İstanbul saha tecrübesi</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-black">7/24</div>
                <div className="mt-1 text-xs text-slate-300">Teknik destek hattı</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-bold text-emerald-700 transition hover:bg-emerald-50"
              >
                WhatsApp&apos;tan Yaz
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base font-bold text-white transition hover:bg-white/15"
              >
                <Phone className="h-5 w-5" />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div className="relative">
            <YanginAlarmQuoteForm />
          </div>
        </div>
      </section>

      {/* ───────── TRUST BAR ───────── */}
      <TrustSignals
        items={
          [
            { icon: Clock3, label: "Aynı Gün Teklif" },
            { icon: MapPin, label: "İstanbul Geneli Hizmet" },
            { icon: ShieldCheck, label: "Yönetmelik Uyumlu" },
            { icon: BadgeCheck, label: "CE Sertifikalı Ürünler" },
            { icon: Wrench, label: "Ücretsiz Keşif" },
          ] as TrustItem[]
        }
        bgClass="border-b border-slate-200 bg-white"
      />

      {/* ───────── PROBLEM / PAIN SECTION ───────── */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Sisteminiz Yoksa veya Bakımsızsa Ne Olur?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Yangın alarm sistemi yalnızca bir ekipman değil, yasal bir
              gerekliliktir. Eksikliği hem maddi hem hukuki hem de operasyonel
              sonuçlar doğurur.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="grid gap-6">
              {painPoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-red-100 bg-red-50 p-6"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-red-100 p-3 text-red-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-200">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/landing/yangin-riski-alarm-sistemi-olmayan-isletme.webp"
                  alt="Yangın alarm sistemi olmayan işletmenin riskleri"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Mid-section CTA */}
          <div className="mt-10 rounded-[2rem] border border-red-200 bg-red-50 p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-black text-slate-950">
                  Denetim gelmeden önce işletmenizi hazır hale getirelim
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-700">
                  Mevcut sisteminizi kontrol edelim veya sıfırdan projelendirme
                  yapalım. Ücretsiz keşif, aynı gün teklif.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#teklif-formu"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800"
                >
                  Ücretsiz Keşif Al
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 font-bold text-emerald-700 transition hover:bg-emerald-100"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── TARGET SEGMENTS ───────── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
                B2B odaklı hizmet
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                Hangi İşletmelere Hizmet Veriyoruz?
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Her işletmenin yangın riski farklıdır. Bina yapısı, kullanım
                amacı ve yönetmelik sınıfına göre doğru dedektör tipi ve
                yerleşim planı belirlenir.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {targetSegments.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                      <div>
                        <span className="text-sm font-bold text-slate-900">
                          {item.title}
                        </span>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-200">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/landing/fabrika-depo-yangin-alarm-sistemi-kullanim.webp"
                  alt="Fabrika ve depo yangın alarm sistemi kullanım alanları"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── HİZMET DETAYI ───────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
              Anahtar teslim çözüm
            </span>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Keşiften Devreye Almaya Tek Elden Kurulum
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Yönetmeliğe uygun projelendirme, kurulum ve test sürecini birlikte
              planlıyoruz. Her adım bina yapısına ve itfaiye gereksinimlerine göre yürütülür.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {installationSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-base font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── PAKETLER ───────── */}
      <section id="paketler" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Yangın Alarm Sistemi Kurulum Paketleri
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              İhtiyacınıza uygun paketi seçin. Net kapsam ve fiyat keşif sonrası
              belirlenir.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-[2rem] border p-7 shadow-sm ${
                  pkg.featured
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                {pkg.badge && (
                  <div className="mb-4 inline-flex rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
                    {pkg.badge}
                  </div>
                )}

                <h3 className="text-2xl font-black">{pkg.name}</h3>
                <div
                  className={`mt-1 text-sm font-semibold ${
                    pkg.featured ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {pkg.subtitle}
                </div>

                <div className="mt-6 space-y-3">
                  {pkg.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          pkg.featured ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      />
                      <span
                        className={`text-sm leading-7 ${
                          pkg.featured ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#teklif-formu"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-5 py-4 text-sm font-bold transition ${
                    pkg.featured
                      ? "bg-white text-slate-950 hover:bg-slate-100"
                      : "bg-slate-950 text-white hover:bg-slate-800"
                  }`}
                >
                  Teklif İste
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── MID-PAGE FORM ───────── */}
      <section id="teklif-formu" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-slate-200">
                Ücretsiz · Bağlayıcı değil
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                Ücretsiz Keşif Talep Edin
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Formu doldurun, ekibimiz aynı gün geri dönsün. Binanızı
                yerinde inceleyelim, sisteminizi planlayalım ve size net
                fiyat verelim. Herhangi bir taahhüt gerektirmiyor.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Aynı gün geri dönüş",
                  "Yerinde ücretsiz keşif",
                  "Yönetmelik uyumlu projelendirme",
                  "Net fiyat teklifi",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-bold text-white transition hover:bg-white/15"
                >
                  <Phone className="h-5 w-5" />
                  {siteConfig.phone}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 font-bold text-white transition hover:bg-emerald-400"
                >
                  WhatsApp&apos;tan Yaz
                </a>
              </div>
            </div>

            <div>
              <YanginAlarmQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── MÜŞTERİ YORUMLARI ───────── */}
      <TestimonialsSection
        title="Müşterilerimiz Ne Diyor?"
        testimonials={testimonials}
        bgClass="bg-white"
      />

      {/* ───────── SOSYAL KANIT ───────── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
                Güven ve tecrübe
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                Bugüne Kadar Yüzlerce İşletmeye Hizmet Verdik
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Fabrika, depo, otel, restoran ve iş merkezlerinde yangın alarm
                sistemi kurulumu ve periyodik bakım hizmeti veriyoruz.
                Deneyimimiz sizin güvencenizdir.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-3xl font-black text-slate-950">100+</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Tamamlanan yangın alarm projesi
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-3xl font-black text-slate-950">
                    12 Yıl
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Saha tecrübesi
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#teklif-formu"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-base font-bold text-white transition hover:bg-slate-800"
                >
                  Ücretsiz Keşif Talep Et
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-200">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/landing/yangin-alarm-kurulum-ekibi-profesyonel.webp"
                  alt="Profesyonel yangın alarm sistemi kurulum ekibi"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── SÜREÇ ───────── */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/landing/yangin-alarm-sistemi-test-ve-kontrol.webp"
                  alt="Yangın alarm sistemi test ve kontrol süreci"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">
                Adım adım süreç
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                Nasıl Çalışıyoruz?
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Yangın alarm sistemi kurulumunu dört temel adımda
                tamamlıyoruz. Her adım bina yapısına ve yönetmelik
                gereksinimlerine göre planlanır.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    step: "1",
                    title: "Ücretsiz Keşif",
                    text: "Bina yapısı, kullanım amacı ve risk noktaları yerinde incelenir.",
                  },
                  {
                    step: "2",
                    title: "Projelendirme",
                    text: "Dedektör tipi, konum planı ve kablo güzergahı belirlenir.",
                  },
                  {
                    step: "3",
                    title: "Kurulum",
                    text: "Panel, dedektör, buton ve siren montajı tamamlanır.",
                  },
                  {
                    step: "4",
                    title: "Test ve Teslim",
                    text: "Tüm bileşenler test edilir, sistem devreye alınır ve kullanım eğitimi verilir.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 font-black text-white">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-bold">{item.title}</div>
                      <p className="mt-1 text-sm text-slate-300">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── İSTANBUL KAPSAMA ───────── */}
      <IstanbulCoverage
        title="İstanbul'un Her İlçesine Hizmet Veriyoruz"
        subtitle="Avrupa Yakası ve Anadolu Yakası'ndaki tüm ilçelerde yangın alarm sistemi kurulumu ve periyodik bakım hizmeti sunuyoruz."
        bgClass="bg-white"
      />

      {/* ───────── UYUMLULUK / GÜVEN ───────── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Yönetmeliğe Uygun Kurulum
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Kurduğumuz her sistem, Binaların Yangından Korunması Hakkında
              Yönetmelik&apos;e ve ilgili standartlara uygun şekilde projelendirilir.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Yangın Yönetmeliğine Uygunluk",
                text: "Tüm projeler güncel yönetmelik ve itfaiye gereksinimlerine uygun olarak hazırlanır ve kurulur.",
              },
              {
                icon: BadgeCheck,
                title: "CE Sertifikalı Ürünler",
                text: "Kullanılan panel, dedektör ve bileşenlerin tamamı CE belgeli, test edilmiş ürünlerdir.",
              },
              {
                icon: CheckCircle2,
                title: "Sigorta Uyumlu Sistem",
                text: "Kurulan sistemler sigorta şirketlerinin aradığı teknik standartları karşılar. Hasar süreçlerinde belgelendirme desteği sağlanır.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Mid-section CTA */}
          <div className="mt-10 rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-black text-slate-950">
                  Yönetmeliğe uygun yangın alarm sistemi kurdurmak için hemen
                  iletişime geçin
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-700">
                  Ücretsiz keşif ile binanızın ihtiyacını belirleyelim ve size
                  uygun sistemi planlayalım.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#teklif-formu"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 font-bold text-white transition hover:bg-emerald-500"
                >
                  Teklif Al
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-white"
                >
                  <Phone className="h-5 w-5" />
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── SSS ───────── */}
      <section id="sss" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Sık Sorulan Sorular
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-bold">
                  {faq.q}
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── İLGİLİ LİNKLER ───────── */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <p className="text-sm leading-7 text-slate-600">
            Daha fazla bilgi için{" "}
            <Link
              href="/yangin-alarm-sistemi-kurulumu"
              className="font-bold text-slate-950 underline underline-offset-4"
            >
              yangın alarm sistemi kurulumu
            </Link>{" "}
            sayfasını, İstanbul özelinde kurulum hizmeti için{" "}
            <Link
              href="/istanbul/yangin-alarm-sistemi-kurulumu"
              className="font-bold text-slate-950 underline underline-offset-4"
            >
              İstanbul yangın alarm sistemi kurulumu
            </Link>{" "}
            sayfasını ve periyodik bakım süreçleri için{" "}
            <Link
              href="/bakim-servis-uzaktan-izleme"
              className="font-bold text-slate-950 underline underline-offset-4"
            >
              bakım, servis ve uzaktan izleme
            </Link>{" "}
            sayfasını inceleyebilirsiniz.
          </p>
        </div>
      </section>

      {/* ───────── FINAL CTA ───────── */}
      <FinalCTA
        formHref="#teklif-formu"
        bgClass="bg-emerald-600"
        title="Ücretsiz Keşif ve Fiyat Teklifi Alın"
        subtitle="İstanbul genelinde yangın alarm sistemi kurulumu ve periyodik bakım için ücretsiz keşif randevusu alın. Profesyonel ekibimiz aynı gün dönüş yapıyor."
        whatsappMessage="Merhaba, İstanbul'da yangın alarm sistemi kurulumu hakkında teklif almak istiyorum."
      />
    </main>
  );
}
