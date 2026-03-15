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

function buildCityServiceLinks(
  serviceSlug: string,
  citySlugs: string[],
  options?: {
    getLabel?: (cityName: string) => string;
    getDescription?: (cityName: string) => string;
  },
) {
  return citySlugs.map((citySlug) => ({
    href: `/${citySlug}/${serviceSlug}`,
    label:
      options?.getLabel?.(getCityName(citySlug)) ||
      `${getCityName(citySlug)} ${serviceSlug
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ")}`,
    description: options?.getDescription?.(getCityName(citySlug)),
  }));
}

const priorityCities = ["istanbul", "ankara", "izmir"] as const;

export const serviceHubPageConfigs: Record<string, ServiceHubPageConfig> = {
  "kamera-ariza-servisi": {
    metadataTitle: "Kamera Arıza Servisi | Görüntü, Kayıt ve Offline Sorunlarda Teknik Teşhis",
    metadataDescription:
      "Kamera görüntü yok, kayıt alınmıyor, cihaz offline, HDD arızası veya uzaktan erişim problemi yaşıyorsanız önce arıza kaynağını netleştirin. Uzaktan teşhis ve yerinde servis kararını birlikte planlayın.",
    data: {
      slug: "kamera-ariza-servisi",
      title: "Kamera Arıza Servisi",
      heroPrimaryCtaLabel: "Arıza incelemesi başlatın",
      heroPanel: {
        title: "İlk kararı burada verirsiniz",
        intro:
          "Bu sayfa arızayı anlatmak için değil, hangi teknik hatta bakılması gerektiğini hızlıca ayırmak için kurgulandı.",
        points: [
          "Sorun uzaktan ayrıştırılabilecek seviyede mi, yoksa sahada fiziksel kontrol mü gerektiriyor bunu netleştirir.",
          "Başka firmanın kurduğu veya dokümantasyonu eksik sistemlerde de nereden başlanacağını belirler.",
          "Kamera, kayıt cihazı, disk ve ağ tarafını birbirine karıştırmadan ilk müdahale yönünü çıkarır.",
        ],
      },
      sectionOrder: ["contentBlocks", "process", "relatedPages", "cityLinks", "faq"],
      detailSectionTitle: "Hizmet Kapsamı",
      subtitle:
        "Güvenlik kamera sisteminde görüntü yoksa, kayıt alınmıyorsa veya cihazlar offline görünüyorsa asıl sorun çoğu zaman ilk bakışta görünen parça değildir. Kamera arıza servisi sayfası; sorunun kamera, kayıt cihazı, disk, ağ veya enerji tarafında mı olduğunu netleştirip doğru müdahale yoluna karar vermek isteyen işletmeler ve yöneticiler için hazırlandı.",
      description:
        "Kamera arıza servisinde ilk hedef, sorunun tam olarak hangi katmanda oluştuğunu ayırmaktır. Görüntü gelmemesi her zaman kamera arızası anlamına gelmez; kayıt cihazı, depolama, PoE besleme, ağ ayarı veya kullanıcı erişim tarafı aynı belirtinin nedeni olabilir.\n\nBu nedenle sürece yalnızca arızalı görünen parçayı değiştirerek değil, görüntü, kayıt, erişim ve altyapı ilişkisini birlikte kontrol ederek yaklaşırız. Önce neyin teşhis edilebileceğini, neyin yerinde görülmesi gerektiğini ve neyin mevcut donanımın fiziksel durumuna bağlı olduğunu netleştiririz.\n\nAmaç sistemi geçici olarak ayağa kaldırmak değil, arızanın tekrar etme riskini de hesaba katarak sağlıklı bir müdahale planı çıkarmaktır.",
      heroBadge: "Arıza triage • Teknik teşhis",
      heroHighlights: [
        "Görüntü yok, kayıt yok veya offline cihaz belirtilerinin aynı havuzda değerlendirilmesi",
        "Uzaktan ilk teşhis ile yerinde servis gerektiren durumların erken ayrıştırılması",
        "Başka firmanın kurduğu veya dokümantasyonu eksik sistemlerde de arıza kaynağının netleştirilmesi",
        "Parça değişimi, altyapı düzeltmesi veya bakım ihtiyacının arıza sonrası ayrı karar olarak sunulması",
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
          "Kamera arızası bekledikçe sorun yalnızca teknik kalmaz; kayıt boşluğu büyür, olay doğrulama zayıflar ve giriş-çıkış görünürlüğü düşer.",
          "Özellikle depo, mağaza, fabrika ve site yönetimlerinde birkaç günlük kayıt kaybı sonradan telafi edilemeyen risk oluşturabilir.",
          "Bu yüzden ilk müdahalede doğru teşhis koymak, rastgele parça değişimi yapmaktan veya sistemi geçici çalıştırmaktan daha değerlidir.",
        ],
        noteTitle: "Önce arıza kaynağını netleştirelim",
        noteText:
          "Kamera sisteminizde sorun var ama arızanın kamerada mı, kayıtta mı yoksa ağ tarafında mı olduğundan emin değilseniz önce bunu birlikte ayıralım. Ardından uzaktan teşhis mi, yerinde servis mi daha doğru bunu netleştirelim.",
      },
      processSection: {
        title: "Arıza İnceleme ve Müdahale Akışı",
        steps: [
          { step: 1, title: "Belirti netleştirilir", description: "Görüntü yok, kayıt yok, offline cihaz veya uzaktan erişim sorununun tam olarak nasıl göründüğü ayrıntılandırılır." },
          { step: 2, title: "Sistem katmanları ayrılır", description: "Kamera, kayıt cihazı, disk, enerji ve ağ tarafında ilk şüphe alanı belirlenir." },
          { step: 3, title: "Uzaktan veya yerinde teşhis kararı verilir", description: "Sorunun uzaktan ayrıştırılabilecek kısmı ile fiziksel kontrol gerektiren başlıklar ayrılır." },
          { step: 4, title: "Müdahale sonrası sonraki adım netleşir", description: "Parça değişimi, bakım, revizyon veya altyapı düzeltmesi gerekip gerekmediği test sonrası açık biçimde belirlenir." },
        ],
      },
      contentBlocks: [
        {
          type: "service-fit",
          description:
            "Kamera arıza servisi her durumda ilk çözüm olmayabilir; ancak sorunun hangi parçada başladığı belirsizse veya bir belirti birden fazla teknik katmana işaret ediyorsa doğru başlangıç noktası arıza triage sürecidir.",
          items: [
            "Görüntü kesintisi, kayıt kaybı veya offline cihaz problemi yaşıyorsanız önce arıza kaynağını ayırmak gerekir.",
            "Sorunun kamerada mı, kayıt cihazında mı, diskte mi yoksa ağ tarafında mı olduğu belli değilse bu hizmet doğru başlangıç noktasıdır.",
            "Sistem eski olabilir ama tamamen yenilenmeden önce hangi parçanın gerçekten sorun ürettiği netleşmelidir.",
            "Sık tekrar eden kesintiler yaşıyorsanız arıza müdahalesi sonrası bakım, revizyon veya altyapı düzeltmesi de gündeme gelmelidir.",
          ],
        },
        {
          type: "issue-triage",
          description:
            "Aynı belirti farklı teknik katmanlardan kaynaklanabilir. Bu yüzden arıza tipi üzerinden ilerler, ardından sahada hangi kontrolün gerçekten gerekli olduğunu belirleriz.",
          items: [
            {
              title: "Görüntü yok",
              description:
                "Önce problemin tek kamerada mı yoksa birden fazla noktada mı görüldüğünü ayırırız. Kamera beslemesi, PoE hattı, bağlantı, kanal eşleşmesi ve kayıt cihazı tarafı birlikte kontrol edilmeden yalnızca kamera arızası kararı verilmez.",
            },
            {
              title: "Kayıt yok",
              description:
                "Cihaz çalışıyor görünse bile kayıt planı, kanal durumu, disk sağlığı ve depolama ayarları ayrıştırılır. Sorun bazen diskten, bazen kayıt cihazı ayarından, bazen de görüntü akışının hiç ulaşmamasından kaynaklanır.",
            },
            {
              title: "Kamera offline",
              description:
                "Offline görünen cihazlarda önce ağ iletişimi, IP çakışması, PoE besleme ve switch tarafı değerlendirilir. Tek bir kameranın düşmesi ile tüm grubun çevrim dışı olması aynı müdahale mantığıyla ele alınmaz.",
            },
            {
              title: "Disk / HDD sorunu",
              description:
                "Kayıt süresi düşüyorsa, cihaz uyarı veriyorsa veya eski kayıtlar beklenenden erken siliniyorsa disk sağlığı ile kayıt yapılandırması birlikte incelenir. Bu başlık çoğu zaman yalnızca yeni disk takmakla bitmez; cihazın genel depolama davranışı da görülmelidir.",
            },
            {
              title: "Uzaktan erişim sorunu",
              description:
                "Uygulamadan bağlanamama, kopuk izleme veya kullanıcı erişim problemi yaşanıyorsa cihazın çevrim içi durumu, internet yapısı, kullanıcı hesabı ve erişim yöntemi birlikte ele alınır. Sorun bazen uzaktan erişim tarafında, bazen de cihazın zaten sağlıklı yayın vermemesinde olur.",
            },
            {
              title: "Enerji, bağlantı veya kayıt cihazı kaynaklı problemler",
              description:
                "Bazı arızalar tek bir kameradan değil, adaptör, güç kaynağı, switch, kablolama veya kayıt cihazı kararsızlığından doğar. Özellikle birden fazla belirti bir aradaysa fiziksel altyapı ve cihaz tarafı birlikte değerlendirilmeden kalıcı çözüm çıkmaz.",
            },
          ],
        },
        {
          type: "scope-details",
          description:
            "Bu hizmette önce teşhis edilir, sonra hangi müdahalenin gerçekten gerektiği ayrılır. Bu sayede uzaktan çözülebilecek bir konu ile sahada fiziksel inceleme gerektiren arıza aynı torbaya atılmaz.",
          includedTitle: "Standart arıza incelemesinde ele alınan başlıklar",
          includedItems: [
            "Kamera, kayıt cihazı, disk, enerji ve ağ tarafında sorunun hangi katmanda oluştuğunun ayrıştırılması",
            "Görüntü, kayıt, offline durum ve uzaktan erişim belirtilerinin birlikte değerlendirilmesi",
            "Uzaktan ilk teşhis ile yerinde servis gerekip gerekmediğinin netleştirilmesi",
            "Mevcut sistemin genel sağlığına dair tekrar arıza riskini artıran temel zafiyetlerin not edilmesi",
          ],
          additionalTitle: "Ayrıca değerlendirilmesi gereken durumlar",
          additionalItems: [
            "Parça değişimi, yeni disk, adaptör, switch veya kayıt cihazı ihtiyacı",
            "Kablolama, PoE altyapısı, enerji hattı veya ağ tarafında yerinde revizyon gerektiren problemler",
            "Çok eski, dağınık veya eksik dokümantasyonlu sistemlerde kapsamın ilk arıza tahmininden geniş çıkması",
          ],
        },
        {
          type: "scope-details",
          title: "Hangi durumda uzaktan teşhis yeterli olabilir, hangi durumda yerinde servis gerekir?",
          description:
            "Her arıza sahaya gitmeyi gerektirmez. Ancak her arızanın uzaktan çözülebileceğini varsaymak da doğru değildir. Önce uzaktan hangi katman ayrıştırılabiliyor, fiziksel kontrol hangi noktada zorunlu hale geliyor bunu netleştiririz.",
          includedTitle: "Uzaktan teşhis ile ilerlenebilen durumlar",
          includedItems: [
            "Uygulama erişimi, kullanıcı hesabı veya temel yapılandırma kaynaklı uzaktan erişim problemleri",
            "Kayıt planı, kanal ayarı, depolama uyarısı veya bazı cihaz loglarının uzaktan görülebildiği durumlar",
            "Sorunun hangi cihaz grubunda görüldüğünü ayırmaya yardımcı ilk ağ ve sistem kontrolleri",
            "Müdahaleden önce yerinde servis gerekip gerekmediğini belirleyecek ön değerlendirme adımları",
          ],
          additionalTitle: "Yerinde servis gerektiren durumlar",
          additionalItems: [
            "Enerji, adaptör, PoE, switch, kablo veya fiziksel bağlantı kontrolü gerektiren arızalar",
            "Disk değişimi, kayıt cihazı fiziksel kontrolü veya kamera donanım testi gereken senaryolar",
            "Birden fazla cihazın etkilendiği, saha altyapısının kararsız olduğu veya görsel doğrulama gereken durumlar",
            "Mevcut donanımın fiziksel durumu görülmeden karar verilemeyecek eski ve belgesiz kurulumlar",
          ],
        },
        {
          type: "pricing-factors",
          description:
            "Arıza servisinde maliyet ve süre, görünürdeki belirtiye değil alttaki teknik sebebe göre şekillenir. Bu yüzden tek fiyat veya tek müdahale süresi söylemek yerine hangi değişkenlerin etkili olduğunu açık konuşmak gerekir.",
          items: [
            "Arızanın tek kamerada mı, belirli bir hatta mı yoksa tüm sistemde mi görüldüğü müdahale kapsamını etkiler.",
            "Uzaktan ön teşhis ile karar verilebilen durumlarla sahada fiziksel inceleme gerektiren senaryoların süresi aynı olmaz.",
            "Disk, adaptör, PoE, switch veya kayıt cihazı gibi parça ihtiyacı oluşursa maliyet arıza incelemesinden ayrı netleşir.",
            "Eski kurulum, dağınık kablolama, eksik cihaz bilgisi veya birden fazla lokasyona yayılan yapı teşhis sürecini uzatabilir.",
          ],
        },
        {
          type: "takeover-process",
          description:
            "Arıza çağrılarının önemli kısmı, sistemi ilk kuran firmadan bağımsız olarak gelir. Bu yüzden devralınan sistemlerde önce çalışır görünenle gerçekten sağlıklı olanı ayırmak gerekir.",
          items: [
            "Başka firma tarafından kurulmuş sistemlerde cihaz listesi, şifre bilgisi veya kurulum notu eksik olsa bile mevcut tablo mümkün olduğunca çıkarılır.",
            "Sahada çalışan ama riskli görünen noktalar ile gerçekten arızalı katman birbirinden ayrılır; gereksiz parça kararı verilmez.",
            "Eski veya belgesiz kurulumlarda yalnızca anlık müdahale ile çözülemeyecek başlıklar açık biçimde ayrıca belirtilir.",
            "Gerekirse arıza çözümü sonrasında bakım, revizyon veya parça yenileme ihtiyacı ayrı teknik ve ticari karar kalemi olarak sunulur.",
          ],
        },
        {
          type: "takeover-process",
          title: "Arıza tekrarını azaltmak için sonraki adım",
          description:
            "Bazı arızalar tek seferliktir; bazıları ise altyapı zafiyeti, eski donanım veya bakımsızlık nedeniyle tekrar eder. Müdahale sonrası hangi sonraki adımın gerçekten gerekli olduğunu ayırmak bu yüzden önemlidir.",
          items: [
            "Aynı tip arızalar tekrar ediyorsa bakım sözleşmesi ile kayıt, disk ve bağlantı tarafını düzenli izlemek daha doğru hale gelir.",
            "Sorun belirli cihazlarda veya belirli hatlarda sürekli oluşuyorsa parça değişimi ya da altyapı düzeltmesi gündeme gelir.",
            "Kayıt cihazı, disk veya enerji tarafı sürekli sınırda çalışıyorsa geçici müdahale yerine revizyon kararı daha doğru olabilir.",
            "Uzaktan erişim sorunları arızaya eşlik ediyorsa arıza çözümü sonrası erişim yapısını ayrıca düzenlemek gerekir.",
          ],
        },
        {
          type: "prep-checklist",
          description:
            "İlk görüşmede paylaşılacak birkaç temel bilgi, teşhis süresini kısaltır ve yanlış yönlendirme riskini düşürür. Özellikle arıza servisinde belirti bilgisi, sistemin markasından daha kıymetlidir.",
          items: [
            "Sorunun ne zamandır devam ettiği ve hangi kameralarda görüldüğünü paylaşmanız süreci hızlandırır.",
            "Kayıt cihazı modeli, kamera sayısı, sistemin bulunduğu yapı tipi ve mümkünse cihaz fotoğrafı ilk değerlendirmeyi kolaylaştırır.",
            "Mobil uygulama erişimi varsa son görülen hata, offline bilgisi veya ekran görüntüsü ilk teşhiste fayda sağlar.",
            "Sistemi hangi firmanın kurduğu bilinmiyorsa bile daha önce yapılan müdahale veya parça değişimi bilgisi tekrar eden arızaları ayırmayı kolaylaştırır.",
            "Kullanım alanı, kritik kamera noktaları ve kayıt ihtiyacının önceliği paylaşıldığında müdahale sırası daha doğru planlanır.",
          ],
        },
      ],
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
      relatedPagesTitle: "Arıza Sonrası Değerlendirilebilecek İlgili Hizmetler",
      relatedPagesDescription:
        "Kamera arızası çözüldükten sonra çoğu zaman ikinci karar başlar: tekrar etmesin diye bakım mı gerekir, uzaktan görünürlük mü güçlendirilmelidir, yoksa belirli noktalarda revizyon mu düşünülmelidir? Aşağıdaki sayfalar bu devam kararını netleştirmenize yardımcı olur.",
      relatedPages: [
        {
          title: "Bakım, Servis ve Uzaktan İzleme",
          href: "/bakim-servis-uzaktan-izleme",
          description:
            "Arıza müdahalesinden sonra sistemi tek seferlik değil, daha düzenli servis ve görünürlük mantığıyla ele almak istiyorsanız bu sayfadan devam edin.",
          ctaLabel: "Bakım-servis modelini görün",
        },
        {
          title: "Kamera Sistemi Bakım Sözleşmesi",
          href: "/kamera-sistemi-bakim-sozlesmesi",
          description:
            "Disk, kayıt ve bağlantı tarafında tekrar eden sorunlar görüyorsanız arıza servisi sonrası bakım sözleşmesi daha doğru olabilir.",
          ctaLabel: "Bakım sözleşmesini inceleyin",
        },
        {
          title: "Uzaktan Kamera İzleme",
          href: "/uzaktan-kamera-izleme",
          description:
            "Arızaya uzaktan erişim veya cihaz çevrim içi görünürlüğü de eşlik ediyorsa bu sayfadan uzaktan görünürlük modelini değerlendirin.",
          ctaLabel: "Uzaktan görünürlüğü değerlendirin",
        },
      ],
      cityLinksSection: {
        title: "Şehre Göre Kamera Arıza Servisi Kapsamı",
        description:
          "Kamera arızası aynı teknik mantıkla çözülür; ama yerinde müdahale ihtiyacı, yapı tipi ve lokasyonun operasyonel önceliği şehir bazında planlamayı etkiler. Aşağıdaki sayfalardan bulunduğunuz şehirde arıza servisinin nasıl ele alındığını inceleyebilirsiniz.",
        links: buildCityServiceLinks("kamera-ariza-servisi", [...priorityCities], {
          getLabel: (cityName) => `${cityName} kamera arıza servisi`,
          getDescription: (cityName) =>
            `${cityName} için görüntü yok, kayıt yok veya offline kamera arızalarında yerel servis kapsamını görün.`,
        }),
      },
      defaultService: "kamera",
      ctaContent: {
        badge: "Arıza teşhisi • Müdahale kararı",
        title: "Sorunun kaynağını netleştirmek için arıza incelemesini başlatalım",
        subtitle:
          "Görüntü, kayıt veya offline sorununda önce arızanın hangi katmanda başladığını ayıralım. Uzaktan teşhis yeterli mi, yerinde servis mi gerekir bunu birlikte netleştirelim.",
        primaryLabel: `Hemen Ara: ${"+90 542 593 49 00"}`,
        secondaryLabel: "Arıza incelemesi talep edin",
        secondaryHref: "/iletisim?konu=ariza-incelemesi",
        helperTone: "direct",
        intentTag: "Servis incelemesi",
        preFormNote:
          "Varsayım istemiyorsanız belirtinizi yazın; hangi cihazın sorun çıkardığından emin olmanız gerekmez.",
        helperText:
          "Sistemi başka firma kurmuş olabilir veya şifreler eksik olabilir. İlk aşamada belirtiyi paylaşmanız yeterlidir.",
        trustItems: [
          "Uzaktan ilk teşhis ile yerinde servis gerektiren başlıkların ayrılması",
          "Başka firma tarafından kurulmuş veya dokümantasyonu eksik sistemlerde de inceleme yapılması",
          "Kamera, kayıt cihazı, disk, enerji ve ağ tarafının birlikte değerlendirilmesi",
          "Geçici çalıştırma yerine arıza kaynağını ve sonraki teknik adımı netleştiren yaklaşım",
        ],
        supportCards: [
          {
            title: "Arıza triage akışı",
            text: "Belirtiye göre önce hangi katmanın sorun ürettiğini ayırıyor, ardından uzaktan mı yerinde mi ilerlemek gerektiğini netleştiriyoruz.",
          },
          {
            title: "Sonraki teknik adım",
            text: "Parça değişimi, bakım, revizyon veya altyapı düzeltmesi gerekip gerekmediğini müdahale sonrası açık biçimde ayırıyoruz.",
          },
        ],
      },
    },
  },
  "kamera-sistemi-bakim-sozlesmesi": {
    metadataTitle: "Kamera Sistemi Bakım Sözleşmesi | Periyodik Kontrol ve İlk Denetim",
    metadataDescription:
      "Kamera sistemi bakım sözleşmesi ile kayıt sürekliliğini, disk ve cihaz sağlığını, bağlantı ve görüntü kontrollerini düzenli hale getirin. Sözleşmeli bakım modelinin yapınıza uygun olup olmadığını netleştirin.",
    data: {
      slug: "kamera-sistemi-bakim-sozlesmesi",
      title: "Kamera Sistemi Bakım Sözleşmesi",
      heroPrimaryCtaLabel: "Bakım uygunluğunu değerlendirin",
      heroPanel: {
        title: "Bakım modelinin değeri burada netleşir",
        intro:
          "Bu sayfa bakımın iyi bir fikir olduğunu söylemekten çok, sözleşmeli modelin sizin yapı için mantıklı olup olmadığını ayırır.",
        points: [
          "İlk denetim gerekip gerekmediğini ve sistemin doğrudan bakıma hazır olup olmadığını gösterir.",
          "Tek seferlik servis ile düzenli bakımın nerede ayrıldığını ticari olarak netleştirir.",
          "Disk, kayıt, bağlantı ve görüntü tarafında hangi başlıkların düzenli takip istediğini öne çıkarır.",
        ],
      },
      sectionOrder: ["contentBlocks", "relatedPages", "process", "cityLinks", "faq"],
      detailSectionTitle: "Hizmet Kapsamı",
      subtitle:
        "Kamera sistemi kurulu olabilir ama bu, gerçekten sağlıklı çalıştığı anlamına gelmez. Kayıt sürekliliği, disk durumu, görüntü açıları, bağlantı kararlılığı ve uzaktan erişim tarafı düzenli kontrol edilmiyorsa sistem çoğu yerde ancak ihtiyaç anında sorunlu olduğu anlaşılır. Kamera sistemi bakım sözleşmesi, bu tabloyu arıza bekleyen yapıdan planlı denetim modeline çevirmek isteyen işletmeler ve yöneticiler için kurulur.",
      description:
        "Bakım sözleşmesi satılan tek şeyin teknik servis olmadığı bir modeldir. Burada amaç sadece arıza olduğunda gelmek değil; kayıt alınıp alınmadığını, disk ve kayıt cihazının sağlıklı çalışıp çalışmadığını, görüntü açılarının zamanla bozulup bozulmadığını, bağlantı ve enerji tarafında zayıflık oluşup oluşmadığını düzenli biçimde kontrol etmektir.\n\nBu model özellikle çok kameralı, ortak alanlı veya kayıt ihtiyacı kritik yapılarda daha anlamlı hale gelir. Çünkü ihtiyaç anında çalışmayan sistemi sonradan düzeltmek yerine, zafiyetleri önceden görmek daha düşük riskli ve daha yönetilebilir bir yaklaşım sunar.\n\nBakım sözleşmesi her kurulu sistem için otomatik doğru çözüm değildir. Bazı yapılarda önce zayıf altyapıyı düzeltmek, sonra bakım düzeni kurmak gerekir. Doğru yaklaşım, sistemin bugünkü durumuna göre sözleşmeli modelin mantıklı olup olmadığını açıkça değerlendirmektir.",
      heroBadge: "Bakım modeli • Sistem denetimi",
      heroHighlights: [
        "Arıza çıktığında değil, kayıt ve cihaz sağlığı bozulmadan önce kontrol mantığı kurulması",
        "Disk, kayıt cihazı, görüntü açısı, bağlantı, enerji ve uzaktan erişim tarafının birlikte değerlendirilmesi",
        "Devralınan sistemlerde önce ilk denetim, sonra bakım sözleşmesi modelinin uygunluğunun netleştirilmesi",
        "Tek seferlik servis ile sözleşmeli bakım arasındaki farkı operasyonel olarak ayıran yaklaşım",
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
          "Kamera sistemi birçok yerde çalışıyor sanılır; ancak kayıt kesintisi, disk zayıflığı, görüntü açısı bozulması veya bağlantı problemi genellikle ihtiyaç anına kadar fark edilmez.",
          "Bakım sözleşmesinin değeri, arıza olduğunda müdahale etmekten çok, sistemin gerçekten çalışır halde kalmasını düzenli denetimle takip etmesidir.",
          "Bakım düzeni geciktikçe küçük zafiyetler birikir, sonra da tek seferlik servis çağrıları artar. Bu hem operasyonu hem güven duygusunu zayıflatır.",
        ],
        noteTitle: "Önce bakım modelinin sizin yapı için mantıklı olup olmadığını netleştirelim",
        noteText:
          "Kamera sisteminiz kurulu ama düzenli kontrol modeli yoksa önce ilk denetimi, risk seviyesini ve sözleşmeli bakımın gerçekten gerekli olup olmadığını birlikte değerlendirelim.",
      },
      processSection: {
        title: "Bakım Modeli Nasıl Kurulur?",
        steps: [
          { step: 1, title: "İlk denetim yapılır", description: "Mevcut kamera, kayıt cihazı, disk, bağlantı ve erişim tarafının bugünkü durumu netleştirilir." },
          { step: 2, title: "Sözleşme için uygunluk ayrılır", description: "Sistem doğrudan bakım planına mı alınacak, yoksa önce düzeltme mi gerekecek buna karar verilir." },
          { step: 3, title: "Bakım çerçevesi kurulur", description: "Periyodik kontrol mantığı, öncelikli risk alanları ve takip edilecek başlıklar belirlenir." },
          { step: 4, title: "Süreklilik modeli başlatılır", description: "Düzenli kontrol akışı ile tek seferlik servis bağımlılığını azaltacak bakım düzeni kurulur." },
        ],
      },
      contentBlocks: [
        {
          type: "service-fit",
          title: "Bakım sözleşmesi hangi yapılarda daha mantıklıdır?",
          description:
            "Bakım sözleşmesi her kurulu sistem için otomatik doğru model değildir. En fazla değeri, kayıt sürekliliğinin kritik olduğu ve sorunların ihtiyaç anında değil, kontrollü şekilde önceden fark edilmesi gereken yapılarda üretir.",
          items: [
            "Kamera sayısı arttıkça ve kayıt sürekliliği kritik hale geldikçe sözleşmeli bakım modeli daha mantıklı hale gelir.",
            "Site, plaza, depo, fabrika ve çok noktalı yapılarda sistemin gerçekten çalışıp çalışmadığını düzenli kontrol etmek tek seferlik servis çağrısından daha değerlidir.",
            "Sistem ihtiyaç anında sorun çıkarıyor veya kayıt tarafı güven vermiyorsa bakım sözleşmesi daha öngörülebilir bir yapı kurar.",
            "Sık arıza yaşayan, bağlantı kararsızlığı görülen veya performansı zamanla düşen sistemlerde bakım düzeni kurmak daha verimli olur.",
            "Tek kameralı, düşük riskli veya yeni kurulmuş küçük yapılarda ise önce tam sözleşme yerine mevcut risk seviyesini görmek daha doğru olabilir.",
          ],
        },
        {
          type: "scope-details",
          title: "Bakım sözleşmesinde neler vardır, neler ayrıca değerlendirilir?",
          description:
            "Bakım sözleşmesi arıza çıktığında müdahale etmekten daha geniş bir mantıkla kurulur. Amaç, sistemin kayıt, cihaz ve görüntü tarafında gerçekten sağlıklı kalıp kalmadığını düzenli olarak kontrol etmektir.",
          includedTitle: "Bakım planında ele alınan başlıklar",
          includedItems: [
            "Kamera görüntü, açı, lens durumu ve temel işlev kontrolleri",
            "Kayıt cihazı, disk sağlığı, kayıt süresi ve kayıt akışının gözden geçirilmesi",
            "Bağlantı, enerji, PoE ve uzaktan erişim tarafındaki temel sağlık kontrolleri",
            "Zamanla oluşan kör nokta, görüntü kayması veya performans düşüşü gibi risklerin tespiti",
            "İyileştirme veya revizyon gerektiren başlıkların bakım takibinden ayrı olarak not edilmesi",
          ],
          additionalTitle: "Ayrıca netleştirilen başlıklar",
          additionalItems: [
            "Parça değişimi, yeni disk, kayıt cihazı veya ilave ekipman ihtiyacı",
            "Mevcut altyapının yetersiz kaldığı revizyon veya düzeltme senaryoları",
            "Bakım planı dışında kalan acil arıza müdahaleleri",
            "İlk denetimde ortaya çıkan ve sözleşme öncesi çözülmesi gereken kritik eksikler",
          ],
        },
        {
          type: "service-fit",
          title: "Sözleşmeli bakım ile tek seferlik servis arasındaki fark",
          description:
            "Bu iki model aynı ihtiyaca cevap vermez. Tek seferlik servis mevcut sorunu çözmeye odaklanır; bakım sözleşmesi ise sorun çıkmadan önce sistemi denetim altında tutmayı hedefler.",
          items: [
            "Tek seferlik servis belirli bir arıza veya belirti için çağrılır; sözleşmeli bakım ise kayıt, cihaz ve bağlantı tarafını periyodik olarak izler.",
            "Arıza servisi sorun olduktan sonra devreye girer; bakım sözleşmesi aynı sorunların ihtiyaç anına taşınmasını azaltmaya çalışır.",
            "Sözleşmeli modelde amaç yalnızca müdahale değil, sistemin genel çalışma disiplinini korumaktır.",
            "Sorunlu ve dağınık bir sistemde ise önce düzeltme, sonra bakım modeli daha gerçekçi olabilir; her yapı doğrudan sözleşmeye uygun olmayabilir.",
          ],
        },
        {
          type: "pricing-factors",
          description:
            "Bakım sözleşmesinde fiyat ve planlama mantığı yalnızca cihaz adedinden ibaret değildir. Sistemin bugünkü durumu, kayıt kritikliği ve ne kadar düzenli denetim gerektirdiği toplam çerçeveyi belirler.",
          items: [
            "Kamera sayısı, kayıt cihazı yapısı, disk durumu ve depolama tarafındaki sağlık seviyesi bakım planının kapsamını etkiler.",
            "Tek bina ile çok noktalı saha yapıları arasında periyodik kontrol mantığı ve saha planlaması farklılaşır.",
            "Devralınan sistemlerde önce düzeltme gerektiren kritik eksikler varsa sözleşme başlamadan önce ayrı iş kalemi oluşabilir.",
            "Bakım kapsamında takip edilecek uzaktan erişim, kayıt süresi, kritik kör nokta ve enerji/bağlantı zafiyeti sayısı planlamayı değiştirir.",
          ],
        },
        {
          type: "takeover-process",
          title: "Mevcut sistemi devralırken ilk denetim nasıl yapılır?",
          description:
            "Bakım sözleşmesine en çok ihtiyaç duyan yapılardan biri, farklı zamanlarda parça parça kurulmuş ve bugünkü durumu tam bilinmeyen sistemlerdir. Ancak böyle yapılarda önce ilk denetim yapılmadan doğrudan sözleşmeye geçmek doğru olmaz.",
          items: [
            "Başka firmanın kurduğu sistemlerde önce kamera, kayıt cihazı, disk, bağlantı ve uzaktan erişim tarafının mevcut durumu çıkarılır.",
            "Çalışıyor görünen ama riskli başlıklar ile gerçekten bakım düzenine alınabilecek sağlıklı alanlar birbirinden ayrılır.",
            "Bakım sözleşmesine geçmeden önce çözülmesi gereken kritik eksikler varsa bunlar açık biçimde ayrıca planlanır.",
            "Amaç sorunlu sistemi sadece kâğıt üzerinde devralmak değil, önce denetlenebilir hale getirip sonra sürdürülebilir bakım modeline almaktır.",
          ],
        },
        {
          type: "prep-checklist",
          description:
            "Bakım planını doğru kurabilmek için ilk görüşmede yalnızca cihaz sayısını değil, bugünkü risk seviyesini ve sistemin nasıl kullanıldığını anlamak gerekir.",
          items: [
            "Kamera sayısı, kayıt cihazı adedi ve sistemin hangi yapı veya sahalarda kullanıldığı ilk kapsamı netleştirir.",
            "Son dönemde yaşanan kayıt kaybı, offline cihaz, görüntü bozulması veya uzaktan erişim düzensizliği paylaşılırsa risk önceliği daha doğru çıkarılır.",
            "Sistemin başka bir firmadan devralınıp devralınmadığı ve eski müdahale geçmişi bakım başlangıcını planlamak için önemlidir.",
            "Hangi kameraların kritik olduğu, kayıt ihtiyacının nerede yüksek olduğu ve ortak alan öncelikleri belirtildiğinde bakım planı daha gerçekçi kurulur.",
          ],
        },
      ],
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
      relatedPagesTitle: "Bakım Modelini Tamamlayan İlgili Hizmetler",
      relatedPagesDescription:
        "Bakım sözleşmesi çoğu zaman tek başına değerlendirilmez. Aşağıdaki sayfalar, bakım modeli ile arıza müdahalesi, uzaktan izleme ve genel servis yapısı arasındaki farkı daha net görmenizi sağlar.",
      relatedPages: [
        {
          title: "Bakım, Servis ve Uzaktan İzleme",
          href: "/bakim-servis-uzaktan-izleme",
          description:
            "Bakım sözleşmesini genel servis düzeni ve uzaktan görünürlük mantığı içinde değerlendirmek istiyorsanız bu sayfadan ilerleyin.",
          ctaLabel: "Genel bakım-servis yapısını görün",
        },
        {
          title: "Uzaktan Kamera İzleme",
          href: "/uzaktan-kamera-izleme",
          description:
            "Bakım modelini, cihaz çevrim içi durumu ve kayıt görünürlüğünü uzaktan takip eden tamamlayıcı yapı ile birlikte değerlendirin.",
          ctaLabel: "Uzaktan izleme modeline bakın",
        },
        {
          title: "Kamera Arıza Servisi",
          href: "/kamera-ariza-servisi",
          description:
            "Bakım sözleşmesi olmayan sistemlerde sorun çıktığında nasıl müdahale edildiğini görmek için arıza servisi sayfasına geçin.",
          ctaLabel: "Arıza servisi farkını görün",
        },
      ],
      cityLinksSection: {
        title: "Şehre Göre Kamera Bakım Sözleşmesi Planlaması",
        description:
          "Bakım sözleşmesi ihtiyacı her şehirde aynı sebeple doğmaz; bazı yapılarda kayıt sürekliliği, bazılarında devralınan sistem riski daha belirleyici olur. Aşağıdaki şehir sayfaları, bakım modelinin yerel yapı tiplerine nasıl oturduğunu daha ticari çerçevede gösterir.",
        links: buildCityServiceLinks("kamera-sistemi-bakim-sozlesmesi", [...priorityCities], {
          getLabel: (cityName) => `${cityName} kamera bakım sözleşmesi`,
          getDescription: (cityName) =>
            `${cityName} için periyodik kontrol, ilk denetim ve bakım modeli uygunluğunu bu sayfadan inceleyin.`,
        }),
      },
      defaultService: "bakim-servis",
      ctaContent: {
        badge: "Bakım modeli • İlk denetim",
        title: "Bakım sözleşmesi sizin yapı için gerçekten mantıklı mı birlikte değerlendirelim",
        subtitle:
          "Kamera sisteminiz kurulu ama düzenli kontrol modeli yoksa önce ilk denetimi ve sözleşmeli bakımın gerçekten gerekli olup olmadığını birlikte değerlendirelim.",
        primaryLabel: `Hemen Ara: ${"+90 542 593 49 00"}`,
        secondaryLabel: "Bakım değerlendirmesi isteyin",
        secondaryHref: "/iletisim?konu=bakim-degerlendirmesi",
        intentTag: "İlk denetim",
        preFormNote:
          "Doğrudan sözleşme mi, yoksa önce düzeltme mi gerektiğini formdan önce kısaca ayırabiliriz.",
        helperText:
          "Kamera sayısı ve yapı tipi net değilse de başlayabiliriz. İlk görüşmede sistemin doğrudan sözleşmeye mi, yoksa önce düzeltmeye mi ihtiyacı olduğunu ayırırız.",
        trustItems: [
          "Bakım kapsamı, periyodik kontrol mantığı ve denetim başlıklarının başlangıçta netleştirilmesi",
          "Devralınan veya zayıf sistemlerde önce ilk denetim, sonra sözleşme uygunluğunun ayrıştırılması",
          "Kayıt sürekliliği, disk, cihaz, bağlantı ve görüntü açısı tarafının birlikte değerlendirilmesi",
          "Sözleşmeli bakım ile tek seferlik servis ihtiyacının hangi noktalarda ayrıldığının açıklanması",
        ],
        supportCards: [
          {
            title: "İlk denetim",
            text: "Kamera, kayıt, disk, bağlantı ve erişim tarafını inceleyip sistemin bakım modeline ne kadar hazır olduğunu belirliyoruz.",
          },
          {
            title: "Bakım modeli seçimi",
            text: "Doğrudan sözleşmeli plan mı, önce düzeltme sonrası bakım modeli mi daha doğru bunu açık biçimde ayrıştırıyoruz.",
          },
        ],
      },
    },
  },
  "uzaktan-kamera-izleme": {
    metadataTitle: "Uzaktan Kamera İzleme | Erişim Modeli ve Kayıt Görünürlüğü",
    metadataDescription:
      "Uzaktan kamera izleme ile sadece telefondan görüntü açmayı değil, erişim modeli, kayıt görünürlüğü ve çok lokasyon takibini birlikte planlayın. Altyapı ve yetki yapısının bu modele uygun olup olmadığını netleştirin.",
    data: {
      slug: "uzaktan-kamera-izleme",
      title: "Uzaktan Kamera İzleme",
      heroPrimaryCtaLabel: "Uzaktan izleme modelini netleştirin",
      heroPanel: {
        title: "Bu sayfa ne sattığını açık söyler",
        intro:
          "Burada yalnızca uygulama kurulumu değil; erişim modeli, kayıt görünürlüğü ve uzaktan kullanım düzeni netleştirilir.",
        points: [
          "Telefondan görüntü açmak ile gerçekten işe yarar uzaktan görünürlük arasındaki farkı ayırır.",
          "Tek lokasyon ile çok lokasyon ihtiyacının aynı model olmadığını erken gösterir.",
          "Mevcut cihaz, internet ve kullanıcı yapısının bu kurguyu taşıyıp taşımadığını önden kontrol eder.",
        ],
      },
      sectionOrder: ["contentBlocks", "relatedPages", "process", "cityLinks", "faq"],
      detailSectionTitle: "Hizmet Kapsamı",
      subtitle:
        "Uzaktan kamera izleme sayfası, yalnızca telefondan görüntü açma ihtiyacını değil; erişim modelini, kayıt görünürlüğünü, çok lokasyon takibini ve uzaktan erken durum fark etmeyi birlikte değerlendirmek isteyen yapılar için hazırlandı. Amaç, sistemin dışarıdan açılıyor görünmesi değil, gerçekten işleyen bir uzaktan görünürlük düzeni kurmaktır.",
      description:
        "Bu hizmet basit mobil erişim kurulumundan daha geniş, tam zamanlı bir alarm merkezi vaadinden ise daha sınırlı bir çerçeveye sahiptir. Önce sistemin uzaktan erişime uygun olup olmadığını, kimlerin hangi kapsamda erişeceğini, kayıt tarafının uzaktan nasıl takip edileceğini ve mevcut altyapının bu modele ne kadar hazır olduğunu netleştiririz.\n\nBazı yapılarda ihtiyaç sadece telefondan görüntü açmaktır. Bazılarında ise farklı şubeleri merkezden görmek, kayıt akışını kontrol etmek, cihaz çevrim içi mi değil mi anlamak ve saha ile yönetim arasında görünürlük kurmak gerekir. Bu sayfa ikinci gruba daha çok hitap eder.\n\nDolayısıyla burada satılan şey tek başına uygulama kurulumu değil; erişim, görünürlük ve operasyonel kullanım mantığının işin gerçek ihtiyacına göre düzenlenmesidir.",
      heroBadge: "Erişim modeli • Uzaktan görünürlük",
      heroHighlights: [
        "Telefondan izleme ile gerçekten işe yarayan uzaktan görünürlüğün birbirinden ayrılması",
        "Kayıt cihazı, erişim modeli ve kullanıcı yetkilerinin birlikte planlanması",
        "Tek lokasyon ile çok lokasyonlu yapılarda farklı uzaktan kullanım senaryolarının kurulması",
        "Bağlantı ve cihaz sağlığını uzaktan fark etmeye yardımcı görünürlük mantığının netleştirilmesi",
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
          "Uzaktan görünürlük net kurulmadığında birçok işletme sadece olay olduktan sonra kayıt arayan pasif bir yapıda kalır.",
          "Doğru erişim modeli; şube yönetimi, saha görünürlüğü, kayıt kontrolü ve cihaz durumunu uzaktan fark etme açısından ciddi fark yaratır.",
          "Özellikle çok lokasyonlu yapılarda telefon uygulaması varmış gibi görünmesi yetmez; gerçekten kullanılabilir ve yönetilebilir bir model kurmak gerekir.",
        ],
        noteTitle: "Önce neye ihtiyacınız olduğunu birlikte ayıralım",
        noteText:
          "İhtiyacınız yalnızca telefondan izlemek mi, çok lokasyon görünürlüğü mü, yoksa kayıt ve cihaz durumunu da uzaktan takip etmek mi? Önce bunu netleştirelim, sonra altyapının buna uygun olup olmadığını değerlendirelim.",
      },
      processSection: {
        title: "Uzaktan Görünürlük Nasıl Kurgulanır?",
        steps: [
          { step: 1, title: "Gerçek ihtiyaç ayrılır", description: "Yalnızca mobil izleme mi, çok lokasyon görünürlüğü mü, kayıt kontrolü mü yoksa bunların kombinasyonu mu gerekli netleştirilir." },
          { step: 2, title: "Altyapı uygunluğu incelenir", description: "Kayıt cihazı, ağ yapısı, internet kararlılığı ve kullanıcı erişim modeli bu ihtiyacı karşılıyor mu değerlendirilir." },
          { step: 3, title: "Erişim ve yetki yapısı kurulur", description: "Kimlerin hangi cihazdan hangi kapsamda erişeceği ve görünürlüğün nasıl kullanılacağı belirlenir." },
          { step: 4, title: "Sınırlar ve sonraki adım netleşir", description: "Mevcut yapının nereye kadar yeterli olduğu, ek revizyon veya bakım gerekip gerekmediği test sonrası açıklaştırılır." },
        ],
      },
      contentBlocks: [
        {
          type: "service-fit",
          description:
            "Uzaktan kamera izleme her durumda ayrı bir proje anlamına gelmez. Değerini, yalnızca telefondan görüntü açmanın yetmediği ve uzaktan görünürlüğün operasyonel olarak kullanılacağı yapılarda üretir.",
          items: [
            "Sahaya gitmeden görünürlük kazanmak, şube veya tesisleri merkezden takip etmek istiyorsanız bu hizmet doğru seçimdir.",
            "Telefondan bağlanabiliyor olmak yetmiyor, kayıt akışını ve cihaz çevrim içi durumunu da görmek istiyorsanız daha düzenli bir uzaktan görünürlük modeli gerekir.",
            "Birden fazla kullanıcının farklı yetkilerle erişmesi gereken yapılarda erişim kurgusu ayrıca planlanmalıdır.",
            "Tekrarlayan kopukluklar, düzensiz mobil erişim veya belirsiz kullanıcı yapısı varsa yalnızca uygulama kurmak sorunu çözmez.",
          ],
        },
        {
          type: "scope-details",
          title: "Uzaktan izleme tam olarak neyi kapsar?",
          description:
            "Bu hizmetin sınırını açık koymak gerekir. Burada satılan şey sadece uygulama kurulumu değildir; ancak 7/24 alarm merkezi takibi de değildir. Amaç, uzaktan erişim ile işe yarar görünürlüğü aynı çerçevede kurmaktır.",
          includedTitle: "Bu sayfanın kapsadığı alanlar",
          includedItems: [
            "Mobil veya masaüstü erişim modelinin iş ihtiyacına göre netleştirilmesi",
            "Kayıt cihazı ve sistem yapısının uzaktan görünürlüğe uygunluğunun değerlendirilmesi",
            "Kayıt akışı, çevrim içi durum ve temel uzaktan kontrol mantığının kurulması",
            "Tek lokasyon veya çok lokasyon yapısına göre kullanıcı yetkisi ve erişim düzeninin planlanması",
          ],
          additionalTitle: "Bu sayfanın tek başına satmadığı şeyler",
          additionalItems: [
            "Her problemi uzaktan çözen sınırsız teknik servis modeli",
            "Altyapı yetersizse ek revizyon olmadan her cihazı sorunsuz uzaktan izleme vaadi",
            "Sadece telefona uygulama yüklemeyi tam hizmet gibi sunan yüzeysel kurulum yaklaşımı",
          ],
        },
        {
          type: "scope-details",
          description:
            "Uzaktan görünürlük, cihaz uygulaması açılabildiği için otomatik oluşmaz. İnternet tarafı, kayıt cihazı uyumu, kullanıcı yetkisi ve erişim güvenliği bu modelin temelini oluşturur.",
          title: "Uzaktan izleme için hangi altyapı gerekir?",
          includedTitle: "Temel önkoşullar",
          includedItems: [
            "İnternet bağlantısının uzaktan erişimi taşıyabilecek kadar stabil olması",
            "Kayıt cihazı veya mevcut sistemin uzak erişim ve görünürlük modeline teknik olarak uyumlu olması",
            "Kimlerin hangi cihazlardan hangi kapsamda erişeceğini belirleyen net bir kullanıcı modeli kurulması",
            "Yetki yapısının, herkesin her şeye eriştiği dağınık kullanım yerine kontrollü şekilde tanımlanması",
            "Bağlantı güvenliği ve erişim güvenliğinin, şifre ve kullanıcı tarafında kontrolsüz bırakılmaması",
          ],
          additionalTitle: "Altyapı yetersizse ayrıca değerlendirilir",
          additionalItems: [
            "İnternet kararsızlığı veya saha ağındaki zayıflıklar",
            "Eski kayıt cihazı ya da dağınık kullanıcı hesabı yapısı",
            "Çok lokasyonlu erişim için ilave revizyon veya yeniden kurgu ihtiyacı",
          ],
        },
        {
          type: "service-fit",
          title: "Tek lokasyon ile çok lokasyon kullanım farkı",
          description:
            "Uzaktan izleme ihtiyacı tek şubeli bir yapı ile farklı şehirlerde veya farklı sahalarda çalışan işletmeler için aynı değildir. Bu yüzden görünürlük modeli de aynı mantıkla kurulmaz.",
          items: [
            "Tek lokasyonda ihtiyaç çoğu zaman belirli kameraları uzaktan görmek, kayıt akışını kontrol etmek ve erişimi birkaç kullanıcı ile düzenli kullanmaktır.",
            "Çok lokasyonlu yapılarda ise asıl ihtiyaç farklı şubeleri tek tek uğraşmadan yönetilebilir bir görünürlük altında toplamaktır.",
            "Lokasyon sayısı arttıkça kullanıcı yetkisi, erişim düzeni ve cihaz durumunu uzaktan takip etme ihtiyacı daha kritik hale gelir.",
            "Bu nedenle çok lokasyon senaryosunda yalnızca uygulama kurulumu değil, erişim mimarisi düşünmek gerekir.",
          ],
        },
        {
          type: "service-fit",
          title: "Sadece telefondan görüntü açmak ile işe yarar uzaktan görünürlük arasındaki fark",
          description:
            "Bu sayfanın en kritik ayrımı budur. Telefonda canlı görüntü açabiliyor olmak, işletme açısından işe yarar bir uzaktan görünürlük modeli kurulduğu anlamına gelmez.",
          items: [
            "Basit mobil izleme çoğu zaman yalnızca görüntü açmaya yarar; kayıt tarafının gerçekten çalışıp çalışmadığı bu modelde görünmeyebilir.",
            "İşe yarar uzaktan görünürlükte kullanıcı kim, hangi kameraları görmeli, kayıt akışı nasıl kontrol edilmeli gibi sorular baştan cevaplanır.",
            "Bir şube veya saha sorunu yaşadığında yönetim tarafının neyi uzaktan görebileceği önceden tanımlanır.",
            "Bu yaklaşım, uzaktan erişimi günlük kullanım aracı haline getirir; sadece ihtiyaç anında denenip çalışmazsa fark edilen bir özellik olmaktan çıkarır.",
          ],
        },
        {
          type: "pricing-factors",
          description:
            "Uzaktan izleme tarafında fiyat ve süre, kameranın markasından çok erişim mimarisine bağlıdır. Aynı sayıda kameraya sahip iki yapının iş yükü, kullanıcı modeli ve ağ durumu tamamen farklı olabilir.",
          items: [
            "Kamera sayısı, kayıt cihazı tipi ve mevcut ağ yapısı uzaktan görünürlük modelinin kapsamını etkiler.",
            "Tek lokasyon ile çok lokasyonlu yapılar arasında erişim mimarisi ve kullanıcı yetkisi farklı planlanır.",
            "Mobil erişim, masaüstü kullanım, kayıt kontrolü ve kullanıcı yetkileri birlikte kurgulandığında süre değişebilir.",
            "Modem, internet istikrarı, uzak erişim yapılandırması ve mevcut cihaz uyumu ek iş ihtiyacı doğurabilir.",
          ],
        },
        {
          type: "takeover-process",
          description:
            "Sık görülen durumlardan biri, mevcut sistemde bir uygulama hesabı olması ama yönetilebilir bir uzaktan erişim düzeni olmamasıdır. Böyle durumlarda önce mevcut yapının nereye kadar kullanılabileceğini netleştiririz.",
          items: [
            "Önce mevcut kayıt cihazı, uzak erişim yöntemi, kullanıcı hesabı yapısı ve internet tarafı incelenir.",
            "Çalışan ama düzensiz erişim modeli ile gerçekten sürdürülebilir görünürlük yapısı birbirinden ayrılır.",
            "Başka ekip tarafından kurulmuş sistemlerde şifre, yetki ve cihaz bağımlılıkları varsa bunlar baştan tespit edilir.",
            "Gerekirse erişim tarafı düzeltilir, gerekirse revizyon veya bakım ihtiyacı ayrı teknik karar olarak sunulur.",
          ],
        },
        {
          type: "prep-checklist",
          description:
            "Uzaktan izleme görüşmeleri en hızlı, erişim tarafındaki mevcut tablo net aktarıldığında ilerler. Kimin bağlanacağı, bugün neyin çalışıp neyin kopuk olduğu bilgisi süreci ciddi biçimde kısaltır.",
          items: [
            "Kaç lokasyonun izleneceği ve kimlerin erişim kullanacağı bilgisi ilk planlamayı hızlandırır.",
            "Mevcut kamera ve kayıt cihazı modeli, uzaktan erişim senaryosunun teknik uygunluğunu anlamayı kolaylaştırır.",
            "Mobil uygulama veya masaüstü tarafta yaşanan somut sorunları paylaşmanız doğru müdahale yolunu netleştirir.",
            "Erişim yetkisi, internet yapısı ve mevcut kullanıcı ihtiyacı baştan bilindiğinde tekrar işlem riski azalır.",
          ],
        },
      ],
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
      relatedPagesTitle: "Uzaktan Görünürlüğü Destekleyen İlgili Sayfalar",
      relatedPagesDescription:
        "Uzaktan izleme tek başına uygulama kurulumu değildir. Aşağıdaki sayfalar; kurulum, bakım ve arıza müdahalesiyle birlikte düşünüldüğünde uzaktan görünürlüğün neden daha sağlıklı çalıştığını gösterir.",
      relatedPages: [
        {
          title: "Bakım, Servis ve Uzaktan İzleme",
          href: "/bakim-servis-uzaktan-izleme",
          description:
            "Uzaktan görünürlüğü bakım ve servis disipliniyle birlikte ele alan daha geniş çerçeveyi görmek için bu sayfaya geçin.",
          ctaLabel: "Genel modeli inceleyin",
        },
        {
          title: "Kamera Sistemi Bakım Sözleşmesi",
          href: "/kamera-sistemi-bakim-sozlesmesi",
          description:
            "Çevrim içi görünürlüğü düzenli saha kontrolüyle tamamlamak istiyorsanız bakım sözleşmesi sayfası doğru devam adımıdır.",
          ctaLabel: "Bakım sözleşmesini görün",
        },
        {
          title: "Kamera Arıza Servisi",
          href: "/kamera-ariza-servisi",
          description:
            "Sorunun uzaktan görünürlükten mi yoksa cihaz, kayıt veya ağ arızasından mı kaynaklandığını ayırmak için arıza servisi sayfasına geçin.",
          ctaLabel: "Arıza triage sayfasına gidin",
        },
      ],
      cityLinksSection: {
        title: "Şehre Göre Uzaktan Kamera İzleme Kurgusu",
        description:
          "Uzaktan izleme ihtiyacı şehirden bağımsız görünse de lokasyon tipi, şube yapısı ve bağlantı disiplini yerel projelerde farklı kararlar doğurur. Aşağıdaki sayfalar, bulunduğunuz şehirde uzaktan görünürlüğün nasıl kurgulanacağını daha net gösterir.",
        links: buildCityServiceLinks("uzaktan-kamera-izleme", [...priorityCities], {
          getLabel: (cityName) => `${cityName} uzaktan kamera izleme`,
          getDescription: (cityName) =>
            `${cityName} için uzaktan erişim modeli, kayıt görünürlüğü ve çok lokasyon kullanım mantığını inceleyin.`,
        }),
      },
      defaultService: "bakim-servis",
      ctaContent: {
        badge: "Uzaktan görünürlük • Altyapı uygunluğu",
        title: "Uzaktan izleme modelinizin neyi kapsayacağını birlikte netleştirelim",
        subtitle:
          "İhtiyacınız telefondan izlemek mi, çok lokasyon görünürlüğü mü, yoksa kayıt ve cihaz durumunu da uzaktan takip etmek mi? Önce bunu ayıralım.",
        primaryLabel: `Hemen Ara: ${"+90 542 593 49 00"}`,
        secondaryLabel: "Uzaktan izleme ihtiyacınızı iletin",
        secondaryHref: "/iletisim?konu=uzaktan-izleme-modeli",
        intentTag: "Erişim modeli",
        preFormNote:
          "Bugün neyin çalıştığını, neyin kopuk olduğunu kısaca yazmanız çoğu durumda ilk ayrımı yapmaya yeter.",
        helperText:
          "Uygulama var ama düzenli kullanılmıyor veya kullanıcı yetkileri dağınıksa bunu ilk görüşmede ayırabiliriz.",
        trustItems: [
          "Basit mobil izleme ile işe yarar uzaktan görünürlük ihtiyacının birbirinden ayrılması",
          "Kullanıcı yetkisi, cihaz uyumu, internet kararlılığı ve erişim güvenliğinin birlikte değerlendirilmesi",
          "Tek lokasyon ve çok lokasyon yapılar için farklı erişim modellerinin planlanması",
          "Mevcut altyapının nereye kadar yeterli olduğu ve hangi noktada revizyon gerektirdiğinin başlangıçta konuşulması",
        ],
        supportCards: [
          {
            title: "Teklif sınırı netliği",
            text: "Bu hizmetin yalnızca uygulama kurulumu mu, yoksa kayıt görünürlüğü ve çok lokasyon kullanımı mı gerektirdiğini baştan ayırıyoruz.",
          },
          {
            title: "Altyapı uygunluğu",
            text: "Kayıt cihazı, internet yapısı, kullanıcı modeli ve erişim tarafının bu yapıyı taşıyıp taşımadığını kontrol ediyoruz.",
          },
        ],
      },
    },
  },
  "kartli-gecis-sistemi-kurulumu": {
    metadataTitle:
      "Kartlı Geçiş ve Turnike Sistemi Kurulumu | Kapı Tipi ve Kullanım Yoğunluğuna Göre Seçim",
    metadataDescription:
      "Kartlı geçiş ve turnike sistemi kurulumu için kapı tipi, kullanıcı yoğunluğu, okuyucu veya turnike ihtiyacı ve yetki seviyesini birlikte değerlendirin. Yapınıza uygun geçiş modelini netleştirin.",
    data: {
      slug: "kartli-gecis-sistemi-kurulumu",
      title: "Kartlı Geçiş ve Turnike Sistemi Kurulumu",
      heroPrimaryCtaLabel: "Geçiş modeli analizi isteyin",
      heroPanel: {
        title: "Karar destekli bir kurulum sayfası",
        intro:
          "Bu sayfa ürünü değil, geçiş modelini seçmeye yardım eder. Kapı tipi, yoğunluk ve yetki mantığı aynı anda değerlendirilir.",
        points: [
          "Küçük ofis, yoğun tesis, site ve kritik alan kullanımını aynı kurguya zorlamaz.",
          "Okuyucu, kilit, turnike ve entegrasyon ihtiyacını gereksiz genişletmeden ayırır.",
          "Kurulum sonrası kullanıcı ve yetki yönetimini baştan hesaba katar.",
        ],
      },
      sectionOrder: ["contentBlocks", "process", "relatedPages", "cityLinks", "faq"],
      detailSectionTitle: "Hizmet Kapsamı",
      subtitle:
        "Kartlı geçiş sistemi kurulumu yalnızca kapıya okuyucu takmak anlamına gelmez. Doğru kurgu; kapı tipine, kullanıcı yoğunluğuna, personel ve ziyaretçi akışına, ortak alan ile kritik alan ayrımına ve yetki seviyesine göre şekillenir. Bu sayfa, yapınıza hangi geçiş modelinin daha uygun olduğunu netleştirmek için hazırlandı.",
      description:
        "Kartlı geçiş sistemi seçiminde en sık hata, farklı kullanım senaryolarını tek ürün mantığıyla çözmeye çalışmaktır. Küçük bir ofis kapısı ile vardiyalı depo girişi, apartman ortak alanı ile kritik oda geçişi aynı yapı değildir.\n\nBu nedenle kurulum sürecinde önce geçiş noktalarının tipi, kullanıcı yoğunluğu, okuyucu veya turnike ihtiyacı, kilit altyapısı ve yetki kurgusu ayrıştırılır. Ardından personel, ziyaretçi, ortak alan ve kritik alan gibi farklı geçiş ihtiyaçlarına göre sistemin nasıl yönetileceği netleştirilir.\n\nBurada satılan şey sadece cihaz montajı değil; günlük kullanımı, sonradan kullanıcı ekleme-çıkarma disiplinini ve gerektiğinde kamera ya da alarm entegrasyonunu da hesaba katan uygulanabilir bir giriş kontrol modelidir.",
      heroBadge: "Keşif analizi • Geçiş modeli seçimi",
      heroHighlights: [
        "Kapı tipi, kullanıcı yoğunluğu ve yetki seviyesine göre doğru geçiş modelinin ayrıştırılması",
        "Okuyucu, kilit veya turnike ihtiyacının kullanım senaryosuna göre belirlenmesi",
        "Küçük ofis, yoğun tesis, apartman, site, işyeri ve depo gibi farklı yapıların aynı mantıkta değerlendirilmemesi",
        "Kurulum sonrası kullanıcı ve yetki yönetimini taşıyabilecek bir sistem kurgusunun planlanması",
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
          "Kontrolsüz giriş yapıları yalnızca güvenlik açığı üretmez; anahtar karmaşası, kullanıcı takibi zorluğu ve operasyonel düzensizlik de doğurur.",
          "Özellikle ofis, site, depo ve ortak alan kullanan yapılarda geçiş modeli baştan doğru kurulmazsa sonradan kullanıcı yönetimi ve kapı disiplini daha maliyetli hale gelir.",
          "Kapı tipi, yoğunluk ve yetki seviyesi gecikmeli düşünülürse yanlış okuyucu, yetersiz kilit altyapısı veya gereksiz turnike kararlarıyla karşılaşmak daha olası olur.",
        ],
        noteTitle: "Önce hangi yapıya hangi modelin uygun olduğunu netleştirelim",
        noteText:
          "Kapı yapınız, kullanıcı yoğunluğunuz veya entegrasyon ihtiyacınız net değilse ilk aşamada sorun değil. Önce geçiş senaryosunu ayıralım, sonra uygun kurulum modeline karar verelim.",
      },
      processSection: {
        title: "Kurulum ve Yetki Akışı Nasıl Planlanır?",
        steps: [
          { step: 1, title: "Geçiş senaryosu ayrılır", description: "Kapı tipi, kullanıcı yoğunluğu ve personel, ziyaretçi, ortak alan veya kritik alan farkı netleştirilir." },
          { step: 2, title: "Donanım ve yetki modeli seçilir", description: "Okuyucu, kilit, turnike ve temel yetki yapısı kullanım senaryosuna göre belirlenir." },
          { step: 3, title: "Kurulum ve entegrasyon planlanır", description: "Gerekiyorsa kamera veya alarm tarafındaki operasyonel entegrasyon başlıkları da eklenir." },
          { step: 4, title: "Yönetim akışı devreye alınır", description: "Kurulum sonrası kullanıcı ekleme, yetki güncelleme ve günlük kullanım mantığı netleştirilir." },
        ],
      },
      contentBlocks: [
        {
          type: "service-fit",
          description:
            "Kartlı geçiş kurulumu, yalnızca kapıya okuyucu takmak gerektiğinde değil; kullanıcı akışı, yetki disiplini ve geçiş yönetimi birlikte düşünülmek istendiğinde anlam kazanır.",
          items: [
            "Giriş çıkışı kimlerin, hangi saatlerde ve hangi alanlarda kullanacağı net yönetilmek isteniyorsa bu hizmet uygundur.",
            "Anahtar karmaşası büyüdüyse veya kullanıcı bazlı yetki ihtiyacı oluştuysa kartlı geçiş kurulumu daha doğru hale gelir.",
            "Ofis, site, depo veya kontrollü oda gibi alanlarda geçiş kaydı ve yetki düzeni birlikte gereklidir.",
            "Kapı, turnike ve kamera entegrasyonu birlikte düşünülüyorsa proje baştan doğru senaryoyla planlanmalıdır.",
          ],
        },
        {
          type: "service-fit",
          title: "Hangi yapı için hangi geçiş modeli daha uygundur?",
          description:
            "Her yapı aynı giriş kontrol mantığına ihtiyaç duymaz. Doğru model; kapının nasıl kullanıldığına, kullanıcı yoğunluğuna ve geçişin ne kadar kritik olduğuna göre belirlenir.",
          items: [
            "Küçük ofislerde çoğu zaman tek kapı, sınırlı kullanıcı ve temel yetki mantığı yeterliyken; yoğun tesislerde giriş akışını taşıyacak daha güçlü kurgu gerekir.",
            "Apartman ve site tarafında ortak alan, blok girişi ve otopark senaryosu öne çıkarken; işyeri ve depoda personel akışı, vardiya ve kontrollü alan kullanımı daha belirleyici olur.",
            "Kritik alanlara sahip yapılarda yalnızca kapının açılması değil, kimin ne zaman hangi alana erişeceğinin daha net yönetilmesi gerekir.",
            "Bu nedenle bazı yapılarda okuyucu ve kilit yeterli olur, bazı yapılarda turnike, ilave kapı kontrolü veya entegrasyon daha doğru hale gelir.",
          ],
        },
        {
          type: "scope-details",
          title: "Seçim çerçevesi: hangi başlıklar belirleyicidir?",
          description:
            "Doğru sistemi seçmek için ürün adı değil, kullanım çerçevesi netleştirilmelidir. Bu yüzden keşif aşamasında aşağıdaki başlıkları ayrı ayrı değerlendiririz.",
          includedTitle: "Seçimi belirleyen ana başlıklar",
          includedItems: [
            "Kapı tipi, kapının fiziksel yapısı ve mevcut kilit altyapısı",
            "Kullanıcı yoğunluğu ve gün içindeki geçiş trafiği",
            "Okuyucu, kilit veya turnike ihtiyacının gerçekten gerekli olup olmadığı",
            "Yetki seviyesi: personel, ziyaretçi, ortak alan ve kritik alan farkı",
            "Günlük kullanımın ne kadar basit veya ne kadar kontrollü olması gerektiği",
          ],
          additionalTitle: "Seçimi değiştirebilen ek başlıklar",
          additionalItems: [
            "Mevcut kapı, kilit veya turnike altyapısının revizyon ihtiyacı",
            "Yüksek yoğunluklu geçişlerde ilave donanım veya farklı geçiş modeli gereksinimi",
            "Kamera veya alarm entegrasyonunun operasyonel açıdan gerekli olup olmadığı",
            "Kullanıcı yönetimi ve raporlama beklentisinin kapsamı genişletmesi",
          ],
        },
        {
          type: "service-fit",
          title: "Küçük ofis, yoğun tesis, apartman, site, işyeri ve depo için fark nedir?",
          description:
            "Geçiş modeli seçilirken yapı tipi ikinci planda görünür ama günlük kullanım farkını en çok burada hissedersiniz. Aynı cihaz yaklaşımı her yapıda aynı sonucu vermez.",
          items: [
            "Küçük ofislerde amaç çoğu zaman anahtar karmaşasını bitirmek ve belirli kullanıcıları düzenli yönetmektir.",
            "Yoğun tesis veya depo tarafında giriş akışı daha hızlı, daha kalabalık ve daha kontrollü ilerlemek zorundadır; bu yüzden donanım ve yetki kurgusu daha kritik hale gelir.",
            "Apartman ve site tarafında ortak alan, blok girişi, otopark ve ziyaretçi akışı öne çıkar; işyerinde ise personel, ziyaretçi ve kritik alan ayrımı daha belirgindir.",
            "Bu farklar, yalnızca hangi cihazın takılacağını değil, sistemin sonradan nasıl yönetileceğini de doğrudan etkiler.",
          ],
        },
        {
          type: "pricing-factors",
          description:
            "Kartlı geçiş projelerinde maliyet ve süreyi belirleyen ana unsur cihaz adı değil, geçiş noktasının gerçek kullanım senaryosudur. Aynı sayıda kapısı olan iki yapının ihtiyacı, kapı tipi ve kullanıcı yoğunluğu nedeniyle ciddi şekilde değişebilir.",
          items: [
            "Kapı sayısı, kapı tipi ve mevcut kilit yapısı kurulumun teknik kapsamını etkiler.",
            "Düşük yoğunluklu ofis kullanımı ile vardiyalı depo veya turnikeli giriş senaryoları aynı planla ilerlemez.",
            "Kullanıcı yetkisi, ziyaretçi yönetimi veya raporlama beklentisi arttıkça sistem kurgusu genişler.",
            "Kamera, alarm veya turnike entegrasyonu gerekiyorsa proje süresi ve altyapı ihtiyacı ayrıca değerlendirilir.",
          ],
        },
        {
          type: "takeover-process",
          description:
            "Bazı yapılarda eski kapı kontrol parçaları, yarım kalmış kurulumlar veya çalışıyor gibi görünen ama yönetilemeyen sistemler devralınır. Böyle durumlarda önce mevcut yapının nereye kadar kullanılabileceğini ayırıyoruz.",
          items: [
            "Mevcut okuyucu, kilit, buton, panel veya turnike altyapısı varsa önce bunların durumu incelenir.",
            "Kısmen çalışan ama yetki yönetimi zayıf olan kurulumlar ile tamamen değişmesi gereken yapılar ayrıştırılır.",
            "Eski altyapı kullanılabilecekse yeni kurgu buna göre şekillendirilir; kullanılamayacaksa nedenleri açık belirtilir.",
            "Kurulum öncesi revizyon gerektiren kapı, enerji veya entegrasyon başlıkları ayrıca karar kalemi olarak sunulur.",
          ],
        },
        {
          type: "takeover-process",
          title: "Kurulum sonrası kullanıcı ve yetki yönetimi nasıl ilerler?",
          description:
            "Kartlı geçiş sisteminin başarısı sadece kurulum gününde değil, sonrasında kullanıcı ekleme-çıkarma ve yetki düzeninin ne kadar yönetilebilir olduğunda ortaya çıkar. Bu yüzden kullanım sonrası akış da baştan düşünülmelidir.",
          items: [
            "Yeni kullanıcı ekleme, yetki değiştirme ve erişim kaldırma ihtiyacının günlük kullanımda nasıl ilerleyeceği netleştirilir.",
            "Personel, ziyaretçi, ortak alan ve kritik alan kullanıcıları aynı mantıkla değil, ihtiyaçlarına göre ayrıştırılır.",
            "Yetki yapısı karmaşıklaştığında sistemin yönetilebilir kalması için başta sade ama doğru bir kurgu tercih edilir.",
            "Kurulum sonrası yönetim düzeni zayıf bırakılırsa iyi donanım bile kısa sürede karışık ve verimsiz hale gelebilir.",
          ],
        },
        {
          type: "scope-details",
          title: "Kamera ve alarm entegrasyonu hangi noktalarda gerçekten anlamlıdır?",
          description:
            "Entegrasyon her projede gerekli değildir. Ama doğru yerde düşünüldüğünde geçiş bilgisini olay doğrulama ve operasyonel takip açısından daha kullanışlı hale getirir.",
          includedTitle: "Entegrasyonun gerçekten değer ürettiği senaryolar",
          includedItems: [
            "Giriş noktasında kamera ile birlikte kullanıldığında kim geçti sorusunu görüntü ile doğrulamak",
            "Kritik alanlarda alarm ve geçiş bilgisini birlikte düşünerek yetkisiz giriş riskini daha görünür hale getirmek",
            "Yüksek değerli veya kontrollü alanlarda olay sonrası incelemeyi kolaylaştırmak",
          ],
          additionalTitle: "Her projede zorunlu olmayan durumlar",
          additionalItems: [
            "Basit tek kapılı ve düşük yoğunluklu kullanım senaryolarında entegrasyonun ikincil kalması",
            "Önce temel geçiş modelinin doğru kurulup sonra entegrasyon ihtiyacının değerlendirilmesi",
          ],
        },
        {
          type: "prep-checklist",
          description:
            "Kartlı geçiş projelerinde ilk görüşmeyi hızlandıran en kritik bilgi, kaç kullanıcı olduğundan önce hangi kapılarda nasıl bir geçiş akışı beklendiğidir.",
          items: [
            "Kaç kapı veya geçiş noktası olduğu ve bu alanları kimlerin kullanacağı ilk planlamayı kolaylaştırır.",
            "Ofis, apartman, depo veya kontrollü oda gibi yapı tipi bilgisi doğru senaryo kurmak için gereklidir.",
            "Mevcut kapı, kilit veya turnike yapısı varsa bunu baştan paylaşmak teknik uygunluk değerlendirmesini hızlandırır.",
            "Kamera veya alarm entegrasyonu düşünülüyorsa hangi kapılarda neden gerektiğini belirtmek kapsamı daha doğru netleştirir.",
          ],
        },
      ],
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
      relatedPagesTitle: "Kartlı Geçiş Kararını Destekleyen İlgili Sayfalar",
      relatedPagesDescription:
        "Kartlı geçiş kararı çoğu zaman tek başına verilmez. Giriş kontrolünün kamera doğrulaması, alarm senaryosu veya genel işyeri güvenlik kurgusu ile nasıl birleştiğini aşağıdaki sayfalardan daha net değerlendirebilirsiniz.",
      relatedPages: [
        {
          title: "İşyeri Güvenlik Sistemi",
          href: "/isyeri-guvenlik-sistemi",
          description:
            "Kartlı geçişi işyeri kamera ve alarm altyapısıyla birlikte ele almak istiyorsanız bu sayfadan daha geniş kurguya geçin.",
          ctaLabel: "İşyeri güvenlik kurgusunu görün",
        },
        {
          title: "Apartman ve Site Güvenlik Sistemi",
          href: "/apartman-site-guvenlik-sistemi",
          description:
            "Site girişleri, otopark ve ortak alan geçişlerini daha bütüncül değerlendirmek için bu sayfa daha uygun devam adımıdır.",
          ctaLabel: "Site giriş senaryolarını inceleyin",
        },
        {
          title: "Fabrika ve Depo Güvenlik Sistemi",
          href: "/fabrika-depo-guvenlik-sistemi",
          description:
            "Yoğun tesis veya depo girişlerinde kartlı geçişi çevre güvenliği ve kamera disipliniyle birlikte düşünmek için bu sayfayı kullanın.",
          ctaLabel: "Tesis güvenlik kurgusuna geçin",
        },
      ],
      cityLinksSection: {
        title: "Şehre Göre Kartlı Geçiş ve Turnike Sistemi Kurulum Yaklaşımı",
        description:
          "Kartlı geçiş ve turnike kurulumu şehir adıyla değil, bina tipi ve kullanım yoğunluğu ile şekillenir; yine de yerel proje yapısı, keşif ve uygulama detaylarını etkiler. Aşağıdaki şehir sayfaları hangi şehirde hangi kullanım senaryosunun öne çıktığını daha ticari çerçevede gösterir.",
        links: buildCityServiceLinks("kartli-gecis-sistemi-kurulumu", [...priorityCities], {
          getLabel: (cityName) => `${cityName} kartlı geçiş ve turnike kurulumu`,
          getDescription: (cityName) =>
            `${cityName} için kartlı geçiş, turnike ve kapı tipi seçim mantığını bu sayfada görün.`,
        }),
      },
      defaultService: "kartli-gecis",
      blogPosts: [
        {
          slug: "kartli-gecis-sistemi-nedir",
          title: "Kartlı Geçiş Sistemi Nedir?",
          excerpt:
            "Kartlı geçiş sistemi çalışma prensibi, kullanım alanları, kart türleri, teknolojiler ve fiyat rehberi.",
        },
        {
          slug: "turnike-sistemi-fiyatlari",
          title: "Turnike Sistemi Fiyatları 2026",
          excerpt:
            "Turnike sistem türleri, fiyatları, seçim kriterleri ve toplam maliyet rehberi.",
        },
      ],
      ctaContent: {
        badge: "Keşif • Uygunluk analizi",
        title: "Hangi yapıda hangi geçiş modelinin uygun olduğunu birlikte netleştirelim",
        subtitle:
          "Kapı tipini, kullanıcı yoğunluğunu ve yetki seviyesini birlikte değerlendirelim. Okuyucu mu, kilit mi, turnike mi yoksa daha sade bir model mi gerektiğini baştan ayıralım.",
        primaryLabel: `Hemen Ara: ${"+90 542 593 49 00"}`,
        secondaryLabel: "Geçiş analizi isteyin",
        secondaryHref: "/iletisim?konu=gecis-analizi",
        helperTone: "direct",
        intentTag: "Keşif notu",
        preFormNote:
          "Kapı tipi veya kullanıcı yoğunluğu tam net değilse sorun değil; ilk görüşmede doğru modeli birlikte çıkarırız.",
        helperText:
          "Mevcut kapı veya kilit yapısını paylaşırsanız uygunluk analizi daha hızlı çıkar.",
        trustItems: [
          "Kapı tipi, kullanıcı yoğunluğu ve yetki seviyesinin proje başında ayrıştırılması",
          "Mevcut kapı veya kilit yapısına uyum durumunun keşif ile netleştirilmesi",
          "Okuyucu, kilit, turnike ve entegrasyon ihtiyacının gereksiz genişletilmeden belirlenmesi",
          "Kurulum sonrası kullanıcı ve yetki yönetiminin nasıl ilerleyeceğinin başlangıçta konuşulması",
        ],
        supportCards: [
          {
            title: "Kullanım yoğunluğu",
            text: "Kapıların nasıl kullanıldığını ve yoğunluğun hangi donanım seviyesini gerektirdiğini birlikte değerlendiriyoruz.",
          },
          {
            title: "Altyapı uyumu",
            text: "Mevcut kapı, kilit ve entegrasyon yapısının bu kurguya ne kadar uygun olduğunu baştan kontrol ediyoruz.",
          },
        ],
      },
    },
  },
};

export function getServiceHubPageConfig(serviceSlug: string) {
  return serviceHubPageConfigs[serviceSlug];
}
