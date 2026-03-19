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
          "Küçük projelerde (2-4 kamera) kurulum genellikle aynı gün tamamlanır. Orta ölçekli projelerde (4-8 kamera) 1-2 gün, büyük projelerde (8+ kamera) ise 2-3 gün sürebilir. Keşif sonrasında kamera montajı, kablolama, NVR kurulumu, kayıt ayarları ve uzaktan izleme yapılandırması dahil tüm işlemler ekibimiz tarafından tek seferde bitirilir.",
      },
      {
        question: "Kaç kamera gerektiğini nasıl belirliyorsunuz?",
        answer:
          "Ücretsiz keşifte alanınızı yerinde inceliyoruz. Giriş-çıkış noktaları, kör bölgeler, aydınlatma koşulları ve gece görüş ihtiyacını değerlendiriyoruz. Kayıt süresi beklentinize ve bütçenize göre kamera çözünürlüğü, lens tipi ve NVR kapasitesini belirleyerek yazılı bir kurulum planı sunuyoruz.",
      },
      {
        question: "Uzaktan telefondan izleme kuruluyor mu?",
        answer:
          "Evet. iOS ve Android uyumlu mobil uygulama üzerinden canlı izleme, geçmiş kayıt erişimi ve anlık bildirim alabilirsiniz. Kurulum sırasında telefon ve tablet ayarlarını biz yapıyoruz. Bilgisayar üzerinden de tarayıcı veya masaüstü yazılımla erişim sağlanabilir.",
      },
      {
        question: "Kayıt cihazı ve hard disk dahil mi?",
        answer:
          "Evet. Tüm paketlerde NVR (kayıt cihazı) ve güvenlik sınıfı hard disk standart olarak dahildir. Kamera sayısına göre 4, 8 veya 16 kanallı NVR ve 1 TB ile 6 TB arası disk kapasitesi belirlenir. IP kamera projelerinde PoE switch de pakete eklenir. Tüm donanımlar garanti kapsamında teslim edilir.",
      },
    ],
  },
  "alarm-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde alarm sistemi için ücretsiz keşif yapıyor musunuz?",
        answer:
          "Evet. {city} içinde randevu oluşturarak ücretsiz keşif yapıyoruz. Keşifte kapı ve pencere sayısı, giriş noktaları, açık alan riski ve mekan kullanım düzenini yerinde analiz ediyoruz. Mekan tipine göre uygun panel, dedektör ve siren yapısını belirleyip yazılı teklif sunuyoruz.",
      },
      {
        question: "Kablosuz alarm mı kablolu alarm mı öneriyorsunuz?",
        answer:
          "Her iki tipin avantajı farklıdır. Kablolu alarm daha kararlı sinyal iletimi sunar ve büyük tesislerde tercih edilir. Kablosuz alarm ise montaj kolaylığı, duvar kırımı gerektirmemesi ve esnek yerleşim avantajıyla öne çıkar. Mevcut altyapınız ve kullanım beklentinize göre en uygun yapıyı keşifte birlikte belirliyoruz.",
      },
      {
        question: "Mobil bildirim ve uzaktan kontrol oluyor mu?",
        answer:
          "Evet. Uyumlu alarm panelleri ile telefonunuzdan sistemi kurabilir, devre dışı bırakabilir ve anlık alarm bildirimlerini alabilirsiniz. Kapı açılma, hareket algılama ve sabotaj gibi olaylar anında mobil bildirimle iletilir. GSM veya internet üzerinden haberleşen panellerde hat kesilse bile yedek kanal devreye girer.",
      },
    ],
  },
  "yangin-alarm-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde yangın alarm sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde konvansiyonel ve adresli yangın alarm sistemleri kuruyoruz. Bina tipine göre duman dedektörü, ısı dedektörü, manuel ihbar butonu ve yangın sireni yerleşimi planlıyoruz. Devreye alma, senaryo testi ve kullanıcı eğitimi kurulum kapsamında sunulur.",
      },
      {
        question: "Dedektör yerleşimini nasıl belirliyorsunuz?",
        answer:
          "Saha analizinde alan kullanımını, tavan yüksekliğini, havalandırma akışını ve kaçış güzergahlarını değerlendiriyoruz. Mutfak, arşiv veya teknik hacim gibi yüksek riskli alanlarda ısı dedektörü, ofis ve koridorlarda duman dedektörü gibi farklı algılama tipleri kullanılır. Binanın kat planına uygun zon yapısı oluşturarak minimum dedektörle maksimum kapsama hedefliyoruz.",
      },
      {
        question: "Kurulum sonrası test yapılıyor mu?",
        answer:
          "Evet. Kurulum tamamlandıktan sonra her dedektör noktası test dumanı veya ısı testiyle kontrol edilir. Manuel ihbar butonları, siren çıkışları ve santral tepkileri tek tek doğrulanır. Zon bazlı senaryo testleri yapılarak hangi bölgede hangi uyarının devreye girdiği kaydedilir.",
      },
    ],
  },
  "kartli-gecis-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde kartlı geçiş sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde ofis, apartman, fabrika, depo ve kontrollü giriş gereken tüm alanlarda kartlı geçiş ve turnike sistemleri kuruyoruz. Proximity kart, mifare kart, yüz tanıma ve parmak izi gibi farklı kimlik doğrulama seçenekleri sunuyoruz. Kurulumda kapı tipi ve kilit uyumunu analiz ederek en uygun donanımı belirliyoruz.",
      },
      {
        question: "Mevcut kapıya kartlı geçiş sistemi uygulanabilir mi?",
        answer:
          "Çoğu senaryoda mevcut kapıya uygulanabilir. Ahşap, cam ve metal kapılarda farklı strike kilit ve manyetik kilit seçenekleri mevcuttur. Kapı genişliği, kasası, menteşe yönü ve günlük geçiş yoğunluğu keşifte değerlendirilir. Uygun olmayan nadir durumlarda turnike veya bariyer gibi alternatif çözümler önerebiliyoruz.",
      },
      {
        question: "Kullanıcı yetkileri sonradan değiştirilebilir mi?",
        answer:
          "Evet. Web arayüzü veya yazılım üzerinden kullanıcı ekleme, kart iptali, giriş yetkisi güncelleme ve geçiş raporu alma işlemlerini kolayca yapabilirsiniz. Kayıp kart anında iptal edilip yenisi tanımlanabilir. Departman bazlı veya zaman bazlı yetkilendirme kuralları oluşturulabilir. Kurulum sonrası yönetim eğitimini ekibimiz veriyor.",
      },
    ],
  },
  "apartman-site-guvenlik-sistemi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde apartman ve site güvenlik sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde tek bloklu apartmanlardan çok bloklu site projelerine kadar farklı ölçeklerde kurulum yapıyoruz. Bina girişi, otopark, çevre çit hattı, asansör önü ve ortak alanlar için kamera; apartman ve site girişi için kartlı veya şifreli geçiş kontrolü sunuyoruz. Proje ölçeğine göre teklif keşif sonrası hazırlanır.",
      },
      {
        question: "Otopark ve bina girişi aynı sistemde toplanabilir mi?",
        answer:
          "Evet. Bina girişleri, otopark giriş-çıkışları, asansör holleri ve bahçe alanları uygun projelerde tek bir NVR üzerinden kaydedilip aynı ekrandan izlenebilir. Böylece site yönetimi veya güvenlik görevlisi tüm noktaları tek panelden takip edebilir. Kamera sayısı artarsa sisteme kolayca ek kayıt cihazı eklenebilir.",
      },
      {
        question: "Yönetim için kullanıcı dostu çözüm sunuyor musunuz?",
        answer:
          "Evet. Kurulum sonrası site yöneticisi veya apartman yetkilisine sistemi nasıl kullanacağını gösteriyoruz. Canlı izleme, kayıt geri izleme, kart tanımlama ve temel bakım kontrollerini kolay anlaşılır şekilde aktarıyoruz. Teknik bilgi gerektirmeyen arayüzler tercih ediyoruz. Destek ihtiyacında telefonla veya yerinde müdahale imkanı sağlıyoruz.",
      },
    ],
  },
  "isyeri-guvenlik-sistemi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde işyeri güvenlik sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde perakende mağaza, ofis, kafe, restoran, showroom ve ticari işletmeler için kamera, alarm ve giriş kontrol çözümleri kuruyoruz. İşyerinizin ticari yapısına göre kasa takibi, personel giriş kontrolü, kapanış sonrası alarm ve uzaktan izleme gibi ihtiyaçları birlikte değerlendiriyoruz.",
      },
      {
        question: "Kurulum iş saatlerini etkiler mi?",
        answer:
          "İş sürekliliğini korumak önceliğimizdir. Uygun projelerde kablolama ve altyapı hazırlığını mesai saatleri dışında veya hafta sonu yapıyoruz. Montajı etaplara bölerek mağaza veya ofisin çalışma saatlerinde etkiyi minimumda tutuyoruz. Müşteriye montaj takvimi yazılı olarak iletilir.",
      },
      {
        question: "Birden fazla güvenlik çözümü birlikte kurulabilir mi?",
        answer:
          "Evet. Kamera sistemi, alarm paneli ve kartlı giriş kontrolünü aynı projede birlikte planlayabiliyoruz. Böylece kasa ve stok alanı kamera ile izlenir, kapanış sonrası alarm devreye girer ve personel girişi kartlı olarak kontrol edilir. Tek seferde planlama sayesinde kablolama ve altyapı maliyetleri optimum seviyede tutulur.",
      },
    ],
  },
  "fabrika-depo-guvenlik-sistemi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde fabrika ve depo güvenlik sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde fabrika, üretim tesisi, lojistik depo ve sanayi sitelerinde geniş saha güvenlik çözümleri kuruyoruz. Çevre hattı kameraları, giriş kontrol bariyerleri, sevkiyat noktası takibi ve üretim alanı izleme gibi ihtiyaçları tek proje kapsamında ele alıyoruz. Açık alan ve gece koşullarına uygun profesyonel ekipman kullanıyoruz.",
      },
      {
        question: "Geniş açık alanlarda güvenlik nasıl planlanıyor?",
        answer:
          "Geniş saha projelerinde çevre çit hattı, araç giriş kapısı, yükleme rampası ve personel girişi gibi kritik noktalar öncelikli planlanır. Gece koşullarında IR veya beyaz LED aydınlatmalı kameralar ve açık alan için motorlu zoom lensli modeller tercih edilir. Kamera sayısı ve kayıt süresi beklentisine göre NVR kapasitesi sahaya özel boyutlandırılır.",
      },
      {
        question: "Depo ve üretim alanı aynı projede ele alınabilir mi?",
        answer:
          "Evet. Üretim hattı, raf koridorları, sevkiyat alanı ve lojistik operasyon noktaları aynı güvenlik projesi içinde birlikte tasarlanır. Farklı bölümlerin aydınlatma ve hareket yoğunluğu değiştiği için her alan kendi ihtiyacına göre kamera tipi ve açı planlaması alır. Böylece tek bir kayıt ve izleme altyapısından tüm tesis yönetilebilir.",
      },
    ],
  },
  "bakim-servis-uzaktan-izleme": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde bakım ve servis hizmeti veriyor musunuz?",
        answer:
          "Evet. {city} içinde mevcut kamera, alarm ve geçiş kontrol sistemleri için düzenli bakım, arıza giderme ve uzaktan izleme bağlantı desteği sağlıyoruz. Sistemin markası ve modeli fark etmeksizin mevcut altyapınızı inceleyip uygun servis kapsamını belirliyoruz. Tek seferlik müdahale veya periyodik bakım planı seçenekleri sunuyoruz.",
      },
      {
        question: "Kurulu sistem başka bir firmadan olsa da destek olur musunuz?",
        answer:
          "Birçok senaryoda evet. Farklı bir firma tarafından kurulmuş sistemlerde de devir alarak bakım ve servis verebiliyoruz. Mevcut cihazların marka, model ve durumunu yerinde inceledikten sonra destek kapsamını netleştiriyoruz. Uyumsuz veya ömrünü tamamlamış ekipmanlar varsa yenileme önerisiyle birlikte teklif hazırlıyoruz.",
      },
      {
        question: "Uzaktan izleme bağlantı sorunları çözülebilir mi?",
        answer:
          "Evet. Uzaktan izleme sorunlarında modem yapılandırması, port yönlendirme, DNS ayarları, cihaz ağ konfigürasyonu ve mobil uygulama bağlantısını kontrol ediyoruz. P2P veya bulut tabanlı erişim senaryolarına göre en uygun bağlantı yöntemini yapılandırıyoruz. Gerekli durumlarda internet hattı ve ağ altyapısı hakkında da yönlendirme yapıyoruz.",
      },
    ],
  },
  "kamera-sistemi-bakim-sozlesmesi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde kamera sistemi bakım sözleşmesi yapıyor musunuz?",
        answer:
          "Evet. {city} içinde 2 ile 64+ kameralı projelere kadar her ölçekte periyodik bakım sözleşmesi yapıyoruz. Sözleşme kapsamında kamera görüntü kalitesi, kayıt cihazı sağlığı, disk durumu, kablo bağlantıları ve uzaktan erişim ayarları düzenli olarak kontrol edilir. Bakım sıklığı proje büyüklüğüne göre yılda 2 ila 4 kez olarak planlanır.",
      },
      {
        question: "Bakım sözleşmesinde hangi kontroller yer alır?",
        answer:
          "Her periyodik bakımda kamera açılarının kayması, lens temizliği, gece görüş performansı, kayıt cihazının sorunsuz çalışması, disk doluluk oranı ve sağlık durumu kontrol edilir. Ayrıca kablo bağlantıları, PoE switch portları, ağ kararlılığı ve uzaktan erişim ayarları test edilir. Bakım sonunda bulgular yazılı rapor olarak sunulur.",
      },
      {
        question: "Başka firmadan alınmış sistemler için de bakım yapılır mı?",
        answer:
          "Birçok durumda evet. Başka firma tarafından kurulmuş kamera sistemlerini de ön değerlendirme sonrası bakım sözleşmesine alabiliriz. İlk kontrolde cihazların markası, modeli, yazılım sürümü ve genel durumu raporlanır. Bakım kapsamına alınamayacak kadar eski veya sorunlu ekipmanlar varsa yenileme önerisiyle birlikte teklif sunulur.",
      },
    ],
  },
  "guvenlik-sistemi-teknik-servis": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde güvenlik sistemi teknik servis hizmeti veriyor musunuz?",
        answer:
          "Evet. {city} içinde kamera, alarm paneli, yangın alarm ve kartlı geçiş sistemleri için yerinde teknik servis desteği veriyoruz. Arıza bildirimi sonrası en kısa sürede saha müdahalesi planlıyoruz. Hem kendi kurulumlarımız hem de başka firmalardan devralınan sistemler için teknik destek sağlayabiliyoruz.",
      },
      {
        question: "Teknik servis hangi arızalara bakar?",
        answer:
          "Görüntü gelmeyen kamera, kayıt yapmayan NVR, disk hatası, PoE switch arızası, alarm panel hatası, sensör tepkisizliği, geçiş kontrol kapısı açılmaması ve uzaktan erişim sorunu gibi geniş yelpazede destek veriyoruz. Arıza semptomuna göre cihaz, kablo, ağ ve yazılım katmanlarını sistematik olarak test ederek kök nedeni belirliyoruz.",
      },
      {
        question: "Önce arıza tespiti mi yapıyorsunuz?",
        answer:
          "Evet. Önce arızanın kaynağını sistematik olarak tespit ediyoruz. Kamera, kablo, kayıt cihazı, disk ve ağ altyapısından hangisinin soruna yol açtığını belirlemeden parça değişimi yapmıyoruz. Böylece gereksiz maliyet oluşmaz ve müdahale kalıcı olur. Tespit sürecinde yapılan testler müşteriye aktarılır.",
      },
    ],
  },
  "kamera-ariza-servisi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde kamera arıza servisi veriyor musunuz?",
        answer:
          "Evet. {city} içinde görüntü gelmeyen kamera, kayıt yapmayan NVR/DVR, disk hatası, mobil erişim sorunu ve ağ bağlantısı kopması gibi tüm kamera arızaları için yerinde servis desteği veriyoruz. Arıza bildirimi sonrası saha müdahalesi planlıyor ve mümkün olan en kısa sürede çözüm üretiyoruz.",
      },
      {
        question: "Kamera arızasında hangi parçaları kontrol ediyorsunuz?",
        answer:
          "Arıza semptomuna göre kamera ucu, lens, IR LED, kablo bütünlüğü, kayıt cihazı, hard disk SMART durumu, PoE switch portları ve ağ konfigürasyonunu kontrol ediyoruz. IP kameralarda ağ tarafı, analog kameralarda BNC ve güç hattı ayrı ayrı test edilir. Her kontrol adımı arıza raporuna kaydedilir.",
      },
      {
        question: "Kayıt cihazı kaynaklı sorunları da çözüyor musunuz?",
        answer:
          "Evet. NVR veya DVR cihazında görüntü kaybı, kayıt durması, disk hatası ve firmware sorunu gibi problemleri test edip gideriyoruz. Disk sağlığı SMART verileriyle kontrol edilir; ömrünü tamamlamış diskler güvenlik sınıfı yeni disklerle değiştirilebilir. Kayıt ayarları ve akış yapılandırması da müdahale kapsamında optimize edilir.",
      },
    ],
  },
  "yangin-alarm-bakim-sozlesmesi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde yangın alarm bakım sözleşmesi yapıyor musunuz?",
        answer:
          "Evet. {city} içinde konvansiyonel ve adresli yangın alarm sistemleri için periyodik bakım sözleşmesi sunuyoruz. Sözleşme kapsamında panel, dedektör, siren ve ihbar butonları düzenli aralıklarla sahada test edilir. Bakım sıklığı bina tipine ve yasal gerekliliklere göre yılda 2 ila 4 kez olarak planlanır.",
      },
      {
        question: "Bakım sözleşmesinde hangi cihazlar kontrol edilir?",
        answer:
          "Her bakımda yangın alarm panelinin çalışma durumu, dedektörlerin algılama tepkisi, ihbar butonlarının mekanik işlevi, sirenlerin ses seviyesi ve tüm bağlantı noktalarının iletim sağlığı test edilir. Çalışmayan veya zayıf tepki veren bileşenler yazılı raporda belirlenir ve yenileme önerisi sunulur.",
      },
      {
        question: "Bakım kayıtları tutuluyor mu?",
        answer:
          "Evet. Her bakım ziyaretinde uygulanan test adımları, kontrol edilen cihazlar, tespit edilen sorunlar ve yapılan müdahaleler detaylı bakım raporuna kaydedilir. Bu kayıtlar yangın yönetmeliği kapsamındaki denetim süreçlerinde referans olarak kullanılabilir. Bakım geçmişi dijital ortamda saklanarak geçmiş kontrollerin takibi kolaylaşır.",
      },
    ],
  },
  "guvenlik-sistemi-bakim-sozlesmesi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde güvenlik sistemi bakım sözleşmesi yapıyor musunuz?",
        answer:
          "Evet. {city} içinde kamera, alarm, yangın alarm ve geçiş kontrol altyapılarını kapsayan sözleşmeli periyodik bakım hizmeti sunuyoruz. Sözleşme kapsamında tüm güvenlik bileşenleri takvime uygun şekilde kontrol edilir, arıza riski taşıyan noktalar önceden tespit edilir. Bakım sıklığı ve kapsam proje büyüklüğüne göre özelleştirilir.",
      },
      {
        question: "Bakım sözleşmesinde hangi başlıklar kontrol edilir?",
        answer:
          "Her bakım ziyaretinde NVR/DVR sağlığı, disk durumu, kamera açıları ve görüntü kalitesi, alarm panel işlevleri, sensör tepkileri, GSM veya internet haberleşmesi, uzaktan erişim bağlantısı ve saha ekipmanlarının fiziksel durumu kontrol edilir. Tespit edilen sorunlar ve riskler bakım raporunda detaylı şekilde sunulur.",
      },
      {
        question: "Sözleşmeli bakım arıza riskini azaltır mı?",
        answer:
          "Evet. Periyodik bakım sayesinde disk arızası, kamera kopması, panel hatası ve bağlantı sorunları belirti aşamasında tespit edilir. Böylece kayıt kaybı, güvenlik açığı ve plansız servis çağrısı riski önemli ölçüde azalır. Düzenli bakım yapılan sistemlerde arıza sıklığı ve toplam servis maliyeti belirgin şekilde düşer.",
      },
    ],
  },
  "site-kamera-sistemi-bakim": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde site kamera sistemi bakımı yapıyor musunuz?",
        answer:
          "Evet. {city} içinde apartman ve site projelerinde bina girişi, otopark, çevre hattı ve ortak alan kameralarının bakımını planlı periyotlarla yapıyoruz. Bakım kapsamında görüntü kalitesi, kayıt süresi, disk sağlığı ve uzaktan erişim kontrol edilir. Site yönetimi takvime uygun raporlama alır.",
      },
      {
        question: "Site bakımında en çok hangi sorunlara odaklanıyorsunuz?",
        answer:
          "Site projelerinde en sık karşılaşılan sorunlar kör nokta oluşması, kamera açısı kayması, kayıt süresinin kısalması, disk doluluk uyarıları ve uzaktan izleme bağlantı kopmasıdır. Açık alanlardaki kameralarda lens kirlenmesi ve IR LED performans düşüşü de periyodik kontrol gerektirir. Bu başlıkların tümü bakım kapsamında izlenir.",
      },
      {
        question: "Site yönetimine uygun raporlu bakım planı oluşturabilir misiniz?",
        answer:
          "Evet. Bakım sıklığı, kontrol başlıkları ve raporlama formatı site yönetim kurulunun beklentisine göre özelleştirilebilir. Her bakım sonrası kamera durumu, disk sağlığı ve tespit edilen sorunları içeren yazılı rapor sunulur. Raporlar yönetim kurulu sunumlarında referans olarak kullanılabilir.",
      },
    ],
  },
  "fabrika-guvenlik-sistemi-bakim": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde fabrika güvenlik sistemi bakımı yapıyor musunuz?",
        answer:
          "Evet. {city} içinde fabrika, üretim tesisi ve sanayi alanlarında kurulu kamera, kayıt cihazı, çevre kamerası ve saha ekipmanlarını kapsayan periyodik bakım hizmeti sunuyoruz. Vardiyali çalışma düzenine uygun bakım takvimi oluşturuyoruz. Açık alan ve zorlu ortam koşullarında çalışan ekipmanların ömrünü uzatmayı hedefliyoruz.",
      },
      {
        question: "Fabrika bakımında neden kayıt sürekliliği vurgulanıyor?",
        answer:
          "Vardiyalı çalışan tesislerde 7/24 kayıt sürekliliği kritik öneme sahiptir. Disk arızası veya NVR sorunu nedeniyle oluşan kayıt kaybı, olay sonrası inceleme yapılamamasına yol açar. Çevre hattındaki kamera arızası ise güvenlik zafiyeti oluşturur. Bu nedenle disk SMART verileri, NVR performansı ve saha kameralarının fiziksel durumu düzenli kontrol edilmelidir.",
      },
      {
        question: "Bakım planı üretim alanı ve çevre hattını birlikte kapsar mı?",
        answer:
          "Evet. Araç giriş kapısı, sevkiyat rampası, çevre çit hattı, üretim alanı ve personel girişi kameraları aynı bakım planı içinde değerlendirilir. Her bölümün risk seviyesine göre kontrol önceliği belirlenir. Böylece tek bir bakım ziyaretinde tesisin tüm güvenlik altyapısı sistematik olarak gözden geçirilmiş olur.",
      },
    ],
  },
  "nvr-bakim-servisi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde NVR bakım servisi veriyor musunuz?",
        answer:
          "Evet. {city} içinde tüm marka ve model NVR cihazları için bakım ve teknik servis desteği sunuyoruz. Disk sağlığı kontrolü, kayıt ayarlarının optimizasyonu, firmware güncellemesi, uzaktan erişim yapılandırması ve ağ bağlantı testleri servis kapsamında yer alır. Hem yerinde hem de uzaktan müdahale seçenekleri mevcuttur.",
      },
      {
        question: "NVR bakımında hangi sorunlar en sık çözülüyor?",
        answer:
          "En sık karşılaştığımız NVR sorunları disk doluluk uyarısı, kayıt süresi kaybı, kamera akışının görünmemesi, uzaktan erişim kopması ve ağ tarafındaki kararsızlıklardır. Bunların yanı sıra firmware uyumsuzluğu, IP çakışması ve kanal ayar bozulması da servis taleplerimiz arasında yer alır.",
      },
      {
        question: "Sadece disk değişimi sorunu her zaman çözer mi?",
        answer:
          "Her zaman değil. Disk değişimi yalnızca diskin fiziksel arızası durumunda çözüm olur. Kayıt kaybının nedeni NVR ayarları, kamera akış yapılandırması, ağ kararsızlığı veya firmware sorunu da olabilir. Bu nedenle disk, cihaz, ağ ve yazılım katmanları birlikte test edilmeden kalıcı sonuç almak zordur.",
      },
    ],
  },
  "depo-guvenlik-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde depo güvenlik sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde küçük lojistik depolardan büyük dağıtım merkezlerine kadar farklı ölçeklerde güvenlik sistemi kurulumu yapıyoruz. Yükleme rampası, raf koridorları, araç giriş-çıkışı, çevre hattı ve gece izleme ihtiyaçlarını tek proje kapsamında planlıyoruz.",
      },
      {
        question: "Depo projelerinde hangi alanlar öncelikli planlanır?",
        answer:
          "Depo güvenliğinde öncelikli alanlar yükleme ve boşaltma rampası, sevkiyat hattı, raf koridorları, gece personel ve araç girişleri ile çevre sınırlarıdır. Bu noktalar hem stok güvenliği hem de operasyonel verimlilik açısından kritiktir. Keşifte her alanın aydınlatma durumu, hareket yoğunluğu ve risk seviyesi değerlendirilerek kamera tipi ve konumu belirlenir.",
      },
      {
        question: "Uzun kayıt süresi gerektiren depolar için ayrı plan yapıyor musunuz?",
        answer:
          "Evet. Uzun kayıt süresi gereken depolarda kamera çözünürlüğü, akış bit hızı, NVR kanal kapasitesi ve disk boyutu birlikte hesaplanır. 30, 60 veya 90 gün gibi kayıt süresi hedeflerine göre disk kapasitesi planlanır. Gerektiğinde eski kayıtların otomatik silinme politikası da yapılandırılarak disk alanı optimize edilir.",
      },
    ],
  },
  "plaza-guvenlik-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde plaza güvenlik sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde lobi, resepsiyon, ofis katları, toplantı alanları ve ziyaretçi girişi olan plaza ve kurumsal bina projeleri için güvenlik sistemi kurulumu sunuyoruz. Kamera, kartlı geçiş, turnike ve alarm sistemlerini binanın mimari yapısına uygun şekilde planlıyoruz.",
      },
      {
        question: "Plaza projelerinde sadece kamera mı kuruyorsunuz?",
        answer:
          "Hayır. Plaza projelerinde kamera tek başına yeterli değildir. Giriş kontrolü için kartlı geçiş veya turnike, mesai dışı güvenlik için alarm sistemi ve uzaktan izleme altyapısı birlikte planlanmalıdır. Ayrıca yangın alarm sistemi ve acil durum uyarı altyapısı da projenin kapsamına göre değerlendirilir.",
      },
      {
        question: "Kurumsal yapılarda raporlama ve bakım neden satın alma kararını etkiler?",
        answer:
          "Kurumsal tarafta güvenlik yatırımı sadece kurulumla bitmez. Periyodik bakım, arıza müdahale süresi, servis raporlaması ve iletişim disiplini karar sürecinde en az donanım kalitesi kadar belirleyicidir. Bakım sözleşmesi olan projelerde plansız duruş riski azalır, servis geçmişi kayıt altında tutulur ve yönetim düzenli rapor alır.",
      },
    ],
  },
  "avm-guvenlik-sistemi-cozumleri": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde AVM güvenlik sistemi çözümleri sunuyor musunuz?",
        answer:
          "Evet. {city} içinde AVM ve büyük ticari merkez projelerinde kamera, yangın alarm, erişim kontrolü ve servis sürekliliğini birlikte planlıyoruz. Mağaza katları, otopark, yükleme alanı, yangın merdiveni ve ortak alanlar gibi farklı kullanım bölgeleri ayrı ayrı analiz edilerek uygun çözüm mimarisi oluşturulur.",
      },
      {
        question: "AVM projelerinde neden çok bileşenli kurgu gerekiyor?",
        answer:
          "AVM projelerinde yoğun ziyaretçi trafiği, yangın güvenliği yükümlülükleri, mağaza teslimat alanları, otopark giriş-çıkışları ve çoklu giriş noktaları aynı anda yönetilir. Bu nedenle tek tip cihaz değil; kamera, yangın alarm, erişim kontrol ve servis sürekliliğini kapsayan bütünleşik bir güvenlik mimarisi gerekir.",
      },
      {
        question: "Periyodik test ve bakım hizmeti ilk kurulumla birlikte planlanabilir mi?",
        answer:
          "Evet. AVM gibi yüksek trafikli yapılarda güvenlik sisteminin kesintisiz çalışması yasal ve operasyonel bir zorunluluktur. Bu nedenle kurulumla birlikte periyodik bakım planı, arıza müdahale süresi ve düzenli test takvimi de belirlenir. Bakım sözleşmesi olmadan çalışan bir AVM güvenlik altyapısı hem risk hem maliyet açısından sürdürülebilir değildir.",
      },
    ],
  },
  "alarm-sistemi-bakim": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde alarm sistemi bakımı yapıyor musunuz?",
        answer:
          "Evet. {city} içinde konut ve işyeri alarm sistemleri için panel kontrolü, sensör tepki testi, siren çalışma kontrolü, GSM/internet haberleşme testi ve batarya sağlığı kontrolünü kapsayan periyodik bakım hizmeti veriyoruz. Bakım sıklığı sistem büyüklüğüne ve kullanım yoğunluğuna göre planlanır.",
      },
      {
        question: "Alarm bakımında hangi başlıklar kontrol edilir?",
        answer:
          "Her bakım ziyaretinde alarm panel durumu, her dedektörün tepki süresi, manyetik kontakların kapı/pencere uyumu, iç ve dış siren çalışma testi, GSM veya internet üzerinden haberleşme doğrulaması ve yedek batarya voltajı kontrol edilir. Zayıf batarya, tepkisiz sensör veya haberleşme sorunu tespit edilirse çözüm önerisi sunulur.",
      },
      {
        question: "Düzenli alarm bakımı neden ihmal edilmemelidir?",
        answer:
          "Alarm sistemleri günlük hayatta sessiz çalıştığı için arıza fark edilmeyebilir. Test edilmemiş bir dedektör veya boşalmış bir batarya, acil durumda sistemin devreye girmemesine neden olabilir. Periyodik bakım ile tüm bileşenler gerçek senaryo testlerinden geçirilir. Yılda en az 2 kez bakım önerilir.",
      },
    ],
  },
  "kartli-gecis-teknik-servis": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde kartlı geçiş teknik servisi yapıyor musunuz?",
        answer:
          "Evet. {city} içinde tüm marka ve model kartlı geçiş sistemleri için teknik servis ve saha müdahale desteği sunuyoruz. Kart okuyucu arızası, kontrol kartı sorunu, kapı kilit mekanizması arızası, turnike mekanik ve elektronik sorunları, kablo ve bağlantı problemleri servis kapsamında yer alır. Hem yerinde hem de uzaktan ön teşhis seçeneklerimiz mevcuttur.",
      },
      {
        question: "Kart okuyucu okuma yapmıyor; en sık neden kaynaklanır?",
        answer:
          "Kart okuyucu arızalarının en yaygın nedenleri okuyucu anten bozulması, kontrol kartı iletişim sorunu, güç kaynağı kararsızlığı ve kablo kopması olarak sıralanır. Bunların yanı sıra kart tanımlama yazılımındaki yapılandırma hatası veya firmware uyumsuzluğu da okuma sorununa yol açabilir. Teşhis olmadan sadece kart okuyucu değişimi her zaman kalıcı çözüm sağlamaz.",
      },
      {
        question: "Teknik servis sonrası bakım sözleşmesi gerekir mi?",
        answer:
          "Kartlı geçiş sistemleri günlük yoğun kullanımdan dolayı mekanik ve elektronik parçaların zamanla yıpranmasına maruz kalır. Teknik servis, anlık sorunu çözse de periyodik kontrol olmadan yeni arızalar kaçınılmaz olabilir. Bakım sözleşmesiyle kontrol kartı, okuyucu, kilit mekanizması ve yazılım katmanları düzenli denetimden geçirilir ve plansız duruş riski azaltılır.",
      },
    ],
  },
  "magaza-kamera-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde mağaza kamera sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde tek mağaza ve çok şubeli zincir yapılar için kamera sistemi kurulumu yapıyoruz. Kasa bölgesi, satış alanı, müşteri girişi ve depo/stok alanlarını kapsayan, mağaza tipine özel kamera yerleşim planı oluşturuyoruz. Kurulum süresini ve operasyonel aksama riskini minimize edecek şekilde planlama yapıyoruz.",
      },
      {
        question: "Zincir mağazalarda tüm şubeler aynı sistemde yönetilebilir mi?",
        answer:
          "Evet. Standart ekipman seçimi ve merkezi izleme altyapısıyla tüm şube kameralarına tek platform üzerinden erişilebilir. Her şubenin kamera akışını ayrı ayrı izleyebilir, kayıtlara uzaktan ulaşabilirsiniz. Şubeler arası farklı cihaz modellerinin yarattığı yönetim karmaşasını önlemek için kurulumda ekipman standardizasyonu öneriyoruz.",
      },
      {
        question: "Kasa noktası için özel kamera tipi gerekiyor mu?",
        answer:
          "Kasa bölgesinde yüzü net kaydeden yüksek çözünürlüklü kamera ve geniş açı lens kombinasyonu tercih edilir. Ödeme alanı üst açıdan görüntülendiğinde hem kasiyeri hem de müşteriyi aynı karede tutmak mümkündür. Aydınlatma durumuna göre WDR (geniş dinamik aralık) özellikli kamera öneriyoruz; böylece güneş ışığı veya parlaklık farkından kaynaklanan görüntü kaybı önlenir.",
      },
    ],
  },
  "ip-kamera-bakim-servisi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde IP kamera bakım servisi veriyoor musunuz?",
        answer:
          "Evet. {city} içinde PoE tabanlı ve ağ üzerinden çalışan IP kamera sistemleri için periyodik bakım ve teknik servis desteği sunuyoruz. PoE switch kontrolü, kamera bağlantı testi, kayıt akışı doğrulaması, disk sağlığı takibi ve görüntü kalitesi denetimi bakım kapsamında yer alır. Tek ziyarette tüm altyapıyı sistematik olarak inceliyoruz.",
      },
      {
        question: "IP kamera bakımı analog sisteme göre neden farklı yaklaşım gerektirir?",
        answer:
          "IP kamera sistemlerinde kamera, PoE switch, ağ altyapısı ve NVR katmanları birbirinden bağımsız çalışır. Bir katmandaki sorun diğerini etkileyebilir; örneğin PoE switch portundaki güç düşümü kamerayı çevrimdışı bırakır ama görünürde kamera arızası gibi gözükür. Bu nedenle bakımda her katman ayrı ayrı test edilmeli ve ağ sağlık raporu çıkarılmalıdır.",
      },
      {
        question: "IP kamera bakımı ne sıklıkta yapılmalıdır?",
        answer:
          "Yoğun kullanımın olduğu ticari ve sanayi alanlarda yılda en az 2 bakım önerilir. Dış ortam ve zorlu koşullarda çalışan kameralar için ilkbahar ve sonbahar bakımı (temizlik, lens kontrolü, bağlantı sıkıştırma) standart uygulamadır. Kritik altyapılarda veya uzun kayıt süresi gerektiren sistemlerde çeyrek dönemlik kontrol planlanması riski önemli ölçüde azaltır.",
      },
    ],
  },
  "uzaktan-kamera-izleme": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde uzaktan kamera izleme hizmeti sunuyor musunuz?",
        answer:
          "Evet. {city} içinde mevcut veya yeni kurulan kamera sistemleri için uzaktan izleme altyapısı kuruyoruz. Mobil telefon, tablet ve bilgisayar üzerinden canlı izleme, geçmiş kayıt erişimi ve anlık bildirim özellikleri yapılandırılır. P2P, bulut veya statik IP tabanlı bağlantı seçenekleriyle projenize en uygun yöntem belirlenir.",
      },
      {
        question: "Telefondan ve bilgisayardan aynı anda izleme yapılabilir mi?",
        answer:
          "Uygun cihaz ve ağ altyapısında evet. Aynı kamera sistemine hem telefondan hem bilgisayardan eş zamanlı erişim sağlanabilir. Kullanıcı sayısına göre farklı yetki seviyeleri tanımlanabilir; örneğin yönetici tüm kameraları, personel ise yalnızca kendi alanını görebilir. Kurulum sırasında tüm cihazların bağlantı ayarlarını biz yapıyoruz.",
      },
      {
        question: "Birden fazla şube tek ekranda izlenebilir mi?",
        answer:
          "Evet. Birden fazla şube, depo veya işyerinin kamera akışları uygun ağ altyapısıyla tek bir izleme platformunda toplanabilir. Merkezi ekran veya mobil uygulama üzerinden tüm lokasyonlar anlık olarak takip edilir. Her lokasyonun bağlantı durumu ve kayıt sağlığı da uzaktan kontrol edilebilir.",
      },
    ],
  },
};
