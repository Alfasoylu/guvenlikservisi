import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import Image from "next/image";
import Link from "next/link";
import { getCommercialPageVisuals } from "@/lib/page-images";
import AlarmQuoteForm from "@/components/forms/AlarmQuoteForm";
import ServiceVisualSection from "@/components/ServiceVisualSection";

const canonicalUrl = getCanonicalUrlForKnownPath("/teklif/alarm");

export const metadata: Metadata = {
  title:
    "İstanbul Alarm Sistemi Kurulumu | Ajax ve Hikvision Alarm Montajı",
  description:
    "İstanbul içi aynı gün alarm sistemi kurulumu. Ajax ve Hikvision marka kablolu ve kablosuz alarm sistemleri, ev, ofis, dükkan ve depo için profesyonel montaj, mobil uygulama kontrolü ve 2 yıl garanti.",
  keywords: [
    "istanbul alarm sistemi kurulumu",
    "istanbul alarm montajı",
    "ajax alarm sistemi",
    "hikvision alarm sistemi",
    "kablosuz alarm sistemi",
    "kablolu alarm sistemi",
    "ev alarm sistemi",
    "işyeri alarm sistemi",
    "dükkan alarm sistemi",
    "depo alarm sistemi",
    "alarm sistemi istanbul",
    "aynı gün alarm montajı",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "İstanbul Alarm Sistemi Kurulumu | Ajax ve Hikvision",
    description:
      "İstanbul içi aynı gün alarm montajı. Ajax ve Hikvision marka kablolu ve kablosuz alarm sistemleri, mobil uygulama kontrolü ve 2 yıl garanti.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: canonicalUrl,
        width: 2307,
        height: 1536,
        alt: "İstanbul alarm sistemi kurulumu yapan teknisyen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İstanbul Alarm Sistemi Kurulumu | Ajax ve Hikvision",
    description:
      "İstanbul içi aynı gün alarm montajı. Kablolu ve kablosuz alarm sistemleri, mobil kontrol ve 2 yıl garanti.",
    images: [
      "https://www.guvenlikservisi.com/images/landing/istanbul-alarm-sistemi-kurulumu-kablolu-kablosuz.jpg.png",
    ],
  },
};

const faqItems = [
  {
    question: "İstanbul’da aynı gün alarm sistemi kurulumu yapıyor musunuz?",
    answer:
      "Evet. İstanbul içindeki birçok ilçede yoğunluk ve saat durumuna göre aynı gün alarm montajı yapabiliyoruz. Acil güvenlik ihtiyacı olan ev, ofis, dükkan ve işyerleri için hızlı planlama sağlıyoruz.",
  },
  {
    question: "Hangi markaları kullanıyorsunuz?",
    answer:
      "Başlıca Ajax ve Hikvision marka alarm sistemleri kuruyoruz. Mekanın yapısına, kullanım ihtiyacına ve bütçeye göre en doğru sistemi öneriyoruz.",
  },
  {
    question: "Kablolu alarm mı, kablosuz alarm mı daha mantıklı?",
    answer:
      "Hazır kullanılan ev ve ofislerde kablosuz alarm sistemi çoğu zaman daha hızlı ve temiz çözüm sunar. Yeni yapılan veya altyapısı uygun mekanlarda kablolu alarm sistemi de güçlü seçenektir. En doğru karar keşif sonrası netleşir.",
  },
  {
    question: "Alarm sistemi telefondan kontrol edilir mi?",
    answer:
      "Evet. Kurduğumuz sistemlerde mobil uygulama üzerinden alarmı kurabilir, kapatabilir, bildirim alabilir ve sistem durumunu uzaktan takip edebilirsiniz.",
  },
  {
    question: "Elektrik kesilirse alarm sistemi çalışır mı?",
    answer:
      "Evet. Alarm sistemlerinde yedek batarya bulunduğu için elektrik kesintisinde sistem belirli süre çalışmaya devam eder.",
  },
  {
    question: "Garanti süreniz ne kadar?",
    answer:
      "Kurulumunu yaptığımız alarm sistemlerinde 2 yıl ürün ve kurulum garantisi sunuyoruz.",
  },
];

const visualItems = getCommercialPageVisuals("teklif/alarm", "?stanbul alarm sistemi kurulumu");

