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
    metadataTitle: "Kamera Arıza Servisi | Güvenlik Kamera Arızaları İçin Teknik Destek",
    metadataDescription:
      "Kamera görüntü yok, kayıt alınmıyor, cihaz offline, HDD arızası veya uzaktan erişim problemi yaşıyorsanız kamera arıza servisi için teknik inceleme ve çözüm sürecini başlatın.",
    data: {
      slug: "kamera-ariza-servisi",
      title: "Kamera Arıza Servisi",
      detailSectionTitle: "Hizmet Kapsamı",
      subtitle:
        "Güvenlik kamera sistemlerinde görüntü kesilmesi, kayıt kaybı, cihazın çevrimdışı görünmesi, gece görüş sorunları veya uzaktan izleme problemleri iş güvenliği ve kayıt sürekliliği açısından risk oluşturur. Kamera arıza servisi sayfamız, bu sorunları hızlı teşhis edip doğru müdahale planı oluşturmak isteyen işletmeler ve mülk yöneticileri için hazırlandı.",
      description:
        "Kamera arıza servisi sürecinde önce arızanın kaynağı ayrıştırılır. Sorunun kamerada mı, kayıt cihazında mı, diskte mi, güç beslemesinde mi, ağ tarafında mı yoksa kullanıcı erişim ayarlarında mı olduğu netleştirilir.\n\nGerekli olduğunda cihaz, bağlantı, kayıt, görüntü ve uzaktan erişim katmanları tek tek kontrol edilerek çözüm planı oluşturulur.\n\nAmaç yalnızca geçici çalıştırma değil, arızanın tekrar etmesini azaltacak şekilde sistemin sağlıklı çalışmasını geri getirmektir.",
      heroBadge: "Teknik teşhis • Doğru müdahale planı",
      heroHighlights: [
        "Görüntü kesilmesi ve kayıt kaybı yaşayan sistemler için teknik inceleme",
        "Offline cihaz, HDD arızası ve uzaktan erişim sorunlarının ayrıştırılması",
        "Yerinde veya uzaktan ilk teşhis ile müdahale planının netleştirilmesi",
        "Sistemin tekrar arıza verme riskini azaltan servis yaklaşımı",
      ],
      featureSectionTitle: "Hangi Sorunları Çözer",
      features: [
        "Kamera görüntüsü gelmiyor",
        "Kayıt cihazı kayıt almıyor",
        "Kamera offline görünüyor",
        "HDD arızası veya kayıt süresi problemi",
        "PoE besleme ve bağlantı sorunları",
        "Gece görüş / IR performans sorunları",
        "Mobil uygulamadan erişim problemleri",
        "Ağ, IP çakışması veya görüntü donması",
      ],
      segmentsSectionTitle: "Kimler İçin Uygun",
      segmentsSectionDescription:
        "Bu hizmeti farklı yapılarda benzer teknik mantıkla planlıyoruz. Aşağıdaki senaryolar, kamera arızasının operasyon ve güvenlik açısından en çok risk oluşturduğu kullanım alanlarını gösterir.",
      segments: [
        {
          title: "İşyerinde görüntü kesintisi yaşayan firmalar",
          content:
            "Mağaza, ofis ve işletmelerde görüntü veya kayıt kesintisi yaşandığında olay inceleme, giriş takibi ve operasyon güvenliği doğrudan etkilenir.",
          href: "/isyeri-guvenlik-sistemi",
        },
        {
          title: "Apartman ve site yönetimleri",
          content:
            "Ortak alan, giriş ve otopark kameralarında oluşan arızalar yönetim açısından hızlı geri dönüş ve doğru servis planı gerektirir.",
          href: "/apartman-site-guvenlik-sistemi",
        },
        {
          title: "Depo, fabrika ve üretim sahaları",
          content:
            "Yükleme alanı, çevre hatları ve vardiya takibinde kullanılan kameralarda oluşan arızalar yalnızca cihaz sorunu değil, görünürlük kaybı anlamına gelir.",
          href: "/fabrika-depo-guvenlik-sistemi",
        },
      ],
      authoritySection: {
        title: "Neden Bekletilmemeli",
        paragraphs: [
          "Kamera arızaları bekledikçe yalnızca teknik problem olarak kalmaz. Kayıt boşluğu oluşur, olay inceleme kabiliyeti zayıflar, giriş-çıkış kontrolü düşer ve işletme tarafında güvenlik açığı büyür.",
          "Özellikle depo, fabrika, mağaza ve site yönetimlerinde birkaç günlük kayıt kaybı bile sonradan telafi edilemeyen risk yaratabilir.",
          "Bu yüzden sorun belirtileri oluştuğunda hızlı teşhis ve doğru müdahale planı ile ilerlemek, geçici çalıştırmadan daha değerlidir.",
        ],
        noteTitle: "Müdahale yolunu birlikte netleştirelim",
        noteText:
          "Kamera sisteminizde görüntü, kayıt veya erişim sorunu yaşıyorsanız form bırakın ya da hemen arayın. Sorunun kaynağını netleştirip en doğru müdahale yolunu birlikte belirleyelim.",
      },
      processSection: {
        title: "Süreç Nasıl İlerler",
        steps: [
          { step: 1, title: "Sorun belirtileri alınır", description: "Görüntü, kayıt, offline cihaz veya erişim problemi gibi belirtiler netleştirilir." },
          { step: 2, title: "Sistem yapısı belirlenir", description: "Cihaz tipi, kayıt altyapısı ve arızanın görüldüğü katman netleştirilir." },
          { step: 3, title: "İlk teşhis yapılır", description: "Yerinde veya uzaktan ön kontrol ile arıza noktası ayrıştırılır." },
          { step: 4, title: "Müdahale ve test tamamlanır", description: "Gerekli işlem, parça ihtiyacı ve tekrar arızayı azaltacak öneriler sunulur." },
        ],
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
      relatedPagesDescription:
        "Kamera arıza servisi tek başına yeterli olmayabilir. Sorunun tekrar etmesini azaltmak için bakım sözleşmesi, uzaktan izleme ve kurulum revizyonu hizmetleriyle birlikte değerlendirmek daha doğru olabilir.",
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
      ctaTitle: "Kamera Arıza Servisi İçin Hemen İletişime Geçin",
      ctaSubtitle:
        "Kamera sisteminizde görüntü, kayıt veya erişim sorunu yaşıyorsanız form bırakın ya da hemen arayın. Sorunun kaynağını netleştirip en doğru müdahale yolunu birlikte belirleyelim.",
      authorityBeforeFaq: {
        title: "Şehir Bazlı Kamera Arıza Servisi Sayfaları",
        description:
          "Bu hizmeti farklı şehirlerde de aynı servis mantığıyla planlıyoruz. Bulunduğunuz lokasyona göre ilgili şehir sayfasından yerel kapsamı inceleyebilirsiniz.",
        links: buildCityServiceLinks("kamera-ariza-servisi", [...priorityCities]),
      },
      authorityAfterFaq: {
        title: "Kamera Arıza Servisi Hizmeti Verilen Şehirler",
        links: buildCityLinks("kamera-ariza-servisi", [...supportCities]),
      },
    },
  },
  "kamera-sistemi-bakim-sozlesmesi": {
    metadataTitle: "Kamera Sistemi Bakım Sözleşmesi | Kayıt Sürekliliği ve Periyodik Kontrol",
    metadataDescription:
      "Kamera sistemi bakım sözleşmesi ile kayıt sürekliliğini, cihaz sağlığını ve uzaktan izleme performansını koruyun. İşletmeler, siteler, depolar ve fabrikalar için bakım planı oluşturun.",
    data: {
      slug: "kamera-sistemi-bakim-sozlesmesi",
      title: "Kamera Sistemi Bakım Sözleşmesi",
      detailSectionTitle: "Hizmet Kapsamı",
      subtitle:
        "Kamera sistemi kurulu olsa bile düzenli bakım yapılmayan yapılarda zamanla kayıt kaybı, disk sorunları, kör nokta artışı, bağlantı zayıflığı ve uzaktan erişim problemleri oluşur. Kamera sistemi bakım sözleşmesi, bu riskleri arıza çıkmadan önce azaltmak isteyen işletmeler ve yöneticiler için daha kontrollü bir hizmet modelidir.",
      description:
        "Bakım sözleşmesi kapsamında sistemin temel sağlık kontrolleri, kayıt kontrolü, disk ve cihaz durum takibi, bağlantı gözden geçirmesi, görüntü kalitesi değerlendirmesi ve kritik noktalarda işlev testi planlanır.\n\nHedef, sorun çıktığında telaşla müdahale etmek yerine sistemin daha düzenli, öngörülebilir ve kayıt sürekliliğini koruyan bir yapıda çalışmasını sağlamaktır.",
      heroBadge: "Periyodik kontrol • Süreklilik odaklı",
      heroHighlights: [
        "Kayıt sürekliliğini arıza çıkmadan önce korumaya odaklanan bakım düzeni",
        "Disk, cihaz, bağlantı ve görüntü kalitesinin birlikte değerlendirilmesi",
        "Uzaktan erişim ve izleme performansındaki bozulmaların erken fark edilmesi",
        "Süreklilik isteyen yapılara uygun daha kontrollü hizmet modeli",
      ],
      featureSectionTitle: "Hangi Sorunları Çözer",
      features: [
        "Fark edilmeyen kayıt kesintileri",
        "Zayıflayan disk ve depolama performansı",
        "Zamanla kayma yapan görüntüleme açıları",
        "Toz, bağlantı ve güç kaynaklı performans düşüşü",
        "Uzaktan erişimde düzensiz bağlantı sorunları",
        "Arıza çıkana kadar fark edilmeyen sistem zafiyetleri",
      ],
      segmentsSectionTitle: "Kimler İçin Uygun",
      segmentsSectionDescription:
        "Bakım sözleşmesi ihtiyacı özellikle çok kameralı, kayıt sürekliliği önemli ve operasyonu aksatmaması gereken yapılarda öne çıkar. Aşağıdaki senaryolar buna en çok ihtiyaç duyan kullanım alanlarını özetler.",
      segments: [
        {
          title: "Site ve apartman yönetimleri",
          content:
            "Ortak alan, giriş ve otopark kameralarında kayıt sürekliliği ve arıza takibi düzenli bakım olmadan sürdürülebilir kalmaz.",
          href: "/apartman-site-guvenlik-sistemi",
        },
        {
          title: "Fabrika ve depo işletmeleri",
          content:
            "Yükleme alanı, çevre hat ve üretim takibinde kullanılan sistemlerde kayıt kaybı ve performans düşüşü doğrudan operasyon riskine dönüşür.",
          href: "/fabrika-depo-guvenlik-sistemi",
        },
        {
          title: "Ofis, plaza ve iş merkezi yönetimleri",
          content:
            "Çok kameralı iş merkezlerinde bakım düzeni kurulmadığında sorunlar ancak ihtiyaç anında fark edilir ve müdahale maliyeti büyür.",
          href: "/isyeri-guvenlik-sistemi",
        },
      ],
      authoritySection: {
        title: "Neden Bekletilmemeli",
        paragraphs: [
          "Kamera sistemi çoğu yerde çalışıyor sanılıyor ama kayıt kaybı veya görüntü sorunu ancak ihtiyaç anında fark ediliyor. Bu da iş işten geçtikten sonra ortaya çıkıyor.",
          "Düzenli bakım, tek seferlik satış mantığından daha değerlidir çünkü sistemin gerçekten çalışır halde kalmasını hedefler.",
          "Bakım planı geciktikçe küçük performans düşüşleri birikir, arıza ihtimali artar ve kritik anda güven kaybı oluşur.",
        ],
        noteTitle: "Bakım düzenini şimdi kuralım",
        noteText:
          "Kamera sisteminiz kurulu ama bakım düzeni yoksa şimdi iletişime geçin. Sisteminizi arıza çıkmadan önce kontrol altına almak için uygun bakım planını birlikte netleştirelim.",
      },
      processSection: {
        title: "Süreç Nasıl İlerler",
        steps: [
          { step: 1, title: "Envanter çıkarılır", description: "Mevcut kamera, kayıt cihazı, depolama ve bağlantı yapısı netleştirilir." },
          { step: 2, title: "Risk alanları belirlenir", description: "Kayıt sürekliliğini etkileyen kritik zafiyetler ve bakım öncelikleri ayrıştırılır." },
          { step: 3, title: "Bakım planı oluşturulur", description: "Kontrol sıklığı, müdahale çerçevesi ve gerekiyorsa revizyon önerileri belirlenir." },
          { step: 4, title: "Süreklilik düzeni kurulur", description: "Periyodik bakım akışı, takip mantığı ve servis entegrasyonu netleştirilir." },
        ],
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
      relatedPagesDescription:
        "Bakım sözleşmesi çoğu zaman kamera arıza servisi, uzaktan kamera izleme ve teknik servis hizmetleriyle birlikte daha verimli sonuç verir.",
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
      ctaTitle: "Kamera Bakım Sözleşmesi İçin Plan Oluşturalım",
      ctaSubtitle:
        "Kamera sisteminiz kurulu ama bakım düzeni yoksa şimdi iletişime geçin. Sisteminizi arıza çıkmadan önce kontrol altına almak için uygun bakım planını birlikte netleştirelim.",
      authorityBeforeFaq: {
        title: "Şehir Bazlı Kamera Bakım Sözleşmesi Sayfaları",
        description:
          "Bakım sözleşmesi ihtiyacı şehirden bağımsız aynı mantıkla ortaya çıkar, ancak saha koşulları ve yapı tipi yerel planlamayı etkileyebilir. İlgili şehir sayfalarından lokal kapsamı inceleyebilirsiniz.",
        links: buildCityServiceLinks("kamera-sistemi-bakim-sozlesmesi", [...priorityCities]),
      },
      authorityAfterFaq: {
        title: "Kamera Bakım Sözleşmesi Hizmeti Verilen Şehirler",
        links: buildCityLinks("kamera-sistemi-bakim-sozlesmesi", [...supportCities]),
      },
    },
  },
  "uzaktan-kamera-izleme": {
    metadataTitle: "Uzaktan Kamera İzleme | Mobil Erişim ve Merkezden Takip Çözümleri",
    metadataDescription:
      "Uzaktan kamera izleme ile işyeri, depo, site ve tesislerinizi telefondan veya merkezden takip edin. Erişim, kayıt kontrolü ve sistem sürekliliği için doğru kurgu oluşturun.",
    data: {
      slug: "uzaktan-kamera-izleme",
      title: "Uzaktan Kamera İzleme",
      detailSectionTitle: "Hizmet Kapsamı",
      subtitle:
        "Kamera sisteminin kurulmuş olması tek başına yeterli değildir. Asıl ihtiyaç çoğu zaman sahayı uzaktan takip edebilmek, kritik alanları anlık görmek, kayıt sürekliliğini kontrol etmek ve sistemden hızlıca haberdar olmaktır. Uzaktan kamera izleme hizmeti, bu ihtiyacı daha düzenli ve kontrollü hale getirmek için planlanır.",
      description:
        "Uzaktan kamera izleme hizmetinde erişim altyapısı, kullanıcı yetkileri, mobil veya masaüstü görüntüleme yapısı, kayıt kontrol mantığı ve bağlantı istikrarı birlikte ele alınır.\n\nAmaç yalnızca telefondan görüntü açmak değil; sistemin güvenli, düzenli ve kullanıcının gerçekten işine yarayan bir izleme deneyimi sunmasını sağlamaktır.",
      heroBadge: "Mobil erişim • Merkezden takip",
      heroHighlights: [
        "Sahayı uzaktan takip etmeyi kolaylaştıran erişim ve kullanıcı kurgusu",
        "Kayıt alınıp alınmadığını kontrol etmeye yardımcı izleme mantığı",
        "Şube, saha ve kritik alan takibinde görünürlüğü artıran yapı",
        "Bakım ve revizyon önerileriyle desteklenebilen daha kontrollü kullanım",
      ],
      featureSectionTitle: "Hangi Sorunları Çözer",
      features: [
        "Kameralara dışarıdan erişememe",
        "Mobil uygulamada kopuk izleme deneyimi",
        "Şube veya saha takibinde kontrol zayıflığı",
        "Kayıt alınıp alınmadığını uzaktan görememe",
        "Kritik alanlarda anlık görünürlük eksikliği",
        "Yönetim ve saha arasında bilgi gecikmesi",
      ],
      segmentsSectionTitle: "Kimler İçin Uygun",
      segmentsSectionDescription:
        "Uzaktan izleme ihtiyacı en çok birden fazla alanı kontrol etmek, gece ve vardiya düzenini izlemek veya sahaya gitmeden görünürlük kazanmak isteyen yapılarda ortaya çıkar.",
      segments: [
        {
          title: "Birden fazla şubeyi uzaktan takip etmek isteyen işletmeler",
          content:
            "Farklı lokasyonlarda kurulu kameraları tek tek kontrol etmek yerine daha düzenli bir erişim ve takip kurgusu gerekir.",
          href: "/isyeri-guvenlik-sistemi",
        },
        {
          title: "Depo ve üretim sahalarını merkezden izlemek isteyen firmalar",
          content:
            "Yükleme alanı, üretim sahası ve çevre hattı gibi bölgelerde anlık görünürlük ve kayıt takibi operasyonel avantaj sağlar.",
          href: "/fabrika-depo-guvenlik-sistemi",
        },
        {
          title: "Site ve residence yönetimleri",
          content:
            "Ortak alan ve giriş kameralarına uzaktan erişim, yönetim tarafında daha hızlı kontrol ve bilgi akışı sağlar.",
          href: "/apartman-site-guvenlik-sistemi",
        },
      ],
      authoritySection: {
        title: "Neden Bekletilmemeli",
        paragraphs: [
          "Uzaktan izleme yoksa birçok işletme sadece olay olduktan sonra kayıt arayan pasif bir yapıda kalır.",
          "Doğru uzaktan erişim; şube yönetimi, gece kontrolü, depo takibi ve saha görünürlüğü açısından ciddi avantaj sağlar.",
          "Özellikle çok lokasyonlu işletmelerde zaman ve kontrol kaybını azaltmak için erişim kurgusunu bekletmeden planlamak gerekir.",
        ],
        noteTitle: "Erişim yapısını birlikte netleştirelim",
        noteText:
          "Kamera sisteminizi sadece kurulu bırakmayın; gerçekten izlenebilir ve yönetilebilir hale getirin. Uzaktan erişim ve izleme yapınızı netleştirmek için şimdi iletişime geçin.",
      },
      processSection: {
        title: "Süreç Nasıl İlerler",
        steps: [
          { step: 1, title: "Sistem incelenir", description: "Mevcut kamera, kayıt cihazı ve ağ yapısının uzaktan erişime uygunluğu değerlendirilir." },
          { step: 2, title: "Erişim senaryosu netleşir", description: "Kimlerin hangi cihazlardan ve hangi kapsamda erişeceği belirlenir." },
          { step: 3, title: "Yetki ve test yapılır", description: "Mobil veya masaüstü görüntüleme, kayıt kontrolü ve bağlantı istikrarı doğrulanır." },
          { step: 4, title: "Geliştirme önerileri eklenir", description: "Gerekiyorsa bakım, revizyon veya servis ihtiyacı ek planla birlikte sunulur." },
        ],
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
      relatedPagesDescription:
        "Uzaktan izleme çoğu zaman kamera kurulumu, bakım sözleşmesi ve arıza servisiyle birlikte değerlendirilince daha sağlıklı sonuç verir.",
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
      ctaTitle: "Uzaktan Kamera İzleme Yapınızı Netleştirin",
      ctaSubtitle:
        "Kamera sisteminizi sadece kurulu bırakmayın; gerçekten izlenebilir ve yönetilebilir hale getirin. Uzaktan erişim ve izleme yapınızı netleştirmek için şimdi iletişime geçin.",
      authorityBeforeFaq: {
        title: "Şehir Bazlı Uzaktan Kamera İzleme Sayfaları",
        description:
          "Uzaktan kamera izleme ihtiyacı farklı şehirlerdeki işletmeler için benzer olsa da sistem yapısı, saha tipi ve bağlantı kurgusu yerel detayları etkileyebilir. İlgili şehir hizmet sayfalarından lokal kapsamı inceleyebilirsiniz.",
        links: buildCityServiceLinks("uzaktan-kamera-izleme", [...priorityCities]),
      },
      authorityAfterFaq: {
        title: "Uzaktan Kamera İzleme Hizmeti Verilen Şehirler",
        links: buildCityLinks("uzaktan-kamera-izleme", [...supportCities]),
      },
    },
  },
  "kartli-gecis-sistemi-kurulumu": {
    metadataTitle: "Kartlı Geçiş Sistemi Kurulumu | Ofis, Apartman ve İşletmeler İçin Giriş Kontrolü",
    metadataDescription:
      "Kartlı geçiş sistemi kurulumu ile giriş çıkış kontrolünü düzenleyin. Ofis, apartman, site, depo ve işletmeler için geçiş yetkisi, kapı kontrolü ve güvenli kullanım senaryolarını planlayın.",
    data: {
      slug: "kartli-gecis-sistemi-kurulumu",
      title: "Kartlı Geçiş Sistemi Kurulumu",
      detailSectionTitle: "Hizmet Kapsamı",
      subtitle:
        "Giriş çıkış kontrolü olmayan yapılarda güvenlik açığı, yetki karmaşası ve operasyonel düzensizlik oluşur. Kartlı geçiş sistemi kurulumu; ofisler, apartmanlar, siteler, depolar ve kontrollü alan ihtiyacı olan işletmeler için daha düzenli, takip edilebilir ve yönetilebilir bir giriş yapısı kurmayı hedefler.",
      description:
        "Kartlı geçiş sistemi kurulumu sürecinde giriş noktası, kullanıcı yoğunluğu, yetki mantığı, kapı tipi ve kullanım senaryosu birlikte değerlendirilir.\n\nİhtiyaca göre kapı kontrol altyapısı, kartlı veya yetkili geçiş mantığı ve gerekli entegrasyon yapısı planlanır.\n\nAmaç yalnızca cihaz montajı değil, giriş akışını yönetilebilir hale getirmektir.",
      heroBadge: "Giriş kontrolü • Yönetilebilir kurgu",
      heroHighlights: [
        "Yetki karmaşasını azaltan kontrollü giriş kurgusu",
        "Kapı, turnike ve kullanıcı yoğunluğuna uygun sistem planlaması",
        "Personel, sakin veya ziyaretçi akışına göre geçiş mantığının belirlenmesi",
        "Kamera ve alarm entegrasyonu için uygun altyapı önerileri",
      ],
      featureSectionTitle: "Hangi Sorunları Çözer",
      features: [
        "Yetkisiz giriş riski",
        "Anahtar karmaşası ve kontrol kaybı",
        "Personel veya kullanıcı bazlı yetki eksikliği",
        "Ortak alan güvenliği zafiyeti",
        "Giriş kayıtlarının düzensizliği",
        "Kapı kontrolünde operasyonel verimsizlik",
      ],
      segmentsSectionTitle: "Kimler İçin Uygun",
      segmentsSectionDescription:
        "Kartlı geçiş ihtiyacı en çok girişin kimler tarafından, hangi saatlerde ve hangi alanlarda yapılacağının net yönetilmesi gereken yapılarda ortaya çıkar.",
      segments: [
        {
          title: "Ofis ve kurumsal iş yerleri",
          content:
            "Personel, ziyaretçi ve kritik alan geçişlerinin kontrol altına alınması gereken ofis yapılarında düzenli giriş kurgusu sağlar.",
          href: "/isyeri-guvenlik-sistemi",
        },
        {
          title: "Apartman ve site yönetimleri",
          content:
            "Blok, otopark ve ortak alan girişlerinde sakin ve ziyaretçi akışını daha yönetilebilir hale getirir.",
          href: "/apartman-site-guvenlik-sistemi",
        },
        {
          title: "Depo ve lojistik alanları",
          content:
            "Personel yoğunluğu, vardiyalı kullanım ve kontrollü alan ihtiyacı nedeniyle giriş akışının daha net yönetilmesini sağlar.",
          href: "/fabrika-depo-guvenlik-sistemi",
        },
      ],
      authoritySection: {
        title: "Neden Bekletilmemeli",
        paragraphs: [
          "Kontrolsüz giriş yapıları hem güvenlik hem operasyon açısından maliyetlidir.",
          "Özellikle ofis, site, depo ve ortak alan kullanan yapılarda giriş düzeni kurulmaması ileride daha büyük güvenlik ve takip problemleri doğurur.",
          "Kapı ve kullanıcı kurgusu geciktikçe anahtar, yetki ve geçiş kontrolü tarafında dağınık yapı kalıcı hale gelir.",
        ],
        noteTitle: "Kurulum planını birlikte netleştirelim",
        noteText:
          "Giriş çıkış kontrolünü düzenlemek ve yapınıza uygun kurulum planını netleştirmek için şimdi iletişime geçin. İhtiyacınıza göre en doğru kurguya birlikte karar verelim.",
      },
      processSection: {
        title: "Süreç Nasıl İlerler",
        steps: [
          { step: 1, title: "Geçiş analizi yapılır", description: "Kapılar, kullanıcı yoğunluğu ve geçiş ihtiyacı değerlendirilir." },
          { step: 2, title: "Sistem kurgusu belirlenir", description: "Uygun okuyucu, kapı kontrol mantığı ve yetki yapısı netleştirilir." },
          { step: 3, title: "Kurulum ve test planlanır", description: "Kullanım senaryosu doğrulanır, gerekiyorsa entegrasyon önerileri eklenir." },
          { step: 4, title: "Kullanım devreye alınır", description: "Sistem çalışır hale getirilir ve günlük yönetim akışı netleştirilir." },
        ],
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
      relatedPagesDescription:
        "Kartlı geçiş sistemleri çoğu zaman kamera sistemleri, alarm sistemleri ve uzaktan izleme çözümleriyle birlikte daha güçlü bir güvenlik yapısı oluşturur.",
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
      ctaTitle: "Kartlı Geçiş Kurulumunu Planlayın",
      ctaSubtitle:
        "Giriş çıkış kontrolünü düzenlemek ve yapınıza uygun kurulum planını netleştirmek için şimdi iletişime geçin. İhtiyacınıza göre en doğru kurguya birlikte karar verelim.",
      authorityBeforeFaq: {
        title: "Şehir Bazlı Kartlı Geçiş Sistemi Sayfaları",
        description:
          "Kartlı geçiş sistemi kurulumu farklı şehirlerde benzer ihtiyaçlara cevap verir; ancak bina tipi ve kullanım yoğunluğu yerel planlamayı etkiler. İlgili şehir sayfalarından bulunduğunuz bölgeye uygun kapsamı inceleyebilirsiniz.",
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
