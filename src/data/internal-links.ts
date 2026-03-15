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
  ],
  "alarm-sistemi-kurulumu": [
    {
      href: "/sorun/alarm-arizalari",
      label: "Alarm sistemi arızaları",
      description:
        "Yanlış alarm, sensör hatası ve panel sorunlarında ilgili arıza rehberine geçin.",
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
  ],
};
