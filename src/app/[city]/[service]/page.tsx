import type { Metadata } from "next";
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
  const serviceSpecificContent = serviceContentMap[service.slug];
  if (!serviceSpecificContent) {
    notFound();
  }

  const cityLocative = getCityLocative(city.name);
  const heroHeading = `${city.name} ${service.name} Hizmeti`;
  const heroDecisionIntro = `${city.name} içinde ${serviceSpecificContent.heroIntro}`;

  const faqExtraItems = [
    ...serviceSpecificContent.faqExtraItems,
    {
      question: `${city.name} genelinde bu hizmeti hangi ilçelerde veriyorsunuz?`,
      answer:
        `${city.name} genelinde ilçe bazlı ekip planlaması yapıyoruz. Keşif sonrası proje kapsamına uygun servis takvimi oluşturuyoruz.`,
    },
  ];

  const mergedFaqItems = [
    ...pageContent.faq.items,
    ...faqExtraItems.filter(
      (candidate) =>
        !pageContent.faq.items.some(
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

      <ServiceSEOContent blocks={pageContent.seoContent.blocks} />

      <ServiceVisualSection
        title={pageContent.visuals.title}
        description={pageContent.visuals.description}
        items={serviceVisuals}
      />

      <CityHubSection cityName={city.name} cityPath={cityPath} />

      <RelatedServicesSection cityName={city.name} links={pageContent.relatedServices} />

      <ServiceUseCases
        title={pageContent.useCases.title}
        description={pageContent.useCases.description}
        localContext={pageContent.useCases.localContext}
        items={pageContent.useCases.items}
        supportImages={pageContent.images.support}
        useCaseImages={pageContent.images.useCases}
      />

      <ServicePackages
        title={pageContent.packages.title}
        description={pageContent.packages.description}
        localContext={pageContent.packages.localContext}
        items={pageContent.packages.items}
      />

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
