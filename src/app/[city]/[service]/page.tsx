import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export const dynamic = "force-static";
export const dynamicParams = false;

interface PageProps {
  params: Promise<{
    city: string;
    service: string;
  }>;
}

export function generateStaticParams() {
  const paths = [];

  for (const city of cities) {
    for (const service of services) {
      paths.push({
        city: city.slug,
        service: service.slug,
      });
    }
  }

  return paths;
}

const cityDistricts: Record<string, string[]> = {
  istanbul: ["Kadıköy", "Beşiktaş", "Şişli", "Üsküdar", "Pendik", "Bakırköy"],
  ankara: ["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Sincan"],
  izmir: ["Konak", "Karşıyaka", "Bornova", "Buca", "Bayraklı", "Çiğli"],
  bursa: ["Osmangazi", "Nilüfer", "Yıldırım", "İnegöl", "Gemlik", "Mudanya"],
  kocaeli: ["İzmit", "Gebze", "Darıca", "Körfez", "Gölcük", "Başiskele"],
  antalya: ["Muratpaşa", "Kepez", "Konyaaltı", "Alanya", "Manavgat", "Serik"],
  tekirdag: ["Çorlu", "Çerkezköy", "Süleymanpaşa", "Ergene", "Malkara", "Kapaklı"],
  sakarya: ["Adapazarı", "Serdivan", "Erenler", "Arifiye", "Sapanca", "Akyazı"],
  balikesir: ["Altıeylül", "Karesi", "Bandırma", "Edremit", "Ayvalık", "Burhaniye"],
  adana: ["Seyhan", "Yüreğir", "Çukurova", "Sarıçam", "Ceyhan", "Kozan"],
  konya: ["Selçuklu", "Meram", "Karatay", "Ereğli", "Akşehir", "Beyşehir"],
  gaziantep: ["Şehitkamil", "Şahinbey", "Nizip", "İslahiye", "Nurdağı", "Araban"],
  kayseri: ["Melikgazi", "Kocasinan", "Talas", "Develi", "Yahyalı", "İncesu"],
  eskisehir: ["Odunpazarı", "Tepebaşı", "Sivrihisar", "Çifteler", "Alpu", "Mahmudiye"],
  mersin: ["Akdeniz", "Mezitli", "Yenişehir", "Toroslar", "Tarsus", "Erdemli"],
};

const cityDescriptions: Record<string, string> = {
  istanbul:
    "İstanbul'da apartman, site, işyeri, mağaza ve depo projeleri için profesyonel kamera sistemi kurulumu yapıyoruz.",
  ankara:
    "Ankara'da konut, işyeri ve ticari alanlar için keşif, montaj ve devreye alma dahil kamera sistemi hizmeti sunuyoruz.",
  izmir:
    "İzmir'de iç ve dış mekan güvenlik ihtiyaçlarına uygun IP kamera sistemleri kuruyoruz.",
  bursa:
    "Bursa'da fabrika, depo, mağaza ve apartman projelerine uygun kamera sistemleri kurulum hizmeti veriyoruz.",
  kocaeli:
    "Kocaeli'de özellikle fabrika, depo ve sanayi tesisleri için profesyonel güvenlik kamera çözümleri sunuyoruz.",
  antalya:
    "Antalya'da villa, site, otel çevresi ve ticari alanlar için kamera sistemi kurulumu yapıyoruz.",
  tekirdag:
    "Tekirdağ'da sanayi bölgeleri, işyerleri ve apartmanlar için güvenlik kamera kurulumu gerçekleştiriyoruz.",
  sakarya:
    "Sakarya'da ev, işyeri ve site projelerinde anahtar teslim kamera sistemi kurulumu sunuyoruz.",
  balikesir:
    "Balıkesir'de apartman, mağaza, depo ve villa projeleri için güvenlik kamera sistemi kuruyoruz.",
  adana:
    "Adana'da sıcak hava ve dış ortam şartlarına uygun kamera sistemleriyle profesyonel kurulum yapıyoruz.",
  konya:
    "Konya'da işyeri, sanayi tesisi ve konut alanları için güvenlik kamera çözümleri sunuyoruz.",
  gaziantep:
    "Gaziantep'te üretim alanları, depolar ve ticari işletmeler için kamera sistemleri kuruyoruz.",
  kayseri:
    "Kayseri'de fabrika, işyeri ve apartman projelerinde keşif ve montaj dahil kamera kurulumu yapıyoruz.",
  eskisehir:
    "Eskişehir'de apartman, site ve ticari alanlar için uygun maliyetli kamera sistemleri kuruyoruz.",
  mersin:
    "Mersin'de konut, depo, mağaza ve dış mekanlar için güvenlik kamerası kurulumu hizmeti veriyoruz.",
};

