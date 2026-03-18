export interface UseCaseItem {
  title: string;
  description: string;
}

export interface SeoUseCasesContent {
  title: string;
  description: string;
  localContext: string;
  items: UseCaseItem[];
}

export const useCaseContent: Record<string, SeoUseCasesContent> = {
  "kamera-sistemi-kurulumu": {
    title: "Kamera sistemini en çok hangi alanlarda kuruyoruz?",
    description:
      "{city} içinde görüş açısı, gece performansı ve kayıt beklentisine göre en sık hizmet verdiğimiz kullanım alanları aşağıdadır.",
    localContext:
      "{city} içinde işyeri, apartman ve depo gibi farklı alanlarda kameranın yeri, açısı ve kayıt yapısı farklı planlanır.",
    items: [
      { title: "Daire ve müstakil ev", description: "Giriş kapısı, bahçe ve otopark noktalarının yazılı plan dahilinde izlenmesi." },
      { title: "Apartman girişleri", description: "Bina giriş kapısı, lobi ve asansör önünün 7/24 kayıt altında tutulması." },
      { title: "Site çevresi ve ortak alanlar", description: "Çevre çit hattı, park ve ortak kullanım alanlarının güvenlik kameralarıyla kapsanması." },
      { title: "Mağaza ve dükkanlar", description: "Kasa noktası, satış alanı ve depo girişinin görüntülenerek hırsızlık riskinin azaltılması." },
      { title: "Ofis ve işyerleri", description: "Giriş kontrol, toplantı alanı ve sunucu odası gibi kritik noktaların izlenmesi." },
      { title: "Depo ve fabrika alanları", description: "Raf koridorları, yükleme rampası ve çevre hattının geniş açılı kameralarla gözetlenmesi." },
      { title: "Otopark ve açık alanlar", description: "Araç giriş-çıkışı, plaka okuma ve gece görüşlü izleme ile açık alan güvenliği." },
      { title: "Villa çevre güvenliği", description: "Bahçe, çevre duvarı ve garaj girişlerinin hareket algılama destekli kameralarla korunması." },
    ],
  },
  "alarm-sistemi-kurulumu": {
    title: "Alarm sistemini hangi mekanlarda kuruyoruz?",
    description:
      "{city} içinde güvenlik seviyesi, giriş sayısı ve kullanım düzenine göre farklı mekan tiplerinde alarm sistemi kuruyoruz.",
    localContext:
      "{city} içinde alarm sistemi ihtiyacı mekanın kapanış düzenine, giriş sayısına ve risk yoğunluğuna göre değişir.",
    items: [
      { title: "Daire ve villa girişleri", description: "Kapı ve pencere kontaklarıyla giriş noktalarının korunması ve anlık bildirim alınması." },
      { title: "Küçük ve orta ölçekli ofisler", description: "Mesai dışı saatlerde hareket algılama ve sabotaj bildirimiyle ofis güvenliği." },
      { title: "Mağaza ve showroom alanları", description: "Kapanış sonrası alarm ile stok alanı ve satış bölümünün güvence altına alınması." },
      { title: "Apartman ortak girişleri", description: "Bina giriş kapısı ve lobi alanının manyetik kontak ve dedektörlerle korunması." },
      { title: "Depo ve stok odaları", description: "Yüksek değerli malzeme bulunan alanların bölümlenebilir alarm senaryolarıyla izlenmesi." },
      { title: "Kapanış sonrası kontrol gerektiren işletmeler", description: "Gece saatlerinde GSM veya internet üzerinden uzaktan izleme ve alarm yönetimi." },
    ],
  },
  "yangin-alarm-sistemi-kurulumu": {
    title: "Yangın alarm sistemi hangi alanlarda öne çıkıyor?",
    description:
      "{city} içinde erken algılama ve bina güvenliği gerektiren alanlarda yangın alarm sistemleri kuruyoruz.",
    localContext:
      "{city} içinde farklı yapı tiplerinde algılama noktaları ve uyarı senaryoları kullanım biçimine göre değişir.",
    items: [
      { title: "Apartman ve site ortak alanları", description: "Koridor, lobi ve kat holleri gibi ortak alanlarda erken yangın algılaması ve uyarı sistemi." },
      { title: "Ofis katları ve yönetim binaları", description: "Çok katlı ofis yapılarında zon bazlı yangın alarmı ve tahliye senaryoları." },
      { title: "Depo ve arşiv alanları", description: "Yanıcı malzeme riski olan kapalı alanlarda ısı ve duman dedektörü ile sürekli izleme." },
      { title: "Otel, pansiyon ve konaklama alanları", description: "Misafir güvenliği ve yasal uyumluluk için yangın algılama ve uyarı altyapısı." },
      { title: "Üretim ve teknik hacimler", description: "Yüksek ısı ve tozlu ortamlarda özel dedektör tipleriyle yangın riski takibi." },
      { title: "Mağaza ve showroom katları", description: "Yoğun müşteri trafiği olan alanlarda hızlı tahliye desteği için sesli ve ışıklı uyarı." },
    ],
  },
  "kartli-gecis-sistemi-kurulumu": {
    title: "Kartlı geçiş sistemi en çok hangi senaryolarda kullanılıyor?",
    description:
      "{city} içinde giriş kontrolü, personel yönetimi, PDKS ve güvenli alan ayrımı gereken yapılarda kartlı geçiş ve turnike sistemleri kuruyoruz.",
    localContext:
      "{city} içinde geçiş kontrolü gereken alanlarda kullanıcı sayısı, giriş yoğunluğu ve turnike ihtiyacı doğru çözümü belirler.",
    items: [
      { title: "Plaza ve ofis girişleri", description: "Lobi, kat geçişi ve departman bazlı yetkilendirme ile kontrollü erişim." },
      { title: "Apartman ve site kapıları", description: "Bina girişinde kart veya şifre ile sakin geçişi; kayıp anahtar riskinin ortadan kaldırılması." },
      { title: "Personel devam kontrol ve PDKS noktaları", description: "Vardiya takibi, mesai hesabı ve devam raporlaması için otomatik giriş-çıkış kaydı." },
      { title: "Depo, sevkiyat ve teknik oda girişleri", description: "Sadece yetkili personelin geçebileceği kritik alanların kart veya biyometrik kontrolü." },
      { title: "Turnikeli kurumsal ve ziyaretçi girişleri", description: "Yüksek trafiğe sahip bina girişlerinde turnike ile kontrollü akış ve ziyaretçi kaydı." },
      { title: "Vardiyalı fabrika personel geçişleri", description: "7/24 çalışan tesislerde vardiya değişimlerinin otomatik kaydı ve raporlaması." },
      { title: "Yetkili erişim gerektiren özel alanlar", description: "Sunucu odası, kasa ve arşiv gibi alanların kısıtlı geçiş kurallarıyla korunması." },
    ],
  },
  "apartman-site-guvenlik-sistemi": {
    title: "Apartman ve site projelerinde öne çıkan alanlar",
    description:
      "{city} içinde çoklu kullanıcı yapısına sahip projelerde güvenlik ihtiyacı genelde aşağıdaki alanlarda yoğunlaşıyor.",
    localContext:
      "{city} içinde apartman ve site güvenliğinde otopark, bina girişi ve ortak alan takibi aynı projede ele alınır.",
    items: [
      { title: "Bina girişleri ve lobi alanları", description: "Ana giriş kapısı ve lobi görüntülemesiyle ziyaretçi ve sakin trafiğinin izlenmesi." },
      { title: "Otopark giriş ve çıkışları", description: "Araç plaka okuma ve bariyer entegrasyonuyla kontrollü otopark yönetimi." },
      { title: "Asansör önü ve kat holleri", description: "Kat geçişlerinin kamerayla izlenmesi ve gerektiğinde kartlı geçiş entegrasyonu." },
      { title: "Bahçe, çevre duvarı ve açık alanlar", description: "Gece görüşlü ve hareket algılamalı kameralarla çevre güvenliği." },
      { title: "Site güvenlik noktaları", description: "Güvenlik kulübesine merkezi izleme monitörü kurulumu ve kayıt erişimi." },
      { title: "Teknik oda ve depo alanları", description: "Yetkisiz erişime karşı kontrollü giriş ve kamera izleme." },
    ],
  },
  "isyeri-guvenlik-sistemi": {
    title: "İşyeri güvenliğinde en sık karşılaştığımız senaryolar",
    description:
      "{city} içinde farklı ticari yapılarda benzer güvenlik ihtiyaçları oluşuyor. En sık hizmet verdiğimiz işyeri tipleri aşağıdadır.",
    localContext:
      "{city} içinde işyeri güvenliği planlanırken satış alanı, personel akışı ve kapanış sonrası kontrol birlikte değerlendirilir.",
    items: [
      { title: "Ofis ve idari alanlar", description: "Giriş kontrolü, toplantı odası ve arşiv alanı görüntülemesiyle kurum içi güvenlik." },
      { title: "Perakende mağazalar", description: "Kasa bölgesi, satış alanı ve depo girişinin kamera ve alarm ile korunması." },
      { title: "Kafe ve restoranlar", description: "Müşteri alanı ve kasa noktasının izlenmesi; kapanış sonrası alarm korunası." },
      { title: "Kasa ve stok odaları", description: "Yüksek değerli stok ve nakit bulunan alanların kamera ve erişim kontrolü ile güvence altına alınması." },
      { title: "Showroom ve karşılama alanları", description: "Ziyaretçi trafiğinin yönetilmesi ve sergilenen ürünlerin görüntülü takibi." },
      { title: "Küçük ölçekli üretim ofisleri", description: "Atölye, üretim alanı ve depo girişinin tek sistemde birleştirilerek izlenmesi." },
    ],
  },
  "fabrika-depo-guvenlik-sistemi": {
    title: "Fabrika ve depo projelerinde kritik kullanım alanları",
    description:
      "{city} içinde büyük metrekareli sahalarda en kritik güvenlik noktaları aşağıdaki bölümlerde yoğunlaşıyor.",
    localContext:
      "{city} içinde fabrika ve depo projelerinde giriş noktaları, sevkiyat alanı ve çevre takibi aynı güvenlik planı içinde ele alınır.",
    items: [
      { title: "Araç giriş ve çıkış noktaları", description: "TIR, forklift ve personel araçlarının geçişlerinin kamera ve bariyer ile yönetilmesi." },
      { title: "Yükleme ve boşaltma alanları", description: "Sevkiyat sürecinin görüntülü kaydı ile stok kaybı ve operasyonel riskin azaltılması." },
      { title: "Depo raf koridorları", description: "Raf aralarının kamera ile izlenerek envanter güvenliği ve personel hareketinin takibi." },
      { title: "Üretim hatları", description: "Üretim süreci görüntülemesi; iş güvenliği ve kalite kontrol desteği." },
      { title: "Açık çevre alanları", description: "Çevre çit hattı, park alanları ve atık sahalarının gece görüşlü kameralarla gözetimi." },
      { title: "Personel ve ziyaretçi girişleri", description: "Turnike, kartlı geçiş veya biyometrik okuyucuyla kontrollü personel ve ziyaretçi akışı." },
    ],
  },
  "bakim-servis-uzaktan-izleme": {
    title: "Bakım ve uzaktan izleme en çok hangi ihtiyaçlarda gerekir?",
    description:
      "{city} içinde mevcut güvenlik altyapısında en sık karşılaştığımız servis ve bakım senaryoları aşağıdadır.",
    localContext:
      "{city} içinde bakım taleplerinde görüntü kaybı, kayıt sorunu ve uzaktan erişim problemi en çok tekrar eden başlıklardır.",
    items: [
      { title: "Görüntü gelmeyen kamera noktaları", description: "Kablo kopması, enerji kesintisi veya cihaz arızası nedeniyle görüntü kaybeden kameraların tespiti ve onarımı." },
      { title: "Kayıt cihazı ve disk sorunları", description: "NVR/DVR hatası, disk doluluk uyarısı ve kayıt süresi kısalması gibi problemlerin giderilmesi." },
      { title: "Mobil izleme bağlantı problemleri", description: "Telefondan erişim kopması, uygulama hatası ve ağ yapılandırma sorunlarının çözümü." },
      { title: "Periyodik sistem kontrolü", description: "Mevcut altyapının düzenli sağlık kontrolü ile arıza öncesi risk tespiti." },
      { title: "Arızalı dedektör veya alarm bileşenleri", description: "Tepkisiz sensör, boş batarya veya haberleşme hatası gibi alarm sorunlarının giderilmesi." },
      { title: "Eski kurulumların iyileştirilmesi", description: "Ömrünü tamamlamış veya yetersiz kalan sistemlerin değerlendirilmesi ve yenileme önerisi." },
    ],
  },
  "kamera-sistemi-bakim-sozlesmesi": {
    title: "Kamera bakım sözleşmesi en çok hangi projelerde gerekir?",
    description:
      "{city} içinde kayıt sürekliliği kritik olan ve düzenli saha kontrolü gerektiren kamera altyapılarında bakım sözleşmesi öne çıkar.",
    localContext:
      "{city} içinde site, işyeri ve depo projelerinde kamera bakım sözleşmesi arıza oluşmadan önce sistem zayıflıklarını görünür hale getirir.",
    items: [
      { title: "Apartman ve site kamera sistemleri", description: "Ortak alan ve çevre kameralarının düzenli kontrolü ile kayıt sürekliliği ve görüntü kalitesinin korunması." },
      { title: "Mağaza ve işyeri güvenlik altyapıları", description: "Kasa ve giriş kameralarının bakımı ile kesintisiz izleme ve kayıt." },
      { title: "Depo ve lojistik alan kayıt sistemleri", description: "Yükleme alanı ve raf koridoru kameralarının periyodik kontrolü ve disk sağlığı takibi." },
      { title: "Fabrika çevre kamera sistemleri", description: "Açık alan ve çevre hattı kameralarının lens temizliği, açı ve gece görüş kontrolü." },
      { title: "Uzaktan erişim kullanılan çok kameralı projeler", description: "Mobil ve masaüstü erişim bağlantısının düzenli test edilmesi ve ağ kararlılığı kontrolü." },
      { title: "Kayıt kaybı riski yüksek mevcut kurulumlar", description: "Yaşlandıran disk veya kararsız NVR bulunan sistemlerde önleyici bakım ve yenileme değerlendirmesi." },
    ],
  },
  "guvenlik-sistemi-teknik-servis": {
    title: "Teknik servis en çok hangi güvenlik sorunlarında gerekir?",
    description:
      "{city} içinde mevcut kurulum çalışırken hata veren veya tamamen devre dışı kalan güvenlik sistemlerinde teknik servis ihtiyacı oluşur.",
    localContext:
      "{city} içinde özellikle mevcut altyapısı farklı ekiplerce kurulmuş projelerde teknik servis, sistemin genel durumunu netleştirmek için kritik rol oynar.",
    items: [
      { title: "Görüntü kaybı yaşayan kamera sistemleri", description: "Kablo, bağlantı veya kamera kaynaklı görüntü sorunlarının kök neden analizi ve onarımı." },
      { title: "Arıza veren alarm panelleri", description: "Panel hatası, sensör tepkisizliği ve haberleşme sorunlarının teknik servis müdahalesiyle giderilmesi." },
      { title: "Çalışmayan kartlı geçiş noktaları", description: "Okuyucu, kilit veya yazılım kaynaklı geçiş kontrol arızalarının tespiti ve düzeltmesi." },
      { title: "Bağlantı ve ağ problemi olan kayıt cihazları", description: "IP çakışması, switch hatası ve ağ kararsızlığı gibi sorunların sistematik tespiti." },
      { title: "Saha müdahalesi gereken eski kurulumlar", description: "Ömrünü tamamlamış ekipmanların değerlendirilmesi ve yenileme yol haritası çıkarılması." },
      { title: "Birden fazla güvenlik bileşeni içeren işletmeler", description: "Kamera, alarm ve geçiş kontrolü birlikte çalışan sistemlerde bütünleşik teknik değerlendirme." },
    ],
  },
  "kamera-ariza-servisi": {
    title: "Kamera arıza servisi en çok hangi durumlarda gerekir?",
    description:
      "{city} içinde görüntü, kayıt ve erişim hataları yaşayan kamera sistemlerinde arıza servis ihtiyacı öne çıkar.",
    localContext:
      "{city} içinde kamera arızalarında aynı belirti farklı sebeplerden doğabildiği için cihaz, disk ve ağ katmanlarını birlikte değerlendiriyoruz.",
    items: [
      { title: "Görüntü gelmeyen kamera noktaları", description: "Kamera ucu, kablo veya switch kaynaklı görüntü kesintilerinin hızlı tespiti ve giderilmesi." },
      { title: "Kayıt yapmayan NVR veya DVR sistemleri", description: "Kayıt cihazı ayarları, disk kapasitesi ve firmware sorunlarının kontrolü ve düzeltmesi." },
      { title: "Hard disk hatası veren kayıt altyapıları", description: "Disk SMART verileriyle sağlık analizi; gerekirse güvenlik sınıfı yeni disk değişimi." },
      { title: "Mobil uygulamada görünmeyen kamera sistemleri", description: "Uygulama, modem ve ağ yapılandırma ayarlarının kontrolü ile uzaktan erişim onarımı." },
      { title: "Kesintili çalışan dış ortam kameraları", description: "PoE besleme, kablo bütünlüğü ve dış ortam koruma sınıfı sorunlarının incelenmesi." },
      { title: "Bozulmuş açı veya netlik problemi yaşayan kurulumlar", description: "Kamera montaj brağketi, lens ve odak ayarı kontrolü ile görüntü kalitesinin geri kazanılması." },
    ],
  },
  "yangin-alarm-bakim-sozlesmesi": {
    title: "Yangın alarm bakım sözleşmesi en çok hangi yapılarda gerekir?",
    description:
      "{city} içinde düzenli test disiplini ve algılama sürekliliği gereken yapılarda yangın alarm bakım sözleşmesi kritik hale gelir.",
    localContext:
      "{city} içinde panel, dedektör ve butonların düzenli kontrol edilmediği projelerde görünmeyen arızalar ciddi operasyon riski oluşturabilir.",
    items: [
      { title: "Ofis ve yönetim binaları", description: "Çok katlı ofislerde zon bazlı yangın alarm kontrolü ve dedektör tepki testleri." },
      { title: "Depo ve arşiv alanları", description: "Yanıcı malzeme bulunan kapalı alanlarda algılama sürekliliğinin düzenli doğrulanması." },
      { title: "Otel ve konaklama yapıları", description: "Misafir güvenliği ve yasal uyumluluk için yangın alarm bakımı ve test disiplini." },
      { title: "Apartman ortak alan sistemleri", description: "Koridor ve merdiven boşluğu dedektörlerinin düzenli kontrolü ve batarya sağlığı takibi." },
      { title: "Üretim ve teknik hacimler", description: "Yüksek ısı ve tozlu ortamlarda özel dedektörlerin periyodik fonksiyon kontrolu." },
      { title: "Düzenli saha testi gereken ticari yapılar", description: "AVM, market ve mağaza zincirlerinde yasal denetim gereksinimleriyle uyumlu bakım takvimi." },
    ],
  },
  "uzaktan-kamera-izleme": {
    title: "Uzaktan kamera izleme en çok hangi senaryolarda kullanılır?",
    description:
      "{city} içinde farklı noktaları tek ekrandan takip etmek isteyen işletmeler ve yönetimler için uzaktan kamera izleme çözümü öne çıkar.",
    localContext:
      "{city} içinde operasyonun her zaman sahada olmadığı projelerde uzaktan izleme, kullanıcıya sürekli görünürlük ve hızlı kontrol sağlar.",
    items: [
      { title: "Site yönetimi ve güvenlik noktaları", description: "Apartman ve site güvenlik kulübelerinde merkezi monitrö ile tüm noktaların canlı takibi." },
      { title: "Çok şubeli mağaza ve işletmeler", description: "Farklı lokasyonlardaki kameraların tek uygulamada toplanarak merkezi yönetilmesi." },
      { title: "Depo ve lojistik operasyonları", description: "Yükleme alanı, raf koridoru ve çevre hattının ofis veya mobil cihazdan izlenmesi." },
      { title: "Fabrika çevre ve giriş izleme senaryoları", description: "Tesis yöneticisinin sahada olmadığı saatlerde çevre ve giriş kameralarının uzaktan kontrolu." },
      { title: "Mobil erişim gerektiren işyeri projeleri", description: "Telefon ve tabletten canlı izleme, geçmiş kayıt erişimi ve anlık olay bildirimi." },
      { title: "Merkezi ekranla kontrol edilen güvenlik altyapıları", description: "Güvenlik monitörü veya kontrol odasında çoklu kamera akışının eş zamanlı görüntülenmesi." },
    ],
  },
};
