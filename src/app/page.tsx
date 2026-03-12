import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Camera,
  Bell,
  Flame,
  CreditCard,
  Wrench,
  MapPin,
  ArrowRight,
  Building2,
  Phone,
  CheckCircle,
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { getCityPath } from "@/lib/routes";
import { siteConfig } from "@/data/site-config";
import { cities } from "@/data/cities";
import {
  generateLocalBusinessSchema,
  generateAggregateRatingSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Güvenlik Sistemi Kurulumu | Kamera, Alarm, Yangın ve Geçiş Sistemleri",
  description:
    "Profesyonel güvenlik kamera sistemi kurulumu, alarm sistemi kurulumu, yangın alarm ve kartlı geçiş çözümleri. Ücretsiz keşif, hızlı teklif ve anahtar teslim montaj.",
  alternates: { canonical: "https://guvenlikservisi.com" },
  openGraph: {
    title:
      "Güvenlik Sistemi Kurulumu | Kamera, Alarm, Yangın ve Geçiş Sistemleri",
    description:
      "Kamera sistemi, alarm sistemi, yangın alarmı ve kartlı geçiş kurulumu için profesyonel keşif ve anahtar teslim montaj hizmeti.",
    url: "https://guvenlikservisi.com",
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const hizmetler = [
  {
    icon: <Camera size={28} />,
    title: "Kamera Sistemi Kurulumu",
    description:
      "IP kamera, gece görüş, mobil izleme, kayıt cihazı ve disk dahil profesyonel güvenlik kamera sistemleri.",
    href: "/kamera-sistemi-kurulumu",
  },
  {
    icon: <Bell size={28} />,
    title: "Alarm Sistemi Kurulumu",
    description:
      "Kablolu ve kablosuz alarm çözümleri ile ev, işyeri, mağaza ve depo güvenliği.",
    href: "/alarm-sistemi-kurulumu",
  },
  {
    icon: <Flame size={28} />,
    title: "Yangın Alarm Sistemi",
    description:
      "İhtiyaca uygun yangın algılama ve alarm çözümleri ile daha güvenli yapılar.",
    href: "/yangin-alarm-sistemi-kurulumu",
  },
  {
    icon: <CreditCard size={28} />,
    title: "Kartlı Geçiş Sistemi",
    description:
      "Ofis, apartman, site ve işletmeler için kartlı geçiş, şifreli giriş ve kontrollü erişim çözümleri.",
    href: "/kartli-gecis-sistemi-kurulumu",
  },
  {
    icon: <Shield size={28} />,
    title: "Apartman ve Site Güvenliği",
    description:
      "Apartman girişleri, ortak alanlar, çevre güvenliği ve izleme altyapısı için entegre çözümler.",
    href: "/apartman-site-guvenlik-sistemi",
  },
  {
    icon: <Building2 size={28} />,
    title: "Fabrika ve Depo Güvenliği",
    description:
      "Geniş alanlarda kamera, kayıt, alarm ve erişim kontrolünü birlikte planlayan sistemler.",
    href: "/fabrika-depo-guvenlik-sistemi",
  },
  {
    icon: <Shield size={28} />,
    title: "İşyeri Güvenlik Sistemi",
    description:
      "Mağaza, ofis, showroom ve ticari alanlar için güvenlik altyapısının doğru planlanması ve kurulumu.",
    href: "/isyeri-guvenlik-sistemi",
  },
  {
    icon: <Wrench size={28} />,
    title: "Bakım, Servis ve Uzaktan İzleme",
    description:
      "Mevcut sistemlerin bakım, arıza tespiti, uzaktan erişim ve performans iyileştirme hizmetleri.",
    href: "/bakim-servis-uzaktan-izleme",
  },
];

const oneCikanAlanlar = [
  "Apartman ve site girişleri",
  "Villa ve müstakil evler",
  "Mağaza ve dükkanlar",
  "Ofis ve plazalar",
  "Depo ve üretim alanları",
  "Fabrika ve sanayi tesisleri",
  "Otopark ve açık alanlar",
  "Kartlı geçiş gereken işletmeler",
];

const anaSayfaFaq = [
  {
    question: "Ücretsiz keşif gerçekten ücretsiz mi?",
    answer:
      "Evet. Keşif tamamen ücretsizdir. Alanı inceliyor, ihtiyacı belirliyor ve size uygun çözüm ile teklif hazırlıyoruz.",
  },
  {
    question: "Hangi şehirlere hizmet veriyorsunuz?",
    answer: `Şu anda aktif olarak ${siteConfig.serviceCityCount} şehirde hizmet veriyoruz: ${siteConfig.serviceCities.join(
      ", "
    )}.`,
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer:
      "Küçük projeler genelde aynı gün tamamlanır. Orta ölçekli projelerde 1-2 gün, daha büyük projelerde ise keşif sonrası net süre paylaşılır.",
  },
  {
    question: "Telefondan uzaktan izleme kuruluyor mu?",
    answer:
      "Evet. Uygun sistemlerde mobil uygulama üzerinden canlı izleme ve kayıt erişimi kurulum sırasında aktif edilir.",
  },
  {
    question: "Garanti ve bakım desteği var mı?",
    answer:
      "Kurulan sistemin kapsamına göre ürün ve işçilik desteği sağlıyoruz. Ayrıca isteğe bağlı bakım ve servis desteği de veriyoruz.",
  },
];

const testimonials = [
  {
    text: "Ofisimize kurulan kamera sistemi temiz işçilikle tamamlandı. Telefondan izleme kurulumu da sorunsuz yapıldı.",
    name: "Ahmet Y.",
    role: "İstanbul / E-ticaret Firması",
    rating: 5,
  },
  {
    text: "Sitemize kamera ve geçiş sistemi kuruldu. Keşif aşamasından montaja kadar süreç net ve profesyoneldi.",
    name: "Fatma K.",
    role: "Bursa / Site Yönetimi",
    rating: 5,
  },
  {
    text: "Depo alanımız için kurulan sistemle kör noktalar kapandı. Ekibin saha tecrübesi fark yaratıyor.",
    name: "Mehmet S.",
    role: "Kocaeli / Depo İşletmesi",
    rating: 5,
  },
];

export default function AnaSayfa() {
  const lbSchema = generateLocalBusinessSchema();
  const ratingSchema = generateAggregateRatingSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />

      <HeroSection
        title="Profesyonel Güvenlik Sistemi Kurulumu"
        subtitle="Kamera sistemi kurulumu, alarm sistemi kurulumu, yangın alarm çözümleri ve kartlı geçiş altyapısı için profesyonel keşif, doğru ürün seçimi ve anahtar teslim montaj hizmeti."
        ctaLabel="Ücretsiz Teklif Al"
        ctaHref="/iletisim"
      />

      <StatsBar />

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              Güvenlik Sistemlerinde Doğru Kurulum, Doğru Sonuç
            </h2>
            <p className="text-text-light text-sm sm:text-base leading-relaxed">
              Güvenlik sistemlerinde en büyük hata sadece ürün fiyatına bakmaktır.
              Asıl farkı yaratan şey doğru keşif, doğru kamera noktaları, uygun kayıt
              altyapısı ve temiz montajdır. Biz sadece ürün satmıyor, alanın ihtiyacına
              göre çalışan bir sistem kuruyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Ücretsiz Keşif",
                desc: "Alanı görmeden ezbere sistem önermiyoruz.",
              },
              {
                title: "Doğru Ürün Seçimi",
                desc: "İhtiyaca göre kamera, kayıt cihazı ve ekipmanı belirliyoruz.",
              },
              {
                title: "Profesyonel Montaj",
                desc: "Kablolama, açı ve kapsama planını sahaya göre kuruyoruz.",
              },
              {
                title: "Satış Sonrası Destek",
                desc: "Kurulum sonrası da sistemi çalışır durumda tutuyoruz.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-surface p-5"
              >
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-center text-text-light mb-12 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Kamera kurulumu, alarm sistemi, yangın alarmı, kartlı geçiş, bakım ve
            işletme güvenliği dahil farklı ölçeklerde projelere uygun çözümler sunuyoruz.
            Amaç ürün itelemek değil, çalışan ve uzun ömürlü sistem kurmaktır.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hizmetler.map((hizmet) => (
              <Link
                key={hizmet.href}
                href={hizmet.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                  {hizmet.icon}
                </div>

                <h3 className="font-bold text-primary text-base mb-2">
                  {hizmet.title}
                </h3>

                <p className="text-text-light text-sm leading-relaxed mb-4">
                  {hizmet.description}
                </p>

                <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all">
                  Detaylı Bilgi <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSection bgClass="bg-white" />

      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-5">
                Hangi Alanlara Kurulum Yapıyoruz?
              </h2>
              <p className="text-text-light text-sm sm:text-base leading-relaxed mb-6">
                Her alanın güvenlik ihtiyacı farklıdır. Apartman girişinde ihtiyaç duyulan
                sistem ile fabrika sahasında gereken çözüm aynı değildir. Bu yüzden her
                projeyi alanın kullanım şekline, risk seviyesine ve izleme beklentisine göre
                planlıyoruz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {oneCikanAlanlar.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
                  >
                    <CheckCircle size={18} className="text-cta shrink-0" />
                    <span className="text-sm text-primary font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                Neden Profesyonel Kurulum Önemli?
              </h3>

              <div className="space-y-4 text-sm text-text-light leading-relaxed">
                <p>
                  Yanlış kamera açısı, yetersiz kayıt süresi, kötü kablolama ve yanlış ürün
                  seçimi yüzünden birçok sistem olay anında işe yaramaz hale gelir.
                </p>
                <p>
                  Biz kurulum öncesinde kör noktaları, giriş-çıkışları, gece görüş ihtiyacını,
                  kayıt süresini ve uzaktan erişim beklentisini netleştirerek sistem öneriyoruz.
                </p>
                <p>
                  Bu sayede sadece çalışan değil, gerçekten işe yarayan güvenlik altyapısı
                  kurulmuş olur.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/kamera-sistemi-kurulumu"
                  className="inline-flex items-center gap-2 rounded-lg bg-cta px-4 py-3 text-white font-semibold hover:opacity-90 transition"
                >
                  Kamera Sistemi
                </Link>
                <Link
                  href="/alarm-sistemi-kurulumu"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-primary font-semibold hover:bg-surface transition"
                >
                  Alarm Sistemi
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-4">
            Hizmet Verdiğimiz Şehirler
          </h2>

          <p className="text-center text-text-light mb-10 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Şu anda aktif olarak {siteConfig.serviceCityCount} şehirde hizmet veriyoruz.
            Şehir sayısını şişirmek yerine gerçekten hizmet verebildiğimiz bölgelerde
            güçlü saha operasyonu kuruyoruz.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.flatMap((city) => {
              const href = getCityPath(city.slug);

              if (!href) {
                return [];
              }

              return (
                <Link
                  key={city.slug}
                  href={href}
                  className="flex flex-col items-center gap-2 p-4 bg-surface rounded-xl hover:bg-accent/10 hover:text-accent transition-colors text-center group border border-transparent hover:border-accent/20"
                >
                  <MapPin size={20} className="text-accent" />
                  <span className="font-semibold text-primary text-sm group-hover:text-accent">
                    {city.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              Hızlı Teklif Almak İçin Ne Yapmalısınız?
            </h2>
            <p className="text-text-light text-sm sm:text-base leading-relaxed">
              Alan tipi, kamera ihtiyacı, kayıt beklentisi ve erişim senaryosu birkaç temel
              bilgiyle netleşir. İletişime geçtiğinizde size gereksiz ürün değil, uygun çözüm
              öneriyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone size={22} />,
                title: "Bize Ulaşın",
                desc: "Telefon veya form ile bize alanınız ve ihtiyacınız hakkında kısa bilgi verin.",
              },
              {
                icon: <MapPin size={22} />,
                title: "Keşif Planlayalım",
                desc: "Gerekirse yerinde keşif yapalım ve sistem ihtiyaçlarını netleştirelim.",
              },
              {
                icon: <Shield size={22} />,
                title: "Doğru Sistemi Kuralım",
                desc: "Onay sonrası montajı yapalım, sistemi test edip teslim edelim.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white border border-gray-200 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  {item.icon}
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TestimonialsSection testimonials={testimonials} />

      <FAQSection items={anaSayfaFaq} />

      <CTASection
        title="Ücretsiz Keşif ve Hızlı Teklif Alın"
        subtitle="Kamera sistemi, alarm sistemi veya geçiş kontrol projeniz için hemen iletişime geçin. İhtiyaca göre doğru sistemi birlikte belirleyelim."
      />
    </>
  );
}
