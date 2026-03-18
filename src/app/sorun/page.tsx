import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Camera,
  CheckCircle2,
  Cpu,
  HardDrive,
  Phone,
  ShieldAlert,
  Wrench,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { getAllProblemPages } from "@/data/seo/problem-pages";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";

const canonicalUrl = getCanonicalUrlForKnownPath("/sorun");

export const metadata: Metadata = {
  title: "Güvenlik Sistemi Arıza Rehberi | Kamera, Alarm ve Kayıt Sistemi Sorunları",
  description:
    "Güvenlik kamerası görüntü yok, kamera offline, kayıt yapmıyor, alarm arızası, kartlı geçiş çalışmıyor gibi sorunlar için hızlı teşhis rehberi ve teknik servis.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Güvenlik Sistemi Arıza Rehberi | Kamera, Alarm ve Kayıt Sistemi Sorunları",
    description:
      "Güvenlik sistemi arızanızı hızlıca teşhis edin. Kamera, alarm, kartlı geçiş ve yangın alarm sorunları için adım adım rehber.",
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
};

const categories = [
  {
    key: "kamera",
    label: "Kamera Görüntü Sorunları",
    icon: Camera,
    slugs: [
      "kamera-goruntu-gelmiyor",
      "kamera-offline",
      "kamera-bulanik-gosteriyor",
      "kamera-gece-gorusu-calismiyor",
      "kamera-hareket-kaydi-calismiyor",
    ],
  },
  {
    key: "kayit",
    label: "Kayıt ve Uzaktan Erişim",
    icon: HardDrive,
    slugs: [
      "kayit-yapilmiyor",
      "hdd-kayit-cihazi-sorunlari",
      "telefondan-izleme-sorunu",
    ],
  },
  {
    key: "alarm",
    label: "Alarm ve Yangın Alarm",
    icon: ShieldAlert,
    slugs: [
      "alarm-arizalari",
      "yangin-alarm-paneli-uyari-veriyor",
    ],
  },
  {
    key: "erisim",
    label: "Erişim Kontrolü",
    icon: Cpu,
    slugs: [
      "kartli-gecis-calismiyor",
      "kart-okuyucu-kapi-acmiyor",
    ],
  },
];

const urgencyConfig = {
  "yüksek": { label: "Acil", classes: "bg-red-100 text-red-700" },
  "orta": { label: "Orta", classes: "bg-amber-100 text-amber-700" },
  "düşük": { label: "Düşük", classes: "bg-slate-100 text-slate-600" },
} as const;