const packageItems = [
  {
    name: "Ev ve Daire Alarm Paketi",
    price: "Teklif Alın",
    features: [
      "Ajax veya Hikvision alarm paneli",
      "Hareket sensörü ve kapı kontak planlaması",
      "Kablosuz veya uygun ise kablolu kurulum",
      "İç siren desteği",
      "Mobil uygulama kurulumu",
      "İstanbul içi profesyonel montaj",
      "2 yıl garanti",
    ],
    highlighted: false,
    badge: "",
  },
  {
    name: "Dükkan / Ofis Koruma Paketi",
    price: "Teklif Alın",
    features: [
      "Ajax veya Hikvision alarm kontrol paneli",
      "Giriş, iç alan ve kritik nokta planlaması",
      "Kapı, pencere, kepenk ve geçiş koruması",
      "İç + dış siren seçenekleri",
      "Mobil uygulama ile uzaktan yönetim",
      "Aynı gün montaj imkanı",
      "2 yıl garanti",
    ],
    highlighted: true,
    badge: "En Çok Tercih Edilen",
  },
  {
    name: "Depo / Mağaza / Kurumsal Çözüm",
    price: "Keşif Sonrası Teklif",
    features: [
      "Büyük alanlara özel keşif",
      "Kablolu, kablosuz veya hibrit sistem tasarımı",
      "Çoklu alan koruma kurgusu",
      "Sensör ve siren genişletme imkanı",
      "Telefon üzerinden uzaktan yönetim",
      "Profesyonel devreye alma",
      "2 yıl garanti",
    ],
    highlighted: false,
    badge: "",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "İstanbul Alarm Sistemi Kurulumu",
  serviceType: "Alarm Sistemi Kurulumu",
  provider: {
    "@type": "Organization",
    name: "Güvenlik Servisi",
    url: "https://www.guvenlikservisi.com",
  },
  areaServed: {
    "@type": "City",
    name: "İstanbul",
  },
  description:
    "İstanbul içi aynı gün alarm sistemi kurulumu. Ajax ve Hikvision marka kablolu ve kablosuz alarm sistemleri, mobil uygulama kontrolü ve 2 yıl garanti.",
};

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
        ✓
      </span>
      <span className="text-slate-700">{children}</span>
    </li>
  );
}

