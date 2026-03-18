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
          "{city} içinde daire, küçük ofis ve butik işletmeler için 2-4 kameralı sistem kurulumu. NVR, güvenlik sınıfı hard disk ve uzaktan izleme yapılandırması dahildir. Giriş ve kritik noktaların kapsanması hedeflenir.",
      },
      {
        title: "Orta Ölçek Paket",
        description:
          "{city} bölgesinde apartman, mağaza ve orta ölçekli işletmeler için 4-8 kameralı sistem. Çoklu giriş takibi, gece görüşü ve mobil erişim dahil. Alanın büyüklüğüne göre farklı lens ve çözünürlük seçenekleri uygulanır.",
      },
      {
        title: "Profesyonel Paket",
        description:
          "{city} içinde depo, fabrika ve büyük alanlar için 8-16 kameralı profesyonel çözüm. Yüksek kapasiteli NVR, çoklu disk desteği, motorlu zoom ve açık alan kameraları dahil. Uzun kayıt süresi ve merkezi izleme altyapısı sunulur.",
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
          "{city} içinde daire ve küçük konutlar için panel, kontak, dedektör ve dahili siren çözümü. Giriş kapısı ve ana pencereler korunur. Mobil bildirim desteği ve uzaktan kurma-kapama özelliği dahildir.",
      },
      {
        title: "İşyeri Koruma Paketi",
        description:
          "{city} bölgesinde mağaza ve ofisler için çoklu dedektör ve mobil bildirim destekli kurulum. Kapanış sonrası alarmlı koruma, hareket algılama ve sabotaj bildirimi içerir. Kablolu veya kablosuz altyapı mekanın yapısına göre seçilir.",
      },
      {
        title: "Geniş Alan Paketi",
        description:
          "{city} içinde depo veya çok girişli alanlarda bölümlenebilir alarm senaryoları ve güçlü siren yapısı. Farklı zonlar bağımsız olarak yönetilebilir. GSM yedekli haberleşme ve çevre koruma sensörleri entegre edilebilir.",
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
          "{city} içinde küçük işletmeler ve apartman ortak alanları için temel algılama ve uyarı çözümü. Duman dedektörü, siren ve yangın ihbar butonu içerir. Devreye alma testi ve kullanıcı eğitimi kurulumla birlikte sunulur.",
      },
      {
        title: "Kat Bazlı Koruma Paketi",
        description:
          "{city} bölgesinde çok odalı ofis ve ticari alanlar için zon bazlı yangın alarm kurulumu. Her kat veya bölüm ayrı zon olarak tanımlanır. Adresli veya konvansiyonel sistem seçeneği bina ölçeğine göre belirlenir.",
      },
      {
        title: "Geniş Tesis Paketi",
        description:
          "{city} içinde depo, üretim alanı ve çok bölümlü yapılar için ölçeklenebilir yangın alarm çözümü. Farklı algılama tipleri, çoklu zon yönetimi ve merkezi panel kontrolü sunar. Sıcak ve tozlu ortamlar için özel dedektör seçenekleri mevcuttur.",
      },
    ],
  },
  "kartli-gecis-sistemi-kurulumu": {
    title: "Örnek geçiş kontrol paketleri",
    description:
      "{city} içindeki farklı giriş tipleri için örnek kartlı geçiş, turnike ve PDKS senaryoları.",
    localContext:
      "{city} içinde tek kapıdan çok noktalı geçiş, turnike hattı ve vardiya giriş altyapısına kadar farklı senaryolar için çözüm geliştiriyoruz.",
    items: [
      {
        title: "Tek Kapı ve Apartman Girişi Paketi",
        description:
          "{city} içinde küçük ofis, apartman ve teknik oda girişleri için okuyucu, kilit ve kullanıcı tanımlama çözümü. Proximity veya mifare kart desteği içerir. Kapı tipi ve kilit uyumunu keşifte analiz ediyoruz.",
      },
      {
        title: "Plaza ve Çok Noktalı Ofis Paketi",
        description:
          "{city} bölgesinde lobi, kat geçişi ve departman bazlı yetkilendirme gereken projeler için merkezi geçiş altyapısı. Web tabanlı yönetim paneli ile kullanıcı ekleme, kart iptali ve geçiş raporu alma işlemleri yapılabilir.",
      },
      {
        title: "PDKS ve Turnike Entegre Paket",
        description:
          "{city} içinde personel giriş çıkış takibi, vardiya kontrolü ve ziyaretçi akışı gereken fabrika, depo ve kurumsal tesisler için turnike entegrasyonu. Parmak izi, yüz tanıma ve kart okuyucu seçenekleri mevcuttur. PDKS yazılımı ile devam takibi raporlanabilir.",
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
          "{city} içinde tek girişli apartmanlar için temel kamera ve giriş güvenliği çözümü. Bina girişi ve lobi kamerası, NVR ve uzaktan izleme dahildir. Apartman yöneticisi için kolay kullanımlı arayüz sunulur.",
      },
      {
        title: "Orta Ölçek Site Paketi",
        description:
          "{city} bölgesinde blok girişleri, otopark ve ortak alanlar için dengeli güvenlik sistemi kurulumu. Çevre hattı ve giriş kontrol birlikte planlanır. Site yönetimine uygun raporlama ve bakım takvimi seçeneği mevcuttur.",
      },
      {
        title: "Çevre Güvenliği Paketi",
        description:
          "{city} içinde geniş açık alanlı siteler için çevre kamera, kayıt ve geçiş kontrol kombinasyonu. Motorlu zoom ve gece görüşlü kameralarla çit hattı ve park alanları kapsanabilir. Merkezi izleme altyapısı güvenlik noktasına kurulur.",
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
          "{city} içinde satış alanı ve giriş takibi gereken mağazalar için hızlı kurulumlu çözüm. Kasa noktası, depo girişi ve müşteri alanı kamerası dahil. Kapanış sonrası alarm entegrasyonu isteğe bağlı olarak eklenebilir.",
      },
      {
        title: "Ofis Paketi",
        description:
          "{city} bölgesinde ofis, toplantı alanı ve giriş kontrol ihtiyacı olan işletmeler için kurulum paketi. Kartlı geçiş, kamera ve personel takibi birlikte planlanabilir. Mesai dışı alarm desteği de kapsama dahil edilebilir.",
      },
      {
        title: "Çok Bölümlü İşletme Paketi",
        description:
          "{city} içinde satış alanı, depo ve personel bölümü birlikte bulunan işletmeler için kapsamlı güvenlik çözümü. Farklı bölgelerde farklı kamera tipleri ve erişim kuralları uygulanabilir. Tek NVR üzerinden tüm alanlar izlenebilir.",
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
          "{city} içinde tek depo veya küçük lojistik alanlar için giriş ve raf hattı takibi çözümü. Yükleme rampası ve ana koridor kamerası dahildir. NVR ve uzaktan izleme standart olarak kurulur.",
      },
      {
        title: "Üretim Tesisi Paketi",
        description:
          "{city} bölgesinde üretim alanı, sevkiyat noktası ve çevre güvenliğini birlikte yöneten kurulum. Gece görüşlü dış alan kameraları ve yüksek kapasiteli kayıt cihazı içerir. Vardiyali çalışma düzenine uygun 7/24 kayıt kapasitesi sunulur.",
      },
      {
        title: "Geniş Saha Paketi",
        description:
          "{city} içinde çok kapılı fabrika veya depo projeleri için ölçeklenebilir güvenlik sistemi altyapısı. Motorlu zoom, çevre hattı ve giriş kontrol kameraları birlikte planlanır. Merkezi izleme ve çoklu disk destekli kayıt altyapısı mevcuttur.",
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
          "{city} içinde mevcut sistemin genel durum kontrolü, kayıt ve bağlantı testlerini kapsar. Kamera görüntü kalitesi, NVR sağlığı, disk durumu ve uzaktan erişim kontrol edilir. Tek seferlik veya periyodik olarak planlanabilir.",
      },
      {
        title: "Arıza Giderme Paketi",
        description:
          "{city} bölgesinde görüntü, kayıt veya erişim sorunu yaşayan sistemler için müdahale odaklı servis. Arıza tespiti, parça değişimi ve yapılandırma düzeltmesi tek seferde gerçekleştirilir. Müdahale öncesi arıza nedeni belirlenir.",
      },
      {
        title: "Periyodik Bakım Paketi",
        description:
          "{city} içinde düzenli kontrol, temizlik, bağlantı testi ve kullanıcı desteği gereken sistemler için bakım planı. Yılda 2-4 ziyaret içeren takvim oluşturulur. Her bakım sonrası yazılı durum raporu sunulur.",
      },
    ],
  },
  "kamera-sistemi-bakim-sozlesmesi": {
    title: "Örnek bakım sözleşmesi kapsamları",
    description:
      "{city} içindeki mevcut kamera sistemleri için en sık talep edilen periyodik bakım sözleşmesi kapsamları.",
    localContext:
      "{city} içinde kamera sayısı, kayıt cihazı yapısı ve saha yoğunluğu bakım sözleşmesinin kapsamını doğrudan etkiler.",
    items: [
      {
        title: "Temel Periyodik Bakım",
        description:
          "{city} içinde küçük ve orta ölçekli kamera sistemleri için açı, görüntü, kayıt ve bağlantı kontrollerini kapsar. Yılda 2 ziyaret içeren standart bakım takvimi oluşturulur. Her kontrol sonrası rapor sunulur.",
      },
      {
        title: "Kurumsal Kontrol Paketi",
        description:
          "{city} bölgesinde çok kameralı işyeri ve site projeleri için detaylı sistem kontrolü ve düzenli servis takibi içerir. Yılda 3-4 ziyaretle disk, ağ, uzaktan erişim ve görüntü kalitesi kontolleri yapılır. Bakım notları arşivlenir.",
      },
      {
        title: "Yüksek Süreklilik Paketi",
        description:
          "{city} içinde kayıt sürekliliği kritik olan depo ve işletmeler için daha sık bakım ve önleyici kontrol planı sunar. Disk SMART verileri izlenir, arıza öncesi uyarı mekanizması oluşturulur. Öncelikli servis müdahale süresi tanımlanır.",
      },
    ],
  },
  "guvenlik-sistemi-teknik-servis": {
    title: "Örnek teknik servis kapsamları",
    description:
      "{city} içindeki mevcut güvenlik sistemleri için en sık talep edilen teknik servis müdahale kapsamları.",
    localContext:
      "{city} içinde sistem tipi ve arıza şiddeti arttıkça teknik servis planı da cihaz, saha ve ağ katmanlarında detaylanır.",
    items: [
      {
        title: "Hızlı Arıza Tespiti",
        description:
          "{city} içinde çalışan ama sorun çıkaran sistemlerde kök nedenin belirlenmesine odaklanan teknik servis kontrolü. Cihaz, kablo, ağ ve yazılım katmanları sistematik olarak test edilir. Gereksiz parça değişimi önlenir.",
      },
      {
        title: "Saha Müdahale Paketi",
        description:
          "{city} bölgesinde kamera, alarm ve geçiş kontrol bileşenleri için yerinde müdahale ve test süreci. Arızalı donanım değişimi, bağlantı onarımı ve yapılandırma düzeltmesi içerir. Müdahale adımları servis raporuna kaydedilir.",
      },
      {
        title: "Kurumsal Teknik Destek",
        description:
          "{city} içinde birden fazla güvenlik bileşeni barındıran işletmeler için geniş kapsamlı teknik servis yaklaşımı. Tüm sistemler tek seferde değerlendirilir. Öncelikli müdahale süresi ve düzenli teknik kontrol takvimi sunulabilir.",
      },
    ],
  },
  "kamera-ariza-servisi": {
    title: "Örnek kamera arıza servis kapsamları",
    description:
      "{city} içindeki kamera sistemlerinde sık karşılaşılan arıza tipleri için örnek servis kapsamları.",
    localContext:
      "{city} içinde arıza servisinde kamera ucu, kayıt cihazı, disk ve ağ altyapısı birlikte değerlendirilir.",
    items: [
      {
        title: "Görüntü Sorunu Paketi",
        description:
          "{city} içinde görüntü gelmeyen veya bozuk görüntü üreten kamera noktaları için arıza tespit ve düzeltme servisi. Kamera ucu, kablo ve bağlantı noktaları kontrol edilir. Gerekli durumlarda kamera değişimi önerilir.",
      },
      {
        title: "Kayıt Problemi Paketi",
        description:
          "{city} bölgesinde kayıt süresi, disk hatası veya NVR yapılandırma sorunu yaşayan sistemler için müdahale kapsamı. Disk SMART verileri kontrol edilir, kayıt ayarları optimize edilir. Gerekirse disk değişimi gerçekleştirilir.",
      },
      {
        title: "Bağlantı ve Erişim Paketi",
        description:
          "{city} içinde mobil izleme ve ağ bağlantısı sorunları yaşayan kamera altyapıları için servis planı. Modem, port yönlendirme, DNS ve cihaz ağ ayarları kontrol edilir. P2P veya bulut bağlantı yapılandırması yapılır.",
      },
    ],
  },
  "yangin-alarm-bakim-sozlesmesi": {
    title: "Örnek yangın alarm bakım kapsamları",
    description:
      "{city} içindeki kurulu yangın alarm sistemleri için en sık talep edilen bakım sözleşmesi kapsamları.",
    localContext:
      "{city} içinde dedektör yoğunluğu, bina tipi ve panel yapısı arttıkça bakım planı daha detaylı hale gelir.",
    items: [
      {
        title: "Temel Panel ve Hat Kontrolü",
        description:
          "{city} içinde küçük ve orta ölçekli yapılarda panel, siren ve bağlantı hatlarının kontrolünü kapsar. Dedektör tepki testleri ve batü durumu da kontrol edilir. Bakım bulgusu rapor olarak sunulur.",
      },
      {
        title: "Dedektör Test Paketi",
        description:
          "{city} bölgesinde algılama noktalarının düzenli test edilmesi gereken yapılarda planlı bakım sunar. Her dedektör test dumanı veya ısı kaynağıyla doğrulanır. Zayıf tepki veren noktalar raporlanır.",
      },
      {
        title: "Kurumsal Bakım Planı",
        description:
          "{city} içinde otel, ofis ve depo gibi düzenli test disiplini gerektiren yapılara yönelik bakım sözleşmesi. Yılda 2-4 ziyaretle panel, dedektör, buton ve siren kontrolleri yapılır. Denetim süreçlerinde kullanılabilecek bakım arşivi oluşturulur.",
      },
    ],
  },
  "uzaktan-kamera-izleme": {
    title: "Örnek uzaktan izleme paketleri",
    description:
      "{city} içindeki işletme ve site projeleri için sık tercih edilen uzaktan kamera izleme senaryoları.",
    localContext:
      "{city} içinde izlenecek nokta sayısı, kullanıcı adedi ve kayıt beklentisi uzaktan izleme kurgusunu belirler.",
    items: [
      {
        title: "Mobil Erişim Paketi",
        description:
          "{city} içinde telefon üzerinden canlı izleme ve kayıt erişimi gereken küçük ve orta ölçekli projeler için yapılandırma sunar. iOS ve Android uyumlu uygulama kurulumu dahildir. P2P veya bulut bağlantı yöntemi ayarlanır.",
      },
      {
        title: "Merkezi İzleme Paketi",
        description:
          "{city} bölgesinde ofis, site yönetimi ve güvenlik noktaları için tek ekranda çoklu kamera takibi sağlar. Güvenlik monitörü üzerinden tüm noktalar canlı izlenebilir. Kayıt geri izleme ve alarm entegrasyonu da eklenebilir.",
      },
      {
        title: "Çok Lokasyonlu İzleme Paketi",
        description:
          "{city} içinde birden fazla şubeyi veya alanı aynı izleme akışında toplamak isteyen işletmeler için çözüm sunar. Farklı lokasyonlar tek uygulamada görünür hale getirilir. Her lokasyonun bağlantı sağlığı uzaktan izlenebilir.",
      },
    ],
  },
};