const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Merhaba, güvenlik sistemimde arıza var, teknik destek almak istiyorum.",
)}`;

export default function SorunHubPage() {
  const allProblems = getAllProblemPages();
  const problemMap = new Map(allProblems.map((p) => [p.slug, p]));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Arıza Rehberi",
        item: canonicalUrl,
      },
    ],
  };

  const hubFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Güvenlik kamerasında görüntü gelmiyor, ne yapmalıyım?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Önce kamera güç bağlantısını ve NVR/DVR üzerindeki kablo bağlantısını kontrol edin. Sorun devam ediyorsa kamera veya kayıt cihazı arızası olabilir. Yerinde teknik servis gerekebilir.",
        },
      },
      {
        "@type": "Question",
        name: "Alarm sistemi sürekli uyarı veriyor ne anlama gelir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alarm paneli sensör arızası, akü düşüklüğü veya sabotaj tespitiyle uyarı üretebilir. Paneldeki hata kodunu not alın ve teknik servisi arayın. Gerçek bir tehdit olasılığını önce dışlamak önemlidir.",
        },
      },
      {
        "@type": "Question",
        name: "Kartlı geçiş sistemim çalışmıyor, acil müdahale gerekiyor mu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kapı kiliti açılmıyorsa erişim güvenliği risk altında demektir. Acil durumda mekanik bypass anahtarınız varsa kullanın ve teknik servisi arayın. Sorun kontrol ünitesi, kart okuyucu veya elektrikli kilitten kaynaklanıyor olabilir.",
        },
      },
    ],
  };

  return (
    <main className="bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubFaqSchema) }}
      />

      {/* ───────── BREADCRUMB ───────── */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-700">
                Ana Sayfa
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-slate-950">Arıza Rehberi</li>
          </ol>
        </div>
      </nav>

      {/* ───────── HERO ───────── */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-18">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-300">
              <AlertTriangle className="h-4 w-4" />
              Teknik arıza mı yaşıyorsunuz?
            </div>
            <h1 className="text-4xl font-black leading-tight md:text-5xl">
              Güvenlik Sistemi Arıza Rehberi
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Kamera görüntü sorunundan alarm arızasına, kayıt cihazı sorunlarından
              erişim kontrolü hatalarına — 12 yaygın arıza için adım adım teşhis
              rehberi ve profesyonel teknik servis desteği.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:bg-slate-100"
              >
                <Phone className="h-5 w-5" />
                Teknik Servis Ara
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3.5 font-bold text-white transition hover:bg-emerald-400"
              >
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── SORUN KATEGORİLERİ ───────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="space-y-14">
            {categories.map((category) => {
              const problems = category.slugs
                .map((slug) => problemMap.get(slug))
                .filter(Boolean);

              return (
                <div key={category.key}>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                      <category.icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-black">{category.label}</h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {problems.map((problem) => {
                      if (!problem) return null;
                      const urgency = urgencyConfig[problem.urgencyLevel];

                      return (
                        <Link
                          key={problem.slug}
                          href={`/sorun/${problem.slug}`}
                          className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-400 hover:bg-white hover:shadow-md"
                        >
                          <div className="mb-3 flex items-center justify-between">
                            <span
                              className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold ${urgency.classes}`}
                            >
                              {urgency.label}
                            </span>
                            <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-700" />
                          </div>
                          <h3 className="text-base font-bold leading-snug text-slate-950">
                            {problem.primaryIssue}
                          </h3>
                          <p className="mt-2 text-xs leading-5 text-slate-500">
                            {problem.affectedSystems.slice(0, 3).join(", ")}
                            {problem.affectedSystems.length > 3 && " ve diğerleri"}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── ACİL DESTEK ───────── */}
      <section className="bg-red-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <div className="rounded-[2rem] border border-red-200 bg-white p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white">
                  <Wrench className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-950">
                    Aradığınız sorunu bulamadınız mı?
                  </h2>
                  <p className="mt-1.5 max-w-xl text-sm leading-6 text-slate-600">
                    Teknik ekibimiz telefon veya WhatsApp üzerinden arızanızı
                    dinleyip yönlendiriyor. Gerekirse aynı gün yerinde müdahale
                    sağlanır.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 font-bold text-white transition hover:bg-emerald-500"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── NE ZAMAN ACİL? ───────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-black md:text-3xl">
              Ne Zaman Acil Teknik Servis Gerekir?
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Aşağıdaki durumlarda beklemeden teknik servis talep edin:
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Tüm kameraların görüntüsü aynı anda kesildi",
                "Alarm sistemi sürekli uyarı veriyor ve susmuyor",
                "Yangın alarm paneli alarm koşulu gösteriyor",
                "Kartlı geçiş kapısı kilitli kaldı, içeride kişi var",
                "Kayıt cihazı (NVR/DVR) kapandı ve açılmıyor",
                "Kart okuyucu hiçbir karta tepki vermiyor",
                "Kamera sistemi güvenlik olayından sonra görüntü göstermiyor",
                "Alarm sistemi yetkisiz bir giriş sonrası sessiz kaldı",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-sm leading-6 text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── İLGİLİ HİZMETLER ───────── */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-black md:text-3xl">
              Arızayı Önceden Önleyin
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Güvenlik sistemlerindeki arızaların büyük bölümü düzenli bakım ve
              periyodik kontrol ile önlenebilir.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/kamera-ariza-servisi",
                  title: "Kamera Arıza Servisi",
                  description:
                    "Yerinde arıza tespiti, kablo ve parça değişimi, sistem kalibrasyonu.",
                },
                {
                  href: "/bakim-servis-uzaktan-izleme",
                  title: "Bakım, Servis ve Uzaktan İzleme",
                  description:
                    "Periyodik kontrol sözleşmesi ile arıza oluşmadan önce tespit.",
                },
                {
                  href: "/kamera-sistemi-kurulumu",
                  title: "Kamera Sistemi Kurulumu",
                  description:
                    "Mevcut sisteminizi yükseltmek veya sıfırdan kurulum yaptırmak için.",
                },
                {
                  href: "/alarm-sistemi-kurulumu",
                  title: "Alarm Sistemi Kurulumu",
                  description:
                    "Yeni alarm sistemi kurulumu veya mevcut sisteminizin modernizasyonu.",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-400 hover:shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <div className="text-sm font-bold text-slate-950 group-hover:underline group-hover:underline-offset-2">
                      {item.title}
                    </div>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
