import Image from "next/image";
import {
  CheckCircle,
  Phone,
  Shield,
  Camera,
  MonitorSmartphone,
  MapPin,
  Star,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import IstanbulIpCameraQuoteForm from "@/components/IstanbulIpCameraQuoteFohrm";

export const metadata = {
  title: "İstanbul IP Kamera Montajı | Hızlı Keşif ve Profesyonel Kurulum",
  description:
    "İstanbul IP kamera montajı hizmeti. Ev, işyeri, mağaza ve depo için profesyonel IP kamera kurulumu, uzaktan izleme ayarı ve hızlı teklif.",
  alternates: {
    canonical: "https://www.guvenlikservisi.com/teklif/istanbul-ip-kamera-montaji",
  },
  openGraph: {
    title: "İstanbul IP Kamera Montajı | Hızlı Keşif ve Profesyonel Kurulum",
    description:
      "İstanbul IP kamera montajı hizmeti. Ev, işyeri, mağaza ve depo için profesyonel IP kamera kurulumu, uzaktan izleme ayarı ve hızlı teklif.",
    url: "https://www.guvenlikservisi.com/teklif/istanbul-ip-kamera-montaji",
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
          images: [{ url: "https://www.guvenlikservisi.com/images/landing/istanbul-ip-kamera-hero.webp", width: 1157, height: 631, alt: "İstanbul IP Kamera Montajı" }],
  },
};

const districts = [
  "Kadıköy",
  "Üsküdar",
  "Ataşehir",
  "Maltepe",
  "Kartal",
  "Pendik",
  "Şişli",
  "Beşiktaş",
  "Bakırköy",
  "Başakşehir",
  "Beylikdüzü",
  "Avcılar",
];

const packages = [
  {
    name: "Başlangıç Paket",
    price: "15.000 TL'den başlayan",
    featured: false,
    items: [
      "2-4 Adet 4MP IP Kamera",
      "NVR kayıt cihazı",
      "Montaj dahil",
      "Mobil uygulama kurulumu",
      "Uzaktan izleme ayarı",
      "1 yıl birebir değişim garantisi",
      "İhtiyaca göre ses kayıt eklenebilir",
    ],
  },
  {
    name: "İşyeri Paket",
    price: "25.000 TL'den başlayan",
    featured: true,
    badge: "En Çok Tercih Edilen",
    items: [
      "4-8 Adet 4MP Gece Görüşlü IP Kamera",
      "NVR kayıt cihazı",
      "Montaj ve devreye alma",
      "Telefon + tablet erişimi",
      "Kayıt optimizasyonu",
      "1 bakım kontrolü",
      "1 yıl birebir değişim garantisi",
      "İhtiyaca göre ses kayıt eklenebilir",
    ],
  },
  {
    name: "Kurumsal Paket",
    price: "Özel Teklif",
    featured: false,
    items: [
      "8+ IP Kamera",
      "Yüksek kapasiteli kayıt sistemi",
      "Keşif ve proje planlama",
      "Profesyonel montaj",
      "Çoklu kullanıcı erişimi",
      "Bakım anlaşması opsiyonu",
      "Kurumsal destek",
      "1 yıl birebir değişim garantisi",
      "İhtiyaca göre ses kayıt eklenebilir",
    ],
  },
];

const faqs = [
  {
    q: "İstanbul IP kamera montajı ne kadar sürer?",
    a: "4-5 kameraya kadarki montajlarda kurulum ve devreye alma çoğu zaman aynı gün tamamlanır. Daha büyük projelerde keşif sonrası net süre verilir.",
  },
  {
    q: "İstanbul’un hangi bölgelerine hizmet veriyorsunuz?",
    a: "İstanbul’un hem Avrupa hem de Anadolu Yakası genelinde IP kamera montajı ve güvenlik sistemi kurulumu hizmeti veriyoruz. Kadıköy, Üsküdar, Ataşehir, Maltepe, Kartal, Pendik, Şişli, Beşiktaş, Bakırköy, Başakşehir, Beylikdüzü, Avcılar ve çevre ilçelerde düzenli olarak kurulum yapıyoruz. Projenin büyüklüğüne ve konumunuza göre ücretsiz keşif planlanır ve çoğu durumda ertesi gün ekip yönlendirilir. Küçük ölçekli ev ve işyeri kurulumları genellikle aynı gün tamamlanabilir. 8-12 kameralı sistemlerin montajı 2 gün sürebilir.",
  },
  {
    q: "Telefondan canlı izleme kuruluyor mu?",
    a: "Evet. Kurduğumuz kamera sistemlerinde telefon üzerinden canlı izleme, kayıt izleme ve olay bildirimleri aktif edilir. Çoğu projede Hikvision kayıt cihazı ve Hik-Connect mobil uygulaması kullanılarak sistem telefon, tablet ve bilgisayardan erişilebilir şekilde teslim edilir. Kurulum sırasında uygulama kurulumu yapılır, uzaktan bağlantı ayarlanır ve kullanıcıya nasıl kullanılacağı gösterilir.",
  },
  {
    q: "IP kamera mı analog kamera mı daha mantıklı?",
    a: "Yeni kurulumların büyük bölümünde IP kamera sistemi daha avantajlıdır. IP kameralar analog sistemlere göre daha yüksek çözünürlük, daha net gece görüntüsü ve daha gelişmiş akıllı özellikler sunar. İnsan algılama, araç algılama, mobil bildirim ve uzaktan erişim gibi özellikler IP sistemlerde çok daha stabil çalışır. Bu yüzden ilk kurulum maliyeti analog sistemlere göre biraz daha yüksek olabilir. Ancak görüntü kalitesi, uzaktan erişim kolaylığı ve gelecekte sisteme yeni kamera ekleme esnekliği nedeniyle çoğu ev, işyeri ve mağaza için IP kamera sistemi uzun vadede daha mantıklı bir yatırım olur.",
  },
  {
    q: "Net fiyat nasıl belirleniyor?",
    a: "Kamera sayısı, kablolama mesafesi, kayıt süresi, çözünürlük ve montaj zorluğuna göre fiyat değişir. En doğru fiyat keşif sonrası verilir.",
  },
];

const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Merhaba, İstanbul IP kamera montajı için bilgi ve fiyat almak istiyorum."
)}`;

export default function IstanbulIpKameraMontajiPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "İstanbul IP Kamera Montajı",
    provider: {
      "@type": "LocalBusiness",
      name: "Güvenlik Servisi",
      telephone: siteConfig.phone,
      areaServed: "İstanbul",
      url: "https://www.guvenlikservisi.com/teklif/istanbul-ip-kamera-montaji",
    },
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    serviceType: "IP kamera montajı",
  };

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/landing/istanbul-ip-kamera-hero.webp"
            alt="İstanbul IP kamera montajı"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <div className="mb-4 flex flex-wrap gap-2 text-sm font-medium">
              <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                İstanbul içi hızlı hizmet
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                Aynı gün keşif
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                Telefonla canlı izleme
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-5xl">
              İstanbul IP Kamera Montajı
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              Ev, işyeri, mağaza ve depo için profesyonel IP kamera kurulumu.
              İstanbul genelinde hızlı keşif, doğru ürün seçimi ve uzaktan
              izlemeye hazır anahtar teslim montaj.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#teklif-formu"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-600"
              >
                Hemen Teklif Al
              </a>

              <a
                href={phoneHref}
                data-event="phone_click"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                <Phone size={18} />
                {siteConfig.phone}
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-extrabold">500+</div>
                <div className="mt-1 text-sm text-slate-300">Tamamlanan proje</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-extrabold">12+ Yıl</div>
                <div className="mt-1 text-sm text-slate-300">Saha tecrübesi</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-extrabold">7/24</div>
                <div className="mt-1 text-sm text-slate-300">Uzaktan izleme altyapısı</div>
              </div>
            </div>
          </div>

          <IstanbulIpCameraQuoteForm districts={districts} />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="mb-3 inline-flex rounded-xl bg-slate-100 p-3">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Kritik Alanlar Görünmez</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Yanlış kamera açısı ve eksik planlama yüzünden giriş, kasa,
                depo, bina çevresi veya otopark tam izlenemez.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="mb-3 inline-flex rounded-xl bg-slate-100 p-3">
                <MonitorSmartphone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Telefondan İzleme Sorunlu Olur</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Kurulum düzgün yapılmazsa uzaktan izleme, kayıt erişimi ve
                bildirim sistemi stabil çalışmaz.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="mb-3 inline-flex rounded-xl bg-slate-100 p-3">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Ucuz Kurulum Sonradan Pahalıya Patlar</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Kalitesiz kablolama, yanlış cihaz seçimi ve eksik altyapı
                yüzünden tekrar servis ve ek maliyet çıkar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white">
              Profesyonel kurulum
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              İstanbul’da Profesyonel IP Kamera Sistemi Kurulumu
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              İhtiyaca göre kamera noktaları belirlenir, kayıt cihazı ve
              depolama planlanır, kablolama altyapısı hazırlanır ve sistem
              telefonunuzdan izlemeye hazır şekilde teslim edilir. Amaç sadece
              kamera takmak değil, çalışan ve güvenilir sistem kurmaktır.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "2 MP / 4 MP / 5 MP IP kamera seçenekleri",
                "Gece görüşü ve akıllı hareket algılama",
                "NVR kayıt cihazı kurulumu",
                "Mobil uygulama ile canlı ve kayıt izleme",
                "PoE altyapı ile düzenli ve stabil kurulum",
                "Ev, işyeri, mağaza ve depo çözümleri",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/landing/ip-kamera-kurulum-detay.webp"
                alt="IP kamera kurulum detayı"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/landing/ip-kamera-gece-gorus.png"
                alt="Gündüz ve gece kamera görüntü kalitesi örneği"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-900">
              Net görüntü
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Gündüz ve Gece Net Görüntü Alın
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Kamera sistemi sadece kayıt almak için değil, olay anında yüz,
              giriş, araç ve hareket detaylarını net görmek için kurulur. Doğru
              kamera, doğru açı ve doğru kayıt yapısı ile sistem gerçekten işe
              yarar.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Gece görüşünde daha net izleme",
                "Giriş ve kritik alanlarda daha doğru konumlandırma",
                "Kayıt izlerken detay kaybını azaltan yapı",
                "Ev, mağaza, ofis ve depo için uygun kamera seçimi",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white">
                Akıllı algılama
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                İnsan ve Hareket Algılama Demoları
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Modern IP kamera sistemleri sadece görüntü kaydetmez. İnsan ve
                hareket algılama ile yanlış alarmları azaltır, daha anlamlı
                bildirim üretir ve gerçekten işe yarayan güvenlik sağlar.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "İnsan algılama ile gereksiz bildirimleri azaltır",
                  "Akıllı olay senaryoları ile daha verimli izleme sağlar",
                  "Telefon uygulamasına daha anlamlı anlık uyarılar gönderir",
                  "İşyeri, mağaza ve depo için daha kullanışlı güvenlik deneyimi sunar",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="border-b border-slate-200 px-4 py-3 text-sm font-bold text-slate-800">
                  Gerçek Kurulum Görüntüsü – İnsan Algılama
                </div>
                <video className="w-full" muted loop playsInline controls preload="none">
                  <source
                    src="/videos/insan-algilama-demo-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="border-b border-slate-200 px-4 py-3 text-sm font-bold text-slate-800">
                  Gerçek Kurulum Görüntüsü – Hareket Halinde Plaka Netliği
                </div>
                <video className="w-full" muted loop playsInline controls preload="none">
                  <source
                    src="/videos/Hareketli-Arac-plaka-gorus-demosu.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              İstanbul IP Kamera Kurulum Paketleri
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Fiyat, kamera sayısı, kayıt süresi, kablolama ve montaj zorluğuna
              göre değişir. Aşağıdaki paketler başlangıç referansı içindir.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-3xl border p-6 shadow-sm ${
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

                <h3 className="text-2xl font-extrabold">{pkg.name}</h3>
                <div className="mt-3 text-2xl font-bold">{pkg.price}</div>

                <div className="mt-6 space-y-3">
                  {pkg.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          pkg.featured ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      />
                      <span
                        className={`text-sm ${
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
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-bold transition ${
                    pkg.featured
                      ? "bg-white text-slate-950 hover:bg-slate-100"
                      : "bg-slate-950 text-white hover:bg-slate-800"
                  }`}
                >
                  Teklif Al
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                İstanbul’un Birçok İlçesinde IP Kamera Montajı
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                Avrupa ve Anadolu Yakası genelinde proje bazlı hizmet veriyoruz.
                İlçeye, mekan tipine ve sistem büyüklüğüne göre keşif planı
                oluşturuyoruz.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {districts.map((district) => (
                  <div
                    key={district}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100"
                  >
                    <MapPin className="h-4 w-4 text-emerald-400" />
                    {district}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/landing/uzaktan-izleme-mobil.webp"
                  alt="Telefondan uzaktan izleme"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Gerçek Uygulama, Gerçek Sonuç
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Kamera kurulumunda önemli olan sadece ürün değil, mekanın yapısına uygun
              doğru yerleşim ve sorunsuz teslimdir.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/landing/ic-ortam-goruntu-demo.webp"
                  alt="Mağaza için IP kamera referans kurulumu"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-3xl border border-slate-200 bg-white p-8">
              <h3 className="text-2xl font-extrabold">
                Mağaza, Ofis ve Depo İçin Uygun Yerleşim
              </h3>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Giriş alanı, kasa noktası, raf araları, personel alanı ve dış cephe
                gibi kritik bölgeler doğru planlandığında sistem gerçek güvenlik sağlar.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Kritik noktalar için doğru kamera açısı",
                  "Kablo ve cihaz yerleşiminde düzenli kurulum",
                  "Uzaktan izleme ve kayıt altyapısının eksiksiz teslimi",
                  "İstanbul içi keşif ve projeye göre sistem önerisi",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#teklif-formu"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800"
                >
                  Teklif Al
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_click"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 font-bold text-white transition hover:bg-emerald-600"
                >
                  WhatsApp’tan Yaz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Müşteriler Neden Bizi Tercih Ediyor?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              İnsanlar kamera değil, çalışan sistem istiyor. Satış değil sonuç
              odaklı ilerliyoruz.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                text: "Mağazamız için IP kamera montajı yaptırdık. Görüş açıları doğru ayarlandı, uzaktan izleme sorunsuz çalışıyor.",
                name: "Murat A.",
                role: "İstanbul / Mağaza Sahibi",
              },
              {
                text: "Ofisimize 6 kameralı sistem kuruldu. İş temizdi, teslim sonrası telefon bağlantısı da eksiksiz yapıldı.",
                name: "Selin T.",
                role: "İstanbul / Ofis Yöneticisi",
              },
              {
                text: "Depo alanı için kurulum yaptırdık. Giriş çıkış ve raf koridorlarını net izleyebiliyoruz.",
                name: "Yusuf K.",
                role: "İstanbul / Depo İşletmecisi",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm leading-7 text-slate-700">“{item.text}”</p>
                <div className="mt-5">
                  <div className="font-bold">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Sık Sorulan Sorular
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-bold">
                  {faq.q}
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-500 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                İstanbul IP Kamera Montajı İçin Hemen Teklif Alın
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-emerald-50">
                Formu doldurun ya da direkt WhatsApp’tan yazın. İhtiyaca uygun
                sistemi belirleyip hızlıca dönüş sağlayalım.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_click"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 font-bold text-emerald-600 transition hover:bg-emerald-50"
              >
                WhatsApp’tan Yaz
              </a>

              <a
                href={phoneHref}
                data-event="phone_click"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                <Phone size={18} />
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-3 shadow-2xl md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={phoneHref}
            data-event="phone_click"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white"
          >
            <Phone size={16} />
            Hemen Ara
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_click"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-white"
          >
            WhatsApp Yaz
          </a>
        </div>
      </div>

      <div className="h-24 md:hidden" />
    </main>
  );
}
