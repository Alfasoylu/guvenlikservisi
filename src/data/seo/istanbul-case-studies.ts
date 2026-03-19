// =========================================================
// İstanbul Para Sayfaları — Proje Hikayeleri (Mini Case Studies)
// =========================================================
// Problem → Çözüm → Sonuç formatı. Her hizmet için 2-3 hikaye.
// İsimler ve ilçeler gerçekçi ama anonimleştirilmiş.
// =========================================================

export interface ProjectStory {
  id: string;
  district: string;       // "Kadıköy"
  clientType: string;     // "3 katlı apartman" / "tekstil fabrikası"
  problem: string;        // Müşterinin yaşadığı sorun
  solution: string;       // Uygulanan çözüm
  result: string;         // Elde edilen sonuç / ölçülebilir fayda
  duration: string;       // "1 günde tamamlandı"
  scope: string;          // "12 kamera + 1 NVR"
  year: string;           // "2024"
  tags: string[];
}

export interface ServiceCaseStudies {
  serviceSlug: string;
  stories: ProjectStory[];
}

// =========================================================
// KAMERA SİSTEMİ KURULUMU
// =========================================================
const kameraKurulumu: ProjectStory[] = [
  {
    id: "kamera-kadikoy-market",
    district: "Kadıköy",
    clientType: "Market & kafe (iki kat)",
    problem:
      "Gece saatlerinde kasa bölgesinde hırsızlık şüphesi yaşandı. Mevcut eski analog kamera sistemi gece görüntüsü vermiyordu; kayıtlara ulaşmak zordu.",
    solution:
      "8 adet 4MP gece görüşlü IP kamera + PoE switch + 4TB NVR kurulumu yapıldı. Kasaya bakış açısı optimize edilerek kör nokta kalmadı. Mobil uygulama üzerinden canlı takip aktive edildi.",
    result:
      "İlk ay içinde şüpheli hareket bildirimi sistemi sayesinde bir hırsızlık girişimi anında tespit edildi. İşletme sahibi evinden canlı izleme yapabiliyor.",
    duration: "Tek gün kurulum",
    scope: "8 × 4MP IP kamera, PoE switch, 4TB NVR",
    year: "2024",
    tags: ["Ticari", "IP Kamera", "Gece Görüşü", "Mobil Erişim"],
  },
  {
    id: "kamera-besiktas-ofis",
    district: "Beşiktaş",
    clientType: "6 katlı ofis binası",
    problem:
      "Bina yönetimi, ortak alanlarda (lobi, asansör önü, otopark girişi) belge hırsızlığı ve yetkisiz giriş raporları alıyordu. Eski kameralar çalışmıyordu.",
    solution:
      "16 adet 2MP kamera ile bina dışı ve iç ortak alanlar kapsandı. Otopark için araç plaka tanıma özellikli kamera eklendi. Merkezi izleme için 8 kanallı NVR ve 30 günlük depolama kuruldu.",
    result:
      "Yetkisiz giriş denemeleri kayıt altına alındı; biri hukuki süreçte delil olarak kullanıldı. Otopark yönetimi kolaylaştı.",
    duration: "2 günde tamamlandı",
    scope: "16 × 2MP kamera, plaka tanıma kamera, 8-kanal NVR",
    year: "2024",
    tags: ["Ofis Binası", "Plaka Tanıma", "Merkezi NVR"],
  },
  {
    id: "kamera-umraniye-depo",
    district: "Ümraniye",
    clientType: "E-ticaret deposu",
    problem:
      "Stok sayımlarında sürekli kayıp çıkıyordu. 1.200 m² depoda kör nokta çok fazlaydı; hangi koridorda sorun yaşandığı tespit edilemiyordu.",
    solution:
      "Depo katı planına göre 22 kamera konumlandırıldı. Balık gözü kameralar yükleme rampasına, PTZ kameralar geniş koridorlara yerleştirildi. Hareket algılama zonu ayarları yapıldı.",
    result:
      "Kurulumdan sonra ilk çeyrek stok kaybı %78 azaldı. Depo müdürü çalışan giriş-çıkış takibini sistem üzerinden yapıyor.",
    duration: "3 günde tamamlandı",
    scope: "22 kamera (PTZ + balık gözü), hareket algılama",
    year: "2025",
    tags: ["Depo", "PTZ Kamera", "Balık Gözü", "Stok Güvenliği"],
  },
];

