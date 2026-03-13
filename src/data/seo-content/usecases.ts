export interface SeoUseCasesContent {
  title: string;
  description: string;
  localContext: string;
  items: string[];
}

export const useCaseContent: Record<string, SeoUseCasesContent> = {
  "kamera-sistemi-kurulumu": {
    title: "Kamera sistemini en çok hangi alanlarda kuruyoruz?",
    description:
      "{city} içinde görüş açısı, gece performansı ve kayıt beklentisine göre en sık hizmet verdiğimiz kullanım alanları aşağıdadır.",
    localContext:
      "{city} içinde işyeri, apartman ve depo gibi farklı alanlarda kameranın yeri, açısı ve kayıt yapısı farklı planlanır.",
    items: [
      "Daire ve müstakil ev",
      "Apartman girişleri",
      "Site çevresi ve ortak alanlar",
      "Mağaza ve dükkanlar",
      "Ofis ve işyerleri",
      "Depo ve fabrika alanları",
      "Otopark ve açık alanlar",
      "Villa çevre güvenliği",
    ],
  },
  "alarm-sistemi-kurulumu": {
    title: "Alarm sistemini hangi mekanlarda kuruyoruz?",
    description:
      "{city} içinde güvenlik seviyesi, giriş sayısı ve kullanım düzenine göre farklı mekan tiplerinde alarm sistemi kuruyoruz.",
    localContext:
      "{city} içinde alarm sistemi ihtiyacı mekanın kapanış düzenine, giriş sayısına ve risk yoğunluğuna göre değişir.",
    items: [
      "Daire ve villa girişleri",
      "Küçük ve orta ölçekli ofisler",
      "Mağaza ve showroom alanları",
      "Apartman ortak girişleri",
      "Depo ve stok odaları",
      "Kapanış sonrası kontrol gerektiren işletmeler",
    ],
  },
  "yangin-alarm-sistemi-kurulumu": {
    title: "Yangın alarm sistemi hangi alanlarda öne çıkıyor?",
    description:
      "{city} içinde erken algılama ve bina güvenliği gerektiren alanlarda yangın alarm sistemleri kuruyoruz.",
    localContext:
      "{city} içinde farklı yapı tiplerinde algılama noktaları ve uyarı senaryoları kullanım biçimine göre değişir.",
    items: [
      "Apartman ve site ortak alanları",
      "Ofis katları ve yönetim binaları",
      "Depo ve arşiv alanları",
      "Otel, pansiyon ve konaklama alanları",
      "Üretim ve teknik hacimler",
      "Mağaza ve showroom katları",
    ],
  },
  "kartli-gecis-sistemi-kurulumu": {
    title: "Kartlı geçiş sistemi en çok hangi senaryolarda kullanılıyor?",
    description:
      "{city} içinde giriş kontrolü, personel yönetimi ve güvenli alan ayrımı gereken yapılarda kartlı geçiş sistemleri kuruyoruz.",
    localContext:
      "{city} içinde geçiş kontrolü gereken alanlarda kullanıcı sayısı ve kapı altyapısı doğru çözümü belirler.",
    items: [
      "Ofis girişleri",
      "Apartman ve site kapıları",
      "Personel devam kontrol noktaları",
      "Depo ve teknik oda girişleri",
      "Turnikeli kurumsal girişler",
      "Yetkili erişim gerektiren özel alanlar",
    ],
  },
  "apartman-site-guvenlik-sistemi": {
    title: "Apartman ve site projelerinde öne çıkan alanlar",
    description:
      "{city} içinde çoklu kullanıcı yapısına sahip projelerde güvenlik ihtiyacı genelde aşağıdaki alanlarda yoğunlaşıyor.",
    localContext:
      "{city} içinde apartman ve site güvenliğinde otopark, bina girişi ve ortak alan takibi aynı projede ele alınır.",
    items: [
      "Bina girişleri ve lobi alanları",
      "Otopark giriş ve çıkışları",
      "Asansör önü ve kat holleri",
      "Bahçe, çevre duvarı ve açık alanlar",
      "Site güvenlik noktaları",
      "Teknik oda ve depo alanları",
    ],
  },
  "isyeri-guvenlik-sistemi": {
    title: "İşyeri güvenliğinde en sık karşılaştığımız senaryolar",
    description:
      "{city} içinde farklı ticari yapılarda benzer güvenlik ihtiyaçları oluşuyor. En sık hizmet verdiğimiz işyeri tipleri aşağıdadır.",
    localContext:
      "{city} içinde işyeri güvenliği planlanırken satış alanı, personel akışı ve kapanış sonrası kontrol birlikte değerlendirilir.",
    items: [
      "Ofis ve idari alanlar",
      "Perakende mağazalar",
      "Kafe ve restoranlar",
      "Kasa ve stok odaları",
      "Showroom ve karşılama alanları",
      "Küçük ölçekli üretim ofisleri",
    ],
  },
  "fabrika-depo-guvenlik-sistemi": {
    title: "Fabrika ve depo projelerinde kritik kullanım alanları",
    description:
      "{city} içinde büyük metrekareli sahalarda en kritik güvenlik noktaları aşağıdaki bölümlerde yoğunlaşıyor.",
    localContext:
      "{city} içinde fabrika ve depo projelerinde giriş noktaları, sevkiyat alanı ve çevre takibi aynı güvenlik planı içinde ele alınır.",
    items: [
      "Araç giriş ve çıkış noktaları",
      "Yükleme ve boşaltma alanları",
      "Depo raf koridorları",
      "Üretim hatları",
      "Açık çevre alanları",
      "Personel ve ziyaretçi girişleri",
    ],
  },
  "bakim-servis-uzaktan-izleme": {
    title: "Bakım ve uzaktan izleme en çok hangi ihtiyaçlarda gerekir?",
    description:
      "{city} içinde mevcut güvenlik altyapısında en sık karşılaştığımız servis ve bakım senaryoları aşağıdadır.",
    localContext:
      "{city} içinde bakım taleplerinde görüntü kaybı, kayıt sorunu ve uzaktan erişim problemi en çok tekrar eden başlıklardır.",
    items: [
      "Görüntü gelmeyen kamera noktaları",
      "Kayıt cihazı ve disk sorunları",
      "Mobil izleme bağlantı problemleri",
      "Periyodik sistem kontrolü",
      "Arızalı dedektör veya alarm bileşenleri",
      "Eski kurulumların iyileştirilmesi",
    ],
  },
  "kamera-sistemi-bakim-sozlesmesi": {
    title: "Kamera bakım sözleşmesi en çok hangi projelerde gerekir?",
    description:
      "{city} içinde kayıt sürekliliği kritik olan ve düzenli saha kontrolü gerektiren kamera altyapılarında bakım sözleşmesi öne çıkar.",
    localContext:
      "{city} içinde site, işyeri ve depo projelerinde kamera bakım sözleşmesi arıza oluşmadan önce sistem zayıflıklarını görünür hale getirir.",
    items: [
      "Apartman ve site kamera sistemleri",
      "Mağaza ve işyeri güvenlik altyapıları",
      "Depo ve lojistik alan kayıt sistemleri",
      "Fabrika çevre kamera sistemleri",
      "Uzaktan erişim kullanılan çok kameralı projeler",
      "Kayıt kaybı riski yüksek mevcut kurulumlar",
    ],
  },
  "guvenlik-sistemi-teknik-servis": {
    title: "Teknik servis en çok hangi güvenlik sorunlarında gerekir?",
    description:
      "{city} içinde mevcut kurulum çalışırken hata veren veya tamamen devre dışı kalan güvenlik sistemlerinde teknik servis ihtiyacı oluşur.",
    localContext:
      "{city} içinde özellikle mevcut altyapısı farklı ekiplerce kurulmuş projelerde teknik servis, sistemin genel durumunu netleştirmek için kritik rol oynar.",
    items: [
      "Görüntü kaybı yaşayan kamera sistemleri",
      "Arıza veren alarm panelleri",
      "Çalışmayan kartlı geçiş noktaları",
      "Bağlantı ve ağ problemi olan kayıt cihazları",
      "Saha müdahalesi gereken eski kurulumlar",
      "Birden fazla güvenlik bileşeni içeren işletmeler",
    ],
  },
  "kamera-ariza-servisi": {
    title: "Kamera arıza servisi en çok hangi durumlarda gerekir?",
    description:
      "{city} içinde görüntü, kayıt ve erişim hataları yaşayan kamera sistemlerinde arıza servis ihtiyacı öne çıkar.",
    localContext:
      "{city} içinde kamera arızalarında aynı belirti farklı sebeplerden doğabildiği için cihaz, disk ve ağ katmanlarını birlikte değerlendiriyoruz.",
    items: [
      "Görüntü gelmeyen kamera noktaları",
      "Kayıt yapmayan NVR veya DVR sistemleri",
      "Hard disk hatası veren kayıt altyapıları",
      "Mobil uygulamada görünmeyen kamera sistemleri",
      "Kesintili çalışan dış ortam kameraları",
      "Bozulmuş açı veya netlik problemi yaşayan kurulumlar",
    ],
  },
  "yangin-alarm-bakim-sozlesmesi": {
    title: "Yangın alarm bakım sözleşmesi en çok hangi yapılarda gerekir?",
    description:
      "{city} içinde düzenli test disiplini ve algılama sürekliliği gereken yapılarda yangın alarm bakım sözleşmesi kritik hale gelir.",
    localContext:
      "{city} içinde panel, dedektör ve butonların düzenli kontrol edilmediği projelerde görünmeyen arızalar ciddi operasyon riski oluşturabilir.",
    items: [
      "Ofis ve yönetim binaları",
      "Depo ve arşiv alanları",
      "Otel ve konaklama yapıları",
      "Apartman ortak alan sistemleri",
      "Üretim ve teknik hacimler",
      "Düzenli saha testi gereken ticari yapılar",
    ],
  },
  "uzaktan-kamera-izleme": {
    title: "Uzaktan kamera izleme en çok hangi senaryolarda kullanılır?",
    description:
      "{city} içinde farklı noktaları tek ekrandan takip etmek isteyen işletmeler ve yönetimler için uzaktan kamera izleme çözümü öne çıkar.",
    localContext:
      "{city} içinde operasyonun her zaman sahada olmadığı projelerde uzaktan izleme, kullanıcıya sürekli görünürlük ve hızlı kontrol sağlar.",
    items: [
      "Site yönetimi ve güvenlik noktaları",
      "Çok şubeli mağaza ve işletmeler",
      "Depo ve lojistik operasyonları",
      "Fabrika çevre ve giriş izleme senaryoları",
      "Mobil erişim gerektiren işyeri projeleri",
      "Merkezi ekranla kontrol edilen güvenlik altyapıları",
    ],
  },
};
