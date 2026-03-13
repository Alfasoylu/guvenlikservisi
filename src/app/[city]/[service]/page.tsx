import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceVisualSection from "@/components/ServiceVisualSection";
import CityHubSection from "@/components/service-page/CityHubSection";
import RelatedServicesSection from "@/components/service-page/RelatedServicesSection";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import ServiceDistricts from "@/components/service-page/ServiceDistricts";
import ServiceFAQ from "@/components/service-page/ServiceFAQ";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServicePackages from "@/components/service-page/ServicePackages";
import ServiceSEOContent from "@/components/service-page/ServiceSEOContent";
import ServiceStats from "@/components/service-page/ServiceStats";
import ServiceUseCases from "@/components/service-page/ServiceUseCases";
import { pageShellClass } from "@/components/service-page/styles";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import { getCityServicePageVisuals } from "@/lib/page-images";
import {
  getCityCanonicalUrl,
  getCityPath,
  getCityServiceCanonicalUrl,
  getCityServiceStaticParams,
} from "@/lib/routes";
import { getServicePageFactoryData } from "@/lib/service-page-factory";

export const dynamic = "force-static";
export const dynamicParams = false;

interface PageProps {
  params: Promise<{
    city: string;
    service: string;
  }>;
}

interface ServiceSpecificContent {
  heroIntro: string;
  useCases: string[];
  installationSteps: string[];
  seoBlocks?: {
    title: string;
    paragraphs: string[];
    items?: string[];
  }[];
  authoritySections?: {
    title: string;
    paragraphs: string[];
    items?: string[];
    imageSrc?: string;
    imageAlt?: string;
  }[];
  conversionBlocks?: {
    title: string;
    description: string;
    whatsappText: string;
    supportingLink?: {
      href: string;
      label: string;
    };
  }[];
  sectionTitle1: string;
  sectionBody1: string;
  sectionTitle2: string;
  sectionBody2: string;
  ctaText: string;
  trustBlock: string;
  trustTitle: string;
  trustBody: string;
  trustBullets: string[];
  faqExtras: {
    question: string;
    answer: string;
  }[];
  faqExtraItems: {
    question: string;
    answer: string;
  }[];
  section1Cards: {
    title: string;
    items: string[];
  }[];
  processSteps: string[];
  pricingFactors: string[];
  relatedLinks: {
    href: string;
    label: string;
  }[];
}

type CityRecord = (typeof cities)[number];
type ServiceRecord = (typeof services)[number];
type FactoryPageContent = ReturnType<typeof getServicePageFactoryData>;

function buildSectionCards(items: string[]) {
  const cards = [];

  for (let index = 0; index < items.length; index += 3) {
    const chunk = items.slice(index, index + 3);

    cards.push({
      title: `Hizmet alanı ${Math.floor(index / 3) + 1}`,
      items: chunk,
    });
  }

  return cards;
}

function buildDefaultServiceSpecificContent(
  city: CityRecord,
  service: ServiceRecord,
  pageContent: FactoryPageContent
): ServiceSpecificContent {
  const useCases =
    pageContent.useCases.items.length > 0
      ? pageContent.useCases.items
      : [
          `${city.name} içinde ${service.name.toLocaleLowerCase("tr-TR")} ihtiyacı olan projeler`,
          `${city.name} içinde mevcut sistemin iyileştirilmesi gereken alanlar`,
          `${city.name} içinde keşif ve hızlı teklif gerektiren ticari mekanlar`,
        ];

  const processSteps =
    pageContent.hero.process.length > 0
      ? pageContent.hero.process
      : [
          "İhtiyacın ve mevcut sistemin analiz edilmesi",
          "Uygun çözüm ve müdahale planının çıkarılması",
          "Saha uygulaması veya teknik yapılandırmanın tamamlanması",
          "Test, teslim ve sonraki adımların netleştirilmesi",
        ];

  const trustBullets =
    pageContent.hero.benefits.length > 0
      ? pageContent.hero.benefits
      : [
          "Şehir içi hızlı keşif ve ön değerlendirme",
          "Mevcut sistem durumuna göre doğru çözüm planlama",
          "Teslim sonrası bakım ve destek yönlendirmesi",
        ];

  return {
    heroIntro: pageContent.hero.intro,
    useCases,
    installationSteps: processSteps,
    sectionTitle1: pageContent.useCases.title || `${service.name} hangi alanlarda tercih edilir?`,
    sectionBody1:
      pageContent.useCases.description ||
      `${city.name} içinde ${service.name.toLocaleLowerCase("tr-TR")} ihtiyacı bulunan kullanım senaryolarını aşağıda özetledik.`,
    sectionTitle2: `${service.name} süreci nasıl ilerler?`,
    sectionBody2:
      pageContent.stats.description ||
      `${city.name} içinde ${service.name.toLocaleLowerCase("tr-TR")} hizmetini keşif, planlama ve teslim adımlarıyla yürütüyoruz.`,
    ctaText:
      pageContent.cta.description ||
      `${city.name} içinde ${service.name.toLocaleLowerCase("tr-TR")} için hızlı keşif ve teklif süreci sunuyoruz.`,
    trustBlock: `${city.name} içinde ${service.name.toLocaleLowerCase("tr-TR")} hizmetinde doğru teşhis, doğru planlama ve sürdürülebilir sonuç odaklı çalışıyoruz.`,
    trustTitle: `${service.name} hizmetinde neden profesyonel ekip gerekir?`,
    trustBody:
      pageContent.hero.localContext ||
      `${city.name} içinde ${service.name.toLocaleLowerCase("tr-TR")} ihtiyacı, sahaya ve mevcut sisteme göre değiştiği için çözümü standart değil proje bazlı planlıyoruz.`,
    trustBullets,
    faqExtras: [],
    faqExtraItems: [],
    section1Cards: buildSectionCards(useCases),
    processSteps,
    pricingFactors: [
      "Mevcut sistemin durumu",
      "Cihaz ve ekipman sayısı",
      "Saha erişimi ve montaj koşulları",
      "Kayıt ve uzaktan erişim beklentisi",
      "Bakım veya teknik servis kapsamı",
    ],
    relatedLinks: pageContent.relatedServices.slice(0, 3).map((link) => ({
      href: link.href,
      label: link.label,
    })),
  };
}