// =========================================================
// ALARM SİSTEMİ KURULUMU
// =========================================================
const alarmKurulumu: ProjectStory[] = [
  {
    id: "alarm-fatih-butik",
    district: "Fatih",
    clientType: "Butik & tekstil dükkanı",
    problem:
      "Hafta sonu kapalı saatlerde iki kez zorlamalı giriş girişimi yaşandı. Kapı kilitleri yeterliydi ama erken uyarı sistemi yoktu.",
    solution:
      "Kablosuz hareket sensörlü alarm sistemi kuruldu. Cam kırılma detektörü, manyetik kapı-pencere sensörleri ve 110 dB siren eklendi. 7/24 izleme merkezi bağlantısı aktive edildi.",
    result:
      "Kurulumdan 3 ay sonra alarm panelinin bozulmuş cam dedektöründen uyarı verdiği bir gecede güvenlik müdahalesi sağlandı. İzinsiz giriş önlendi.",
    duration: "Yarım günde tamamlandı",
    scope: "PIR sensör × 4, cam dedektörü × 2, siren, 7/24 izleme",
    year: "2024",
    tags: ["Ticari", "Kablosuz Alarm", "7/24 İzleme", "Hırsız Alarmı"],
  },
  {
    id: "alarm-maltepe-villa",
    district: "Maltepe",
    clientType: "3 katlı müstakil villa",
    problem:
      "Yaz tatili döneminde ev boş kalıyordu. Komşuların anlattığı mahalle hırsızlıkları aile için ciddi endişe kaynağıydı.",
    solution:
      "Her kata hareket sensörü, dış kapı ve bahçe kapısına manyetik sensor, camların tamamına titreşim dedektörü kuruldu. Alarm tetiklendiğinde hem siren hem SMS/arama bildirimi devreye giriyor.",
    result:
      "Sahipsiz 6 haftalık tatil dönemi sorunsuz geçti. Aile yurt dışındayken sistemin test alarmını anında bildirdiğini görünce güven arttı.",
    duration: "1 günde tamamlandı",
    scope: "PIR × 6, manyetik × 5, titreşim × 8, akıllı bildirim",
    year: "2024",
    tags: ["Konut", "Villa", "Tatil Güvenliği", "Akıllı Bildirim"],
  },
];

// =========================================================
// YANGIN ALARM SİSTEMİ
// =========================================================
const yanginAlarm: ProjectStory[] = [
  {
    id: "yangin-avcilar-restoran",
    district: "Avcılar",
    clientType: "80 kişilik restoran",
    problem:
      "Belediyeden yangın tüzüğüne uyum için resmi uyarı geldi. Mutfakta duman dedektörü yoktu, acil çıkışlar işaretlenmemişti.",
    solution:
      "UL listeli duman dedektörü, ısı dedektörü ve CO sensörü kurulumu yapıldı. Yangın alarm paneli, sesli ve görsel uyarı üniteleri ile acil aydınlatma entegre edildi. Belediye denetim raporu hazırlandı.",
    result:
      "İşletme 2 hafta içinde belediye denetimininden geçti. Mutfak yangın ihbarı testinde sistem 18 saniyede uyarı verdi.",
    duration: "2 günde tamamlandı",
    scope: "Duman + ısı + CO sensör, alarm paneli, acil aydınlatma",
    year: "2024",
    tags: ["Restoran", "Yangın Tüzüğü", "Belediye Uyumu", "CO Sensörü"],
  },
  {
    id: "yangin-kagithane-ofis",
    district: "Kağıthane",
    clientType: "500 m² ofis katı",
    problem:
      "Bina yönetimi yangın alarm sistemini güncellemek istedi. Eski sistem sessiz kalıyordu; duman dolduğunda bile zil çalmıyordu.",
    solution:
      "Adresli yangın alarm paneli kuruldu. Her oda ve koridor için ayrı ayrı adreslenebilir duman dedektörü eklendi. Yangın ihbar butonu ve tahliye yönlendirme tabelaları ile acil kaçış planı entegre edildi.",
    result:
      "Yılık zorunlu yangın tatbikatında tahliye 4 dakika 10 saniyede tamamlandı. Önceki tatbikata göre 2 dakika hızlanma sağlandı.",
    duration: "2 günde tamamlandı",
    scope: "Adresli panel, 18 × duman detektörü, ihbar butonları",
    year: "2025",
    tags: ["Ofis", "Adresli Panel", "Tahliye Planı", "Tatbikat"],
  },
];

