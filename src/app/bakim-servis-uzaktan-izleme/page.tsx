import MaintenanceQuoteForm from "@/components/forms/MaintenanceQuoteForm";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Güvenlik Sistemi Bakım, Servis ve Uzaktan İzleme | Site ve Fabrika İçin Aylık Bakım Sözleşmesi",
  description:
    "18 ilde site, fabrika, depo, plaza ve işletmeler için güvenlik kamerası, alarm, yangın alarm ve geçiş sistemi bakım sözleşmesi. Aylık 2.000 TL'den başlayan fiyatlarla periyodik bakım, hızlı servis ve uzaktan izleme desteği.",
  keywords: [
    "güvenlik sistemi bakım sözleşmesi",
    "kamera sistemi bakım hizmeti",
    "güvenlik kamerası bakım anlaşması",
    "alarm sistemi bakım sözleşmesi",
    "yangın alarm bakım hizmeti",
    "uzaktan izleme hizmeti",
    "site güvenlik sistemi bakımı",
    "fabrika güvenlik sistemi servisi",
    "aylık bakım sözleşmesi",
    "cctv bakım anlaşması",
    "nvr bakım servisi",
    "dvr bakım servisi",
    "site yönetimi güvenlik bakım",
    "fabrika kamera bakım",
    "bakım servis uzaktan izleme",
  ],
  alternates: {
    canonical: "https://www.guvenlikservisi.com/bakim-servis-uzaktan-izleme",
  },
  openGraph: {
    title:
      "Güvenlik Sistemi Bakım, Servis ve Uzaktan İzleme | Aylık Bakım Sözleşmesi",
    description:
      "18 ilde site, fabrika, depo ve işletmeler için periyodik bakım, hızlı servis ve uzaktan izleme hizmeti. Aylık 2.000 TL'den başlayan bakım sözleşmeleri.",
    url: "https://www.guvenlikservisi.com/bakim-servis-uzaktan-izleme",
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://www.guvenlikservisi.com/images/services/bakim-servis/guvenlik-sistemi-bakim-teknisyen-ekip.jpg",
        width: 1600,
        height: 1000,
        alt: "Güvenlik sistemi bakım ekibi saha çalışması",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Güvenlik Sistemi Bakım, Servis ve Uzaktan İzleme | Aylık Bakım Sözleşmesi",
    description:
      "Site, fabrika, depo ve işletmeler için aylık bakım, servis ve uzaktan izleme hizmeti.",
    images: [
      "https://www.guvenlikservisi.com/images/services/bakim-servis/guvenlik-sistemi-bakim-teknisyen-ekip.jpg",
    ],
  },
};

const provinces = [
  "İstanbul",
  "Ankara",
  "İzmir",
  "Bursa",
  "Kocaeli",
  "Sakarya",
  "Tekirdağ",
  "Edirne",
  "Çanakkale",
  "Balıkesir",
  "Eskişehir",
  "Antalya",
  "Konya",
  "Adana",
  "Mersin",
  "Gaziantep",
  "Kayseri",
  "Samsun",
];

