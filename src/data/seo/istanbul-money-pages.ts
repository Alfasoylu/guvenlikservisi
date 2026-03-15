export interface IstanbulMoneySupportData {
  title: string;
  description: string;
  demandCards: {
    title: string;
    description: string;
  }[];
  districtTitle: string;
  districtDescription: string;
  districtLinks: {
    label: string;
    href?: string;
  }[];
  decisionTitle: string;
  decisionDescription: string;
  decisionLinks: {
    href: string;
    label: string;
    description: string;
  }[];
}

export const istanbulMoneySupportData: Record<string, IstanbulMoneySupportData> = {
  kamera_kurulum: {
    title: "Istanbul'da kamera talebi nerede yoğunlaşıyor?",
    description:
      "Kamera kurulumu talebi en çok yüksek giriş-çıkış trafiği, gece kapanan işletme akışı ve ortak alan kontrol ihtiyacı olan projelerde yoğunlaşıyor.",
    demandCards: [
      {
        title: "Apartman ve site girişleri",
        description:
          "Bina girişi, otopark ve ortak alan takibi isteyen site yönetimleri karar sürecinde hızlı keşif ve net kayıt senaryosu bekler.",
      },
      {
        title: "Mağaza ve işyeri güvenliği",
        description:
          "Kasa hattı, raf alanı, giriş kapısı ve personel hareketini aynı anda izlemek isteyen işletmeler en yüksek ticari talep grubunu oluşturur.",
      },
      {
        title: "Depo ve sanayi alanları",
        description:
          "Yükleme-boşaltma, çevre hattı ve vardiyalı çalışma düzeni olan tesislerde kamera yatırımı doğrudan operasyon güvenliği kararıdır.",
      },
    ],
    districtTitle: "Öncelikli Istanbul district cluster'ları",
    districtDescription:
      "Pilot district page ağı şu anda en çok talep beklenen ticari ve yoğun kullanım bölgelerine odaklanıyor.",
    districtLinks: [
      { label: "Kadıköy kamera kurulumu", href: "/istanbul/kadikoy/kamera-sistemi-kurulumu" },
      { label: "Beşiktaş kamera kurulumu", href: "/istanbul/besiktas/kamera-sistemi-kurulumu" },
      { label: "Ataşehir kamera kurulumu", href: "/istanbul/atasehir/kamera-sistemi-kurulumu" },
    ],
    decisionTitle: "Karar öncesi bakılması gereken destek sayfaları",
    decisionDescription:
      "Kullanıcılar fiyat, teknik kapsam ve montaj farklarını anlamadan form bırakmıyor. Bu yüzden karar destek linkleri money page'in parçası olmalı.",
    decisionLinks: [
      {
        href: "/istanbul-ip-kamera-montaji",
        label: "Istanbul IP kamera montajı",
        description: "IP kamera odaklı montaj senaryolarını ve mobil izleme beklentisini derinleştirir.",
      },
      {
        href: "/paketler-ve-fiyatlandirma",
        label: "Paketler ve fiyatlandırma",
        description: "Karar aşamasındaki kullanıcıya bütçe aralığı ve kapsam mantığını gösterir.",
      },
      {
        href: "/istanbul-kamera-teknik-servis",
        label: "Istanbul kamera teknik servis",
        description: "Yeni kurulum kadar satış sonrası müdahale kapasitesini de görünür hale getirir.",
      },
      {
        href: "/istanbul-kamera-bakim-servisi",
        label: "Istanbul kamera bakım servisi",
        description: "Sistemin teslim sonrası sürdürülebilirliğini anlatır ve recurring gelir katmanını destekler.",
      },
    ],
  },
  alarm: {
    title: "Istanbul'da alarm sistemi talebini taşıyan ana senaryolar",
    description:
      "Alarm tarafında dönüşüm, kullanıcıya soyut güvenlik değil; gerçek risk senaryosu gösterildiğinde gelir.",
    demandCards: [
      {
        title: "Mesai sonrası boş kalan işyerleri",
        description:
          "Kapanış sonrası giriş riski olan mağaza, ofis ve küçük işletmeler alarm sisteminde en hızlı karar veren segmenttir.",
      },
      {
        title: "Villa ve müstakil konutlar",
        description:
          "Bahçe hattı, kapı-pencere ve iç alan korumasını birlikte isteyen konut kullanıcıları mobil bildirim beklentisiyle gelir.",
      },
      {
        title: "Çok girişli ticari alanlar",
        description:
          "Depo, arka kapı, ofis ve vitrin hattı ayrı koruma bölgesi istediğinde alarm sistemi yatırım kararı hızlanır.",
      },
    ],
    districtTitle: "Pilot district alarm kümeleri",
    districtDescription:
      "District sayfaları alarm talebinin en belirgin olduğu yüksek yoğunluklu İstanbul bölgelerine bağlanır.",
    districtLinks: [
      { label: "Kadıköy alarm kurulumu", href: "/istanbul/kadikoy/alarm-sistemi-kurulumu" },
      { label: "Beşiktaş alarm kurulumu", href: "/istanbul/besiktas/alarm-sistemi-kurulumu" },
      { label: "Ataşehir alarm kurulumu", href: "/istanbul/atasehir/alarm-sistemi-kurulumu" },
    ],
    decisionTitle: "Alarm kararı öncesi destekleyici iç linkler",
    decisionDescription:
      "Alarm yatırımı genelde kamera, yangın veya geçiş kontrolüyle birlikte değerlendirilir. Bu kombinasyonları kullanıcıya aynı cluster içinde göstermek gerekir.",
    decisionLinks: [
      {
        href: "/istanbul-kamera-sistemi-kurulumu",
        label: "Istanbul kamera sistemi kurulumu",
        description: "Alarm ve kamera birlikte planlandığında keşif kararı daha kolay verilir.",
      },
      {
        href: "/istanbul-yangin-alarm-sistemi",
        label: "Istanbul yangın alarm sistemi",
        description: "Mevzuat ve can güvenliği odaklı projelerde yangın katmanı ayrı bir karar yoludur.",
      },
      {
        href: "/istanbul-kartli-gecis-sistemi",
        label: "Istanbul kartlı geçiş sistemi",
        description: "Erişim kontrolü ihtiyacı olan ticari yapılar alarm ile birlikte düşünür.",
      },
      {
        href: "/alarm-sistemi-kurulumu",
        label: "Genel alarm sistemi rehberi",
        description: "Genel hizmet sayfası karar sürecini üst-funnel seviyede destekler.",
      },
    ],
  },
  yangin: {
    title: "Yangın alarmında para getiren arama intent'i nasıl şekilleniyor?",
    description:
      "Yangın alarmı kararı, estetik veya konfor değil; yönetmelik, denetim ve operasyon riski üzerinden verilir.",
    demandCards: [
      {
        title: "Yönetmelik baskısı olan yapılar",
        description:
          "Otel, AVM, ofis, sağlık ve eğitim gibi yapılarda kullanıcı araması çoğu zaman mevzuat baskısıyla başlar.",
      },
      {
        title: "Depo ve üretim alanları",
        description:
          "Yanıcı stok, üretim hattı ve kapalı alan yoğunluğu arttığında erken algılama ihtiyacı öne çıkar.",
      },
      {
        title: "Proje ve revizyon ihtiyacı",
        description:
          "Eski panelin yenilenmesi, dedektör revizyonu veya bakım ihtiyacı da yeni kurulum kadar değerli lead oluşturur.",
      },
    ],
    districtTitle: "Istanbul'da öne çıkan ticari kümeler",
    districtDescription:
      "Yangın alarmı tarafında district bazlı sayfa ağı henüz açılmadı; bu nedenle önce ticari kümeleri plain signal olarak güçlendiriyoruz.",
    districtLinks: [
      { label: "Başakşehir" },
      { label: "Pendik" },
      { label: "Ataşehir" },
      { label: "Beşiktaş" },
    ],
    decisionTitle: "Yangın alarmı kararını destekleyen sayfalar",
    decisionDescription:
      "Bu kullanıcılar çoğu zaman fiyat, bakım ve çapraz güvenlik sistemi entegrasyonunu birlikte araştırır.",
    decisionLinks: [
      {
        href: "/yangin-alarm-sistemi-kurulumu",
        label: "Genel yangın alarm sistemi sayfası",
        description: "Çözüm mantığını ve genel hizmet kapsamını üst seviyede destekler.",
      },
      {
        href: "/bakim-servis-uzaktan-izleme",
        label: "Bakım, servis ve uzaktan izleme",
        description: "Yeni kurulum kadar periyodik bakım ve sistem sürekliliği ihtiyacını görünür kılar.",
      },
      {
        href: "/istanbul-alarm-sistemi",
        label: "Istanbul alarm sistemi",
        description: "Yangın ve hırsız alarmı kararlarının ayrıştığı noktaları destekler.",
      },
      {
        href: "/istanbul-kartli-gecis-sistemi",
        label: "Istanbul kartlı geçiş sistemi",
        description: "Kurumsal yapılarda erişim ve yangın güvenliği aynı yatırım sepetinde değerlendirilir.",
      },
    ],
  },
  kartli_gecis: {
    title: "Kartlı geçiş tarafında yüksek değerli lead'ler nereden gelir?",
    description:
      "Kartlı geçiş talebi çoğunlukla operasyon kontrolü, personel akışı ve ziyaretçi yönetimi ihtiyacından doğar.",
    demandCards: [
      {
        title: "Plaza ve ofis girişleri",
        description:
          "Kat geçişi, resepsiyon kontrolü ve personel yetkilendirmesi isteyen yapılarda dönüşüm potansiyeli yüksektir.",
      },
      {
        title: "Site ve apartman girişleri",
        description:
          "Sakin, ziyaretçi ve otopark girişini aynı altyapıda yönetmek isteyen projeler karar vermeye yakındır.",
      },
      {
        title: "Fabrika ve üretim tesisleri",
        description:
          "Vardiya takibi, kontrollü alanlar ve turnike entegrasyonu olan tesislerde lead kalitesi daha yüksektir.",
      },
    ],
    districtTitle: "Pilot district erişim kontrolü ağı",
    districtDescription:
      "Kartlı geçiş sistemi için İstanbul district page desteği üç ana ticari bölgede hazır durumda.",
    districtLinks: [
      { label: "Kadıköy kartlı geçiş", href: "/istanbul/kadikoy/kartli-gecis-sistemi-kurulumu" },
      { label: "Beşiktaş kartlı geçiş", href: "/istanbul/besiktas/kartli-gecis-sistemi-kurulumu" },
      { label: "Ataşehir kartlı geçiş", href: "/istanbul/atasehir/kartli-gecis-sistemi-kurulumu" },
    ],
    decisionTitle: "Erişim kontrolü kararına eşlik eden sayfalar",
    decisionDescription:
      "Kartlı geçiş kullanıcıları genelde kamera, alarm ve ticari yapı çözümlerini birlikte inceler.",
    decisionLinks: [
      {
        href: "/istanbul-kamera-sistemi-kurulumu",
        label: "Istanbul kamera sistemi kurulumu",
        description: "Giriş kayıtları ile görsel doğrulama senaryolarını destekler.",
      },
      {
        href: "/istanbul-alarm-sistemi",
        label: "Istanbul alarm sistemi",
        description: "Yetkisiz erişim ve alarm senaryolarını aynı karar hattında toplar.",
      },
      {
        href: "/kartli-gecis-sistemi-kurulumu",
        label: "Genel kartlı geçiş rehberi",
        description: "Üst seviye hizmet içeriği ile kullanıcıyı service-intent'e hazırlar.",
      },
      {
        href: "/istanbul-yangin-alarm-sistemi",
        label: "Istanbul yangın alarm sistemi",
        description: "Kurumsal tesislerde entegrasyon kararlarını destekler.",
      },
    ],
  },
  kamera_teknik_servis: {
    title: "Istanbul'da teknik servis talebini büyüten başlıca arıza kümeleri",
    description:
      "Teknik servis page'i sadece arıza anlatmamalı; kullanıcının hangi problemden geldiğini ve sonraki adımda nereye gideceğini net göstermeli.",
    demandCards: [
      {
        title: "Görüntü ve kayıt kaybı",
        description:
          "Canlı görüntü gelmemesi, kayıt alınmaması ve NVR uyarıları teknik servis aramalarının en yüksek hacimli kısmını oluşturur.",
      },
      {
        title: "Uzaktan erişim sorunları",
        description:
          "Telefondan izleme, offline cihaz ve ağ kopması şikayetleri çoğu zaman hızlı teknik müdahale lead'ine dönüşür.",
      },
      {
        title: "Parça değişimi yerine doğru teşhis",
        description:
          "Kullanıcılar gereksiz kamera değişimi değil, arızanın gerçekten hangi katmanda olduğunu öğrenmek ister.",
      },
    ],
    districtTitle: "Servis yoğunluğu görülen ticari bölgeler",
    districtDescription:
      "Teknik servis talebi en çok yoğun kullanım, yüksek cihaz adedi ve kesintinin operasyonu etkilediği bölgelerde öne çıkar.",
    districtLinks: [
      { label: "Kadıköy" },
      { label: "Beşiktaş" },
      { label: "Ataşehir" },
      { label: "Şişli" },
    ],
    decisionTitle: "Servis kararını hızlandıran iç linkler",
    decisionDescription:
      "Teknik servis sayfası problem-intent ve bakım-intent sayfalarıyla birlikte çalıştığında daha yüksek lead verimi üretir.",
    decisionLinks: [
      {
        href: "/sorun/kamera-goruntu-gelmiyor",
        label: "Kamera görüntü gelmiyor",
        description: "En acil arıza senaryolarından birini doğrudan servis niyetine taşır.",
      },
      {
        href: "/sorun/kamera-offline",
        label: "Kamera offline sorunu",
        description: "Ağ ve cihaz erişim problemlerini servis ihtiyacına bağlar.",
      },
      {
        href: "/istanbul-kamera-bakim-servisi",
        label: "Istanbul kamera bakım servisi",
        description: "Tekrarlayan arızaların bakım katmanına taşınmasını sağlar.",
      },
      {
        href: "/kamera-ariza-servisi",
        label: "Kamera arıza servisi merkezi sayfa",
        description: "Sorun kümelerini tek merkezden destekler ve problem cluster'ı büyütür.",
      },
    ],
  },
  kamera_bakim: {
    title: "Bakım kontratını taşıyan Istanbul ticari senaryoları",
    description:
      "Bakım sayfası, arıza olduktan sonra değil; arıza oluşmadan önce sistem sürekliliği isteyen kullanıcıları yakalamalı.",
    demandCards: [
      {
        title: "Site yönetimi ve ortak alanlar",
        description:
          "Sürekli kayıt beklentisi olan site ve apartman projeleri planlı bakım kararına daha yakındır.",
      },
      {
        title: "Depo ve üretim sahaları",
        description:
          "Yüksek kamera adedi olan sahalarda bakım kararı teknik servis çağrısından daha ekonomik hale gelir.",
      },
      {
        title: "Eski sistem kullanan işletmeler",
        description:
          "Eski disk, kirli lens, bozuk konnektör ve zayıf besleme gibi sorunlar bakım paketleriyle önlenebilir.",
      },
    ],
    districtTitle: "Bakım talebinin yoğunlaştığı bölgeler",
    districtDescription:
      "Bakım kararı özellikle kurulu sistem yoğunluğu yüksek olan karma ticari bölgelerde daha görünür hale gelir.",
    districtLinks: [
      { label: "Ataşehir" },
      { label: "Kadıköy" },
      { label: "Beşiktaş" },
      { label: "Başakşehir" },
    ],
    decisionTitle: "Bakım kararını destekleyen sayfalar",
    decisionDescription:
      "Bakım page'i teknik servis, yeni kurulum ve recurring-service sayfalarıyla birlikte çalıştığında daha güçlü olur.",
    decisionLinks: [
      {
        href: "/bakim-servis-uzaktan-izleme",
        label: "Bakım, servis ve uzaktan izleme",
        description: "Recurring hizmet katmanını daha geniş iş modeliyle destekler.",
      },
      {
        href: "/istanbul-kamera-teknik-servis",
        label: "Istanbul kamera teknik servis",
        description: "Reaktif servis ile planlı bakım arasındaki farkı görünür kılar.",
      },
      {
        href: "/kamera-sistemi-bakim-sozlesmesi",
        label: "Kamera bakım sözleşmesi",
        description: "Sözleşmeli bakım niyetini daha net ticari teklif yapısına bağlar.",
      },
      {
        href: "/istanbul-kamera-sistemi-kurulumu",
        label: "Istanbul kamera sistemi kurulumu",
        description: "Yeni kurulum alan kullanıcılara teslim sonrası sürdürülebilirlik yolunu gösterir.",
      },
    ],
  },
  ip_kamera: {
    title: "IP kamera montajında dönüşüm getiren Istanbul kullanım senaryoları",
    description:
      "IP kamera arayan kullanıcı daha teknik bir seviyede gelir; bu yüzden sayfanın çözünürlük, mobil erişim ve altyapı kararını net taşıması gerekir.",
    demandCards: [
      {
        title: "Uzaktan izleme isteyen işletmeler",
        description:
          "Telefon uygulaması, canlı izleme ve bildirim akışı arayan kullanıcılar IP kamera terimiyle gelir.",
      },
      {
        title: "Yüksek çözünürlük beklentisi",
        description:
          "Plaka, yüz ve detay takibi isteyen projelerde analog yerine IP mimari araştırması öne çıkar.",
      },
      {
        title: "Yeni altyapı kurulan projeler",
        description:
          "PoE, NVR ve ağ tabanlı kamera sistemi isteyen yeni projeler daha yüksek ticari değere sahiptir.",
      },
    ],
    districtTitle: "IP kamera talebinin öne çıktığı Istanbul odakları",
    districtDescription:
      "IP kamera kararları genellikle ticari yoğunluk, uzaktan erişim ihtiyacı ve daha net görüntü beklentisinin yüksek olduğu bölgelerde toplanır.",
    districtLinks: [
      { label: "Kadıköy" },
      { label: "Beşiktaş" },
      { label: "Ataşehir" },
      { label: "Şişli" },
    ],
    decisionTitle: "IP kamera kararını tamamlayan sayfalar",
    decisionDescription:
      "Bu kullanıcıyı doğrudan ana money page, teknik servis ve fiyat kararına taşıyan iç linkler birlikte çalışmalı.",
    decisionLinks: [
      {
        href: "/istanbul-kamera-sistemi-kurulumu",
        label: "Istanbul kamera sistemi kurulumu",
        description: "Genel kurulum kararını ve keşif teklif hattını ana money page'de toplar.",
      },
      {
        href: "/paketler-ve-fiyatlandirma",
        label: "Paketler ve fiyatlandırma",
        description: "Teknik beklentiyi doğrudan fiyat kararına bağlar.",
      },
      {
        href: "/istanbul-kamera-teknik-servis",
        label: "Istanbul kamera teknik servis",
        description: "Satış sonrası destek kapasitesini görünür kılar.",
      },
      {
        href: "/istanbul-kamera-bakim-servisi",
        label: "Istanbul kamera bakım servisi",
        description: "IP tabanlı sistemlerin operasyonel sürekliliği için bakım katmanını öne çıkarır.",
      },
    ],
  },
};
