export interface SeoPackageItem {
  title: string;
  description: string;
}

export interface SeoPackagesContent {
  title: string;
  description: string;
  localContext: string;
  items: SeoPackageItem[];
}

export const packagesContent: Record<string, SeoPackagesContent> = {
  "kamera-sistemi-kurulumu": {
    title: "Örnek sistem paketleri",
    description:
      "{city} içinde farklı ölçeklerdeki projeler için sık tercih edilen kamera sistemi kurulum senaryoları.",
    localContext:
      "{city} içindeki proje büyüklüğüne göre kamera sayısı, kayıt cihazı ve uzaktan erişim altyapısı birlikte planlanır.",
    items: [
      {
        title: "Küçük Alan Paketi",
        description:
          "{city} içinde daire, küçük ofis ve butik işletmeler için 2-4 kameralı sistem kurulumu.",
      },
      {
        title: "Orta Ölçek Paket",
        description:
          "{city} bölgesinde apartman, mağaza ve orta ölçekli işletmeler için 4-8 kameralı sistem.",
      },
      {
        title: "Profesyonel Paket",
        description:
          "{city} içinde depo, fabrika ve büyük alanlar için 8-16 kameralı profesyonel çözüm.",
      },
    ],
  },
  "alarm-sistemi-kurulumu": {
    title: "Örnek alarm sistemi paketleri",
    description:
      "{city} içindeki en yaygın alarm senaryoları için referans paket yapıları aşağıdadır.",
    localContext:
      "{city} içinde kapı, pencere ve geçiş hattı yoğunluğuna göre alarm sistemi kapsamı değişir.",
    items: [
      {
        title: "Temel Konut Paketi",
        description:
          "{city} içinde daire ve küçük konutlar için panel, kontak, dedektör ve dahili siren çözümü.",
      },
      {
        title: "İşyeri Koruma Paketi",
        description:
          "{city} bölgesinde mağaza ve ofisler için çoklu dedektör ve mobil bildirim destekli kurulum.",
      },
      {
        title: "Geniş Alan Paketi",
        description:
          "{city} içinde depo veya çok girişli alanlarda bölümlenebilir alarm senaryoları ve güçlü siren yapısı.",
      },
    ],
  },
  "yangin-alarm-sistemi-kurulumu": {
    title: "Örnek yangın alarm paketleri",
    description:
      "{city} içindeki tipik bina ölçekleri için referans yangın alarm sistemi kurulumları.",
    localContext:
      "{city} içinde yapı tipi ve hacim dağılımı arttıkça algılama ve uyarı senaryosu daha detaylı planlanır.",
    items: [
      {
        title: "Kompakt Bina Paketi",
        description:
          "{city} içinde küçük işletmeler ve apartman ortak alanları için temel algılama ve uyarı çözümü.",
      },
      {
        title: "Kat Bazlı Koruma Paketi",
        description:
          "{city} bölgesinde çok odalı ofis ve ticari alanlar için zon bazlı yangın alarm kurulumu.",
      },
      {
        title: "Geniş Tesis Paketi",
        description:
          "{city} içinde depo, üretim alanı ve çok bölümlü yapılar için ölçeklenebilir yangın alarm çözümü.",
      },
    ],
  },
  "kartli-gecis-sistemi-kurulumu": {
    title: "Örnek geçiş kontrol paketleri",
    description:
      "{city} içindeki farklı giriş tipleri için örnek kartlı geçiş sistemi senaryoları.",
    localContext:
      "{city} içinde tek kapıdan çok noktalı geçiş altyapısına kadar farklı senaryolar için çözüm geliştiriyoruz.",
    items: [
      {
        title: "Tek Kapı Paketi",
        description:
          "{city} içinde küçük ofis veya apartman girişleri için okuyucu, kilit ve kullanıcı tanımlama çözümü.",
      },
      {
        title: "Çok Noktalı Ofis Paketi",
        description:
          "{city} bölgesinde birden fazla kapı ve departman için merkezi geçiş yetkilendirme altyapısı.",
      },
      {
        title: "Turnike Entegre Paket",
        description:
          "{city} içinde personel giriş çıkış takibi gereken alanlar için turnike ve geçiş kontrol entegrasyonu.",
      },
    ],
  },
  "apartman-site-guvenlik-sistemi": {
    title: "Örnek apartman ve site paketleri",
    description:
      "{city} içindeki apartman ve site ölçeklerine göre örnek güvenlik çözümü kurguları.",
    localContext:
      "{city} içinde blok sayısı, otopark yapısı ve ortak alan yoğunluğu apartman ve site projelerinde kurguya doğrudan etki eder.",
    items: [
      {
        title: "Küçük Apartman Paketi",
        description:
          "{city} içinde tek girişli apartmanlar için temel kamera ve giriş güvenliği çözümü.",
      },
      {
        title: "Orta Ölçek Site Paketi",
        description:
          "{city} bölgesinde blok girişleri, otopark ve ortak alanlar için dengeli güvenlik sistemi kurulumu.",
      },
      {
        title: "Çevre Güvenliği Paketi",
        description:
          "{city} içinde geniş açık alanlı siteler için çevre kamera, kayıt ve geçiş kontrol kombinasyonu.",
      },
    ],
  },
  "isyeri-guvenlik-sistemi": {
    title: "Örnek işyeri güvenlik paketleri",
    description:
      "{city} içindeki işletme ölçeklerine göre örnek güvenlik sistemi kurguları.",
    localContext:
      "{city} içinde işyeri güvenliği planlanırken satış alanı, kasa noktası ve depo erişimi birlikte değerlendirilir.",
    items: [
      {
        title: "Mağaza Paketi",
        description:
          "{city} içinde satış alanı ve giriş takibi gereken mağazalar için hızlı kurulumlu çözüm.",
      },
      {
        title: "Ofis Paketi",
        description:
          "{city} bölgesinde ofis, toplantı alanı ve giriş kontrol ihtiyacı olan işletmeler için kurulum paketi.",
      },
      {
        title: "Çok Bölümlü İşletme Paketi",
        description:
          "{city} içinde satış alanı, depo ve personel bölümü birlikte bulunan işletmeler için kapsamlı güvenlik çözümü.",
      },
    ],
  },
  "fabrika-depo-guvenlik-sistemi": {
    title: "Örnek fabrika ve depo paketleri",
    description:
      "{city} içindeki sanayi tipi projeler için örnek güvenlik sistemi kurguları.",
    localContext:
      "{city} içinde depo koridorları, yükleme alanları ve çevre sınırı ne kadar büyürse sistem ölçeği de buna göre tasarlanır.",
    items: [
      {
        title: "Kompakt Depo Paketi",
        description:
          "{city} içinde tek depo veya küçük lojistik alanlar için giriş ve raf hattı takibi çözümü.",
      },
      {
        title: "Üretim Tesisi Paketi",
        description:
          "{city} bölgesinde üretim alanı, sevkiyat noktası ve çevre güvenliğini birlikte yöneten kurulum.",
      },
      {
        title: "Geniş Saha Paketi",
        description:
          "{city} içinde çok kapılı fabrika veya depo projeleri için ölçeklenebilir güvenlik sistemi altyapısı.",
      },
    ],
  },
  "bakim-servis-uzaktan-izleme": {
    title: "Örnek bakım ve servis paketleri",
    description:
      "{city} içindeki mevcut sistemler için en sık talep edilen bakım ve servis kapsamları.",
    localContext:
      "{city} içinde servis taleplerinde arızanın kaynağı, kayıt durumu ve uzaktan erişim yapısı birlikte değerlendirilir.",
    items: [
      {
        title: "Temel Kontrol Paketi",
        description:
          "{city} içinde mevcut sistemin genel durum kontrolü, kayıt ve bağlantı testlerini kapsar.",
      },
      {
        title: "Arıza Giderme Paketi",
        description:
          "{city} bölgesinde görüntü, kayıt veya erişim sorunu yaşayan sistemler için müdahale odaklı servis.",
      },
      {
        title: "Periyodik Bakım Paketi",
        description:
          "{city} içinde düzenli kontrol, temizlik, bağlantı testi ve kullanıcı desteği gereken sistemler için bakım planı.",
      },
    ],
  },
};