const faqItems = [
  {
    question: "Bakım sözleşmesi hangi işletmeler için uygundur?",
    answer:
      "En yüksek faydayı site yönetimleri, fabrikalar, depolar, AVM içi mağazalar, plazalar, üretim tesisleri, lojistik alanları, okul ve kurumsal işletmeler alır. Çünkü bu yapılarda sistem arızası sadece teknik sorun değil; güvenlik riski, operasyon kaybı ve itibar kaybı yaratır.",
  },
  {
    question: "Başka bir firmanın kurduğu sistemin bakımını yapıyor musunuz?",
    answer:
      "Evet. Marka ve kurulum firması bağımsız şekilde mevcut sistemi devralabiliyoruz. İlk aşamada sistem keşfi, cihaz envanteri, arıza geçmişi ve genel sağlık kontrolü yapılıyor. Ardından bakım kapsamı ve sözleşme teklifi hazırlanıyor.",
  },
  {
    question: "Aylık 2.000 TL'den başlayan fiyat neye göre değişir?",
    answer:
      "Fiyat; kamera sayısı, kayıt cihazı adedi, alarm ve yangın sistemi kapsamı, geçiş sistemi olup olmaması, lokasyon sayısı, SLA beklentisi ve yerinde ziyaret sıklığına göre değişir. 2.000 TL başlangıç seviyesidir; büyük site ve fabrikalarda fiyat doğal olarak daha yukarı çıkar.",
  },
  {
    question: "Uzaktan izleme ile bakım aynı şey mi?",
    answer:
      "Hayır. Uzaktan izleme sistemin çevrim içi olup olmadığını, kayıt akışını ve temel alarm durumlarını takip etmeye yarar. Bakım ise sahada temizlik, test, kalibrasyon, batarya kontrolü, disk kontrolü, yazılım güncellemesi ve raporlamayı içerir. En güçlü model ikisinin birlikte verilmesidir.",
  },
  {
    question: "Yangın alarm sistemi bakımı da yapıyor musunuz?",
    answer:
      "Evet. Yangın alarm sistemi bakım ve test hizmeti veriyoruz. Ancak sahadaki sistemin marka, panel yapısı, loop mimarisi ve mevcut projeye göre kapsam belirlenir. Bu tip sistemlerde raporlama ve test disiplini kritik olduğu için ön keşif gerekir.",
  },
  {
    question: "Bakım sözleşmesi olan müşteriye servis önceliği veriyor musunuz?",
    answer:
      "Evet. Sözleşmeli müşteriler servis planlamasında öncelik alır. Çünkü recurring bakım müşterisi hem daha uzun vadeli iş ortağıdır hem de sistem geçmişi kayıt altında tutulduğu için müdahale süresi daha kısa olur.",
  },
  {
    question: "Hangi sistemleri kapsıyorsunuz?",
    answer:
      "Güvenlik kamerası sistemleri, NVR/DVR kayıt sistemleri, alarm sistemleri, yangın alarm sistemleri, görüntülü interkom ve bazı kartlı geçiş altyapıları bakım kapsamına alınabilir. Nihai kapsam keşif sonrası netleşir.",
  },
  {
    question: "Raporlama yapıyor musunuz?",
    answer:
      "Evet. Kurumsal bakım hizmetinde en önemli fark rapordur. Yapılan kontroller, tespit edilen riskler, önerilen değişimler ve sonraki bakım planı dokümante edilir. Rapor olmayan bakım, profesyonel bakım değildir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Güvenlik Sistemi Bakım, Servis ve Uzaktan İzleme",
  serviceType: "Güvenlik Sistemi Bakım Sözleşmesi",
  provider: {
    "@type": "Organization",
    name: "Güvenlik Servisi",
    url: "https://www.guvenlikservisi.com",
  },
  areaServed: provinces.map((province) => ({
    "@type": "City",
    name: province,
  })),
  description:
    "Site, fabrika, depo, plaza ve işletmeler için güvenlik kamerası, alarm, yangın alarm ve geçiş sistemi bakım, servis ve uzaktan izleme hizmeti.",
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
    <div className="mx-auto max-w-4xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
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

export default function BakimServisUzaktanIzlemePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.08),_transparent_32%),linear-gradient(to_bottom,_#f8fafc,_#ffffff)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                  18 İlde Hizmet
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  Aylık 2.000 TL’den Başlayan
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  Site ve Fabrika Odaklı
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  Bakım + Servis + Uzaktan İzleme
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
                Güvenlik Sistemi Bakım, Servis ve Uzaktan İzleme
                <span className="mt-2 block text-red-600">
                  Site, Fabrika ve Büyük İşletmeler İçin Aylık Bakım Sözleşmesi
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Güvenlik kamerası, alarm, yangın alarm ve kayıt sistemleri kritik
                anda çalışmıyorsa o sistem aslında yoktur. Bu yüzden büyük site,
                fabrika, depo, plaza ve işletmelere düzenli bakım, hızlı servis
                ve uzaktan sistem takibi sunuyoruz. Hedefimiz tek seferlik arıza
                değil; sistemin yıl boyunca çalışır kalmasını sağlamak.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#teklif"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
                >
                  Bakım Sözleşmesi Teklifi Al
                </a>
                <a
                  href="tel:+908503077397"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  0850 307 73 97
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Aylık bakım sözleşmesi
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    2.000 TL’den başlayan planlarla recurring teknik gelir modeli
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Operasyon kaybını azaltır
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Arıza çıktıktan sonra değil, arıza büyümeden müdahale
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Kurumsal raporlama
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Yapılan bakım, tespit edilen risk ve öneriler kayıt altına alınır
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Farklı marka sistemleri devralma
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Başka firmanın kurduğu sistemi de analiz edip bakım kapsamına alabiliriz
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                <Image
                  src="/images/services/bakim-servis/guvenlik-sistemi-bakim-teknisyen-ekip.jpg"
                  alt="Güvenlik sistemi bakım ekibi saha çalışması"
                  width={1600}
                  height={1000}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
            <SectionTitle
              eyebrow="Neden Bu Hizmet"
              title="Büyük Yapılar İçin Asıl Sorun Kurulum Değil, Sürekliliktir"
              description="Site yönetimi ve fabrika sahipleri için gerçek problem cihazı bir kere taktırmak değil; aylar sonra sistemin körleşmesi, kayıt almaması, alarmın susması veya uzaktan erişimin çökmesidir."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="mb-4 text-3xl">🎯</div>
                <h3 className="text-xl font-bold text-slate-900">
                  Kritik Anda Çalışmayan Sistem
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Lens kirli, disk arızalı, kayıt bozuk, batarya ölmüş veya ağ
                  bağlantısı kopmuş sistem görünürde vardır ama gerçek risk
                  anında işe yaramaz.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="mb-4 text-3xl">🧾</div>
                <h3 className="text-xl font-bold text-slate-900">
                  Raporlanmayan Bakım Güven Vermez
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Büyük siteler ve fabrikalar sözlü bakım istemez. Tespit, test,
                  öneri ve müdahale geçmişi kayıt altına alınmalıdır. Kurumsal
                  müşteriyi ikna eden şey laf değil rapordur.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="mb-4 text-3xl">⚡</div>
                <h3 className="text-xl font-bold text-slate-900">
                  Arıza Büyümeden Müdahale
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Plansız servis pahalıdır. Aylık bakım sözleşmesi ile sorunlar
                  büyümeden fark edilir, ekip müdahalesi daha hızlı ve daha az
                  maliyetli olur.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <Image
                src="/images/services/bakim-servis/site-yonetimi-guvenlik-merkezi-izleme-ekrani.jpg"
                alt="Site yönetimi için uzaktan izleme ekranı ve teknik merkez"
                width={1600}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Hizmet Kapsamı
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Bakım, Servis ve Uzaktan İzlemeyi Tek Pakette Topluyoruz
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Tek seferlik arıza çözümü yerine, sürdürülebilir sistem sağlığı
                satıyoruz. Bu model büyük müşteri için daha güvenli, bizim için
                de daha ölçeklenebilir ve daha kârlıdır.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                <CheckItem>Periyodik saha bakım ziyareti</CheckItem>
                <CheckItem>Kamera, NVR ve disk sağlık kontrolü</CheckItem>
                <CheckItem>Alarm paneli, sensör ve siren testi</CheckItem>
                <CheckItem>Yangın alarm temel test ve bakım planı</CheckItem>
                <CheckItem>Yazılım / firmware güncelleme takibi</CheckItem>
                <CheckItem>Uzaktan erişim ve ağ bağlantı kontrolü</CheckItem>
                <CheckItem>Öncelikli servis planlaması</CheckItem>
                <CheckItem>Teknik durum ve risk raporlaması</CheckItem>
                <CheckItem>Yedek parça ihtiyaç tespiti</CheckItem>
                <CheckItem>Kurumsal bakım geçmişi kaydı</CheckItem>
              </ul>

              <div className="mt-8">
                <a
                  href="#fiyatlar"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
                >
                  Paketleri İncele
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
            <SectionTitle
              eyebrow="Hangi Yapılar İçin"
              title="Site, Fabrika, Depo, Plaza ve Çok Noktalı İşletmeler İçin Uygun"
              description="Bu hizmet küçük bireysel arıza işinden çok kurumsal bakım sözleşmesine uygundur. Çünkü en yüksek değer; cihaz sayısı fazla, operasyon sürekli ve arıza maliyeti yüksek yapılarda oluşur."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Site ve Rezidanslar",
                  text: "Ortak alan kamera sistemi, giriş güvenliği, kayıt cihazları ve uzaktan erişim sorunları için düzenli bakım.",
                },
                {
                  title: "Fabrika ve Üretim Alanları",
                  text: "Üretim güvenliği, çevre kamera takibi, depo geçişleri ve kritik kayıt altyapısı için daha disiplinli bakım yapısı.",
                },
                {
                  title: "Depo ve Lojistik Tesisleri",
                  text: "Uzun alanlar, düşük ışık bölgeleri, ağ kopmaları ve kayıt sürekliliği sorunları için kurumsal servis modeli.",
                },
                {
                  title: "Plaza, Kampüs ve Zincir İşletmeler",
                  text: "Tek noktadan fazla lokasyona yayılan yapılarda merkezi raporlama ve planlı bakım avantajı.",
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
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Teknik Derinlik
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Sadece Silip Gitmiyoruz, Sistem Sağlığını Ölçüyoruz
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Kurumsal müşteri “geldik baktık” cümlesine para ödemez. Ölçülen,
                test edilen, raporlanan ve önceliklendirilen bakım ister. Bu yüzden
                saha bakımını teknik checklist mantığıyla yürütüyoruz.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-slate-900">Kayıt ve Disk Kontrolü</h3>
                  <p className="mt-2 text-slate-600">
                    NVR/DVR disk sağlığı, kayıt süresi, hata logları, kanal kayıt
                    sürekliliği ve depolama riski kontrol edilir.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-slate-900">Görüntü ve Lens Kalitesi</h3>
                  <p className="mt-2 text-slate-600">
                    Kör açı, kirli lens, bozuk fokus, düşük gece performansı ve
                    yön bozulması gibi problemler giderilir.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-slate-900">Alarm / Sensör / Batarya Testi</h3>
                  <p className="mt-2 text-slate-600">
                    Panel, manyetik kontak, PIR sensör, siren ve güç yedekleme
                    tarafı test edilerek zayıf halkalar tespit edilir.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <Image
                src="/images/services/bakim-servis/nvr-kayit-cihazi-bakim-harddisk-kontrol.jpg"
                alt="NVR kayıt cihazı bakım ve harddisk kontrolü"
                width={1600}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="fiyatlar" className="border-b border-slate-200 bg-white scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
            <SectionTitle
              eyebrow="Fiyatlandırma"
              title="Aylık Bakım Sözleşmesi Paketleri"
              description="Piyasanın en büyük hatası herkese aynı fiyat vermek. Büyük site ve fabrikada doğru iş, keşif bazlı fiyatlandırmadır. Yine de karar sürecini hızlandırmak için başlangıç seviyelerini aşağıda net gösteriyoruz."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  name: "Başlangıç Planı",
                  price: "2.000 TL / ay’dan başlayan",
                  badge: "",
                  highlighted: false,
                  items: [
                    "Küçük ve orta ölçekli tesisler için",
                    "Temel sistem sağlık kontrolü",
                    "Uzaktan destek ve ön teşhis",
                    "Periyodik bakım planı",
                    "Arıza kaydı ve servis takibi",
                    "Yıllık sözleşme yapısı",
                  ],
                },
                {
                  name: "Kurumsal Plan",
                  price: "Keşif sonrası teklif",
                  badge: "En Çok Tercih Edilen",
                  highlighted: true,
                  items: [
                    "Site yönetimleri ve fabrikalar için",
                    "Bakım + servis + raporlama",
                    "Öncelikli müdahale planlaması",
                    "Uzaktan izleme ve kayıt kontrolü",
                    "Birden fazla sistemin birlikte yönetimi",
                    "Aylık / periyodik teknik rapor",
                  ],
                },
                {
                  name: "Çok Lokasyonlu Plan",
                  price: "Özel fiyatlandırma",
                  badge: "",
                  highlighted: false,
                  items: [
                    "Birden fazla şube / tesis yönetimi",
                    "Merkezi bakım planlama",
                    "Lokasyon bazlı kayıt ve takip",
                    "Kurumsal SLA odaklı yapı",
                    "Geniş ekipman ve altyapı kapsamı",
                    "Uzun vadeli operasyon ortaklığı",
                  ],
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-3xl border p-7 shadow-sm ${
                    plan.highlighted
                      ? "border-red-300 bg-white shadow-xl"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  {plan.badge ? (
                    <div className="mb-4 inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
                      {plan.badge}
                    </div>
                  ) : null}

                  <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="mt-3 text-2xl font-extrabold text-red-600">
                    {plan.price}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {plan.items.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </ul>

                  <a
                    href="#teklif"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-4 text-base font-semibold transition ${
                      plan.highlighted
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    Teklif İste
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-slate-700">
              <strong className="text-slate-900">Net gerçek:</strong> 2.000 TL
              altı bakım sözleşmelerinde çoğu firma ya bakım yapıyormuş gibi görünür
              ya da raporsuz gezer. Büyük müşteri işinde ucuz değil, sürdürülebilir
              ve ölçülebilir hizmet satar. Fiyat değil güven ve süreklilik sat.
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <Image
                src="/images/services/bakim-servis/alarm-panel-sensor-test-bakim.jpg"
                alt="Alarm paneli ve sensör test bakımı"
                width={1600}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                İşleyiş
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Bakım Sözleşmesi Süreci Nasıl İlerler?
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  {
                    step: "1",
                    title: "Ön Bilgi ve Sistem Analizi",
                    text: "Cihaz sayısı, marka yapısı, lokasyon durumu, mevcut arıza geçmişi ve beklenti seviyesi öğrenilir.",
                  },
                  {
                    step: "2",
                    title: "Keşif ve Envanter Çıkarma",
                    text: "Sahada kamera, kayıt cihazı, alarm paneli, ağ yapısı ve riskli alanlar belirlenir.",
                  },
                  {
                    step: "3",
                    title: "Teklif ve Kapsam Onayı",
                    text: "Bakım sıklığı, uzaktan destek kapsamı, servis önceliği ve raporlama modeli netleştirilir.",
                  },
                  {
                    step: "4",
                    title: "Sözleşme Başlangıcı",
                    text: "Periyodik bakım, arıza takibi, uzaktan izleme ve bakım geçmişi düzenli şekilde yürütülür.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
            <SectionTitle
              eyebrow="18 İl"
              title="Hizmet Verdiğimiz İller"
              description="Odak; aylık bakım sözleşmesi potansiyeli yüksek şehirler. Bu yapı küçük tek seferlik servis yerine daha büyük ve tekrar eden gelir üretir."
            />

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {provinces.map((province) => (
                <span
                  key={province}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {province}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Uzaktan İzleme
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Yerinde Gitmeden Çözülebilen Sorunları Uzaktan Çözüyoruz
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Her servis için araç çıkarmak ölçeklenmez. En kârlı model; uzaktan
                çözülebilecek sorunları sahaya taşımadan kapatmaktır. Bu hem müşteriye
                hız sağlar hem de operasyon verimini artırır.
              </p>

              <ul className="mt-8 grid gap-4">
                <CheckItem>Uzaktan bağlantı ve erişim kontrolü</CheckItem>
                <CheckItem>Kayıt akışı ve kanal kontrolü</CheckItem>
                <CheckItem>Kullanıcı yetki ve şifre problemleri</CheckItem>
                <CheckItem>Temel yazılım / ayar problemlerinin çözümü</CheckItem>
                <CheckItem>Yerinde müdahale gerektiren durumların önceden ayrıştırılması</CheckItem>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <Image
                src="/images/services/bakim-servis/uzaktan-izleme-merkezi-ekranlari.jpg"
                alt="Uzaktan izleme merkezi ekranları ve teknik takip"
                width={1600}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-20">
            <SectionTitle
              eyebrow="Sık Sorulan Sorular"
              title="Bakım Sözleşmesi Hakkında Merak Edilenler"
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
          id="teklif"
          className="border-b border-slate-200 bg-slate-950 text-white scroll-mt-24"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Hemen Teklif Al
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Site veya Fabrikanız İçin Bakım Sözleşmesi Teklifi İsteyin
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Güvenlik kamerası, alarm, yangın alarm ve kayıt sistemleri için
                bakım, servis ve uzaktan izleme teklifinizi hazırlayalım.
                Özellikle aylık bakım yaptırmak isteyen büyük tesislerde doğru
                model sözleşmeli hizmettir.
              </p>

              <ul className="mt-8 space-y-4 text-slate-200">
                <li>✓ Aylık 2.000 TL’den başlayan planlar</li>
                <li>✓ 18 ilde hizmet yapısı</li>
                <li>✓ Site, fabrika, depo ve büyük işletme odaklı</li>
                <li>✓ Bakım + servis + uzaktan izleme paketi</li>
              </ul>
            </div>

           <MaintenanceQuoteForm />
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Firma / Site / Tesis Adı
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Örn: X Residence Yönetimi / ABC Fabrika"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Yetkili Kişi
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Ad Soyad"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="05xx xxx xx xx"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-sm font-semibold"
                    >
                      İl
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Örn: İstanbul"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="facilityType"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Tesis Tipi
                    </label>
                    <select
                      id="facilityType"
                      name="facilityType"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seçiniz
                      </option>
                      <option value="site">Site / Rezidans</option>
                      <option value="fabrika">Fabrika / Üretim Tesisi</option>
                      <option value="depo">Depo / Lojistik Alanı</option>
                      <option value="plaza">Plaza / Ofis Binası</option>
                      <option value="magaza">Mağaza / Zincir Şube</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Kısa Bilgi
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Kamera sayısı, alarm sistemi var mı, kaç blok / kaç bina, mevcut sorunlar ve bakım beklentinizi yazın."
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-red-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-red-700"
                >
                  Bakım Sözleşmesi İçin Talep Gönder
                </button>

                <p className="text-xs leading-6 text-slate-500">
                  Daha hızlı dönüş için sistem kapsamını mümkün olduğunca net yazın.
                  Büyük tesis işlerinde doğru teklif, doğru ön analizle çıkar.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Tek seferlik servis para kazandırır.
                  </h2>
                  <p className="mt-2 max-w-3xl text-slate-600">
                    Ama aylık bakım sözleşmesi daha çok kazandırır. Çünkü recurring
                    gelir üretir, müşteri ömrünü uzatır, rakip girişini zorlaştırır
                    ve kamera + alarm + yangın + servis çapraz satışını açar.
                  </p>
                </div>

                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
                >
                  Kurumsal Görüşme Talep Et
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
