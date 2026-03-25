import { cities } from "@/data/cities";

export interface ContextualLinkData {
  href: string;
  label: string;
  description?: string;
}

const priorityCitySlugs = ["istanbul", "ankara", "izmir", "bursa", "antalya"];

export const topCityHubLinks: ContextualLinkData[] = priorityCitySlugs
  .map((slug) => cities.find((city) => city.slug === slug))
  .filter((city): city is (typeof cities)[number] => Boolean(city))
  .map((city) => ({
    href: `/${city.slug}`,
    label: `${city.name} güvenlik sistemleri`,
    description: `${city.name} genelinde kamera, alarm, kartlı geçiş ve bakım hizmetlerimizi inceleyin.`,
  }));

export const serviceProblemLinks: Record<string, ContextualLinkData[]> = {
  "kamera-sistemi-kurulumu": [
    {
      href: "/sorun/kamera-goruntu-gelmiyor",
      label: "Kamera görüntü gelmiyor",
      description:
        "Görüntü kaybı, besleme hatası, kablo arızası ve NVR kaynaklı sorunları ayrıştırmak için bu sayfayı inceleyin.",
    },
    {
      href: "/sorun/kamera-offline",
      label: "Kamera offline sorunu",
      description:
        "IP çakışması, switch arızası, modem veya erişim problemlerinde ilk teşhis adımlarını buradan başlatın.",
    },
    {
      href: "/sorun/kayit-yapilmiyor",
      label: "Kamera sistemi kayıt yapmıyor",
      description:
        "Kurulum sonrası kayıt alamama, HDD ve planlama sorunlarında ilgili rehberi inceleyin.",
    },
    {
      href: "/sorun/telefondan-izleme-sorunu",
      label: "Telefondan izleme sorunu",
      description:
        "Mobil izleme çalışmıyorsa uygulama, modem ve uzaktan erişim tarafını buradan kontrol edin.",
    },
    {
      href: "/sorun/kamera-bulanik-gosteriyor",
      label: "Kamera bulanık gösteriyor",
      description:
        "Lens kirlenmesi, netlik ayarı ve düşük ışık kaynaklı görüntü kalitesi sorunlarında bu rehberle başlayın.",
    },
    {
      href: "/sorun/kamera-gece-gorusu-calismiyor",
      label: "Kamera gece görüşü çalışmıyor",
      description:
        "IR LED, düşük ışık ve dış ortam kaynaklı gece izleme sorunlarını ilgili problem sayfasından değerlendirin.",
    },
    {
      href: "/sorun/kamera-hareket-kaydi-calismiyor",
      label: "Hareket kaydı çalışmıyor",
      description:
        "Motion detection, kayıt planı ve uyarı ayarları çalışmıyorsa ilk kontrol adımlarını burada bulun.",
    },
  ],
  "alarm-sistemi-kurulumu": [
    {
      href: "/sorun/alarm-arizalari",
      label: "Alarm sistemi arızaları",
      description:
        "Yanlış alarm, sensör hatası ve panel sorunlarında ilgili arıza rehberine geçin.",
    },
  ],
  "yangin-alarm-sistemi-kurulumu": [
    {
      href: "/sorun/yangin-alarm-paneli-uyari-veriyor",
      label: "Yangın alarm paneli uyarı veriyor",
      description:
        "Panel arızası, hat kopukluğu ve dedektör kaynaklı yangın alarm sorunlarını ilgili rehberden değerlendirin.",
    },
  ],
  "apartman-site-guvenlik-sistemi": [
    {
      href: "/sorun/kamera-goruntu-gelmiyor",
      label: "Apartman ve site kameralarında görüntü gelmiyor",
      description:
        "Ortak alan, otopark ve giriş kameralarındaki görüntü kaybı için sorun sayfasını inceleyin.",
    },
    {
      href: "/sorun/alarm-arizalari",
      label: "Site alarm arızaları",
      description:
        "Ortak alan alarm paneli veya sensör sorunlarını ilgili arıza sayfasından değerlendirin.",
    },
    {
      href: "/sorun/kartli-gecis-calismiyor",
      label: "Kartlı geçiş çalışmıyor",
      description:
        "Blok girişi, otopark veya ortak alan geçiş arızalarında ilgili sorun sayfasına geçin.",
    },
  ],
  "isyeri-guvenlik-sistemi": [
    {
      href: "/sorun/kamera-goruntu-gelmiyor",
      label: "İşyerinde kamera görüntü gelmiyor",
      description:
        "Kasa, depo ve giriş noktalarındaki görüntü kayıplarını arıza rehberiyle ayrıştırın.",
    },
    {
      href: "/sorun/alarm-arizalari",
      label: "İşyeri alarm arızaları",
      description:
        "Yanlış alarm ve panel sorunları işyeri operasyonunu etkilemeden ilgili rehberi inceleyin.",
    },
    {
      href: "/sorun/kartli-gecis-calismiyor",
      label: "Personel geçiş sistemi çalışmıyor",
      description:
        "Okuyucu, kilit ve kontrol ünitesi arızalarında sorun sayfasından devam edin.",
    },
  ],
  "fabrika-depo-guvenlik-sistemi": [
    {
      href: "/sorun/kamera-offline",
      label: "Fabrika veya depoda kamera offline",
      description:
        "Switch, ağ ve saha altyapısından kaynaklanan toplu kamera kopmalarını sorun sayfasında ayrıştırın.",
    },
    {
      href: "/sorun/kayit-yapilmiyor",
      label: "Kayıt yapılmıyor sorunu",
      description:
        "Yükleme alanı, çevre hattı ve depo kameralarında kayıt kaybı varsa buradan ilerleyin.",
    },
    {
      href: "/sorun/alarm-arizalari",
      label: "Tesis alarm arızaları",
      description:
        "Sensör, panel ve bildirim arızalarında ilgili sorun rehberi daha hızlı tanım koymanızı sağlar.",
    },
    {
      href: "/sorun/kartli-gecis-calismiyor",
      label: "Depo veya tesis geçiş sistemi çalışmıyor",
      description:
        "Vardiyalı kullanımdaki kapı, turnike ve okuyucu sorunlarını ilgili sayfadan inceleyin.",
    },
  ],
  "bakim-servis-uzaktan-izleme": [
    {
      href: "/sorun/kamera-goruntu-gelmiyor",
      label: "Kamera görüntü gelmiyor",
      description:
        "Bakım veya servis ihtiyacının görüntü kaybı kaynaklı olup olmadığını sorun sayfasından kontrol edin.",
    },
    {
      href: "/sorun/kamera-offline",
      label: "Kamera offline sorunu",
      description:
        "Uzaktan erişim ve saha ağı kaynaklı kopmalarda ilk kontrol adımlarını bu sayfada bulabilirsiniz.",
    },
    {
      href: "/sorun/kayit-yapilmiyor",
      label: "Kayıt yapılmıyor sorunu",
      description:
        "Kayıt cihazı ve HDD kaynaklı bakım ihtiyaçları için ilgili sorun sayfasına geçin.",
    },
    {
      href: "/sorun/telefondan-izleme-sorunu",
      label: "Telefondan izleme sorunu",
      description:
        "Uzaktan izleme tarafındaki modem, uygulama ve P2P sorunlarını önce burada ayrıştırın.",
    },
    {
      href: "/sorun/kamera-hareket-kaydi-calismiyor",
      label: "Hareket kaydı çalışmıyor",
      description:
        "Bakım ihtiyacının motion detection, olay kaydı veya alarm kuralı kaynaklı olup olmadığını bu sayfadan ayırın.",
    },
  ],
  "kamera-ariza-servisi": [
    {
      href: "/sorun/kamera-goruntu-gelmiyor",
      label: "Kamera görüntü gelmiyor",
      description:
        "Tek kamera ya da birden fazla noktada görüntü kaybı varsa ilgili arıza rehberinden başlayın.",
    },
    {
      href: "/sorun/kamera-offline",
      label: "Kamera offline sorunu",
      description:
        "IP, switch ve modem kaynaklı erişim kopmalarını bu sorun sayfasından netleştirin.",
    },
    {
      href: "/sorun/kayit-yapilmiyor",
      label: "Kayıt yapılmıyor sorunu",
      description:
        "NVR, DVR ve HDD kaynaklı kayıt kaybında sorunu önce burada ayırın.",
    },
    {
      href: "/sorun/hdd-kayit-cihazi-sorunlari",
      label: "HDD ve kayıt cihazı sorunları",
      description:
        "Disk uyarı, format ve kayıt cihazı hatalarında ilgili sorun sayfasına geçin.",
    },
    {
      href: "/sorun/kamera-bulanik-gosteriyor",
      label: "Kamera bulanık gösteriyor",
      description:
        "Lens, fokus, cam koruma ve aydınlatma kaynaklı görüntü bozulmalarında ilgili arıza rehberini inceleyin.",
    },
    {
      href: "/sorun/kamera-gece-gorusu-calismiyor",
      label: "Kamera gece görüşü çalışmıyor",
      description:
        "IR aydınlatma ve düşük ışık sorunları sahada müdahale gerektiriyorsa bu sayfadan devam edin.",
    },
  ],
  "kamera-sistemi-bakim-sozlesmesi": [
    {
      href: "/sorun/kayit-yapilmiyor",
      label: "Kayıt yapılmıyor sorunu",
      description:
        "Periyodik bakım ihtiyacı en çok kayıt disiplini bozulduğunda görünür; ilgili sorun sayfasından ilerleyin.",
    },
    {
      href: "/sorun/hdd-kayit-cihazi-sorunlari",
      label: "HDD ve kayıt cihazı sorunları",
      description:
        "Disk ömrü ve kayıt cihazı sağlığı için ilgili arıza rehberini inceleyin.",
    },
    {
      href: "/sorun/kamera-offline",
      label: "Kamera offline sorunu",
      description:
        "Bakım planı ihtiyacının ağ ve ulaşım sorunlarıyla ilgili olup olmadığını buradan ayırın.",
    },
    {
      href: "/sorun/kamera-bulanik-gosteriyor",
      label: "Kamera bulanık gösteriyor",
      description:
        "Periyodik bakım gereksinimi en sık lens kirlenmesi, fokus kayması ve dış ortam etkilerinde görünür hale gelir.",
    },
  ],
  "uzaktan-kamera-izleme": [
    {
      href: "/sorun/telefondan-izleme-sorunu",
      label: "Telefondan izleme sorunu",
      description:
        "Mobil uygulama ve uzaktan erişim tarafındaki kopmaları doğrudan ilgili sorun sayfasından inceleyin.",
    },
    {
      href: "/sorun/kamera-offline",
      label: "Kamera offline sorunu",
      description:
        "Uzaktan izleme kopması fiziksel bağlantı veya IP sorunuysa bu sorun sayfası doğru başlangıçtır.",
    },
  ],
  "kartli-gecis-sistemi-kurulumu": [
    {
      href: "/sorun/kartli-gecis-calismiyor",
      label: "Kartlı geçiş sistemi çalışmıyor",
      description:
        "Okuyucu, kilit, kontrol ünitesi ve turnike arızalarında sorun sayfasından ilerleyin.",
    },
    {
      href: "/sorun/kart-okuyucu-kapi-acmiyor",
      label: "Kart okuyucu kapıyı açmıyor",
      description:
        "Okuyucu tepki veriyor ama kapı açılmıyorsa kilit, röle ve yetki kontrolünü bu sayfadan ayırın.",
    },
  ],
};

