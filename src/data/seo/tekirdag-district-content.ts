/**
 * Tekirdağ District Content — Per-district, per-service content variations
 * for district-level landing pages.
 *
 * 11 ilçe × 3 pilot servis = 33 sayfa
 * Pilot servisler: kamera-sistemi-kurulumu | alarm-sistemi-kurulumu | kartli-gecis-sistemi-kurulumu
 */

import type { DistrictProfile } from "./istanbul-district-content";

// ---------------------------------------------------------------------------
// Çerkezköy — Trakya'nın sanayi kalbi, COSB, TEM hattı
// ---------------------------------------------------------------------------

const cerkezkoy: DistrictProfile = {
  name: "Çerkezköy",
  slug: "cerkezkoy",
  locative: "Çerkezköy'de",
  districtIntro:
    "Çerkezköy Organize Sanayi Bölgesi ile Trakya'nın sanayi merkezi konumundaki Çerkezköy'de tekstil, kimya ve metal fabrikaları yoğun güvenlik sistemi talebi oluşturur. TEM otoyoluna yakınlığı lojistik depolarla birleşerek kamera ve erişim kontrolü ihtiyacını sürekli canlı tutar.",
  landmarks: [
    "Çerkezköy Organize Sanayi Bölgesi (COSB)",
    "TEM Bağlantı Noktası",
    "Çerkezköy İstasyon",
    "Çerkezköy Merkez",
    "Kızılpınar",
    "Veliköy",
  ],
  nearbyDistricts: ["kapakli", "corlu", "muratli", "ergene", "saray"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Çerkezköy Kamera Sistemi Kurulumu",
      heroIntro:
        "COSB'deki fabrikalar, TEM hattındaki lojistik depolar ve şehir merkezindeki işyerleri için profesyonel kamera güvenlik sistemi kurulumu. Keşif, montaj ve devreye alma Çerkezköy'de aynı gün.",
      whatsappMessage:
        "Merhaba, Çerkezköy'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "COSB'deki üretim tesisleri, TEM'e yakın lojistik alanlar ve Çerkezköy merkezdeki mağaza ve işyerleri hem içten hem dıştan profesyonel kamera izleme gerektiriyor.",
      ctaTitle: "COSB'den Merkeze — Çerkezköy'de Kamera Kurulumu",
      ctaSubtitle:
        "Fabrikanız, deponuz veya işyeriniz için Çerkezköy'de yerinde keşif alın; ihtiyacınıza özel kamera planı oluşturalım.",
      faqs: [
        {
          question: "Çerkezköy'deki fabrikam için kaç kamera yeterli?",
          answer:
            "Fabrikanın büyüklüğüne, giriş-çıkış noktası sayısına ve üretim hattı düzenine göre değişir. Keşif sonrasında ısı haritası analizi ile optimal kamera noktaları belirlenir.",
        },
        {
          question: "COSB bölgesinde kablo çekimi zorluğu var mı?",
          answer:
            "Sanayi yapılarında kablo güzergahı genellikle galeri veya kanal ile çözülür. Keşif sırasında bina altyapısı incelenerek en pratik güzergah planlanır.",
        },
        {
          question: "Çerkezköy'de kamera kurulumundan sonra teknik destek var mı?",
          answer:
            "Evet. Kurulum sonrası garanti kapsamında teknik destek ve periyodik bakım seçenekleri sunuyoruz. Uzaktan bağlantı ile çoğu sorun aynı gün çözülür.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Çerkezköy Alarm Sistemi Kurulumu",
      heroIntro:
        "Sanayi tesislerinden merkez işyerlerine, apartmanlardan müstakil konutlara kadar Çerkezköy'de hırsızlık caydırıcı alarm sistemleri. PIR sensörden mobil bildirime tam kurulum.",
      whatsappMessage:
        "Merhaba, Çerkezköy'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "COSB çevresindeki fabrika ve depoların gece güvenliği, merkezdeki ticari işyerleri ve gelişen konut bölgeleri Çerkezköy'de alarm kurulumu talebini ikiye katlıyor.",
      ctaTitle: "Çerkezköy'de İşyerinizi ve Evinizi Alarma Bağlayın",
      ctaSubtitle:
        "Fabrika, depo, işyeri veya konut için Çerkezköy'de alarm keşfi alın; sistemi birlikte tasarlayalım.",
      faqs: [
        {
          question: "Çerkezköy'de fabrika alarm sistemi nasıl kurulur?",
          answer:
            "Fabrikanın tüm giriş noktaları, depo alanları ve açık sahalar keşif ile analiz edilir; hem pasif kızılötesi hem cam kırılma sensörleri konumlandırılarak merkezi panel ve GSM bildirim sistemi kurulur.",
        },
        {
          question: "Alarm sistemi sireni gece çalışırsa ne olur?",
          answer:
            "Sistem, SMS ve mobil uygulama ile anında bildirim gönderir. İsteğe bağlı özel güvenlik veya jandarma bağlantısı da eklenebilir.",
        },
        {
          question: "Çerkezköy'deki konutum için hangi alarm paketi uygun?",
          answer:
            "Müstakil ev ve daireler için genellikle 4–6 sensörlü temel paket yeterlidir. Geniş bahçeli konutlarda dış çevre algılaması için ek sensörler planlanır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Çerkezköy Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "COSB fabrikalarında çalışan takibi, depo giriş kontrolü ve merkezdeki iş merkezlerinde yetkili erişim yönetimi için kartlı geçiş sistemleri. PDKS entegrasyonuyla personel devam takibi.",
      whatsappMessage:
        "Merhaba, Çerkezköy'de kartlı geçiş sistemi için bilgi almak istiyorum.",
      commercialAngle:
        "COSB'deki üretim tesislerinde çok sayıda vardiya çalışanı ve ziyaretçi akışı, erişim yetkisi yönetimi ve PDKS kaydı için kartlı geçiş sistemini zorunlu kılıyor.",
      ctaTitle: "Çerkezköy'de Erişimi Kontrol Altına Alın",
      ctaSubtitle:
        "Fabrika, depo veya ofis için Çerkezköy'de kartlı geçiş keşfi alın; PDKS ve erişim profilleri birlikte planlanır.",
      faqs: [
        {
          question: "Çerkezköy fabrikasında kaç kapıya geçiş kontrol sistemi lazım?",
          answer:
            "Ana fabrika girişi, depo kapıları, yönetim ofisi ve varsa servis kapıları ayrı ayrı kontrol edilmelidir. Keşifte toplam geçiş noktası sayısı tespit edilir.",
        },
        {
          question: "PDKS entegrasyonu nasıl çalışır?",
          answer:
            "Kart okuyucu, giriş-çıkış saatlerini merkezi yazılıma kaydeder. Vardiya planlaması, mesai hesaplama ve devam raporları otomatik olarak üretilir.",
        },
        {
          question: "Çerkezköy'de kartlı geçiş ile kamera sistemi entegre edilebilir mi?",
          answer:
            "Evet. Geçiş kartı okuma anında ilgili kameradan anlık görüntü alınır ve log kaydına eklenir. Böylece kart-yüz eşleştirmesi mümkün olur.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Çorlu — Tekirdağ'ın en kalabalık ilçesi, büyük OSB
// ---------------------------------------------------------------------------

const corlu: DistrictProfile = {
  name: "Çorlu",
  slug: "corlu",
  locative: "Çorlu'da",
  districtIntro:
    "Tekirdağ'ın en kalabalık ve ekonomik açıdan en dinamik ilçesi olan Çorlu, büyük organize sanayi bölgesiyle tekstil, kimya ve gıda sektörlerinde yüzlerce tesise ev sahipliği yapar. Yoğun fabrika ve depo stoğu ile gelişen konut alanları güvenlik sistemi talebini en üst düzeyde tutar.",
  landmarks: [
    "Çorlu Organize Sanayi Bölgesi",
    "Çorlu Merkez",
    "Reşadiye",
    "Velimeşe",
    "Uçmakdere",
    "Çorlu Havalimanı",
  ],
  nearbyDistricts: ["cerkezkoy", "kapakli", "ergene", "malkara"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Çorlu Kamera Sistemi Kurulumu",
      heroIntro:
        "Çorlu OSB'deki üretim tesislerinden merkezdeki alışveriş odaklarına, Reşadiye'nin konut sitelerinden lojistik depolarına kadar Çorlu genelinde profesyonel kamera güvenlik sistemi kurulumu.",
      whatsappMessage:
        "Merhaba, Çorlu'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Çorlu OSB'nin büyük hacimli üretim tesisleri, şehir merkezinin ticari yoğunluğu ve gelişen konut bölgeleri Çorlu'da kamera talebini her segment için yüksek tutuyor.",
      ctaTitle: "Çorlu OSB'den Merkeze — Profesyonel Kamera Kurulumu",
      ctaSubtitle:
        "Fabrikanız, deponuz, mağazanız veya konut siteniz için Çorlu'da keşif alın; kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "Çorlu OSB'deki fabrika için dış ortam kamera sistemi nasıl kurulur?",
          answer:
            "Fabrika çevre duvarları, giriş kapıları ve yükleme-boşaltma alanları için darbe dayanımlı, geniş açılı IP kameralar kullanılır. Gece görüşü ve sis filtresi gereken noktalarda özel kameralar planlanır.",
          },
        {
          question: "Çorlu'da kamera sistemi için aylık bakım anlaşması var mı?",
          answer:
            "Evet. Kurulum sonrası periyodik bakım, yazılım güncellemesi ve arıza müdahalesini kapsayan yıllık bakım sözleşmeleri sunuyoruz.",
        },
        {
          question: "Çorlu merkezdeki mağazam için kaç kamera yeterli?",
          answer:
            "Mağaza büyüklüğü ve planına göre genellikle giriş, kasa, depo ve vitrin noktalarını kapsayan 4-8 kamera yeterli olmaktadır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Çorlu Alarm Sistemi Kurulumu",
      heroIntro:
        "OSB'deki üretim tesislerinden Çorlu şehir merkezine, konut sitelerinden ticari işyerlerine kadar Çorlu genelinde hırsızlık ve izinsiz giriş caydırıcı alarm sistemleri.",
      whatsappMessage:
        "Merhaba, Çorlu'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Çorlu OSB'nin gece boş kalan büyük sanayi tesisleri, şehir merkezindeki yoğun ticaret ve hızla büyüyen konut bölgeleri Çorlu'da alarm kurulumu için güçlü bir pazar oluşturuyor.",
      ctaTitle: "Çorlu'da İşyeri ve Konutunuzu Alarma Bağlayın",
      ctaSubtitle:
        "Fabrika, depo, mağaza veya daire için Çorlu'da alarm keşfi alın; sistemi ihtiyacınıza göre tasarlayalım.",
      faqs: [
        {
          question: "Çorlu'daki tekstil fabrikam için gece alarm sistemi nasıl çalışır?",
          answer:
            "Fabrika kapalı olduğunda aktif hale gelen PIR sensörler, kapı ve pencere kontakları ile cam kırılma dedektörleri izinsiz girişi tespit eder. Alarm anında SMS ve sesli uyarı ile bildirilir.",
        },
        {
          question: "Çorlu'da konut alarm sistemleri kablosuz kurulabilir mi?",
          answer:
            "Evet. Yeni konutlarda ve kablolama yapılması zor yapılarda kablosuz alarm sistemleri tercih edilir. Batarya ömrü izleme ve sinyal güçlendirici seçenekler mevcuttur.",
        },
        {
          question: "Alarm sistemi yanlış alarm verirse ne yapılır?",
          answer:
            "Sistem hassasiyet kalibrasyonu ile yanlış alarm riski minimize edilir. Pet bağışıklıklı sensörler ve çift algılama teknolojisi kullanılarak yanlış alarm oranı düşürülür.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Çorlu Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Çorlu OSB'nin büyük ölçekli fabrikalarında çalışan erişim yönetimi, depo ve üretim alanı güvenliği için kurumsal kartlı geçiş sistemleri. PDKS entegrasyonu ile personel devam takibi.",
      whatsappMessage:
        "Merhaba, Çorlu'da kartlı geçiş sistemi için bilgi almak istiyorum.",
      commercialAngle:
        "Yüzlerce çalışanın çalıştığı Çorlu OSB fabrikaları, birden fazla vardiya ve ziyaretçi akışını yönetmek için merkezi erişim kontrolü ve PDKS entegrasyonuna ihtiyaç duyuyor.",
      ctaTitle: "Çorlu'da Personel ve Erişim Yönetimini Dijitale Taşıyın",
      ctaSubtitle:
        "Çorlu'daki tesisleriniz için kartlı geçiş keşfi alın; PDKS, vardiya ve yetkilendirme profilleri birlikte planlanır.",
      faqs: [
        {
          question: "Çorlu'da büyük bir fabrika için kartlı geçiş sistemi kurulumu ne kadar sürer?",
          answer:
            "Fabrika büyüklüğüne göre 1-3 günde kurulum tamamlanır. Yazılım yapılandırması ve personel kart tanımlamaları ek 1 gün içinde yapılır.",
        },
        {
          question: "Çorlu OSB'de parmak izi mi yoksa kartlı sistem mi tercih edilmeli?",
          answer:
            "İklim, hijyen koşulları ve çalışan sayısına göre değişir. Yüksek trafikli noktalarda kart daha hızlı geçiş sağlar; hassas bölgelerde biyometrik+kart kombinasyonu önerilir.",
        },
        {
          question: "Sisteme sonradan yeni çalışan eklemek ve çıkarmak nasıl yapılır?",
          answer:
            "Merkezi yazılım üzerinden saniyeler içinde yetki ekleme, kaldırma veya dondurma işlemi yapılır. Kayıp kart anında devre dışı bırakılabilir.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Süleymanpaşa — Tekirdağ merkez ilçesi, ticaret ve konut
// ---------------------------------------------------------------------------

const suleymanpasa: DistrictProfile = {
  name: "Süleymanpaşa",
  slug: "suleymanpasa",
  locative: "Süleymanpaşa'da",
  districtIntro:
    "Tekirdağ'ın merkez ilçesi Süleymanpaşa; şehrin yönetim, ticaret ve kültür kalbi olup Marmara kıyısı boyunca uzanan liman bölgesi, çarşı merkezi ve gelişen konut siteleriyle güvenlik sistemi talebinin en çeşitli olduğu ilçedir.",
  landmarks: [
    "Tekirdağ Şehir Merkezi",
    "Tekirdağ Limanı",
    "Barbaros Mahallesi",
    "Namık Kemal Üniversitesi",
    "Karadeniz Caddesi",
    "Yavuz Selim Mahallesi",
  ],
  nearbyDistricts: ["marmaraereglisi", "sarkoy", "malkara", "hayrabolu"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Süleymanpaşa Kamera Sistemi Kurulumu",
      heroIntro:
        "Tekirdağ şehir merkezindeki mağaza ve işyerlerinden Marmara kıyısındaki otel ve restoranlarına, konut sitelerinden üniversite çevresi işletmelerine kadar Süleymanpaşa'da profesyonel kamera güvenlik sistemi kurulumu.",
      whatsappMessage:
        "Merhaba, Süleymanpaşa'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Tekirdağ merkezinin yoğun ticari dokusunu, Marmara kıyısındaki turizm işletmelerini ve büyüyen konut sitelerini kapsayan çok katmanlı kamera güvenliği talebi.",
      ctaTitle: "Tekirdağ Merkezinde Kamera Güvenliği",
      ctaSubtitle:
        "İşyeriniz, konut siteniz veya otel-restoranınız için Süleymanpaşa'da keşif alın; kamera planı birlikte oluşturulur.",
      faqs: [
        {
          question: "Süleymanpaşa merkezdeki dükkânım için en uygun kamera sistemi hangisi?",
          answer:
            "Mağaza tipi ve büyüklüğüne göre giriş, kasa ve stok alanını kapsayan 2-4 kameralı kompakt bir sistem çoğu işyeri için yeterlidir.",
        },
        {
          question: "Tekirdağ'da konut site kamerası nasıl kurulur?",
          answer:
            "Site girişleri, otopark, ortak alanlar ve çevre duvarları keşif ile belirlenir. NVR tabanlı merkezi sistem yönetimle birlikte izleme imkânı sağlar.",
        },
        {
          question: "Süleymanpaşa'da kamera görüntülerine internet üzerinden erişebilir miyim?",
          answer:
            "Evet. Statik veya dinamik IP ile ya da bulut erişim modülleriyle akıllı telefon ve bilgisayardan 7/24 canlı ve kayıtlı görüntüye ulaşılabilir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Süleymanpaşa Alarm Sistemi Kurulumu",
      heroIntro:
        "Tekirdağ şehir merkezi işyerleri, Marmara kıyısı otelleri ve şehirdeki konut sitelerinde hırsızlık ve izinsiz girişe karşı etkin alarm sistemleri. Sensörden bildirime komple kurulum.",
      whatsappMessage:
        "Merhaba, Süleymanpaşa'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Tekirdağ merkezdeki ticari yoğunluk, turizm sezonuna bağlı güvenlik ihtiyacı ve büyüyen konut alanları Süleymanpaşa'da alarm kurulumu için sürekli talep oluşturuyor.",
      ctaTitle: "Süleymanpaşa'da Güvenliğinizi Alarma Bağlayın",
      ctaSubtitle:
        "Mağaza, otel, konut veya ofis için Tekirdağ merkezinde alarm keşfi alın.",
      faqs: [
        {
          question: "Tekirdağ'da otelim için alarm sistemi gerekli mi?",
          answer:
            "Evet. Otel depoları, ofis ve yönetim alanları, teknik hacimler ve geceleri boş kalan alanlar için alarm sistemi zorunluluk değil, sigorta ve güvenlik açısından standart bir koruma aracıdır.",
        },
        {
          question: "Süleymanpaşa'da apartman dairesi için alarm nasıl kurulur?",
          answer:
            "Kapı ve pencere kontakları, hareket sensörü ve isteğe bağlı duman dedektörü ile temel paket kurulabilir. Kablosuz seçenekler kiracılar için de idealdir.",
        },
        {
          question: "Alarm sistemi olmayan işyerim sigorta avantajı elde eder mi?",
          answer:
            "Birçok sigorta şirketi onaylı alarm sistemi olan işyerlerine prim indirimi uygulamaktadır. Kurulum belgeleri sigorta şirketinize sunulabilir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Süleymanpaşa Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Tekirdağ şehir merkezindeki yönetim binaları, ofis kompleksleri ve otellerden konut sitelerine kadar Süleymanpaşa'da yetkili erişim kontrolü için kartlı geçiş sistemleri.",
      whatsappMessage:
        "Merhaba, Süleymanpaşa'da kartlı geçiş sistemi için bilgi almak istiyorum.",
      commercialAngle:
        "Tekirdağ merkezdeki kamu kurumları, özel ofisler ve konut siteleri giriş güvenliğini ve misafir takibini otomasyona kavuşturmak için kartlı geçiş sistemine yönelmeye başladı.",
      ctaTitle: "Süleymanpaşa'da Erişim Kontrolünü Kolaylaştırın",
      ctaSubtitle:
        "Ofis, site veya otel için Tekirdağ merkezinde kartlı geçiş keşfi alın.",
      faqs: [
        {
          question: "Konut sitesinde kartlı geçiş sistemi nasıl kurulur?",
          answer:
            "Site ana kapıları, garaj girişleri ve yaya kapıları için kart okuyucu veya interkom entegrasyonu ile güvenli giriş sistemi oluşturulur. Araç tanıma kamera entegrasyonu da eklenebilir.",
        },
        {
          question: "Süleymanpaşa'da küçük bir ofis için kartlı sistem gerekli mi?",
          answer:
            "Personel sayısından bağımsız olarak tek kapı sistemi bile hem güvenlik hem de çalışma saati yönetimi açısından fayda sağlar. Küçük ofis paketleri uygun maliyetlidir.",
        },
        {
          question: "Tekirdağ'da kartlı geçiş sistemi arızalanırsa ne olur?",
          answer:
            "Sistemler kesintisiz güç kaynağı (UPS) ile desteklenir. Arıza durumunda mekanik anahtar yedek olarak çalışır. Teknik destek Çorlu ve Çerkezköy'den sağlanır.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Ergene — Sanayi odaklı, Çorlu OSB yakını
// ---------------------------------------------------------------------------

const ergene: DistrictProfile = {
  name: "Ergene",
  slug: "ergene",
  locative: "Ergene'de",
  districtIntro:
    "2008'de Çerkezköy'den ayrılarak kurulan Ergene ilçesi, Ergene Nehri havzasında yoğunlaşan sanayi tesisleri ile Çorlu OSB'ye yakınlığı sayesinde tekstil ve kimya sektörlerinde önemli bir üretim merkezi haline gelmiştir.",
  landmarks: [
    "Ergene Organize Sanayi Alanları",
    "Ergene Nehri",
    "Yenice",
    "Büyükyoncalı",
    "Ulaş",
  ],
  nearbyDistricts: ["corlu", "kapakli", "cerkezkoy", "malkara"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Ergene Kamera Sistemi Kurulumu",
      heroIntro:
        "Ergene'nin sanayi tesisleri ve lojistik alanları için geniş sahayı kapsayan, dış ortam koşullarına dayanıklı kamera sistemleri. Kurumsal ve endüstriyel projelerde yerinde keşif ve aynı gün teklif.",
      whatsappMessage:
        "Merhaba, Ergene'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Ergene'deki sanayi parsellerinin geniş açık alanları, çevre güvenliği ve gece izleme açısından yüksek çözünürlüklü PTZ ve geniş açılı kamera sistemlerini zorunlu kılıyor.",
      ctaTitle: "Ergene Sanayi Tesislerinde Kamera Güvenliği",
      ctaSubtitle:
        "Ergene'deki fabrikanız veya deponuz için keşif alın; saha analizi ile en uygun kamera planı oluşturalım.",
      faqs: [
        {
          question: "Ergene'de büyük açık alanlı fabrika için PTZ kamera mı tercih edilmeli?",
          answer:
            "Geniş açık sahalar için PTZ (pan-tilt-zoom) kameralar avantajlıdır; tek kamerayla geniş alan taranabilir. Sabit kritik nokta kameralarla kombinlenmesi önerilir.",
        },
        {
          question: "Ergene'de kamera sistemi gece de görüntü alabilir mi?",
          answer:
            "Evet. Endüstriyel kameralar IR veya white light gece görüşü ile tam karanlıkta da net görüntü sağlar.",
        },
        {
          question: "Ergene'de birden fazla fabrika binasını tek sistemle izleyebilir miyim?",
          answer:
            "Evet. Kampüs içindeki birden fazla bina fiber veya kablosuz köprü ile tek NVR sistemine bağlanabilir; tüm binalar tek ekrandan izlenir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Ergene Alarm Sistemi Kurulumu",
      heroIntro:
        "Ergene'nin sanayi ve karma kullanımlı yapıları için gecenin boş saatlerinde devreye giren, anında bildirimli alarm sistemleri. Fabrikalar, depolar ve işyerleri için.",
      whatsappMessage:
        "Merhaba, Ergene'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Ergene'deki sanayi tesisleri akşam mesai bitimiyle ıssızlaşır. Etkili alarm sistemi gece saatlerinde hırsızlık ve izinsiz girişe karşı birincil savunma hattıdır.",
      ctaTitle: "Ergene'de Tesislerinizi Alarma Bağlayın",
      ctaSubtitle:
        "Fabrika veya deponuz için Ergene'de alarm keşfi alın; gece güvenliğini birlikte tasarlayalım.",
      faqs: [
        {
          question: "Ergene'de fabrika kapandıktan sonra alarm sistemi nasıl çalışır?",
          answer:
            "Tüm çalışanlar çıktıktan sonra sistem kasetten aktif hale getirilir. İzinsiz hareket veya kapı ihlali anında sesli uyarı ve cep telefonuna bildirim gönderir.",
        },
        {
          question: "Ergene'de dış cephe alarm sensörü kurulabilir mi?",
          answer:
            "Evet. Kızılötesi bariyer, mikrodalga sensör ve vibrasyon dedektörleri ile tesis çevresi izlenebilir; duvar aşımı öncesinde alarm verilir.",
        },
        {
          question: "Alarm sistemi ile güvenlik kamerası birlikte çalışabilir mi?",
          answer:
            "Evet. Alarm tetiklendiğinde ilgili kamera otomatik kayda geçer ve anlık görüntü bildirimle birlikte gönderilir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Ergene Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Ergene sanayi tesislerinde çalışan ve araç girişini kontrol altına almak, yetkisiz erişimi engellemek için kurumsal kartlı geçiş ve araç tanıma sistemleri.",
      whatsappMessage: "Merhaba, Ergene'de kartlı geçiş sistemi için bilgi almak istiyorum.",
      commercialAngle:
        "Ergene'deki fabrika ve depolarda taşeron firma çalışanları ve ziyaretçi takibi, yetki profillerine göre ayrıştırılmış erişim kontrolü ile gerçekleştirilebilir.",
      ctaTitle: "Ergene Tesislerinizde Erişimi Kontrol Edin",
      ctaSubtitle:
        "Ergene'deki fabrikanız için kartlı geçiş keşfi alın; araç ve personel erişimi birlikte planlanır.",
      faqs: [
        {
          question: "Ergene'de sanayi tesisi için araç tanıma sistemi kurulabilir mi?",
          answer:
            "Evet. LPR (Plaka Tanıma) kameralar ile araç girişleri otomatik loglanır; yetkili plakaların kapısı otomatik açılır.",
        },
        {
          question: "Taşeron firma çalışanları için geçici kart nasıl tanımlanır?",
          answer:
            "Yazılım üzerinden geçici kart profili oluşturulur; belirli saatler ve giriş noktaları ile kısıtlanabilir. Proje tamamlandığında tek tıkla devre dışı bırakılır.",
        },
        {
          question: "Ergene'deki sistemin bakımı nasıl yapılır?",
          answer:
            "Çerkezköy ve Çorlu'daki servis ekibimiz Ergene'ye kısa sürede ulaşır. Uzaktan yazılım bakımı ise çoğu durumda yerinde müdahaleye gerek bırakmaz.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Kapaklı — Çerkezköy'e komşu karma ilçe
// ---------------------------------------------------------------------------

const kapakli: DistrictProfile = {
  name: "Kapaklı",
  slug: "kapakli",
  locative: "Kapaklı'da",
  districtIntro:
    "Çerkezköy ile sınır komşusu olan Kapaklı, son yıllarda hızla büyüyen karma konut ve sanayi dokusuyla öne çıkmaktadır. Organize sanayi yakınlığı ve İstanbul-Tekirdağ aksındaki konumu güvenlik sistemi talebini artırmaktadır.",
  landmarks: [
    "Kapaklı Merkez",
    "Kapaklı Sanayi Bölgesi",
    "Ulaş",
    "Misinli",
  ],
  nearbyDistricts: ["cerkezkoy", "corlu", "ergene"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Kapaklı Kamera Sistemi Kurulumu",
      heroIntro:
        "Çerkezköy aksındaki Kapaklı'da sanayi ve konut bölgeleri için profesyonel kamera güvenlik sistemi kurulumu. Fabrikadan aileye, işyerinden konut sitesine kapsamlı çözümler.",
      whatsappMessage:
        "Merhaba, Kapaklı'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Kapaklı'daki sanayi parselleri ve hızlı büyüyen konut alanları hem kurumsal hem bireysel kamera güvenliği talebini aynı anda oluşturuyor.",
      ctaTitle: "Kapaklı'da Kamera Güvenliği",
      ctaSubtitle:
        "Fabrikanız, deponuz veya eviniz için Kapaklı'da keşif alın.",
      faqs: [
        {
          question: "Kapaklı'da yeni inşaat halindeki fabrikama kamera kurulabilir mi?",
          answer:
            "Evet. İnşaat aşamasında altyapı kablolamasını yapmak hem daha kolay hem daha ekonomiktir. Yerleşim planına göre kablo güzergahı önceden belirlenir.",
        },
        {
          question: "Kapaklı'da konut sitesi için kamera kurulumu ne kadar sürer?",
          answer:
            "Orta büyüklükte bir site için montaj genellikle 1 günde tamamlanır. Giriş kapısı, otopark ve ortak alanlar öncelikli olarak planlanır.",
        },
        {
          question: "Kapaklı'da kamera servisi için ne kadar sürede gelinir?",
          answer:
            "Çerkezköy ve Çorlu servis merkezlerimizden Kapaklı'ya genellikle 20-30 dakikada ulaşılır. Acil müdahaleler aynı gün gerçekleştirilir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Kapaklı Alarm Sistemi Kurulumu",
      heroIntro:
        "Kapaklı'daki sanayi tesisleri ve büyüyen konut alanları için hırsızlık ve izinsiz giriş caydırıcı alarm sistemleri. Kablosuz ve kablolu seçeneklerle her yapıya uygun kurulum.",
      whatsappMessage:
        "Merhaba, Kapaklı'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Kapaklı'nın Çerkezköy sanayi çeperindeki konumu ve yeni gelişen konut bölgeleri hem kurumsal hem bireysel alarm kurulumu için aktif talep oluşturuyor.",
      ctaTitle: "Kapaklı'da Güvenliği Alarma Bağlayın",
      ctaSubtitle: "İşyeri veya konut için Kapaklı'da alarm keşfi alın.",
      faqs: [
        {
          question: "Kapaklı'da sanayi tesisi için alarm sistemi nasıl kurulur?",
          answer:
            "Tesis sınırları, bina girişleri ve iç mekânlar analiz edilerek sensör noktaları belirlenir. GSM iletişim modülü ile sahipsiz kaldığı saatlerde anında bildirim sağlanır.",
        },
        {
          question: "Kapaklı'da kablosuz alarm sistemi güvenilir mi?",
          answer:
            "Modern kablosuz alarm sistemleri frekans atlama teknolojisi ile bozulmaya karşı korumalıdır. Uzun ömürlü batarya ve şifreli iletişim standart özelliktir.",
        },
        {
          question: "Alarm sistemi kurulduğunda komşuları rahatsız eder mi?",
          answer:
            "Sirenler belirli aralıklarla otomatik kapanır. Bireysel kullanımda iç siren ve sessiz bildirim ayarı da tercih edilebilir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Kapaklı Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Kapaklı'daki sanayi tesisleri ve büyük konut siteleri için yetkili erişim kontrolü, çalışan takibi ve araç yönetimi amacıyla kartlı geçiş sistemleri.",
      whatsappMessage:
        "Merhaba, Kapaklı'da kartlı geçiş sistemi için bilgi almak istiyorum.",
      commercialAngle:
        "Kapaklı'da büyüyen fabrikalarda personel erişim yönetimi ve konut sitelerinde yabancı araç denetimi için kartlı geçiş sistemi talebi artıyor.",
      ctaTitle: "Kapaklı'da Erişim Kontrolü Kurun",
      ctaSubtitle:
        "Fabrika veya site girişleri için Kapaklı'da keşif alın; erişim profilleri birlikte planlanır.",
      faqs: [
        {
          question: "Kapaklı'da küçük üretim tesisi için kartlı geçiş ne kadar zaman alır?",
          answer:
            "Tek geçiş noktası olan küçük tesislerde kurulum yarım günde tamamlanır. Yazılım tanımlamaları ile kullanıma hazır hale getirilir.",
        },
        {
          question: "Konut sitesinde araç geçiş bariyeri de kurulabilir mi?",
          answer:
            "Evet. Kart ile bariyer entegrasyonu veya plaka tanıma sistemi ile otomatik bariyer çözümleri sunuyoruz.",
        },
        {
          question: "Kapaklı için teknik servis desteği nasıl sağlanır?",
          answer:
            "Komşu Çerkezköy'deki servis noktamızdan Kapaklı'ya hızla ulaşılır. Yazılım sorunları uzaktan bağlantıyla çözülür.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Muratlı — Küçük sanayi ve karma
// ---------------------------------------------------------------------------

const muratli: DistrictProfile = {
  name: "Muratlı",
  slug: "muratli",
  locative: "Muratlı'da",
  districtIntro:
    "Trakya'nın iç kesimlerinde yer alan Muratlı, küçük ölçekli sanayi, ticaret ve tarımsal faaliyetlerle karma bir ekonomik yapıya sahiptir. İstanbul-Tekirdağ karayolu güzergâhındaki konumu bazı lojistik faaliyetleri de ilçeye çeker.",
  landmarks: [
    "Muratlı Merkez",
    "Gazlıgöl",
    "İnecik",
  ],
  nearbyDistricts: ["cerkezkoy", "kapakli", "hayrabolu", "saray"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Muratlı Kamera Sistemi Kurulumu",
      heroIntro:
        "Muratlı'daki küçük sanayi tesisleri, ticari işyerleri ve konutlar için uygun maliyetli, güvenilir kamera güvenlik sistemleri. Keşif ve kurulum Muratlı'da.",
      whatsappMessage:
        "Merhaba, Muratlı'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Muratlı'nın sanayi ve ticari kesimi ile büyüyen konut alanları güvenlik sistemine yatırımın geri dönüşünü kısa sürede sağlıyor.",
      ctaTitle: "Muratlı'da Kamera Güvenliği",
      ctaSubtitle: "İşyeriniz veya eviniz için Muratlı'da keşif alın.",
      faqs: [
        {
          question: "Muratlı'da küçük işyerim için kamera sistemi ne kadara kurulur?",
          answer:
            "Küçük işyerleri için 2-4 kameralı temel sistemler uygun fiyatlıdır. Keşif sonrasında yazılı teklif sunulur.",
        },
        {
          question: "Muratlı'ya servis ekibi ne zaman gelir?",
          answer:
            "Çerkezköy ve Çorlu servis merkezlerimizden Muratlı'ya randevu günü gelinir. Acil arızalarda aynı gün müdahale sağlanır.",
        },
        {
          question: "Muratlı'da kamera görüntüleri buluta kaydedilebilir mi?",
          answer:
            "Evet. NVR tabanlı yerel kayda ek olarak bulut yedekleme modülü ile kayıtlar güvende tutulur.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Muratlı Alarm Sistemi Kurulumu",
      heroIntro:
        "Muratlı'daki işyerleri ve konutlar için basit ve etkili alarm sistemleri. Kablosuz sensörler, GSM iletişim ve mobil bildirimle hırsızlık ve izinsiz girişe karşı koruma.",
      whatsappMessage:
        "Merhaba, Muratlı'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Muratlı'da özellikle gece ve hafta sonu ıssız kalan işyerleri için alarm sistemi en düşük maliyetli güvenlik yatırımıdır.",
      ctaTitle: "Muratlı'da Alarm Kurulumu",
      ctaSubtitle: "İşyeriniz veya konutunuz için Muratlı'da alarm keşfi alın.",
      faqs: [
        {
          question: "Muratlı'da çiftlik veya tarım deposu için alarm kurulabilir mi?",
          answer:
            "Evet. Elektrik altyapısı kısıtlı alanlarda güneş enerjili alarm sistemleri de mevcuttur. GSM modülü ile internet olmaksızın SMS bildirim çalışır.",
        },
        {
          question: "Alarm sistemi kurulumu için elektrikçiye gerek var mı?",
          answer:
            "Hayır. Kablolu sistemlerde kablo güzergahı ekibimiz tarafından çekilir; kurulum izni ve altyapı işleri dahildir.",
        },
        {
          question: "Muratlı'da alarm bakımı nasıl yapılır?",
          answer:
            "Yıllık bakım kapsamında sensör temizliği, batarya kontrolü ve yazılım güncellemesi yapılır. Uzaktan erişim ile çoğu güncelleme yerinde müdahale gerektirmez.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Muratlı Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Muratlı'daki sanayi tesisleri ve ticari binalar için giriş güvenliğini otomasyona kavuşturan kartlı geçiş sistemleri. Kolay yönetim, anlık raporlama.",
      whatsappMessage:
        "Merhaba, Muratlı'da kartlı geçiş sistemi için bilgi almak istiyorum.",
      commercialAngle:
        "Muratlı'da personel girişini takip etmek ve yetkisiz erişimi engellemek isteyen işletmeler için kartlı geçiş uygun maliyetli bir çözümdür.",
      ctaTitle: "Muratlı'da Erişimi Kontrol Edin",
      ctaSubtitle: "İşyeriniz için Muratlı'da kartlı geçiş keşfi alın.",
      faqs: [
        {
          question: "Muratlı'da tek kapı için kartlı geçiş sistemi kurulabilir mi?",
          answer:
            "Evet. Tek kart okuyucu ve standalone kontrolör ile minimum yatırımla giriş güvenliği sağlanabilir.",
        },
        {
          question: "Muratlı'da kartlı geçiş sistemi bakımı nasıl yapılır?",
          answer:
            "Yazılım güncellemeleri uzaktan yapılır. Donanım bakımı için Çerkezköy ekibimiz Muratlı'ya kısa sürede ulaşır.",
        },
        {
          question: "Kart kaybolursa ne yapılır?",
          answer:
            "Merkezi yazılımdan kayıp kart anında devre dışı bırakılır. Yeni kart saniyeler içinde sisteme tanımlanır.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Hayrabolu — Ticaret ve tarım ilçesi
// ---------------------------------------------------------------------------

const hayrabolu: DistrictProfile = {
  name: "Hayrabolu",
  slug: "hayrabolu",
  locative: "Hayrabolu'da",
  districtIntro:
    "Tekirdağ'ın iç kesimlerindeki tarım ve ticaret ilçesi Hayrabolu, küçük ölçekli ticari işletmeleri, tarımsal depoları ve konut dokusundan oluşan karma bir yapıya sahiptir.",
  landmarks: [
    "Hayrabolu Merkez",
    "Kırklareli Sınırı",
  ],
  nearbyDistricts: ["muratli", "malkara", "suleymanpasa"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Hayrabolu Kamera Sistemi Kurulumu",
      heroIntro:
        "Hayrabolu'daki işyerleri, tarımsal depolar ve konutlar için uygulanabilir, uygun maliyetli kamera güvenlik sistemleri. Keşiften montaja eksiksiz hizmet.",
      whatsappMessage:
        "Merhaba, Hayrabolu'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Hayrabolu'nun ticaret merkezi ve çevre köylerdeki tarımsal depoların güvenliği, uzak lokasyonlu kamera ve uzaktan izleme çözümleriyle sağlanabilir.",
      ctaTitle: "Hayrabolu'da Kamera Güvenliği",
      ctaSubtitle: "İşyeriniz veya deponuz için Hayrabolu'da keşif alın.",
      faqs: [
        {
          question: "Hayrabolu'da tarım deposu için güvenlik kamerası kurulabilir mi?",
          answer:
            "Evet. Elektrik ve internet altyapısı olan her noktaya kamera kurulabilir. Uzak noktalarda 4G modem ile internet sağlanabilir.",
        },
        {
          question: "Hayrabolu'ya kamera kurulumu için servis ne zaman gelir?",
          answer:
            "Süleymanpaşa veya Muratlı ekibimizden gün içinde keşif ve kurulum planlanabilir.",
        },
        {
          question: "Hayrabolu'da kamera sistemi maliyeti nasıl belirlenir?",
          answer:
            "Kamera sayısı, kablo mesafesi ve NVR kapasitesine göre keşif sonrası yazılı teklif verilir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Hayrabolu Alarm Sistemi Kurulumu",
      heroIntro:
        "Hayrabolu'daki işyerleri ve konutlar için gece güvenliği sağlayan, GSM modüllü alarm sistemleri. Siren ve mobil bildirimle çalışır, internet gerekmez.",
      whatsappMessage:
        "Merhaba, Hayrabolu'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Hayrabolu'da özellikle gece boş kalan ticari işyerleri ve tarımsal depolar için alarm sistemi en etkili hırsızlık caydırıcısıdır.",
      ctaTitle: "Hayrabolu'da Alarm Sistemi Kurulumu",
      ctaSubtitle: "İşyeriniz veya eviniz için Hayrabolu'da alarm keşfi alın.",
      faqs: [
        {
          question: "Hayrabolu'da internet olmadan alarm sistemi çalışır mı?",
          answer:
            "Evet. GSM modüllü alarm sistemleri internet bağlantısı olmaksızın SMS ve arama ile bildirim yapar.",
        },
        {
          question: "Hayrabolu'da alarm bakımı ne sıklıkta yapılmalı?",
          answer:
            "Yılda bir kez genel bakım yeterlidir. Batarya değişimi ve sensör testleri bu süre içinde yapılır.",
        },
        {
          question: "Hayrabolu'da alarm sistemi kurulumu için randevu nasıl alınır?",
          answer:
            "Telefon veya WhatsApp ile iletişime geçtikten sonra uygun günde keşif randevusu planlanır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Hayrabolu Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Hayrabolu'daki ticari işletmeler ve orta ölçekli binalar için giriş kontrolü ve personel takibi amacıyla kartlı geçiş sistemleri.",
      whatsappMessage:
        "Merhaba, Hayrabolu'da kartlı geçiş sistemi için bilgi almak istiyorum.",
      commercialAngle:
        "Hayrabolu'da işyeri güvenliğini otomasyona kavuşturmak ve personel girişini kayıt altına almak için kartlı geçiş sistemi uygun fiyatlı bir çözüm.",
      ctaTitle: "Hayrabolu'da Erişim Kontrolü",
      ctaSubtitle: "İşyeriniz için Hayrabolu'da kartlı geçiş keşfi alın.",
      faqs: [
        {
          question: "Hayrabolu'da tek kapı kartlı geçiş ne kadara mal olur?",
          answer:
            "Keşif sonrası yazılı teklif sunulur. Tek kapı standalone sistemler uygun maliyetlidir.",
        },
        {
          question: "Hayrabolu'da kartlı geçiş sistem bakımı nasıl yapılır?",
          answer:
            "Yazılım güncellemeleri uzaktan yapılır. Donanım bakımı için en yakın servis noktamızdan ekip gönderilir.",
        },
        {
          question: "Kartlı sistemde kaç kişiye kadar kart tanımlanabilir?",
          answer:
            "Sistem kapasitesine göre 100 ila 10.000 kullanıcı arası kart tanımlanabilir; büyüme planınıza göre ölçeklendirilebilir.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Malkara — Tarım ve ticaret
// ---------------------------------------------------------------------------

const malkara: DistrictProfile = {
  name: "Malkara",
  slug: "malkara",
  locative: "Malkara'da",
  districtIntro:
    "Trakya'nın tarım ve ticaret merkezi konumundaki Malkara, konut ve küçük sanayi dengesiyle büyüyen bir ilçe merkezidir. Ergene havzasına yakın konumu tarımsal depolama ve lojistik alanları barındırır.",
  landmarks: [
    "Malkara Merkez",
    "Malkara Organize Sanayi",
    "Trakya Yolu",
  ],
  nearbyDistricts: ["hayrabolu", "suleymanpasa", "corlu", "ergene", "sarkoy"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Malkara Kamera Sistemi Kurulumu",
      heroIntro:
        "Malkara'daki ticari işletmeler, küçük sanayi tesisleri ve konutlar için güvenilir kamera güvenlik sistemi kurulumu. Keşif ve montaj aynı gün.",
      whatsappMessage:
        "Merhaba, Malkara'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Malkara'nın ticaret merkezi ve çevre sanayi alanları hem işyeri hem konut kamera talebini oluşturmaktadır.",
      ctaTitle: "Malkara'da Kamera Güvenliği",
      ctaSubtitle: "İşyeriniz veya eviniz için Malkara'da keşif alın.",
      faqs: [
        {
          question: "Malkara'da market veya tarım mağazası için kamera sistemi nasıl kurulur?",
          answer:
            "Giriş, kasa ve depo alanlarını kapsayan 2-4 kameralı sistem genellikle yeterlidir. Keşifte ihtiyaç analizi yapılır.",
        },
        {
          question: "Malkara'ya kamera kurulumu için ne kadar sürede gelinir?",
          answer:
            "Hayrabolu veya Süleymanpaşa servis merkezimizden Malkara'ya kısa sürede ulaşılır. Randevu günü keşif ve kurulum gerçekleştirilir.",
        },
        {
          question: "Kamera kayıtları ne kadar süre saklanır?",
          answer:
            "NVR sabit disk kapasitesine ve kamera çözünürlüğüne göre 7 ila 30 gün arası kayıt tutulur. Kapasiteyi artırmak için ek HDD eklenebilir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Malkara Alarm Sistemi Kurulumu",
      heroIntro:
        "Malkara'daki ticari işyerleri ve konutlar için hırsızlık caydırıcı alarm sistemleri. GSM bildirim, sesli siren ve kablosuz seçeneklerle tam koruma.",
      whatsappMessage:
        "Merhaba, Malkara'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Malkara'da özellikle gece boş kalan tarımsal depolar ve ticaret işletmeleri alarm sistemi ile sigorta altına alınmalıdır.",
      ctaTitle: "Malkara'da Alarm Sistemi Kurun",
      ctaSubtitle: "İşyeriniz veya konutunuz için Malkara'da alarm keşfi alın.",
      faqs: [
        {
          question: "Malkara'da işyeri alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Orta büyüklükte bir işyerinde kurulum genellikle yarım günde tamamlanır.",
        },
        {
          question: "Malkara'da alarm sistemi için garanti sunuluyor mu?",
          answer:
            "Evet. Kurulumda kullanılan ekipmanlar ve işçilik için garanti belgesi düzenlenir.",
        },
        {
          question: "Alarm sistemi elektrik kesildiğinde çalışır mı?",
          answer:
            "Evet. Paneldeki yedek batarya elektrik kesintilerinde sistemi 8-24 saat aktif tutar.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Malkara Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Malkara'daki sanayi tesisleri ve ticari binalar için yetkilendirme tabanlı erişim kontrolü. Personel takibi ve güvenli giriş yönetimi.",
      whatsappMessage:
        "Merhaba, Malkara'da kartlı geçiş sistemi için bilgi almak istiyorum.",
      commercialAngle:
        "Malkara organize sanayi alanındaki tesisler için çalışan giriş yönetimini dijitale taşımak hem güvenliği artırır hem kayıtları düzenler.",
      ctaTitle: "Malkara'da Erişim Kontrolü",
      ctaSubtitle: "Tesisiniz için Malkara'da kartlı geçiş keşfi alın.",
      faqs: [
        {
          question: "Malkara'da kartlı geçiş sistemi ne kadar sürede kurulur?",
          answer:
            "Tek noktada kurulum yarım günde, çok kapılı sistemlerde 1 gün içinde tamamlanır.",
        },
        {
          question: "Malkara'da sisteme sonradan kamera entegrasyonu yapılabilir mi?",
          answer:
            "Evet. Kartlı geçiş ve kamera sistemi entegre çalışarak geçiş anındaki görüntüyü log kaydına ekler.",
        },
        {
          question: "Kartlı sistem yazılımı hangi cihazlardan yönetilir?",
          answer:
            "Windows tabanlı merkezi yazılımın yanı sıra mobil uygulama üzerinden de yönetim ve raporlama yapılabilir.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Marmaraereğlisi — Liman ve petrokimya
// ---------------------------------------------------------------------------

const marmaraereglisi: DistrictProfile = {
  name: "Marmaraereğlisi",
  slug: "marmaraereglisi",
  locative: "Marmaraereğlisi'nde",
  districtIntro:
    "Marmara Denizi kıyısındaki Marmaraereğlisi, TÜPRAŞ rafinerisi ve liman tesisleriyle Türkiye'nin kritik petrokimya ve enerji üretim noktalarından biridir. Büyük ölçekli endüstriyel tesisler güvenlik altyapısında en yüksek standartları gerektirmektedir.",
  landmarks: [
    "TÜPRAŞ Rafinerisi",
    "Marmaraereğlisi Limanı",
    "Marmaraereğlisi Merkez",
    "Silahtarağa",
  ],
  nearbyDistricts: ["suleymanpasa", "sarkoy"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Marmaraereğlisi Kamera Sistemi Kurulumu",
      heroIntro:
        "Marmaraereğlisi'ndeki büyük ölçekli endüstriyel tesisler ve liman alanı için kurumsal güvenlik kamera sistemleri. Rafine ve petrokimya tesislerine özel ex-proof seçenekler dahil.",
      whatsappMessage:
        "Merhaba, Marmaraereğlisi'nde kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "TÜPRAŞ ve liman tesislerinin güvenlik standartları, çevre izleme ve çalışan güvenliği açısından gelişmiş kamera altyapısı gerektirmektedir.",
      ctaTitle: "Marmaraereğlisi'nde Endüstriyel Kamera Güvenliği",
      ctaSubtitle:
        "Tesisinizin güvenlik kamera altyapısı için keşif ve teklif alın.",
      faqs: [
        {
          question: "Marmaraereğlisi'nde petrokimya tesisi için özel kamera gerekir mi?",
          answer:
            "Yanıcı ve patlayıcı madde olan zonlarda ex-proof (patlamaya dayanıklı) kameralar zorunludur. Bu bölgeler keşifte tespit edilerek uygun kameralar planlanır.",
        },
        {
          question: "Liman alanı için geniş alan izleme kameraları mevcut mu?",
          answer:
            "Evet. PTZ ve termal kameralar ile büyük liman alanları ve deniz yüzeyi izlenebilir. Gece görüşü ve sis filtreleri eklenebilir.",
        },
        {
          question: "Marmaraereğlisi'nde kamera sistemi güvenlik belgeli mi?",
          answer:
            "Kurulum sonrası sistem belgesi ve ekipman teknik şartnamesini içeren dosya teslim edilir. İSG ve sigorta belgelerine dahil edilebilir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Marmaraereğlisi Alarm Sistemi Kurulumu",
      heroIntro:
        "Marmaraereğlisi'ndeki endüstriyel tesisler ve merkez işyerleri için çevre güvenliği sağlayan alarm sistemleri. İzinsiz giriş tespiti ve anında bildirim.",
      whatsappMessage:
        "Merhaba, Marmaraereğlisi'nde alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Marmaraereğlisi'nin büyük sanayi tesisleri, liman çevresi ve merkez işyerleri gece saatlerinde etkili izinsiz giriş engelleme sistemleri gerektiriyor.",
      ctaTitle: "Marmaraereğlisi'nde Alarm Güvenliği",
      ctaSubtitle: "Tesisiniz veya işyeriniz için Marmaraereğlisi'nde alarm keşfi alın.",
      faqs: [
        {
          question: "Marmaraereğlisi'nde sanayi tesisi çevre alarmı nasıl kurulur?",
          answer:
            "Tesis çevresine kızılötesi bariyer ve vibrasyon sensörleri yerleştirilerek duvar ihlali öncesinde alarm verilir. İç mekân için PIR sensörler eklenir.",
        },
        {
          question: "Alarm sistemi güvenlik güçlerine otomatik bildirim yapabilir mi?",
          answer:
            "Evet. Alarm merkezi veya özel güvenlik şirketi bağlantısı ile alarm anında ilgili kişilere otomatik bildirim iletilir.",
        },
        {
          question: "Marmaraereğlisi için kurumsal alarm bakım sözleşmesi var mı?",
          answer:
            "Evet. Yıllık bakım, periyodik test ve öncelikli arıza müdahalesi kapsayan kurumsal bakım sözleşmeleri sunuyoruz.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Marmaraereğlisi Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "TÜPRAŞ ve liman tesisleri için çalışan, yüklenici ve ziyaretçi erişimini katı güvenlik protokollerine göre yöneten kurumsal kartlı geçiş ve biyometrik sistemler.",
      whatsappMessage:
        "Merhaba, Marmaraereğlisi'nde kartlı geçiş sistemi için bilgi almak istiyorum.",
      commercialAngle:
        "Kritik enerji altyapısı ve liman güvenlik standartları, Marmaraereğlisi'ndeki büyük tesisler için en gelişmiş erişim kontrol sistemlerini zorunlu kılıyor.",
      ctaTitle: "Marmaraereğlisi'nde Kurumsal Erişim Kontrolü",
      ctaSubtitle:
        "Büyük tesisiniz için erişim güvenlik altyapısı keşfi ve teklifini alın.",
      faqs: [
        {
          question: "Marmaraereğlisi'ndeki büyük tesiste kaç geçiş noktasına sistem gerekiyor?",
          answer:
            "Ana giriş, ziyaretçi kapısı, üretim alanları, depo ve teknik hacimler ayrı güvenlik zonları olarak tasarlanmalıdır. Keşifte tüm noktalar haritalanır.",
        },
        {
          question: "Yüklenici ve alt yükleniciler için geçici kartlı erişim nasıl yönetilir?",
          answer:
            "Proje bazlı zaman sınırlı kart profilleri oluşturulur; belirlenen kapı ve saatlerde geçiş yetkisi otomatik olarak sona erer.",
        },
        {
          question: "Marmaraereğlisi için biyometrik erişim sistemi kurulabilir mi?",
          answer:
            "Evet. Parmak izi, yüz tanıma veya iris tabanlı biyometrik kart sistemiyle kombinlenebilir. Kritik zonlar için çift faktörlü doğrulama önerilir.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Saray — Kuzey Trakya, karma ilçe
// ---------------------------------------------------------------------------

const saray: DistrictProfile = {
  name: "Saray",
  slug: "saray",
  locative: "Saray'da",
  districtIntro:
    "Tekirdağ'ın kuzeyinde Bulgaristan sınırına yakın konumdaki Saray ilçesi, tarım, küçük sanayi ve konut alanlarıyla karma bir yapıya sahiptir. Çerkezköy'e yakınlığı sanayi aksının etkisini ilçeye taşımaktadır.",
  landmarks: [
    "Saray Merkez",
    "Büyükyoncalı",
    "Safaalan",
  ],
  nearbyDistricts: ["cerkezkoy", "muratli"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Saray Kamera Sistemi Kurulumu",
      heroIntro:
        "Saray'daki tarımsal işletmeler, küçük sanayi tesisleri ve konutlar için uygun maliyetli kamera güvenlik sistemleri. Keşif ve kurulum Saray'da.",
      whatsappMessage:
        "Merhaba, Saray'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Saray'da sınır yakınlığından kaynaklanan güvenlik hassasiyeti ve tarımsal depolarda kamera talebini artırıyor.",
      ctaTitle: "Saray'da Kamera Güvenliği",
      ctaSubtitle: "İşyeriniz veya çiftliğiniz için Saray'da keşif alın.",
      faqs: [
        {
          question: "Saray'da tarımsal alan veya çiftlik için kamera kurulabilir mi?",
          answer:
            "Evet. Elektrik ve internet altyapısı olan noktalara kablo, olmayan noktalara 4G veya güneş enerjili çözümler uygulanabilir.",
        },
        {
          question: "Saray'a servis ekibi ne kadar sürede gelir?",
          answer:
            "Çerkezköy merkezimizden Saray'a yaklaşık 30-40 dakikada ulaşılır. Randevu günü keşif ve kurulum yapılır.",
        },
        {
          question: "Saray'da kamera sistemi için internet bağlantısı şart mı?",
          answer:
            "Kayıt için internet şart değildir; uzaktan erişim ve bulut yedekleme için internet bağlantısı gerekir. 4G modem ile çözüm sunulabilir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Saray Alarm Sistemi Kurulumu",
      heroIntro:
        "Saray'daki konutlar ve küçük işletmeler için hırsızlık caydırıcı, GSM modüllü alarm sistemleri. İnternet bağlantısı olmadan da SMS bildirimi çalışır.",
      whatsappMessage:
        "Merhaba, Saray'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Saray'da özellikle gece ıssız kalan tarımsal depolar ve küçük işyerleri için alarm sistemi en düşük maliyetli güvenlik yatırımıdır.",
      ctaTitle: "Saray'da Alarm Sistemi Kurun",
      ctaSubtitle: "İşyeriniz veya eviniz için Saray'da alarm keşfi alın.",
      faqs: [
        {
          question: "Saray'da internet olmayan bölgede alarm sistemi çalışır mı?",
          answer:
            "Evet. GSM/SIM kartlı alarm sistemleri internet bağlantısı olmaksızın ses ve SMS bildirimi yapar.",
        },
        {
          question: "Saray'da alarm sistemi için kurulum ücreti nedir?",
          answer:
            "Keşif ücretsizdir. Kurulum maliyeti kullanılacak ekipman sayısı ve türüne göre keşif sonrası yazılı olarak bildirilir.",
        },
        {
          question: "Alarm sistemi kaç yıl kullanılabilir?",
          answer:
            "Kaliteli ekipmanlarla kurulan sistemler düzenli bakımda 8-12 yıl sorunsuz çalışır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Saray Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Saray'daki sanayi ve ticari işletmeler için personel giriş yönetimi ve erişim kontrolü amacıyla kartlı geçiş sistemleri.",
      whatsappMessage:
        "Merhaba, Saray'da kartlı geçiş sistemi için bilgi almak istiyorum.",
      commercialAngle:
        "Çerkezköy sanayi aksında yer alan Saray'daki işletmeler için kartlı geçiş sistemi personel yönetimini kolaylaştırır.",
      ctaTitle: "Saray'da Erişim Kontrolü",
      ctaSubtitle: "İşyeriniz için Saray'da kartlı geçiş keşfi alın.",
      faqs: [
        {
          question: "Saray'da küçük bir işletme için hangi kartlı sistem uygundur?",
          answer:
            "Standalone (bağımsız) kart okuyucu ile tek kapı sistemi en uygun maliyetli başlangıç seçeneğidir.",
        },
        {
          question: "Saray'da kartlı sistem yazılımı bulut tabanlı olabilir mi?",
          answer:
            "Evet. Bulut tabanlı sistemler internet üzerinden her yerden yönetilir; sunucu maliyeti ortadan kalkar.",
        },
        {
          question: "Saray'da sisteme kaç kişi tanımlanabilir?",
          answer:
            "Sistem kapasitesine göre onlarca ila binlerce kullanıcı tanımlanabilir. İlk kuruluşta ihtiyacınıza uygun kapasite seçilir.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Şarköy — Marmara kıyısı, turizm ve bağcılık
// ---------------------------------------------------------------------------

const sarkoy: DistrictProfile = {
  name: "Şarköy",
  slug: "sarkoy",
  locative: "Şarköy'de",
  districtIntro:
    "Marmara Denizi'nin güney kıyısında bağcılık ve turizmin öne çıktığı Şarköy, yazlık konutlar, butik oteller ve bağ evleriyle karma bir güvenlik talebi oluşturmaktadır. Sezonluk nüfus yoğunluğu güvenlik altyapısını daha kritik hale getirmektedir.",
  landmarks: [
    "Şarköy Merkez",
    "Şarköy Sahili",
    "Mürefte",
    "Gaziköy",
  ],
  nearbyDistricts: ["suleymanpasa", "malkara", "marmaraereglisi"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Şarköy Kamera Sistemi Kurulumu",
      heroIntro:
        "Şarköy'deki yazlık villalar, bağ evleri, butik oteller ve konut siteleri için kamera güvenlik sistemleri. Sezonda ve sezon dışında uzaktan izleme imkânı.",
      whatsappMessage:
        "Merhaba, Şarköy'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Şarköy'ün sezonluk turizm yapısı yazlık konutları ve otelleri yılın büyük bölümünde sahipsiz bırakıyor; uzaktan izlemeli kamera sistemi bu ihtiyacı karşılıyor.",
      ctaTitle: "Şarköy'de Yazlık ve Otel Kamera Güvenliği",
      ctaSubtitle:
        "Yazlığınız, bağ eviniz veya oteliniz için Şarköy'de keşif alın; uzaktan izleme birlikte kurulsun.",
      faqs: [
        {
          question: "Şarköy'deki yazlığımı sezon dışında kamerayla izleyebilir miyim?",
          answer:
            "Evet. Mobil uygulama veya web arayüzü ile dünyanın her yerinden canlı ve kayıtlı görüntülere erişebilirsiniz. Hareket algılandığında anında bildirim alırsınız.",
        },
        {
          question: "Şarköy'de bağ evi için güneş enerjili kamera sistemi kurulabilir mi?",
          answer:
            "Evet. Elektrik altyapısı olmayan bağ evleri için güneş paneli + akü sistemi ile kamera ve 4G modem çalıştırılabilir.",
        },
        {
          question: "Şarköy'deki otelim için kaç kamera yeterli?",
          answer:
            "Otel giriş-çıkışı, otopark, havuz çevresi ve bahçe alanlarına göre genellikle 8-20 kamera ile kapsamlı izleme sağlanır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Şarköy Alarm Sistemi Kurulumu",
      heroIntro:
        "Şarköy'deki yazlık konutlar, bağ evleri ve ticari işletmeler için sezon dışı güvenliği sağlayan alarm sistemleri. Sahipsiz mülkleri hırsızlık ve izinsiz girişe karşı koruyun.",
      whatsappMessage:
        "Merhaba, Şarköy'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Şarköy'de sezon bittikten sonra aylarca boş kalan yazlık konutlar hırsızlık için risk altındadır. Alarm sistemi bu dönemde en etkili koruma aracıdır.",
      ctaTitle: "Şarköy'de Yazlık Güvenliğini Alarma Bağlayın",
      ctaSubtitle:
        "Yazlığınız veya bağ eviniz için Şarköy'de alarm keşfi alın.",
      faqs: [
        {
          question: "Sezon dışında Şarköy'deki yazlığıma alarm kurulabilir mi?",
          answer:
            "Evet. Alarm sistemi kurulumu sezon bağımsızdır. Sezon öncesi veya sezon sonrasında da kurulum yapılır.",
        },
        {
          question: "Şarköy'deki yazlıkta elektrik olmadığında alarm çalışır mı?",
          answer:
            "Panel bataryası 8-24 saat yedek güç sağlar. Uzun süreli kesintiler için güneş enerjili yedek güç seçeneği eklenebilir.",
        },
        {
          question: "Şarköy'de alarm kurulumu için sezon öncesi randevu ne zaman alınmalı?",
          answer:
            "Sezon öncesinde yoğunluk artar; en geç Nisan ayında randevu almak önerilir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Şarköy Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Şarköy'deki konut siteleri ve butik oteller için misafir ve sakin takibi amacıyla kartlı geçiş sistemleri. Sezonluk yönetimi kolaylaştırır.",
      whatsappMessage:
        "Merhaba, Şarköy'de kartlı geçiş sistemi için bilgi almak istiyorum.",
      commercialAngle:
        "Şarköy'ün yazlık konut sitelerinde sezonluk misafir ve ziyaretçi akışını yönetmek için kartlı geçiş sistemi pratik bir çözümdür.",
      ctaTitle: "Şarköy'de Giriş Kontrolü",
      ctaSubtitle: "Site veya oteliniz için Şarköy'de kartlı geçiş keşfi alın.",
      faqs: [
        {
          question: "Şarköy'deki yazlık sitem için kartlı geçiş sistemi sezonluk çalışabilir mi?",
          answer:
            "Evet. Sezon başında sisteme sakin kartları yüklenir; sezon sonunda listeler arşivlenir ve bir sonraki sezona hazır tutulur.",
        },
        {
          question: "Otel misafirlerine her gün yeni kart mı verilmeli?",
          answer:
            "Hayır. RFID kart veya mobil anahtar sistemlerinde check-in/check-out tarihlerine göre oda erişimi otomatik aktif-pasif yapılır.",
        },
        {
          question: "Şarköy'de kartlı sistem servisi nasıl sağlanır?",
          answer:
            "Süleymanpaşa servis noktamızdan Şarköy'e randevu günü ulaşılır. Yazılım sorunları uzaktan çözülür.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Tekirdağ District Profiles Registry
// ---------------------------------------------------------------------------

export const tekirdagDistrictProfiles: Record<string, DistrictProfile> = {
  cerkezkoy,
  corlu,
  suleymanpasa,
  ergene,
  kapakli,
  muratli,
  hayrabolu,
  malkara,
  marmaraereglisi,
  saray,
  sarkoy,
};

/** Pilot services for Tekirdağ district pages */
export const tekirdagPilotServiceSlugs = [
  "kamera-sistemi-kurulumu",
  "alarm-sistemi-kurulumu",
  "kartli-gecis-sistemi-kurulumu",
] as const;

export type TekirdagPilotServiceSlug =
  (typeof tekirdagPilotServiceSlugs)[number];

/**
 * District/service combos for Tekirdağ — approved for static generation and sitemap.
 * 11 districts × 3 services = 33 pages.
 */
export function getApprovedTekirdagDistrictServiceParams() {
  return Object.values(tekirdagDistrictProfiles).flatMap((profile) =>
    tekirdagPilotServiceSlugs
      .filter((serviceSlug) => Boolean(profile.services[serviceSlug]))
      .map((serviceSlug) => ({
        city: "tekirdag" as const,
        district: profile.slug,
        service: serviceSlug,
      })),
  );
}

export function getTekirdagDistrictProfile(
  districtSlug: string,
): DistrictProfile | undefined {
  return tekirdagDistrictProfiles[districtSlug];
}

export function getTekirdagDistrictServiceContent(
  districtSlug: string,
  serviceSlug: string,
) {
  return tekirdagDistrictProfiles[districtSlug]?.services[serviceSlug];
}
