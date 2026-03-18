export interface SeoFaqItem {
  question: string;
  answer: string;
}

export interface SeoFaqContent {
  title: string;
  items: SeoFaqItem[];
}

export const faqContent: Record<string, SeoFaqContent> = {
  "kamera-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} kamera sistemi kurulumu ne kadar sürer?",
        answer:
          "Küçük projelerde aynı gün, orta ve büyük projelerde ise keşif sonrasında 1-3 gün içinde tamamlanır.",
      },
      {
        question: "Kaç kamera gerektiğini nasıl belirliyorsunuz?",
        answer:
          "Alan büyüklüğü, giriş-çıkış noktaları, kör alanlar ve kayıt beklentisine göre keşif sırasında net plan çıkarıyoruz.",
      },
      {
        question: "Uzaktan telefondan izleme kuruluyor mu?",
        answer:
          "Evet. Mobil uygulama ile canlı izleme ve kayıt erişimini kurulum sırasında aktif hale getiriyoruz.",
      },
      {
        question: "Kayıt cihazı ve hard disk dahil mi?",
        answer:
          "Evet. İhtiyaca göre NVR, hard disk ve gerekiyorsa PoE switch dahil tam çözüm hazırlıyoruz.",
      },
    ],
  },
  "alarm-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde alarm sistemi için ücretsiz keşif yapıyor musunuz?",
        answer:
          "Evet. Mekanın giriş noktalarını ve risk alanlarını inceleyip uygun alarm senaryosunu keşif aşamasında çıkarıyoruz.",
      },
      {
        question: "Kablosuz alarm mı kablolu alarm mı öneriyorsunuz?",
        answer:
          "Mevcut altyapı, duvar yapısı ve kullanım beklentisine göre karar veriyoruz. Her iki çözüm için de kurulum yapıyoruz.",
      },
      {
        question: "Mobil bildirim ve uzaktan kontrol oluyor mu?",
        answer:
          "Evet. Uyumlu panel ve uygulama altyapısıyla bildirim, kurma ve devre dışı bırakma işlemleri telefondan yönetilebilir.",
      },
    ],
  },
  "yangin-alarm-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde yangın alarm sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde bina tipine uygun yangın alarm sistemi kurulumu, devreye alma ve bakım desteği sunuyoruz.",
      },
      {
        question: "Dedektör yerleşimini nasıl belirliyorsunuz?",
        answer:
          "Alan kullanımı, tavan yapısı, kaçış güzergahları ve riskli hacimlere göre saha analizi yaparak yerleşimi planlıyoruz.",
      },
      {
        question: "Kurulum sonrası test yapılıyor mu?",
        answer:
          "Evet. Dedektör, buton, siren ve santral senaryolarını tek tek test edip sistemi çalışır durumda teslim ediyoruz.",
      },
    ],
  },
  "kartli-gecis-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde kartlı geçiş sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde ofis, apartman, işyeri ve kontrollü giriş gereken alanlar için kartlı geçiş sistemleri kuruyoruz.",
      },
      {
        question: "Mevcut kapıya kartlı geçiş sistemi uygulanabilir mi?",
        answer:
          "Çoğu senaryoda evet. Kapı tipi, kilit uyumu ve kullanım yoğunluğunu inceleyip uygun donanımı belirliyoruz.",
      },
      {
        question: "Kullanıcı yetkileri sonradan değiştirilebilir mi?",
        answer:
          "Evet. Sistem kurulumundan sonra kart iptali, yeni kullanıcı ekleme ve yetki güncellemeleri yapılabilir.",
      },
    ],
  },
  "apartman-site-guvenlik-sistemi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde apartman ve site güvenlik sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde apartman ve site projeleri için kamera, geçiş kontrol ve çevre güvenliği çözümleri sunuyoruz.",
      },
      {
        question: "Otopark ve bina girişi aynı sistemde toplanabilir mi?",
        answer:
          "Evet. Uygun projelerde girişler, otoparklar ve ortak alanlar tek kayıt ve izleme yapısında birleştirilebilir.",
      },
      {
        question: "Yönetim için kullanıcı dostu çözüm sunuyor musunuz?",
        answer:
          "Evet. Site yönetimi veya apartman yetkilisi için erişim, izleme ve temel yönetim süreçlerini sade şekilde teslim ediyoruz.",
      },
    ],
  },
  "isyeri-guvenlik-sistemi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde işyeri güvenlik sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde ofis, mağaza ve ticari işletmeler için kamera, alarm ve geçiş kontrol çözümleri kuruyoruz.",
      },
      {
        question: "Kurulum iş saatlerini etkiler mi?",
        answer:
          "Projeye göre planlama yapıyoruz. Uygun senaryolarda montajı etaplayarak iş akışına etkisini minimumda tutuyoruz.",
      },
      {
        question: "Birden fazla güvenlik çözümü birlikte kurulabilir mi?",
        answer:
          "Evet. Kamera, alarm ve giriş kontrol sistemlerini aynı işyeri projesinde birlikte kurgulayabiliyoruz.",
      },
    ],
  },
  "fabrika-depo-guvenlik-sistemi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde fabrika ve depo güvenlik sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde fabrika, depo ve sanayi tesisleri için kamera, çevre güvenliği ve geçiş kontrol çözümleri kuruyoruz.",
      },
      {
        question: "Geniş açık alanlarda güvenlik nasıl planlanıyor?",
        answer:
          "Çevre hatları, giriş kapıları ve gece görüş ihtiyacına göre kamera yerleşimini ve kayıt altyapısını sahaya özel planlıyoruz.",
      },
      {
        question: "Depo ve üretim alanı aynı projede ele alınabilir mi?",
        answer:
          "Evet. Üretim hattı, raf koridorları ve lojistik alanlar tek proje içinde birlikte tasarlanabilir.",
      },
    ],
  },
  "bakim-servis-uzaktan-izleme": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde bakım ve servis hizmeti veriyor musunuz?",
        answer:
          "Evet. {city} içinde mevcut güvenlik sistemleri için bakım, arıza giderme ve uzaktan izleme desteği sağlıyoruz.",
      },
      {
        question: "Kurulu sistem başka bir firmadan olsa da destek olur musunuz?",
        answer:
          "Birçok senaryoda evet. Mevcut altyapıyı inceleyip destek kapsamını keşif veya ön değerlendirme sonrasında netleştiriyoruz.",
      },
      {
        question: "Uzaktan izleme bağlantı sorunları çözülebilir mi?",
        answer:
          "Evet. Uygun sistemlerde modem, uygulama ve cihaz ayarlarını kontrol ederek uzaktan erişim sorunlarını gideriyoruz.",
      },
    ],
  },
  "kamera-sistemi-bakim-sozlesmesi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde kamera sistemi bakım sözleşmesi yapıyor musunuz?",
        answer:
          "Evet. {city} içinde kurulu kamera sistemleri için periyodik bakım sözleşmesi, kayıt kontrolü ve arıza önleyici bakım desteği sunuyoruz.",
      },
      {
        question: "Bakım sözleşmesinde hangi kontroller yer alır?",
        answer:
          "Kamera açıları, görüntü kalitesi, kayıt cihazı, disk sağlığı, bağlantılar ve uzaktan erişim ayarları bakım kapsamına göre düzenli olarak kontrol edilir.",
      },
      {
        question: "Başka firmadan alınmış sistemler için de bakım yapılır mı?",
        answer:
          "Birçok durumda evet. Mevcut altyapıyı inceleyip bakım sözleşmesi kapsamına alınabilecek noktaları ön değerlendirme sonrası netleştiriyoruz.",
      },
    ],
  },
  "guvenlik-sistemi-teknik-servis": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde güvenlik sistemi teknik servis hizmeti veriyor musunuz?",
        answer:
          "Evet. {city} içinde kamera, alarm ve geçiş kontrol sistemleri için teknik servis ve saha müdahale desteği sağlıyoruz.",
      },
      {
        question: "Teknik servis hangi arızalara bakar?",
        answer:
          "Görüntü kaybı, kayıt cihazı problemi, bağlantı hatası, alarm panel arızası ve geçiş kontrol sorunları gibi birçok teknik başlıkta destek veriyoruz.",
      },
      {
        question: "Önce arıza tespiti mi yapıyorsunuz?",
        answer:
          "Evet. Gereksiz parça değişimini önlemek için önce arızanın kaynağını tespit ediyor, sonra uygun müdahale planını uyguluyoruz.",
      },
    ],
  },
  "kamera-ariza-servisi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde kamera arıza servisi veriyor musunuz?",
        answer:
          "Evet. {city} içinde görüntü gelmeyen, kayıt yapmayan veya uzaktan erişim sorunu yaşayan kamera sistemleri için arıza servis desteği veriyoruz.",
      },
      {
        question: "Kamera arızasında hangi parçaları kontrol ediyorsunuz?",
        answer:
          "Kamera, kayıt cihazı, hard disk, bağlantı hatları, switch ve ağ ayarlarını arıza semptomuna göre kontrol ediyoruz.",
      },
      {
        question: "Kayıt cihazı kaynaklı sorunları da çözüyor musunuz?",
        answer:
          "Evet. NVR/DVR cihazı, disk sağlığı ve kayıt ayarları kaynaklı sorunları test edip gerekli müdahaleyi yapıyoruz.",
      },
    ],
  },
  "yangin-alarm-bakim-sozlesmesi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde yangın alarm bakım sözleşmesi yapıyor musunuz?",
        answer:
          "Evet. {city} içinde kurulu yangın alarm sistemleri için periyodik bakım sözleşmesi ve saha test desteği sunuyoruz.",
      },
      {
        question: "Bakım sözleşmesinde hangi cihazlar kontrol edilir?",
        answer:
          "Panel, dedektör, buton, siren ve bağlantı noktaları bakım planına göre test edilir ve çalışmayan bileşenler raporlanır.",
      },
      {
        question: "Bakım kayıtları tutuluyor mu?",
        answer:
          "Evet. Uygulanan kontrol adımları ve tespit edilen teknik durum bakım sürecinde kayıt altına alınabilir.",
      },
    ],
  },
  "guvenlik-sistemi-bakim-sozlesmesi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde güvenlik sistemi bakım sözleşmesi yapıyor musunuz?",
        answer:
          "Evet. {city} içinde kamera, alarm ve geçiş kontrol altyapıları için sözleşmeli periyodik bakım ve teknik kontrol hizmeti sunuyoruz.",
      },
      {
        question: "Bakım sözleşmesinde hangi başlıklar kontrol edilir?",
        answer:
          "Kayıt cihazı, disk sağlığı, kamera açıları, alarm paneli, haberleşme, uzaktan erişim ve temel saha ekipmanları bakım kapsamına göre kontrol edilir.",
      },
      {
        question: "Sözleşmeli bakım arıza riskini azaltır mı?",
        answer:
          "Evet. Periyodik kontrol ile kayıt kaybı, offline cihaz, panel hatası ve tekrar eden servis ihtiyacı erken görülerek plansız duruş riski azaltılır.",
      },
    ],
  },
  "site-kamera-sistemi-bakim": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde site kamera sistemi bakımı yapıyor musunuz?",
        answer:
          "Evet. {city} içinde ortak alan, otopark, giriş ve çevre hattı kamera altyapıları için planlı site kamera bakım hizmeti veriyoruz.",
      },
      {
        question: "Site bakımında en çok hangi sorunlara odaklanıyorsunuz?",
        answer:
          "Kör nokta oluşması, kayıt süresi kaybı, disk sağlığı, uzaktan izleme erişimi ve ortak alan kameralarının görüntü kalitesi düşüşü öncelikli kontrol başlıklarıdır.",
      },
      {
        question: "Site yönetimine uygun raporlu bakım planı oluşturabilir misiniz?",
        answer:
          "Evet. Kontrol periyodu, servis kapsamı ve raporlama başlıkları yönetim sürecine uygun şekilde netleştirilebilir.",
      },
    ],
  },
  "fabrika-guvenlik-sistemi-bakim": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde fabrika güvenlik sistemi bakımı yapıyor musunuz?",
        answer:
          "Evet. {city} içinde fabrika ve üretim tesisleri için kamera, kayıt ve saha ekipmanlarını kapsayan periyodik bakım hizmeti sunuyoruz.",
      },
      {
        question: "Fabrika bakımında neden kayıt sürekliliği vurgulanıyor?",
        answer:
          "Vardiyalı çalışan tesislerde kayıt kaybı ve çevre hattı zafiyeti operasyonel riski büyüttüğü için disk, NVR ve saha kamera sağlığı düzenli kontrol edilmelidir.",
      },
      {
        question: "Bakım planı üretim alanı ve çevre hattını birlikte kapsar mı?",
        answer:
          "Evet. Giriş noktaları, sevkiyat alanları, çevre çit hattı ve kritik iç alan kameralarının aynı bakım planı içinde değerlendirilmesi mümkündür.",
      },
    ],
  },
  "nvr-bakim-servisi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde NVR bakım servisi veriyor musunuz?",
        answer:
          "Evet. {city} içinde NVR cihazı, disk sağlığı, kayıt ayarları, uzaktan erişim ve ağ bağlantıları için bakım ve teknik servis desteği sunuyoruz.",
      },
      {
        question: "NVR bakımında hangi sorunlar en sık çözülüyor?",
        answer:
          "Disk uyarıları, kayıt kaybı, cihazın kameraları görmemesi, uzaktan izleme erişim sorunları ve ağ tarafındaki kopmalar en sık karşılaştığımız başlıklardır.",
      },
      {
        question: "Sadece disk değişimi sorunu her zaman çözer mi?",
        answer:
          "Her zaman değil. NVR yapılandırması, kamera akışları, ağ kararlılığı ve uzaktan erişim ayarları birlikte test edilmeden kalıcı sonuç almak zordur.",
      },
    ],
  },
  "depo-guvenlik-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde depo güvenlik sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde yükleme alanı, raf koridoru, giriş ve çevre hattı görünürlüğü gereken depo projeleri için güvenlik sistemi kurulumu yapıyoruz.",
      },
      {
        question: "Depo projelerinde hangi alanlar öncelikli planlanır?",
        answer:
          "Yükleme-boşaltma noktaları, sevkiyat hattı, raf koridorları, gece girişleri ve çevre sınırları depo projelerinde ilk öncelikli alanlardır.",
      },
      {
        question: "Uzun kayıt süresi gerektiren depolar için ayrı plan yapıyor musunuz?",
        answer:
          "Evet. Kamera sayısı, NVR kapasitesi, disk yapısı ve uzaktan izleme ihtiyacına göre kayıt süresini depo operasyonuna uygun planlıyoruz.",
      },
    ],
  },
  "plaza-guvenlik-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde plaza güvenlik sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde lobi, ofis katı, ziyaretçi akışı ve kontrollü giriş ihtiyacı olan plaza projeleri için güvenlik sistemi kurulumu sunuyoruz.",
      },
      {
        question: "Plaza projelerinde sadece kamera mı kuruyorsunuz?",
        answer:
          "Hayır. Projeye göre kamera, alarm, kartlı geçiş ve servis sürekliliği ihtiyaçlarını birlikte ele alıyoruz.",
      },
      {
        question: "Kurumsal yapılarda raporlama ve bakım neden satın alma kararını etkiler?",
        answer:
          "Kesintisiz çalışma beklentisi olan plazalarda sistem kurulumu kadar periyodik kontrol, servis notları ve müdahale disiplini de karar sürecinde belirleyicidir.",
      },
    ],
  },
  "avm-guvenlik-sistemi-cozumleri": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde AVM güvenlik sistemi çözümleri sunuyor musunuz?",
        answer:
          "Evet. {city} içinde AVM ve büyük ticari merkez projelerinde kamera, yangın alarm, erişim ve servis sürekliliğini birlikte planlayan çözümler sunuyoruz.",
      },
      {
        question: "AVM projelerinde neden çok bileşenli kurgu gerekiyor?",
        answer:
          "Yoğun ziyaretçi akışı, yangın güvenliği, teslimat alanları ve çoklu girişler aynı anda yönetildiği için tek bir cihaz kurulumundan daha geniş bir mimari gerekir.",
      },
      {
        question: "Periyodik test ve bakım hizmeti ilk kurulumla birlikte planlanabilir mi?",
        answer:
          "Evet. AVM projelerinde servis sürekliliği ve düzenli test akışı en az ilk kurulum kadar kritik olduğu için bakım planı birlikte ele alınabilir.",
      },
    ],
  },
  "alarm-sistemi-bakim": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde alarm sistemi bakımı yapıyor musunuz?",
        answer:
          "Evet. {city} içinde panel, sensör, siren, haberleşme ve batarya tarafını kapsayan alarm sistemi bakım hizmeti veriyoruz.",
      },
      {
        question: "Alarm bakımında hangi başlıklar kontrol edilir?",
        answer:
          "Panel durumu, dedektör tepkileri, manyetik kontaklar, siren çalışması, GSM veya internet haberleşmesi ve batarya sağlığı bakım kapsamına göre kontrol edilir.",
      },
      {
        question: "Düzenli alarm bakımı neden ihmal edilmemelidir?",
        answer:
          "Çalışıyor gibi görünen ama test edilmemiş alarm altyapısı acil durumda beklendiği gibi çalışmayabilir. Bu nedenle periyodik test ve kontrol önemlidir.",
      },
    ],
  },
  "uzaktan-kamera-izleme": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde uzaktan kamera izleme hizmeti sunuyor musunuz?",
        answer:
          "Evet. {city} içinde mevcut veya yeni kurulan kamera sistemleri için uzaktan izleme, mobil erişim ve merkezi görüntüleme altyapısı kuruyoruz.",
      },
      {
        question: "Telefondan ve bilgisayardan aynı anda izleme yapılabilir mi?",
        answer:
          "Uygun cihaz ve ağ altyapısında evet. Kullanıcı ihtiyaçlarına göre mobil ve masaüstü erişimleri birlikte yapılandırıyoruz.",
      },
      {
        question: "Birden fazla şube tek ekranda izlenebilir mi?",
        answer:
          "Evet. Uygun altyapıda birden fazla lokasyonun kamera akışları tek izleme kurgusunda toplanabilir.",
      },
    ],
  },
};
