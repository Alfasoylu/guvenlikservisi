export interface SeoCityContent {
  intro: string;
  districtsNote: string;
  metadataDistrictCoverage: string;
  districts: string[];
}

export const cityContent: Record<string, SeoCityContent> = {
  istanbul: {
    intro:
      "İstanbul içinde kamera sistemi kurulumu, alarm sistemi ve diğer güvenlik çözümleri için profesyonel montaj hizmeti sunuyoruz.",
    districtsNote:
      "İstanbul genelinde tüm ilçelerde keşif, montaj ve devreye alma desteği veriyoruz.",
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
    intro:
      "Ankara içinde ev, işyeri ve ticari alanlar için keşif, ürün seçimi, montaj ve devreye alma dahil güvenlik sistemi hizmeti sunuyoruz.",
    districtsNote:
      "Ankara merkez ve çevre ilçelerde güvenlik sistemleri için planlı saha hizmeti veriyoruz.",
    metadataDistrictCoverage:
      "Çankaya, Keçiören, Yenimahalle ve çevre ilçelerde keşif ve kurulum desteği sağlıyoruz.",
    districts: ["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Sincan"],
  },
  izmir: {
    intro:
      "İzmir içinde iç ve dış mekanlara uygun kamera, alarm ve geçiş kontrol sistemleri için profesyonel kurulum desteği sunuyoruz.",
    districtsNote:
      "İzmir'de konut, işyeri ve site projelerinde ihtiyaç analizi ile sahaya çıkıyoruz.",
    metadataDistrictCoverage:
      "Konak, Karşıyaka, Bornova, Buca ve çevre ilçelerde kurulum desteği veriyoruz.",
    districts: ["Konak", "Karşıyaka", "Bornova", "Buca", "Bayraklı", "Çiğli"],
  },
  bursa: {
    intro:
      "Bursa içinde fabrika, depo, mağaza ve apartman projelerine uygun anahtar teslim güvenlik sistemi kurulumu yapıyoruz.",
    districtsNote:
      "Bursa'nın ticari ve konut yoğunluğu yüksek ilçelerinde hızlı keşif planlaması yapıyoruz.",
    metadataDistrictCoverage:
      "Osmangazi, Nilüfer, Yıldırım ve çevre ilçelerde kurulum desteği sunuyoruz.",
    districts: ["Osmangazi", "Nilüfer", "Yıldırım", "İnegöl", "Gemlik", "Mudanya"],
  },
  kocaeli: {
    intro:
      "Kocaeli içinde özellikle fabrika, depo ve sanayi tesisleri için profesyonel güvenlik sistemleri kurulumu yapıyoruz.",
    districtsNote:
      "Kocaeli'de sanayi ve lojistik yoğunluğu olan bölgeler için saha tecrübeli ekiplerle çalışıyoruz.",
    metadataDistrictCoverage:
      "İzmit, Gebze, Darıca, Körfez ve çevre ilçelerde keşif ve montaj desteği veriyoruz.",
    districts: ["İzmit", "Gebze", "Darıca", "Körfez", "Gölcük", "Başiskele"],
  },
  antalya: {
    intro:
      "Antalya içinde villa, site, otel çevresi ve ticari alanlar için iklim koşullarına uygun güvenlik sistemi kurulumu yapıyoruz.",
    districtsNote:
      "Antalya'da dış ortam şartlarına uygun ürün seçimi ve montaj planlaması ile ilerliyoruz.",
    metadataDistrictCoverage:
      "Muratpaşa, Kepez, Konyaaltı ve çevre ilçelerde kurulum desteği sunuyoruz.",
    districts: ["Muratpaşa", "Kepez", "Konyaaltı", "Alanya", "Manavgat", "Serik"],
  },
  tekirdag: {
    intro:
      "Tekirdağ içinde sanayi bölgeleri, işyerleri ve apartmanlar için profesyonel güvenlik sistemi kurulumu gerçekleştiriyoruz.",
    districtsNote:
      "Tekirdağ genelinde tüm ilçelerde keşif, montaj ve kurulum planlaması yapıyoruz.",
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
    intro:
      "Sakarya içinde ev, işyeri ve site projelerinde anahtar teslim güvenlik sistemi kurulumu sunuyoruz.",
    districtsNote:
      "Sakarya'da konut ve ticari alanlar için hızlı keşif ve temiz montaj odaklı çalışıyoruz.",
    metadataDistrictCoverage:
      "Adapazarı, Serdivan, Erenler ve çevre ilçelerde keşif ve montaj desteği sağlıyoruz.",
    districts: ["Adapazarı", "Serdivan", "Erenler", "Arifiye", "Sapanca", "Akyazı"],
  },
  balikesir: {
    intro:
      "Balıkesir içinde apartman, mağaza, depo ve villa projeleri için keşif dahil güvenlik sistemi kurulumu yapıyoruz.",
    districtsNote:
      "Balıkesir'de farklı kullanım alanlarına göre ölçeklenebilir sistem kurguları hazırlıyoruz.",
    metadataDistrictCoverage:
      "Altıeylül, Karesi, Bandırma ve çevre ilçelerde kurulum desteği veriyoruz.",
    districts: ["Altıeylül", "Karesi", "Bandırma", "Edremit", "Ayvalık", "Burhaniye"],
  },
  adana: {
    intro:
      "Adana içinde sıcak hava ve dış ortam şartlarına uygun güvenlik sistemleriyle profesyonel kurulum yapıyoruz.",
    districtsNote:
      "Adana'da dış ortam dayanımı ve kayıt sürekliliği gerektiren projelerde doğru ürün seçimiyle ilerliyoruz.",
    metadataDistrictCoverage:
      "Seyhan, Yüreğir, Çukurova ve çevre ilçelerde keşif ve montaj desteği veriyoruz.",
    districts: ["Seyhan", "Yüreğir", "Çukurova", "Sarıçam", "Ceyhan", "Kozan"],
  },
  konya: {
    intro:
      "Konya içinde işyeri, sanayi tesisi ve konut alanları için ölçeklenebilir güvenlik çözümleri sunuyoruz.",
    districtsNote:
      "Konya'da geniş metrekareli ve çok noktalı projelerde planlı kurulum süreçleri yönetiyoruz.",
    metadataDistrictCoverage:
      "Selçuklu, Meram, Karatay ve çevre ilçelerde güvenlik sistemi kurulumu yapıyoruz.",
    districts: ["Selçuklu", "Meram", "Karatay", "Ereğli", "Akşehir", "Beyşehir"],
  },
  gaziantep: {
    intro:
      "Gaziantep içinde üretim alanları, depolar ve ticari işletmeler için profesyonel güvenlik altyapıları kuruyoruz.",
    districtsNote:
      "Gaziantep'te ticari ve sanayi odaklı projelerde doğru kapsama planı ile çalışıyoruz.",
    metadataDistrictCoverage:
      "Şehitkamil, Şahinbey, Nizip ve çevre ilçelerde keşif ve kurulum desteği sağlıyoruz.",
    districts: ["Şehitkamil", "Şahinbey", "Nizip", "İslahiye", "Nurdağı", "Araban"],
  },
  kayseri: {
    intro:
      "Kayseri içinde fabrika, işyeri ve apartman projelerinde keşif ve montaj dahil güvenlik sistemi kurulumu yapıyoruz.",
    districtsNote:
      "Kayseri'de ticari ve konut projeleri için saha keşfi sonrası net sistem planı oluşturuyoruz.",
    metadataDistrictCoverage:
      "Melikgazi, Kocasinan, Talas ve çevre ilçelerde kurulum desteği veriyoruz.",
    districts: ["Melikgazi", "Kocasinan", "Talas", "Develi", "Yahyalı", "İncesu"],
  },
  eskisehir: {
    intro:
      "Eskişehir içinde apartman, site ve ticari alanlar için dengeli maliyetli güvenlik sistemi projeleri sunuyoruz.",
    districtsNote:
      "Eskişehir'de konut ve ticari alanlar için ihtiyaca göre ölçeklenen kurulum planları hazırlıyoruz.",
    metadataDistrictCoverage:
      "Odunpazarı, Tepebaşı ve çevre ilçelerde keşif ve montaj desteği sağlıyoruz.",
    districts: ["Odunpazarı", "Tepebaşı", "Sivrihisar", "Çifteler", "Alpu", "Mahmudiye"],
  },
  mersin: {
    intro:
      "Mersin içinde konut, depo, mağaza ve dış mekanlar için güvenlik sistemleri kurulumu ve devreye alma hizmeti veriyoruz.",
    districtsNote:
      "Mersin'de hem konut hem de ticari alanlar için dış ortam uyumlu sistem senaryoları kuruyoruz.",
    metadataDistrictCoverage:
      "Akdeniz, Mezitli, Yenişehir ve çevre ilçelerde kurulum desteği veriyoruz.",
    districts: ["Akdeniz", "Mezitli", "Yenişehir", "Toroslar", "Tarsus", "Erdemli"],
  },
  yalova: {
    intro:
      "Yalova içinde konut, site, villa ve küçük işletmeler için profesyonel güvenlik sistemi kurulumu yapıyoruz.",
    districtsNote:
      "Yalova'da yazlık, villa ve küçük işletmeler için kullanım kolaylığı yüksek sistemler planlıyoruz.",
    metadataDistrictCoverage:
      "Merkez, Çiftlikköy, Çınarcık ve çevre ilçelerde keşif ve kurulum desteği sunuyoruz.",
    districts: ["Merkez", "Çiftlikköy", "Çınarcık", "Altınova", "Armutlu", "Termal"],
  },
  edirne: {
    intro:
      "Edirne içinde konut ve ticari projeler için kamera, alarm ve geçiş kontrol sistemleri kurulumu sunuyoruz.",
    districtsNote:
      "Edirne genelinde tüm ilçelerde keşif, montaj ve devreye alma desteği veriyoruz.",
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
    intro:
      "Kırklareli içinde işyeri, depo, apartman ve açık alan güvenliği için profesyonel montaj hizmeti sağlıyoruz.",
    districtsNote:
      "Kırklareli genelinde tüm ilçelerde keşif, ürün seçimi ve montaj desteği sunuyoruz.",
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
