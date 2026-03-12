export interface CityContent {
  shortDescription: string;
  metadataDistrictCoverage?: string;
  districts: string[];
}

export const cityContent: Record<string, CityContent> = {
  istanbul: {
    shortDescription:
      "İstanbul'da apartman, site, işyeri, mağaza ve depo projeleri için profesyonel güvenlik sistemleri kurulumu yapıyoruz.",
    metadataDistrictCoverage:
      "Adalar'dan Zeytinburnu'na kadar İstanbul genelinde ilçe bazlı keşif ve kurulum desteği sunuyoruz.",
    districts: [
      "Adalar",
      "Arnavutköy",
      "Ataşehir",
      "Avcılar",
      "Bağcılar",
      "Bahçelievler",
      "Bakırköy",
      "Başakşehir",
      "Bayrampaşa",
      "Beşiktaş",
      "Beykoz",
      "Beylikdüzü",
      "Beyoğlu",
      "Büyükçekmece",
      "Çatalca",
      "Çekmeköy",
      "Esenler",
      "Esenyurt",
      "Eyüpsultan",
      "Fatih",
      "Gaziosmanpaşa",
      "Güngören",
      "Kadıköy",
      "Kağıthane",
      "Kartal",
      "Küçükçekmece",
      "Maltepe",
      "Pendik",
      "Sancaktepe",
      "Sarıyer",
      "Silivri",
      "Sultanbeyli",
      "Sultangazi",
      "Şile",
      "Şişli",
      "Tuzla",
      "Ümraniye",
      "Üsküdar",
      "Zeytinburnu",
    ],
  },
  ankara: {
    shortDescription:
      "Ankara'da konut, işyeri ve ticari alanlar için keşif, montaj ve devreye alma dahil güvenlik sistemi hizmeti sunuyoruz.",
    districts: ["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Sincan"],
  },
  izmir: {
    shortDescription:
      "İzmir'de iç ve dış mekan güvenlik ihtiyaçlarına uygun kamera, alarm ve geçiş kontrol çözümleri kuruyoruz.",
    districts: ["Konak", "Karşıyaka", "Bornova", "Buca", "Bayraklı", "Çiğli"],
  },
  bursa: {
    shortDescription:
      "Bursa'da fabrika, depo, mağaza ve apartman projelerine uygun anahtar teslim güvenlik sistemi kurulumu yapıyoruz.",
    districts: ["Osmangazi", "Nilüfer", "Yıldırım", "İnegöl", "Gemlik", "Mudanya"],
  },
  kocaeli: {
    shortDescription:
      "Kocaeli'de özellikle fabrika, depo ve sanayi tesisleri için profesyonel güvenlik sistemi çözümleri sunuyoruz.",
    districts: ["İzmit", "Gebze", "Darıca", "Körfez", "Gölcük", "Başiskele"],
  },
  antalya: {
    shortDescription:
      "Antalya'da villa, site, otel çevresi ve ticari alanlar için iklim koşullarına uygun güvenlik sistemi kurulumu yapıyoruz.",
    districts: ["Muratpaşa", "Kepez", "Konyaaltı", "Alanya", "Manavgat", "Serik"],
  },
  tekirdag: {
    shortDescription:
      "Tekirdağ'da sanayi bölgeleri, işyerleri ve apartmanlar için profesyonel güvenlik sistemi kurulumu gerçekleştiriyoruz.",
    metadataDistrictCoverage:
      "Çerkezköy'den Şarköy'e kadar Tekirdağ genelinde ilçe bazlı keşif ve kurulum planlaması yapıyoruz.",
    districts: [
      "Çerkezköy",
      "Çorlu",
      "Ergene",
      "Hayrabolu",
      "Kapaklı",
      "Malkara",
      "Marmaraereğlisi",
      "Muratlı",
      "Saray",
      "Süleymanpaşa",
      "Şarköy",
    ],
  },
  sakarya: {
    shortDescription:
      "Sakarya'da ev, işyeri ve site projelerinde anahtar teslim güvenlik sistemi kurulumu sunuyoruz.",
    districts: ["Adapazarı", "Serdivan", "Erenler", "Arifiye", "Sapanca", "Akyazı"],
  },
  balikesir: {
    shortDescription:
      "Balıkesir'de apartman, mağaza, depo ve villa projeleri için keşif dahil güvenlik sistemi kurulumu yapıyoruz.",
    districts: ["Altıeylül", "Karesi", "Bandırma", "Edremit", "Ayvalık", "Burhaniye"],
  },
  adana: {
    shortDescription:
      "Adana'da sıcak hava ve dış ortam şartlarına uygun güvenlik sistemleriyle profesyonel kurulum yapıyoruz.",
    districts: ["Seyhan", "Yüreğir", "Çukurova", "Sarıçam", "Ceyhan", "Kozan"],
  },
  konya: {
    shortDescription:
      "Konya'da işyeri, sanayi tesisi ve konut alanları için ölçeklenebilir güvenlik çözümleri sunuyoruz.",
    districts: ["Selçuklu", "Meram", "Karatay", "Ereğli", "Akşehir", "Beyşehir"],
  },
  gaziantep: {
    shortDescription:
      "Gaziantep'te üretim alanları, depolar ve ticari işletmeler için profesyonel güvenlik altyapıları kuruyoruz.",
    districts: ["Şehitkamil", "Şahinbey", "Nizip", "İslahiye", "Nurdağı", "Araban"],
  },
  kayseri: {
    shortDescription:
      "Kayseri'de fabrika, işyeri ve apartman projelerinde keşif ve montaj dahil güvenlik sistemi kurulumu yapıyoruz.",
    districts: ["Melikgazi", "Kocasinan", "Talas", "Develi", "Yahyalı", "İncesu"],
  },
  eskisehir: {
    shortDescription:
      "Eskişehir'de apartman, site ve ticari alanlar için dengeli maliyetli güvenlik sistemi projeleri sunuyoruz.",
    districts: ["Odunpazarı", "Tepebaşı", "Sivrihisar", "Çifteler", "Alpu", "Mahmudiye"],
  },
  mersin: {
    shortDescription:
      "Mersin'de konut, depo, mağaza ve dış mekanlar için güvenlik sistemleri kurulumu ve devreye alma hizmeti veriyoruz.",
    districts: ["Akdeniz", "Mezitli", "Yenişehir", "Toroslar", "Tarsus", "Erdemli"],
  },
  yalova: {
    shortDescription:
      "Yalova'da konut, site, villa ve küçük işletmeler için profesyonel güvenlik sistemi kurulumu yapıyoruz.",
    districts: ["Merkez", "Çiftlikköy", "Çınarcık", "Altınova", "Armutlu", "Termal"],
  },
  edirne: {
    shortDescription:
      "Edirne'de konut ve ticari projeler için kamera, alarm ve geçiş kontrol sistemleri kurulumu sunuyoruz.",
    metadataDistrictCoverage:
      "Enez'den Uzunköprü'ye kadar Edirne genelinde ilçe bazlı güvenlik sistemi hizmeti veriyoruz.",
    districts: [
      "Enez",
      "Havsa",
      "İpsala",
      "Keşan",
      "Lalapaşa",
      "Meriç",
      "Merkez",
      "Süloğlu",
      "Uzunköprü",
    ],
  },
  kirklareli: {
    shortDescription:
      "Kırklareli'nde işyeri, depo, apartman ve açık alan güvenliği için profesyonel montaj hizmeti sağlıyoruz.",
    metadataDistrictCoverage:
      "Babaeski'den Vize'ye kadar Kırklareli genelinde ilçe bazlı keşif ve montaj desteği sunuyoruz.",
    districts: [
      "Babaeski",
      "Demirköy",
      "Kofçaz",
      "Lüleburgaz",
      "Merkez",
      "Pehlivanköy",
      "Pınarhisar",
      "Vize",
    ],
  },
};
