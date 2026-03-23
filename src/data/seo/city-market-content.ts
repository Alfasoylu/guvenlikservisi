import type { CityMarketType } from "@/data/seo/cities";

export interface MarketProfileContent {
  title: string;
  summary: string;
  bullets: string[];
  faqQuestion: string;
  faqAnswer: string;
}

export const cityMarketContent: Record<CityMarketType, MarketProfileContent> =
  {
    "high-industrial": {
      title: "Sanayi ve Üretim Tesisleri İçin Güvenlik Öncelikleri",
      summary:
        "Sanayi bölgelerinde güvenlik sistemi yatırımı; hırsızlık caydırıcılığının ötesinde yasal uyumluluk, iş güvenliği ve sigorta gerekliliklerini de karşılar. Fabrika ve depo yapıları için vandal-proof IP kameralar, PTZ kontrol, merkezi NVR ve kesintisiz kayıt altyapısı ile kurulum yapıyoruz. Geniş sahalar, mahremiyet gerektiren üretim hatları ve 7/24 operasyon düzeni bu bölgelerde ayrışan bir sistem planlaması gerektirir.",
      bullets: [
        "24/7 üretim hattı ve depo izleme — kesintisiz kayıt zorunluluğu",
        "Geniş saha ve açık alan için PTZ kamera ve çevre güvenlik sistemi",
        "Çalışan giriş-çıkış kontrolü için kartlı geçiş ve turnikeli geçiş sistemleri",
        "Yangın alarm sistemi — fabrika ve sanayi tesislerinde yasal zorunluluk",
        "Uzaktan izleme ile tek ekrandan çok nokta takibi ve anlık alarm yönetimi",
      ],
      faqQuestion:
        "Sanayi ve fabrika yapıları için hangi güvenlik sistemleri önerilir?",
      faqAnswer:
        "Fabrika ve üretim tesislerinde PTZ kamera, çevre güvenlik sistemi, kartlı geçiş ve yangın alarm sistemleri birlikte planlanmalıdır. Geniş saha boyutları ve 7/24 operasyon gereklilikleri nedeniyle merkezi NVR altyapısı, uzaktan izleme ve yedekli güç sistemi kurulum planına dahil edilir.",
    },

    "tourism-heavy": {
      title: "Turizm ve Konaklama Sektörü İçin Güvenlik Öncelikleri",
      summary:
        "Turizm yoğun şehirlerde güvenlik ihtiyacı mevsimseldir: yaz sezonunda yüksek doluluk oranı, kış döneminde ise boş villa ve mülk koruması ön plana çıkar. Uzaktan erişim, akıllı alarm sistemleri ve mobil izleme bu yapılar için kritik değer üretir. Otel, pansiyon, kiralık villa ve yazlıklar için nem, tuz ve yoğun UV'ye dayanıklı IP sınıfı cihazlarla kurulum yapıyoruz.",
      bullets: [
        "Villa ve yazlıklar için uzaktan mobil izleme ve sezonluk mülk koruması",
        "Otel ve pansiyon giriş kontrolü — misafir güvenliği ve personel takibi",
        "Plaj ve açık alan kameralarında yüksek IP dereceli (IP67+) cihaz seçimi",
        "Kiralık mülkler için gelişmiş erişim kontrolü ve misafir bazlı yetkilendirme",
        "Uzaktan alarm yönetimi ile şehir dışından gerçek zamanlı müdahale imkânı",
      ],
      faqQuestion:
        "Tatil bölgelerindeki mülkler için uzaktan güvenlik sistemi kurulabiliyor mu?",
      faqAnswer:
        "Evet. Uzak veya sezonluk kullanılan mülkler için internet bağlantısı üzerinden mobil izleme, hareket bildirimi ve akıllı alarm sistemi kurulumu yapılabilir. Nem ve iklim koşullarına dayanıklı IP sınıfı kameralar ve güvenilir internet altyapısıyla sistem yılın tamamında çalışır durumda tutulur.",
    },

    "high-residential": {
      title: "Konut ve Site Yönetimi İçin Güvenlik Öncelikleri",
      summary:
        "Konut yoğunluğu yüksek şehirlerde en yaygın güvenlik ihtiyacı apartman giriş güvenliği, ortak alan kamera kurulumu ve otopark izlemesidir. Site yönetimleri için merkezi kayıt cihazı, çok blok takibi ve planlı bakım sözleşmesi sistemin uzun vadeli sürekliliğini sağlar. Yönetim planı gerektiren yapılarda keşif aşamasından itibaren site yönetici kararlarına uygun çözümler üretiyoruz.",
      bullets: [
        "Apartman giriş ve ortak alan kamera sistemi — görüntülü kapıcı ve kayıt altyapısı",
        "Çok bloklu sitelerde merkezi NVR ve birleşik izleme ekranı",
        "Otopark ve bahçe alanları için gece görüşlü dış mekan kameraları",
        "Bina güvenliği için görüntülü interkom ve kapı giriş sistemi entegrasyonu",
        "Site yönetimiyle aylık sözleşmeli bakım — arıza önleyici periyodik kontrol",
      ],
      faqQuestion:
        "Apartman ve site güvenlik kamera sistemi için nasıl bir süreç izlenir?",
      faqAnswer:
        "Önce bina yapısı, ortak alan sayısı, otopark büyüklüğü ve yönetim kararları belirlenir. Ardından kör nokta kalmayacak şekilde kamera noktaları planlanır; kayıt süresi, NVR kapasitesi ve kablo güzergahı netleştirilir. Site kurulumlarında yönetim kuruluyla ön görüşme yapılarak teknik ve idari süreç birlikte yönetilir.",
    },

    mixed: {
      title: "Çeşitli Yapı Tipleri İçin Esnek Güvenlik Yaklaşımı",
      summary:
        "Karma piyasalarda güvenlik sistemi ihtiyacı; yapı tipine, kullanım amacına ve risk profiline göre büyük farklılık gösterir. Konut bloklarından ticari binaların yanına konumlanan sanayi alanlarına kadar geniş bir yelpazede hizmet verilir. Bu nedenle keşif aşaması kritik öneme sahiptir: doğru kamera açısı, yeterli kayıt süresi ve uygun erişim yönetimi ancak saha analizi sonrası belirlenebilir.",
      bullets: [
        "Konut, ticari ve sanayi yapıları için farklılaşan sistem planlaması",
        "Karma kullanım binalarda çok katmanlı erişim kontrolü ve geçiş yönetimi",
        "Orta ve büyük ölçekli projeler için keşif bazlı özel teklif süreci",
        "Mobil izleme ve alarm entegrasyonu ile evden veya iş yerinden sistem yönetimi",
        "Her bütçeye uygun başlangıç, işletme ve kurumsal paket seçenekleri",
      ],
      faqQuestion:
        "Hem konut hem işyeri olan karma bir bina için tek sistem kurulabilir mi?",
      faqAnswer:
        "Evet. Karma kullanımlı binalarda farklı katlar veya alanlar için ayrı erişim yetkilendirmesi yapılırken tek bir kayıt ve izleme altyapısına bağlanabiliriz. Konut sakinleri ve işyeri kullanıcıları için ayrı kamera görüntüsü erişimi ve farklı alarm profilleri tanımlanır. Keşif sonrası yapıya özel çözüm sunarız.",
    },
  };

export function getMarketProfileContent(
  marketType: CityMarketType,
): MarketProfileContent {
  return cityMarketContent[marketType];
}