// =========================================================
// KARTLI GEÇİŞ SİSTEMİ
// =========================================================
const kartliGecis: ProjectStory[] = [
  {
    id: "kartli-sisli-holding",
    district: "Şişli",
    clientType: "Holding merkez ofisi (200 personel)",
    problem:
      "Ziyaretçi kayıtları kağıt defterle tutuluyordu. Personel takibi yoktu; mesai aşımı tespiti elle yapılıyordu. İnsan kaynakları bunun dijitaleşmesini talep etti.",
    solution:
      "4 kapıya kartlı geçiş okuyucu, lobi için misafir kiosk ve yönetim yazılımı kuruldu. Her personele RFID kart tanımlandı; giriş-çıkış saatleri otomatik raporlanıyor. Ziyaretçi için geçici kart üretme özelliği aktive edildi.",
    result:
      "İK mesai raporu artık otomatik oluşuyor. Sistem kurulumundan 3 ay sonra kayıt dışı mesai maliyeti %34 azaldı. Ziyaretçi akışı tamamen dijitalleşti.",
    duration: "3 günde tamamlandı",
    scope: "4 × kartlı kapı, misafir kiosk, yönetim yazılımı, 200 kart",
    year: "2024",
    tags: ["Kurumsal", "Personel Takibi", "Ziyaretçi Yönetimi", "RFID"],
  },
  {
    id: "kartli-pendik-fabrika",
    district: "Pendik",
    clientType: "Orta ölçekli üretim tesisi",
    problem:
      "Üretim alanına personel dışındaki kişilerin girdiği tespit edildi. Bölüm bazlı erişim kısıtlaması yoktu; herkes her yere girebiliyordu.",
    solution:
      "Fabrika 4 güvenlik bölgesine ayrıldı. Her bölge için farklı yetki seviyeli kartlı geçiş sistemi kuruldu. Üretim hattı girişi biyometrik + kart kombinasyonuyla güçlendirildi.",
    result:
      "Üretim alanı ihlalleri sıfıra indi. İSG denetiminde 'erişim kontrol sistemi' kriteri tam puan aldı.",
    duration: "4 günde tamamlandı",
    scope: "6 × kapı okuyucu, biyometrik × 2, 4 yetki seviyesi",
    year: "2025",
    tags: ["Fabrika", "Bölge Erişim", "Biyometrik", "İSG Uyumu"],
  },
];