const serviceContentMap: Record<string, ServiceSpecificContent> = {
  "kamera-sistemi-kurulumu": {
    heroIntro:
      "İşletmeler, apartmanlar, depo ve fabrika alanları ile ev güvenliği ihtiyaçları için keşif, montaj ve mobil izleme odaklı IP kamera çözümleri sunuyoruz.",
    useCases: [
      "Apartman ve site girişlerinde ziyaretçi ve araç hareketinin düzenli takibi",
      "Mağaza ve işyerlerinde kasa, raf ve giriş hattında güvenlik denetimi",
      "Depo ve fabrika sahalarında yükleme-boşaltma alanlarının kesintisiz izlenmesi",
      "Otopark, çevre hattı ve ortak alanlarda caydırıcılığı artıran görüntüleme",
    ],
    installationSteps: [
      "Ücretsiz keşif ve riskli noktaların sahada belirlenmesi",
      "Kamera yerleşim planı ve kayıt mimarisinin projelendirilmesi",
      "Kablolama, cihaz kurulumu ve ağ yapılandırmasının tamamlanması",
      "Mobil uygulama, uzaktan erişim ve kullanıcı yetki ayarlarının yapılması",
      "Saha testleri sonrası performans kontrolü ve kullanıcı teslimi",
    ],
    sectionTitle1: "IP Kamera Kurulumu Nerelerde Kullanılır?",
    sectionBody1:
      "Doğru kurulum senaryosu kullanım alanına göre değişir. Aşağıdaki başlıklar en sık talep edilen uygulama alanlarını gösterir.",
    sectionTitle2: "IP Kamera Kurulum Süreci",
    sectionBody2:
      "Süreci adım adım planlayarak hem teknik doğruluğu hem de kullanım kolaylığını birlikte hedefliyoruz.",
    ctaText:
      "IP kamera sistemi kararını hızlandırmak için şehir, mekan tipi ve hedef kayıt süresine göre hızlı keşif planı oluşturuyoruz.",
    authoritySections: [
      {
        title: "Kamera Sistemi Kurulumu Nedir?",
        paragraphs: [
          "Kamera sistemi kurulumu, işletme ve yaşam alanlarında güvenliği artırmak için doğru noktaların keşif ile belirlenmesi, kayıt altyapısının planlanması ve görüntü kalitesinin ihtiyaca göre optimize edilmesi sürecidir.",
          "Profesyonel kurulum sayesinde sadece görüntü almak değil, olay anında net kayıt elde etmek, uzaktan izleme ile anlık kontrol sağlamak ve caydırıcılığı görünür hale getirmek mümkün olur.",
        ],
        items: [
          "Hızlı keşif ve aynı gün planlama",
          "Uygun fiyatlı ama performans odaklı cihaz seçimi",
          "Garanti ve teknik destekle sürdürülebilir güvenlik",
        ],
        imageSrc: "/images/landing/istanbul-ip-kamera-hero.webp",
        imageAlt: "IP kamera sistemi kurulumu örnek saha görüntüsü",
      },
      {
        title: "IP Kamera Sistemi Nasıl Çalışır?",
        paragraphs: [
          "IP kamera sistemi; kameraların ağ üzerinden kayıt cihazına veya bulut altyapısına görüntü iletmesi, depolama biriminde kayıt tutulması ve mobil uygulama ile uzaktan izleme yapılması prensibine dayanır.",
          "Doğru lens, doğru açı ve doğru kablolama yapılmadığında görüntü kalitesi düşer. Bu nedenle projeyi kurulum öncesinde kullanım senaryosuna göre planlayarak daha net, daha stabil ve daha ekonomik bir sonuç sağlıyoruz.",
        ],
        imageSrc: "/images/landing/ip-kamera-kurulum-detay.webp",
        imageAlt: "IP kamera teknik montaj detayı",
      },
    ],
    conversionBlocks: [
      {
        title: "Ücretsiz keşif ile kamera sisteminizi doğru planlayın",
        description:
          "Uzman ekibimiz şehir içinde hızlı keşif planı yapar, bütçenize uygun fiyat aralığını aynı gün netleştirir ve kurulum sonrası garanti ile teknik destek sürecini baştan tanımlar.",
        whatsappText: "Kamera sistemi kurulumu için ücretsiz keşif ve hızlı fiyat istiyorum.",
        supportingLink: {
          href: "/iletisim",
          label: "Teklif Formunu Doldur",
        },
      },
    ],
    trustBlock:
      "Kamera sisteminde doğru keşif, doğru açı planı ve doğru kayıt altyapısı birlikte kurulmadığında yatırım kısa sürede verim kaybeder. Bu nedenle projeyi yalnızca montaj değil, sürdürülebilir güvenlik performansı odağıyla kuruyoruz.",
    trustTitle: "Kamera yatırımında doğru keşif ve doğru montaj fark yaratır",
    trustBody:
      "Sadece cihaz takmak yerine görüş açısı, kayıt süresi ve günlük kullanım akışını birlikte planlayarak sistemi uzun vadede sorunsuz çalışacak şekilde kuruyoruz.",
    trustBullets: [
      "Şehir içi keşif planlaması",
      "Mekan tipine uygun kamera yerleşimi",
      "Mobil izleme kurulumu ve kullanıcı teslimi",
      "Teslim sonrası destek ve bakım önerisi",
      "Arıza riskini azaltan kurulum yaklaşımı",
    ],
    faqExtras: [
      {
        question: "IP kamera kurulumu kaç saat sürer?",
        answer:
          "Küçük ve orta ölçekli kurulumların çoğu aynı gün içinde tamamlanır. Kamera sayısı, kablolama mesafesi ve mekan yapısına göre net süre keşif sonrası belirlenir.",
      },
      {
        question: "Hangi ilçelerde hizmet veriyorsunuz?",
        answer:
          "Şehir genelinde ilçe bazlı hizmet veriyoruz. Proje kapsamına göre ücretsiz keşif planlaması yaparak uygun ekip yönlendirmesi sağlıyoruz.",
      },
      {
        question: "Kamera sistemini telefondan izleyebilir miyim?",
        answer:
          "Evet. Kurulum tamamlandıktan sonra telefon ve tablet üzerinden canlı izleme, kayıt erişimi ve temel bildirim ayarları kullanıma hazır şekilde teslim edilir.",
      },
      {
        question: "Kurulumdan sonra bakım gerekiyor mu?",
        answer:
          "Periyodik bakım önerilir. Kamera açıları, kayıt cihazı, disk sağlığı ve uzaktan erişim ayarlarının düzenli kontrolü sistemin kesintisiz çalışmasını destekler.",
      },
    ],
    faqExtraItems: [
      {
        question: "IP kamera kurulumu kaç saat sürer?",
        answer:
          "Küçük ve orta ölçekli kurulumların çoğu aynı gün içinde tamamlanır. Kamera sayısı, kablolama mesafesi ve mekan yapısına göre net süre keşif sonrası belirlenir.",
      },
      {
        question: "Hangi ilçelerde hizmet veriyorsunuz?",
        answer:
          "Şehir genelinde ilçe bazlı hizmet veriyoruz. Proje kapsamına göre ücretsiz keşif planlaması yaparak uygun ekip yönlendirmesi sağlıyoruz.",
      },
      {
        question: "Kamera sistemini telefondan izleyebilir miyim?",
        answer:
          "Evet. Kurulum tamamlandıktan sonra telefon ve tablet üzerinden canlı izleme, kayıt erişimi ve temel bildirim ayarları kullanıma hazır şekilde teslim edilir.",
      },
      {
        question: "Kurulumdan sonra bakım gerekiyor mu?",
        answer:
          "Periyodik bakım önerilir. Kamera açıları, kayıt cihazı, disk sağlığı ve uzaktan erişim ayarlarının düzenli kontrolü sistemin kesintisiz çalışmasını destekler.",
      },
    ],
    section1Cards: [
      {
        title: "Apartman ve site güvenliği",
        items: [
          "Bina girişleri ve ortak alanlar",
          "Asansör ve merdiven çevresi",
          "Site içi dolaşım noktaları",
        ],
      },
      {
        title: "İşyeri ve mağaza güvenliği",
        items: [
          "Kasa ve satış alanı takibi",
          "Giriş-çıkış kontrol noktaları",
          "Personel ve müşteri hareket akışı",
        ],
      },
      {
        title: "Depo ve fabrika izleme",
        items: [
          "Yükleme-boşaltma alanları",
          "Üretim ve stok bölgesi gözlemi",
          "Kritik giriş noktalarının kaydı",
        ],
      },
      {
        title: "Otopark ve bina çevresi",
        items: [
          "Araç giriş-çıkış noktaları",
          "Çevre hattı izleme",
          "Gece görüş odaklı dış alan takibi",
        ],
      },
    ],
    processSteps: [
      "Ücretsiz keşif",
      "Kamera noktalarının belirlenmesi",
      "Kablolama ve cihaz kurulumu",
      "Mobil uygulama bağlantısı",
      "Test ve teslim",
    ],
    pricingFactors: [
      "Kamera sayısı",
      "Kayıt süresi",
      "Kablolama mesafesi",
      "Gece görüş / ses özellikleri",
      "Uzaktan izleme",
    ],
    relatedLinks: [
      { href: "/kamera-sistemi-kurulumu", label: "Kamera Sistemi Kurulumu" },
      { href: "/bakim-servis-uzaktan-izleme", label: "Bakım Servis Uzaktan İzleme" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  "alarm-sistemi-kurulumu": {
    heroIntro:
      "Apartman, işyeri, mağaza ve depolar için alarm sistemi keşif, panel yerleşimi, dedektör konumlandırma ve uzaktan kontrol odaklı kurulum hizmeti sunuyoruz.",
    seoBlocks: [
      {
        title: "Alarm Sistemi Nedir",
        paragraphs: [
          "Alarm sistemi; izinsiz giriş, şüpheli hareket ve güvenlik ihlallerini erken algılayıp kullanıcıyı hızlıca uyaran entegre bir güvenlik altyapısıdır.",
          "Apartman, işyeri, mağaza ve depolarda doğru panel ve dedektör kurgusu ile risk anında tepki süresi kısalır ve maddi kayıp ihtimali azalır.",
        ],
      },
      {
        title: "Alarm Sistemi Nasıl Çalışır",
        paragraphs: [
          "Hareket dedektörü, manyetik kontak ve siren gibi bileşenler alarm paneline bağlı çalışır. Panel, tanımlanan senaryoya göre alarm üretir ve mobil bildirim gönderir.",
          "Doğru konumlandırma yapılmadığında yanlış alarm artar. Bu nedenle dedektör açısı, giriş-çıkış gecikmeleri ve kullanım senaryosu saha keşfiyle optimize edilir.",
        ],
        items: [
          "Panel ve dedektör uyumu",
          "Siren ve bildirim senaryosu",
          "Mobil kontrol ve kullanıcı yetkisi",
        ],
      },
      {
        title: "Alarm Sistemi Kurulum Süreci",
        paragraphs: [
          "Kurulum süreci keşif, projelendirme, montaj, test ve kullanıcı eğitimi adımlarından oluşur.",
          "Teslim öncesi yapılan saha testleriyle panel komutları, dedektör tepkileri ve alarm senaryoları doğrulanarak sistem güvenli şekilde devreye alınır.",
        ],
      },
      {
        title: "Alarm Sistemi Fiyatını Etkileyen Faktörler",
        paragraphs: [
          "Fiyat; panel kapasitesi, dedektör adedi, kablolu-kablosuz altyapı tercihi ve mekan büyüklüğüne göre değişir.",
          "Net maliyet için en doğru yöntem, kullanım alışkanlığı ve risk seviyesine göre sahada keşif yapılmasıdır.",
        ],
      },
      {
        title: "Alarm Sistemi Avantajları",
        paragraphs: [
          "Profesyonel alarm sistemi; izinsiz girişlerde anında uyarı üreterek müdahale süresini kısaltır, caydırıcılık etkisi ile hırsızlık girişimlerini önemli ölçüde azaltır. Alarm aktifken daire veya işyerine yaklaşan kişilerin caydırılması, polis veya güvenlik birimlerine bildirim ve mobil kontrol bir arada çalışır.",
          "Mobil uygulama entegrasyonu sayesinde işyeri veya evinizden uzaktayken bile sistemi kontrol edebilir, anlık bildirimlerle durumdan haberdar olabilirsiniz. Doğru kurulmuş bir alarm sistemi aynı zamanda sigorta primlerinde avantaj sağlar ve mülk değerini artırır.",
        ],
        items: [
          "Anında sesli ve görsel uyarı ile caydırıcılık",
          "Mobil kontrol ile uzaktan kurma ve çözme",
          "Sigorta primlerinde avantaj sağlama",
          "Gece-gündüz kesintisiz güvenlik",
          "Çok bölgeli alarm yönetimi esnekliği",
          "Mesai dışı saatlerde otomatik koruma",
        ],
      },
      {
        title: "Alarm Sistemi Bakımı ve Teknik Destek",
        paragraphs: [
          "Alarm sistemlerinde dedektör hassasiyeti, pil ömrü, panel yazılımı ve siren fonksiyonları periyodik olarak kontrol edilmelidir. Bakım yapılmayan sistemlerde yanlış alarm oranı artar veya gerçek tehlike anında gecikme yaşanır; bu da güvenlik yatırımının değerini düşürür.",
          "Düzenli teknik kontrol ve uzaktan destek planı ile sistem güvenilirliği korunur ve olası arızalar büyümeden tespit edilir. Bakım sözleşmesi olan müşterilerimizde arıza müdahale süresi belirgin şekilde kısalır.",
        ],
      },
    ],
    useCases: [
      "Apartman dairelerinde kapı-manyetik ve hareket dedektörü ile gece güvenliği",
      "Mağaza ve işyerlerinde açılış-kapanış saatleri için kontrollü alarm yönetimi",
      "Depolarda yetkisiz girişin panel ve siren senaryolarıyla hızlı algılanması",
      "Karma alanlarda mobil bildirim ile uzaktan kurma-çözme operasyonu",
    ],
    installationSteps: [
      "Sahada risk noktaları ve kullanım alışkanlıklarının analizi",
      "Panel, dedektör ve siren yerleşim planının oluşturulması",
      "Kablolu veya kablosuz alarm altyapısının kurulması",
      "Mobil kontrol ve kullanıcı yetki senaryolarının tanımlanması",
      "Test, yanlış alarm optimizasyonu ve kullanıcı eğitimi",
    ],
    sectionTitle1: "Alarm Sistemi Hangi Alanlarda Tercih Edilir?",
    sectionBody1:
      "Doğru alarm tasarımı yanlış alarmı azaltır ve gerçek risk anında hızlı tepki sağlar. Kullanım alanına göre panel ve sensör konfigürasyonu planlıyoruz.",
    sectionTitle2: "Alarm Sistemi Kurulum ve Devreye Alma Süreci",
    sectionBody2:
      "Kurulumdan önce keşif, kurulum sonrası test ve kullanıcı eğitimi ile sistemi günlük kullanımda güvenilir hale getiriyoruz.",
    ctaText:
      "Alarm sisteminde en kritik adım doğru keşif ve doğru dedektör yerleşimidir. Böylece gereksiz uyarıları azaltıp gerçek güvenlik seviyesini yükseltiyoruz.",
    authoritySections: [
      {
        title: "Alarm Sistemi Nedir ve Neden Gerekli?",
        paragraphs: [
          "Alarm sistemi; izinsiz giriş, kırılma veya şüpheli hareketleri erken tespit ederek panel üzerinden siren ve bildirim senaryolarını çalıştıran güvenlik altyapısıdır.",
          "Apartman, işyeri, mağaza ve depolarda doğru alarm planı sayesinde risk anında müdahale süresi kısalır ve yanlış alarm kaynaklı operasyon kaybı azalır.",
        ],
        imageSrc: "/images/services/bakim-servis/alarm-panel-sensor-test-servis.jpg",
        imageAlt: "Alarm paneli ve dedektör test uygulaması",
      },
      {
        title: "Alarm Paneli, Dedektör ve Siren Kurulumunda Profesyonel Yaklaşım",
        paragraphs: [
          "Doğru panel kapasitesi, dedektör konumu ve siren senaryosu belirlenmeden yapılan kurulumlarda sistem ya eksik koruma sağlar ya da gereksiz uyarı üretir.",
          "Profesyonel ekip; keşif, montaj, test ve kullanıcı eğitimi adımlarını birlikte yöneterek mobil kontrolü aktif eder, sistemi günlük kullanımda stabil hale getirir.",
        ],
        items: [
          "Yanlış alarmı azaltan dedektör yerleşimi",
          "Mobil uygulama ile uzaktan kontrol",
          "Kurulum sonrası kullanıcı eğitimi ve destek",
        ],
        imageSrc: "/images/landing/telefondan-kablosuz-alarm-kontrol-app.webp",
        imageAlt: "Mobil uygulama ile alarm kontrolü",
      },
    ],
    conversionBlocks: [
      {
        title: "Alarm sistemi için hızlı fiyat ve keşif talep edin",
        description:
          "Şehir içi hızlı keşif ile panel, dedektör ve siren kapsamını doğru belirleyip bütçenize uygun çözümü sunuyoruz. Uygun fiyat, garanti ve teknik destek birlikte planlanır.",
        whatsappText: "Alarm sistemi kurulumu için hızlı keşif ve fiyat teklifi istiyorum.",
        supportingLink: {
          href: "/alarm-sistemi-kurulumu",
          label: "Alarm Hizmet Detayları",
        },
      },
    ],
    trustBlock:
      "Alarm projelerinde panel, dedektör ve siren kurgusu mekanla uyumlu planlanmadığında sistem ya fazla uyarı verir ya da risk anını geç algılar. Doğru mühendislikle alarmı gerçek güvenlik aracına dönüştürüyoruz.",
    trustTitle: "Alarm sisteminde doğru kurgu yanlış alarmı azaltır",
    trustBody:
      "Panel, dedektör ve siren bileşenlerini mekanın kullanımına göre planladığımızda hem kullanıcı konforu artar hem de gerçek risk anında daha doğru alarm yönetimi sağlanır.",
    trustBullets: [
      "Şehir içi keşif ve risk noktası analizi",
      "Hareket dedektörü ve panel uyumu",
      "Uzaktan kontrol için mobil senaryo kurulumu",
      "Kurulum sonrası test ve kullanıcı eğitimi",
      "Bakım planı ile servis riskini azaltma",
    ],
    faqExtras: [
      {
        question: "Alarm sistemi kurulumu hangi alanlar için uygundur?",
        answer:
          "Apartman daireleri, işyeri, mağaza, depo ve küçük üretim alanları için farklı kapsamlarda alarm sistemi kurulumu yapılabilir.",
      },
      {
        question: "Yanlış alarm sorununu nasıl azaltıyorsunuz?",
        answer:
          "Dedektör açısı, montaj yüksekliği, giriş-çıkış gecikme ayarları ve kullanıcı alışkanlıklarına uygun panel senaryoları ile yanlış alarm oranı düşürülür.",
      },
      {
        question: "Alarmı telefondan kontrol edebilir miyim?",
        answer:
          "Evet. Uygun panel altyapısında mobil uygulama üzerinden kurma, çözme ve temel bildirim takibi yapılabilir.",
      },
      {
        question: "Kurulum sonrası kullanıcı eğitimi veriyor musunuz?",
        answer:
          "Evet. Sistem tesliminde panel kullanımı, alarm senaryoları ve temel müdahale adımları kullanıcıya gösterilir.",
      },
    ],
    faqExtraItems: [
      {
        question: "Alarm sistemi kurulumu hangi alanlar için uygundur?",
        answer:
          "Apartman daireleri, işyeri, mağaza, depo ve küçük üretim alanları için farklı kapsamlarda alarm sistemi kurulumu yapılabilir.",
      },
      {
        question: "Yanlış alarm sorununu nasıl azaltıyorsunuz?",
        answer:
          "Dedektör açısı, montaj yüksekliği, giriş-çıkış gecikme ayarları ve kullanıcı alışkanlıklarına uygun panel senaryoları ile yanlış alarm oranı düşürülür.",
      },
      {
        question: "Alarmı telefondan kontrol edebilir miyim?",
        answer:
          "Evet. Uygun panel altyapısında mobil uygulama üzerinden kurma, çözme ve temel bildirim takibi yapılabilir.",
      },
      {
        question: "Kurulum sonrası kullanıcı eğitimi veriyor musunuz?",
        answer:
          "Evet. Sistem tesliminde panel kullanımı, alarm senaryoları ve temel müdahale adımları kullanıcıya gösterilir.",
      },
    ],
    section1Cards: [
      {
        title: "Apartman ve konut",
        items: ["Daire içi hareket algılama", "Kapı-manyetik güvenliği", "Gece modu senaryoları"],
      },
      {
        title: "Mağaza ve işyeri",
        items: ["Kasa çevresi koruma", "Açılış-kapanış kontrolü", "Siren ve panel yönetimi"],
      },
      {
        title: "Depo alanları",
        items: ["Giriş noktası kontrolü", "Zaman bazlı kurma-çözme", "Uzak bildirim yönetimi"],
      },
      {
        title: "Karma kullanım alanları",
        items: ["Bölgesel alarm planı", "Yetkili kullanıcı tanımı", "Merkezi panel takibi"],
      },
    ],
    processSteps: [
      "Keşif ve risk noktalarının belirlenmesi",
      "Panel ve sensör planı",
      "Montaj ve kablolama",
      "Senaryo ve kullanıcı ayarları",
      "Test, teslim ve eğitim",
    ],
    pricingFactors: [
      "Panel tipi",
      "Dedektör ve siren adedi",
      "Kablolu/kablosuz yapı",
      "Mobil erişim ihtiyacı",
      "Mekan büyüklüğü",
    ],
    relatedLinks: [
      { href: "/alarm-sistemi-kurulumu", label: "Alarm Sistemi Kurulumu" },
      { href: "/kamera-sistemi-kurulumu", label: "Kamera Sistemi Kurulumu" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  "yangin-alarm-sistemi-kurulumu": {
    heroIntro:
      "İşyeri, depo, apartman ve ticari alanlar için dedektör, buton, siren ve panel bileşenleriyle yangın alarm sistemi planlama ve devreye alma hizmeti veriyoruz.",
    seoBlocks: [
      {
        title: "Yangın Alarm Sistemi Nedir",
        paragraphs: [
          "Yangın alarm sistemi; duman, ısı veya manuel buton tetiklemelerini algılayarak panel üzerinden sesli ve görsel uyarı üreten kritik bir can güvenliği altyapısıdır.",
          "İşyeri, apartman, depo ve ticari alanlarda doğru projelendirme, erken uyarı performansını doğrudan artırır.",
        ],
      },
      {
        title: "Duman ve Isı Dedektörleri Nasıl Çalışır",
        paragraphs: [
          "Duman dedektörleri partikül yoğunluğunu, ısı dedektörleri ise sıcaklık artışını izleyerek paneli tetikler.",
          "Dedektör tipi ve yerleşimi mekanın kullanım amacına göre belirlenmelidir; aksi halde geç algılama veya hatalı uyarı riski doğabilir.",
        ],
        items: [
          "Duman dedektörü yerleşimi",
          "Isı dedektörü seçim kriteri",
          "Zon bazlı alarm yönetimi",
        ],
      },
      {
        title: "Yangın Alarm Paneli Kurulumu",
        paragraphs: [
          "Panel; dedektör, buton ve siren hatlarını tek merkezde yöneten ana bileşendir. Kurulumda zon planı ve kablolama disiplini kritik öneme sahiptir.",
          "Devreye alma sırasında panel testleri, alarm senaryosu ve arıza simülasyonları yapılarak sistem doğrulanır.",
        ],
      },
      {
        title: "Yangın Alarm Sistemi Kurulum Süreci",
        paragraphs: [
          "Süreç keşif, proje planı, saha uygulaması, test-devreye alma ve bakım önerisi adımlarıyla ilerler.",
          "Mevzuata uygun planlama sayesinde hem denetim sürecinde hem günlük işletmede sürdürülebilir bir güvenlik standardı sağlanır.",
        ],
      },
      {
        title: "Yangın Alarm Sistemi Avantajları",
        paragraphs: [
          "Profesyonel yangın alarm sistemi; duman veya ısı artışını erken evrede tespit ederek can kaybı ve maddi hasar riskini önemli ölçüde azaltır. Erken uyarı sayesinde tahliye için değerli zaman kazanılır ve yangın büyümeden müdahale imkânı doğar.",
          "Mevzuata uygun kurulum, hem işletme denetimlerinde sorunsuz geçiş sağlar hem de sigorta süreçlerinde avantaj yaratır. Yangın alarm sistemi, işletme sürekliliği ve çalışan güvenliği açısından zorunlu bir yatırımdır.",
        ],
        items: [
          "Erken uyarı ile tahliye süresini uzatma",
          "Maddi hasar ve iş kaybını minimize etme",
          "Mevzuat ve denetim uyumluluğu",
          "Sigorta primlerinde avantaj",
          "Zon bazlı yönetim ile hızlı lokasyon tespiti",
          "Çalışan güvenliği ve işletme sürekliliği",
        ],
      },
      {
        title: "Yangın Alarm Sistemi Bakımı ve Periyodik Test",
        paragraphs: [
          "Yangın alarm sistemlerinde dedektör hassasiyeti, panel pil durumu, siren fonksiyonları ve hat testleri belirli aralıklarla yapılmalıdır. Bakım aksattığında sistem kritik anda yanıt veremeyebilir ve bu durum hem can güvenliği hem hukuki sorumluluk açısından ciddi risk oluşturur.",
          "Periyodik test ve bakım raporu, hem mevzuat gerekliliğini karşılar hem de sistemin güvenilirliğini sürekli tutar. Duman dedektörlerinin kirlenmesi, pil zürelemesi ve kablo bağlantı gevşemesi gibi sorunlar ancak düzenli kontrol ile erken tespit edilir.",
        ],
      },
    ],
    useCases: [
      "İşyeri ve ofislerde zon bazlı dedektör planı ile erken algılama",
      "Depo ve lojistik alanlarda panel-siren uyumlu alarm senaryosu",
      "Apartman ortak alanlarında tahliye odaklı uyarı altyapısı",
      "Ticari yapılarda mevzuata uygun yangın alarm sürekliliği",
    ],
    installationSteps: [
      "Yangın riski yüksek noktaların keşif ve zon analizi",
      "Dedektör, buton, siren ve panel sistem projelendirmesi",
      "Saha montajı ve alarm hatlarının devreye alınması",
      "Zon-test, panel doğrulama ve alarm senaryosu kontrolleri",
      "Teslim sonrası bakım planı ve teknik kullanım bilgilendirmesi",
    ],
    sectionTitle1: "Yangın Alarm Sistemi Nerelerde Gerekli?",
    sectionBody1:
      "Yangın alarm sisteminde doğru zonlama, dedektör yerleşimi ve panel kurgusu kritik öneme sahiptir. Projeyi alanın kullanım tipine göre planlıyoruz.",
    sectionTitle2: "Yangın Alarm Sistemi Kurulum Süreci",
    sectionBody2:
      "Mevzuata uygun planlama, saha montajı, devreye alma testleri ve periyodik bakım önerileri ile sistemi sürdürülebilir hale getiriyoruz.",
    ctaText:
      "Yangın alarm altyapısında doğru planlama hem can güvenliği hem işletme sürekliliği için kritik olduğu için keşif ve test adımlarını detaylı yürütüyoruz.",
    authoritySections: [
      {
        title: "Yangın Alarm Sistemi Nedir?",
        paragraphs: [
          "Yangın alarm sistemi; duman dedektörü, ısı dedektörü, manuel buton, siren/flaşör ve panel bileşenlerinin birlikte çalıştığı kritik can güvenliği sistemidir.",
          "İşyeri, depo, apartman ve ticari yapılarda erken uyarı performansı, doğru projelendirme ve test disipliniyle doğrudan ilişkilidir.",
        ],
        imageSrc: "/images/services/bakim-servis/yangin-alarm-dedektor-ve-acil-butonu.jpg",
        imageAlt: "Yangın alarm dedektörü ve acil buton",
      },
      {
        title: "Yangın Alarm Paneli Kurulumu ve Devreye Alma",
        paragraphs: [
          "Panel kurulumu sırasında zon planı, dedektör hatları ve siren senaryoları mevzuata uygun şekilde hazırlanmalıdır. Aksi halde sistem geç tepki verebilir.",
          "Saha testleri, arıza simülasyonları ve devreye alma kontrolleri tamamlandıktan sonra sistem güvenilir biçimde teslim edilir ve periyodik bakım planı oluşturulur.",
        ],
        items: [
          "Duman ve ısı dedektörü konum optimizasyonu",
          "Panel-siren entegrasyon testi",
          "Devreye alma sonrası bakım önerisi",
        ],
        imageSrc: "/images/services/bakim-servis/yangin-alarm-paneli-kontrol-sistemi.jpg",
        imageAlt: "Yangın alarm paneli kontrol sistemi",
      },
    ],
    conversionBlocks: [
      {
        title: "Yangın alarm projeniz için ücretsiz ön değerlendirme alın",
        description:
          "Uzman teknik ekibimiz saha keşfiyle dedektör, panel ve siren kapsamını netleştirir; hızlı teklif, doğru planlama ve satış sonrası teknik destek sunar.",
        whatsappText: "Yangın alarm sistemi kurulumu için keşif ve teklif almak istiyorum.",
        supportingLink: {
          href: "/yangin-alarm-sistemi-kurulumu",
          label: "Yangın Alarm Hizmeti",
        },
      },
    ],
    trustBlock:
      "Yangın alarm projelerinde en kritik nokta, dedektör-pano-siren bileşenlerinin birlikte ve mevzuata uygun çalışmasıdır. Test odaklı devreye alma ile sistemin kritik anda güven vermesini sağlıyoruz.",
    trustTitle: "Yangın alarm sisteminde mevzuata uyum ve test disiplini esastır",
    trustBody:
      "Dedektör, buton, siren ve panel yerleşimini doğru planlayıp devreye alma testleriyle doğruladığımızda sistemin kritik anda güvenilir çalışmasını sağlıyoruz.",
    trustBullets: [
      "Şehir içi keşif ve zonlama planı",
      "Mekana uygun dedektör ve panel kurgusu",
      "Devreye alma testlerinin sahada doğrulanması",
      "Teslim sonrası periyodik bakım önerisi",
      "Arıza ve yanlış uyarı riskini azaltan yaklaşım",
    ],
    faqExtras: [
      {
        question: "Yangın alarm sisteminde hangi ekipmanlar kullanılır?",
        answer:
          "Proje kapsamına göre duman/ısı dedektörleri, manuel butonlar, flaşör-sirenler ve kontrol paneli birlikte planlanır.",
      },
      {
        question: "Mevzuata uygun kurulum yapıyor musunuz?",
        answer:
          "Evet. Alanın kullanım tipine uygun planlama, uygun ekipman seçimi ve test süreçleriyle kurulum yapılır.",
      },
      {
        question: "Kurulumdan sonra test ve devreye alma yapılıyor mu?",
        answer:
          "Evet. Zon bazlı test, alarm senaryosu kontrolü ve panel doğrulaması ile devreye alma tamamlanır.",
      },
      {
        question: "Bakım hizmeti de alabilir miyiz?",
        answer:
          "Evet. Sistem sürekliliği için periyodik bakım ve test planı öneriyoruz.",
      },
    ],
    faqExtraItems: [
      {
        question: "Yangın alarm sisteminde hangi ekipmanlar kullanılır?",
        answer:
          "Proje kapsamına göre duman/ısı dedektörleri, manuel butonlar, flaşör-sirenler ve kontrol paneli birlikte planlanır.",
      },
      {
        question: "Mevzuata uygun kurulum yapıyor musunuz?",
        answer:
          "Evet. Alanın kullanım tipine uygun planlama, uygun ekipman seçimi ve test süreçleriyle kurulum yapılır.",
      },
      {
        question: "Kurulumdan sonra test ve devreye alma yapılıyor mu?",
        answer:
          "Evet. Zon bazlı test, alarm senaryosu kontrolü ve panel doğrulaması ile devreye alma tamamlanır.",
      },
      {
        question: "Bakım hizmeti de alabilir miyiz?",
        answer:
          "Evet. Sistem sürekliliği için periyodik bakım ve test planı öneriyoruz.",
      },
    ],
    section1Cards: [
      {
        title: "İşyeri ve ofis",
        items: ["Zon bazlı dedektör planı", "Panel ve buton yerleşimi", "Sesli uyarı senaryoları"],
      },
      {
        title: "Depo ve lojistik",
        items: ["Yüksek tavan planlaması", "Bölgesel alarm yönetimi", "Siren kapsama kontrolü"],
      },
      {
        title: "Apartman ve site",
        items: ["Ortak alan güvenliği", "Kat bazlı planlama", "Tahliye uyarı senaryosu"],
      },
      {
        title: "Ticari alanlar",
        items: ["Çalışma saatine uygun senaryo", "Kritik hat izleme", "Periyodik test planı"],
      },
    ],
    processSteps: [
      "Saha keşfi ve risk analizi",
      "Dedektör ve panel projelendirme",
      "Montaj ve altyapı uygulaması",
      "Alarm senaryosu testleri",
      "Devreye alma ve bakım önerisi",
    ],
    pricingFactors: [
      "Dedektör ve buton adedi",
      "Panel kapasitesi",
      "Mekan büyüklüğü",
      "Kablolama ihtiyacı",
      "Test/devreye alma kapsamı",
    ],
    relatedLinks: [
      { href: "/yangin-alarm-sistemi-kurulumu", label: "Yangın Alarm Sistemi Kurulumu" },
      { href: "/bakim-servis-uzaktan-izleme", label: "Bakım Servis Uzaktan İzleme" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  "kartli-gecis-sistemi-kurulumu": {
    heroIntro:
      "Ofis, işyeri, apartman ve fabrika yapılarında kapı kontrolü, turnike ve personel yetkilendirme odaklı kartlı geçiş sistemi kurulumu yapıyoruz.",
    seoBlocks: [
      {
        title: "Kartlı Geçiş Sistemi Nedir",
        paragraphs: [
          "Kartlı geçiş sistemi; belirlenen kapı ve turnike noktalarında kim, ne zaman, hangi alana erişebilir sorusunu yöneten güvenlik altyapısıdır.",
          "Ofis, apartman, işyeri ve fabrika gibi yapılarda yetkisiz erişimi azaltırken operasyonel denetimi artırır.",
        ],
      },
      {
        title: "Kartlı Kapı Kontrolü Nasıl Çalışır",
        paragraphs: [
          "Kart okuyucu, kontrol paneli ve elektrikli kilit bileşenleri birlikte çalışarak doğrulanan kullanıcıya geçiş izni verir.",
          "Yetki seviyeleri saat, bölüm veya kullanıcı bazında tanımlanabildiği için alan güvenliği esnek biçimde yönetilir.",
        ],
        items: [
          "Kart okuyucu ve panel entegrasyonu",
          "Yetki seviyeleri tanımlama",
          "Kapı bazlı erişim kontrolü",
        ],
      },
      {
        title: "Personel Geçiş Takip Sistemleri",
        paragraphs: [
          "Personel geçiş kayıtları, vardiya ve giriş-çıkış takibi için önemli bir operasyon verisi sağlar.",
          "Doğru raporlama altyapısı, hem güvenlik hem iç denetim süreçlerinde yönetime somut veri sunar.",
        ],
      },
      {
        title: "Kartlı Geçiş Kurulum Süreci",
        paragraphs: [
          "Kurulum; keşif, geçiş noktası planı, cihaz montajı, yazılım yetkilendirme ve test aşamalarından oluşur.",
          "Teslim aşamasında kullanıcı tanımları, yönetici eğitimi ve temel raporlama senaryoları aktif hale getirilir.",
        ],
      },
      {
        title: "Kartlı Geçiş Sistemi Avantajları",
        paragraphs: [
          "Kartlı geçiş sistemi; yetkisiz erişimi engeller, personel giriş-çıkış kayıtlarını otomatik tutar ve bölge bazlı güvenlik yönetimini kolaylaştırır. Manuel anahtar yönetiminin risklerini ortadan kaldırarak kayıp anahtar, yetkisiz kopya ve kontrolsüz erişim sorunlarına kalıcı çözüm sunar.",
          "Personel geçiş kayıtları vardiya takibi, mesai hesaplaması ve iç denetim süreçlerinde doğrudan kullanılabilir veri sağlar. Bu sayede güvenlik ve insan kaynakları yönetimi aynı altyapı üzerinden verimli biçimde yürütülür.",
        ],
        items: [
          "Yetkisiz erişimin tamamen engellenmesi",
          "Otomatik giriş-çıkış kayıt ve raporlama",
          "Anahtar kaynaklı güvenlik risklerinin eliminasyonu",
          "Departman ve saat bazlı esnek yetkilendirme",
          "Vardiya ve mesai takibinde operasyonel verimlilik",
          "Ziyaretçi yönetimi ve geçici erişim kontrolü",
        ],
      },
      {
        title: "Kartlı Geçiş Sistemi Bakımı ve Destek",
        paragraphs: [
          "Kartlı geçiş sistemlerinde okuyucu temizliği, yazılım güncellemeleri, yetki listesi revizyonu ve kilit mekanizması kontrolü düzenli yapılmalıdır. Bakım aksattığında kart okuma hataları, kilit arızaları ve yazılım uyuşmazlıkları iş akışını aksatabilir.",
          "Bakım sözleşmesi olan kurumlarda kart okuyucu arızası, yazılım hatası veya kilit sorunu öncelikli şekilde çözülür ve sistem kesintisi minimuma indirilir. Düzenli yazılım güncellemesi güvenlik açıklarını önler.",
        ],
      },
    ],
    useCases: [
      "Ofis ve plazalarda kapı bazlı erişim ve personel yetki yönetimi",
      "İşyeri ve mağazalarda depo-giriş ayrımı ile kontrollü geçiş",
      "Apartman ve sitelerde ortak kapıların güvenli erişimle yönetilmesi",
      "Fabrikalarda turnike entegrasyonu ve vardiya giriş takibi",
    ],
    installationSteps: [
      "Geçiş noktalarının ve kullanıcı akışının keşif ile belirlenmesi",
      "Kart okuyucu, panel ve kilit altyapısının projelendirilmesi",
      "Kapı/turnike entegrasyonunun kurulup test edilmesi",
      "Yetki seviyeleri ve kullanıcı rollerinin tanımlanması",
      "Raporlama kontrolleri ve sistem kullanım teslimi",
    ],
    sectionTitle1: "Kartlı Geçiş Sistemi Nerelerde Kullanılır?",
    sectionBody1:
      "Giriş-çıkış takibi, yetki seviyeleri ve güvenli erişim ihtiyacı olan yapılarda kartlı geçiş sistemi operasyonel verim sağlar.",
    sectionTitle2: "Kartlı Geçiş Sistemi Kurulum Süreci",
    sectionBody2:
      "Keşiften sonra kapı noktaları, kullanıcı yetkileri ve raporlama ihtiyacına göre sistemi planlayıp devreye alıyoruz.",
    ctaText:
      "Kartlı geçiş projelerinde doğru okuyucu ve kontrol paneli seçimi, kullanıcı yönetimi ve güvenli erişim için belirleyici faktördür.",
    authoritySections: [
      {
        title: "Kartlı Geçiş Sistemi Nedir?",
        paragraphs: [
          "Kartlı geçiş sistemi; kapı kontrolü, kart okuyucu ve turnike altyapısı ile personel ve ziyaretçi hareketini yetki seviyelerine göre yöneten güvenlik çözümüdür.",
          "Ofis, apartman, işyeri ve fabrikalarda izinsiz erişimi azaltırken giriş-çıkış kayıtlarıyla operasyonel denetimi güçlendirir.",
        ],
        imageSrc: "/images/services/bakim-servis/kartli-gecis-sistemi-turnike-giris.jpg",
        imageAlt: "Kartlı geçiş turnike giriş sistemi",
      },
      {
        title: "Kartlı Kapı Kontrolü ve Personel Takip Süreci",
        paragraphs: [
          "Kurulum sürecinde kapı noktaları, kullanıcı rolleri ve yetki kuralları netleştirilir. Ardından okuyucu, panel ve yazılım entegrasyonu tamamlanır.",
          "Doğru raporlama yapısıyla personel geçiş takibi şeffaf hale gelir, güvenlik ve yönetim süreçleri aynı altyapı üzerinden verimli yürütülür.",
        ],
        items: [
          "Kapı/turnike bazlı erişim yönetimi",
          "Departman ve saat bazlı yetkilendirme",
          "Giriş-çıkış loglarıyla operasyonel takip",
        ],
        imageSrc: "/images/services/bakim-servis/kartli-gecis-sistemi-mobil-giris-cikis-kayitlari-ve-maas-hesaplama.jpg",
        imageAlt: "Kartlı geçiş mobil giriş çıkış kayıt ekranı",
      },
    ],
    conversionBlocks: [
      {
        title: "Kartlı geçiş sistemi için hızlı keşif ve bütçe planı",
        description:
          "Kapı kontrolü, turnike ve kullanıcı yetkilendirme ihtiyaçlarınızı şehir içi keşifle hızlıca analiz ediyor; uygun fiyatlı ve güvenilir kurulum planı sunuyoruz.",
        whatsappText: "Kartlı geçiş sistemi için hızlı keşif ve fiyat almak istiyorum.",
        supportingLink: {
          href: "/iletisim",
          label: "Kurumsal Teklif Talebi",
        },
      },
    ],
    trustBlock:
      "Kartlı geçiş sisteminde kapı donanımı, yetki matrisi ve kullanıcı yönetimi doğru kurgulanmadığında operasyon yavaşlar ve güvenlik zayıflar. Projeyi hem güvenlik hem hız odağında kuruyoruz.",
    trustTitle: "Kartlı geçişte doğru yetkilendirme güvenliği ve operasyonu birlikte güçlendirir",
    trustBody:
      "Kapı kontrolü, turnike ve kullanıcı yetki seviyelerini işletme akışına göre planlayarak hem güvenli erişim hem pratik kullanım sağlayan bir yapı kuruyoruz.",
    trustBullets: [
      "Şehir içi keşif ve geçiş noktası planlaması",
      "Mekan tipine uygun okuyucu ve panel seçimi",
      "Yetki seviyeleri ve kullanıcı yönetimi kurulumu",
      "Teslim sonrası kullanım desteği",
      "Bakım ve servis ihtiyacını azaltan doğru altyapı",
    ],
    faqExtras: [
      {
        question: "Kartlı geçiş sistemi hangi yapılarda uygundur?",
        answer:
          "Ofisler, apartmanlar, işyerleri, fabrikalar ve personel geçişi olan tüm kontrollü alanlarda uygulanabilir.",
      },
      {
        question: "Turnike ile entegre çalışır mı?",
        answer:
          "Evet. Uygun altyapıda turnike, kapı kilidi ve kart okuyucu birlikte yönetilebilir.",
      },
      {
        question: "Yetki seviyeleri tanımlanabiliyor mu?",
        answer:
          "Evet. Kullanıcı veya departman bazında saat, alan ve geçiş tipi yetkilendirmesi yapılabilir.",
      },
      {
        question: "Giriş çıkış kayıtları raporlanıyor mu?",
        answer:
          "Evet. Sistem altyapısına göre giriş-çıkış logları raporlanabilir ve takip edilebilir.",
      },
    ],
    faqExtraItems: [
      {
        question: "Kartlı geçiş sistemi hangi yapılarda uygundur?",
        answer:
          "Ofisler, apartmanlar, işyerleri, fabrikalar ve personel geçişi olan tüm kontrollü alanlarda uygulanabilir.",
      },
      {
        question: "Turnike ile entegre çalışır mı?",
        answer:
          "Evet. Uygun altyapıda turnike, kapı kilidi ve kart okuyucu birlikte yönetilebilir.",
      },
      {
        question: "Yetki seviyeleri tanımlanabiliyor mu?",
        answer:
          "Evet. Kullanıcı veya departman bazında saat, alan ve geçiş tipi yetkilendirmesi yapılabilir.",
      },
      {
        question: "Giriş çıkış kayıtları raporlanıyor mu?",
        answer:
          "Evet. Sistem altyapısına göre giriş-çıkış logları raporlanabilir ve takip edilebilir.",
      },
    ],
    section1Cards: [
      {
        title: "Ofis ve plaza",
        items: ["Kapı bazlı erişim", "Ziyaretçi kontrolü", "Personel yetki planı"],
      },
      {
        title: "İşyeri ve mağaza",
        items: ["Depo-giriş ayrımı", "Sorumlu bazlı yetki", "Geçiş kayıt takibi"],
      },
      {
        title: "Apartman ve site",
        items: ["Ortak kapı kontrolü", "Blok giriş yönetimi", "Güvenli erişim senaryosu"],
      },
      {
        title: "Fabrika tesisleri",
        items: ["Turnike entegrasyonu", "Vardiya geçiş yönetimi", "Bölgesel yetkilendirme"],
      },
    ],
    processSteps: [
      "Geçiş noktalarının tespiti",
      "Panel ve okuyucu planı",
      "Kapı/turnike entegrasyonu",
      "Yetki ve kullanıcı tanımları",
      "Test ve kullanım eğitimi",
    ],
    pricingFactors: [
      "Okuyucu ve kapı sayısı",
      "Turnike ihtiyacı",
      "Kullanıcı kapasitesi",
      "Yazılım/raporlama kapsamı",
      "Entegrasyon seviyesi",
    ],
    relatedLinks: [
      { href: "/kamera-sistemi-kurulumu", label: "Kamera Sistemi Kurulumu" },
      { href: "/alarm-sistemi-kurulumu", label: "Alarm Sistemi Kurulumu" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  "apartman-site-guvenlik-sistemi": {
    heroIntro:
      "Apartman ve site yönetimleri için giriş kapısı, çevre izleme, otopark ve ortak alan güvenliğini kapsayan bütüncül güvenlik sistemi kurulumları gerçekleştiriyoruz.",
    seoBlocks: [
      {
        title: "Apartman ve Site Güvenlik Sistemi Nedir",
        paragraphs: [
          "Apartman ve site güvenlik sistemi; bina girişleri, otopark alanları, çevre hattı ve ortak yaşam alanlarını tek bir altyapı üzerinden izlemeye ve kontrol etmeye yarayan bütüncül güvenlik çözümüdür. Kamera, kartlı geçiş, alarm ve uzaktan izleme bileşenlerinin site yapısına uygun planlanmasıyla hem sakinlerin huzuru hem yönetimin operasyonel kontrolü güçlenir.",
          "Site yönetimlerinde güvenlik yalnızca bir kapı kilidi veya güvenlik görevlisi ile sınırlı kalmamalıdır. Giriş kapılarından otoparka, çocuk oyun alanlarından asansör lobisine kadar tüm ortak alanlar bütüncül bir bakış açısıyla değerlendirilmelidir. Doğru projelendirme yapılmayan sitelerde kör noktalar, yetersiz kayıt süresi ve tanımsız erişim sorunları güvenlik yatırımının etkisini ciddi biçimde azaltır.",
          "Profesyonel bir site güvenlik projesi; keşif aşamasında blok yapısını, yaya ve araç akışını, aydınlatma koşullarını ve yönetim beklentilerini analiz ederek her bina için özelleştirilmiş çözüm sunar. Bu yaklaşım, standart paket kurulumlardan çok daha yüksek güvenlik performansı sağlar.",
        ],
      },
      {
        title: "Apartman ve Site Güvenlik Sistemi Nasıl Çalışır",
        paragraphs: [
          "Sistem; giriş kapılarındaki kamera ve kartlı geçiş okuyucuları, çevre hattındaki dış mekan kameraları, otopark alanındaki plaka tanıma veya hareket algılama üniteleri ve tüm bileşenleri merkeze bağlayan kayıt altyapısından oluşur. Her bileşen kendi görevini yerine getirirken merkezi yönetim paneli üzerinden koordineli çalışır.",
          "Site yönetim odasındaki monitör veya yetkili kullanıcıların mobil uygulaması üzerinden canlı izleme ve kayıt erişimi sağlanır. Alarm entegrasyonu olan projelerde şüpheli durumlarda otomatik bildirim devreye girer. Gece görüş kamerları düşük ışık koşullarında bile net görüntü kaydeder.",
          "Blok sayısı fazla olan sitelerde ağ altyapısı özel olarak planlanmalıdır. Fiber veya PoE switch tabanlı yapılar sayesinde çok sayıda kamera sorunsuz şekilde merkezi kayıt cihazına bağlanır ve veri kaybı yaşanmaz.",
        ],
        items: [
          "Giriş kapısı kamera ve geçiş kontrolü",
          "Çevre hattı dış mekan izleme",
          "Yönetim odası merkezi kayıt sistemi",
          "Mobil uygulama ile uzaktan erişim",
          "Alarm ve siren entegrasyonu",
        ],
      },
      {
        title: "Apartman ve Site Güvenlik Sistemi Avantajları",
        paragraphs: [
          "Profesyonel bir site güvenlik sistemi, sakinlere görünür güvenlik hissi verirken yönetimin olası olaylarda kanıt kaydına ulaşmasını sağlar. Doğru planlanan sistem zamanla kendini amorti eder; sigorta primlerinde avantaj, hırsızlık ve vandalizmde caydırıcılık ile emlak değerine katkı gibi somut faydalar sunar.",
          "Kör nokta bırakmayan kamera yerleşimi, kontrollü giriş-çıkış sistemi ve uzaktan izleme altyapısı bir arada çalıştığında sitedeki asayiş sorunları belirgin biçimde azalır. Sakinler güvenli bir yaşam ortamında kendilerini daha rahat hisseder.",
        ],
        items: [
          "Sakinlerin huzur ve güven duygusu",
          "Olaylarda geriye dönük kayıt erişimi",
          "Caydırıcılık etkisiyle suç oranında azalma",
          "Yönetim kurulu için şeffaf güvenlik takibi",
          "Otopark ve ortak alan sorunlarında hızlı çözüm",
          "Emlak değerine olumlu katkı",
        ],
      },
      {
        title: "Site Güvenlik Sistemi Bakımı ve Teknik Destek",
        paragraphs: [
          "Kurulum sonrası periyodik bakım; kamera açılarının kontrolü, kayıt cihazı disk sağlığı analizi, yazılım güncellemeleri ve dış mekan ekipmanlarının fiziksel temizliği ile sistemin uzun ömürlü çalışmasını sağlar. Bakım yapılmayan sitelerde zamanla kayıt kaybı, görüntü bozulması ve erişim sorunları ortaya çıkar.",
          "Bakım sözleşmesi olan sitelerde arıza tespit süresi kısalır ve teknik müdahale öncelikli şekilde planlanır. Uzaktan izleme desteğiyle birçok sorun sahaya çıkmadan çözülür ve yönetimin operasyonel yükü hafifler.",
        ],
      },
    ],
    useCases: [
      "Site giriş kapıları ve araç girişlerinde kontrollü izleme",
      "Otopark alanlarında gece-gündüz düzenli hareket takibi",
      "Ortak alanlarda kör nokta azaltan yerleşim planı",
      "Çevre hattında caydırıcılığı artıran güvenlik düzeni",
    ],
    installationSteps: [
      "Site yapısının keşif ve blok bazlı risk analizinin yapılması",
      "Giriş, çevre ve ortak alan kamera/erişim planının çıkarılması",
      "Kurulum, kayıt altyapısı ve mobil izleme sisteminin devreye alınması",
      "Yönetim yetkileri ve kullanıcı erişim düzeninin oluşturulması",
      "Saha testleri sonrası yönetim ekibine sistem teslimi",
    ],
    sectionTitle1: "Apartman ve Site Güvenliğinde Kritik Alanlar",
    sectionBody1:
      "Kör nokta azaltma, giriş kontrolü ve doğru kayıt düzeni; site güvenlik yatırımlarında en çok sonuç üreten başlıklardır.",
    sectionTitle2: "Apartman ve Site Güvenlik Kurulum Süreci",
    sectionBody2:
      "Yönetim beklentisi, blok yapısı ve ortak alan kullanımına göre keşif yaparak kamera, alarm ve erişim bileşenlerini birlikte planlıyoruz.",
    ctaText:
      "Site ve apartman güvenliğinde doğru planlama sayesinde giriş-çıkış kontrolü güçlenir, ortak alanlarda görünür caydırıcılık artar.",
    authoritySections: [
      {
        title: "Apartman ve Site Güvenlik Sistemi Neden Önemlidir?",
        paragraphs: [
          "Site yönetimlerinde güvenlik yatırımı; giriş kapısı, otopark, çevre hattı ve ortak alanların birlikte planlanmasıyla etkili hale gelir.",
          "Doğru kurgulanmış sistem, sakin güvenliğini artırırken yönetimin olası olaylarda hızlı ve net karar almasını sağlar.",
        ],
        imageSrc: "/images/services/bakim-servis/site-yonetimi-guvenlik-merkezi-izleme-ekrani.jpg",
        imageAlt: "Site yönetimi güvenlik izleme merkezi",
      },
      {
        title: "Kör Nokta Azaltma ve Kayıt Düzeni",
        paragraphs: [
          "Apartman ve site projelerinde en büyük risk, kör noktalardır. Keşifte yaya-araç akışı analiz edilerek kamera ve geçiş noktaları optimize edilir.",
          "Kayıt süresi, uzaktan izleme ve bakım planı birlikte ele alındığında sistem yıllar boyunca stabil ve ekonomik biçimde çalışır.",
        ],
        imageSrc: "/images/services/bakim-servis/site-kamera-sistemi-periyodik-bakim.jpg",
        imageAlt: "Site kamera sistemi bakım ve kayıt düzeni",
      },
    ],
    conversionBlocks: [
      {
        title: "Site ve apartman güvenliği için ücretsiz keşif alın",
        description:
          "Profesyonel ekibimiz blok yapınıza uygun güvenlik planı çıkarır, uygun fiyatlı cihaz seçeneklerini sunar ve garanti + teknik destek sürecini netleştirir.",
        whatsappText: "Apartman/site güvenlik sistemi için keşif ve hızlı fiyat istiyorum.",
        supportingLink: {
          href: "/apartman-site-guvenlik-sistemi",
          label: "Hizmet Detayları",
        },
      },
    ],
    trustBlock:
      "Site güvenlik projelerinde kamera, giriş kontrol ve kayıt düzeni tek parça olarak planlanmadığında yönetim tarafında sürekli operasyon yükü oluşur. Planlı kurulumla bu yükü azaltıyoruz.",
    trustTitle: "Site güvenliğinde doğru planlama yönetimin yükünü azaltır",
    trustBody:
      "Giriş kapısı, çevre hattı, otopark ve ortak alanları birlikte değerlendirip kör noktaları azaltan bir kurgu oluşturduğumuzda site yönetimi daha kontrollü bir güvenlik operasyonu yürütür.",
    trustBullets: [
      "Şehir içi keşif ve blok bazlı planlama",
      "Ortak alanlara uygun kamera yerleşimi",
      "Mobil izleme ve kayıt düzeni kurulumu",
      "Teslim sonrası teknik destek",
      "Bakım odaklı kurulumla arıza riskini düşürme",
    ],
    faqExtras: [
      {
        question: "Site güvenlik sistemi hangi alanları kapsamalı?",
        answer:
          "Giriş kapıları, otopark, blok çevresi, ortak yaşam alanları ve kritik geçiş noktaları öncelikli kapsamda olmalıdır.",
      },
      {
        question: "Kör noktalar nasıl azaltılır?",
        answer:
          "Keşif sırasında görüş açısı, ışık koşulları ve yaya/araç akışı analiz edilerek kamera noktaları optimize edilir.",
      },
      {
        question: "Uzaktan izleme mümkün mü?",
        answer:
          "Evet. Yetkili kullanıcılar mobil uygulama üzerinden canlı izleme ve kayıt erişimi sağlayabilir.",
      },
      {
        question: "Kurulum sonrası bakım almalı mıyız?",
        answer:
          "Sistem sürekliliği için periyodik bakım önerilir. Bu sayede kayıt ve görüntü performansı korunur.",
      },
    ],
    faqExtraItems: [
      {
        question: "Site güvenlik sistemi hangi alanları kapsamalı?",
        answer:
          "Giriş kapıları, otopark, blok çevresi, ortak yaşam alanları ve kritik geçiş noktaları öncelikli kapsamda olmalıdır.",
      },
      {
        question: "Kör noktalar nasıl azaltılır?",
        answer:
          "Keşif sırasında görüş açısı, ışık koşulları ve yaya/araç akışı analiz edilerek kamera noktaları optimize edilir.",
      },
      {
        question: "Uzaktan izleme mümkün mü?",
        answer:
          "Evet. Yetkili kullanıcılar mobil uygulama üzerinden canlı izleme ve kayıt erişimi sağlayabilir.",
      },
      {
        question: "Kurulum sonrası bakım almalı mıyız?",
        answer:
          "Sistem sürekliliği için periyodik bakım önerilir. Bu sayede kayıt ve görüntü performansı korunur.",
      },
    ],
    section1Cards: [
      {
        title: "Giriş ve çıkış noktaları",
        items: ["Kapı güvenlik takibi", "Araç giriş kontrolü", "Ziyaretçi hareketi"],
      },
      {
        title: "Çevre güvenliği",
        items: ["Site çevresi izleme", "Gece görüş odaklı plan", "Kritik sınır noktaları"],
      },
      {
        title: "Otopark alanları",
        items: ["Araç dolaşım izleme", "Kayıt sürekliliği", "Aydınlatma uyumlu kamera"],
      },
      {
        title: "Ortak yaşam alanları",
        items: ["Asansör ve lobi çevresi", "Çocuk alanı çevresi", "Yönetim öncelikli noktalar"],
      },
    ],
    processSteps: [
      "Site keşfi ve ihtiyaç analizi",
      "Kör nokta ve risk haritası",
      "Kamera/erişim sistemi planı",
      "Kurulum ve mobil erişim ayarı",
      "Test ve yönetim teslimi",
    ],
    pricingFactors: [
      "Blok ve alan büyüklüğü",
      "Kamera noktası sayısı",
      "Kayıt süresi ihtiyacı",
      "Giriş kontrol sistemi",
      "Bakım kapsamı",
    ],
    relatedLinks: [
      { href: "/kamera-sistemi-kurulumu", label: "Kamera Sistemi Kurulumu" },
      { href: "/bakim-servis-uzaktan-izleme", label: "Bakım Servis Uzaktan İzleme" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  "isyeri-guvenlik-sistemi": {
    heroIntro:
      "Ofis, mağaza, dükkan ve küçük işletmeler için kamera, alarm ve giriş kontrolünü birlikte planlayan işyeri güvenlik sistemi kurulumu yapıyoruz.",
    seoBlocks: [
      {
        title: "İşyeri Güvenlik Sistemi Nedir",
        paragraphs: [
          "İşyeri güvenlik sistemi; ofis, mağaza, dükkan ve küçük işletmelerde kamera, alarm ve giriş kontrol bileşenlerinin birlikte çalıştığı, çalışan ve müşteri güvenliğini sağlayan entegre güvenlik altyapısıdır. Her işletmenin risk profili farklı olduğu için keşif ve ihtiyaç analizi kurulumun en kritik adımıdır.",
          "Hırsızlık, iç kayıp ve yetkisiz giriş risklerinin azaltılması yanında günlük operasyonun kayıt altına alınması da işyeri güvenlik sisteminin temel işlevleri arasındadır. Mağazada kasa güvenliği ön plandayken bir ofiste giriş kontrolü ve personel takibi öncelik kazanır.",
          "Doğru planlanan bir işyeri güvenlik sistemi, sadece hırsızlığa karşı koruma sağlamaz; aynı zamanda çalışan performansının denetimi, müşteri davranış analizi ve işletme içi sorumluluk takibi gibi operasyonel avantajlar da sunar.",
        ],
      },
      {
        title: "İşyeri Güvenlik Sistemi Nasıl Çalışır",
        paragraphs: [
          "Kamera sistemi; satış alanı, kasa çevresi, giriş kapısı ve depo gibi kritik noktaları izleyerek kayıt cihazına aktarır. Kayıtlar belirli gün sayısı boyunca saklanır ve gerektiğinde geriye dönük erişim sağlanır. Geniş açı ve detay kameraların birlikte kullanılmasıyla tam kapsama alanı oluşturulur.",
          "Alarm sistemi ise mesai dışı saatlerde dedektör ve sirenleriyle izinsiz girişi algılar ve anında mobil bildirim gönderir. Kartlı geçiş veya şifreli kilit entegrasyonu ile personel ve ziyaretçi hareketleri kontrol altına alınır. Tüm bileşenler mobil uygulama üzerinden uzaktan yönetilebilir.",
        ],
        items: [
          "Kamera ile görüntülü izleme ve kayıt",
          "Alarm paneli ile izinsiz giriş algılama",
          "Kartlı veya şifreli giriş kontrolü",
          "Mobil uygulama ile uzaktan yönetim",
          "Mesai dışı otomatik alarm koruması",
        ],
      },
      {
        title: "İşyeri Güvenlik Sistemi Avantajları",
        paragraphs: [
          "Profesyonel işyeri güvenlik sistemi, yalnızca hırsızlığa karşı koruma değil aynı zamanda operasyonel verimlilik ve sorumluluk takibi de sağlar. Kamera kayıtları sayesinde müşteri şikâyetleri ve iç anlaşmazlıklar somut veriye dayalı çözülür.",
          "Doğru planlanan sistem, çalışan ve müşteri güvenliğini artırırken sigorta primlerinde avantaj, kanıt kaydı ve caydırıcılık etkisiyle işletme maliyetlerini düşürür. Yatırım kısa sürede kendini geri öder.",
        ],
        items: [
          "Hırsızlık ve iç kayıp riskinde belirgin düşüş",
          "Çalışan ve müşteri güvenliğinde artış",
          "Mesai dışı saatlerde alarm koruması",
          "Sigorta ve denetim süreçlerinde avantaj",
          "Telefondan anlık bildirim ve uzaktan izleme",
          "Operasyonel denetim ve sorumluluk takibi",
        ],
      },
      {
        title: "İşyeri Güvenlik Sistemi Bakımı ve Destek",
        paragraphs: [
          "İşyeri güvenlik sistemlerinde düzenli bakım; kamera açılarının kontrolü, kayıt cihazı performansı, alarm dedektör testleri ve yazılım güncellemelerini kapsar. Bakım aksatıldığında kayıt kaybı, yanlış alarm ve erişim sorunları ortaya çıkabilir.",
          "Bakım planına sahip işletmelerde arıza tespiti hızlanır ve sistem kesintileri minimuma iner. Uzaktan destek ile birçok sorun sahaya gelmeden çözülebilir; bu da hem zaman hem maliyet tasarrufu sağlar.",
        ],
      },
    ],
    useCases: [
      "Ofislerde çalışan güvenliği ve giriş hareketlerinin kontrolü",
      "Mağaza ve dükkanlarda kasa çevresi ve satış alanı takibi",
      "Küçük işletmelerde alarm + kamera + erişim kombinasyonu",
      "Arka depo alanlarında yetkisiz girişin önlenmesi",
    ],
    installationSteps: [
      "İşyeri tipine göre keşif ve öncelikli risklerin belirlenmesi",
      "Kamera, alarm ve giriş kontrol yapısının planlanması",
      "Kurulum, kablolama ve cihaz konfigürasyonunun tamamlanması",
      "Mobil erişim, kullanıcı tanımı ve yetki yapılandırması",
      "Test ve günlük kullanım odaklı teslim süreci",
    ],
    sectionTitle1: "İşyeri Güvenliğinde Öncelikli Senaryolar",
    sectionBody1:
      "Çalışan ve müşteri güvenliği, kasa ve ürün alanı takibi ile operasyon sürekliliği için işyerine uygun güvenlik mimarisi kuruyoruz.",
    sectionTitle2: "İşyeri Güvenlik Sistemi Kurulum Süreci",
    sectionBody2:
      "Mekan tipine göre keşif, cihaz seçimi, kurulum ve kullanıcı eğitimini tek süreçte yöneterek güvenli ve pratik kullanım sağlıyoruz.",
    ctaText:
      "İşyerlerinde güvenlik sistemi yatırımının amacı yalnızca görüntü almak değil, hırsızlık riskini azaltırken günlük operasyonu kontrollü yürütmektir.",
    authoritySections: [
      {
        title: "İşyeri Güvenlik Sistemi ile Operasyon Güvenliğini Artırın",
        paragraphs: [
          "Ofis, mağaza ve küçük işletmelerde güvenlik sistemi yalnızca hırsızlık önleme değil, günlük operasyonun kontrollü ve kayıtlı yürütülmesi için de kritik bir altyapıdır.",
          "Kamera, alarm ve giriş kontrol bileşenlerinin birlikte planlanması hem çalışan hem müşteri güvenliğini güçlendirir.",
        ],
        imageSrc: "/images/landing/isyeri-ajax-alarm-kurulum-servisi.png",
        imageAlt: "İşyeri alarm ve güvenlik sistemi kurulumu",
      },
      {
        title: "Hızlı Kurulum, Uygun Fiyat, Sürekli Teknik Destek",
        paragraphs: [
          "İşyeri projelerinde hızlı keşif ve doğru planlama sayesinde gereksiz maliyet kalemleri azaltılır, bütçeye uygun ama performanslı bir sistem kurgusu oluşturulur.",
          "Kurulum sonrası teknik destek ve garanti yaklaşımı sayesinde işletme, güvenlik altyapısını kesintisiz kullanmaya devam eder.",
        ],
        imageSrc: "/images/services/bakim-servis/guvenlik-sistemi-teknik-servis-ekip-isyeri-kamera-montaji.jpg",
        imageAlt: "İşyeri teknik servis ve kurulum ekibi",
      },
    ],
    conversionBlocks: [
      {
        title: "İşyeriniz için aynı gün keşif ve teklif alın",
        description:
          "Şehir içi ekip planlamamızla kısa sürede keşif yapıyor, güvenlik ihtiyacınıza göre uygun fiyatlı çözümü WhatsApp, telefon veya form üzerinden hızlıca iletiyoruz.",
        whatsappText: "İşyeri güvenlik sistemi için keşif ve fiyat teklifi istiyorum.",
        supportingLink: {
          href: "/iletisim",
          label: "Uzmanla Görüş",
        },
      },
    ],
    trustBlock:
      "İşyerlerinde sistemin sadece kurulması değil, çalışanlar tarafından doğru kullanılması da kritik değerdir. Bu nedenle kurulum kadar operasyonel kullanım kolaylığına da odaklanıyoruz.",
    trustTitle: "İşyeri güvenliğinde pratik kullanım ve hızlı müdahale kritik",
    trustBody:
      "Ofis, mağaza ve küçük işletmelerde kamera, alarm ve giriş kontrolünü birlikte planlayarak hem çalışan-müşteri güvenliğini hem operasyon takibini güçlendiriyoruz.",
    trustBullets: [
      "Şehir içi keşif ile risk noktası belirleme",
      "İşyeri tipine uygun sistem kurgusu",
      "Mobil izleme ve günlük kullanım kolaylığı",
      "Teslim sonrası destek ve hızlı servis yönlendirmesi",
      "Doğru montajla bakım kaynaklı sorunları azaltma",
    ],
    faqExtras: [
      {
        question: "İşyeri için sadece kamera yeterli olur mu?",
        answer:
          "Çoğu işyerinde kamera sistemine ek olarak alarm ve temel giriş kontrolü ile daha yüksek güvenlik seviyesi elde edilir.",
      },
      {
        question: "Mağaza ve dükkanlarda hangi noktalar önceliklidir?",
        answer:
          "Giriş kapısı, kasa çevresi, raf koridorları ve arka depo geçişleri öncelikli izleme alanlarıdır.",
      },
      {
        question: "Çalışan güvenliği için nasıl bir kurgu öneriyorsunuz?",
        answer:
          "İşyeri çalışma düzenine uygun kamera açısı, alarm senaryosu ve yetkili erişim modeli birlikte planlanır.",
      },
      {
        question: "Sistemi telefondan takip edebilir miyim?",
        answer:
          "Evet. Yetkili kullanıcılar canlı izleme ve kayıt erişimini mobil uygulama üzerinden kullanabilir.",
      },
    ],
    faqExtraItems: [
      {
        question: "İşyeri için sadece kamera yeterli olur mu?",
        answer:
          "Çoğu işyerinde kamera sistemine ek olarak alarm ve temel giriş kontrolü ile daha yüksek güvenlik seviyesi elde edilir.",
      },
      {
        question: "Mağaza ve dükkanlarda hangi noktalar önceliklidir?",
        answer:
          "Giriş kapısı, kasa çevresi, raf koridorları ve arka depo geçişleri öncelikli izleme alanlarıdır.",
      },
      {
        question: "Çalışan güvenliği için nasıl bir kurgu öneriyorsunuz?",
        answer:
          "İşyeri çalışma düzenine uygun kamera açısı, alarm senaryosu ve yetkili erişim modeli birlikte planlanır.",
      },
      {
        question: "Sistemi telefondan takip edebilir miyim?",
        answer:
          "Evet. Yetkili kullanıcılar canlı izleme ve kayıt erişimini mobil uygulama üzerinden kullanabilir.",
      },
    ],
    section1Cards: [
      {
        title: "Ofis alanları",
        items: ["Giriş kontrol planı", "Çalışan güvenliği", "Ortak alan izleme"],
      },
      {
        title: "Mağaza ve dükkan",
        items: ["Müşteri akışı takibi", "Kasa çevresi izleme", "Alarm entegrasyonu"],
      },
      {
        title: "Küçük işletmeler",
        items: ["Bütçe odaklı kurulum", "Temel risk noktaları", "Pratik kullanım senaryosu"],
      },
      {
        title: "Depo destek alanları",
        items: ["Arka alan kontrolü", "Yetkisiz giriş önleme", "Kayıt sürekliliği"],
      },
    ],
    processSteps: [
      "İşyeri keşfi",
      "Kamera-alarm planı",
      "Kurulum ve kablolama",
      "Mobil erişim tanımları",
      "Test ve kullanıcı teslimi",
    ],
    pricingFactors: [
      "Mekan büyüklüğü",
      "Sistem bileşen sayısı",
      "Kayıt süresi",
      "Alarm ve erişim entegrasyonu",
      "Montaj altyapısı",
    ],
    relatedLinks: [
      { href: "/kamera-sistemi-kurulumu", label: "Kamera Sistemi Kurulumu" },
      { href: "/alarm-sistemi-kurulumu", label: "Alarm Sistemi Kurulumu" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  "fabrika-depo-guvenlik-sistemi": {
    heroIntro:
      "Üretim alanı, depo rafları, yükleme noktaları ve çevre güvenliği için geniş alanlara uygun fabrika ve depo güvenlik sistemi kurulumları sağlıyoruz.",
    seoBlocks: [
      {
        title: "Fabrika ve Depo Güvenlik Sistemi Nedir",
        paragraphs: [
          "Fabrika ve depo güvenlik sistemi; üretim hatları, depo rafları, yükleme-boşaltma alanları ve tesis çevre hattını kapsayan geniş alan güvenlik altyapısıdır. Endüstriyel tesislerde standart güvenlik kurgusu yetersiz kalır; uzun mesafe izleme, gece görüş performansı, toz ve titreşim dayanıklılığı gibi özel gereksinimler projelendirmede belirleyicidir.",
          "Doğru planlanan bir fabrika güvenlik sistemi, sadece hırsızlık caydırıcılığı değil aynı zamanda üretim süreci takibi, iş güvenliği denetimi ve lojistik kontrol imkânı da sunar. Bu nedenle sanayi tesislerinde güvenlik yatırımı aynı zamanda bir operasyon yönetim aracıdır.",
          "Tesisin fiziksel büyüklüğü, çalışan sayısı, vardiya düzeni ve depolanan ürünlerin değeri; sistem kapsamını ve bütçesini doğrudan etkileyen faktörlerdir. Keşif aşamasında bu değişkenler analiz edilerek ölçeklenebilir bir altyapı planlanır.",
        ],
      },
      {
        title: "Fabrika ve Depo Güvenlik Sistemi Nasıl Çalışır",
        paragraphs: [
          "Sistem; çevre hattındaki uzun mesafe kameralar, üretim alanındaki geniş açı kameralar, depo koridorlarındaki detay kameralar ve yükleme noktalarındaki hareket algılama üniteleri ile veri toplar. Toplanan görüntüler yüksek kapasiteli merkezi kayıt sunucusuna aktarılır.",
          "Yetkililer mobil veya masaüstü uygulama üzerinden canlı izleme ve kayıt erişimi yapabilir. Alarm ve geçiş kontrol entegrasyonu ile bütüncül güvenlik sağlanır. Gece vardiyalarında infrared veya starlight teknolojili kameralar düşük ışıkta bile net görüntü kaydeder.",
          "Büyük tesislerde fiber optik altyapı veya endüstriyel PoE switchler kullanılarak uzun mesafe veri iletimi kayıpsız sağlanır. Kayıt süresi hedefine göre RAID yapılı depolama sistemleri planlanır.",
        ],
        items: [
          "Çevre hattı uzun mesafe izleme",
          "Üretim alanı geniş açı kayıt",
          "Depo koridoru detay izleme",
          "Merkezi kayıt ve mobil erişim",
          "Endüstriyel ağ altyapısı",
        ],
      },
      {
        title: "Fabrika ve Depo Güvenlik Sistemi Avantajları",
        paragraphs: [
          "Profesyonel bir sanayi güvenlik sistemi; stok kaybını azaltır, operasyonel denetimi güçlendirir ve iş güvenliği standartlarına uyum sağlar. Gece görüş, uzun kayıt süresi ve uzaktan erişim sayesinde tesis boş olduğunda bile güvenlik kontrolü sürer.",
          "Sigorta ve denetim süreçlerinde kayıt kanıtı önemli avantaj sağlar. Üretim hattındaki iş kazası analizleri ve lojistik süreçlerin izlenmesi de güvenlik kameralarının sağladığı ek operasyonel faydalardır.",
        ],
        items: [
          "Stok kaybı ve iç hırsızlık riskinde azalma",
          "İş güvenliği ve üretim süreci kontrolü",
          "7/24 kayıt ile geçmişe dönük kanıt erişimi",
          "Gece görüş ve dış ortam dayanıklılığı",
          "Uzaktan izleme ile merkezi yönetim",
          "Sigorta ve denetim süreçlerinde avantaj",
        ],
      },
      {
        title: "Fabrika ve Depo Güvenlik Sistemi Bakımı ve Destek",
        paragraphs: [
          "Endüstriyel ortamlarda toz, nem, titreşim ve yoğun çalışma koşulları güvenlik ekipmanlarının ömrünü kısaltabilir. Periyodik bakım bu riskleri yöneterek sistemin kesintisiz çalışmasını sağlar ve beklenmedik arıza maliyetlerini önler.",
          "Bakım kapsamında kamera lens temizliği, kayıt cihazı disk sağlığı, ağ bağlantı kontrolü ve yazılım güncellemeleri yapılır. Uzaktan izleme desteğiyle kritik arızalar erken tespit edilir ve müdahale süresi kısalır.",
        ],
      },
    ],
    useCases: [
      "Üretim hatlarında operasyon ve güvenlik akışının izlenmesi",
      "Depo raf koridorlarında stok güvenliğinin kayıt altına alınması",
      "Yükleme-boşaltma alanlarında araç ve personel hareket kontrolü",
      "Çevre hattında uzun mesafe ve gece görüş odaklı izleme",
    ],
    installationSteps: [
      "Geniş saha keşfi ve kritik kör noktaların haritalanması",
      "Kamera ve kayıt altyapısının alan tipine göre projelendirilmesi",
      "Montaj, ağ ve depolama sistemlerinin devreye alınması",
      "Gece-gündüz performans testleri ve uzaktan erişim ayarları",
      "İşletme ekibine teknik kullanım ve bakım planı teslimi",
    ],
    sectionTitle1: "Fabrika ve Depo Güvenliğinde Kritik Noktalar",
    sectionBody1:
      "Geniş alan planlama, gece görüş performansı ve uzun kayıt süresi; sanayi ve lojistik yapılarında güvenlik yatırımının temelini oluşturur.",
    sectionTitle2: "Fabrika ve Depo Kurulum Süreci",
    sectionBody2:
      "Saha koşulları, operasyon akışı ve riskli bölgeleri analiz ederek kurulum, devreye alma ve bakım önerisini birlikte sunuyoruz.",
    ctaText:
      "Fabrika ve depolarda güvenlik sistemi başarısı, geniş alanı kör nokta bırakmadan planlayıp bakım kaynaklı arıza riskini azaltmakla başlar.",
    authoritySections: [
      {
        title: "Fabrika ve Depo Güvenliğinde Doğru Altyapı Neden Kritik?",
        paragraphs: [
          "Geniş alanlı üretim ve depo tesislerinde güvenlik sistemleri, çevre hattından yükleme-boşaltma noktalarına kadar bütün alanı kapsayacak şekilde planlanmalıdır.",
          "Doğru planlama yapılmadığında kör nokta, yetersiz kayıt süresi ve gece performans kaybı oluşur; bu da operasyonel ve finansal riskleri artırır.",
        ],
        imageSrc: "/images/services/bakim-servis/fabrika-guvenlik-kamera-bakim-servisi.jpg",
        imageAlt: "Fabrika güvenlik sistemleri teknik servis uygulaması",
      },
      {
        title: "Uzun Kayıt, Gece Görüş ve Teknik Süreklilik",
        paragraphs: [
          "Sanayi tesislerinde kayıt altyapısı, cihaz kapasitesi ve ağ stabilitesi birlikte ele alınmalıdır. Böylece kritik olaylarda geçmişe dönük kayıt erişimi güvenilir olur.",
          "Periyodik bakım ve teknik destek planı, yoğun çalışma koşullarında oluşabilecek arıza risklerini düşürerek sistem sürekliliğini korur.",
        ],
        imageSrc: "/images/services/bakim-servis/nvr-kayit-cihazi-bakim-harddisk-kontrol.jpg",
        imageAlt: "NVR kayıt cihazı ve harddisk kontrolü",
      },
    ],
    conversionBlocks: [
      {
        title: "Fabrika ve depo projeleri için kurumsal keşif planlayın",
        description:
          "Uzman ekibimiz saha keşfi ile kritik risk noktalarını belirler, uygun fiyatlı ve ölçeklenebilir bir kurulum planı sunar. Hızlı servis, garanti ve satış sonrası destek süreçleri birlikte yönetilir.",
        whatsappText: "Fabrika/depo güvenlik sistemi için kurumsal keşif ve teklif istiyorum.",
        supportingLink: {
          href: "/fabrika-depo-guvenlik-sistemi",
          label: "Fabrika ve Depo Güvenlik Çözümleri",
        },
      },
    ],
    trustBlock:
      "Sanayi ve depo projelerinde cihaz seçimi kadar saha planı, kayıt mimarisi ve bakım disiplininin birlikte yönetilmesi gerekir. Bu yaklaşım uzun vadede operasyon kayıplarını azaltır.",
    trustTitle: "Geniş alanlarda profesyonel kurulum operasyon kaybını azaltır",
    trustBody:
      "Üretim ve depo alanlarında görüş mesafesi, gece performansı ve kayıt sürekliliği birlikte ele alındığında güvenlik sistemi sadece caydırıcı değil operasyonel olarak da sürdürülebilir olur.",
    trustBullets: [
      "Şehir içi keşif ve geniş alan planlaması",
      "Üretim-depo akışına uygun kamera konumlandırma",
      "Uzun kayıt ve mobil erişim kurgusu",
      "Teslim sonrası teknik takip",
      "Bakım ve arıza riskini azaltan altyapı yaklaşımı",
    ],
    faqExtras: [
      {
        question: "Fabrika ve depo için standart kamera sistemi yeterli mi?",
        answer:
          "Çoğu projede geniş alan, düşük ışık ve uzun mesafe nedeniyle standart kurgu yetersiz kalır. Alan tipine özel planlama gerekir.",
      },
      {
        question: "Gece görüş performansı nasıl iyileştirilir?",
        answer:
          "Işık koşullarına uygun kamera seçimi, doğru lens ve yerleşim planı ile gece kayıt kalitesi yükseltilir.",
      },
      {
        question: "Uzun kayıt süresi mümkün mü?",
        answer:
          "Evet. Kayıt süresi hedefinize göre depolama planı yapılarak uygun NVR ve disk yapısı belirlenir.",
      },
      {
        question: "Kurulum sonrası bakım neden önemli?",
        answer:
          "Yoğun çalışma ortamında kir, titreşim ve altyapı etkileri arızayı artırabilir. Periyodik bakım kesintileri azaltır.",
      },
    ],
    faqExtraItems: [
      {
        question: "Fabrika ve depo için standart kamera sistemi yeterli mi?",
        answer:
          "Çoğu projede geniş alan, düşük ışık ve uzun mesafe nedeniyle standart kurgu yetersiz kalır. Alan tipine özel planlama gerekir.",
      },
      {
        question: "Gece görüş performansı nasıl iyileştirilir?",
        answer:
          "Işık koşullarına uygun kamera seçimi, doğru lens ve yerleşim planı ile gece kayıt kalitesi yükseltilir.",
      },
      {
        question: "Uzun kayıt süresi mümkün mü?",
        answer:
          "Evet. Kayıt süresi hedefinize göre depolama planı yapılarak uygun NVR ve disk yapısı belirlenir.",
      },
      {
        question: "Kurulum sonrası bakım neden önemli?",
        answer:
          "Yoğun çalışma ortamında kir, titreşim ve altyapı etkileri arızayı artırabilir. Periyodik bakım kesintileri azaltır.",
      },
    ],
    section1Cards: [
      {
        title: "Üretim alanları",
        items: ["Proses hattı izleme", "Kritik nokta kontrolü", "Operasyon takibi"],
      },
      {
        title: "Depo raf bölgeleri",
        items: ["Koridor izleme", "Stok güvenliği", "Yükleme yönü kontrolü"],
      },
      {
        title: "Yükleme-boşaltma",
        items: ["Araç hareket takibi", "Kapı giriş izleme", "Gece görüş odaklı kurgu"],
      },
      {
        title: "Çevre hattı",
        items: ["Sınır güvenliği", "Uzun mesafe izleme", "Kesintisiz kayıt planı"],
      },
    ],
    processSteps: [
      "Saha keşfi ve risk noktaları",
      "Geniş alan kamera planı",
      "Altyapı ve montaj",
      "Kayıt/depolama optimizasyonu",
      "Test ve işletme teslimi",
    ],
    pricingFactors: [
      "Alan genişliği",
      "Gece görüş ihtiyacı",
      "Kamera ve cihaz adedi",
      "Kayıt süresi hedefi",
      "Bakım kapsamı",
    ],
    relatedLinks: [
      { href: "/kamera-sistemi-kurulumu", label: "Kamera Sistemi Kurulumu" },
      { href: "/bakim-servis-uzaktan-izleme", label: "Bakım Servis Uzaktan İzleme" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  "bakim-servis-uzaktan-izleme": {
    heroIntro:
      "Mevcut sistemlerin kayıt cihazı, kamera, bağlantı ve görüntü problemlerini tespit edip periyodik bakım ve uzaktan izleme desteğiyle arıza riskini düşürüyoruz.",
    seoBlocks: [
      {
        title: "Güvenlik Sistemleri Bakımı Nedir",
        paragraphs: [
          "Güvenlik sistemleri bakımı; kurulu altyapının düzenli kontrol, test ve performans iyileştirmeleriyle sürekli çalışır kalmasını sağlayan profesyonel hizmettir.",
          "Amaç yeni sistem kurmak değil, mevcut sistemi değiştirmeden arıza riskini azaltmak ve kesintileri önlemektir.",
        ],
      },
      {
        title: "Kamera ve Alarm Sistemleri Periyodik Bakımı",
        paragraphs: [
          "Periyodik bakım kapsamında kayıt cihazı kontrolü, disk sağlığı analizi, görüntü kalitesi kontrolü ve alarm bileşen testleri yapılır.",
          "Bu sayede gizli arızalar büyümeden tespit edilir ve sistemin kritik anda devre dışı kalma riski düşürülür.",
        ],
        items: [
          "Kayıt cihazı ve disk sağlığı kontrolü",
          "Görüntü, bağlantı ve erişim testleri",
          "Alarm paneli ve dedektör fonksiyon kontrolleri",
        ],
      },
      {
        title: "Uzaktan İzleme ve Arıza Tespiti",
        paragraphs: [
          "Uzaktan erişim altyapısı sayesinde bağlantı kopması, kayıt hatası veya görüntü bozulması gibi sorunlar erken aşamada fark edilir.",
          "Sahaya gitmeden çözülebilecek problemler hızlıca kapatılır, yerinde müdahale gereken durumlarda doğru ekip planlaması yapılır.",
        ],
      },
      {
        title: "Sistem Bakımı Neden Önemlidir",
        paragraphs: [
          "Bakım yapılmayan sistemler zamanla kayıt kaybı, görüntü düşüşü ve erişim sorunları üretir. Bu durum güvenlik yatırımının etkisini azaltır.",
          "Düzenli bakım, maliyetli arızaları azaltır ve sistemin kurulduğu günden sonraki performansını korur.",
        ],
      },
      {
        title: "Bakım ve Uzaktan İzleme Hizmeti Avantajları",
        paragraphs: [
          "Periyodik bakım ve uzaktan izleme ile güvenlik sisteminizin ömrü uzar, arıza kaynaklı kesintiler azalır ve kritik anlarda sistemin çalışır durumda olmasından emin olursunuz. Bakım destekli sistemlerde ortalama arıza süresi belirgin biçimde kısalır.",
          "Uzaktan teşhis sayesinde birçok sorun sahaya teknisyen göndermeden çözülür; bu da hem zamandan hem maliyetten tasarruf sağlar. İşletmeler güvenlik altyapılarını gönül rahatlığıyla kullanmaya devam eder.",
        ],
        items: [
          "Arıza riskinde belirgin düşüş",
          "Uzaktan teşhis ile hızlı çözüm",
          "Maliyet tasarrufu ve verimli servis",
          "Sistemin kritik anda hazır olma güvencesi",
          "Düzenli raporlama ile şeffaf takip",
          "Farklı marka sistemlerin devralınabilmesi",
        ],
      },
    ],
    useCases: [
      "Kayıt cihazı ve disk sağlığı kaynaklı kayıt kesintilerinin azaltılması",
      "Kamera görüntü kalitesi ve açı bozulmalarının düzenli kontrolü",
      "Bağlantı ve uzaktan erişim sorunlarına hızlı teknik müdahale",
      "Kurumsal yapılarda periyodik bakım planı ile servis sürekliliği",
    ],
    installationSteps: [
      "Mevcut sistem envanterinin çıkarılması ve ilk sağlık kontrolü",
      "Kritik arıza noktalarının analiz edilip bakım planının hazırlanması",
      "Periyodik saha bakımının uygulanması ve teknik kontrollerin yapılması",
      "Uzaktan izleme ile erken problem tespitinin sürdürülmesi",
      "Aylık raporlama ve iyileştirme önerileriyle sürecin devam ettirilmesi",
    ],
    sectionTitle1: "Bakım ve Uzaktan İzleme Nerede Fark Yaratır?",
    sectionBody1:
      "Kurulu sistemi olan işletmelerde asıl değer, arıza olduktan sonra değil arıza büyümeden önce müdahale edebilmektir.",
    sectionTitle2: "Bakım ve Teknik Servis Süreci",
    sectionBody2:
      "Sistem envanteri, kayıt ve bağlantı kontrolleri, uzaktan teşhis ve sahada müdahale adımlarını düzenli bir bakım planına bağlı yürütüyoruz.",
    ctaText:
      "Periyodik bakım ve uzaktan izleme modeli ile kayıt kaybı, bağlantı kesintisi ve görüntü sorunlarını daha hızlı tespit ederek operasyon sürekliliğini koruyoruz.",
    authoritySections: [
      {
        title: "Güvenlik Sistemleri Bakımı Neden Kritik?",
        paragraphs: [
          "Kurulu sistemler zamanla bakım gerektirir. Kayıt cihazı, disk, görüntü kalitesi ve bağlantı tarafında oluşan küçük hatalar müdahale edilmezse büyük kesintilere dönüşebilir.",
          "Bakım hizmetinin amacı sistemi değiştirmek değil, mevcut altyapıyı koruyarak arıza riskini düşürmek ve güvenlik performansını sürdürülebilir hale getirmektir.",
        ],
        imageSrc: "/images/services/bakim-servis/guvenlik-sistemi-bakim-teknisyen-ekip.jpg",
        imageAlt: "Güvenlik sistemi bakım teknisyen ekibi",
      },
      {
        title: "Uzaktan İzleme ve Hızlı Teknik Destek",
        paragraphs: [
          "Uzaktan erişim altyapısı ile bağlantı hataları, kayıt kesintileri ve görüntü sorunları erken tespit edilir. Bu yaklaşım sahaya çıkmadan çözülebilen arızalarda ciddi zaman kazandırır.",
          "Periyodik bakım, NVR/DVR kontrolleri, disk sağlığı analizi ve alarm panel testleri ile sistemin sürekli çalışır kalması sağlanır.",
        ],
        items: [
          "Kayıt cihazı ve harddisk sağlık kontrolü",
          "Görüntü/bağlantı sorunlarında hızlı teşhis",
          "Uzaktan destek + yerinde müdahale planı",
        ],
        imageSrc: "/images/services/bakim-servis/uzaktan-izleme-merkezi-ekranlari.jpg",
        imageAlt: "Uzaktan izleme merkezi ekranları",
      },
    ],
    conversionBlocks: [
      {
        title: "Mevcut sisteminizi değiştirmeden performansını yükseltin",
        description:
          "Uzman ekibimiz periyodik bakım ve uzaktan destek planıyla kayıt, görüntü ve bağlantı sorunlarını hızlıca tespit eder. Uygun maliyetli bakım sözleşmesiyle sistemi güvenle işletmeye devam edin.",
        whatsappText: "Bakım-servis-uzaktan izleme için hızlı fiyat ve destek planı istiyorum.",
        supportingLink: {
          href: "/bakim-servis-uzaktan-izleme",
          label: "Bakım Hizmeti Detayları",
        },
      },
    ],
    trustBlock:
      "Bakım hizmetinde değer, arıza çıktıktan sonra müdahale etmek değil arızayı önceden yakalayıp sürekliliği korumaktır. Teknik izleme ve periyodik bakım bu yüzden birlikte sunulmalıdır.",
    trustTitle: "Mevcut sistemi güçlü tutan şey düzenli bakım ve hızlı müdahaledir",
    trustBody:
      "Kurulu sistemlerde asıl risk, arıza sonrası geç müdahaledir. Periyodik bakım, uzaktan izleme ve hızlı teknik yönlendirme ile sistemin çalışır kalmasını güvence altına alıyoruz.",
    trustBullets: [
      "Şehir içi keşif ve mevcut sistem analizi",
      "Kayıt cihazı, kamera ve bağlantı kontrolleri",
      "Uzaktan izleme ile erken problem tespiti",
      "Teslim sonrası düzenli destek planı",
      "Arıza riskini düşüren periyodik bakım yaklaşımı",
    ],
    faqExtras: [
      {
        question: "Bakım hizmeti sadece kendi kurduğunuz sistemlere mi veriliyor?",
        answer:
          "Hayır. Farklı firmalar tarafından kurulmuş sistemleri de devralıp bakım kapsamına alabiliyoruz.",
      },
      {
        question: "Hangi sorunlarda uzaktan destek veriyorsunuz?",
        answer:
          "Bağlantı, temel görüntü erişimi, kullanıcı ve kayıt ayarı kaynaklı sorunlarda uzaktan teşhis ve müdahale sağlanabilir.",
      },
      {
        question: "Periyodik bakım neleri kapsar?",
        answer:
          "Kamera açıları, kayıt cihazı, disk sağlığı, bağlantı durumu ve temel sistem kontrolleri bakım kapsamında değerlendirilir.",
      },
      {
        question: "Bakım sözleşmesi servis hızını etkiler mi?",
        answer:
          "Evet. Sözleşmeli müşterilerde arıza geçmişi kayıtlı olduğu için teşhis ve müdahale süreçleri genellikle daha hızlı ilerler.",
      },
    ],
    faqExtraItems: [
      {
        question: "Bakım hizmeti sadece kendi kurduğunuz sistemlere mi veriliyor?",
        answer:
          "Hayır. Farklı firmalar tarafından kurulmuş sistemleri de devralıp bakım kapsamına alabiliyoruz.",
      },
      {
        question: "Hangi sorunlarda uzaktan destek veriyorsunuz?",
        answer:
          "Bağlantı, temel görüntü erişimi, kullanıcı ve kayıt ayarı kaynaklı sorunlarda uzaktan teşhis ve müdahale sağlanabilir.",
      },
      {
        question: "Periyodik bakım neleri kapsar?",
        answer:
          "Kamera açıları, kayıt cihazı, disk sağlığı, bağlantı durumu ve temel sistem kontrolleri bakım kapsamında değerlendirilir.",
      },
      {
        question: "Bakım sözleşmesi servis hızını etkiler mi?",
        answer:
          "Evet. Sözleşmeli müşterilerde arıza geçmişi kayıtlı olduğu için teşhis ve müdahale süreçleri genellikle daha hızlı ilerler.",
      },
    ],
    section1Cards: [
      {
        title: "Kayıt ve depolama",
        items: ["NVR/DVR kontrolü", "Disk sağlığı", "Kayıt sürekliliği"],
      },
      {
        title: "Kamera performansı",
        items: ["Görüntü kalite kontrolü", "Açı optimizasyonu", "Gece performansı"],
      },
      {
        title: "Bağlantı ve erişim",
        items: ["Ağ bağlantısı", "Uzaktan erişim", "Kullanıcı yönetimi"],
      },
      {
        title: "Servis planlaması",
        items: ["Periyodik bakım", "Öncelikli müdahale", "Teknik raporlama"],
      },
    ],
    processSteps: [
      "Mevcut sistem analizi",
      "Arıza ve risk tespiti",
      "Bakım planının oluşturulması",
      "Uzaktan izleme ve hızlı müdahale",
      "Düzenli raporlama",
    ],
    pricingFactors: [
      "Sistem büyüklüğü",
      "Cihaz adedi",
      "Bakım sıklığı",
      "Uzaktan izleme kapsamı",
      "Müdahale seviyesi",
    ],
    relatedLinks: [
      { href: "/bakim-servis-uzaktan-izleme", label: "Bakım Servis Uzaktan İzleme" },
      { href: "/kamera-sistemi-kurulumu", label: "Kamera Sistemi Kurulumu" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
};

function getCityLocative(cityName: string) {
  const normalized = cityName.toLocaleLowerCase("tr-TR");
  const lastVowel = [...normalized].reverse().find((char) => "aeıioöuü".includes(char));
  const suffix = lastVowel && "eiöü".includes(lastVowel) ? "de" : "da";
  return `${cityName}'${suffix}`;
}

export function generateStaticParams() {
  return getCityServiceStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;

  const city = cities.find((c) => c.slug === citySlug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!city || !service) {
    return {
      title: "Sayfa Bulunamadı | Güvenlik Servisi",
    };
  }

  const canonical = getCityServiceCanonicalUrl(city.slug, service.slug);

  if (!canonical) {
    return {
      title: "Sayfa Bulunamadi | Guvenlik Servisi",
    };
  }

  const pageContent = getServicePageFactoryData(city, service);

  return {
    title: pageContent.meta.title,
    description: pageContent.meta.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageContent.meta.title,
      description: pageContent.meta.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "tr_TR",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { city: citySlug, service: serviceSlug } = await params;

  const city = cities.find((c) => c.slug === citySlug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!city || !service) {
    notFound();
  }

  const cityPath = getCityPath(city.slug);
  const cityCanonical = getCityCanonicalUrl(city.slug);
  const canonical = getCityServiceCanonicalUrl(city.slug, service.slug);

  if (!cityPath || !cityCanonical || !canonical) {
    notFound();
  }

  const pageContent = getServicePageFactoryData(city, service);
  const serviceVisuals = getCityServicePageVisuals(city.slug, service.slug);
  const serviceSpecificContent =
    serviceContentMap[service.slug] ?? buildDefaultServiceSpecificContent(city, service, pageContent);

  const isCameraService = service.slug === "kamera-sistemi-kurulumu";
  const cityLocative = getCityLocative(city.name);
  const heroHeading = `${city.name} ${service.name} Hizmeti`;
  const heroDecisionIntro = `${city.name} içinde ${serviceSpecificContent.heroIntro}`;
  const serviceSeoBlocks = isCameraService
    ? pageContent.seoContent.blocks
    : serviceSpecificContent.seoBlocks ?? [];
  const serviceAuthoritySections = serviceSpecificContent.authoritySections ?? [];
  const serviceConversionBlocks = serviceSpecificContent.conversionBlocks ?? [];

  const serviceImageMap: Record<string, { src: string; alt: string }[]> = {
    "kamera-sistemi-kurulumu": [
      { src: "/images/diagrams/camera-system-flow.svg", alt: `${city.name} kamera sistemi \u00e7al\u0131\u015fma \u015femas\u0131` },
      { src: "/images/landing/ip-kamera-kurulum-detay.webp", alt: "IP kamera montaj detay\u0131" },
      { src: "/images/landing/uzaktan-izleme-mobil.webp", alt: "Mobil uzaktan izleme ekran\u0131" },
    ],
    "alarm-sistemi-kurulumu": [
      { src: "/images/diagrams/alarm-system-flow.svg", alt: `${city.name} alarm sistemi \u00e7al\u0131\u015fma \u015femas\u0131` },
      { src: "/images/landing/istanbul-alarm-sistemi-kurulumu-kablolu-kablosuz.jpg.png", alt: "Kablolu ve kablosuz alarm sistemi kurulumu" },
      { src: "/images/landing/telefondan-kablosuz-alarm-kontrol-app.webp", alt: "Mobil alarm kontrol uygulamas\u0131" },
    ],
    "yangin-alarm-sistemi-kurulumu": [
      { src: "/images/diagrams/fire-alarm-flow.svg", alt: `${city.name} yang\u0131n alarm sistemi \u00e7al\u0131\u015fma \u015femas\u0131` },
      { src: "/images/services/bakim-servis/yangin-alarm-dedektor-ve-acil-butonu.jpg", alt: "Yang\u0131n alarm dedekt\u00f6r\u00fc ve acil buton" },
      { src: "/images/services/bakim-servis/yangin-alarm-paneli-kontrol-sistemi.jpg", alt: "Yang\u0131n alarm paneli kontrol sistemi" },
    ],
    "kartli-gecis-sistemi-kurulumu": [
      { src: "/images/diagrams/access-control-flow.svg", alt: `${city.name} kartl\u0131 ge\u00e7i\u015f sistemi \u00e7al\u0131\u015fma \u015femas\u0131` },
      { src: "/images/services/bakim-servis/kartli-gecis-sistemi-turnike-giris.jpg", alt: "Kartl\u0131 ge\u00e7i\u015f turnike giri\u015f sistemi" },
      { src: "/images/services/bakim-servis/kartli-gecis-sistemi-mobil-giris-cikis-kayitlari-ve-maas-hesaplama.jpg", alt: "Kartl\u0131 ge\u00e7i\u015f mobil kay\u0131t ekran\u0131" },
    ],
    "bakim-servis-uzaktan-izleme": [
      { src: "/images/diagrams/security-network-flow.svg", alt: `${city.name} g\u00fcvenlik a\u011f yap\u0131s\u0131 \u015femas\u0131` },
      { src: "/images/services/bakim-servis/guvenlik-sistemi-bakim-teknisyen-ekip.jpg", alt: "Bak\u0131m teknisyen ekibi" },
      { src: "/images/services/bakim-servis/nvr-kayit-cihazi-bakim-harddisk-kontrol.jpg", alt: "NVR kay\u0131t cihaz\u0131 bak\u0131m kontrol\u00fc" },
    ],
    "apartman-site-guvenlik-sistemi": [
      { src: "/images/services/bakim-servis/site-yonetimi-guvenlik-merkezi-izleme-ekrani.jpg", alt: "Site y\u00f6netimi g\u00fcvenlik izleme merkezi" },
      { src: "/images/services/bakim-servis/site-kamera-sistemi-periyodik-bakim.jpg", alt: "Site kamera sistemi periyodik bak\u0131m" },
      { src: "/images/diagrams/security-network-flow.svg", alt: "Site g\u00fcvenlik a\u011f yap\u0131s\u0131" },
    ],
    "isyeri-guvenlik-sistemi": [
      { src: "/images/landing/isyeri-ajax-alarm-kurulum-servisi.png", alt: "\u0130\u015fyeri alarm ve g\u00fcvenlik sistemi" },
      { src: "/images/services/bakim-servis/guvenlik-sistemi-teknik-servis-ekip-isyeri-kamera-montaji.jpg", alt: "\u0130\u015fyeri teknik servis ve kurulum" },
      { src: "/images/services/bakim-servis/market-kamera-montaji-gorunmez-kablolama-demosu.jpg", alt: "Ma\u011faza kamera montaj\u0131 ve kablolama" },
    ],
    "fabrika-depo-guvenlik-sistemi": [
      { src: "/images/services/bakim-servis/fabrika-guvenlik-kamera-bakim-servisi.jpg", alt: "Fabrika g\u00fcvenlik kamera sistemleri" },
      { src: "/images/services/bakim-servis/nvr-kayit-cihazi-bakim-kontrol-harddisk-testi.jpg", alt: "NVR kay\u0131t cihaz\u0131 ve harddisk kontrol\u00fc" },
      { src: "/images/services/bakim-servis/guvenlik-kamera-sistemi-izleme-merkezi.jpg", alt: "G\u00fcvenlik kamera izleme merkezi" },
    ],
  };
  const serviceImages = serviceImageMap[service.slug] ?? [];

  const cameraTopicPattern = /\b(kamera|ip kamera|cctv|nvr|dvr|kayıt)\b/i;
  const baseFaqItems = isCameraService
    ? pageContent.faq.items
    : pageContent.faq.items.filter(
        (item) => !cameraTopicPattern.test(`${item.question} ${item.answer}`)
      );

  const faqExtraItems = [
    ...serviceSpecificContent.faqExtras,
    ...serviceSpecificContent.faqExtraItems,
    {
      question: `${city.name} genelinde bu hizmeti hangi ilçelerde veriyorsunuz?`,
      answer:
        `${city.name} genelinde ilçe bazlı ekip planlaması yapıyoruz. Keşif sonrası proje kapsamına uygun servis takvimi oluşturuyoruz.`,
    },
  ];

  const mergedFaqItems = [
    ...baseFaqItems,
    ...faqExtraItems.filter(
      (candidate) =>
        !baseFaqItems.some(
          (existing) => existing.question.toLowerCase() === candidate.question.toLowerCase()
        )
    ),
  ];

  const relatedCoreServiceLinks = [
    { href: "/kamera-sistemi-kurulumu", label: "Kamera Sistemi Kurulumu" },
    { href: "/alarm-sistemi-kurulumu", label: "Alarm Sistemi Kurulumu" },
    { href: "/yangin-alarm-sistemi-kurulumu", label: "Yangın Alarm Sistemi Kurulumu" },
    { href: "/bakim-servis-uzaktan-izleme", label: "Bakım, Servis ve Uzaktan İzleme" },
  ];

  const nationwideCityHubLinks = ["istanbul", "ankara", "izmir"]
    .map((slug) => {
      const cityItem = cities.find((item) => item.slug === slug);
      const href = getCityPath(slug);

      if (!cityItem || !href) {
        return null;
      }

      return {
        href,
        label: cityItem.name,
      };
    })
    .filter((item): item is { href: string; label: string } => item !== null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mergedFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: city.name,
        item: cityCanonical,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: canonical,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${city.name} ${service.name} - ${siteConfig.name}`,
    url: canonical,
    telephone: siteConfig.phone,
    areaServed: city.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      streetAddress: siteConfig.address,
      addressCountry: "TR",
    },
    description: pageContent.meta.description,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${city.name} ${service.name}`,
    serviceType: service.name,
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: canonical,
      areaServed: city.name,
    },
  };

  return (
    <main className={pageShellClass}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {isCameraService ? (
        <ServiceHero
          cityName={city.name}
          serviceName={service.name}
          cityDescription={pageContent.hero.cityDescription}
          intro={pageContent.hero.intro}
          localContext={pageContent.hero.localContext}
          benefits={pageContent.hero.benefits}
          process={pageContent.hero.process}
          image={pageContent.images.hero}
        />
      ) : null}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              {heroHeading}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">{heroDecisionIntro}</p>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#teklif-formu"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-500"
            >
              Teklif Al
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              data-event="phone_click"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-4 text-base font-bold text-slate-950 transition hover:bg-slate-50"
            >
              Hemen Ara
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                `${city.name} ${service.name} için bilgi ve fiyat almak istiyorum.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              data-event="whatsapp_click"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-base font-bold text-white transition hover:bg-slate-800"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
              {cityLocative} {serviceSpecificContent.sectionTitle1}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {serviceSpecificContent.sectionBody1}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {serviceSpecificContent.section1Cards.map((group) => (
              <div key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-black text-slate-950">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
              {serviceSpecificContent.sectionTitle2}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {serviceSpecificContent.sectionBody2}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {serviceSpecificContent.processSteps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold leading-7 text-slate-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {serviceImages.length > 0 ? (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {serviceImages.map((img) => (
                <div key={img.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={500}
                    className="h-48 w-full object-cover md:h-56"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
              {service.name} Fiyatını Etkileyen Faktörler
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Fiyat, proje kapsamı ve saha koşullarına göre belirlenir. Net teklif için keşif
              sonrası ihtiyaç kalemlerini birlikte netleştiriyoruz.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {serviceSpecificContent.pricingFactors.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-black text-slate-950">{item}</h3>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-7 text-slate-600">
            {serviceSpecificContent.ctaText}{" "}
            {serviceSpecificContent.relatedLinks.map((link, index) => (
              <span key={link.href}>
                <Link href={link.href} className="font-bold text-slate-950 underline underline-offset-4">
                  {link.label}
                </Link>
                {index < serviceSpecificContent.relatedLinks.length - 1 ? ", " : " "}
              </span>
            ))}
            sayfalarından detay alabilir, şehirinize özel kurulum için teklif isteyebilirsiniz.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
                {city.name} için Neden Profesyonel Kurulum Tercih Edilmeli?
              </h2>
              <h3 className="mt-5 text-xl font-black text-slate-900">
                {serviceSpecificContent.trustTitle}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {serviceSpecificContent.trustBody}
              </p>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Proje sonrası sürdürülebilirlik için{" "}
                <Link
                  href="/bakim-servis-uzaktan-izleme"
                  className="font-bold text-slate-950 underline underline-offset-4"
                >
                  bakım ve uzaktan izleme
                </Link>{" "}
                planı, çapraz güvenlik ihtiyaçları için{" "}
                <Link
                  href="/iletisim"
                  className="font-bold text-slate-950 underline underline-offset-4"
                >
                  uzman ekiple iletişim
                </Link>{" "}
                öneriyoruz.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <ul className="space-y-3">
                {serviceSpecificContent.trustBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {city.name} genelinde {service.name.toLocaleLowerCase("tr-TR")} hizmeti veren deneyimli
              ekibimiz, her projeyi keşif, planlama ve teslim süreciyle birlikte yönetir.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: "\ud83d\udee0\ufe0f", title: "Deneyimli Teknik Ekip", desc: "12 yılı aşkın sektör deneyimi ve sertifikalı teknik kadro" },
              { icon: "\u26a1", title: "Hızlı Montaj", desc: "Çoğu proje aynı gün veya ertesi gün tamamlanır" },
              { icon: "\ud83d\udcb0", title: "Uygun Fiyat", desc: "Bütçenize uygun çözüm, ücretsiz keşif ve net teklif" },
              { icon: "\u2705", title: "Kaliteli Ekipman", desc: "Kanıtlanmış markalar ve garanti kapsamında kurulum" },
              { icon: "\ud83d\udcde", title: "Satış Sonrası Destek", desc: "Teknik servis, bakım ve uzaktan destek sürekliliği" },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-emerald-200 bg-white p-6 text-center shadow-sm">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-3 text-base font-black text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                `${city.name} ${service.name} i\u00e7in \u00fccretsiz ke\u015fif ve fiyat teklifi istiyorum.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-500"
            >
              WhatsApp ile Ücretsiz Keşif
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-bold text-slate-950 transition hover:bg-slate-50"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-black text-slate-950">{city.name} Genelinde Hizmet Kapsamımız</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {city.name} genelinde hizmet veriyor, ilçe bazlı planlama yapabiliyor ve keşif sonrası
              uygun ekibi hızlı şekilde yönlendiriyoruz. Amaç, proje süresini uzatmadan doğru
              kurulumla hızlı devreye alma sağlamaktır.
            </p>
          </div>
        </div>
      </section>

      <ServiceStats
        title={pageContent.stats.title}
        description={pageContent.stats.description}
        items={pageContent.stats.items}
      />

      {serviceSeoBlocks.length > 0 ? <ServiceSEOContent blocks={serviceSeoBlocks} /> : null}

      {serviceAuthoritySections.length > 0 ? (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl space-y-10 px-4 py-12 md:px-6 md:py-16">
            {serviceAuthoritySections.map((block) => (
              <article
                key={block.title}
                className="grid gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr]"
              >
                <div>
                  <h2 className="text-2xl font-black text-slate-950 md:text-3xl">{block.title}</h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                    {block.paragraphs.map((paragraph) => (
                      <p key={`${block.title}-${paragraph}`}>{paragraph}</p>
                    ))}
                  </div>
                  {block.items?.length ? (
                    <ul className="mt-4 space-y-2">
                      {block.items.map((item) => (
                        <li
                          key={`${block.title}-${item}`}
                          className="flex items-start gap-2 text-sm font-medium leading-7 text-slate-700"
                        >
                          <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                {block.imageSrc ? (
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <Image
                      src={block.imageSrc}
                      alt={block.imageAlt ?? block.title}
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {serviceConversionBlocks.length > 0 ? (
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6">
            {serviceConversionBlocks.map((block) => (
              <div
                key={block.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8"
              >
                <h2 className="text-xl font-black text-slate-950 md:text-2xl">{block.title}</h2>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
                  {block.description}
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(block.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-500"
                  >
                    WhatsApp ile Hızlı Fiyat Al
                  </a>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
                  >
                    Hemen Arayın
                  </a>
                  {block.supportingLink ? (
                    <Link
                      href={block.supportingLink.href}
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                    >
                      {block.supportingLink.label}
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <ServiceVisualSection
        title={pageContent.visuals.title}
        description={pageContent.visuals.description}
        items={serviceVisuals}
      />

      <CityHubSection cityName={city.name} cityPath={cityPath} />

      <RelatedServicesSection cityName={city.name} links={pageContent.relatedServices} />

      {isCameraService ? (
        <ServiceUseCases
          title={pageContent.useCases.title}
          description={pageContent.useCases.description}
          localContext={pageContent.useCases.localContext}
          items={pageContent.useCases.items}
          supportImages={pageContent.images.support}
          useCaseImages={pageContent.images.useCases}
        />
      ) : null}

      {isCameraService ? (
        <ServicePackages
          title={pageContent.packages.title}
          description={pageContent.packages.description}
          localContext={pageContent.packages.localContext}
          items={pageContent.packages.items}
        />
      ) : null}

      <ServiceDistricts cityName={city.name} districts={pageContent.districts} />

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <h2 className="text-2xl font-black text-slate-950">İlgili Güvenlik Sistemleri Hizmetleri</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Projenizi bütüncül planlamak için aşağıdaki temel hizmet sayfalarını da inceleyebilirsiniz.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {relatedCoreServiceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ title={pageContent.faq.title} items={mergedFaqItems} />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <h2 className="text-2xl font-black text-slate-950">Türkiye Genelinde {service.name} Hizmeti</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            {service.name} hizmetini İstanbul başta olmak üzere birçok şehirde sunuyoruz. Şehir
            bazlı hizmet detaylarını aşağıdaki merkez sayfalardan inceleyebilirsiniz.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {nationwideCityHubLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h2 className="text-2xl font-black text-slate-950">
              {city.name} içinde {service.name} için hızlı keşif ve teklif alın
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
              Ücretsiz ön değerlendirme ile ihtiyacınızı kısa sürede analiz ediyor, şehir içi planlamaya
              uygun şekilde hızlı geri dönüş sağlıyoruz. Telefon, WhatsApp ve teklif formu üzerinden
              aynı gün içinde süreç başlatabilirsiniz.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              İsterseniz{" "}
              <Link href="/iletisim" className="font-bold text-slate-950 underline underline-offset-4">
                iletişim
              </Link>{" "}
              sayfasından detay paylaşın; sistem sürekliliği için{" "}
              <Link
                href="/bakim-servis-uzaktan-izleme"
                className="font-bold text-slate-950 underline underline-offset-4"
              >
                bakım desteği
              </Link>{" "}
              seçeneklerini de birlikte planlayalım.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#teklif-formu"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-500"
              >
                Ücretsiz Teklif Al
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  `${city.name} ${service.name} için hızlı keşif ve teklif istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        title={pageContent.cta.title}
        description={pageContent.cta.description}
        primaryLabel={pageContent.cta.primaryLabel}
        secondaryLabel={pageContent.cta.secondaryLabel}
        image={pageContent.images.cta}
      />
    </main>
  );
}
