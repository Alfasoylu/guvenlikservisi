interface TrustStat {
  value: string;
  label: string;
  note: string;
}

interface TrustCard {
  title: string;
  description: string;
}

interface TrustLink {
  href: string;
  label: string;
  description: string;
}

export interface IstanbulTrustLayerContent {
  eyebrow: string;
  title: string;
  description: string;
  stats: readonly TrustStat[];
  proofTitle: string;
  proofCards: readonly TrustCard[];
  scenariosTitle: string;
  scenarioCards: readonly TrustCard[];
  linksTitle: string;
  links: readonly TrustLink[];
}

export const istanbulTrustLayerData = {
  kamera_kurulum: {
    eyebrow: "Hizmet Güvencemiz",
    title: "Kamera kurulumunda güven sadece sözle değil, hizmet kapsamıyla sağlanır",
    description:
      "İstanbul'da kamera kurulumu, teknik servis ve bakım hizmetlerini aynı ekip disiplini ile yürütüyoruz. Güvenilirliğimiz yalnızca sözde değil; hizmet kapsamımız, uygulama kalitemiz ve referanslarımızla kanıtlanmıştır.",
    stats: [
      { value: "500+", label: "Proje Deneyimi", note: "Site, mağaza, ofis ve depo tiplerinde uygulama birikimi." },
      { value: "12 Yıl", label: "Saha Tecrübesi", note: "Kurulum, arıza ve bakım akışını aynı ekip mantığı ile yönetme." },
      { value: "Aynı Gün", label: "Keşif Hızı", note: "İstanbul içindeki ticari taleplerde hızlı ilk temas." },
      { value: "3 Katman", label: "Hizmet Modeli", note: "Kurulum, teknik servis ve bakım birlikte kurgulandı." },
    ],
    proofTitle: "Operasyonel güçlü yanlarımız",
    proofCards: [
      { title: "Keşif ve kamera planı", description: "Kör nokta, kayıt süresi ve mobil erişim aynı keşif akışı içinde planlanır." },
      { title: "NVR, disk ve altyapı uyumu", description: "Sadece kamera değil; kayıt cihazı, switch ve depolama sağlığı birlikte ele alınır." },
      { title: "Kurulum sonrası servis desteği", description: "Kurulum sonrası teknik servis ve bakım hizmetlerimiz de aynı ekip tarafından yürütülür." },
    ],
    scenariosTitle: "İstanbul'da en sık talep profilleri",
    scenarioCards: [
      { title: "Kadıköy mağaza ve kafe", description: "Giriş, kasa ve depo görünürlüğü isteyen küçük-orta ölçekli ticari kurulumlar." },
      { title: "Beşiktaş ofis ve plaza", description: "Uzaktan izleme, ortak alanlar ve giriş-çıkış kaydı bekleyen kurumsal talepler." },
      { title: "Ataşehir site ve rezidans", description: "Otopark, bina girişi ve ortak alan kapsamasına dayanan yoğun konut senaryoları." },
    ],
    linksTitle: "İlgili İstanbul kamera hizmetlerimiz",
    links: [
      { href: "/istanbul/kadikoy/kamera-sistemi-kurulumu", label: "Kadıköy Kamera Sistemi", description: "Kadıköy bölgesindeki kamera kurulum hizmetlerimizin detayları." },
      { href: "/istanbul/besiktas/kamera-sistemi-kurulumu", label: "Beşiktaş Kamera Sistemi", description: "Beşiktaş bölgesindeki kamera kurulum hizmetlerimizin detayları." },
      { href: "/istanbul-kamera-teknik-servis", label: "İstanbul Kamera Teknik Servis", description: "Mevcut kamera sisteminizde arıza varsa teknik servis desteği alın." },
      { href: "/istanbul-kamera-bakim-servisi", label: "İstanbul Kamera Bakım Servisi", description: "Kamera sisteminizin ömrünü uzatan periyodik bakım hizmetimiz." },
    ],
  },
  alarm: {
    eyebrow: "Hizmet Güvencemiz",
    title: "Alarm sisteminizin güvencesi kurulumdan sonra da devam eder",
    description:
      "İstanbul'da alarm sistemi kurarken sadece cihaz değil; doğru sensör yerleşimi, panel yönetimi ve ileriye dönük servis ihtiyacının nasıl karşılanacağı da önemlidir.",
    stats: [
      { value: "7/24", label: "Koruma Mantığı", note: "Ev, işyeri ve mağaza senaryolarında sürekli koruma odağı." },
      { value: "Aynı Gün", label: "Keşif ve Kurulum", note: "Standart alarm taleplerinde hızlı devreye alma hedefi." },
      { value: "İstanbul", label: "Lokal Kapsam", note: "İlçe bazlı hizmet ağımızla desteklenen şehir geneli kapsam." },
      { value: "3 Yapı", label: "Konut, İşyeri, Mağaza", note: "En sık hizmet verdiğimiz yapı tipleri açık şekilde ayrılmıştır." },
    ],
    proofTitle: "Alarm sisteminde güven veren noktalarımız",
    proofCards: [
      { title: "Sensör senaryosu", description: "Kapı, pencere, hareket ve bildirim kurgusu mekâna göre şekillendirilir." },
      { title: "Panel ve bildirim akışı", description: "Elektrik kesintisi, mobil bildirim ve kullanıcı yönetimi karar anında netleştirilir." },
      { title: "Arıza ve bakım desteği", description: "Kurulum sonrası arıza ve bakım hizmetlerimizle sisteminiz sürekli koruma altındadır." },
    ],
    scenariosTitle: "İstanbul alarm talebinde baskın profiller",
    scenarioCards: [
      { title: "Kadıköy butik işletmeler", description: "Mesai sonrası alarm kurgu ve mobil bildirim isteyen küçük ticari alanlar." },
      { title: "Beşiktaş lüks konutlar", description: "Çok bölgeli alarm, dış çevre sensörü ve daha yüksek hassasiyet talebi." },
      { title: "Ataşehir yeni ofisler", description: "Hızlı devreye alınan, uzaktan yönetilen ve ekip değişimi kaldıran sistem beklentisi." },
    ],
    linksTitle: "İlgili alarm hizmetlerimiz",
    links: [
      { href: "/istanbul/kadikoy/alarm-sistemi-kurulumu", label: "Kadıköy Alarm Sistemi", description: "Kadıköy bölgesindeki alarm sistemi kurulum hizmetlerimiz." },
      { href: "/istanbul/besiktas/alarm-sistemi-kurulumu", label: "Beşiktaş Alarm Sistemi", description: "Beşiktaş bölgesindeki alarm sistemi kurulum hizmetlerimiz." },
      { href: "/sorun/alarm-arizalari", label: "Alarm Arızaları", description: "Alarm sisteminizde yaşanan arızaların çözümü için destek alın." },
      { href: "/istanbul/guvenlik-sistemi-teknik-servis", label: "Güvenlik Sistemi Teknik Servis", description: "Mevcut güvenlik sisteminizde sorun varsa teknik servis desteği alın." },
    ],
  },
  yangin: {
    eyebrow: "Hizmet Güvencemiz",
    title: "Yangın alarm sisteminde güven, yönetmelik uyumu ve operasyon disiplini ile kurulur",
    description:
      "Yangın alarm sistemi kurarken yalnızca cihaz değil; bina tipi, zonlama, panel seçimi ve sürekli bakım mantığını birlikte planlamanız gerekir.",
    stats: [
      { value: "Uyum", label: "Yönetmelik Odağı", note: "Adresli veya konvansiyonel seçim bina tipine göre netleştirilir." },
      { value: "Çoklu Yapı", label: "Otel, İşyeri, Fabrika", note: "Yangın algılama ihtiyacı farklı tesis tiplerine göre ayrılır." },
      { value: "Keşif", label: "Loop ve Zonlama", note: "Sadece cihaz listesi değil, sistem mantığı planlanır." },
      { value: "Bakım", label: "Sürekli Çalışırlılık", note: "Kurulum sonrası test ve periyodik kontrol mantığı vurgulanır." },
    ],
    proofTitle: "Yangın sisteminde güven veren katmanlarımız",
    proofCards: [
      { title: "Bina tipine göre panel seçimi", description: "Adresli ve konvansiyonel panel seçimi kapasite ve uyum ihtiyacına göre belirlenir." },
      { title: "Dedektör ve hat planlaması", description: "Kat sayısı, kablolama ve loop mantığı proje içinde netleştirilir." },
      { title: "Kurulum sonrası test ve bakım", description: "Kurulum sonrası test, periyodik bakım ve teknik servis hizmetlerimizle kesintisiz destek sağlarız." },
    ],
    scenariosTitle: "İstanbul yangın talebinde öne çıkan profiller",
    scenarioCards: [
      { title: "Otel ve konaklama yapıları", description: "Çoklu kat, acil durum bilgilendirmesi ve panel denetimi gerektiren yapılar." },
      { title: "Fabrika ve depo", description: "Geniş alan, zorlu ortam ve sürekli algılama gerektiren operasyonel tesisler." },
      { title: "İş merkezi ve plaza", description: "Yönetmelik ve bina yönetimi beklentisiyle karar veren kurumsal yapılar." },
    ],
    linksTitle: "İlgili yangın alarm hizmetlerimiz",
    links: [
      { href: "/yangin-alarm-sistemi-kurulumu", label: "Yangın Alarm Sistemi Kurulumu", description: "Yangın alarm sistemi kurulumu hakkında genel bilgi ve hizmet detayları." },
      { href: "/bakim-servis-uzaktan-izleme", label: "Bakım, Servis ve Uzaktan İzleme", description: "Yangın alarm sisteminizin bakımı ve sürekli çalışırlılığı için hizmetlerimiz." },
      { href: "/istanbul/guvenlik-sistemi-teknik-servis", label: "Güvenlik Sistemi Teknik Servis", description: "Panel veya dedektör sorunlarında yerinde teknik servis desteği alın." },
      { href: "/istanbul/kartli-gecis-sistemi-kurulumu", label: "İstanbul Kartlı Geçiş Sistemi", description: "Bina güvenliğinizi kartlı geçiş sistemiyle tamamlayın." },
    ],
  },
  kartli_gecis: {
    eyebrow: "Hizmet Güvencemiz",
    title: "Kartlı geçiş sisteminde güvence, operasyon sürekliliği ve yetkilendirme ile sağlanır",
    description:
      "Turnike, manyetik kilit ve okuyucu kurulumunun ötesinde; personel akışı, ziyaretçi yönetimi ve arıza anında kesintisiz çalışma güvencesi de hizmetimizin parçasıdır.",
    stats: [
      { value: "Ofis", label: "Kurumsal Yapı Odağı", note: "Plaza, ofis ve çok kullanıcılı yapılar için erişim kontrolü." },
      { value: "Site", label: "Konut Girişleri", note: "Sakin, ziyaretçi ve ortak alan akışlarında kullanılan senaryolar." },
      { value: "Log", label: "Geçiş Kaydı", note: "Yetki, zaman kuralı ve geçiş takibi karar vericiler için önemlidir." },
      { value: "Servis", label: "Arıza Çıkışı", note: "Kurulum sonrası okuyucu ve kilit sorunlarına servis bağlantısı vardır." },
    ],
    proofTitle: "Kartlı geçişte güven veren noktalarımız",
    proofCards: [
      { title: "Okuyucu ve kilit seçimi", description: "Manyetik kilit, elektrikli kilit ve okuyucu tipi yapıya göre seçilir." },
      { title: "Ziyaretçi ve personel akış mantığı", description: "Sadece kapı açma değil, yetki ve log yapısı da planlanır." },
      { title: "Arıza ve devam eden destek", description: "Kartlı geçiş sisteminizde sorun yaşandığında hızlı teknik servis desteği sunuyoruz." },
    ],
    scenariosTitle: "İstanbul kartlı geçiş talebinde öne çıkan profiller",
    scenarioCards: [
      { title: "Beşiktaş plaza ve ofisler", description: "Personel ve ziyaretçi akışlarını ayrı yönetmek isteyen kurumsal yapılar." },
      { title: "Kadıköy apartman ve site", description: "Bina girişi ve ortak alanlarda daha kontrollü erişim isteyen konut yapıları." },
      { title: "Ataşehir rezidans ve finans alanı", description: "Kat bazlı yetki ve raporlama isteyen yoğun giriş çıkışlı yapılar." },
    ],
    linksTitle: "İlgili kartlı geçiş hizmetlerimiz",
    links: [
      { href: "/istanbul/kadikoy/kartli-gecis-sistemi-kurulumu", label: "Kadıköy Kartlı Geçiş", description: "Kadıköy'de apartman ve ofisler için kartlı geçiş sistemi kurulumu." },
      { href: "/istanbul/besiktas/kartli-gecis-sistemi-kurulumu", label: "Beşiktaş Kartlı Geçiş", description: "Beşiktaş'ta kurumsal yapılar için kartlı geçiş sistemi kurulumu." },
      { href: "/sorun/kartli-gecis-calismiyor", label: "Kartlı Geçiş Çalışmıyor", description: "Kartlı geçiş sisteminizde sorun mu var? Arıza çözüm rehberimizi inceleyin." },
      { href: "/istanbul/guvenlik-sistemi-teknik-servis", label: "Güvenlik Sistemi Teknik Servis", description: "Geçiş sisteminizde teknik sorun yaşıyorsanız servis desteği alın." },
    ],
  },
  kamera_teknik_servis: {
    eyebrow: "Hizmet Güvencemiz",
    title: "Teknik servis güveni, teşhis hızı ve devam eden hizmet kabiliyeti ile oluşur",
    description:
      "Kamera teknik servisinde yalnızca arıza çözümü değil, hangi tip sorunlarda ne kadar hızlı müdahale edebildiğimizi de görmek istersiniz. Teşhis, bakım ve gerektiğinde sistem yenileme süreçlerini birlikte yürütüyoruz.",
    stats: [
      { value: "Aynı Gün", label: "Servis Hızı", note: "Acil kamera ve kayıt sorunlarında hızlı ilk temas." },
      { value: "NVR/HDD", label: "Çekirdek Problem Alanı", note: "Kayıt, görüntü ve bağlantı problemleri aynı servis ekibimiz tarafından çözülür." },
      { value: "İstanbul", label: "Yerel Servis Odağı", note: "Teknik servis ve arıza çözüm hizmetlerimiz İstanbul genelini kapsar." },
      { value: "Bakım", label: "Sonraki Adım", note: "Tekrarlayan arızalar bakım sözleşmesine taşınabilir." },
    ],
    proofTitle: "Teknik serviste güçlü yanlarımız",
    proofCards: [
      { title: "Arıza teşhis süreci", description: "Kamera, NVR, HDD, kablo ve ağdan kaynaklanan sorunlar ayrı ayrı değerlendirilir." },
      { title: "Uzaktan ve sahada müdahale", description: "Hangi problemin uzaktan, hangisinin sahada çözüldüğü açıkça belirlenir." },
      { title: "Bakım ve yenileme değerlendirmesi", description: "Teknik servis sırasında bakım veya yeni kurulum ihtiyacınız da değerlendirilir." },
    ],
    scenariosTitle: "İstanbul servis talebinde en sık profiller",
    scenarioCards: [
      { title: "Kayıt cihazı sorunu yaşayan işletmeler", description: "Kayıt yok, disk hatası veya NVR problemi ile gelen acil talepler." },
      { title: "Offline kamera yaşayan siteler", description: "Aynı anda birden fazla kamerada bağlantı kaybı görülen yapılar." },
      { title: "Eski sistemli mağazalar", description: "Tekrarlayan görüntü ve kablo sorunları nedeniyle servis ve yenileme ihtiyacı doğan yerler." },
    ],
    linksTitle: "İlgili teknik servis sayfalarımız",
    links: [
      { href: "/sorun/kamera-offline", label: "Kamera Offline", description: "Kameranız çevrimdışı mı? Ağ ve bağlantı sorunlarının çözümü için inceleyin." },
      { href: "/sorun/kayit-yapilmiyor", label: "Kayıt Yapılmıyor", description: "Kayıt cihazı veya disk kaynaklı sorunların çözümü için inceleyin." },
      { href: "/istanbul-kamera-bakim-servisi", label: "İstanbul Kamera Bakım Servisi", description: "Tekrarlayan arızaları önlemek için periyodik bakım hizmetimizi inceleyin." },
      { href: "/istanbul/kamera-sistemi-kurulumu", label: "İstanbul Kamera Sistemi Kurulumu", description: "Eski sisteminizi yenilemek veya yeni kamera kurmak için hizmetlerimiz." },
    ],
  },
  kamera_bakim: {
    eyebrow: "Hizmet Güvencemiz",
    title: "Düzenli bakım ile kayıt sağlığı ve sistem sürekliliği güvence altına alınır",
    description:
      "Periyodik bakım sadece kontrol listesi uygulamak değil; disk sağlığı, lens temizliği, yazılım güncelleme ve arıza önleme süreçlerinin tamamını kapsar.",
    stats: [
      { value: "Periyodik", label: "Kontrol Disiplini", note: "Yıllık, altı aylık veya daha sık bakım yapıları için planlanabilir." },
      { value: "Disk", label: "Kayıt Sağlığı", note: "HDD ve kayıt cihazının sürekliliği bakım vaadinin merkezindedir." },
      { value: "Lens", label: "Görüntü Kalitesi", note: "Kir, açı kayması ve görüntü düşüşü sahada düzeltilir." },
      { value: "Servis", label: "Sorun Önleme", note: "Bakım mantığı arıza oluşmadan önce devreye girer." },
    ],
    proofTitle: "Bakım hizmetinde güven veren noktalarımız",
    proofCards: [
      { title: "Periyodik saha kontrolü", description: "Kamera açısı, lens, kablo ve kayıt sağlığı aynı bakım ziyaretinde kontrol edilir." },
      { title: "Firmware ve cihaz sağlığı", description: "Eski yazılım, disk uyarı ve performans düşüşü bakım içinde yakalanır." },
      { title: "Arıza önleme yaklaşımı", description: "Düzenli bakım, teknik servis ihtiyacını en aza indiren proaktif bir yaklaşımdır." },
    ],
    scenariosTitle: "Bakım hizmetinde öne çıkan müşteri profilleri",
    scenarioCards: [
      { title: "Site ve apartman yönetimleri", description: "Toplu kamera altyapısında sürekli kayıt sağlığı isteyen yönetimler." },
      { title: "Mağaza zinciri benzeri yapılar", description: "Periyodik kontrol ile ani arıza riskini azaltmak isteyen işletmeler." },
      { title: "Depo ve sanayi noktaları", description: "Toz, yoğun çalışma ve gece görüşü etkilenebilen zor ortamlar." },
    ],
    linksTitle: "İlgili bakım ve servis sayfalarımız",
    links: [
      { href: "/kamera-sistemi-bakim-sozlesmesi", label: "Kamera Bakım Sözleşmesi", description: "Düzenli kontrol ve öncelikli servis avantajı için bakım sözleşmesi seçeneklerimiz." },
      { href: "/istanbul-kamera-teknik-servis", label: "İstanbul Kamera Teknik Servis", description: "Bakım sırasında tespit edilen arızalar için teknik servis desteği." },
      { href: "/sorun/hdd-kayit-cihazi-sorunlari", label: "HDD ve Kayıt Cihazı Sorunları", description: "HDD ve kayıt cihazı sorunlarının teşhisi ve çözümü için inceleyin." },
      { href: "/uzaktan-kamera-izleme", label: "Uzaktan Kamera İzleme", description: "Kameralarınızı uzaktan izleme ve merkezi yönetim çözümlerimiz." },
    ],
  },
  ip_kamera: {
    eyebrow: "Hizmet Güvencemiz",
    title: "IP kamera montajında güven, görüntü kalitesi ve altyapı planlaması ile artar",
    description:
      "IP kamera sistemi kurarken yalnızca montaj değil; çözünürlük, kayıt süresi, PoE altyapı ve uzaktan izleme akışını birlikte planlamanız gerekir.",
    stats: [
      { value: "IP", label: "Dijital Altyapı", note: "Çözünürlük, PoE ve ağ topolojisi IP kurulumun temelidir." },
      { value: "Mobil", label: "Uzaktan Erişim", note: "Telefon ve merkezi izleme talebi satın alma kararında kritiktir." },
      { value: "İstanbul", label: "Yerel Keşif", note: "Lokal kurulum ve servis ağımız ile hızlı keşif ve devreye alma." },
      { value: "4 Katman", label: "Kurulum + Servis + Bakım + İzleme", note: "IP montaj hizmetimiz kurulum sonrası ihtiyaçlarınızı da kapsar." },
    ],
    proofTitle: "IP montajda güven veren noktalarımız",
    proofCards: [
      { title: "PoE ve NVR planı", description: "IP kamerada switch, kablo ve kayıt cihazının birlikte planlanması gerekir." },
      { title: "Çözünürlük ve depolama dengesi", description: "Görüntü kalitesi ile kayıt süresi arasındaki denge teknik olarak kurulmalıdır." },
      { title: "Uzaktan izleme kurulumu", description: "Mobil bağlantı ve kullanıcı erişimi kurulumun ayrılmaz parçası olarak ele alınır." },
    ],
    scenariosTitle: "IP kamera talebinde en sık İstanbul profilleri",
    scenarioCards: [
      { title: "Küçük ve orta işletmeler", description: "Daha net görüntü ve telefondan izleme isteyen ticari noktalar." },
      { title: "Site ve apartmanlar", description: "Analogtan IP'ye geçiş düşünen ve kayıt kalitesini yükselten yapılar." },
      { title: "Depo ve operasyon alanları", description: "Uzak erişim ve daha uzun kayıt süresi isteyen saha odaklı alanlar." },
    ],
    linksTitle: "İlgili IP kamera hizmetlerimiz",
    links: [
      { href: "/istanbul/kamera-sistemi-kurulumu", label: "İstanbul Kamera Sistemi Kurulumu", description: "İstanbul genelinde kamera sistemi kurulum hizmetlerimizin tamamı." },
      { href: "/uzaktan-kamera-izleme", label: "Uzaktan Kamera İzleme", description: "IP kameralarınızı telefondan veya merkezden izleme çözümlerimiz." },
      { href: "/sorun/telefondan-izleme-sorunu", label: "Telefondan İzleme Sorunu", description: "Telefondan izleme sorunu yaşıyorsanız çözüm adımlarını inceleyin." },
      { href: "/istanbul-kamera-teknik-servis", label: "İstanbul Kamera Teknik Servis", description: "IP kamera sisteminizde sorun varsa teknik servis desteği alın." },
    ],
  },
} as const;
