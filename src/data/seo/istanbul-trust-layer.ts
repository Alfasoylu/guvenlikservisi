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
    eyebrow: "Istanbul Trust Layer",
    title: "Kamera kurulumu icin guven sinyali yalnizca sozle verilmez",
    description:
      "Bu sayfa Istanbul'da kurulum, teknik servis ve bakim katmanlarini ayni sistemde gostermelidir. Guven ureten sey yalnizca metin degil; hizmet kapsami, uygulama disiplini ve lokal proof zinciridir.",
    stats: [
      { value: "500+", label: "Proje Deneyimi", note: "Site, magaza, ofis ve depo tiplerinde uygulama birikimi." },
      { value: "12 Yil", label: "Saha Tecrubesi", note: "Kurulum, ariza ve bakim akisini ayni ekip mantigi ile yonetme." },
      { value: "Ayni Gun", label: "Kesif Hizi", note: "Istanbul icindeki ticari taleplerde hizli ilk temas." },
      { value: "3 Katman", label: "Lead Modeli", note: "Kurulum, teknik servis ve bakim birlikte kurgulandi." },
    ],
    proofTitle: "Operasyonel proof noktalarimiz",
    proofCards: [
      { title: "Kesif ve kamera plani", description: "Koru nokta, kayit suresi ve mobil erisim ayni kesif akisi icinde planlanir." },
      { title: "NVR, disk ve altyapi uyumu", description: "Sadece kamera degil; kayit cihazi, switch ve depolama sagligi birlikte ele alinir." },
      { title: "Kurulum sonrasi servis cikisi", description: "Ayni cluster icinde teknik servis ve bakim sayfalari yer aldigi icin guven daha inandirici olur." },
    ],
    scenariosTitle: "Istanbul'da en sik talep profilleri",
    scenarioCards: [
      { title: "Kadikoy magaza ve kafe", description: "Giris, kasa ve depo gorunurlugu isteyen kucuk-orta olcekli ticari kurulumlar." },
      { title: "Besiktas ofis ve plaza", description: "Uzaktan izleme, ortak alanlar ve giris-cikis kaydi bekleyen kurumsal talepler." },
      { title: "Atasehir site ve rezidans", description: "Otopark, bina girisi ve ortak alan kapsamasina dayanan yogun konut senaryolari." },
    ],
    linksTitle: "Guveni derinlestiren ilgili Istanbul sayfalari",
    links: [
      { href: "/istanbul/kadikoy/kamera-sistemi-kurulumu", label: "Kadikoy Kamera Sistemi", description: "Ilce proof sinyali ile ana money page arasinda dogrudan bag kurar." },
      { href: "/istanbul/besiktas/kamera-sistemi-kurulumu", label: "Besiktas Kamera Sistemi", description: "Kurumsal ve prestijli ticari segmentte lokal kapsami gosterir." },
      { href: "/istanbul-kamera-teknik-servis", label: "Istanbul Kamera Teknik Servis", description: "Kurulum vaadini servis gercegi ile destekler." },
      { href: "/istanbul-kamera-bakim-servisi", label: "Istanbul Kamera Bakim Servisi", description: "Tek seferlik kurulum yerine sureklilik modelini guclendirir." },
    ],
  },
  alarm: {
    eyebrow: "Istanbul Trust Layer",
    title: "Alarm sayfasi guveni, kurulum sonrasi surecleri de gostermelidir",
    description:
      "Istanbul alarm intent'inde kullanici sadece urun degil, sensor yerlesimi, panel yonetimi ve tekrar eden servis ihtiyacinin nasil ele alinacagini gormek ister.",
    stats: [
      { value: "7/24", label: "Koruma Mantigi", note: "Ev, isyeri ve magaza senaryolarinda surekli koruma odagi." },
      { value: "Ayni Gun", label: "Kesif ve Kurulum", note: "Standart alarm taleplerinde hizli devreye alma hedefi." },
      { value: "Istanbul", label: "Lokal Kapsam", note: "Ilce bazli support pages ile desteklenen sehir odagi." },
      { value: "3 Yapi", label: "Konut, Isyeri, Magaza", note: "En sik alici gruplari acik sekilde ayrildi." },
    ],
    proofTitle: "Alarm tarafinda guven ureten noktalar",
    proofCards: [
      { title: "Sensor senaryosu", description: "Kapi, pencere, hareket ve bildirim kurgusu mekana gore sekillendirilir." },
      { title: "Panel ve bildirim akisi", description: "Elektrik kesintisi, mobil bildirim ve kullanici yonetimi karar aninda netlestirilir." },
      { title: "Ariza ve bakim devami", description: "Alarm arizasi ve teknik servis sayfalari ile desteklenen daha saglikli bir trust zinciri vardir." },
    ],
    scenariosTitle: "Istanbul alarm talebinde baskin profiller",
    scenarioCards: [
      { title: "Kadikoy butik isletmeler", description: "Mesai sonrasi alarm kurgu ve mobil bildirim isteyen kucuk ticari alanlar." },
      { title: "Besiktas luks konutlar", description: "Cok bolgeli alarm, dis cevre sensoru ve daha yuksek hassasiyet talebi." },
      { title: "Atasehir yeni ofisler", description: "Hizli devreye alinan, uzaktan yonetilen ve ekip degisimi kaldiran sistem beklentisi." },
    ],
    linksTitle: "Alarm guvenini besleyen ilgili sayfalar",
    links: [
      { href: "/istanbul/kadikoy/alarm-sistemi-kurulumu", label: "Kadikoy Alarm Sistemi", description: "Ilce bazli ticari ve konut demand sinyali uretir." },
      { href: "/istanbul/besiktas/alarm-sistemi-kurulumu", label: "Besiktas Alarm Sistemi", description: "Prestijli konut ve isletme segmentinde lokal guven ekler." },
      { href: "/sorun/alarm-arizalari", label: "Alarm Arizalari", description: "Kurulum vaadini sorun cozum kapasitesi ile destekler." },
      { href: "/guvenlik-sistemi-teknik-servis", label: "Guvenlik Sistemi Teknik Servis", description: "Ariza halinde mevcut sistem kullanicisini kaybetmez." },
    ],
  },
  yangin: {
    eyebrow: "Istanbul Trust Layer",
    title: "Yangin alarm tarafinda guven, uyumluluk ve operasyon disiplini ile kurulur",
    description:
      "Yangin alarm sorgularinda kullanici yalnizca cihaz degil; bina tipi, zonlama, panel secimi ve surekli bakim mantigini gormek ister.",
    stats: [
      { value: "Uyum", label: "Yonetmelik Odagi", note: "Adresli veya konvansiyonel secim bina tipine gore netlestirilir." },
      { value: "Coklu Yapi", label: "Otel, Isyeri, Fabrika", note: "Yangin algilama ihtiyaci farkli tesis tiplerine gore ayrilir." },
      { value: "Kesif", label: "Loop ve Zonlama", note: "Sadece cihaz listesi degil, sistem mantigi planlanir." },
      { value: "Bakim", label: "Surekli Calisirlilik", note: "Kurulum sonrasi test ve periyodik kontrol mantigi vurgulanir." },
    ],
    proofTitle: "Yangin sisteminde guven ureten katmanlar",
    proofCards: [
      { title: "Bina tipine gore panel secimi", description: "Adresli ve konvansiyonel panel secimi kapasite ve uyum ihtiyacina gore belirlenir." },
      { title: "Dedektor ve hat planlamasi", description: "Kat sayisi, kablolama ve loop mantigi proje icinde netlestirilir." },
      { title: "Kurulum sonrasi test akisi", description: "Bakim ve teknik servis sayfalarina baglanan bir operasyon zinciri olusturur." },
    ],
    scenariosTitle: "Istanbul yangin talebinde one cikan profiller",
    scenarioCards: [
      { title: "Otel ve konaklama yapilari", description: "Coklu kat, acil durum bilgilendirmesi ve panel denetimi gerektiren yapilar." },
      { title: "Fabrika ve depo", description: "Geniş alan, zorlu ortam ve surekli algilama gerektiren operasyonel tesisler." },
      { title: "Is merkezi ve plaza", description: "Yonetmelik ve bina yonetimi beklentisiyle karar veren kurumsal yapilar." },
    ],
    linksTitle: "Yangin guvenini destekleyen ilgili sayfalar",
    links: [
      { href: "/yangin-alarm-sistemi-kurulumu", label: "Yangin Alarm Sistemi Kurulumu", description: "Genel kurulum sayfasi ile Istanbul money page arasinda konu otoritesi kurar." },
      { href: "/bakim-servis-uzaktan-izleme", label: "Bakim, Servis ve Uzaktan Izleme", description: "Surekli calisirlilik beklentisini destekler." },
      { href: "/guvenlik-sistemi-teknik-servis", label: "Guvenlik Sistemi Teknik Servis", description: "Panel veya dedektor sorunlarinda servis cikisi sunar." },
      { href: "/istanbul-kartli-gecis-sistemi", label: "Istanbul Kartli Gecis Sistemi", description: "Kurumsal bina guvenligini daha genis sistem mantigina baglar." },
    ],
  },
  kartli_gecis: {
    eyebrow: "Istanbul Trust Layer",
    title: "Kartli gecis sayfasi, operasyon ve yetkilendirme guveni uretmelidir",
    description:
      "Kullanici turnike, manyetik kilit ve okuyucu kurulumundan fazlasini arar. Personel akisi, ziyaretci yonetimi ve ariza aninda sureklilik trust katmaninin bir parcasidir.",
    stats: [
      { value: "Ofis", label: "Kurumsal Yapi Odagi", note: "Plaza, ofis ve cok kullanicili yapilar icin erisim kontrolu." },
      { value: "Site", label: "Konut Girisleri", note: "Sakin, ziyaretci ve ortak alan akislarinda kullanilan senaryolar." },
      { value: "Log", label: "Gecis Kaydi", note: "Yetki, zaman kuralı ve gecis takibi karar vericiler icin onemlidir." },
      { value: "Servis", label: "Ariza Cikisi", note: "Kurulum sonrasi okuyucu ve kilit sorunlarina servis baglantisi vardir." },
    ],
    proofTitle: "Kartli geciste guven gosteren noktalar",
    proofCards: [
      { title: "Okuyucu ve kilit secimi", description: "Manyetik kilit, elektrikli kilit ve okuyucu tipi yapiya gore secilir." },
      { title: "Ziyaretci ve personel akis mantigi", description: "Sadece kapı acma degil, yetki ve log yapisi da planlanir." },
      { title: "Ariza ve devam eden destek", description: "Kartli gecis calismiyor gibi problem sayfalari ile servis guvencesi desteklenir." },
    ],
    scenariosTitle: "Istanbul kartli gecis talebinde one cikan profiller",
    scenarioCards: [
      { title: "Besiktas plaza ve ofisler", description: "Personel ve ziyaretci akislarini ayri yonetmek isteyen kurumsal yapilar." },
      { title: "Kadikoy apartman ve site", description: "Bina girisi ve ortak alanlarda daha kontrollu erisim isteyen konut yapilari." },
      { title: "Atasehir rezidans ve finans alani", description: "Kat bazli yetki ve raporlama isteyen yogun giris cikisli yapilar." },
    ],
    linksTitle: "Kartli gecis guvenini destekleyen ilgili sayfalar",
    links: [
      { href: "/istanbul/kadikoy/kartli-gecis-sistemi-kurulumu", label: "Kadikoy Kartli Gecis", description: "Apartman ve ofis tarafinda lokal proof katar." },
      { href: "/istanbul/besiktas/kartli-gecis-sistemi-kurulumu", label: "Besiktas Kartli Gecis", description: "Kurumsal segmentte ilce destek sinyali verir." },
      { href: "/sorun/kartli-gecis-calismiyor", label: "Kartli Gecis Calismiyor", description: "Ariza cozum kabiliyetini acik gosterir." },
      { href: "/guvenlik-sistemi-teknik-servis", label: "Guvenlik Sistemi Teknik Servis", description: "Kurulum vaadini servis gercegi ile tamamlar." },
    ],
  },
  kamera_teknik_servis: {
    eyebrow: "Istanbul Trust Layer",
    title: "Teknik servis guveni, teshis ve devam eden hizmet kabiliyeti ile olusur",
    description:
      "Servis sayfasinda kullanici yalnizca ariza cozumu degil, hangi tip sorunlarda ne kadar hizli yonetim gordugunu de anlamalidir. Bu trust layer teshis, bakim ve yenileme baglantisini kurar.",
    stats: [
      { value: "Ayni Gun", label: "Servis Hizi", note: "Acil kamera ve kayit sorunlarinda hizli ilk temas." },
      { value: "NVR/HDD", label: "Cekirdek Problem Alani", note: "Kayit, goruntu ve baglanti problemleri ayni servis cluster'inda toplanir." },
      { value: "Istanbul", label: "Yerel Servis Odagi", note: "Teknik servis va ariza sayfalari ile sehir ici guven sinyali." },
      { value: "Bakim", label: "Sonraki Adim", note: "Tekrarlayan arizalar bakim sozlesmesine tasinabilir." },
    ],
    proofTitle: "Teknik servis proof katmanlari",
    proofCards: [
      { title: "Ariza ayrisma mantigi", description: "Kamera, NVR, HDD, kablo ve agridan kaynaklanan sorunlar ayri okunur." },
      { title: "Uzaktan ve sahada mudahale", description: "Hangi problemin uzaktan, hangisinin sahada cozuldugu acik gosterilir." },
      { title: "Bakim ve yenileme cikisi", description: "Servis sayfasi kullaniciyi bakim veya yeni kurulum ihtiyacina da tasiyabilir." },
    ],
    scenariosTitle: "Istanbul servis talebinde en sik profiller",
    scenarioCards: [
      { title: "Kayit cihazı sorunu yasayan isletmeler", description: "Kayit yok, disk hatasi veya NVR problemi ile gelen acil talepler." },
      { title: "Offline kamera yasayan siteler", description: "Ayni anda birden fazla kamerada baglanti kaybi gorulen yapilar." },
      { title: "Eski sistemli magazalar", description: "Tekrarlayan goruntu ve kablo sorunlari nedeniyle servis ve yenileme ihtiyaci dogan yerler." },
    ],
    linksTitle: "Teknik servis guvenini destekleyen ilgili sayfalar",
    links: [
      { href: "/sorun/kamera-offline", label: "Kamera Offline", description: "Ag ve baglanti problemlerinde servise dogrudan talep getirir." },
      { href: "/sorun/kayit-yapilmiyor", label: "Kayit Yapilmiyor", description: "NVR, HDD ve kayit surekliligi sorunlarini toplar." },
      { href: "/istanbul-kamera-bakim-servisi", label: "Istanbul Kamera Bakim Servisi", description: "Tekrarlayan arizayi surekli bakim modeline baglar." },
      { href: "/istanbul-kamera-sistemi-kurulumu", label: "Istanbul Kamera Sistemi Kurulumu", description: "Yetersiz eski sistemleri yeni kurulum kararina tasir." },
    ],
  },
  kamera_bakim: {
    eyebrow: "Istanbul Trust Layer",
    title: "Bakim sayfasi, sureklilik ve kayit sagligi guveni uretmelidir",
    description:
      "Periyodik bakim sayfasinin guven vermesi icin sadece kontrol listesi degil; disk sagligi, lens temizlik, yazilim guncelleme ve ariza azaltma mantigi gosterilmelidir.",
    stats: [
      { value: "Periyodik", label: "Kontrol Disiplini", note: "Yillik, alti aylik veya daha sik bakim yapilari icin planlanabilir." },
      { value: "Disk", label: "Kayit Sagligi", note: "HDD ve kayit cihazinin surekliligi bakim vaadinin merkezindedir." },
      { value: "Lens", label: "Goruntu Kalitesi", note: "Kir, aci kaymasi ve goruntu dususu sahada duzeltilir." },
      { value: "Servis", label: "Sorun Onleme", note: "Bakim mantigi ariza olusmadan once devreye girer." },
    ],
    proofTitle: "Bakim katmaninda guven gosteren noktalar",
    proofCards: [
      { title: "Periyodik saha kontrolu", description: "Kamera acisi, lens, kablo ve kayit sagligi ayni bakim ziyaretinde kontrol edilir." },
      { title: "Firmware ve cihaz sagligi", description: "Eski yazilim, disk uyari ve performans dususu bakim icinde yakalanir." },
      { title: "Ariza azaltan surec", description: "Bakim sayfasi teknik servis yogunlugunu azaltan proaktif modeli anlatir." },
    ],
    scenariosTitle: "Bakim lead'lerinde one cikan profiller",
    scenarioCards: [
      { title: "Site ve apartman yonetimleri", description: "Toplu kamera altyapisinda surekli kayit sagligi isteyen yonetimler." },
      { title: "Magaza zinciri benzeri yapilar", description: "Periyodik kontrol ile ani ariza riskini azaltmak isteyen isletmeler." },
      { title: "Depo ve sanayi noktaları", description: "Toz, yogun calisma ve gece gorusu etkilenebilen zor ortamlar." },
    ],
    linksTitle: "Bakim guvenini destekleyen ilgili sayfalar",
    links: [
      { href: "/kamera-sistemi-bakim-sozlesmesi", label: "Kamera Bakim Sozlesmesi", description: "Bakimi daha net sozlesmeli modele tasir." },
      { href: "/istanbul-kamera-teknik-servis", label: "Istanbul Kamera Teknik Servis", description: "Bakim sirasinda tespit edilen arizalara cikis verir." },
      { href: "/sorun/hdd-kayit-cihazi-sorunlari", label: "HDD ve Kayit Cihazi Sorunlari", description: "Disk sagligi odagini daha somut problem niyetiyle destekler." },
      { href: "/uzaktan-kamera-izleme", label: "Uzaktan Kamera Izleme", description: "Bakim modelini merkezi takip ve sureklilik katmanina baglar." },
    ],
  },
  ip_kamera: {
    eyebrow: "Istanbul Trust Layer",
    title: "IP kamera montaji guveni, goruntu kalitesi ve altyapi mantigi ile artar",
    description:
      "IP kamera sorgusunda kullanici yalnizca montaj degil; cozunurluk, kayit suresi, PoE altyapi ve uzaktan izleme akisini ayni yerde gormek ister.",
    stats: [
      { value: "IP", label: "Dijital Altyapi", note: "Cozunurluk, PoE ve ag topolojisi IP kurulumun temelidir." },
      { value: "Mobil", label: "Uzaktan Erisim", note: "Telefon ve merkezi izleme talebi satin alma kararinda kritiktir." },
      { value: "Istanbul", label: "Yerel Kesif", note: "Lokal kurulum ve servis cluster'i ile guven artar." },
      { value: "4 Katman", label: "Kurulum + Servis + Bakim + Izleme", note: "IP montaj sayfasi tek basina bir ada degildir." },
    ],
    proofTitle: "IP montaj tarafinda guven gosteren noktalar",
    proofCards: [
      { title: "PoE ve NVR plani", description: "IP kamerada switch, kablo ve kayit cihazinin birlikte planlanmasi gerekir." },
      { title: "Cozunurluk ve depolama dengesi", description: "Goruntu kalitesi ile kayit suresi arasindaki denge teknik olarak kurulmalidir." },
      { title: "Uzaktan izleme kurulumu", description: "Mobil baglanti ve kullanici erisimi kurulumun ayrilmaz parcasi olarak ele alinir." },
    ],
    scenariosTitle: "IP kamera talebinde en sik Istanbul profilleri",
    scenarioCards: [
      { title: "Kucuk ve orta isletmeler", description: "Daha net goruntu ve telefondan izleme isteyen ticari noktalar." },
      { title: "Site ve apartmanlar", description: "Analogtan IP'ye gecis dusunen ve kayit kalitesini yukselten yapilar." },
      { title: "Depo ve operasyon alanlari", description: "Uzak erisim ve daha uzun kayit suresi isteyen saha odakli alanlar." },
    ],
    linksTitle: "IP montaj guvenini destekleyen ilgili sayfalar",
    links: [
      { href: "/istanbul-kamera-sistemi-kurulumu", label: "Istanbul Kamera Sistemi Kurulumu", description: "IP montaji ana kurulum cluster'ina baglar." },
      { href: "/uzaktan-kamera-izleme", label: "Uzaktan Kamera Izleme", description: "IP kurulumun en guclu ticari beklentilerinden birini destekler." },
      { href: "/sorun/telefondan-izleme-sorunu", label: "Telefondan Izleme Sorunu", description: "Uzaktan erisim vaadini servis gercegi ile tamamlar." },
      { href: "/istanbul-kamera-teknik-servis", label: "Istanbul Kamera Teknik Servis", description: "Montaj sonrasi destek kapasitesini gosterir." },
    ],
  },
} as const;