// =========================================================
// BAKIM & SERVİS & UZAKTAN İZLEME
// =========================================================
const bakimServis: ProjectStory[] = [
  {
    id: "bakim-zeytinburnu-site",
    district: "Zeytinburnu",
    clientType: "96 daireli konut sitesi",
    problem:
      "Sitedeki 24 kameranın 9'u arızalıydı. Yönetim hangi kameranın çalışmadığını bile bilmiyordu. Bakım firması ayda bir gelip 'tamam' diyerek gidiyordu.",
    solution:
      "Sisteme uzaktan izleme yazılımı entegre edildi. Her kameranın bağlantı durumu anlık takip ediliyor; arıza anında bildirim geliyor. Yıllık bakım sözleşmesi yapıldı.",
    result:
      "İlk 2 ayda 4 kameranın intermittent arızası uzaktan tespit edilip yerinde onarıldı. Site yöneticisi artık 'hepsi çalışıyor mu?' diye sormak zorunda kalmıyor.",
    duration: "1 gün entegrasyon",
    scope: "24 kamera uzaktan izleme, anlık arıza bildirimi, yıllık bakım",
    year: "2024",
    tags: ["Site Yönetimi", "Uzaktan İzleme", "Bakım Sözleşmesi", "Proaktif Tespit"],
  },
  {
    id: "bakim-levent-plaza",
    district: "Levent",
    clientType: "Kurumsal plaza (12 kat)",
    problem:
      "Bina güvenlik altyapısı 5 yıllık ve bakımsızdı. Yıllık sigorta denetiminde 'yetersiz güvenlik altyapısı' notu alınarak prim artışı uygulandı.",
    solution:
      "Kapsamlı sistem denetimi yapıldı; 14 kamera değiştirildi, eski alarm paneli güncellendi, kartlı geçiş pil yedekleri yenilendi. Bakım sözleşmesiyle tüm ekipman sigorta gerekliliklerine getirildi.",
    result:
      "Sigorta denetimi geçildi; prim artışı kaldırıldı. İlk yıl bakım sözleşmesi maliyeti, sigorta prim düşüşüyle kendini amorti etti.",
    duration: "5 günde tamamlandı",
    scope: "14 kamera değişimi, alarm güncelleme, bakım sözleşmesi",
    year: "2024",
    tags: ["Kurumsal", "Sigorta Uyumu", "Bakım Sözleşmesi", "Sistem Güncelleme"],
  },
];

// =========================================================
// KAMERA ARIZA SERVİSİ
// =========================================================
const kameraAriza: ProjectStory[] = [
  {
    id: "ariza-bayrampasa-eczane",
    district: "Bayrampaşa",
    clientType: "Eczane",
    problem:
      "Gece boyunca kayıt yapan kamera sabah hiç görüntü kaydetmemişti. Akşam saatlerinde hırsızlık şüphesi vardı; kayıt yok, delil yok.",
    solution:
      "Yerinde teşhis: NVR'ın sabit diski bozulmuştu. 4 saatlik müdahalede disk değiştirildi, eski verinin kurtarılabilir kısmı alındı. RAID yedekli NVR önerildi ve kuruldu.",
    result:
      "Kurtarılan görüntüler şüpheli kişiyi gösterdi; kayıtlar polise iletildi. Sonraki arızada ikinci disk devreye girdiği için görüntü kaybı olmadı.",
    duration: "4 saatte çözüldü",
    scope: "NVR disk değişimi, veri kurtarma, RAID kurulumu",
    year: "2025",
    tags: ["Acil Servis", "Veri Kurtarma", "NVR", "RAID"],
  },
  {
    id: "ariza-bakirkoy-ofis",
    district: "Bakırköy",
    clientType: "Muhasebe ofisi (2 kat)",
    problem:
      "Tüm kameralar birden görüntü vermeyi kesti. Yönetici ertesi sabah toplantı öncesinde sistemi çalıştırması gerekiyordu.",
    solution:
      "Acil çağrı 3 saat içinde karşılandı. PoE switch'in firmware güncellemesi beklemede kalmış ve cihazı kilitlemiş. Switch yeniden başlatıldı, firmware güncellendi, kamera ayarları restore edildi.",
    result:
      "Toplantıdan önce sistem %100 çalışır hale getirildi. Müşteri aylık bakım sözleşmesine geçerek benzer sürprizleri önledi.",
    duration: "3 saatte çözüldü",
    scope: "PoE switch teşhis, firmware güncelleme, ayar restore",
    year: "2025",
    tags: ["Acil Servis", "PoE Switch", "Hızlı Müdahale"],
  },
];

