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
    eyebrow: "İstanbul Trust Layer",
    title: "Kamera kurulumu için güven sinyali yalnızca sözle verilmez",
    description:
      "Bu sayfa İstanbul'da kurulum, teknik servis ve bakım katmanlarını aynı sistemde göstermelidir. Güven üreten şey yalnızca metin değil; hizmet kapsamı, uygulama disiplini ve lokal proof zinciridir.",
    stats: [
      { value: "500+", label: "Proje Deneyimi", note: "Site, mağaza, ofis ve depo tiplerinde uygulama birikimi." },
      { value: "12 Yıl", label: "Saha Tecrübesi", note: "Kurulum, arıza ve bakım akışını aynı ekip mantığı ile yönetme." },
      { value: "Aynı Gün", label: "Keşif Hızı", note: "İstanbul içindeki ticari taleplerde hızlı ilk temas." },
      { value: "3 Katman", label: "Lead Modeli", note: "Kurulum, teknik servis ve bakım birlikte kurgulandı." },
    ],
    proofTitle: "Operasyonel proof noktalarımız",
    proofCards: [
      { title: "Keşif ve kamera planı", description: "Kör nokta, kayıt süresi ve mobil erişim aynı keşif akışı içinde planlanır." },
      { title: "NVR, disk ve altyapı uyumu", description: "Sadece kamera değil; kayıt cihazı, switch ve depolama sağlığı birlikte ele alınır." },
      { title: "Kurulum sonrası servis çıkışı", description: "Aynı cluster içinde teknik servis ve bakım sayfaları yer aldığı için güven daha inandırıcı olur." },
    ],
    scenariosTitle: "İstanbul'da en sık talep profilleri",
    scenarioCards: [
      { title: "Kadıköy mağaza ve kafe", description: "Giriş, kasa ve depo görünürlüğü isteyen küçük-orta ölçekli ticari kurulumlar." },
      { title: "Beşiktaş ofis ve plaza", description: "Uzaktan izleme, ortak alanlar ve giriş-çıkış kaydı bekleyen kurumsal talepler." },
      { title: "Ataşehir site ve rezidans", description: "Otopark, bina girişi ve ortak alan kapsamasına dayanan yoğun konut senaryoları." },
    ],
    linksTitle: "Güveni derinleştiren ilgili İstanbul sayfaları",
    links: [
      { href: "/istanbul/kadikoy/kamera-sistemi-kurulumu", label: "Kadıköy Kamera Sistemi", description: "İlçe proof sinyali ile ana money page arasında doğrudan bağ kurar." },
      { href: "/istanbul/besiktas/kamera-sistemi-kurulumu", label: "Beşiktaş Kamera Sistemi", description: "Kurumsal ve prestijli ticari segmentte lokal kapsamı gösterir." },
      { href: "/istanbul-kamera-teknik-servis", label: "İstanbul Kamera Teknik Servis", description: "Kurulum vaadini servis gerçeği ile destekler." },
      { href: "/istanbul-kamera-bakim-servisi", label: "İstanbul Kamera Bakım Servisi", description: "Tek seferlik kurulum yerine süreklilik modelini güçlendirir." },
    ],
  },
  alarm: {
    eyebrow: "İstanbul Trust Layer",
    title: "Alarm sayfası güveni, kurulum sonrası süreçleri de göstermelidir",
    description:
      "İstanbul alarm intent'inde kullanıcı sadece ürün değil, sensör yerleşimi, panel yönetimi ve tekrar eden servis ihtiyacının nasıl ele alınacağını görmek ister.",
    stats: [
      { value: "7/24", label: "Koruma Mantığı", note: "Ev, işyeri ve mağaza senaryolarında sürekli koruma odağı." },
      { value: "Aynı Gün", label: "Keşif ve Kurulum", note: "Standart alarm taleplerinde hızlı devreye alma hedefi." },
      { value: "İstanbul", label: "Lokal Kapsam", note: "İlçe bazlı support pages ile desteklenen şehir odağı." },
      { value: "3 Yapı", label: "Konut, İşyeri, Mağaza", note: "En sık alıcı grupları açık şekilde ayrıldı." },
    ],
    proofTitle: "Alarm tarafında güven üreten noktalar",
    proofCards: [
      { title: "Sensör senaryosu", description: "Kapı, pencere, hareket ve bildirim kurgusu mekâna göre şekillendirilir." },
      { title: "Panel ve bildirim akışı", description: "Elektrik kesintisi, mobil bildirim ve kullanıcı yönetimi karar anında netleştirilir." },
      { title: "Arıza ve bakım devamı", description: "Alarm arızası ve teknik servis sayfaları ile desteklenen daha sağlıklı bir trust zinciri vardır." },
    ],
    scenariosTitle: "İstanbul alarm talebinde baskın profiller",
    scenarioCards: [
      { title: "Kadıköy butik işletmeler", description: "Mesai sonrası alarm kurgu ve mobil bildirim isteyen küçük ticari alanlar." },
      { title: "Beşiktaş lüks konutlar", description: "Çok bölgeli alarm, dış çevre sensörü ve daha yüksek hassasiyet talebi." },
      { title: "Ataşehir yeni ofisler", description: "Hızlı devreye alınan, uzaktan yönetilen ve ekip değişimi kaldıran sistem beklentisi." },
    ],
    linksTitle: "Alarm güvenini besleyen ilgili sayfalar",
    links: [
      { href: "/istanbul/kadikoy/alarm-sistemi-kurulumu", label: "Kadıköy Alarm Sistemi", description: "İlçe bazlı ticari ve konut demand sinyali üretir." },
      { href: "/istanbul/besiktas/alarm-sistemi-kurulumu", label: "Beşiktaş Alarm Sistemi", description: "Prestijli konut ve işletme segmentinde lokal güven ekler." },
      { href: "/sorun/alarm-arizalari", label: "Alarm Arızaları", description: "Kurulum vaadini sorun çözüm kapasitesi ile destekler." },
      { href: "/istanbul/guvenlik-sistemi-teknik-servis", label: "Güvenlik Sistemi Teknik Servis", description: "Arıza halinde mevcut sistem kullanıcısını kaybetmez." },
    ],
  },
  yangin: {
    eyebrow: "İstanbul Trust Layer",
    title: "Yangın alarm tarafında güven, uyumluluk ve operasyon disiplini ile kurulur",
    description:
      "Yangın alarm sorgularında kullanıcı yalnızca cihaz değil; bina tipi, zonlama, panel seçimi ve sürekli bakım mantığını görmek ister.",
    stats: [
      { value: "Uyum", label: "Yönetmelik Odağı", note: "Adresli veya konvansiyonel seçim bina tipine göre netleştirilir." },
      { value: "Çoklu Yapı", label: "Otel, İşyeri, Fabrika", note: "Yangın algılama ihtiyacı farklı tesis tiplerine göre ayrılır." },
      { value: "Keşif", label: "Loop ve Zonlama", note: "Sadece cihaz listesi değil, sistem mantığı planlanır." },
      { value: "Bakım", label: "Sürekli Çalışırlılık", note: "Kurulum sonrası test ve periyodik kontrol mantığı vurgulanır." },
    ],
    proofTitle: "Yangın sisteminde güven üreten katmanlar",
    proofCards: [
      { title: "Bina tipine göre panel seçimi", description: "Adresli ve konvansiyonel panel seçimi kapasite ve uyum ihtiyacına göre belirlenir." },
      { title: "Dedektör ve hat planlaması", description: "Kat sayısı, kablolama ve loop mantığı proje içinde netleştirilir." },
      { title: "Kurulum sonrası test akışı", description: "Bakım ve teknik servis sayfalarına bağlanan bir operasyon zinciri oluşturur." },
    ],
    scenariosTitle: "İstanbul yangın talebinde öne çıkan profiller",
    scenarioCards: [
      { title: "Otel ve konaklama yapıları", description: "Çoklu kat, acil durum bilgilendirmesi ve panel denetimi gerektiren yapılar." },
      { title: "Fabrika ve depo", description: "Geniş alan, zorlu ortam ve sürekli algılama gerektiren operasyonel tesisler." },
      { title: "İş merkezi ve plaza", description: "Yönetmelik ve bina yönetimi beklentisiyle karar veren kurumsal yapılar." },
    ],
    linksTitle: "Yangın güvenini destekleyen ilgili sayfalar",
    links: [
      { href: "/yangin-alarm-sistemi-kurulumu", label: "Yangın Alarm Sistemi Kurulumu", description: "Genel kurulum sayfası ile İstanbul money page arasında konu otoritesi kurar." },
      { href: "/bakim-servis-uzaktan-izleme", label: "Bakım, Servis ve Uzaktan İzleme", description: "Sürekli çalışırlılık beklentisini destekler." },
      { href: "/istanbul/guvenlik-sistemi-teknik-servis", label: "Güvenlik Sistemi Teknik Servis", description: "Panel veya dedektör sorunlarında servis çıkışı sunar." },
      { href: "/istanbul-kartli-gecis-sistemi", label: "İstanbul Kartlı Geçiş Sistemi", description: "Kurumsal bina güvenliğini daha geniş sistem mantığına bağlar." },
    ],
  },
  kartli_gecis: {
    eyebrow: "İstanbul Trust Layer",
    title: "Kartlı geçiş sayfası, operasyon ve yetkilendirme güveni üretmelidir",
    description:
      "Kullanıcı turnike, manyetik kilit ve okuyucu kurulumundan fazlasını arar. Personel akışı, ziyaretçi yönetimi ve arıza anında süreklilik trust katmanının bir parçasıdır.",
    stats: [
      { value: "Ofis", label: "Kurumsal Yapı Odağı", note: "Plaza, ofis ve çok kullanıcılı yapılar için erişim kontrolü." },
      { value: "Site", label: "Konut Girişleri", note: "Sakin, ziyaretçi ve ortak alan akışlarında kullanılan senaryolar." },
      { value: "Log", label: "Geçiş Kaydı", note: "Yetki, zaman kuralı ve geçiş takibi karar vericiler için önemlidir." },
      { value: "Servis", label: "Arıza Çıkışı", note: "Kurulum sonrası okuyucu ve kilit sorunlarına servis bağlantısı vardır." },
    ],
    proofTitle: "Kartlı geçişte güven gösteren noktalar",
    proofCards: [
      { title: "Okuyucu ve kilit seçimi", description: "Manyetik kilit, elektrikli kilit ve okuyucu tipi yapıya göre seçilir." },
      { title: "Ziyaretçi ve personel akış mantığı", description: "Sadece kapı açma değil, yetki ve log yapısı da planlanır." },
      { title: "Arıza ve devam eden destek", description: "Kartlı geçiş çalışmıyor gibi problem sayfaları ile servis güvencesi desteklenir." },
    ],
    scenariosTitle: "İstanbul kartlı geçiş talebinde öne çıkan profiller",
    scenarioCards: [
      { title: "Beşiktaş plaza ve ofisler", description: "Personel ve ziyaretçi akışlarını ayrı yönetmek isteyen kurumsal yapılar." },
      { title: "Kadıköy apartman ve site", description: "Bina girişi ve ortak alanlarda daha kontrollü erişim isteyen konut yapıları." },
      { title: "Ataşehir rezidans ve finans alanı", description: "Kat bazlı yetki ve raporlama isteyen yoğun giriş çıkışlı yapılar." },
    ],
    linksTitle: "Kartlı geçiş güvenini destekleyen ilgili sayfalar",
    links: [
      { href: "/istanbul/kadikoy/kartli-gecis-sistemi-kurulumu", label: "Kadıköy Kartlı Geçiş", description: "Apartman ve ofis tarafında lokal proof katar." },
      { href: "/istanbul/besiktas/kartli-gecis-sistemi-kurulumu", label: "Beşiktaş Kartlı Geçiş", description: "Kurumsal segmentte ilçe destek sinyali verir." },
      { href: "/sorun/kartli-gecis-calismiyor", label: "Kartlı Geçiş Çalışmıyor", description: "Arıza çözüm kabiliyetini açık gösterir." },
      { href: "/istanbul/guvenlik-sistemi-teknik-servis", label: "Güvenlik Sistemi Teknik Servis", description: "Kurulum vaadini servis gerçeği ile tamamlar." },
    ],
  },
  kamera_teknik_servis: {
    eyebrow: "İstanbul Trust Layer",
    title: "Teknik servis güveni, teşhis ve devam eden hizmet kabiliyeti ile oluşur",
    description:
      "Servis sayfasında kullanıcı yalnızca arıza çözümü değil, hangi tip sorunlarda ne kadar hızlı yönetim gördüğünü de anlamalıdır. Bu trust layer teşhis, bakım ve yenileme bağlantısını kurar.",
    stats: [
      { value: "Aynı Gün", label: "Servis Hızı", note: "Acil kamera ve kayıt sorunlarında hızlı ilk temas." },
      { value: "NVR/HDD", label: "Çekirdek Problem Alanı", note: "Kayıt, görüntü ve bağlantı problemleri aynı servis cluster'ında toplanır." },
      { value: "İstanbul", label: "Yerel Servis Odağı", note: "Teknik servis ve arıza sayfaları ile şehir içi güven sinyali." },
      { value: "Bakım", label: "Sonraki Adım", note: "Tekrarlayan arızalar bakım sözleşmesine taşınabilir." },
    ],
    proofTitle: "Teknik servis proof katmanları",
    proofCards: [
      { title: "Arıza ayrışma mantığı", description: "Kamera, NVR, HDD, kablo ve ağdan kaynaklanan sorunlar ayrı okunur." },
      { title: "Uzaktan ve sahada müdahale", description: "Hangi problemin uzaktan, hangisinin sahada çözüldüğü açık gösterilir." },
      { title: "Bakım ve yenileme çıkışı", description: "Servis sayfası kullanıcıyı bakım veya yeni kurulum ihtiyacına da taşıyabilir." },
    ],
    scenariosTitle: "İstanbul servis talebinde en sık profiller",
    scenarioCards: [
      { title: "Kayıt cihazı sorunu yaşayan işletmeler", description: "Kayıt yok, disk hatası veya NVR problemi ile gelen acil talepler." },
      { title: "Offline kamera yaşayan siteler", description: "Aynı anda birden fazla kamerada bağlantı kaybı görülen yapılar." },
      { title: "Eski sistemli mağazalar", description: "Tekrarlayan görüntü ve kablo sorunları nedeniyle servis ve yenileme ihtiyacı doğan yerler." },
    ],
    linksTitle: "Teknik servis güvenini destekleyen ilgili sayfalar",
    links: [
      { href: "/sorun/kamera-offline", label: "Kamera Offline", description: "Ağ ve bağlantı problemlerinde servise doğrudan talep getirir." },
      { href: "/sorun/kayit-yapilmiyor", label: "Kayıt Yapılmıyor", description: "NVR, HDD ve kayıt sürekliliği sorunlarını toplar." },
      { href: "/istanbul-kamera-bakim-servisi", label: "İstanbul Kamera Bakım Servisi", description: "Tekrarlayan arızayı sürekli bakım modeline bağlar." },
      { href: "/istanbul-kamera-sistemi-kurulumu", label: "İstanbul Kamera Sistemi Kurulumu", description: "Yetersiz eski sistemleri yeni kurulum kararına taşır." },
    ],
  },
  kamera_bakim: {
    eyebrow: "İstanbul Trust Layer",
    title: "Bakım sayfası, süreklilik ve kayıt sağlığı güveni üretmelidir",
    description:
      "Periyodik bakım sayfasının güven vermesi için sadece kontrol listesi değil; disk sağlığı, lens temizlik, yazılım güncelleme ve arıza azaltma mantığı gösterilmelidir.",
    stats: [
      { value: "Periyodik", label: "Kontrol Disiplini", note: "Yıllık, altı aylık veya daha sık bakım yapıları için planlanabilir." },
      { value: "Disk", label: "Kayıt Sağlığı", note: "HDD ve kayıt cihazının sürekliliği bakım vaadinin merkezindedir." },
      { value: "Lens", label: "Görüntü Kalitesi", note: "Kir, açı kayması ve görüntü düşüşü sahada düzeltilir." },
      { value: "Servis", label: "Sorun Önleme", note: "Bakım mantığı arıza oluşmadan önce devreye girer." },
    ],
    proofTitle: "Bakım katmanında güven gösteren noktalar",
    proofCards: [
      { title: "Periyodik saha kontrolü", description: "Kamera açısı, lens, kablo ve kayıt sağlığı aynı bakım ziyaretinde kontrol edilir." },
      { title: "Firmware ve cihaz sağlığı", description: "Eski yazılım, disk uyarı ve performans düşüşü bakım içinde yakalanır." },
      { title: "Arıza azaltan süreç", description: "Bakım sayfası teknik servis yoğunluğunu azaltan proaktif modeli anlatır." },
    ],
    scenariosTitle: "Bakım lead'lerinde öne çıkan profiller",
    scenarioCards: [
      { title: "Site ve apartman yönetimleri", description: "Toplu kamera altyapısında sürekli kayıt sağlığı isteyen yönetimler." },
      { title: "Mağaza zinciri benzeri yapılar", description: "Periyodik kontrol ile ani arıza riskini azaltmak isteyen işletmeler." },
      { title: "Depo ve sanayi noktaları", description: "Toz, yoğun çalışma ve gece görüşü etkilenebilen zor ortamlar." },
    ],
    linksTitle: "Bakım güvenini destekleyen ilgili sayfalar",
    links: [
      { href: "/kamera-sistemi-bakim-sozlesmesi", label: "Kamera Bakım Sözleşmesi", description: "Bakımı daha net sözleşmeli modele taşır." },
      { href: "/istanbul-kamera-teknik-servis", label: "İstanbul Kamera Teknik Servis", description: "Bakım sırasında tespit edilen arızalara çıkış verir." },
      { href: "/sorun/hdd-kayit-cihazi-sorunlari", label: "HDD ve Kayıt Cihazı Sorunları", description: "Disk sağlığı odağını daha somut problem niyetiyle destekler." },
      { href: "/uzaktan-kamera-izleme", label: "Uzaktan Kamera İzleme", description: "Bakım modelini merkezi takip ve süreklilik katmanına bağlar." },
    ],
  },
  ip_kamera: {
    eyebrow: "İstanbul Trust Layer",
    title: "IP kamera montajı güveni, görüntü kalitesi ve altyapı mantığı ile artar",
    description:
      "IP kamera sorgusunda kullanıcı yalnızca montaj değil; çözünürlük, kayıt süresi, PoE altyapı ve uzaktan izleme akışını aynı yerde görmek ister.",
    stats: [
      { value: "IP", label: "Dijital Altyapı", note: "Çözünürlük, PoE ve ağ topolojisi IP kurulumun temelidir." },
      { value: "Mobil", label: "Uzaktan Erişim", note: "Telefon ve merkezi izleme talebi satın alma kararında kritiktir." },
      { value: "İstanbul", label: "Yerel Keşif", note: "Lokal kurulum ve servis cluster'ı ile güven artar." },
      { value: "4 Katman", label: "Kurulum + Servis + Bakım + İzleme", note: "IP montaj sayfası tek başına bir ada değildir." },
    ],
    proofTitle: "IP montaj tarafında güven gösteren noktalar",
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
    linksTitle: "IP montaj güvenini destekleyen ilgili sayfalar",
    links: [
      { href: "/istanbul-kamera-sistemi-kurulumu", label: "İstanbul Kamera Sistemi Kurulumu", description: "IP montajı ana kurulum cluster'ına bağlar." },
      { href: "/uzaktan-kamera-izleme", label: "Uzaktan Kamera İzleme", description: "IP kurulumun en güçlü ticari beklentilerinden birini destekler." },
      { href: "/sorun/telefondan-izleme-sorunu", label: "Telefondan İzleme Sorunu", description: "Uzaktan erişim vaadini servis gerçeği ile tamamlar." },
      { href: "/istanbul-kamera-teknik-servis", label: "İstanbul Kamera Teknik Servis", description: "Montaj sonrası destek kapasitesini gösterir." },
    ],
  },
} as const;