export default function AlarmLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                  İstanbul İçi Aynı Gün Montaj
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  Ajax & Hikvision
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  2 Yıl Garanti
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  Kablolu / Kablosuz
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
                İstanbul Alarm Sistemi Kurulumu
                <span className="block text-red-600">
                  Ajax ve Hikvision Alarm Montajı
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                İstanbul’da ev, ofis, dükkan, mağaza ve depo için profesyonel
                alarm sistemi kurulumu yapıyoruz. Ajax ve Hikvision marka
                kablolu ve kablosuz alarm sistemleri, mobil uygulama kontrolü,
                hızlı keşif, temiz montaj ve 2 yıl garanti ile güvenliği şansa
                bırakmıyoruz.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#teklif-formu"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
                >
                  Hemen Teklif Al
                </a>
                <a
                  href="tel:+905425934900"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  0542 593 49 00
                </a>
              </div>

              <ul className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                  Aynı gün keşif ve montaj planlaması
                </li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                  Telefon uygulaması ile uzaktan kontrol
                </li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                  Ev, işyeri, mağaza ve depo çözümleri
                </li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                  Profesyonel kurulum ve kullanıcı eğitimi
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                <Image
                  src="/images/landing/istanbul-alarm-sistemi-kurulumu-kablolu-kablosuz.jpg.png"
                  alt="İstanbul’da evde alarm sistemi kurulumu yapan teknisyen"
                  width={2307}
                  height={1536}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <ServiceVisualSection
          title="?stanbul alarm sistemi uygulama g?rselleri"
          description="Bu blok, alarm teklif sayfas?nda ?rnek kurulum, kullan?m senaryosu, montaj s?reci ve ba?lant? ?emas?n? tek yerde g?sterir."
          items={visualItems}
        />

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
            <SectionTitle
              eyebrow="Neden Alarm Sistemi"
              title="Geç Kalmadan Güvenlik Açığını Kapatın"
              description="Alarm sistemi olmayan mekan daha kolay hedef olur. Olay olduktan sonra fark etmek değil, olay anında haberdar olmak para kaybını, iş kaybını ve stres maliyetini azaltır."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="mb-4 text-3xl">🚨</div>
                <h3 className="text-xl font-bold text-slate-900">
                  Hırsızlık ve İzinsiz Giriş Riski
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Alarm sistemi olmayan ev, ofis, dükkan ve depolar daha kolay
                  hedef haline gelir. Özellikle gece ve kapalı saatlerde erken
                  uyarı vermeyen mekan doğrudan zarar yazar.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="mb-4 text-3xl">📱</div>
                <h3 className="text-xl font-bold text-slate-900">
                  Anında Telefon Bildirimi
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Kapı açılma, hareket algılama veya alarm tetiklenmesi anında
                  size bildirim gelir. Mekanda olmasanız da kontrol sizde kalır.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="mb-4 text-3xl">⏱️</div>
                <h3 className="text-xl font-bold text-slate-900">
                  Geç Müdahale Daha Büyük Kayıp
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Olayı sabah fark etmek ile olay anında haberdar olmak aynı şey
                  değildir. Aynı gün montaj ile güvenlik açığını bekletmeden
                  kapatıyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <Image
                src="/images/landing/isyeri-ajax-alarm-kurulum-servisi.png"
                alt="Ajax hub kurulumu yapılan işyeri alarm sistemi"
                width={2294}
                height={1536}
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Ajax ve Hikvision Alarm Sistemleri
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Mekana Uygun Kablolu veya Kablosuz Alarm Sistemi Kuruyoruz
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                İstanbul’da ev, villa, daire, ofis, dükkan, mağaza, apartman
                girişi ve depo için Ajax ve Hikvision alarm sistemleri
                kuruyoruz. Mekanın yapısına göre kablolu, kablosuz veya hibrit
                çözüm planlıyor; sensör yerleşimini yapıyor; sistemi çalışır
                şekilde teslim ediyoruz.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                <CheckItem>Ajax alarm sistemi kurulumu</CheckItem>
                <CheckItem>Hikvision alarm sistemi kurulumu</CheckItem>
                <CheckItem>Kablolu alarm sistemi çözümleri</CheckItem>
                <CheckItem>Kablosuz alarm sistemi çözümleri</CheckItem>
                <CheckItem>Ev ve işyeri için keşif planlaması</CheckItem>
                <CheckItem>PIR hareket sensörü desteği</CheckItem>
                <CheckItem>Kapı / pencere manyetik kontak</CheckItem>
                <CheckItem>İç ve dış siren seçenekleri</CheckItem>
                <CheckItem>Batarya yedekleme</CheckItem>
                <CheckItem>2 yıl ürün ve kurulum garantisi</CheckItem>
              </ul>

              <div className="mt-8">
                <a
                  href="#teklif-formu"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
                >
                  Ücretsiz Keşif ve Teklif Al
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Mobil Kontrol
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Alarm Sistemini Telefonda Kontrol Edin
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Alarm kurulu mu, kapalı mı, hangi bölgede hareket algılandı,
                hangi kapı açıldı; bunları uygulama üzerinden görebilirsiniz.
                Bu özellik ev kullanıcılarında konfor, işyeri sahiplerinde ise
                operasyonel kontrol sağlar.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">
                    Uzaktan Kur / Kapat
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Alarmı telefondan aktif veya pasif hale getirebilirsiniz.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">
                    Anlık Bildirim Al
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Hareket, giriş, sistem uyarısı ve diğer olayları anında
                    öğrenirsiniz.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">
                    Kullanıcı Yönetimi
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Bazı senaryolarda birden fazla kullanıcı için yetki
                    tanımlaması yapılabilir.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <Image
                src="/images/landing/telefondan-kablosuz-alarm-kontrol-app.webp"
                alt="Telefondan kablosuz alarm sistemi kontrol uygulaması"
                width={1230}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
            <SectionTitle
              eyebrow="Paketler"
              title="İhtiyaca Göre Alarm Sistemi Paketleri"
              description="Sabit kör paket satmak yerine, mekana göre doğru sistemi kurgulamak daha mantıklı. Yine de hızlı karar verebilmeniz için örnek paket yapıları aşağıda."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {packageItems.map((item) => (
                <div
                  key={item.name}
                  className={`rounded-3xl border p-7 shadow-sm ${
                    item.highlighted
                      ? "border-red-300 bg-white shadow-xl"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {item.badge ? (
                    <div className="mb-4 inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
                      {item.badge}
                    </div>
                  ) : null}

                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-2xl font-extrabold text-red-600">
                    {item.price}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {item.features.map((feature) => (
                      <CheckItem key={feature}>{feature}</CheckItem>
                    ))}
                  </ul>

                  <a
                    href="#teklif-formu"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-4 text-base font-semibold transition ${
                      item.highlighted
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    Teklif İste
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-slate-700">
              <strong className="text-slate-900">Net gerçek:</strong> Alarm
              sistemi fiyatı; mekanın büyüklüğüne, giriş sayısına, sensör
              adedine, kablolu veya kablosuz tercihe ve siren yapısına göre
              değişir. Keşifsiz verilen ezbere fiyat ya seni kaçırır ya da bizi
              zarara sokar. Doğru fiyat, doğru keşif sonrası çıkar.
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
            <SectionTitle
              eyebrow="Kimler İçin Uygun"
              title="Ev, Ofis, Dükkan, Mağaza ve Depo İçin Alarm Çözümleri"
              description="Her mekanın riski ve kullanım şekli farklıdır. Aynı sistemi herkese satmak tembelliktir. Doğru iş, mekana göre doğru alarm senaryosu kurmaktır."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Ev ve Daire",
                  text: "Kapı, pencere ve iç alan koruması ile günlük kullanımda pratik ve temiz alarm çözümü.",
                },
                {
                  title: "Ofis",
                  text: "Mesai dışı izinsiz giriş, kritik oda geçişleri ve mobil yönetim ihtiyacına uygun yapı.",
                },
                {
                  title: "Dükkan / Mağaza",
                  text: "Kepenk, giriş kapısı ve iç alan için daha hızlı uyarı ve daha yüksek caydırıcılık.",
                },
                {
                  title: "Depo / Kurumsal Alan",
                  text: "Çoklu alan, geniş hacim ve operasyonel güvenlik ihtiyacı için ölçeklenebilir sistem.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
            <SectionTitle
              eyebrow="Müşteri Yorumları"
              title="İstanbul’da Kurulum Yaptığımız Müşterilerden Geri Bildirimler"
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  text: "Dükkanımıza Ajax alarm sistemi kuruldu. Aynı gün gelip montaj yaptılar. Uygulamayı da telefonda tek tek gösterdiler.",
                  name: "Mehmet K.",
                  role: "Şişli / İşletme Sahibi",
                },
                {
                  text: "Evimiz için kablosuz alarm sistemi yaptırdık. Temiz montaj oldu, kırma dökme olmadı. Uygulama üzerinden rahatça kullanıyoruz.",
                  name: "Zeynep A.",
                  role: "Kadıköy / Ev Sahibi",
                },
                {
                  text: "Ofisimize Hikvision alarm sistemi kuruldu. Keşif sonrası doğru çözümü önerdiler. İşçilik ve hız gayet iyiydi.",
                  name: "Onur T.",
                  role: "Bakırköy / Ofis",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 text-amber-500">★★★★★</div>
                  <p className="leading-7 text-slate-700">“{item.text}”</p>
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="font-bold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-20">
            <SectionTitle
              eyebrow="Sık Sorulan Sorular"
              title="Alarm Sistemi Kurulumu Hakkında Merak Edilenler"
            />

            <div className="mt-12 space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <summary className="cursor-pointer list-none text-lg font-bold text-slate-900">
                    {item.question}
                  </summary>
                  <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="teklif-formu"
          className="bg-slate-950 text-white scroll-mt-24"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Hemen Teklif Al
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                İstanbul Alarm Sistemi İçin Hızlı Teklif İsteyin
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Ajax ve Hikvision alarm sistemi kurulumu, kablolu ve kablosuz
                çözümler, aynı gün montaj ve 2 yıl garanti için formu doldurun.
                Ekibimiz sizi arayıp en doğru sistemi planlasın.
              </p>

              <ul className="mt-8 space-y-4 text-slate-200">
                <li>✓ İstanbul içi hızlı dönüş</li>
                <li>✓ Ev, ofis, dükkan ve depo için çözüm</li>
                <li>✓ Gereksiz ürün değil, ihtiyaca uygun sistem</li>
                <li>✓ Kamera + alarm birlikte planlama imkanı</li>
              </ul>
            </div>

            <AlarmQuoteForm />
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Alarm sistemi tek başına iyidir.
                  </h2>
                  <p className="mt-2 max-w-3xl text-slate-600">
                    Ama alarm + kamera birlikte daha güçlüdür. Çünkü hem erken
                    uyarı alırsınız hem de görüntüyle doğrulama yaparsınız.
                    Güvenlikte en çok para kazandıran iş, müşteriye eksik çözüm
                    değil tam çözüm sunmaktır.
                  </p>
                </div>

                <Link
                  href="/teklif/istanbul-ip-kamera-montaji"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
                >
                  Kamera Sistemlerini de İncele
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