// =========================================================
// APARTMAN & SİTE GÜVENLİK SİSTEMİ
// =========================================================
const apartmanSite: ProjectStory[] = [
  {
    id: "apartman-atasehir-site",
    district: "Ataşehir",
    clientType: "180 dairelik site",
    problem:
      "Site kapısı için eski interkom sistemi çalışmıyordu. Misafir girişleri kontrolsüzdü; araç girişinde görevli olmamasına rağmen yabancı araçlar park ediyordu.",
    solution:
      "Video interkom sistemi her daireye bağlandı. Araç giriş kapısına plaka tanıma + bariyer sistemi kuruldu. Site genelinde 32 kameralık güvenlik kamerası ağı döşendi.",
    result:
      "Yetkisiz araç girişi ilk hafta tamamen durdu. Daire sakinlerinden 94 memnuniyet anketi gönderildi; site yönetimi 4.8/5 puan aldı.",
    duration: "6 günde tamamlandı",
    scope: "32 kamera, video interkom × 180, plaka tanıma, bariyer",
    year: "2024",
    tags: ["Site Yönetimi", "Video İnterkom", "Plaka Tanıma", "Bariyer"],
  },
  {
    id: "apartman-sariyer-bina",
    district: "Sarıyer",
    clientType: "8 katlı apartman (24 daire)",
    problem:
      "Apartman kapısı çoğunluk kararıyla kilitli tutulmak istendi ama kiracılar ziyaretçileri içeri almakta zorlanıyordu.",
    solution:
      "Her daireye bağlantılı video kapı zili sistemi kuruldu. Daire sakinleri telefonlarından ziyaretçiyi görebiliyor ve kapıyı uzaktan açabiliyordu. Apartman girişine da kamera eklendi.",
    result:
      "Sistem kurulumuyla birlikte apartman kapısı 7/24 kilitli. Kiracılar uygulama üzerinden misafir açmayı 1 günde öğrendi.",
    duration: "1 günde tamamlandı",
    scope: "Video interkom × 24, uzaktan kapı açma, giriş kamerası",
    year: "2025",
    tags: ["Apartman", "Video Kapı Zili", "Uzaktan Açma", "Kiracı Kolaylığı"],
  },
];

// =========================================================
// FABRİKA & DEPO GÜVENLİK SİSTEMİ
// =========================================================
const fabrikaDepo: ProjectStory[] = [
  {
    id: "fabrika-tuzla-tekstil",
    district: "Tuzla",
    clientType: "Tekstil fabrikası (3.500 m²)",
    problem:
      "Vardiya değişimlerinde kumaş rulolarının kaybolduğu raporlandı. Fabrika sahipleri güvenlik kameraları olmadığı için suçlu tespit edemiyordu.",
    solution:
      "44 kameralık kapsamlı sistem kuruldu. Üretim hattı, ham madde deposu, yükleme rampası ve personel girişleri ayrı ayrı izleniyor. Vardiya bazlı erişim kontrol sistemi eklendi.",
    result:
      "İlk ay içinde iki farklı personel kumaş kaçakçılığına teşebbüs ederken kayıt altına alındı. Kayıplar durdu; sigorta şirketi güvenlik sistemini belge olarak talep edebileceğini bildirdi.",
    duration: "7 günde tamamlandı",
    scope: "44 kamera, vardiya erişim kontrolü, yükleme rampası izleme",
    year: "2024",
    tags: ["Fabrika", "Üretim Hattı", "Vardiya Kontrolü", "Hırsızlık Önleme"],
  },
  {
    id: "fabrika-ikitelli-depo",
    district: "İkitelli",
    clientType: "Lojistik deposu (8.000 m²)",
    problem:
      "E-ticaret müşterileri yanlış ürün gönderildiğinden şikayet ediyordu. Depo içinde hangi personelin hangi ürünü aldığı izlenemiyordu.",
    solution:
      "Koridorlara yüksek çözünürlüklü kameralar yerleştirildi. Her raf bölgesini gören balık gözü kameralar eklendi. Sistem WMS yazılımıyla entegre edilerek sipariş-kamera eşleştirmesi sağlandı.",
    result:
      "Yanlış ürün şikayeti 3 ayda %91 azaldı. Bir anlaşmazlıkta kamera kaydı müşterinin haksız iadesini kanıtladı.",
    duration: "5 günde tamamlandı",
    scope: "36 kamera, balık gözü × 8, WMS entegrasyonu",
    year: "2025",
    tags: ["Lojistik", "Depo", "WMS Entegrasyonu", "Balık Gözü"],
  },
];

