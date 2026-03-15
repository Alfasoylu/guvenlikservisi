export interface SeoServiceContent {
  heroIntro: string;
  localContext: string;
  benefits: string[];
  process: string[];
  statsTitle: string;
  statsDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  metadataIntent: string;
  metadataTargets: string[];
}

export const serviceContent: Record<string, SeoServiceContent> = {
  "kamera-sistemi-kurulumu": {
    heroIntro:
      "{city} içinde apartman, site, mağaza, ofis, depo ve fabrika gibi farklı alanlar için IP kamera sistemleri kuruyoruz. Kör nokta analizi, kayıt süresi planlaması ve uzaktan izleme kurulumu ile süreci tek ekipte yönetiyoruz.",
    localContext:
      "{city} içinde yoğun insan trafiği olan girişler, çevre alanları ve kritik kayıt noktaları için sahaya özel kamera yerleşimi planlıyoruz.",
    benefits: [
      "Hırsızlık ve izinsiz giriş riskini azaltır.",
      "Uzaktan canlı izleme ve kayıt erişimi sağlar.",
      "İşyeri, apartman ve depo güvenliğini güçlendirir.",
    ],
    process: [
      "Ücretsiz keşif ve risk analizi",
      "Doğru kamera noktalarının belirlenmesi",
      "Profesyonel montaj ve kablolama",
      "Mobil izleme ve kayıt erişimi kurulumu",
    ],
    statsTitle: "Kamera sistemi kurulumunda saha odaklı yaklaşım",
    statsDescription:
      "{city} içinde kamera sistemi kurulumu yaparken görüntü kalitesi kadar kör nokta yönetimi, kayıt süresi ve uzaktan erişim kolaylığını birlikte ele alıyoruz.",
    ctaTitle: "{city} için ücretsiz keşif ve kamera sistemi teklifi alın",
    ctaDescription:
      "{city} içinde kamera sistemi kurulumu için hemen bizimle iletişime geçin. İhtiyacınıza göre uygun kamera sayısını, kayıt cihazını ve sistem maliyetini birlikte netleştirelim.",
    metadataIntent: "profesyonel kamera sistemi kurulumu",
    metadataTargets: ["işyeri", "apartman", "depo"],
  },
  "alarm-sistemi-kurulumu": {
    heroIntro:
      "{city} içinde ev, işyeri ve ticari alanlar için alarm sistemi kurulumu yapıyoruz. Giriş noktaları, hareket alanları ve bildirim senaryolarını mekana göre planlıyoruz.",
    localContext:
      "{city} içinde kapanış sonrası kontrol ihtiyacı olan işyerleri ve konutlarda alarm senaryosunu kullanım kolaylığıyla birlikte kurguluyoruz.",
    benefits: [
      "Yetkisiz giriş durumunda hızlı uyarı sağlar.",
      "Mobil bildirim ile uzaktan kontrol imkanı sunar.",
      "Konut ve işyeri güvenliğinde caydırıcılığı artırır.",
    ],
    process: [
      "Ücretsiz keşif ve giriş noktası analizi",
      "Panel ve dedektör planının oluşturulması",
      "Siren, kontak ve dedektör montajı",
      "Bildirim ve kullanım ayarlarının teslimi",
    ],
    statsTitle: "Alarm sisteminde doğru senaryo en kritik adımdır",
    statsDescription:
      "{city} içinde alarm sistemi kurulumu yaparken sadece cihaz yerleşimini değil, kullanım alışkanlığını ve risk seviyesini de birlikte planlıyoruz.",
    ctaTitle: "{city} alarm sistemi için hızlı teklif alın",
    ctaDescription:
      "{city} içindeki mekanınız için doğru alarm panelini, dedektör sayısını ve mobil bildirim senaryosunu birlikte netleştirelim.",
    metadataIntent: "profesyonel alarm sistemi kurulumu",
    metadataTargets: ["ev", "işyeri", "mağaza"],
  },
  "yangin-alarm-sistemi-kurulumu": {
    heroIntro:
      "{city} içinde bina tipi ve kullanım yoğunluğuna uygun yangın alarm sistemi kurulumu yapıyoruz. Dedektör, buton, flaşör ve santral yerleşimini projeye göre planlıyoruz.",
    localContext:
      "{city} içinde apartman, işyeri ve ticari yapılarda erken algılama ve güvenli tahliye için doğru algılama noktalarını belirliyoruz.",
    benefits: [
      "Erken yangın algılama ile müdahale süresini kısaltır.",
      "Bina güvenliği ve kullanıcı güvenliğini güçlendirir.",
      "Bakım ve servis planı ile uzun vadeli süreklilik sağlar.",
    ],
    process: [
      "Keşif ve algılama alanlarının belirlenmesi",
      "Santral ve dedektör planının oluşturulması",
      "Saha montajı ve kablolama",
      "Senaryo testleri ve devreye alma",
    ],
    statsTitle: "Yangın alarm projelerinde teknik planlama belirleyicidir",
    statsDescription:
      "{city} içinde yangın alarm sistemi kurulumu yaparken algılama noktalarını, kaçış güzergahlarını ve test senaryolarını birlikte planlıyoruz.",
    ctaTitle: "{city} yangın alarm sistemi için keşif planlayın",
    ctaDescription:
      "{city} içindeki yapınız için algılama noktalarını, santral yapısını ve kurulum kapsamını birlikte belirleyelim.",
    metadataIntent: "yangın alarm sistemi kurulumu",
    metadataTargets: ["apartman", "işyeri", "depo"],
  },
  "kartli-gecis-sistemi-kurulumu": {
    heroIntro:
      "{city} içinde plaza, ofis, fabrika, depo ve apartman girişleri için kartlı geçiş ve turnike sistemi kuruyoruz. Okuyucu, kilit, turnike, biyometrik doğrulama ve PDKS uyumlu yetkilendirme altyapısını giriş senaryosuna göre planlıyoruz.",
    localContext:
      "{city} içinde kontrollü giriş gereken plaza lobileri, ofis katları, vardiyalı fabrika girişleri ve apartman kapılarında hızlı ama denetlenebilir geçiş akışı kuruyoruz.",
    benefits: [
      "Yetkili erişimi net şekilde yönetir.",
      "Kapı, turnike ve personel giriş noktalarında merkezi kontrol sağlar.",
      "PDKS, ziyaretçi yönetimi ve vardiya takibi gibi operasyonları destekler.",
    ],
    process: [
      "Kapı tipi, turnike ihtiyacı ve kullanıcı yoğunluğu analizi",
      "Okuyucu, kilit, turnike ve kontrol paneli altyapısının planlanması",
      "Montaj, entegrasyon ve bağlantı testlerinin tamamlanması",
      "Kart tanımı, yetki kurgusu ve PDKS teslimi",
    ],
    statsTitle: "Geçiş kontrolünde kullanım kolaylığı kadar güvenlik de önemlidir",
    statsDescription:
      "{city} içinde kartlı geçiş ve turnike sistemleri kurarken kapı tipi, kullanıcı yoğunluğu, vardiya akışı ve raporlama ihtiyacını birlikte değerlendiriyoruz.",
    ctaTitle: "{city} kartlı geçiş ve turnike sistemi için çözüm alın",
    ctaDescription:
      "{city} içindeki yapınız için kullanıcı sayısını, kapı ve turnike tipini, PDKS veya ziyaretçi yönetimi ihtiyacını birlikte planlayalım.",
    metadataIntent: "kartlı geçiş ve turnike sistemi kurulumu",
    metadataTargets: ["plaza", "ofis", "fabrika", "depo"],
  },
  "apartman-site-guvenlik-sistemi": {
    heroIntro:
      "{city} içinde apartman ve site projeleri için kamera, alarm, geçiş kontrol ve çevre güvenliği çözümlerini birlikte planlıyoruz. Tek cihaz kurulumu yerine tüm alan güvenliğini ele alıyoruz.",
    localContext:
      "{city} içinde apartman ve site projelerinde girişler, otoparklar ve ortak alanlar için sakinleri yormayan ama güvenliği güçlendiren bir yapı kuruyoruz.",
    benefits: [
      "Ortak alanlarda sürekli izleme ve kontrol sağlar.",
      "Giriş, otopark ve çevre güvenliğini tek yapıda toplar.",
      "Site yönetimi için takip ve kullanım kolaylığı sunar.",
    ],
    process: [
      "Ortak alan ve giriş keşfi",
      "Kamera ve geçiş planının oluşturulması",
      "Montaj ve sistem entegrasyonu",
      "Yönetim ve kullanıcı teslimi",
    ],
    statsTitle: "Apartman ve site projelerinde bütüncül kurulum gerekir",
    statsDescription:
      "{city} içinde apartman ve site güvenlik sistemi kurarken yalnızca kamera yerleşimini değil, giriş akışını ve ortak alan kullanımını da planlıyoruz.",
    ctaTitle: "{city} apartman ve site güvenliği için teklif alın",
    ctaDescription:
      "{city} içindeki apartman veya site projeniz için giriş noktalarını, ortak alanları ve çevre güvenliğini birlikte planlayalım.",
    metadataIntent: "apartman ve site güvenlik sistemi kurulumu",
    metadataTargets: ["apartman", "site", "otopark"],
  },
  "isyeri-guvenlik-sistemi": {
    heroIntro:
      "{city} içinde ofis, mağaza ve ticari işletmeler için işyeri güvenlik sistemleri kuruyoruz. Kamera, alarm ve geçiş kontrol ihtiyaçlarını işletmenin kullanım biçimine göre bir araya getiriyoruz.",
    localContext:
      "{city} içinde müşteri trafiği, kasa alanı, depo erişimi ve kapanış sonrası güvenlik ihtiyacı olan işyerlerinde sahaya özel planlama yapıyoruz.",
    benefits: [
      "İşyeri kapanış sonrası güvenliği güçlendirir.",
      "Personel ve müşteri alanlarını kontrollü yönetmeye yardımcı olur.",
      "Kamera, alarm ve erişim sistemlerini tek kurgu içinde toplar.",
    ],
    process: [
      "İşyeri keşfi ve risk noktalarının belirlenmesi",
      "Doğru sistem bileşenlerinin seçilmesi",
      "Temiz montaj ve devreye alma",
      "Kullanım ve uzaktan erişim teslimi",
    ],
    statsTitle: "İşyeri projelerinde operasyonu aksatmayan kurulum hedefliyoruz",
    statsDescription:
      "{city} içinde işyeri güvenlik sistemi kurarken kasa noktaları, satış alanı, depo erişimi ve günlük operasyon akışını birlikte değerlendiriyoruz.",
    ctaTitle: "{city} işyeri güvenlik sistemi için hızlı teklif alın",
    ctaDescription:
      "{city} içindeki işyeriniz için günlük operasyonu aksatmayan, gerçekten işe yarayan güvenlik altyapısını birlikte kuralım.",
    metadataIntent: "işyeri güvenlik sistemi kurulumu",
    metadataTargets: ["işyeri", "mağaza", "ofis"],
  },
  "fabrika-depo-guvenlik-sistemi": {
    heroIntro:
      "{city} içinde fabrika, depo ve sanayi tesisleri için geniş alan güvenlik sistemleri kuruyoruz. Çevre izleme, giriş kontrolü ve kayıt sürekliliğini birlikte planlıyoruz.",
    localContext:
      "{city} içinde üretim alanı, sevkiyat hattı ve açık çevre güvenliği gereken projelerde ölçeklenebilir sistem tasarlıyoruz.",
    benefits: [
      "Geniş alanlarda kritik noktaların izlenmesini sağlar.",
      "Araç ve personel girişlerini kontrollü hale getirir.",
      "Kayıt sürekliliği ile olay takibini kolaylaştırır.",
    ],
    process: [
      "Saha keşfi ve kritik nokta analizi",
      "Çevre, giriş ve kayıt planının oluşturulması",
      "Montaj ve saha testlerinin tamamlanması",
      "Uzaktan erişim ve operasyon teslimi",
    ],
    statsTitle: "Sanayi ve depo projelerinde ölçek doğru planlanmalıdır",
    statsDescription:
      "{city} içinde fabrika ve depo güvenlik sistemi kurarken metrekare, çevre sınırı, gece görüşü ve kayıt kapasitesini birlikte planlıyoruz.",
    ctaTitle: "{city} fabrika ve depo güvenliği için keşif alın",
    ctaDescription:
      "{city} içindeki tesisiniz için giriş noktaları, çevre alanı ve kayıt ihtiyacını birlikte planlayalım.",
    metadataIntent: "fabrika ve depo güvenlik sistemi kurulumu",
    metadataTargets: ["fabrika", "depo", "sanayi tesisi"],
  },
  "bakim-servis-uzaktan-izleme": {
    heroIntro:
      "{city} içinde kurulu güvenlik sistemleri için bakım, servis ve uzaktan izleme desteği veriyoruz. Arıza tespiti, kayıt kontrolü ve bağlantı sorunlarını hızlı şekilde ele alıyoruz.",
    localContext:
      "{city} içinde mevcut sistemi sorun çıkaran ama tamamen değişmesi gerekmeyen projelerde hedefimiz doğru arıza noktasını hızlı tespit etmektir.",
    benefits: [
      "Mevcut sistemin arıza kaynağını netleştirir.",
      "Kayıt, bağlantı ve uzaktan erişim sorunlarını azaltır.",
      "Periyodik bakım ile sistemin sürekliliğini destekler.",
    ],
    process: [
      "Arıza ön değerlendirmesi ve sistem analizi",
      "Saha veya uzaktan müdahale planı",
      "Kayıt, bağlantı ve cihaz kontrolleri",
      "Kullanıcı bilgilendirmesi ve teslim",
    ],
    statsTitle: "Bakım ve servis hizmetinde önce gerçek sorunu buluyoruz",
    statsDescription:
      "{city} içinde bakım ve servis taleplerinde görüntü kaybı, kayıt problemi ve uzaktan erişim sorunlarını tek tek analiz ederek çözüm sunuyoruz.",
    ctaTitle: "{city} bakım ve servis desteği alın",
    ctaDescription:
      "{city} içindeki mevcut güvenlik sisteminiz için arıza tespiti, bakım planı ve uzaktan erişim desteğini birlikte netleştirelim.",
    metadataIntent: "bakım, servis ve uzaktan izleme desteği",
    metadataTargets: ["kamera sistemi", "alarm sistemi", "mevcut güvenlik altyapısı"],
  },
  "kamera-sistemi-bakim-sozlesmesi": {
    heroIntro:
      "{city} içinde kurulu kamera sistemleri için periyodik bakım sözleşmesi sunuyoruz. Kayıt süresi, disk sağlığı, kamera açıları ve mobil erişim ayarlarını düzenli kontrol ederek sistemin kesintisiz çalışmasını hedefliyoruz.",
    localContext:
      "{city} içinde çok kameralı işyeri, apartman, site ve depo projelerinde bakım sözleşmesi arıza çıkmadan önce riskleri görünür hale getirir.",
    benefits: [
      "Kayıt kaybı ve kör nokta riskini azaltır.",
      "Hard disk, bağlantı ve görüntü kalitesi sorunlarını erken tespit eder.",
      "Acil arıza maliyetini düşüren planlı bakım disiplini sağlar.",
    ],
    process: [
      "Mevcut sistemin ilk kontrolü ve envanter çıkarımı",
      "Kamera, kayıt cihazı ve disk sağlığı testleri",
      "Açı, temizlik ve uzaktan erişim kontrolleri",
      "Periyodik bakım planı ve servis notlarının teslimi",
    ],
    statsTitle: "Bakım sözleşmesinde amaç sadece arıza gidermek değildir",
    statsDescription:
      "{city} içinde kamera sistemi bakım sözleşmelerinde odağımız, kayıt kaybı yaşanmadan önce sistem zayıflıklarını tespit edip operasyonu kesintisiz sürdürmektir.",
    ctaTitle: "{city} kamera sistemi bakım sözleşmesi için teklif alın",
    ctaDescription:
      "{city} içindeki mevcut kamera altyapınız için bakım periyodunu, kontrol kapsamını ve müdahale yaklaşımını birlikte netleştirelim.",
    metadataIntent: "kamera sistemi bakım sözleşmesi",
    metadataTargets: ["site", "işyeri", "depo"],
  },
  "guvenlik-sistemi-teknik-servis": {
    heroIntro:
      "{city} içinde kamera, alarm ve geçiş kontrol sistemleri için teknik servis desteği veriyoruz. Çalışmayan cihazlar, bağlantı problemleri ve saha kaynaklı arızalar için hızlı müdahale planlıyoruz.",
    localContext:
      "{city} içinde mevcut sistemi tamamen değiştirmek yerine önce gerçek arıza kaynağını bulup teknik müdahale ile sistemi ayağa kaldırmaya odaklanıyoruz.",
    benefits: [
      "Mevcut kurulumun sorun kaynağını hızlı tespit eder.",
      "Saha müdahalesi ile duruş süresini azaltır.",
      "Kamera, alarm ve geçiş kontrol sistemlerini tek servis akışında ele alır.",
    ],
    process: [
      "Arıza belirtilerinin ön değerlendirmesi",
      "Saha veya uzaktan teknik kontrol",
      "Cihaz, bağlantı ve konfigürasyon müdahalesi",
      "Test, doğrulama ve kullanıcı bilgilendirmesi",
    ],
    statsTitle: "Teknik serviste doğru teşhis müdahale süresinden daha kritiktir",
    statsDescription:
      "{city} içinde teknik servis taleplerinde önce arıza sebebini netleştiriyor, gereksiz parça ve yanlış müdahale riskini azaltıyoruz.",
    ctaTitle: "{city} güvenlik sistemi teknik servis desteği alın",
    ctaDescription:
      "{city} içindeki mevcut sisteminiz için teknik servis kapsamını, acil müdahale ihtiyacını ve sonraki bakım adımlarını birlikte planlayalım.",
    metadataIntent: "güvenlik sistemi teknik servis",
    metadataTargets: ["kamera sistemi", "alarm sistemi", "işyeri"],
  },
  "kamera-ariza-servisi": {
    heroIntro:
      "{city} içinde görüntü vermeyen, kayıt yapmayan veya uzaktan erişim sorunu yaşayan kamera sistemleri için arıza servis desteği sunuyoruz. Önceliğimiz problemi hızlı teşhis edip sistemi yeniden çalışır hale getirmektir.",
    localContext:
      "{city} içinde mağaza, apartman, site ve depo projelerinde sık görülen kayıt cihazı, hard disk ve ağ bağlantısı arızalarını saha koşullarına göre ele alıyoruz.",
    benefits: [
      "Görüntü ve kayıt sorunlarının kaynağını hızla bulur.",
      "NVR, hard disk ve ağ kaynaklı arızaları ayrıştırır.",
      "Sistemin yeniden devreye alınma süresini kısaltır.",
    ],
    process: [
      "Arıza semptomlarının toplanması",
      "Kamera, kayıt cihazı ve ağ testleri",
      "Gerekli onarım ve ayar müdahalesi",
      "Kayıt ve uzaktan erişim doğrulaması",
    ],
    statsTitle: "Kamera arızalarında semptom değil kök neden çözülmelidir",
    statsDescription:
      "{city} içinde kamera arıza servisi verirken görüntü kaybı, kayıt sorunu ve bağlantı hatalarını tek tek test ederek sorunun kaynağını ayırıyoruz.",
    ctaTitle: "{city} kamera arıza servisi için hızlı destek alın",
    ctaDescription:
      "{city} içindeki kamera sisteminizde yaşadığınız arıza için belirtileri paylaşın; uygun müdahale yolunu birlikte netleştirelim.",
    metadataIntent: "kamera arıza servisi",
    metadataTargets: ["işyeri", "apartman", "site"],
  },
  "yangin-alarm-bakim-sozlesmesi": {
    heroIntro:
      "{city} içinde kurulu yangın alarm sistemleri için bakım sözleşmesi hizmeti sunuyoruz. Dedektör, buton, siren ve panel bileşenlerini periyodik testlerle kontrol ederek algılama sürekliliğini koruyoruz.",
    localContext:
      "{city} içinde otel, depo, ofis ve apartman projelerinde yangın alarm bakım planı; mevzuat, işletme güvenliği ve sistem güvenilirliği açısından kritik önem taşır.",
    benefits: [
      "Dedektör ve panel arızalarını erken görünür hale getirir.",
      "Periyodik test disiplini ile yangın alarm sürekliliğini korur.",
      "Bakım kayıtlarıyla işletme tarafında düzenli kontrol standardı oluşturur.",
    ],
    process: [
      "Mevcut panel ve saha cihazı envanterinin çıkarılması",
      "Dedektör, buton ve siren testlerinin planlanması",
      "Arıza ve zayıflıkların raporlanması",
      "Periyodik bakım takviminin oluşturulması",
    ],
    statsTitle: "Yangın alarm bakımında süreklilik kurulum kadar kritiktir",
    statsDescription:
      "{city} içinde yangın alarm bakım sözleşmelerinde odağımız, panel ve saha cihazlarının gerçekten çalışır durumda kalmasını doğrulayan düzenli test akışıdır.",
    ctaTitle: "{city} yangın alarm bakım sözleşmesi için keşif alın",
    ctaDescription:
      "{city} içindeki yapınız için yangın alarm bakım kapsamını, kontrol sıklığını ve saha test planını birlikte belirleyelim.",
    metadataIntent: "yangın alarm bakım sözleşmesi",
    metadataTargets: ["otel", "ofis", "depo"],
  },
  "uzaktan-kamera-izleme": {
    heroIntro:
      "{city} içinde mevcut veya yeni kurulan kamera sistemleri için uzaktan izleme hizmeti sunuyoruz. Mobil erişim, merkezi izleme ekranları ve kayıt takibini operasyon ihtiyaçlarına göre planlıyoruz.",
    localContext:
      "{city} içinde birden fazla noktayı takip eden işletmeler ve site yönetimleri için uzaktan izleme; sahaya gitmeden durum kontrolü ve olay takibi sağlar.",
    benefits: [
      "Canlı izleme ve kayıt takibini merkezi hale getirir.",
      "Birden fazla lokasyonun tek ekrandan yönetilmesini kolaylaştırır.",
      "Mobil erişim ile operasyon görünürlüğünü artırır.",
    ],
    process: [
      "Mevcut altyapı ve erişim ihtiyaçlarının analizi",
      "Kayıt cihazı, ağ ve kullanıcı yetkilerinin yapılandırılması",
      "Mobil ve masaüstü izleme kurulumunun tamamlanması",
      "Bildirim ve kullanıcı teslim süreçlerinin yapılması",
    ],
    statsTitle: "Uzaktan izleme sadece bağlantı değil operasyon görünürlüğüdür",
    statsDescription:
      "{city} içinde uzaktan izleme projelerinde cihaz bağlantısı kadar kullanıcı erişimi, kayıt takibi ve olay yönetimi akışını da birlikte tasarlıyoruz.",
    ctaTitle: "{city} uzaktan kamera izleme çözümü için teklif alın",
    ctaDescription:
      "{city} içindeki tesisiniz veya şubeniz için uzaktan izleme kapsamını, kullanıcı erişimlerini ve kayıt akışını birlikte planlayalım.",
    metadataIntent: "uzaktan kamera izleme hizmeti",
    metadataTargets: ["site yönetimi", "işyeri", "çok şubeli işletme"],
  },
};