/**
 * Segment-based service cross-links.
 * Each segment maps to the most relevant services for that customer type.
 */
export const serviceSegmentLinks: Record<string, ContextualLinkData[]> = {
  "site-yonetimi": [
    {
      href: "/apartman-site-guvenlik-sistemi",
      label: "Apartman ve site güvenlik sistemi",
      description: "Ortak alan, otopark ve blok girişleri için kamera ve alarm kurulumu.",
    },
    {
      href: "/kamera-sistemi-kurulumu",
      label: "Kamera sistemi kurulumu",
      description: "Site genelinde IP kamera montajı ve kayıt cihazı yapılandırması.",
    },
    {
      href: "/kartli-gecis-sistemi-kurulumu",
      label: "Kartlı geçiş ve turnike sistemi",
      description: "Blok girişi, otopark bariyeri ve ortak alan geçiş kontrolü.",
    },
    {
      href: "/bakim-servis-uzaktan-izleme",
      label: "Bakım, servis ve uzaktan izleme",
      description: "Sitelerdeki mevcut güvenlik altyapısı için periyodik bakım ve uzaktan izleme.",
    },
  ],
  "fabrika": [
    {
      href: "/fabrika-depo-guvenlik-sistemi",
      label: "Fabrika ve depo güvenlik sistemi",
      description: "Sanayi tesisleri için çevre güvenliği, sevkiyat ve üretim izleme kurulumu.",
    },
    {
      href: "/uzaktan-kamera-izleme",
      label: "Uzaktan kamera izleme",
      description: "Üretim ve depo alanlarının merkezi izleme sistemi ile 7/24 takibi.",
    },
    {
      href: "/kartli-gecis-sistemi-kurulumu",
      label: "Kartlı geçiş ve turnike sistemi",
      description: "Vardiya giriş-çıkış kontrolü, turnike ve kapı yetkilendirmesi.",
    },
    {
      href: "/yangin-alarm-sistemi-kurulumu",
      label: "Yangın alarm sistemi kurulumu",
      description: "Fabrika ve üretim alanları için dedektör, panel ve siren sistemi.",
    },
  ],
  "depo-lojistik": [
    {
      href: "/fabrika-depo-guvenlik-sistemi",
      label: "Depo güvenlik sistemi kurulumu",
      description: "Sevkiyat noktası, raf alanı ve çevre güvenliği için profesyonel güvenlik çözümü.",
    },
    {
      href: "/kamera-sistemi-kurulumu",
      label: "Kamera sistemi kurulumu",
      description: "Depo içi ve dış alan izleme için IP kamera montajı ve NVR yapılandırması.",
    },
    {
      href: "/alarm-sistemi-kurulumu",
      label: "Alarm sistemi kurulumu",
      description: "Mesai dışı güvenlik için hareket sensörü ve siren destekli alarm altyapısı.",
    },
    {
      href: "/uzaktan-kamera-izleme",
      label: "Uzaktan kamera izleme",
      description: "Depo ve sevkiyat alanının merkezi izleme ile uzaktan takibi.",
    },
  ],
  "magaza-avm": [
    {
      href: "/isyeri-guvenlik-sistemi",
      label: "İşyeri güvenlik sistemi",
      description: "Mağaza, kasa ve depo alanı için kamera ve alarm entegrasyonu.",
    },
    {
      href: "/kamera-sistemi-kurulumu",
      label: "Kamera sistemi kurulumu",
      description: "Satış alanı, kasa noktası ve arka depo için IP kamera sistemi.",
    },
    {
      href: "/alarm-sistemi-kurulumu",
      label: "Alarm sistemi kurulumu",
      description: "Mağaza ve AVM alanları için hırsızlık önleme ve erken uyarı sistemi.",
    },
    {
      href: "/kartli-gecis-sistemi-kurulumu",
      label: "Kartlı geçiş sistemi kurulumu",
      description: "Personel giriş kontrolü ve yetkili alan sınırlandırması.",
    },
  ],
};
