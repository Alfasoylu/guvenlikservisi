export interface ProblemPageData {
    slug: string;
    title: string;
    metaDescription: string;
    primaryIssue: string;
    urgencyLevel: "yüksek" | "orta" | "düşük";
    affectedSystems: string[];
    symptoms: string[];
    likelyCauses: string[];
    quickChecks: string[];
    whenToCallService: string[];
    whatHappensIfIgnored: string[];
    remoteVsOnsite: {
        remoteHelp: string;
        onsiteRequired: string;
    };
    faq: { question: string; answer: string }[];
    relatedServiceLinks: { href: string; label: string }[];
    relatedProblemLinks: { href: string; label: string }[];
    whatsappMessage: string;
    heroCtaLabel: string;
    defaultService: string;
    image?: {
        src: string;
        alt: string;
        caption?: string;
    };
}

export const problemPages: ProblemPageData[] = [
    // ───────────────── 1. Kamera Görüntü Gelmiyor ─────────────────
    {
        slug: "kamera-goruntu-gelmiyor",
        title: "Güvenlik Kamerasında Görüntü Gelmiyor | Teknik Servis",
        metaDescription:
            "Güvenlik kamerasında görüntü gelmiyor mu? Olası nedenler, hızlı kontroller ve profesyonel teknik servis desteği için bu sayfayı inceleyin.",
        primaryIssue: "Güvenlik Kamerasında Görüntü Gelmiyor",
        urgencyLevel: "yüksek",
        affectedSystems: ["IP kamera", "analog kamera", "NVR", "DVR", "PoE switch"],
        symptoms: [
            "Monitörde veya mobil uygulamada siyah ekran",
            "NVR/DVR üzerinde kamera kanalı boş görünüyor",
            'Kamera durumu "No Video" veya "Video Loss" gösteriyor',
            "Kamera LED göstergesi yanmıyor",
            "Mobil uygulamada canlı izleme açılmıyor",
            "Birden fazla kamerada aynı anda görüntü kaybı",
        ],
        likelyCauses: [
            "Kameraya güç gitmiyor (adaptör arızası, PoE switch sorunu, kablo kopması)",
            "Ethernet veya koaksiyel kablo hasarı ya da konnektör gevşemesi",
            "Kamera donanım arızası (lens, sensör veya anakart)",
            "NVR/DVR kamera kanalı ayarının bozulması",
            "IP çakışması veya ağ yapılandırma hatası",
            "Firmware uyumsuzluğu veya güncelleme sonrası hata",
            "Yıldırım veya voltaj dalgalanması kaynaklı hasar",
        ],
        quickChecks: [
            "Kamera LED ışığı yanıyor mu kontrol edin. Yanmıyorsa güç sorunu olabilir.",
            "PoE switch veya güç adaptörünü kontrol edin, başka bir porta/adaptöre takın.",
            "Kamera ile kayıt cihazı arasındaki kablo bağlantılarını ve konnektörleri kontrol edin.",
            "NVR/DVR üzerinde kamerayı sil-ekle yaparak kanal ayarını yenileyin.",
            "NVR/DVR ve kamerayı yeniden başlatın (güç kablosunu çıkarıp 10 saniye bekleyin).",
            "Farklı bir kamerayı aynı porta takarak portun çalışıp çalışmadığını test edin.",
        ],
        whenToCallService: [
            "Güç ve kablo kontrollerine rağmen görüntü gelmiyorsa",
            "Birden fazla kamerada aynı anda sorun varsa (ağ veya switch arızası olabilir)",
            "Kamera fiziksel hasar almışsa veya su girişi şüphesi varsa",
            "NVR/DVR ayarlarında değişiklik yapamıyorsanız veya arayüze erişemiyorsanız",
            "Yıldırım sonrası veya voltaj dalgalanması sonrası sorun başladıysa",
            "Sorun kesintili tekrarlıyorsa (zaman zaman geliyor, zaman zaman gidiyor)",
        ],
        whatHappensIfIgnored: [
            "İzlenemeyen bölgede güvenlik açığı oluşur",
            "Kayıt yapılamadığı sürece olay sonrası görüntüye ulaşılamaz",
            "Kablo veya donanım hasarı zamanla büyüyebilir",
            "Diğer sistem bileşenlerini de etkileyebilir (switch, NVR)",
        ],
        remoteVsOnsite: {
            remoteHelp:
                "Ağ ve yazılım ayarları kaynaklı basit sorunlar uzaktan erişim ile çözülebilir. IP ayarı, kanal ekleme veya firmware kontrolü uzaktan yapılabilir.",
            onsiteRequired:
                "Kablo hasarı, kamera donanım arızası, PoE switch değişimi veya fiziksel montaj gerektiren sorunlar için sahada müdahale gereklidir.",
        },
        faq: [
            {
                question: "Kamerada görüntü gelmemesi ne kadar acil?",
                answer:
                    "Güvenlik açığı oluşturduğu için acildir. Görüntü gelmeyen kamera kayıt da yapamaz. Özellikle giriş-çıkış noktalarında kör nokta ciddi risk oluşturur.",
            },
            {
                question: "Sorun uzaktan çözülebilir mi?",
                answer:
                    "Yazılım veya ağ ayarı kaynaklıysa uzaktan erişimle çözülebilir. Kablo veya donanım arızasında sahada müdahale gerekir.",
            },
            {
                question: "Aynı gün teknik servis gelebilir mi?",
                answer:
                    "Evet. Acil durumlarda aynı gün teknik ekip yönlendirilir. İletişime geçtiğinizde müsaitlik durumu bildirilir.",
            },
            {
                question: "Başka firmanın kurduğu sisteme müdahale eder misiniz?",
                answer:
                    "Evet. Marka ve kurucu firma fark etmez. Önce arıza kaynağı tespit edilir, ardından çözüm önerilir.",
            },
        ],
        relatedServiceLinks: [
            { href: "/kamera-ariza-servisi", label: "Kamera Arıza Servisi" },
            { href: "/istanbul/guvenlik-sistemi-teknik-servis", label: "İstanbul Kamera Teknik Servis" },
            { href: "/kamera-sistemi-kurulumu", label: "Kamera Sistemi Kurulumu" },
            { href: "/bakim-servis-uzaktan-izleme", label: "Bakım, Servis ve Uzaktan İzleme" },
        ],
        relatedProblemLinks: [
            { href: "/sorun/kamera-offline", label: "Kamera Offline Sorunu" },
            { href: "/sorun/kayit-yapilmiyor", label: "Kayıt Yapılmıyor Sorunu" },
            { href: "/sorun/telefondan-izleme-sorunu", label: "Telefondan İzleme Sorunu" },
        ],
        whatsappMessage:
            "Merhaba, güvenlik kamerasında görüntü gelmiyor. Teknik destek almak istiyorum.",
        heroCtaLabel: "Teknik destek talep edin",
        defaultService: "kamera",
    },

    // ───────────────── 2. Kamera Offline ─────────────────
    {
        slug: "kamera-offline",
        title: "Kamera Offline Sorunu | Neden Olur, Ne Yapılmalı?",
        metaDescription:
            "Güvenlik kameranız offline mi görünüyor? Nedenler, hızlı kontroller ve teknik servis desteği için bu sayfayı inceleyin.",
        primaryIssue: "Kamera Offline Görünüyor",
        urgencyLevel: "yüksek",
        affectedSystems: ["IP kamera", "NVR", "PoE switch", "router", "modem"],
        symptoms: [
            'NVR veya mobil uygulamada kamera "offline" olarak görünüyor',
            "Kamera IP adresine ping atılamıyor",
            "Kamera web arayüzüne erişilemiyor",
            "Canlı izleme açılmıyor ancak eski kayıtlar mevcut",
            "Kamera LED yanıyor ama ağda görünmüyor",
            "Birden fazla kamera aynı anda offline oldu",
        ],
        likelyCauses: [
            "Ağ bağlantısı kopması (switch, router veya kablo sorunu)",
            "PoE switch güç kesintisi veya port arızası",
            "IP adresi çakışması veya DHCP süresi dolması",
            "Kameranın firmware güncellemesi sonrası ağ kaybı",
            "Yönlendirici veya modem yeniden başlatma sonrası ayar kayması",
            "Kamera donanım arızası (ağ modülü)",
            "Aşırı ısınma nedeniyle kameranın kendini kapatması",
        ],
        quickChecks: [
            "Modem ve router'ın çalıştığından emin olun.",
            "PoE switch'i yeniden başlatın (güç kablosunu çıkar, 10 sn bekle, tak).",
            "Kamera kablosunu switch'te farklı bir porta takın.",
            "Kameranın IP adresine bilgisayardan ping atın (cmd > ping 192.168.x.x).",
            "NVR arayüzünden kamerayı sil ve yeniden ekleyin.",
            "İnternette sorun varsa modem/router'ı yeniden başlatın.",
        ],
        whenToCallService: [
            "Ağ kontrolleri sonrası kamera hâlâ offline görünüyorsa",
            "Tüm kameralar aynı anda offline olduysa (ağ altyapı sorunu olabilir)",
            "Kamera fiziksel olarak sağlam görünüyor ama ağda hiç görünmüyorsa",
            "IP ve ağ ayarlarında değişiklik yapma konusunda emin değilseniz",
            "Sorun düzensiz aralıklarla tekrarlıyorsa",
            "Farklı bir firmanın kurduğu sistemi yönetmede zorluk yaşıyorsanız",
        ],
        whatHappensIfIgnored: [
            "Offline kamera kayıt yapamaz, güvenlik açığı oluşur",
            "Ağ sorunu büyüyerek diğer kameraları da etkileyebilir",
            "Ağ altyapısı sorunlu kalırsa tüm sistem kararsız çalışır",
            "Uzaktan izleme tamamen devre dışı kalabilir",
        ],
        remoteVsOnsite: {
            remoteHelp:
                "IP ayarı, NVR yapılandırması veya port yönlendirme sorunları uzaktan erişimle düzeltilebilir.",
            onsiteRequired:
                "Kablo hasarı, switch arızası veya kamera donanım sorunu için sahada müdahale gerekir.",
        },
        faq: [
            {
                question: "Offline kamera kayıt yapar mı?",
                answer:
                    "Hayır. Offline durumda kamera NVR'a bağlanamadığı için kayıt yapılamaz. Sorunun hızlıca çözülmesi önemlidir.",
            },
            {
                question: "Tüm kameralar aynı anda offline olduysa ne yapmalıyım?",
                answer:
                    "Büyük ihtimalle ağ altyapısı (switch, router veya modem) kaynaklı bir sorun vardır. Önce modem ve switch'i yeniden başlatın.",
            },
            {
                question: "Aynı gün müdahale mümkün mü?",
                answer:
                    "Evet. Özellikle tüm sistem offline ise acil müdahale planlanır.",
            },
        ],
        relatedServiceLinks: [
            { href: "/kamera-ariza-servisi", label: "Kamera Arıza Servisi" },
            { href: "/istanbul/guvenlik-sistemi-teknik-servis", label: "İstanbul Kamera Teknik Servis" },
            { href: "/uzaktan-kamera-izleme", label: "Uzaktan Kamera İzleme" },
            { href: "/bakim-servis-uzaktan-izleme", label: "Bakım ve Uzaktan İzleme" },
        ],
        relatedProblemLinks: [
            { href: "/sorun/kamera-goruntu-gelmiyor", label: "Kamera Görüntü Gelmiyor" },
            { href: "/sorun/kayit-yapilmiyor", label: "Kayıt Yapılmıyor Sorunu" },
            { href: "/sorun/hdd-kayit-cihazi-sorunlari", label: "HDD / Kayıt Cihazı Sorunları" },
        ],
        whatsappMessage:
            "Merhaba, kameram offline görünüyor. Sorunun kontrol edilmesini istiyorum.",
        heroCtaLabel: "Offline sorunu bildirin",
        defaultService: "kamera",
    },

    // ───────────────── 3. Kayıt Yapılmıyor ─────────────────
    {
        slug: "kayit-yapilmiyor",
        title: "Kamera Sistemi Kayıt Yapmıyor | Teknik Servis",
        metaDescription:
            "Güvenlik kamera sisteminiz kayıt yapmıyor mu? HDD, NVR ve yazılım kaynaklı olası nedenler ve çözüm için teknik destek alın.",
        primaryIssue: "Güvenlik Kamerası Kayıt Yapmıyor",
        urgencyLevel: "yüksek",
        affectedSystems: ["NVR", "DVR", "HDD", "IP kamera", "kayıt yazılımı"],
        symptoms: [
            "NVR/DVR kayıt simgesi görünmüyor veya kırmızı",
            "Eski kayıtlara erişilemiyor, kayıt listesi boş",
            "Kayıt takviminde günler boş görünüyor",
            "HDD uyarı ışığı yanıyor veya sesli uyarı veriyor",
            "Kayıt cihazı \"HDD yok\" veya \"disk hatası\" mesajı veriyor",
            "Kameralar canlı izlenebiliyor ama kayıt alınmıyor",
        ],
        likelyCauses: [
            "HDD arızası veya ömrünü tamamlaması",
            "HDD dolu ve üzerine yazma (overwrite) kapalı",
            "NVR/DVR kayıt planlaması yanlış ayarlanmış",
            "HDD kayıt cihazına düzgün takılmamış veya SATA kablosu gevşemiş",
            "Kayıt formatı veya codec ayarı uyumsuz",
            "NVR/DVR firmware hatası",
            "Güç kesintisi sonrası kayıt planlamasının sıfırlanması",
        ],
        quickChecks: [
            "NVR/DVR arayüzünden HDD durumunu kontrol edin (Storage / HDD Management).",
            "Kayıt planlamasını (Record Schedule) kontrol edin — tüm kanallar ve günler aktif mi?",
            "NVR/DVR'ı yeniden başlatın ve HDD'nin tanınıp tanınmadığını kontrol edin.",
            "Manuel kayıt başlatarak kaydın çalışıp çalışmadığını test edin.",
            "HDD kapasitesini kontrol edin — dolu mu ve overwrite açık mı?",
            "SATA ve güç kablolarının kayıt cihazı içinde sıkı oturduğundan emin olun.",
        ],
        whenToCallService: [
            "HDD arızalı çıkıyorsa ve değişim gerekiyorsa",
            "Kayıt ayarlarını düzeltemiyorsanız veya arayüze erişemiyorsanız",
            "Firmware güncelleme veya fabrika ayarlarına dönüş gerekiyorsa",
            "HDD değişimi sonrası formatlama ve yapılandırma gerekiyorsa",
            "Sorun farklı bir firmanın kurduğu sistemde yaşanıyorsa",
            "Kayıt sorunu başka belirtilerle birlikte görünüyorsa (offline, görüntü kaybı)",
        ],
        whatHappensIfIgnored: [
            "Herhangi bir güvenlik olayında kayıt görüntüsü bulunamaz",
            "Yasal veya sigorta süreçlerinde kanıt eksikliği oluşur",
            "HDD hasarı zamanla büyüyerek kayıt cihazına da zarar verebilir",
            "Sistemin güvenilirliği tamamen ortadan kalkar",
        ],
        remoteVsOnsite: {
            remoteHelp:
                "Kayıt planlaması, format ayarı ve firmware kontrolü uzaktan yapılabilir. NVR arayüzüne uzak erişim açıksa sorun uzaktan teşhis edilebilir.",
            onsiteRequired:
                "HDD değişimi, SATA kablo kontrolü veya kayıt cihazı tamiri için sahada müdahale gerekir.",
        },
        faq: [
            {
                question: "Kayıt yapmıyor olduğumu nasıl anlarım?",
                answer:
                    "NVR arayüzünde kayıt takvimini kontrol edin. Eğer son günler boşsa veya kayıt simgesi kapalıysa kayıt yapılmıyor demektir.",
            },
            {
                question: "HDD ne sıklıkla değişir?",
                answer:
                    "Güvenlik serisi HDD'ler ortalama 3–5 yıl dayanır. Yoğun kayıt yapan sistemlerde bu süre kısalabilir.",
            },
            {
                question: "HDD değişimi aynı gün yapılabilir mi?",
                answer:
                    "Stok durumuna ve lokasyona bağlı olarak genellikle aynı gün veya ertesi gün değişim yapılabilir.",
            },
        ],
        relatedServiceLinks: [
            { href: "/kamera-ariza-servisi", label: "Kamera Arıza Servisi" },
            { href: "/istanbul/guvenlik-sistemi-teknik-servis", label: "İstanbul Kamera Teknik Servis" },
            { href: "/kamera-sistemi-bakim-sozlesmesi", label: "Kamera Bakım Sözleşmesi" },
        ],
        relatedProblemLinks: [
            { href: "/sorun/hdd-kayit-cihazi-sorunlari", label: "HDD / Kayıt Cihazı Sorunları" },
            { href: "/sorun/kamera-goruntu-gelmiyor", label: "Kamera Görüntü Gelmiyor" },
            { href: "/sorun/kamera-offline", label: "Kamera Offline Sorunu" },
        ],
        whatsappMessage:
            "Merhaba, kamera sistemim kayıt yapmıyor. Teknik destek almak istiyorum.",
        heroCtaLabel: "Kayıt sorunu bildirin",
        defaultService: "kamera",
    },

    // ───────────────── 4. Telefondan İzleme Sorunu ─────────────────
    {
        slug: "telefondan-izleme-sorunu",
        title: "Telefondan Kamera İzleme Sorunu | Uzaktan Erişim Arızası",
        metaDescription:
            "Telefondan güvenlik kameralarını izleyemiyor musunuz? Mobil uygulama, port ayarı ve ağ sorunları için çözüm rehberi ve teknik destek.",
        primaryIssue: "Telefondan Kamera İzlenemiyor",
        urgencyLevel: "orta",
        affectedSystems: ["mobil uygulama", "NVR", "router", "modem", "P2P bulut servisi"],
        symptoms: [
            "Mobil uygulama \"bağlanılamıyor\" hatası veriyor",
            "Uygulama açılıyor ama kamera görüntüsü gelmiyor",
            "Dışarıdan (Wi-Fi dışında, mobil veri ile) izleme çalışmıyor",
            "Uygulama çok yavaş veya sürekli donuyor",
            "QR kod taratma başarısız oluyor",
            "Daha önce çalışan uygulama artık bağlanmıyor",
        ],
        likelyCauses: [
            "İnternet bağlantısı kesilmiş veya hız düşük",
            "Port yönlendirme (port forwarding) ayarları değişmiş veya modem yenileme sonrası kaybolmuş",
            "P2P (bulut) bağlantı servisi devre dışı kalmış",
            "Mobil uygulama güncellenmemiş veya NVR firmware uyumsuz",
            "NVR'ın internet erişimi engellenmiş (IP veya gateway ayarı hatalı)",
            "ISP tarafından port kısıtlama uygulanmış",
            "Kamera veya NVR kendisi yeniden başlamış ve P2P kaydı kopmuş",
        ],
        quickChecks: [
            "Ev/işyeri internet bağlantısının çalışıp çalışmadığını kontrol edin.",
            "NVR'ın ağa bağlı olduğunu kontrol edin (NVR > Ağ ayarları > durum).",
            "Mobil uygulamayı güncelleyin (App Store / Google Play).",
            "Uygulamada cihazı sil ve QR kod ile yeniden ekleyin.",
            "Wi-Fi yerine mobil veri ile deneyin (veya tersi).",
            "NVR'ı yeniden başlatın ve P2P durumunu kontrol edin.",
        ],
        whenToCallService: [
            "Port yönlendirme veya ağ yapılandırmasında yardım gerekiyorsa",
            "Modem değişikliği sonrası uzaktan erişim kopmuşsa",
            "NVR firmware güncellemesi veya P2P ayarı gerekiyorsa",
            "Uygulama ve NVR uyumluluk sorunu çözülemiyorsa",
            "ISP kaynaklı port kısıtlama durumunda teknik müdahale gerekiyorsa",
        ],
        whatHappensIfIgnored: [
            "İşyeri veya ev dışındayken güvenlik izlemesi yapılamaz",
            "Acil bir durumda görüntüye uzaktan erişilemez",
            "Alarm entegrasyonlu sistemlerde uzaktan doğrulama yapılamaz",
        ],
        remoteVsOnsite: {
            remoteHelp:
                "Çoğu uzaktan erişim sorunu uzaktan destek ile çözülebilir. Port ayarı, P2P yapılandırma, uygulama kurulumu uzaktan yapılabilir.",
            onsiteRequired:
                "Modem/router donanım değişikliği, kablolama sorunu veya NVR donanım arızasında sahada müdahale gerekir.",
        },
        faq: [
            {
                question: "Telefondan izleme neden birdenbire kesildi?",
                answer:
                    "En yaygın neden internet bağlantısı kesintisi veya modem yeniden başlatma sonrası port ayarlarının kaybolmasıdır.",
            },
            {
                question: "Hangi uygulama kullanılmalı?",
                answer:
                    "NVR markanıza göre değişir. Hikvision için iVMS-4500/Hik-Connect, Dahua için gDMSS/DMSS kullanılır.",
            },
            {
                question: "Uzaktan destek ile çözülebilir mi?",
                answer:
                    "Evet. Uzaktan erişim sorunlarının büyük çoğunluğu telefon ve uzaktan bağlantı ile çözülebilir.",
            },
        ],
        relatedServiceLinks: [
            { href: "/uzaktan-kamera-izleme", label: "Uzaktan Kamera İzleme" },
            { href: "/kamera-ariza-servisi", label: "Kamera Arıza Servisi" },
            { href: "/bakim-servis-uzaktan-izleme", label: "Bakım ve Uzaktan İzleme" },
        ],
        relatedProblemLinks: [
            { href: "/sorun/kamera-offline", label: "Kamera Offline Sorunu" },
            { href: "/sorun/kamera-goruntu-gelmiyor", label: "Kamera Görüntü Gelmiyor" },
        ],
        whatsappMessage:
            "Merhaba, telefondan güvenlik kameralarımı izleyemiyorum. Teknik destek almak istiyorum.",
        heroCtaLabel: "Uzaktan erişim desteği alın",
        defaultService: "kamera",
    },

    // ───────────────── 5. HDD / Kayıt Cihazı Sorunları ─────────────────
    {
        slug: "hdd-kayit-cihazi-sorunlari",
        title: "HDD ve Kayıt Cihazı Sorunları | NVR/DVR Arıza Servisi",
        metaDescription:
            "NVR veya DVR kayıt cihazınız arızalı mı? HDD hatası, cihaz açılmama ve disk tanımama sorunları için teknik destek alın.",
        primaryIssue: "HDD veya Kayıt Cihazı Arızası",
        urgencyLevel: "yüksek",
        affectedSystems: ["NVR", "DVR", "HDD", "SATA kabloları", "güç kaynağı"],
        symptoms: [
            "NVR/DVR açılmıyor veya logo ekranında kalıyor",
            "\"HDD Error\" veya \"No Disk\" uyarısı veriyor",
            "Kayıt cihazından tıkırtı veya anormal ses geliyor",
            "HDD çok ısınıyor",
            "Cihaz sürekli kendini yeniden başlatıyor",
            "Eski kayıtlara erişilemiyor, disk formatsız görünüyor",
            "HDD S.M.A.R.T. uyarısı veriyor",
        ],
        likelyCauses: [
            "HDD ömrünü tamamlamış veya sektör hatası oluşmuş",
            "Güç kesintisi sonrası HDD veya NVR hasar almış",
            "SATA veri veya güç kablosu gevşemiş",
            "NVR/DVR güç kaynağı arızası",
            "HDD kapasitesi sisteme uygun değil (desteklenmeyen boyut)",
            "NVR/DVR anakart arızası",
            "Aşırı ısınma nedeniyle bileşen hasarı",
        ],
        quickChecks: [
            "NVR/DVR'ı kapatıp tekrar açın ve HDD tanıma durumunu kontrol edin.",
            "Kayıt cihazından anormal ses gelip gelmediğini dinleyin (tıkırtı = disk arızası).",
            "HDD Management ekranından disk durumunu kontrol edin (Normal / Abnormal / Uninitialized).",
            "Cihazın havalandırma deliklerinin tıkanıp tıkanmadığını kontrol edin.",
            "Güç kablosunun stabil prize bağlı olduğundan emin olun.",
        ],
        whenToCallService: [
            "HDD \"Abnormal\" veya \"Error\" durumunda ise",
            'Kayıt cihazından tıkırtı sesi geliyorsa',
            "NVR/DVR açılmıyorsa veya sürekli yeniden başlıyorsa",
            "HDD değişimi ve formatlama gerekiyorsa",
            "Kayıt cihazı güç kaynağı arızası şüphesi varsa",
            "Mevcut kayıtları kurtarma ihtiyacı varsa",
        ],
        whatHappensIfIgnored: [
            "Kayıt tamamen durur, güvenlik görüntüleri kaydedilmez",
            "Arızalı HDD kayıt cihazına da zarar verebilir",
            "Eski kayıt verilerinin kurtarılma şansı azalır",
            "Sürekli yeniden başlama diğer bileşenleri de yıpratır",
        ],
        remoteVsOnsite: {
            remoteHelp:
                "HDD durumu kontrolü, format komutu ve bazı firmware sorunları uzaktan teşhis edilebilir.",
            onsiteRequired:
                "HDD değişimi, SATA kablo kontrolü, güç kaynağı değişimi ve anakart müdahalesi sahada yapılmalıdır.",
        },
        faq: [
            {
                question: "HDD ne sıklıkla değiştirilmeli?",
                answer:
                    "Güvenlik serisi HDD'ler ortalama 3–5 yıl dayanır. S.M.A.R.T. uyarısı geldiğinde değişim planlanmalıdır.",
            },
            {
                question: "HDD değişiminde mevcut kayıtlar korunabilir mi?",
                answer:
                    "Eski disk fiziksel olarak arızalı değilse kayıtlar okunabilir. Ancak yeni diske kopyalama her durumda mümkün olmayabilir.",
            },
            {
                question: "Hangi marka HDD kullanılmalı?",
                answer:
                    "Güvenlik sistemleri için üretilmiş WD Purple veya Seagate SkyHawk serisi diskler önerilir. Masaüstü diskleri önerilmez.",
            },
        ],
        relatedServiceLinks: [
            { href: "/kamera-ariza-servisi", label: "Kamera Arıza Servisi" },
            { href: "/istanbul/guvenlik-sistemi-teknik-servis", label: "İstanbul Kamera Teknik Servis" },
            { href: "/kamera-sistemi-bakim-sozlesmesi", label: "Kamera Bakım Sözleşmesi" },
        ],
        relatedProblemLinks: [
            { href: "/sorun/kayit-yapilmiyor", label: "Kayıt Yapılmıyor Sorunu" },
            { href: "/sorun/kamera-offline", label: "Kamera Offline Sorunu" },
            { href: "/sorun/kamera-goruntu-gelmiyor", label: "Kamera Görüntü Gelmiyor" },
        ],
        whatsappMessage:
            "Merhaba, kayıt cihazımda (NVR/DVR) veya HDD'de sorun var. Teknik destek almak istiyorum.",
        heroCtaLabel: "HDD / kayıt cihazı desteği alın",
        defaultService: "kamera",
    },

    // ───────────────── 6. Kartlı Geçiş Çalışmıyor ─────────────────
    {
        slug: "kartli-gecis-calismiyor",
        title: "Kartlı Geçiş Sistemi Çalışmıyor | Arıza ve Teknik Destek",
        metaDescription:
            "Kartlı geçiş sistemi çalışmıyor mu? Kart okumama, kapı açılmama ve sistem arızaları için hızlı çözüm ve teknik servis desteği.",
        primaryIssue: "Kartlı Geçiş Sistemi Çalışmıyor",
        urgencyLevel: "yüksek",
        affectedSystems: [
            "kart okuyucu",
            "kontrol ünitesi",
            "elektrikli kilit",
            "manyetik kilit",
            "turnike",
            "yazılım",
        ],
        symptoms: [
            "Kart okutulduğunda kapı açılmıyor",
            "Kart okuyucu hiç tepki vermiyor (LED yanmıyor)",
            "Kart okuyucu hata sesi veriyor ama kapı açılmıyor",
            "Kapı kendiliğinden açılıp kapanıyor",
            "Yeni eklenen kart tanınmıyor",
            "Yazılımda geçiş kayıtları görünmüyor",
            "Turnike kilitli kalıyor veya dönmüyor",
        ],
        likelyCauses: [
            "Kart okuyucu arızası veya güç kaybı",
            "Kontrol ünitesi ile okuyucu arasında iletişim kopması",
            "Elektrikli veya manyetik kilit arızası",
            "Güç kaynağı yetersizliği veya arızası",
            "Kartın yetkisi tanımsız veya süresi dolmuş",
            "Yazılım veya veritabanı bağlantı hatası",
            "Kablo kopması veya konnektör gevşemesi",
        ],
        quickChecks: [
            "Kart okuyucu LED ışığının yanıp yanmadığını kontrol edin.",
            "Farklı bir yetkili kartı deneyin — sorun karta mı sisteme mi özel?",
            "Kontrol ünitesinin güç göstergesini kontrol edin.",
            "Yönetim yazılımından kartın yetki durumunu ve geçerlilik süresini kontrol edin.",
            "Sistemi yeniden başlatın (kontrol ünitesi güç reset).",
            "Kapı kilidi mekanizmasının fiziksel olarak sıkışıp sıkışmadığını kontrol edin.",
        ],
        whenToCallService: [
            "Kart okuyucu hiç tepki vermiyorsa (donanım arızası olabilir)",
            "Kontrol ünitesi veya güç kaynağı arızası şüphesi varsa",
            "Kilit mekanizması bozuk veya kapı mekanizmasında sorun varsa",
            "Yazılım erişimi yoksa veya veritabanı hasarlıysa",
            "Turnike mekanik olarak kilitliyse",
            "Birden fazla geçiş noktasında aynı anda sorun varsa",
        ],
        whatHappensIfIgnored: [
            "Personel veya sakinler binaya erişemez, operasyon aksayabilir",
            "Güvenlik açığı: Kapılar açık kalabilir veya yetkisiz giriş engellenemez",
            "Mesai takibi ve geçiş kayıtları kaybedilebilir",
            "Kilit mekanizması tamamen bozularak kapıda fiziksel hasar oluşabilir",
        ],
        remoteVsOnsite: {
            remoteHelp:
                "Yazılım ayarları, yetki tanımlama ve veritabanı düzeltmeleri uzaktan yapılabilir.",
            onsiteRequired:
                "Okuyucu, kilit, kontrol ünitesi veya kablo arızalarında sahada müdahale gerekir.",
        },
        faq: [
            {
                question: "Kartlı geçiş arızası acil midir?",
                answer:
                    "Evet. Kapıların açılmaması operasyonel aksama yaratır. Güvenlik açığı da söz konusuysa durum acildir.",
            },
            {
                question: "Aynı gün müdahale mümkün mü?",
                answer:
                    "Evet. Acil durumlarda aynı gün teknik ekip yönlendirilir.",
            },
            {
                question: "Başka firmanın kurduğu sisteme bakıyor musunuz?",
                answer:
                    "Evet. Marka ve kurucu firma fark etmez. Arıza kaynağı tespit edilir ve çözüm önerilir.",
            },
        ],
        relatedServiceLinks: [
            { href: "/kartli-gecis-sistemi-kurulumu", label: "Kartlı Geçiş Sistemi Kurulumu" },
      { href: "/istanbul/kartli-gecis-sistemi-kurulumu", label: "İstanbul Kartlı Geçiş Sistemi" },
        ],
        relatedProblemLinks: [
            { href: "/sorun/alarm-arizalari", label: "Alarm Sistemi Arızaları" },
        ],
        whatsappMessage:
            "Merhaba, kartlı geçiş sistemi çalışmıyor. Teknik servis desteği almak istiyorum.",
        heroCtaLabel: "Kartlı geçiş arıza desteği alın",
        defaultService: "kartli-gecis",
    },

    // ───────────────── 7. Alarm Arızaları ─────────────────
    {
        slug: "alarm-arizalari",
        title: "Alarm Sistemi Arızaları | Teknik Servis ve Destek",
        metaDescription:
            "Alarm sisteminiz arızalı mı? Yanlış alarm, sensör hatası, panel sorunu ve iletişim kopması için teknik destek ve çözüm rehberi.",
        primaryIssue: "Alarm Sistemi Arızası",
        urgencyLevel: "yüksek",
        affectedSystems: [
            "alarm paneli",
            "hareket dedektörü (PIR)",
            "manyetik kontak",
            "siren",
            "GSM modülü",
            "tuş takımı",
        ],
        symptoms: [
            "Alarm sebepsiz çalıyor (yanlış alarm)",
            "Alarm kurulmuyor veya devre dışı bırakılamıyor",
            "Panel hata kodu veya uyarı gösteriyor",
            "Sensörler algılama yapmıyor",
            "GSM veya internet bildirimi gelmiyor",
            "Tuş takımı tepki vermiyor veya hata veriyor",
            "Siren çalmıyor veya çok kısa çalıyor",
            "Pil uyarısı sürekli veriyor",
        ],
        likelyCauses: [
            "Sensör arızası veya pil bitimi (kablosuz sistemlerde)",
            "Manyetik kontak kayma veya kapı ayar bozuklukları",
            "Panel ile sensör arasında haberleşme kopması",
            "GSM modülü SIM kart sorunu veya şebeke hatası",
            "Panel yedek batarya ömrünü tamamlamış",
            "Yazılım veya firmware hatası",
            "Kablo hasarı veya konnektör gevşemesi (kablolu sistemlerde)",
            "Böcek veya toz sensör penceresini engelliyor",
        ],
        quickChecks: [
            "Panel ekranında hata kodu veya uyarı mesajını not edin.",
            "Son ne zaman doğru çalıştığını hatırlamaya çalışın.",
            "Sensör pillerini kontrol edin (kablosuz sensörlerde LED yanıp sönebilir).",
            "Manyetik kontakların düzgün hizalandığından emin olun.",
            "Panel üzerinde reset tuşu varsa kısa süreli reset deneyin.",
            "GSM veya internet bağlantısını kontrol edin (SIM bakiye, internet durumu).",
        ],
        whenToCallService: [
            "Yanlış alarmlar tekrarlıyorsa ve sebebi belirlenemiyorsa",
            "Alarm kurulmuyor veya devre dışı bırakılamıyorsa",
            "Panel hata kodu çözümlenemiyor veya arayüze erişilemiyorsa",
            "Birden fazla sensör aynı anda sorun veriyorsa",
            "GSM bildirimi hiç gelmiyorsa",
            "Panel yedek batarya tamamen bitmiş ve değişim gerekiyorsa",
            "Siren veya tuş takımı arızası varsa",
        ],
        whatHappensIfIgnored: [
            "Yanlış alarm tekrarı komşular ve güvenlik birimini rahatsız eder",
            "Gerçek bir tehlike durumunda alarm çalmayabilir",
            "Bildirimsiz sistem güvenlik işlevini tamamen kaybeder",
            "Batarya biten panel elektrik kesildiğinde çalışmaz",
        ],
        remoteVsOnsite: {
            remoteHelp:
                "Panel yazılım ayarları, GSM modül yapılandırması ve bazı hata kodları uzaktan çözülebilir.",
            onsiteRequired:
                "Sensör değişimi, batarya değişimi, kablo tamiri, siren veya tuş takımı değişimi sahada yapılmalıdır.",
        },
        faq: [
            {
                question: "Alarm sık sık yanlış çalıyorsa ne yapmalıyım?",
                answer:
                    "Önce hangi sensörün tetiklediğini panel loglarından belirleyin. Genellikle sensör arızası, yanlış konumlandırma veya pil bitimi nedeniyle olur.",
            },
            {
                question: "Alarm sisteminin bakımı gerekir mi?",
                answer:
                    "Evet. Yılda en az bir kez sensörler, batarya ve iletişim modüllerinin kontrol edilmesi önerilir.",
            },
            {
                question: "Alarm paneline uzaktan erişilebilir mi?",
                answer:
                    "Çoğu modern alarm paneline internet veya GSM üzerinden uzaktan erişilebilir. Bu özellik modele göre değişir.",
            },
        ],
        relatedServiceLinks: [
            { href: "/alarm-sistemi-kurulumu", label: "Alarm Sistemi Kurulumu" },
      { href: "/istanbul/alarm-sistemi-kurulumu", label: "İstanbul Alarm Sistemi" },
            { href: "/yangin-alarm-sistemi-kurulumu", label: "Yangın Alarm Sistemi Kurulumu" },
        ],
        relatedProblemLinks: [
            { href: "/sorun/kartli-gecis-calismiyor", label: "Kartlı Geçiş Çalışmıyor" },
        ],
        whatsappMessage:
            "Merhaba, alarm sistemimde arıza var. Teknik servis desteği almak istiyorum.",
        heroCtaLabel: "Alarm arıza desteği alın",
        defaultService: "alarm",
    },
    {
        slug: "kamera-bulanik-gosteriyor",
        title: "Güvenlik Kamerası Bulanık Gösteriyor | Netlik ve Lens Sorunları",
        metaDescription:
            "Güvenlik kamerası bulanık mı gösteriyor? Lens kirlenmesi, fokus kayması, ışık ve montaj kaynaklı nedenleri öğrenin, teknik servis desteği alın.",
        primaryIssue: "Güvenlik Kamerası Bulanık Gösteriyor",
        urgencyLevel: "orta",
        affectedSystems: ["IP kamera", "analog kamera", "lens", "kamera housing", "NVR"],
        symptoms: [
            "Canlı görüntüde netlik kaybı ve puslu görünüm",
            "Plaka veya yüz detayları seçilemiyor",
            "Gece görüntüsü gündüze göre çok daha bulanık",
            "Kameranın bir bölgesi net, diğer bölgesi flu görünüyor",
            "Yağmur veya nem sonrası görüntü bozuluyor",
            "Zoom yapıldığında görüntü daha da dağınık görünüyor",
        ],
        likelyCauses: [
            "Lens yüzeyinde toz, kir, yağmur izi veya buharlaşma",
            "Manuel fokus ayarının kayması veya lens mekanizması arızası",
            "Kamera camı veya dome kapağında çizik ve matlaşma",
            "Düşük çözünürlük veya yanlış stream ayarı",
            "Yetersiz aydınlatma nedeniyle gece netlik kaybı",
            "Titreşimli montaj yüzünden kameranın mikro hareket yapması",
            "Yanlış kamera açısı veya fazla zoom kullanımı",
        ],
        quickChecks: [
            "Lens ve koruyucu camı mikrofiber bez ile nazikçe temizleyin.",
            "Kamera ayağında sallanma veya gevşeme olup olmadığını kontrol edin.",
            "NVR veya uygulama üzerinden çözünürlük ve stream kalitesini gözden geçirin.",
            "Gündüz ve gece görüntüsünü ayrı ayrı karşılaştırın; sorun sadece gecedeyse IR veya ışık problemi olabilir.",
            "Dome kapaklı kamerada iç kısımda buğulanma olup olmadığını kontrol edin.",
            "Varyfokal lens varsa fokus ve zoom ayarlarının değişip değişmediğini kontrol edin.",
        ],
        whenToCallService: [
            "Temizlik sonrası görüntü hâlâ netleşmiyorsa",
            "Lens veya dome kapakta fiziksel hasar varsa",
            "Kamera montajı titreşimli zeminde ise ve yeniden sabitleme gerekiyorsa",
            "Netlik kaybı tüm kayıt kalitesini etkiliyorsa",
            "Gece ve gündüz farklı fokus problemi yaşanıyorsa",
            "IR yansıması veya housing içi nem problemi varsa",
        ],
        whatHappensIfIgnored: [
            "Yüz, araç ve olay detayları delil niteliğini kaybeder",
            "Yanlış güvenlik hissi oluşur; kamera çalışıyor görünür ama işe yaramaz",
            "Gece saatlerinde kritik alanlar izlenemez hale gelir",
            "Lens veya housing içindeki nem uzun vadede donanım hasarına dönüşebilir",
        ],
        remoteVsOnsite: {
            remoteHelp:
                "Çözünürlük, stream ve bazı görüntü işleme ayarları uzaktan kontrol edilebilir. Sorun yazılım kaynaklıysa uzaktan iyileştirme yapılabilir.",
            onsiteRequired:
                "Lens temizliği, fokus ayarı, dome kapağı değişimi, kamera sabitleme ve fiziksel inceleme için sahada müdahale gerekir.",
        },
        faq: [
            {
                question: "Bulanık görüntü her zaman kamera arızası mı demektir?",
                answer:
                    "Hayır. Çoğu durumda lens kirlenmesi, fokus kayması veya yanlış aydınlatma nedeniyle oluşur. Donanım arızası daha sonra değerlendirilir.",
            },
            {
                question: "Gece daha bulanık göstermesi normal mi?",
                answer:
                    "Kısmen olabilir ancak aşırı netlik kaybı normal değildir. IR aydınlatma, dome yansıması veya düşük ışık ayarları kontrol edilmelidir.",
            },
            {
                question: "Temizlik yapınca garanti bozulur mu?",
                answer:
                    "Dış yüzeyin doğru şekilde temizlenmesi garanti dışı bırakmaz. Kamerayı sökme veya lensi açma işlemi uzman ekip tarafından yapılmalıdır.",
            },
        ],
        relatedServiceLinks: [
            { href: "/kamera-ariza-servisi", label: "Kamera Arıza Servisi" },
            { href: "/istanbul/guvenlik-sistemi-teknik-servis", label: "İstanbul Kamera Teknik Servis" },
            { href: "/kamera-sistemi-bakim-sozlesmesi", label: "Kamera Bakım Sözleşmesi" },
            { href: "/bakim-servis-uzaktan-izleme", label: "Bakım, Servis ve Uzaktan İzleme" },
        ],
        relatedProblemLinks: [
            { href: "/sorun/kamera-goruntu-gelmiyor", label: "Kamera Görüntü Gelmiyor" },
            { href: "/sorun/kamera-gece-gorusu-calismiyor", label: "Kamera Gece Görüşü Çalışmıyor" },
            { href: "/sorun/kamera-offline", label: "Kamera Offline Sorunu" },
        ],
        whatsappMessage:
            "Merhaba, güvenlik kameram bulanık gösteriyor. Teknik destek almak istiyorum.",
        heroCtaLabel: "Netlik sorunu için destek alın",
        defaultService: "kamera",
        image: {
            src: "/images/services/bakim-servis/kamera-sistem-kontrol-monitor-teknisyen.jpg",
            alt: "Teknisyen güvenlik kamera görüntü kalitesini ve netlik ayarlarını kontrol ediyor",
            caption:
                "Bulanık görüntü şikayetlerinde lens, fokus, housing ve kayıt ayarları birlikte kontrol edilir.",
        },
    },
    {
        slug: "kamera-gece-gorusu-calismiyor",
        title: "Kamera Gece Görüşü Çalışmıyor | IR ve Düşük Işık Sorunları",
        metaDescription:
            "Kamera gece görüşü çalışmıyor mu? IR LED, düşük ışık, yansıma ve montaj kaynaklı nedenleri inceleyin, hızlı teknik destek alın.",
        primaryIssue: "Kamera Gece Görüşü Çalışmıyor",
        urgencyLevel: "yüksek",
        affectedSystems: ["IP kamera", "IR LED", "dış ortam kamera", "housing", "NVR"],
        symptoms: [
            "Gündüz görüntü var ama gece ekran çok karanlık",
            "Kamera gece siyah ekran veya morumsu görüntü veriyor",
            "IR ışık açılıyor gibi görünüyor ancak alan aydınlanmıyor",
            "Yakın nesneler parlak, uzak alan tamamen karanlık görünüyor",
            "Kamera önünde beyaz yansıma veya sis efekti oluşuyor",
            "Sadece belirli saatlerde gece kalitesi ciddi düşüyor",
        ],
        likelyCauses: [
            "IR LED arızası veya zayıflaması",
            "Kamera önündeki koruyucu camda kir, buğu veya örümcek ağı olması",
            "IR yansımasına neden olan yanlış montaj açısı",
            "Harici aydınlatma eksikliği veya ters ışık problemi",
            "Gece-gündüz filtresi (ICR) arızası",
            "Dış ortam housing içinde nem oluşması",
            "Yanlış pozlama veya düşük ışık ayarları",
        ],
        quickChecks: [
            "Gece saatinde kamera önündeki cam veya dome yüzeyini kontrol edin.",
            "IR LED'lerin aktif olup olmadığını telefondan veya yakından mor ışık yansımasıyla gözlemleyin.",
            "Kamera önünde ağaç dalı, tabela veya duvar gibi IR yansıması yapan bir engel olup olmadığını kontrol edin.",
            "Kayıt cihazı veya uygulama menüsünden day/night ve exposure ayarlarını gözden geçirin.",
            "Kameranın yakınında sonradan eklenen bir projektör veya ters ışık kaynağı olup olmadığını kontrol edin.",
            "Aynı bölgede başka bir kamera varsa gece görüntüsünü karşılaştırın.",
        ],
        whenToCallService: [
            "IR LED çalışmıyor veya zayıf kalıyorsa",
            "Kamera housing içinde nem ve buğu oluşmuşsa",
            "ICR filtresi takılı kalmış veya mekanik ses çıkarıyorsa",
            "Gece görüntüsü kritik giriş veya çevre hattını kullanılamaz hale getiriyorsa",
            "Montaj açısı değiştirilmeden sorun çözülemiyorsa",
            "Kamera modeli bulunduğu alan için yetersiz kalıyorsa",
        ],
        whatHappensIfIgnored: [
            "Gece saatlerinde çevre güvenliği ciddi biçimde zayıflar",
            "Plaka, yüz ve olay detayı alınamaz",
            "Dış ortam tehditleri en riskli saatlerde görünmez hale gelir",
            "Nem ve dış ortam etkileri kameranın daha büyük arızalara gitmesine yol açabilir",
        ],
        remoteVsOnsite: {
            remoteHelp:
                "Bazı gece modu, pozlama ve görüntü profili ayarları uzaktan optimize edilebilir. Ancak donanım arızası uzaktan çözülemez.",
            onsiteRequired:
                "IR LED kontrolü, kamera temizliği, montaj açısı düzeltmesi ve nem kaynaklı sorunların çözümü için sahada müdahale gerekir.",
        },
        faq: [
            {
                question: "Gece görüşü neden birden bozulur?",
                answer:
                    "En sık nedenler kirlenen dome kapak, bozulan IR LED, değişen ortam ışığı veya housing içine giren nemdir.",
            },
            {
                question: "IR LED çalışıp yine de görüntü kötü olabilir mi?",
                answer:
                    "Evet. IR yansıması, yanlış açı ve kirli koruyucu cam nedeniyle LED aktif olsa bile görüntü kullanılamaz hale gelebilir.",
            },
            {
                question: "Bu sorun bakım eksikliğinden kaynaklanabilir mi?",
                answer:
                    "Evet. Dış ortam kameralarında periyodik temizlik ve açı kontrolü yapılmazsa gece performansı hızlı düşer.",
            },
        ],
        relatedServiceLinks: [
            { href: "/kamera-ariza-servisi", label: "Kamera Arıza Servisi" },
            { href: "/kamera-sistemi-bakim-sozlesmesi", label: "Kamera Bakım Sözleşmesi" },
            { href: "/istanbul/guvenlik-sistemi-teknik-servis", label: "İstanbul Kamera Teknik Servis" },
            { href: "/bakim-servis-uzaktan-izleme", label: "Bakım, Servis ve Uzaktan İzleme" },
        ],
        relatedProblemLinks: [
            { href: "/sorun/kamera-bulanik-gosteriyor", label: "Kamera Bulanık Gösteriyor" },
            { href: "/sorun/kamera-goruntu-gelmiyor", label: "Kamera Görüntü Gelmiyor" },
            { href: "/sorun/kayit-yapilmiyor", label: "Kayıt Yapılmıyor Sorunu" },
        ],
        whatsappMessage:
            "Merhaba, kameramın gece görüşü çalışmıyor. Teknik destek almak istiyorum.",
        heroCtaLabel: "Gece görüşü desteği alın",
        defaultService: "kamera",
        image: {
            src: "/images/landing/ip-kamera-gece-gorus.png",
            alt: "Gece görüş modunda çalışan dış ortam IP güvenlik kamerası",
            caption:
                "Gece görüşü sorunlarında IR aydınlatma, kamera açısı ve dış ortam koşulları birlikte değerlendirilmelidir.",
        },
    },
    {
        slug: "kamera-hareket-kaydi-calismiyor",
        title: "Kamera Hareket Kaydı Çalışmıyor | Motion Detection Sorunları",
        metaDescription:
            "Güvenlik kamerasında hareket kaydı çalışmıyor mu? Motion detection, kayıt planı ve alarm kuralları için çözüm adımlarını inceleyin.",
        primaryIssue: "Kamera Hareket Kaydı Çalışmıyor",
        urgencyLevel: "yüksek",
        affectedSystems: ["NVR", "DVR", "IP kamera", "motion detection", "mobil bildirim"],
        symptoms: [
            "Kamera sürekli kayıt alıyor ama hareket kaydı oluşturmuyor",
            "Hareket anında kayıt veya olay etiketi görünmüyor",
            "Mobil uygulamaya hareket bildirimi gelmiyor",
            "Bazı kameralarda motion çalışıyor, bazılarında çalışmıyor",
            "Belirli saatlerde olay kaydı hiç oluşmuyor",
            "NVR arayüzünde motion detection açık görünmesine rağmen kayıt tetiklenmiyor",
        ],
        likelyCauses: [
            "Motion detection alanı yanlış çizilmiş veya pasif bırakılmış",
            "Kayıt planında olay kaydı saatleri tanımlı değil",
            "Kamera ve NVR arasında olay entegrasyonu eksik",
            "Hareket hassasiyeti çok düşük ya da çok yüksek ayarlanmış",
            "Firmware veya uygulama güncellemesi sonrası kural kaybı",
            "Bildirim veya e-posta aksiyonu açık ama kayıt aksiyonu kapalı",
            "HDD veya kayıt cihazı sorunu nedeniyle olay kaydı yazılamıyor",
        ],
        quickChecks: [
            "NVR menüsünden motion detection bölgesinin doğru alanı kapsadığını kontrol edin.",
            "Kayıt planında event veya motion kayıt saatlerinin aktif olup olmadığını kontrol edin.",
            "Hareket hassasiyetini orta seviyeye çekip kısa test yapın.",
            "Mobil bildirim açık olsa bile kayıt aksiyonunun ayrıca seçili olduğundan emin olun.",
            "Kamera saat ve zaman dilimi ayarlarının doğru olduğunu kontrol edin.",
            "Deneme amaçlı hareket oluşturup olay listesine düşüp düşmediğini test edin.",
        ],
        whenToCallService: [
            "Tüm motion ayarları doğru görünmesine rağmen olay kaydı oluşmuyorsa",
            "Bazı kamera modelleri NVR ile uyumsuz çalışıyorsa",
            "Firmware güncellemesi sonrası motion kuralları bozulduysa",
            "Bildirim ve olay kaydı birlikte yönetilemiyorsa",
            "Sistem çok sık yanlış tetikleme yapıyor veya hiç tetiklemiyorsa",
            "Olay kaydı operasyonel takip için kritikse",
        ],
        whatHappensIfIgnored: [
            "Gerekli anları hızlı bulmak zorlaşır, olay inceleme süresi uzar",
            "Depolama gereksiz sürekli kayıtla dolar",
            "Bildirim akışı bozulduğu için anlık müdahale fırsatı kaçabilir",
            "Personel, depo veya çevre güvenliği için kritik olaylar gözden kaçabilir",
        ],
        remoteVsOnsite: {
            remoteHelp:
                "Motion alanı, hassasiyet, olay kaydı planı ve bildirim aksiyonları çoğu zaman uzaktan düzenlenebilir.",
            onsiteRequired:
                "Yanlış kamera açısı, sahada yoğun ışık değişimi veya model uyumsuzluğu gibi durumlarda yerinde inceleme gerekir.",
        },
        faq: [
            {
                question: "Motion detection açık olduğu halde neden kayıt almıyor?",
                answer:
                    "Çünkü motion tespiti ile motion kaydı farklı ayarlardır. Olay tetiklense bile kayıt aksiyonu kapalı olabilir.",
            },
            {
                question: "Bu sorun uzaktan çözülebilir mi?",
                answer:
                    "Çoğu durumda evet. NVR arayüzüne erişim varsa ayarlar ve kural zinciri uzaktan kontrol edilebilir.",
            },
            {
                question: "Sürekli kayıt varken motion kaydı neden önemli?",
                answer:
                    "Olayları hızlı filtrelemek, bildirim üretmek ve gereksiz kayıt yükünü azaltmak için motion senaryoları kritiktir.",
            },
        ],
        relatedServiceLinks: [
            { href: "/uzaktan-kamera-izleme", label: "Uzaktan Kamera İzleme" },
            { href: "/kamera-sistemi-bakim-sozlesmesi", label: "Kamera Bakım Sözleşmesi" },
            { href: "/bakim-servis-uzaktan-izleme", label: "Bakım, Servis ve Uzaktan İzleme" },
            { href: "/kamera-ariza-servisi", label: "Kamera Arıza Servisi" },
        ],
        relatedProblemLinks: [
            { href: "/sorun/kayit-yapilmiyor", label: "Kayıt Yapılmıyor Sorunu" },
            { href: "/sorun/telefondan-izleme-sorunu", label: "Telefondan İzleme Sorunu" },
            { href: "/sorun/hdd-kayit-cihazi-sorunlari", label: "HDD / Kayıt Cihazı Sorunları" },
        ],
        whatsappMessage:
            "Merhaba, güvenlik kameramda hareket kaydı çalışmıyor. Teknik destek almak istiyorum.",
        heroCtaLabel: "Hareket kaydı desteği alın",
        defaultService: "kamera",
        image: {
            src: "/images/services/bakim-servis/guvenlik-kamera-sistemi-izleme-merkezi.jpg",
            alt: "Güvenlik kamera sistemi ekranlarında olay ve hareket kayıtları izleniyor",
            caption:
                "Hareket kaydı sorunlarında olay kuralları, bildirimler ve kayıt planı birlikte test edilir.",
        },
    },
    {
        slug: "kart-okuyucu-kapi-acmiyor",
        title: "Kart Okuyucu Kapıyı Açmıyor | Geçiş Kontrol Arızası",
        metaDescription:
            "Kart okutuluyor ama kapı açılmıyor mu? Kart okuyucu, kilit, röle ve yetki problemleri için çözüm adımlarını inceleyin.",
        primaryIssue: "Kart Okuyucu Kapıyı Açmıyor",
        urgencyLevel: "yüksek",
        affectedSystems: ["kart okuyucu", "elektrikli kilit", "manyetik kilit", "kontrol ünitesi", "kapı butonu"],
        symptoms: [
            "Kart okutulduğunda ses geliyor ama kapı açılmıyor",
            "Okuyucu yeşil ışık veriyor ancak kilit serbest kalmıyor",
            "Kapı bazen açılıyor, bazen açılmıyor",
            "İçeriden çıkış butonu da düzensiz çalışıyor",
            "Yazılımda yetki var görünüyor ama geçiş gerçekleşmiyor",
            "Turnike veya kapı kilidi fiziksel olarak takılı kalıyor",
        ],
        likelyCauses: [
            "Elektrikli veya manyetik kilit arızası",
            "Kilit besleme voltajının yetersiz kalması",
            "Kontrol ünitesi röle çıkışında sorun olması",
            "Kart yetkisi tanımlı olsa da zaman planının engellemesi",
            "Kapı dili, karşılık veya menteşe ayarında mekanik sıkışma",
            "Okuyucu ile panel arasındaki kablolama sorunu",
            "Yangın butonu veya exit butonu hattında kopukluk",
        ],
        quickChecks: [
            "Aynı kartı farklı bir kapıda deneyin; sorun karta mı kapıya mı özel kontrol edin.",
            "Kapıyı içeriden açan buton çalışıyor mu test edin.",
            "Okuyucuda onay sesi ve ışığı olup olmadığını gözlemleyin.",
            "Kapı kilidi üzerinde fiziksel sıkışma, yamulma veya karşılık kaçıklığı var mı kontrol edin.",
            "Yazılım üzerinden kartın yetki saatlerini ve kapı ilişkisini kontrol edin.",
            "Elektrik kesintisi veya zayıf adaptör şüphesi varsa besleme hattını kontrol edin.",
        ],
        whenToCallService: [
            "Okuyucu tepki verdiği halde kapı hiç açılmıyorsa",
            "Kilit mekanizması ses yapıyor ama bırakmıyorsa",
            "Kapı mekanik olarak sürtüyor veya karşılık ayarı bozuksa",
            "Röle, güç kaynağı veya panel arızası şüphesi varsa",
            "Birden fazla geçiş noktasında aynı problem görülüyorsa",
            "İşyeri veya site operasyonu bu arıza nedeniyle aksıyorsa",
        ],
        whatHappensIfIgnored: [
            "Personel ve ziyaretçi geçişi aksar, operasyonel kayıp oluşur",
            "Kapı zorlanırsa kilit ve menteşe hasarı büyüyebilir",
            "Yetkisiz geçişleri yönetmek zorlaşır",
            "Manuel çözüm kullanımı güvenlik disiplinini bozar",
        ],
        remoteVsOnsite: {
            remoteHelp:
                "Yetki, zaman planı ve bazı panel ayarları uzaktan kontrol edilebilir. Yazılımsal engeller uzaktan temizlenebilir.",
            onsiteRequired:
                "Kilit, röle, kapı ayarı, güç kaynağı ve kablo arızalarında sahada fiziksel müdahale gerekir.",
        },
        faq: [
            {
                question: "Kart okunup kapı açılmıyorsa sorun okuyucuda mıdır?",
                answer:
                    "Her zaman değil. Çoğu durumda sorun kilit, röle çıkışı, besleme hattı veya kapı mekanizmasında olur.",
            },
            {
                question: "Kapı bazen açılıp bazen açılmıyorsa neyi gösterir?",
                answer:
                    "Bu durum genellikle zayıf besleme, mekanik sürtme veya gevşek bağlantı kaynaklı arızalara işaret eder.",
            },
            {
                question: "Acil müdahale gerekir mi?",
                answer:
                    "Geçiş noktası yoğun kullanılıyorsa veya güvenlik kapısı açılmıyorsa evet, aynı gün müdahale önerilir.",
            },
        ],
        relatedServiceLinks: [
            { href: "/kartli-gecis-sistemi-kurulumu", label: "Kartlı Geçiş Sistemi Kurulumu" },
            { href: "/istanbul/kartli-gecis-sistemi-kurulumu", label: "İstanbul Kartlı Geçiş Sistemi" },
            { href: "/isyeri-guvenlik-sistemi", label: "İşyeri Güvenlik Sistemi" },
            { href: "/apartman-site-guvenlik-sistemi", label: "Apartman ve Site Güvenlik Sistemi" },
        ],
        relatedProblemLinks: [
            { href: "/sorun/kartli-gecis-calismiyor", label: "Kartlı Geçiş Sistemi Çalışmıyor" },
            { href: "/sorun/alarm-arizalari", label: "Alarm Sistemi Arızaları" },
        ],
        whatsappMessage:
            "Merhaba, kart okuyucu kapıyı açmıyor. Teknik servis desteği almak istiyorum.",
        heroCtaLabel: "Kapı açılmama sorunu için destek alın",
        defaultService: "kartli-gecis",
        image: {
            src: "/images/services/bakim-servis/kartli-gecis-sistemi-turnike-giris.jpg",
            alt: "Kartlı geçiş sistemi giriş noktasında okuyucu ve kapı kilidi kullanımı",
            caption:
                "Kart okuyucu onay verse bile kapı açılmıyorsa kilit, röle ve yetki zinciri birlikte incelenmelidir.",
        },
    },
    {
        slug: "yangin-alarm-paneli-uyari-veriyor",
        title: "Yangın Alarm Paneli Uyarı Veriyor | Dedektör ve Hat Arızaları",
        metaDescription:
            "Yangın alarm paneli sürekli uyarı mı veriyor? Dedektör, hat kopukluğu, batarya ve panel arızaları için çözüm adımlarını inceleyin.",
        primaryIssue: "Yangın Alarm Paneli Uyarı Veriyor",
        urgencyLevel: "yüksek",
        affectedSystems: ["yangın alarm paneli", "duman dedektörü", "siren hattı", "yangın butonu", "akü"],
        symptoms: [
            "Panel sürekli arıza veya fault uyarısı veriyor",
            "Dedektör bölgesi hata olarak görünüyor",
            "Panel bip sesi kesilmiyor",
            "Siren hattı veya loop hattı arızası uyarısı çıkıyor",
            "Elektrik kesintisi sonrası batarya uyarısı geliyor",
            "Sistem normal görünse de panel ekranında hata kodu kalıyor",
        ],
        likelyCauses: [
            "Dedektör arızası veya kirlenmesi",
            "Loop hattında kopukluk, kısa devre veya gevşek bağlantı",
            "Panel aküsünün zayıflaması veya ömrünü tamamlaması",
            "Siren hattı direnci veya sonlandırma problemi",
            "Yangın butonunun kırılması veya tetikte kalması",
            "Panel kartında iletişim veya besleme arızası",
            "Periyodik bakım yapılmadığı için biriken toz ve çevresel etkiler",
        ],
        quickChecks: [
            "Panel ekranındaki hata kodunu ve etkilenen bölgeyi not edin.",
            "Uyarının elektrik kesintisi, tadilat veya temizlik sonrası başlayıp başlamadığını kontrol edin.",
            "Dedektörlerin bulunduğu bölgede toz, boya veya fiziksel müdahale olup olmadığını inceleyin.",
            "Panel akü uyarısı varsa elektrik kesintisi sonrası voltajın normale dönüp dönmediğini gözlemleyin.",
            "Susturma yapıldıktan sonra uyarının ne kadar sürede tekrarlandığını not alın.",
            "Yangın butonlarından birinin fiziksel olarak basılı kalmadığını kontrol edin.",
        ],
        whenToCallService: [
            "Panel sürekli arıza veriyor ve kod anlamı net değilse",
            "Loop veya siren hattı arızası görünüyorsa",
            "Akü, dedektör veya panel kartı değişimi gerekiyorsa",
            "Gerçek alarm ile arıza uyarısı birbirine karışıyorsa",
            "Tesis güvenliği veya yasal uygunluk riske giriyorsa",
            "Bakım kayıtları eksik ve sistem uzun süredir kontrol edilmediyse",
        ],
        whatHappensIfIgnored: [
            "Gerçek yangın anında sistemin doğru tepki verme ihtimali düşer",
            "Sahte arıza alışkanlığı oluşur, ekipler gerçek riski ciddiye almayabilir",
            "Yasal denetimlerde uygunsuzluk ortaya çıkabilir",
            "Panel akü ve hat arızaları büyüyerek daha maliyetli müdahalelere dönüşebilir",
        ],
        remoteVsOnsite: {
            remoteHelp:
                "Bazı panel logları ve hata yorumları uzaktan değerlendirilebilir. Ancak yangın alarm sistemlerinde uzaktan teşhis tek başına yeterli değildir.",
            onsiteRequired:
                "Dedektör, akü, hat ve panel kontrolleri için yerinde ölçüm ve test yapılmalıdır. Yangın sistemlerinde sahada doğrulama esastır.",
        },
        faq: [
            {
                question: "Yangın alarm paneli arıza veriyorsa sistem tamamen devre dışı mı kalır?",
                answer:
                    "Her zaman tamamen durmaz ancak koruma seviyesi düşer. Arıza türüne göre bazı dedektörler veya bildirim hatları çalışmayabilir.",
            },
            {
                question: "Panel uyarısını susturmak sorunu çözer mi?",
                answer:
                    "Hayır. Susturma sadece sesi geçici olarak keser. Alttaki arıza sebebi çözülmedikçe panel yeniden uyarı verir.",
            },
            {
                question: "Yangın alarm sisteminde bakım zorunlu mu?",
                answer:
                    "Evet. Periyodik bakım hem güvenlik hem de mevzuat açısından kritik önemdedir. Dedektör, akü ve hat testleri düzenli yapılmalıdır.",
            },
        ],
        relatedServiceLinks: [
            { href: "/yangin-alarm-sistemi-kurulumu", label: "Yangın Alarm Sistemi Kurulumu" },
            { href: "/alarm-sistemi-kurulumu", label: "Alarm Sistemi Kurulumu" },
            { href: "/fabrika-depo-guvenlik-sistemi", label: "Fabrika ve Depo Güvenlik Sistemi" },
            { href: "/bakim-servis-uzaktan-izleme", label: "Bakım, Servis ve Uzaktan İzleme" },
        ],
        relatedProblemLinks: [
            { href: "/sorun/alarm-arizalari", label: "Alarm Sistemi Arızaları" },
            { href: "/sorun/kartli-gecis-calismiyor", label: "Kartlı Geçiş Çalışmıyor" },
        ],
        whatsappMessage:
            "Merhaba, yangın alarm panelim sürekli uyarı veriyor. Teknik destek almak istiyorum.",
        heroCtaLabel: "Yangın alarm desteği alın",
        defaultService: "alarm",
        image: {
            src: "/images/services/bakim-servis/yangin-alarm-paneli-kontrol-sistemi.jpg",
            alt: "Teknisyen yangın alarm paneli üzerinde hata ve uyarı kontrolleri yapıyor",
            caption:
                "Yangın alarm paneli uyarılarında panel logu, dedektör hattı ve akü durumu birlikte kontrol edilmelidir.",
        },
    },
];

// ---------------------------------------------------------------------------
// Helper exports
// ---------------------------------------------------------------------------

export function getAllProblemPages(): ProblemPageData[] {
    return problemPages;
}

export function getProblemPageBySlug(slug: string): ProblemPageData | undefined {
    return problemPages.find((p) => p.slug === slug);
}

export function getAllProblemSlugs(): string[] {
    return problemPages.map((p) => p.slug);
}