function getCameraPackageText(cityName: string) {
  return [
    {
      title: "Küçük Alan Paketi",
      desc: `${cityName} içinde daire, küçük ofis ve butik işletmeler için 2-4 kameralı sistem kurulumu.`,
    },
    {
      title: "Orta Ölçek Paket",
      desc: `${cityName} bölgesinde apartman, mağaza ve orta ölçekli işletmeler için 4-8 kameralı sistem.`,
    },
    {
      title: "Profesyonel Paket",
      desc: `${cityName} içinde depo, fabrika ve büyük alanlar için 8-16 kameralı profesyonel çözüm.`,
    },
  ];
}

export default async function ServicePage({ params }: PageProps) {
  const { city: citySlug, service: serviceSlug } = await params;

  const city = cities.find((c) => c.slug === citySlug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!city || !service) notFound();

  const isCameraPage = service.slug === "kamera-sistemi-kurulumu";
  const districts = cityDistricts[city.slug] || [];
  const cityDescription =
    cityDescriptions[city.slug] ||
    `${city.name} bölgesinde profesyonel ${service.name.toLowerCase()} hizmeti sunuyoruz.`;

  const packages = getCameraPackageText(city.name);

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 20px" }}>
      <section style={{ marginBottom: "40px" }}>
        <div style={{ fontSize: "14px", marginBottom: "12px", color: "#666" }}>
          <Link href="/" style={{ color: "#666", textDecoration: "none" }}>
            Ana Sayfa
          </Link>
          {" / "}
          <span>{city.name}</span>
          {" / "}
          <span>{service.name}</span>
        </div>

        <h1 style={{ fontSize: "42px", lineHeight: 1.15, marginBottom: "16px", color: "#0F2B46" }}>
          {city.name} {service.name}
        </h1>

        <p style={{ fontSize: "22px", lineHeight: 1.5, maxWidth: "900px", marginBottom: "28px" }}>
          {cityDescription} Ücretsiz keşif, ürün seçimi, montaj ve sistem devreye alma hizmeti
          sunuyoruz.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="#teklif"
            style={{
              background: "#34A853",
              color: "#fff",
              padding: "16px 28px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Ücretsiz Teklif Al
          </a>

          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            style={{
              border: "2px solid #0F2B46",
              color: "#0F2B46",
              padding: "14px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            {siteConfig.phone}
          </a>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "16px",
          marginBottom: "48px",
        }}
      >
        {[
          { label: "Tamamlanan Proje", value: "500+" },
          { label: "Sektör Deneyimi", value: "12 Yıl" },
          { label: "Memnuniyet", value: "%100" },
          { label: "Hizmet Bölgeleri", value: "15 Şehir" },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              background: "#F8FAFB",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
            }}
          >
            <div style={{ fontSize: "30px", fontWeight: 800, color: "#0F2B46", marginBottom: "6px" }}>
              {item.value}
            </div>
            <div style={{ color: "#555" }}>{item.label}</div>
          </div>
        ))}
      </section>

      {isCameraPage ? (
        <>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "30px", color: "#0F2B46", marginBottom: "18px" }}>
              {city.name} Kamera Sistemi Kurulumu Hizmetimiz
            </h2>

            <p style={{ fontSize: "18px", lineHeight: 1.8, marginBottom: "18px" }}>
              {city.name} içinde apartman, site, daire, mağaza, ofis, depo ve fabrika gibi farklı
              alanlar için IP kamera sistemleri kuruyoruz. İhtiyaca göre gece görüş, uzaktan mobil
              izleme, ses kayıt desteği, kayıt cihazı ve disk seçimi dahil tüm sistemi anahtar
              teslim devreye alıyoruz.
            </p>

            <p style={{ fontSize: "18px", lineHeight: 1.8 }}>
              Kurulum öncesi keşif yapıyor, alan büyüklüğüne ve kör noktalara göre kamera sayısını
              belirliyor, ardından uygun NVR, hard disk ve gerekiyorsa PoE switch ile sistemi
              tamamlıyoruz.
            </p>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "30px", color: "#0F2B46", marginBottom: "18px" }}>
              Hangi Alanlara Kurulum Yapıyoruz?
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "14px",
              }}
            >
              {[
                "Daire ve müstakil ev",
                "Apartman girişleri",
                "Site çevresi ve ortak alanlar",
                "Mağaza ve dükkanlar",
                "Ofis ve işyerleri",
                "Depo ve fabrika alanları",
                "Otopark ve açık alanlar",
                "Villa çevre güvenliği",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "18px",
                    borderRadius: "14px",
                    background: "#F8FAFB",
                    border: "1px solid #e5e7eb",
                    fontSize: "17px",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "30px", color: "#0F2B46", marginBottom: "18px" }}>
              Örnek Sistem Paketleri
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "18px",
              }}
            >
              {packages.map((item) => (
                <div
                  key={item.title}
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: "16px",
                    padding: "24px",
                    background: "#fff",
                  }}
                >
                  <h3 style={{ fontSize: "22px", color: "#0F2B46", marginBottom: "12px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "17px", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "30px", color: "#0F2B46", marginBottom: "18px" }}>
              {city.name} İçinde Hizmet Verdiğimiz İlçeler
            </h2>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {districts.map((district) => (
                <span
                  key={district}
                  style={{
                    padding: "10px 14px",
                    background: "#EEF4FF",
                    color: "#0F2B46",
                    borderRadius: "999px",
                    fontWeight: 600,
                  }}
                >
                  {district}
                </span>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "30px", color: "#0F2B46", marginBottom: "18px" }}>
              Sık Sorulan Sorular
            </h2>

            <div style={{ display: "grid", gap: "18px" }}>
              {[
                {
                  q: `${city.name} kamera sistemi kurulumu ne kadar sürer?`,
                  a: "Küçük projelerde aynı gün, orta ve büyük projelerde 1-3 gün arasında tamamlanır.",
                },
                {
                  q: "Kaç kamera gerektiğini nasıl belirliyorsunuz?",
                  a: "Alan büyüklüğü, giriş-çıkış noktaları, kör alanlar ve kayıt beklentisine göre keşifte belirliyoruz.",
                },
                {
                  q: "Uzaktan telefondan izleme kuruluyor mu?",
                  a: "Evet. Mobil uygulama ile canlı izleme ve kayıt erişimi kurulum sırasında aktif edilir.",
                },
                {
                  q: "Kayıt cihazı ve hard disk dahil mi?",
                  a: "Evet. Sistem ihtiyacına göre NVR, hard disk ve gerekiyorsa PoE switch dahil çözüm hazırlanır.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: "14px",
                    padding: "20px",
                    background: "#fff",
                  }}
                >
                  <h3 style={{ fontSize: "20px", color: "#0F2B46", marginBottom: "10px" }}>
                    {faq.q}
                  </h3>
                  <p style={{ fontSize: "17px", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="teklif"
            style={{
              background: "#0F2B46",
              color: "#fff",
              padding: "36px",
              borderRadius: "18px",
              marginBottom: "40px",
            }}
          >
            <h2 style={{ fontSize: "32px", marginBottom: "14px" }}>
              {city.name} İçin Ücretsiz Keşif ve Teklif Alın
            </h2>

            <p style={{ fontSize: "18px", lineHeight: 1.7, maxWidth: "850px", marginBottom: "22px" }}>
              {city.name} içinde kamera sistemi kurulumu için hemen bizimle iletişime geçin.
              İhtiyacınıza göre uygun kamera sayısını, kayıt cihazını ve sistem maliyetini netleştirelim.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                style={{
                  background: "#34A853",
                  color: "#fff",
                  padding: "16px 24px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Hemen Ara: {siteConfig.phone}
              </a>

              <a
                href="/iletisim"
                style={{
                  background: "#fff",
                  color: "#0F2B46",
                  padding: "16px 24px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                İletişim Formuna Git
              </a>
            </div>
          </section>
        </>
      ) : (
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "28px", color: "#0F2B46", marginBottom: "18px" }}>
            {city.name} {service.name} Hizmeti
          </h2>

          <p style={{ fontSize: "18px", lineHeight: 1.8, marginBottom: "18px" }}>
            {city.name} içinde profesyonel {service.name.toLowerCase()} hizmeti sunuyoruz.
            Ücretsiz keşif, montaj ve devreye alma ile güvenlik sistemlerinizi kuruyoruz.
          </p>

          <a
            href="/iletisim"
            style={{
              background: "#34A853",
              color: "#fff",
              padding: "14px 22px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Teklif Al
          </a>
        </section>
      )}
    </main>
  );
}
