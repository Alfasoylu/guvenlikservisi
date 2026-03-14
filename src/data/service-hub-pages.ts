import type { ServiceHubPageData } from "@/components/templates/ServiceHubTemplate";
import { cities } from "@/data/cities";

interface ServiceHubPageConfig {
  metadataTitle: string;
  metadataDescription: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  data: ServiceHubPageData;
}

function getCityName(slug: string) {
  return cities.find((city) => city.slug === slug)?.name || slug;
}

function buildCityServiceLinks(serviceSlug: string, citySlugs: string[]) {
  return citySlugs.map((citySlug) => ({
    href: `/${citySlug}/${serviceSlug}`,
    label: `${getCityName(citySlug)} ${serviceSlug
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ")}`,
  }));
}

function buildCityLinks(serviceSlug: string, citySlugs: string[]) {
  return citySlugs.map((citySlug) => ({
    href: `/${citySlug}/${serviceSlug}`,
    label: getCityName(citySlug),
  }));
}

const priorityCities = ["istanbul", "ankara", "izmir"] as const;
const supportCities = ["istanbul", "ankara", "izmir", "bursa", "kocaeli"] as const;

export const serviceHubPageConfigs: Record<string, ServiceHubPageConfig> = {
  "kamera-ariza-servisi": {
    metadataTitle: "Kamera Arıza Servisi | Görüntü, Kayıt ve Offline Kamera Sorunları",
    metadataDescription:
      "Görüntü yok, kayıt alınmıyor, kamera offline veya NVR/HDD hatası varsa profesyonel kamera arıza servisi desteği alın. Hızlı teşhis, yerinde müdahale ve sistem sürekliliği odaklı servis.",
    data: {
      slug: "kamera-ariza-servisi",
      title: "Kamera Arıza Servisi",
      subtitle:
        "Görüntü yok, kayıt alınmıyor, kamera offline veya uzaktan erişim çalışmıyorsa hızlı teşhis ve doğru müdahale ile sistemi yeniden çalışır hale getiriyoruz.",
      description:
        "Kamera arıza servisi, kritik anda kayıt alınamayan ve güvenlik açığı oluşturan sistemleri tekrar sağlıklı çalışır hale getirmek için verilir.\n\nSahada en sık karşılaşılan problemler görüntü kaybı, kayıt cihazının disk hatası vermesi, PoE besleme sorunları, ağ kopmaları, uzaktan erişim kesintisi ve yanlış yapılandırma kaynaklı kayıt problemleridir.\n\nAmacımız parçayı rastgele değiştirmek değil; arızanın kaynağını ayırıp kalıcı çözüm üretmektir. Gerekirse yerinde müdahale, gerekirse bakım veya teknik servis planı ile sistemi yeniden güvenilir hale getiriyoruz.",
      heroBadge: "Acil müdahale • Hızlı geri dönüş",
      heroHighlights: [
        "Görüntü yok, kayıt yok ve offline kamera teşhisi",
        "NVR, DVR, HDD ve PoE kaynaklı arızaların ayrıştırılması",
        "Yerinde müdahale veya uzaktan ön değerlendirme",
        "Sistem tekrar açıldıktan sonra sürdürülebilirlik önerisi",
      ],
      features: [
        "Görüntü yok ve kayıt yok arıza tespiti",
        "Offline kamera ve ağ bağlantı problemi analizi",
        "NVR / DVR kayıt cihazı hata kontrolü",
        "Hard disk, adaptör ve PoE besleme testleri",
        "Uzaktan erişim ve mobil izleme problemi çözümü",
        "Yerinde servis veya bakım sözleşmesine geçiş yönlendirmesi",
      ],
      segments: [
        {
          title: "Site ve Apartman Sistemleri",
          content:
            "Ortak alan kamerası, giriş hattı veya otopark kayıt sistemi arıza verdiğinde yönetime hızlı geri dönüş gerekir. Arıza servisi bu tip kesintilerde kritik değer üretir.",
          href: "/apartman-site-guvenlik-sistemi",
        },
        {
          title: "Mağaza ve İşletme Sistemleri",
          content:
            "Kasa önü, giriş hattı ve depo kameralarında kayıt kesintisi yaşanıyorsa kayıp ve itiraz yönetimi doğrudan etkilenir. Hızlı servis gerekir.",
          href: "/isyeri-guvenlik-sistemi",
        },
        {
          title: "Fabrika ve Depo Kayıt Altyapısı",
          content:
            "Yükleme alanı, çevre hat veya vardiya izleme kamerası arızalandığında yalnızca cihaz değil operasyon görünürlüğü kaybolur. Doğru teşhis şarttır.",
          href: "/fabrika-depo-guvenlik-sistemi",
        },
      ],
      authoritySection: {
        title: "Kamera Arızasında Hızlı Teşhis Neden Kritik?",
        paragraphs: [
          "Kamera arızasında asıl risk cihazın bozulması değil, kaydın kesilmesi ve sorunun fark edilmeden uzamasıdır.",
          "Görüntü yok, kayıt alınmıyor veya kamera offline gibi durumlarda yanlış parça değişimi hem maliyeti büyütür hem de servis süresini uzatır. Önce kaynağı netleştirmek gerekir.",
          "Doğru arıza servisi yaklaşımı; disk, kayıt cihazı, ağ, besleme ve kamera tarafını birlikte test ederek kalıcı çözüm üretir.",
        ],
        noteTitle: "Acil kamera arıza kaydı bırakın",
        noteText:
          "Belirtileri kısa şekilde paylaşın; yerinde müdahale mi, uzaktan ön teşhis mi yoksa bakım planı mı gerektiğini hızlıca netleştirelim.",
      },
      faq: [
        {
          question: "Kamera görüntü vermiyorsa sorun kamerada mı olur?",
          answer:
            "Her zaman değil. Adaptör, PoE switch, ağ hattı, kayıt cihazı, HDD veya yapılandırma problemi de görüntü kaybına neden olabilir. Bu yüzden teşhis cihaz bazlı değil sistem bazlı yapılmalıdır.",
        },
        {
          question: "Kayıt cihazı çalışıyor ama kayıt yoksa ne yapıyorsunuz?",
          answer:
            "Disk sağlığı, kayıt planı, kanal durumu, hata logları ve depolama ayarları kontrol edilir. Sorun yazılım, disk ya da kanal tarafında olabilir.",
        },
        {
          question: "Arıza servisi ile bakım sözleşmesi aynı şey mi?",
          answer:
            "Hayır. Arıza servisi mevcut problemi çözmeye odaklanır. Bakım sözleşmesi ise benzer arızaların büyümeden fark edilmesini sağlar. Sık arıza yaşayan sistemlerde bakım planı önerilir.",
        },
        {
          question: "Yerinde servis mi veriyorsunuz?",
          answer:
            "Sorunun tipine göre uzaktan ön değerlendirme ile başlıyoruz. Gerekli olduğunda yerinde servis planlıyoruz.",
        },
        {
          question: "Hangi şehirlerde kamera arıza servisi veriyorsunuz?",
          answer:
            "Hizmet verdiğimiz şehirlerde kamera arıza servisi sağlıyoruz. Şehir bazlı destek detaylarını ilgili yerel hizmet sayfalarından da inceleyebilirsiniz.",
        },
      ],
      relatedPages: [
        {
          title: "Bakım, Servis ve Uzaktan İzleme",
          href: "/bakim-servis-uzaktan-izleme",
          description: "Arıza sonrası sistemi daha sürdürülebilir hale getiren bakım ve servis modelini inceleyin.",
        },
        {
          title: "Kamera Sistemi Bakım Sözleşmesi",
          href: "/kamera-sistemi-bakim-sozlesmesi",
          description: "Sık tekrar eden arızaları azaltmak için bakım sözleşmesi modeline geçin.",
        },
        {
          title: "Uzaktan Kamera İzleme",
          href: "/uzaktan-kamera-izleme",
          description: "Sistem çevrim içi mi, kayıt akışı sağlıklı mı sorularını uzaktan takip eden çözümü görün.",
        },
      ],
      defaultService: "kamera",
      ctaTitle: "Kamera Arıza Servisi Talebi Bırakın",
      ctaSubtitle:
        "Görüntü, kayıt veya bağlantı problemi yaşıyorsanız formu doldurun ya da hemen arayın. Sorunun kaynağını hızlıca netleştirelim.",
      authorityBeforeFaq: {
        title: "Şehir Bazlı Kamera Arıza Servisi Sayfaları",
        description:
          "Yerel destek ve şehir içi hizmet detaylarını aşağıdaki yerel sayfalardan inceleyebilirsiniz.",
        links: buildCityServiceLinks("kamera-ariza-servisi", [...priorityCities]),
      },
      authorityAfterFaq: {
        title: "Kamera Arıza Servisi Hizmeti Verilen Şehirler",
        links: buildCityLinks("kamera-ariza-servisi", [...supportCities]),
      },
    },
  },
  "kamera-sistemi-bakim-sozlesmesi": {
    metadataTitle: "Kamera Sistemi Bakım Sözleşmesi | Periyodik Kontrol ve Kayıt Sürekliliği",
    metadataDescription:
      "Kamera sistemi bakım sözleşmesi ile kayıt sürekliliği, cihaz sağlığı ve arıza riskini kontrol altına alın. Site, fabrika, depo ve işletmeler için periyodik bakım planları.",
    data: {
      slug: "kamera-sistemi-bakim-sozlesmesi",
      title: "Kamera Sistemi Bakım Sözleşmesi",
      subtitle:
        "Periyodik kontrol, kayıt sağlığı takibi ve arıza riskini azaltan kamera sistemi bakım sözleşmesi ile sisteminizi kritik anda çalışır tutun.",
      description:
        "Kamera sistemi bakım sözleşmesi, kayıt cihazı ve kameraların sadece bugün çalışmasını değil, aylar sonra da güvenilir kalmasını hedefler.\n\nBakım yapılmayan sistemlerde lens kirlenir, disk hataları büyür, kayıt süreleri düşer, uzaktan erişim ayarları bozulur ve kullanıcılar bunu çoğu zaman olay anına kadar fark etmez.\n\nBu hizmette periyodik saha kontrolü, kayıt sağlık takibi, cihaz durumunun raporlanması ve gerektiğinde öncelikli servis akışı birlikte planlanır. Özellikle site yönetimleri, fabrikalar, depolar ve çok kameralı yapılarda en güçlü model bakım sözleşmesidir.",
      heroBadge: "Periyodik bakım • Süreklilik odaklı",
      heroHighlights: [
        "Kayıt sürekliliği ve disk sağlığı takibi",
        "Lens, açı ve cihaz performans kontrolleri",
        "Arıza büyümeden önleyici bakım yaklaşımı",
        "Sözleşmeli müşterilere öncelikli servis akışı",
      ],
      features: [
        "Periyodik saha bakım planı",
        "Kayıt cihazı, disk ve kanal kontrolü",
        "Kamera açı, netlik ve gece görüş performans testi",
        "Uzaktan erişim ve kullanıcı yetki kontrolü",
        "Bakım raporu ve risk listesi oluşturma",
        "Teknik servis ve uzaktan izleme ile entegre çalışma",
      ],
      segments: [
        {
          title: "Site ve Toplu Konut Sistemleri",
          content:
            "Ortak alan, giriş ve otopark kameralarında bakım yapılmadığında yönetim şikayetleri ve kayıt kaybı artar. Sözleşmeli bakım daha güvenli bir modeldir.",
          href: "/apartman-site-guvenlik-sistemi",
        },
        {
          title: "Fabrika ve Depo Sistemleri",
          content:
            "Yükleme alanı, çevre hat ve üretim takibinde kayıt sürekliliği kritik olduğu için bakım sözleşmesi arıza riskini ciddi şekilde düşürür.",
          href: "/fabrika-depo-guvenlik-sistemi",
        },
        {
          title: "Çok Noktalı İşletmeler",
          content:
            "Birden fazla şubede kamera sistemi varsa bakım disiplini ve merkezi kontrol ihtiyacı artar. Sözleşmeli model burada daha verimlidir.",
          href: "/isyeri-guvenlik-sistemi",
        },
      ],
      authoritySection: {
        title: "Bakım Sözleşmesi Neden Sadece Servis Çağrısından Daha Değerlidir?",
        paragraphs: [
          "Tek seferlik servis, problem çıktıktan sonra çözüm üretir. Bakım sözleşmesi ise problem büyümeden kayıt ve cihaz sağlığını korur.",
          "Özellikle çok kameralı yapılarda kayıt kaybı çoğu zaman fark edilmez. Periyodik bakım disiplini olmadan sistem görünürde açık ama fiilen riskli olabilir.",
          "Sözleşmeli bakım modeli, arıza riskini azaltır, müdahale süresini kısaltır ve teknik geçmişi kayıt altına alır.",
        ],
        noteTitle: "Bakım kapsamını birlikte netleştirelim",
        noteText:
          "Kamera sayısı, lokasyon yapısı ve beklediğiniz servis disiplinini paylaşın; size uygun bakım sözleşmesi çerçevesini çıkaralım.",
      },
      faq: [
        {
          question: "Kamera bakım sözleşmesi hangi sistemler için uygundur?",
          answer:
            "Kamera sayısı arttıkça ve kayıt kritik hale geldikçe bakım sözleşmesi daha değerli olur. Site, fabrika, depo, plaza ve çok noktalı işletmeler en net faydayı görür.",
        },
        {
          question: "Bakım sözleşmesinde neler kontrol edilir?",
          answer:
            "Kamera görüntüsü, açı, lens durumu, kayıt cihazı, disk sağlığı, kayıt süresi, uzaktan erişim ve temel ağ bağlantıları düzenli olarak kontrol edilir.",
        },
        {
          question: "Başka firmanın kurduğu sistemi bakım kapsamına alıyor musunuz?",
          answer:
            "Evet. Önce sistem keşfi ve envanter kontrolü yapıyoruz. Sonra bakım kapsamını ve riskleri netleştiriyoruz.",
        },
        {
          question: "Bakım sözleşmesi teknik servis yerine geçer mi?",
          answer:
            "Hayır. Bakım sözleşmesi arıza riskini azaltır ve servis sürecini düzenler. Cihaz arızalandığında gerektiğinde teknik servis veya arıza müdahalesi yine devreye girer.",
        },
        {
          question: "Uzaktan izleme ile birlikte çalışır mı?",
          answer:
            "Evet. En güçlü model bakım sözleşmesi, uzaktan izleme ve gerektiğinde teknik servis akışının birlikte yürütülmesidir.",
        },
      ],
      relatedPages: [
        {
          title: "Bakım, Servis ve Uzaktan İzleme",
          href: "/bakim-servis-uzaktan-izleme",
          description: "Bakım sözleşmesini daha geniş servis ve uzaktan takip modeliyle birlikte görün.",
        },
        {
          title: "Uzaktan Kamera İzleme",
          href: "/uzaktan-kamera-izleme",
          description: "Kayıt akışı ve çevrim içi durumu uzaktan takip eden tamamlayıcı çözümü inceleyin.",
        },
        {
          title: "Kamera Arıza Servisi",
          href: "/kamera-ariza-servisi",
          description: "Sorun oluştuğunda hızlı müdahale gerektiren arıza servisi akışını görün.",
        },
      ],
      defaultService: "bakim-servis",
      ctaTitle: "Kamera Bakım Sözleşmesi Teklifi Alın",
      ctaSubtitle:
        "Kamera sistemi bakım planınızı, servis önceliğinizi ve uzaktan destek ihtiyacınızı birlikte netleştirelim.",
      authorityBeforeFaq: {
        title: "Şehir Bazlı Kamera Bakım Sözleşmesi Sayfaları",
        description:
          "Yerel keşif ve şehir içi bakım planlaması için aşağıdaki sayfalardan detay alabilirsiniz.",
        links: buildCityServiceLinks("kamera-sistemi-bakim-sozlesmesi", [...priorityCities]),
      },
      authorityAfterFaq: {
        title: "Kamera Bakım Sözleşmesi Hizmeti Verilen Şehirler",
        links: buildCityLinks("kamera-sistemi-bakim-sozlesmesi", [...supportCities]),
      },
    },
  },
  "uzaktan-kamera-izleme": {
    metadataTitle: "Uzaktan Kamera İzleme | Merkezi Takip, Mobil Erişim ve Süreklilik",
    metadataDescription:
      "Uzaktan kamera izleme hizmeti ile sistem çevrim içi mi, kayıt akışı sağlıklı mı ve çok lokasyonlu takip nasıl yönetilir sorularını merkezi olarak kontrol edin.",
    data: {
      slug: "uzaktan-kamera-izleme",
      title: "Uzaktan Kamera İzleme",
      subtitle:
        "Tek lokasyon veya çoklu saha fark etmeksizin kamera sistemlerinizi merkezi görünürlük, mobil erişim ve kayıt sürekliliği odağıyla takip edin.",
      description:
        "Uzaktan kamera izleme hizmeti, yalnızca telefondan görüntü açmak değil; sistemin gerçekten çevrim içi olup olmadığını, kayıt akışının sağlıklı ilerleyip ilerlemediğini ve çok lokasyonlu yapılarda operasyon görünürlüğünü kontrol etmektir.\n\nÖzellikle site yönetimleri, fabrikalar, depolar ve zincir mağazalarda tek tek sahaya gitmeden temel sistem durumu hakkında görünürlük sağlamak ciddi operasyon avantajı üretir.\n\nBu hizmet bakım sözleşmesi ve teknik servis akışıyla birlikte kurgulandığında, kesintiler daha erken fark edilir ve arıza büyümeden müdahale imkanı oluşur.",
      heroBadge: "Merkezi takip • Çok lokasyon desteği",
      heroHighlights: [
        "Merkezi görünürlük ve mobil erişim planlaması",
        "Kayıt akışı ve temel çevrim içi durum takibi",
        "Çok noktalı yapılarda yönetimi kolaylaştıran yapı",
        "Bakım ve teknik servis akışıyla birlikte çalışma",
      ],
      features: [
        "Mobil ve merkezi erişim yapısının kurulması",
        "Kayıt akışı ve kamera çevrim içi durumunun takibi",
        "Kullanıcı yetki ve erişim düzenlemeleri",
        "Çok lokasyonlu yapıların merkezi görünürlüğü",
        "Bakım sözleşmesi ile entegre süreklilik modeli",
        "Servis gerektiren durumların erken ayrıştırılması",
      ],
      segments: [
        {
          title: "Site Yönetimleri",
          content:
            "Giriş, otopark ve ortak alan kameralarını yönetime tek ekranda ve uzaktan izleme disipliniyle sunmak için ideal modeldir.",
          href: "/apartman-site-guvenlik-sistemi",
        },
        {
          title: "Fabrika ve Depolar",
          content:
            "Yükleme alanı, çevre hat ve kritik operasyon bölgelerinin uzaktan görünürlüğü üretim ve lojistik kontrolünü güçlendirir.",
          href: "/fabrika-depo-guvenlik-sistemi",
        },
        {
          title: "Çok Noktalı İşletmeler",
          content:
            "Birden fazla şubeyi tek tek takip etmek yerine standart bir uzaktan izleme akışı kurmak daha sürdürülebilir bir model oluşturur.",
          href: "/isyeri-guvenlik-sistemi",
        },
      ],
      authoritySection: {
        title: "Uzaktan İzleme Neden Sadece Mobil Uygulama Kurulumu Değildir?",
        paragraphs: [
          "Gerçek uzaktan izleme değeri, sistemin çevrim içi durumu, kayıt akışı ve kullanıcı erişiminin düzenli şekilde yönetilmesinde ortaya çıkar.",
          "Çok lokasyonlu yapılarda amaç sadece görüntü açmak değil; hangi saha çalışıyor, hangi saha risk üretiyor sorusuna daha hızlı cevap vermektir.",
          "Bakım ve teknik servis desteğiyle birlikte kurgulanan uzaktan izleme modeli, kesintilerin büyümeden fark edilmesini sağlar.",
        ],
        noteTitle: "Uzaktan izleme yapısını netleştirelim",
        noteText:
          "Tek lokasyon mu yönetiyorsunuz, birden fazla saha mı takip ediyorsunuz? Kapsamı paylaşın; merkezi görünürlük modelini birlikte çıkaralım.",
      },
      faq: [
        {
          question: "Uzaktan kamera izleme ile telefondan izleme aynı şey mi?",
          answer:
            "Hayır. Telefonda görüntü açmak sadece kullanıcı erişimidir. Uzaktan izleme ise kayıt akışı, çevrim içi durum ve çok lokasyon görünürlüğünü de kapsayan daha geniş bir modeldir.",
        },
        {
          question: "Bu hizmet hangi müşteriler için daha uygundur?",
          answer:
            "Site yönetimleri, fabrikalar, depolar ve birden fazla lokasyonu olan işletmeler en yüksek faydayı görür. Çünkü merkezi görünürlük operasyonel avantaj üretir.",
        },
        {
          question: "Uzaktan izleme bakım hizmeti yerine geçer mi?",
          answer:
            "Hayır. Uzaktan izleme bakımın yerine geçmez; bakım ve servis süreçlerini daha erken uyarı ve görünürlük ile destekler.",
        },
        {
          question: "Çok lokasyonlu yapı yönetebilir misiniz?",
          answer:
            "Evet. Sistem mimarisi uygunsa farklı lokasyonların merkezi görünürlüğü için uygun yapı planlanabilir.",
        },
        {
          question: "Kayıt cihazı arızasını uzaktan fark edebilir miyiz?",
          answer:
            "Bazı belirtiler uzaktan fark edilebilir, ancak nihai teşhis için teknik kontrol gerekebilir. Bu yüzden uzaktan izleme teknik servis akışıyla birlikte daha güçlü çalışır.",
        },
      ],
      relatedPages: [
        {
          title: "Bakım, Servis ve Uzaktan İzleme",
          href: "/bakim-servis-uzaktan-izleme",
          description: "Uzaktan izlemeyi bakım ve servis disipliniyle birlikte değerlendiren ana sayfayı görün.",
        },
        {
          title: "Kamera Sistemi Bakım Sözleşmesi",
          href: "/kamera-sistemi-bakim-sozlesmesi",
          description: "Uzaktan takibi düzenli saha bakım modeliyle tamamlayan sözleşme yapısını inceleyin.",
        },
        {
          title: "Kamera Arıza Servisi",
          href: "/kamera-ariza-servisi",
          description: "Sistem kesildiğinde devreye girecek hızlı arıza müdahalesi sayfasına geçin.",
        },
      ],
      defaultService: "bakim-servis",
      ctaTitle: "Uzaktan Kamera İzleme Teklifi Alın",
      ctaSubtitle:
        "Merkezi izleme, mobil erişim ve sistem sürekliliği ihtiyacınızı paylaşın; size uygun yapıyı netleştirelim.",
      authorityBeforeFaq: {
        title: "Şehir Bazlı Uzaktan Kamera İzleme Sayfaları",
        description:
          "Yerel operasyon ve şehir bazlı destek detayları için aşağıdaki sayfalardan devam edebilirsiniz.",
        links: buildCityServiceLinks("uzaktan-kamera-izleme", [...priorityCities]),
      },
      authorityAfterFaq: {
        title: "Uzaktan Kamera İzleme Hizmeti Verilen Şehirler",
        links: buildCityLinks("uzaktan-kamera-izleme", [...supportCities]),
      },
    },
  },
  "kartli-gecis-sistemi-kurulumu": {
    metadataTitle: "Kartlı Geçiş Sistemi Kurulumu | Erişim Kontrol ve Turnike Çözümleri",
    metadataDescription:
      "Kartlı geçiş sistemi kurulumu ile ofis, site, plaza ve tesis girişlerini kontrollü hale getirin. RFID, biyometrik okuyucu, turnike ve kapı kontrol çözümleri.",
    data: {
      slug: "kartli-gecis-sistemi-kurulumu",
      title: "Kartlı Geçiş Sistemi Kurulumu",
      subtitle:
        "RFID kart, biyometrik okuyucu, turnike ve kapı kontrol altyapısı ile giriş-çıkışları kayıt altına alın, yetkisiz erişimi azaltın.",
      description:
        "Kartlı geçiş sistemi kurulumu; yalnızca kapı açma donanımı değil, erişim yetkisi, personel akışı, ziyaretçi disiplini ve raporlama altyapısının birlikte planlanmasıdır.\n\nOfisler, plazalar, siteler, üretim alanları ve lojistik tesislerde aynı ihtiyaç yoktur. Bu yüzden okuyucu tipi, turnike yapısı, kapı kilidi ve yazılım tarafı kullanım senaryosuna göre belirlenir.\n\nDoğru kurulum yapıldığında sadece güvenlik artmaz; giriş disiplini, personel hareketlerinin görünürlüğü ve çok alanlı erişim yönetimi de iyileşir.",
      heroBadge: "Erişim kontrolü • Raporlama odaklı",
      heroHighlights: [
        "RFID, biyometrik ve turnike seçenekleri",
        "Kapı, turnike ve yetki senaryosunun birlikte planlanması",
        "Ofis, plaza, site ve tesis yapısına göre kurulum",
        "Yazılım, kullanıcı ve raporlama altyapısının devreye alınması",
      ],
      features: [
        "RFID kart ve okuyucu kurulumu",
        "Parmak izi ve yüz tanıma seçenekleri",
        "Kapı kilidi, turnike ve erişim senaryosu planlaması",
        "Personel ve ziyaretçi yetki yönetimi",
        "Giriş-çıkış kayıtları ve raporlama altyapısı",
        "Kamera ve diğer güvenlik sistemleriyle birlikte çalışma",
      ],
      segments: [
        {
          title: "Plaza ve Kurumsal Ofisler",
          content:
            "Kat bazlı yetki, personel geçiş disiplini ve profesyonel giriş deneyimi bekleyen yapılarda kartlı geçiş sistemi temel altyapılardan biridir.",
          href: "/isyeri-guvenlik-sistemi",
        },
        {
          title: "Site ve Toplu Konutlar",
          content:
            "Site girişleri, blok kapıları, otopark ve ortak alanlarda sakin ve ziyaretçi yönetimini daha kontrollü hale getirir.",
          href: "/apartman-site-guvenlik-sistemi",
        },
        {
          title: "Fabrika ve Depolar",
          content:
            "Personel yoğunluğu, vardiyalı giriş ve güvenlik kontrollü alanlar nedeniyle erişim yönetimi üretim tarafında doğrudan operasyon konusudur.",
          href: "/fabrika-depo-guvenlik-sistemi",
        },
      ],
      authoritySection: {
        title: "Kartlı Geçişte Doğru Kurulum Neden Kritik?",
        paragraphs: [
          "Kartlı geçişte sorun çoğu zaman okuyucudan değil, yanlış kapı kurgusu, eksik yetki planı veya zayıf yazılım senaryosundan çıkar.",
          "Sadece cihaz takmak, yoğun giriş çıkışlı yapılarda uzun vadede yetmez. Kim, hangi kapıdan, hangi saatlerde geçecek sorusu en baştan doğru planlanmalıdır.",
          "Kapı, turnike, okuyucu ve raporlama tarafı birlikte kurgulandığında hem güvenlik hem günlük kullanım akışı daha verimli hale gelir.",
        ],
        noteTitle: "Erişim kontrol yapınızı paylaşın",
        noteText:
          "Kapı sayısı, kullanıcı tipi ve turnike ihtiyacını iletin; size uygun kartlı geçiş yapısını birlikte çıkaralım.",
      },
      faq: [
        {
          question: "Kartlı geçiş sistemi sadece ofisler için mi uygundur?",
          answer:
            "Hayır. Ofis, plaza, site, fabrika, depo ve kontrollü giriş ihtiyacı olan birçok yapıda kullanılabilir. Yapı tipine göre okuyucu ve kapı senaryosu değişir.",
        },
        {
          question: "Turnike şart mı?",
          answer:
            "Her projede değil. Bazı yapılarda sadece kapı okuyucusu yeterlidir, bazı yoğun girişli tesislerde turnike daha doğru çözümdür.",
        },
        {
          question: "Mevcut kapılara uyarlanabilir mi?",
          answer:
            "Çoğu projede mevcut kapı ve kilit yapısı değerlendirilebilir. Yerinde keşifte uygunluk netleşir.",
        },
        {
          question: "Kamera sistemi ile birlikte çalışır mı?",
          answer:
            "Evet. Giriş noktalarında kamera ve geçiş sistemi birlikte planlandığında olay doğrulama ve kayıt disiplini daha güçlü olur.",
        },
        {
          question: "Raporlama ve kullanıcı yönetimi var mı?",
          answer:
            "Evet. Projenin kapsamına göre kullanıcı tanımı, yetki kurgusu ve giriş kayıtlarının raporlanması mümkündür.",
        },
      ],
      relatedPages: [
        {
          title: "İşyeri Güvenlik Sistemi",
          href: "/isyeri-guvenlik-sistemi",
          description: "Kartlı geçişi kamera ve alarm altyapısıyla birlikte planlanan işyeri çözümlerini görün.",
        },
        {
          title: "Apartman ve Site Güvenlik Sistemi",
          href: "/apartman-site-guvenlik-sistemi",
          description: "Site girişleri ve ortak alan yönetimiyle birlikte çalışan kartlı geçiş senaryolarını inceleyin.",
        },
        {
          title: "Fabrika ve Depo Güvenlik Sistemi",
          href: "/fabrika-depo-guvenlik-sistemi",
          description: "Tesis giriş kontrolünü çevre güvenliği ve kamera altyapısıyla birlikte değerlendirin.",
        },
      ],
      defaultService: "kartli-gecis",
      ctaTitle: "Kartlı Geçiş Sistemi Teklifi Alın",
      ctaSubtitle:
        "Kapı, turnike ve yetki yönetimi ihtiyacınızı paylaşın; size uygun erişim kontrol çözümünü planlayalım.",
      authorityBeforeFaq: {
        title: "Şehir Bazlı Kartlı Geçiş Sistemi Sayfaları",
        description:
          "Yerel uygulama ve şehir içi keşif detayları için aşağıdaki sayfalardan ilerleyebilirsiniz.",
        links: buildCityServiceLinks("kartli-gecis-sistemi-kurulumu", [...priorityCities]),
      },
      authorityAfterFaq: {
        title: "Kartlı Geçiş Sistemi Hizmeti Verilen Şehirler",
        links: buildCityLinks("kartli-gecis-sistemi-kurulumu", [...supportCities]),
      },
    },
  },
};

export function getServiceHubPageConfig(serviceSlug: string) {
  return serviceHubPageConfigs[serviceSlug];
}