// =========================================================
// İŞYERİ GÜVENLİK SİSTEMİ
// =========================================================
const isyeriGuvenlik: ProjectStory[] = [
  {
    id: "isyeri-mecidiyekoy-muhasebe",
    district: "Mecidiyeköy",
    clientType: "Muhasebe & hukuk bürosu (45 personel)",
    problem:
      "Gizli müvekkil dosyaları açık masalarda bırakılıyordu. Bina genel güvenliği zayıftı; herhangi biri asansörle ofis katına çıkabiliyordu.",
    solution:
      "Kat girişine kartlı geçiş sistemi kuruldu. Sunucu odasına ek biyometrik güvenlik eklendi. 12 kamera ile ofis ortak alanları ve koridor izleniyor. Çalışma saatlerine göre hareket alarmı programlandı.",
    result:
      "KVKK denetiminde 'fiziksel veri güvenliği' kriteri sağlandı. Müvekkil dosyaları artık yalnızca yetkili personelin erişebildiği kapalı dolaplarda tutuluyor.",
    duration: "2 günde tamamlandı",
    scope: "Kartlı geçiş, biyometrik sunucu odası, 12 kamera, hareket alarmı",
    year: "2024",
    tags: ["Ofis", "KVKK Uyumu", "Biyometrik", "Veri Güvenliği"],
  },
  {
    id: "isyeri-gayrettepe-klinik",
    district: "Gayrettepe",
    clientType: "Özel klinik (2 kat, 15 muayene odası)",
    problem:
      "Hasta mahremiyetini ihlal edebilecek kamera açıları konusunda SGK denetiminde uyarı alındı. Aynı zamanda eczane deposu güvensizdi.",
    solution:
      "Kameralar KVKK ve sağlık mevzuatına göre yeniden konumlandırıldı; muayene odaları kapsam dışı bırakıldı. Eczane deposuna ayrı alarm sistemi kuruldu. Koridorlar ve giriş-çıkışlar izleme altına alındı.",
    result:
      "SGK denetiminden geçildi. Eczane deposu hırsızlık şüphesi vakasında alarm sistemi müdahaleyi sağladı.",
    duration: "1 günde tamamlandı",
    scope: "Kamera yeniden konumlandırma, eczane alarmı, mevzuat uyumu",
    year: "2025",
    tags: ["Sağlık", "KVKK", "SGK Uyumu", "Eczane Güvenliği"],
  },
];

// =========================================================
// MASTER EXPORT
// =========================================================
export const istanbulCaseStudies: Record<string, ProjectStory[]> = {
  "kamera-sistemi-kurulumu": kameraKurulumu,
  "alarm-sistemi-kurulumu": alarmKurulumu,
  "yangin-alarm-sistemi-kurulumu": yanginAlarm,
  "kartli-gecis-sistemi-kurulumu": kartliGecis,
  "bakim-servis-uzaktan-izleme": bakimServis,
  "kamera-ariza-servisi": kameraAriza,
  "apartman-site-guvenlik-sistemi": apartmanSite,
  "fabrika-depo-guvenlik-sistemi": fabrikaDepo,
  "isyeri-guvenlik-sistemi": isyeriGuvenlik,
};
