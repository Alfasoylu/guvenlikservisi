// =========================================================
// İstanbul Para Sayfaları — Fiyat & Kapsam Kademeleri
// =========================================================
// Kesin fiyat gösterilmez; kapsam farkı ve "ücretsiz keşif"
// framing ile dönüşüm odaklı tier yapısı.
// =========================================================

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  badge?: string;          // "En Popüler" gibi
  tagline: string;         // 1 satır açıklama
  targetAudience: string;  // "Küçük işletmeler ve ev kullanıcıları"
  rangeLabel: string;      // "Giriş" | "Standart" | "Kapsamlı"
  priceNote: string;       // "Fiyat aralığı keşif sonrası netleşir"
  features: PricingFeature[];
  cta: string;
  whatsappText: string;
}

export interface ServicePricingData {
  title: string;
  description: string;
  disclaimer: string;
  tiers: [PricingTier, PricingTier, PricingTier];
}

// =========================================================
// HİZMET BAZLI FİYAT KADEMELERİ
// =========================================================

export const istanbulServicePricing: Record<string, ServicePricingData> = {
  "kamera-sistemi-kurulumu": {
    title: "Kamera Sistemi Kapsam Seçenekleri",
    description:
      "Her projenin ihtiyacı farklı. Aşağıdaki kapsam kademeleri fikir vermek içindir; kesin fiyat ve sistem tasarımı ücretsiz keşif sonrası netleşir.",
    disclaimer:
      "Fiyatlar kamera adedi, kablo altyapısı ve NVR kapasitesine göre değişir. Ücretsiz keşif için bizimle iletişime geçin.",
    tiers: [
      {
        name: "Giriş",
        tagline: "Temel güvenlik ihtiyaçları için yeterli",
        targetAudience: "Küçük dükkan, daire ve küçük ofisler",
        rangeLabel: "Giriş",
        priceNote: "4–8 kamera",
        features: [
          { text: "4–8 adet IP kamera", included: true },
          { text: "Standart çözünürlük (2MP)", included: true },
          { text: "Gece görüş kabiliyeti", included: true },
          { text: "Temel NVR kayıt cihazı", included: true },
          { text: "Mobil uygulama erişimi", included: true },
          { text: "Profesyonel montaj ve kablolama", included: true },
          { text: "Yüksek çözünürlük (4MP+)", included: false },
          { text: "Uzaktan izleme merkezi kurulumu", included: false },
          { text: "Araç plaka tanıma kamera", included: false },
        ],
        cta: "Keşif Planla",
        whatsappText: "Giriş seviye kamera sistemi için ücretsiz keşif ve fiyat almak istiyorum.",
      },
      {
        name: "Standart",
        badge: "En Çok Tercih Edilen",
        tagline: "İşletme ve site güvenliği için dengeli çözüm",
        targetAudience: "Mağaza, ofis, apartman ve küçük siteler",
        rangeLabel: "Standart",
        priceNote: "8–16 kamera",
        features: [
          { text: "8–16 adet IP kamera", included: true },
          { text: "Yüksek çözünürlük (4MP)", included: true },
          { text: "Gelişmiş gece görüş", included: true },
          { text: "Kapasiteli NVR ve disk", included: true },
          { text: "Mobil ve PC erişimi", included: true },
          { text: "Profesyonel montaj ve kablolama", included: true },
          { text: "Görünmez kablolama uygulaması", included: true },
          { text: "Uzaktan izleme merkezi kurulumu", included: false },
          { text: "Araç plaka tanıma kamera", included: false },
        ],
        cta: "Hızlı Teklif Al",
        whatsappText: "Standart kapsam kamera sistemi için ücretsiz keşif ve teklif istiyorum.",
      },
      {
        name: "Kapsamlı",
        tagline: "Depo, fabrika ve büyük site projeleri",
        targetAudience: "Fabrika, depo, lojistik tesisi ve büyük siteler",
        rangeLabel: "Kapsamlı",
        priceNote: "16+ kamera",
        features: [
          { text: "16+ adet yüksek çözünürlük kamera", included: true },
          { text: "4K veya fisheye kamera seçeneği", included: true },
          { text: "Geniş alan / uzun mesafe objektif", included: true },
          { text: "Çoklu NVR ve redundant disk yapısı", included: true },
          { text: "Merkezi izleme odası düzenlemesi", included: true },
          { text: "Araç plaka tanıma sistemi", included: true },
          { text: "Uzaktan bağlantı altyapısı", included: true },
          { text: "Bakım sözleşmesi ile öncelikli servis", included: true },
          { text: "Proje dokümantasyonu ve teknik çizim", included: true },
        ],
        cta: "Kurumsal Teklif İste",
        whatsappText: "Büyük saha kamera sistemi için keşif ve kurumsal fiyat teklifi istiyorum.",
      },
    ],
  },

  "alarm-sistemi-kurulumu": {
    title: "Alarm Sistemi Kapsam Seçenekleri",
    description:
      "Panel tipi, dedektör adedi ve bildirim senaryosuna göre kapsam değişir. Doğru konfigürasyonu ücretsiz keşif ile birlikte belirleyebiliriz.",
    disclaimer:
      "Fiyatlar alan büyüklüğü, kablolu/kablosuz tercih ve dedektör adedine göre değişir.",
    tiers: [
      {
        name: "Giriş",
        tagline: "Daire ve küçük işyeri koruması",
        targetAudience: "Apartman dairesi, küçük dükkan",
        rangeLabel: "Giriş",
        priceNote: "4–8 sensör",
        features: [
          { text: "4–8 sensör (kapı/pencere/hareket)", included: true },
          { text: "Siren ve dahili panel", included: true },
          { text: "Mobil uygulama bildirimi", included: true },
          { text: "Aynı gün kurulum", included: true },
          { text: "Kablolu veya kablosuz seçenek", included: true },
          { text: "Çok bölgeli yönetim paneli", included: false },
          { text: "Dış çevre sensörü", included: false },
          { text: "Merkezi izleme bağlantısı", included: false },
        ],
        cta: "Keşif Planla",
        whatsappText: "Daire/küçük işyeri için alarm sistemi keşif ve fiyat almak istiyorum.",
      },
      {
        name: "Standart",
        badge: "En Çok Tercih Edilen",
        tagline: "İşyeri ve mağaza için tam koruma",
        targetAudience: "Mağaza, ofis, dükkan ve depo",
        rangeLabel: "Standart",
        priceNote: "8–20 sensör",
        features: [
          { text: "8–20 sensör (çok noktalı koruma)", included: true },
          { text: "Çok bölgeli gelişmiş panel", included: true },
          { text: "İç ve dış mekan sirenler", included: true },
          { text: "Mobil bildirim + çağrı senaryosu", included: true },
          { text: "Mesai bazlı otomatik kurma/çözme", included: true },
          { text: "Kablolu + kablosuz karma altyapı", included: true },
          { text: "Kullanıcı yetki seviyeleri", included: true },
          { text: "Merkezi izleme bağlantısı", included: false },
        ],
        cta: "Hızlı Teklif Al",
        whatsappText: "İşyeri/mağaza için standart alarm sistemi kurulumu hakkında bilgi almak istiyorum.",
      },
      {
        name: "Kapsamlı",
        tagline: "Fabrika, depo ve çok katlı yapılar",
        targetAudience: "Fabrika, büyük depo, çok katlı binalar",
        rangeLabel: "Kapsamlı",
        priceNote: "20+ sensör",
        features: [
          { text: "20+ sensör (tam çevre koruması)", included: true },
          { text: "Ticari sınıf yüksek güvenlikli panel", included: true },
          { text: "Perimeter (dış çevre) algılama", included: true },
          { text: "Kesintisiz çalışma için akü yedek", included: true },
          { text: "Merkezi izleme ve 7/24 bağlantı", included: true },
          { text: "Çok kullanıcılı erişim yönetimi", included: true },
          { text: "Kamera sistemi ile entegre kurulum", included: true },
          { text: "Bakım sözleşmesi ile öncelikli servis", included: true },
        ],
        cta: "Kurumsal Teklif İste",
        whatsappText: "Büyük saha alarm sistemi için kurumsal keşif ve fiyat almak istiyorum.",
      },
    ],
  },

  "yangin-alarm-sistemi-kurulumu": {
    title: "Yangın Alarm Sistemi Kapsam Seçenekleri",
    description:
      "Bina tipi, kat sayısı ve yönetmelik gereksinimleri doğrultusunda uygun kapsam belirlenir. Ücretsiz keşif ile doğru sistemi birlikte planlayalım.",
    disclaimer:
      "Fiyatlar bina büyüklüğü, panel tipi (adresli/konvansiyonel) ve dedektör adedine göre değişir.",
    tiers: [
      {
        name: "Giriş",
        tagline: "Küçük alan ve basit yapılar için",
        targetAudience: "Küçük işyeri, dükkan, 1–2 katlı yapılar",
        rangeLabel: "Giriş",
        priceNote: "1–2 kat / bölge",
        features: [
          { text: "Konvansiyonel panel", included: true },
          { text: "Duman ve ısı dedektörleri", included: true },
          { text: "Acil ihbar butonu", included: true },
          { text: "Sesli ve ışıklı siren", included: true },
          { text: "Teknik dokümantasyon", included: true },
          { text: "Adresli panel", included: false },
          { text: "Çok katlı / çok bölgeli kurulum", included: false },
          { text: "İtfaiye bağlantı altyapısı", included: false },
        ],
        cta: "Keşif Planla",
        whatsappText: "Küçük işyeri için yangın alarm sistemi keşif ve fiyat almak istiyorum.",
      },
      {
        name: "Standart",
        badge: "En Çok Tercih Edilen",
        tagline: "Çok katlı bina ve orta büyüklük tesisler",
        targetAudience: "Ofis, restoran, 3–6 katlı binalar, depo",
        rangeLabel: "Standart",
        priceNote: "3–6 kat / bölge",
        features: [
          { text: "Adresli veya konvansiyonel panel", included: true },
          { text: "Kat bazlı dedektör ve buton planı", included: true },
          { text: "Çok bölgeli (zone) tasarım", included: true },
          { text: "Yangın merdiveni / tahliye koridoru", included: true },
          { text: "Teknik proje ve belediye dosyası", included: true },
          { text: "Yıllık bakım önerisi", included: true },
          { text: "İtfaiye bağlantı altyapısı", included: false },
          { text: "Adresli panel (büyük yapılar için)", included: false },
        ],
        cta: "Hızlı Teklif Al",
        whatsappText: "Çok katlı bina için yangın alarm sistemi keşif ve teklif istiyorum.",
      },
      {
        name: "Kapsamlı",
        tagline: "Büyük tesis, otel ve fabrika projeleri",
        targetAudience: "Fabrika, otel, büyük depo, plaza",
        rangeLabel: "Kapsamlı",
        priceNote: "Geniş alan / çok bölge",
        features: [
          { text: "Tam adresli akıllı panel sistemi", included: true },
          { text: "Geniş alan bölge (loop) tasarımı", included: true },
          { text: "Her noktaya özgü dedektör seçimi", included: true },
          { text: "Sesli tahliye (PA) sistemi entegrasyonu", included: true },
          { text: "İtfaiye bağlantı ve izleme altyapısı", included: true },
          { text: "Yönetmelik uyum raporu ve teknik çizim", included: true },
          { text: "Proje mühendisliği ve as-built çizim", included: true },
          { text: "Bakım sözleşmesi ve periyodik test", included: true },
        ],
        cta: "Kurumsal Teklif İste",
        whatsappText: "Büyük tesis için yangın alarm sistemi kurumsal teklif ve keşif istiyorum.",
      },
    ],
  },

  "kartli-gecis-sistemi-kurulumu": {
    title: "Kartlı Geçiş Sistemi Kapsam Seçenekleri",
    description:
      "Kapı sayısı, kullanıcı adedi ve raporlama ihtiyacına göre kapsam netleşir. Keşif ile birlikte en uygun sistemi planlayabiliriz.",
    disclaimer:
      "Fiyatlar kapı/turnike sayısı, okuyucu tipi ve yazılım lisansına göre değişir.",
    tiers: [
      {
        name: "Giriş",
        tagline: "Tek kapı veya küçük ofis erişim kontrolü",
        targetAudience: "Küçük ofis, dükkan, 1–2 kapı",
        rangeLabel: "Giriş",
        priceNote: "1–3 kapı",
        features: [
          { text: "1–3 kapı okuyucu ve kilit", included: true },
          { text: "Kart veya şifreli erişim", included: true },
          { text: "Temel kullanıcı yönetimi", included: true },
          { text: "Giriş-çıkış log kaydı", included: true },
          { text: "Elektromanyetik veya elektrikli kilit", included: true },
          { text: "Turnike entegrasyonu", included: false },
          { text: "Gelişmiş raporlama ve mesai takibi", included: false },
          { text: "Çok katlı / bölgesel yetki yönetimi", included: false },
        ],
        cta: "Keşif Planla",
        whatsappText: "Küçük ofis için kartlı geçiş sistemi keşif ve fiyat almak istiyorum.",
      },
      {
        name: "Standart",
        badge: "En Çok Tercih Edilen",
        tagline: "Ofis ve site için tam erişim kontrolü",
        targetAudience: "Orta büyüklükte ofis, apartman, mağaza",
        rangeLabel: "Standart",
        priceNote: "3–10 kapı",
        features: [
          { text: "3–10 kapı okuyucu ve kilit", included: true },
          { text: "Kullanıcı ve departman bazlı yetki", included: true },
          { text: "Saat/gün bazlı erişim kuralları", included: true },
          { text: "Ziyaretçi geçici kart tanımı", included: true },
          { text: "Giriş-çıkış log ve temel raporlama", included: true },
          { text: "Mobil cihaz yönetim paneli", included: true },
          { text: "Turnike entegrasyonu", included: false },
          { text: "Maaş/mesai entegrasyonu", included: false },
        ],
        cta: "Hızlı Teklif Al",
        whatsappText: "Ofis/site için kartlı geçiş sistemi keşif ve teklif istiyorum.",
      },
      {
        name: "Kapsamlı",
        tagline: "Fabrika, plaza ve çok kullanıcılı tesisler",
        targetAudience: "Fabrika, plaza, kurumsal tesis",
        rangeLabel: "Kapsamlı",
        priceNote: "10+ kapı / turnike",
        features: [
          { text: "10+ kapı ve/veya turnike entegrasyonu", included: true },
          { text: "Çok katlı bölgesel yetki matriksi", included: true },
          { text: "Gerçek zamanlı personel takibi", included: true },
          { text: "Maaş/mesai yönetim yazılımı entegrasyonu", included: true },
          { text: "Ziyaretçi yönetim modülü", included: true },
          { text: "Gelişmiş raporlama ve analitik", included: true },
          { text: "Active Directory / LDAP entegrasyon", included: true },
          { text: "Bakım sözleşmesi ve öncelikli servis", included: true },
        ],
        cta: "Kurumsal Teklif İste",
        whatsappText: "Büyük tesis için kartlı geçiş sistemi kurumsal teklif ve keşif istiyorum.",
      },
    ],
  },

  "bakim-servis-uzaktan-izleme": {
    title: "Bakım & Uzaktan İzleme Paket Seçenekleri",
    description:
      "Sistem büyüklüğü ve hizmet sıklığına göre uygun bakım planı seçilebilir. Sözleşmeli müşteriler öncelikli servis hakkından yararlanır.",
    disclaimer:
      "Fiyatlar sistemin büyüklüğü, bakım sıklığı ve uzaktan izleme kapsamına göre değişir.",
    tiers: [
      {
        name: "Temel Bakım",
        tagline: "Yıllık saha kontrolü ve uzaktan destek",
        targetAudience: "Küçük sistemler, daire, küçük işyeri",
        rangeLabel: "Temel",
        priceNote: "Yılda 1–2 ziyaret",
        features: [
          { text: "Yılda 1 saha bakım ziyareti", included: true },
          { text: "Kamera açısı ve lens kontrolü", included: true },
          { text: "NVR ve disk sağlık kontrolü", included: true },
          { text: "Temel uzaktan destek hattı", included: true },
          { text: "Arıza durumunda yerinde servis indirimi", included: true },
          { text: "Uzaktan izleme altyapısı", included: false },
          { text: "Öncelikli servis SLA garantisi", included: false },
          { text: "Aylık sistem raporu", included: false },
        ],
        cta: "Bakım Planı Öğren",
        whatsappText: "Temel bakım planı için fiyat ve kapsam bilgisi almak istiyorum.",
      },
      {
        name: "Standart Bakım",
        badge: "En Çok Tercih Edilen",
        tagline: "6 aylık bakım + uzaktan izleme",
        targetAudience: "İşletme, mağaza, apartman, site",
        rangeLabel: "Standart",
        priceNote: "Yılda 2 ziyaret",
        features: [
          { text: "Yılda 2 saha bakım ziyareti", included: true },
          { text: "Tam sistem performans kontrolü", included: true },
          { text: "Disk sağlığı ve firmware güncellemesi", included: true },
          { text: "Uzaktan izleme bağlantısı", included: true },
          { text: "Öncelikli servis hakkı", included: true },
          { text: "Arıza öncesi erken uyarı bildirimi", included: true },
          { text: "6 aylık sistem durum raporu", included: true },
          { text: "7/24 uzaktan destek hattı", included: false },
        ],
        cta: "Sözleşme Bilgisi Al",
        whatsappText: "Standart bakım sözleşmesi için kapsam ve fiyat bilgisi almak istiyorum.",
      },
      {
        name: "Kapsamlı Bakım",
        tagline: "7/24 izleme + proaktif bakım SLA",
        targetAudience: "Fabrika, depo, büyük site, kurumsal",
        rangeLabel: "Kapsamlı",
        priceNote: "Yılda 4+ ziyaret",
        features: [
          { text: "Yılda 4+ saha bakım ziyareti", included: true },
          { text: "7/24 uzaktan sistem izleme", included: true },
          { text: "Proaktif arıza bildirimi ve müdahale", included: true },
          { text: "Garanti kapsamı genişletme seçeneği", included: true },
          { text: "Aylık detaylı sistem raporu", included: true },
          { text: "Öncelikli aynı gün saha müdahale", included: true },
          { text: "Parça değişiminde öncelikli fiyat", included: true },
          { text: "SLA garantisi ve yazılı servis taahhüdü", included: true },
        ],
        cta: "Kurumsal Bakım Teklifi",
        whatsappText: "Kapsamlı bakım ve 7/24 uzaktan izleme sözleşmesi için teklif almak istiyorum.",
      },
    ],
  },

  "kamera-ariza-servisi": {
    title: "Kamera Arıza Servis Seçenekleri",
    description:
      "Arızanın türüne ve aciliyetine göre müdahale kapsamı belirlenir. Uzaktan teşhis ile başlar, gerekiyorsa sahaya çıkarız.",
    disclaimer:
      "Servis fiyatı arızanın türüne, parça gereksinimine ve müdahale süresine göre değişir.",
    tiers: [
      {
        name: "Uzaktan Teşhis",
        tagline: "Hızlı uzaktan bağlantı ile sorun tespiti",
        targetAudience: "Bağlantı, yazılım ve konfigürasyon sorunları",
        rangeLabel: "Uzaktan",
        priceNote: "Online müdahale",
        features: [
          { text: "Uzaktan bağlantı ile sistem inceleme", included: true },
          { text: "Yazılım ve konfigürasyon sorunları", included: true },
          { text: "Şifre sıfırlama ve erişim sorunları", included: true },
          { text: "Port ve ağ yapılandırma desteği", included: true },
          { text: "Mobil uygulama bağlantı sorunları", included: true },
          { text: "Fiziksel donanım değişimi", included: false },
          { text: "Kablolama arızası müdahalesi", included: false },
          { text: "Sahaya çıkış ve yerinde servis", included: false },
        ],
        cta: "Uzaktan Destek Al",
        whatsappText: "Kamera sistemimde sorun var, uzaktan destek almak istiyorum.",
      },
      {
        name: "Saha Müdahale",
        badge: "En Hızlı Çözüm",
        tagline: "Aynı gün sahaya çıkış ve yerinde servis",
        targetAudience: "Kablo, donanım ve fiziksel arızalar",
        rangeLabel: "Sahaya Çıkış",
        priceNote: "İstanbul içi aynı gün",
        features: [
          { text: "İstanbul içi aynı gün servis hedefi", included: true },
          { text: "Kamera ve donanım arızası tespiti", included: true },
          { text: "Kablo ve bağlantı sorunları", included: true },
          { text: "NVR/DVR ve disk arızaları", included: true },
          { text: "IR LED ve gece görüş sorunları", included: true },
          { text: "Parça değişimi (yedek parça mevcutsa)", included: true },
          { text: "Uzaktan teşhis de dahil", included: true },
          { text: "Garanti kapsamı değerlendirmesi", included: true },
        ],
        cta: "Aynı Gün Servis",
        whatsappText: "Kamera arızası için aynı gün saha servisi istiyorum.",
      },
      {
        name: "Kapsamlı Onarım",
        tagline: "Büyük sistem arızası ve sistem revizyonu",
        targetAudience: "Çoklu arıza, eski sistem revizyonu",
        rangeLabel: "Kapsamlı",
        priceNote: "Planlı müdahale",
        features: [
          { text: "Tüm sistem sağlık taraması", included: true },
          { text: "Çoklu kamera arızası müdahalesi", included: true },
          { text: "NVR değişimi veya yenileme", included: true },
          { text: "Kablolama revizyonu", included: true },
          { text: "Sistem yeniden yapılandırma", included: true },
          { text: "Marka değişimi veya güncelleme", included: true },
          { text: "Bakım sözleşmesine geçiş seçeneği", included: true },
          { text: "Teslim sonrası 30 gün garanti", included: true },
        ],
        cta: "Revizyon Teklifi Al",
        whatsappText: "Kamera sistemimiz için kapsamlı revizyon ve onarım teklifi istiyorum.",
      },
    ],
  },

  "apartman-site-guvenlik-sistemi": {
    title: "Apartman & Site Güvenlik Kapsam Seçenekleri",
    description:
      "Blok sayısı, daire adedi ve ortak alan yapısına göre uygun güvenlik planı farklılık gösterir. Keşif ile birlikte netleştirelim.",
    disclaimer:
      "Fiyatlar kamera adedi, giriş kontrol noktaları ve ortak alan büyüklüğüne göre değişir.",
    tiers: [
      {
        name: "Temel Site",
        tagline: "Tek blok veya küçük apartman",
        targetAudience: "Tek blok, 10–30 daireli yapılar",
        rangeLabel: "Temel",
        priceNote: "1 blok / 4–8 kamera",
        features: [
          { text: "Bina girişi ve otopark kamera", included: true },
          { text: "4–8 adet IP kamera", included: true },
          { text: "Gece görüş kabiliyeti", included: true },
          { text: "NVR ve kayıt sistemi", included: true },
          { text: "Yönetici mobil erişimi", included: true },
          { text: "Kartlı giriş kontrol sistemi", included: false },
          { text: "Çok blok / çok nokta kapsama", included: false },
          { text: "Merkezi izleme monitör düzenlemesi", included: false },
        ],
        cta: "Keşif Planla",
        whatsappText: "Apartman/küçük site güvenlik sistemi için keşif ve fiyat almak istiyorum.",
      },
      {
        name: "Standart Site",
        badge: "En Çok Tercih Edilen",
        tagline: "Çok bloklu site ve orta büyüklükte yapılar",
        targetAudience: "2–4 bloklu site, 30–100 daire",
        rangeLabel: "Standart",
        priceNote: "2–4 blok / 8–20 kamera",
        features: [
          { text: "8–20 adet IP kamera", included: true },
          { text: "Tüm giriş ve çıkış noktaları", included: true },
          { text: "Otopark ve ortak alan kapsama", included: true },
          { text: "Kartlı giriş kontrol sistemi", included: true },
          { text: "Site yönetimi için izleme monitörü", included: true },
          { text: "Sakin ve ziyaretçi erişim ayrımı", included: true },
          { text: "Merkezi izleme altyapısı", included: false },
          { text: "Araç plaka tanıma kamera", included: false },
        ],
        cta: "Hızlı Teklif Al",
        whatsappText: "Çok bloklu site için güvenlik sistemi keşif ve teklif istiyorum.",
      },
      {
        name: "Kapsamlı Site",
        tagline: "Büyük site ve rezidans projeleri",
        targetAudience: "100+ daire, büyük rezidans, TOKİ tipi yapılar",
        rangeLabel: "Kapsamlı",
        priceNote: "20+ kamera + erişim kontrolü",
        features: [
          { text: "20+ yüksek çözünürlük kamera", included: true },
          { text: "Merkezi güvenlik izleme odası", included: true },
          { text: "Araç plaka tanıma sistemi", included: true },
          { text: "Çok katlı kartlı geçiş sistemi", included: true },
          { text: "Güvenlik görevlisi monitör düzenlemesi", included: true },
          { text: "Yangın alarm entegrasyonu seçeneği", included: true },
          { text: "Site yönetim yazılımı entegrasyonu", included: true },
          { text: "Bakım sözleşmesi ve öncelikli servis", included: true },
        ],
        cta: "Kurumsal Teklif İste",
        whatsappText: "Büyük site güvenlik sistemi için kapsamlı kurumsal teklif istiyorum.",
      },
    ],
  },

  "fabrika-depo-guvenlik-sistemi": {
    title: "Fabrika & Depo Güvenlik Kapsam Seçenekleri",
    description:
      "Alan büyüklüğü, çalışan sayısı ve operasyon tipi doğrultusunda uygun güvenlik altyapısı planlanır. Keşif zorunludur.",
    disclaimer:
      "Fiyatlar tesis büyüklüğü, kamera adedi, alan koşulları ve entegrasyon gereksinimlerine göre değişir.",
    tiers: [
      {
        name: "Küçük Depo",
        tagline: "500 m²'ye kadar depo ve atölye",
        targetAudience: "Küçük depo, atölye, imalathane",
        rangeLabel: "Giriş",
        priceNote: "6–12 kamera",
        features: [
          { text: "6–12 kamera (iç + dış)", included: true },
          { text: "Giriş kapısı ve yükleme alanı kapsama", included: true },
          { text: "Gece görüş ve alçak ışık kamera", included: true },
          { text: "Temel alarm sistemi", included: true },
          { text: "NVR ve kayıt sistemi", included: true },
          { text: "Turnike veya kartlı giriş", included: false },
          { text: "Çoklu NVR ve uzak izleme merkezi", included: false },
          { text: "Yangın alarm sistemi entegrasyonu", included: false },
        ],
        cta: "Keşif Planla",
        whatsappText: "Küçük depo/atölye için güvenlik sistemi keşif ve fiyat almak istiyorum.",
      },
      {
        name: "Orta Tesis",
        badge: "En Çok Tercih Edilen",
        tagline: "500–2000 m² arası fabrika ve depo",
        targetAudience: "Orta büyüklükte fabrika ve lojistik depo",
        rangeLabel: "Standart",
        priceNote: "12–24 kamera",
        features: [
          { text: "12–24 kamera (tam alan kapsama)", included: true },
          { text: "Üretim alanı + çevre hattı izleme", included: true },
          { text: "Yüksek çözünürlük geniş açı kamera", included: true },
          { text: "Alarm sistemi entegrasyonu", included: true },
          { text: "Turnike ve personel giriş kontrol", included: true },
          { text: "Çoklu NVR yapısı", included: true },
          { text: "Uzaktan mobil erişim", included: true },
          { text: "Yangın alarm sistemi", included: false },
        ],
        cta: "Hızlı Teklif Al",
        whatsappText: "Fabrika/depo için güvenlik sistemi keşif ve kurumsal teklif istiyorum.",
      },
      {
        name: "Büyük Tesis",
        tagline: "2000 m²+ fabrika ve organize sanayi",
        targetAudience: "Büyük fabrika, OSB tesisi, lojistik merkezi",
        rangeLabel: "Kapsamlı",
        priceNote: "24+ kamera + entegrasyon",
        features: [
          { text: "24+ kamera (tam çevre + iç alan)", included: true },
          { text: "Merkezi güvenlik izleme odası", included: true },
          { text: "Vardiya bazlı erişim yönetimi", included: true },
          { text: "Yangın alarm sistemi entegrasyonu", included: true },
          { text: "Araç plaka tanıma sistemi", included: true },
          { text: "Operasyon güvenlik entegrasyonu", included: true },
          { text: "Yedekli NVR ve kesintisiz kayıt", included: true },
          { text: "Bakım sözleşmesi ve SLA garantisi", included: true },
        ],
        cta: "Kurumsal Teklif İste",
        whatsappText: "Büyük fabrika tesisi için kapsamlı güvenlik sistemi kurumsal teklif istiyorum.",
      },
    ],
  },

  "isyeri-guvenlik-sistemi": {
    title: "İşyeri Güvenlik Sistemi Kapsam Seçenekleri",
    description:
      "İşyerinin tipi, büyüklüğü ve risk profiline göre uygun güvenlik bileşenleri belirlenir. Keşif ile birlikte ihtiyaca özel plan yapalım.",
    disclaimer:
      "Fiyatlar işyeri büyüklüğü, seçilen bileşenler (kamera/alarm/erişim) ve montaj koşullarına göre değişir.",
    tiers: [
      {
        name: "Temel İşyeri",
        tagline: "Küçük dükkan ve tek mekân ofisler",
        targetAudience: "Küçük dükkan, büfe, küçük ofis",
        rangeLabel: "Giriş",
        priceNote: "Kamera + temel alarm",
        features: [
          { text: "4–6 kamera (giriş, kasa, depo)", included: true },
          { text: "Temel alarm sistemi", included: true },
          { text: "Mesai dışı otomatik koruma", included: true },
          { text: "Mobil bildirim", included: true },
          { text: "Aynı gün kurulum hedefi", included: true },
          { text: "Kartlı erişim kontrol sistemi", included: false },
          { text: "Merkezi izleme", included: false },
          { text: "Yangın alarm sistemi", included: false },
        ],
        cta: "Keşif Planla",
        whatsappText: "Küçük işyerim için temel güvenlik sistemi keşif ve fiyat almak istiyorum.",
      },
      {
        name: "Standart İşyeri",
        badge: "En Çok Tercih Edilen",
        tagline: "Mağaza ve orta büyüklükte ofisler",
        targetAudience: "Mağaza, orta ofis, klinik, restoranlar",
        rangeLabel: "Standart",
        priceNote: "Kamera + alarm + erişim",
        features: [
          { text: "6–12 kamera (tam alan kapsama)", included: true },
          { text: "Gelişmiş alarm sistemi", included: true },
          { text: "Temel kartlı erişim kontrol", included: true },
          { text: "Mobil izleme ve bildirim", included: true },
          { text: "Görünmez kablolama uygulaması", included: true },
          { text: "Çalışan güvenlik senaryosu", included: true },
          { text: "Yangın alarm sistemi", included: false },
          { text: "Merkezi izleme altyapısı", included: false },
        ],
        cta: "Hızlı Teklif Al",
        whatsappText: "Mağaza/ofis için entegre güvenlik sistemi keşif ve teklif istiyorum.",
      },
      {
        name: "Kapsamlı İşyeri",
        tagline: "Büyük mağaza, çok şubeli ve zincir işletmeler",
        targetAudience: "Büyük mağaza, çok şube, plaza ofis",
        rangeLabel: "Kapsamlı",
        priceNote: "Tam entegre sistem",
        features: [
          { text: "12+ kamera (tam alan + çevre)", included: true },
          { text: "Gelişmiş alarm + perimeter koruması", included: true },
          { text: "Kartlı geçiş + çalışan takip sistemi", included: true },
          { text: "Yangın alarm sistemi entegrasyonu", included: true },
          { text: "Çok şube merkezi izleme", included: true },
          { text: "Operasyonel analitik (saatlik yoğunluk)", included: true },
          { text: "Bakım sözleşmesi ve öncelikli servis", included: true },
          { text: "Proje dokümantasyonu", included: true },
        ],
        cta: "Kurumsal Teklif İste",
        whatsappText: "Büyük işyeri/çok şube için kapsamlı güvenlik sistemi teklifi istiyorum.",
      },
    ],
  },
};
