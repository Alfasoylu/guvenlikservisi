export interface SeoCityContent {
  intro: string;
  districtsNote: string;
  metadataDistrictCoverage: string;
  districts: string[];
}

export const cityContent: Record<string, SeoCityContent> = {
  istanbul: {
    intro:
      "İstanbul'un yoğun nüfus yapısı ve ticari çeşitliliği, apartmandan fabrikaya geniş bir güvenlik sistemi ihtiyacı doğurur. Avrupa ve Anadolu yakasında yerinde keşif, profesyonel montaj ve uzaktan izleme odaklı kamera, alarm ve geçiş kontrol kurulumu yapıyoruz.",
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
      "Başkent Ankara'nın planlı şehir yapısı, kamu kurumları ve organize sanayi bölgeleri güvenlik sistemi talebini hem çeşitlendirir hem de artırır. Konutlardan ticari tesislere, keşif ve montaj dahil uçtan uca güvenlik sistemi kurulumu sunuyoruz.",
    districtsNote:
      "Ankara merkez ve çevre ilçelerde güvenlik sistemleri için planlı saha hizmeti veriyoruz.",
    metadataDistrictCoverage:
      "Çankaya, Keçiören, Yenimahalle ve çevre ilçelerde keşif ve kurulum desteği sağlıyoruz.",
    districts: ["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Sincan"],
  },
  izmir: {
    intro:
      "Ege'nin ticaret ve lojistik merkezi olan İzmir'de liman çevresi, sanayi tesisleri ve yaz aylarında artan yazlık nüfusu güvenlik ihtiyaçlarını ciddi ölçüde farklılaştırır. İç ve dış mekan koşullarına uygun kamera, alarm ve geçiş kontrol kurulumu yapıyoruz.",
    districtsNote:
      "İzmir'de konut, işyeri ve site projelerinde ihtiyaç analizi ile sahaya çıkıyoruz.",
    metadataDistrictCoverage:
      "Konak, Karşıyaka, Bornova, Buca ve çevre ilçelerde kurulum desteği veriyoruz.",
    districts: ["Konak", "Karşıyaka", "Bornova", "Buca", "Bayraklı", "Çiğli"],
  },
  bursa: {
    intro:
      "Otomotiv ve tekstil başta olmak üzere güçlü sanayi altyapısına sahip Bursa'da fabrika, depo ve organize sanayi bölgelerinde yoğun güvenlik sistemi talebi oluşur. Sanayi tesislerinden apartman projelerine anahtar teslim kurulum hizmeti veriyoruz.",
    districtsNote:
      "Bursa'nın ticari ve konut yoğunluğu yüksek ilçelerinde hızlı keşif planlaması yapıyoruz.",
    metadataDistrictCoverage:
      "Osmangazi, Nilüfer, Yıldırım ve çevre ilçelerde kurulum desteği sunuyoruz.",
    districts: ["Osmangazi", "Nilüfer", "Yıldırım", "İnegöl", "Gemlik", "Mudanya"],
  },
  kocaeli: {
    intro:
      "İstanbul–Ankara sanayi koridorunun merkezinde yer alan Kocaeli, petrokimya, otomotiv ve lojistik tesisleriyle yüksek güvenlik talebi üretir. Sanayi sahalarından konut projelerine profesyonel güvenlik sistemi kurulumu ve teknik destek sağlıyoruz.",
    districtsNote:
      "Kocaeli'de sanayi ve lojistik yoğunluğu olan bölgeler için saha tecrübeli ekiplerle çalışıyoruz.",
    metadataDistrictCoverage:
      "İzmit, Gebze, Darıca, Körfez ve çevre ilçelerde keşif ve montaj desteği veriyoruz.",
    districts: ["İzmit", "Gebze", "Darıca", "Körfez", "Gölcük", "Başiskele"],
  },
  antalya: {
    intro:
      "Türkiye'nin turizm başkenti Antalya'da otel çevresi, villa siteleri ve ticari alanlarda iklim koşullarına dayanıklı güvenlik çözümlerine ihtiyaç duyulur. Dış ortam uyumlu kamera seçimi, profesyonel montaj ve uzaktan izleme desteği sunuyoruz.",
    districtsNote:
      "Antalya'da dış ortam şartlarına uygun ürün seçimi ve montaj planlaması ile ilerliyoruz.",
    metadataDistrictCoverage:
      "Muratpaşa, Kepez, Konyaaltı ve çevre ilçelerde kurulum desteği sunuyoruz.",
    districts: ["Muratpaşa", "Kepez", "Konyaaltı", "Alanya", "Manavgat", "Serik"],
  },
  tekirdag: {
    intro:
      "Çerkezköy ve Çorlu başta olmak üzere Trakya sanayi koridorunun merkezinde yer alan Tekirdağ'da üretim tesisleri ve lojistik depoları yoğun güvenlik sistemi talebi oluşturur. Sanayi alanları, işyerleri ve apartmanlar için profesyonel kurulum hizmeti veriyoruz.",
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
      "Otomotiv, makine ve savunma sanayii yatırımlarıyla büyüyen Sakarya'da hem sanayi tesislerinde hem de gelişen konut alanlarında güvenlik sistemi ihtiyacı artmaktadır. Ev, işyeri ve site projelerinde anahtar teslim kurulum ve devreye alma desteği sunuyoruz.",
    districtsNote:
      "Sakarya'da konut ve ticari alanlar için hızlı keşif ve temiz montaj odaklı çalışıyoruz.",
    metadataDistrictCoverage:
      "Adapazarı, Serdivan, Erenler ve çevre ilçelerde keşif ve montaj desteği sağlıyoruz.",
    districts: ["Adapazarı", "Serdivan", "Erenler", "Arifiye", "Sapanca", "Akyazı"],
  },
  balikesir: {
    intro:
      "Tarım ve sanayi potansiyelinin yanı sıra Edremit Körfezi ve Ayvalık gibi turistik bölgeleriyle çeşitli bir yapıya sahip Balıkesir'de güvenlik ihtiyaçları mevsimsel ve yapısal olarak farklılaşır. Apartman, mağaza, depo ve villa projeleri için keşif dahil kurulum yapıyoruz.",
    districtsNote:
      "Balıkesir'de farklı kullanım alanlarına göre ölçeklenebilir sistem kurguları hazırlıyoruz.",
    metadataDistrictCoverage:
      "Altıeylül, Karesi, Bandırma ve çevre ilçelerde kurulum desteği veriyoruz.",
    districts: ["Altıeylül", "Karesi", "Bandırma", "Edremit", "Ayvalık", "Burhaniye"],
  },
  adana: {
    intro:
      "Çukurova bölgesinin ekonomik merkezi olan Adana'da yüksek sıcaklık ve açık alan koşulları güvenlik sistemi ürün seçimini doğrudan etkiler. Dış ortam dayanımı yüksek kamera ve alarm sistemleriyle profesyonel montaj hizmeti sağlıyoruz.",
    districtsNote:
      "Adana'da dış ortam dayanımı ve kayıt sürekliliği gerektiren projelerde doğru ürün seçimiyle ilerliyoruz.",
    metadataDistrictCoverage:
      "Seyhan, Yüreğir, Çukurova ve çevre ilçelerde keşif ve montaj desteği veriyoruz.",
    districts: ["Seyhan", "Yüreğir", "Çukurova", "Sarıçam", "Ceyhan", "Kozan"],
  },
  konya: {
    intro:
      "Türkiye'nin yüz ölçümü en büyük şehri olan Konya'da tarım işleme tesisleri, organize sanayi bölgeleri ve geniş konut alanları çeşitli güvenlik sistemi ihtiyacı doğurur. İşyeri, sanayi tesisi ve konut projeleri için ölçeklenebilir kurulum çözümleri sunuyoruz.",
    districtsNote:
      "Konya'da geniş metrekareli ve çok noktalı projelerde planlı kurulum süreçleri yönetiyoruz.",
    metadataDistrictCoverage:
      "Selçuklu, Meram, Karatay ve çevre ilçelerde güvenlik sistemi kurulumu yapıyoruz.",
    districts: ["Selçuklu", "Meram", "Karatay", "Ereğli", "Akşehir", "Beyşehir"],
  },
  gaziantep: {
    intro:
      "Tekstil, gıda işleme ve ihracat odaklı sanayi yapısıyla Güneydoğu'nun ekonomi merkezi olan Gaziantep'te üretim alanları ve ticari işletmelerde güvenlik yatırımı öncelikli konumdadır. Organize sanayi bölgeleri dahil profesyonel güvenlik altyapısı kuruyoruz.",
    districtsNote:
      "Gaziantep'te ticari ve sanayi odaklı projelerde doğru kapsama planı ile çalışıyoruz.",
    metadataDistrictCoverage:
      "Şehitkamil, Şahinbey, Nizip ve çevre ilçelerde keşif ve kurulum desteği sağlıyoruz.",
    districts: ["Şehitkamil", "Şahinbey", "Nizip", "İslahiye", "Nurdağı", "Araban"],
  },
  kayseri: {
    intro:
      "Girişimci kimliği ve mobilya, metal ile makine sanayiinin güçlü olduğu Kayseri'de fabrika, işyeri ve konut projelerinde güvenlik sistemi talebi sürekli artmaktadır. Keşif ve montaj dahil anahtar teslim güvenlik sistemi kurulumu yapıyoruz.",
    districtsNote:
      "Kayseri'de ticari ve konut projeleri için saha keşfi sonrası net sistem planı oluşturuyoruz.",
    metadataDistrictCoverage:
      "Melikgazi, Kocasinan, Talas ve çevre ilçelerde kurulum desteği veriyoruz.",
    districts: ["Melikgazi", "Kocasinan", "Talas", "Develi", "Yahyalı", "İncesu"],
  },
  eskisehir: {
    intro:
      "Üniversite nüfusu ve planlı kentleşme yapısıyla öne çıkan Eskişehir'de konut siteleri, ticari alanlar ve kampüs çevrelerinde güvenlik sistemi ihtiyacı belirgindir. Apartman, site ve ticari projeler için dengeli maliyetli kurulum çözümleri sunuyoruz.",
    districtsNote:
      "Eskişehir'de konut ve ticari alanlar için ihtiyaca göre ölçeklenen kurulum planları hazırlıyoruz.",
    metadataDistrictCoverage:
      "Odunpazarı, Tepebaşı ve çevre ilçelerde keşif ve montaj desteği sağlıyoruz.",
    districts: ["Odunpazarı", "Tepebaşı", "Sivrihisar", "Çifteler", "Alpu", "Mahmudiye"],
  },
  mersin: {
    intro:
      "Türkiye'nin en büyük limanlarından birine ev sahipliği yapan Mersin'de serbest bölge, lojistik merkezleri ve sahil konutları birbirinden farklı güvenlik ihtiyaçları oluşturur. Konut, depo, mağaza ve dış mekanlar için kurulum ve devreye alma hizmeti veriyoruz.",
    districtsNote:
      "Mersin'de hem konut hem de ticari alanlar için dış ortam uyumlu sistem senaryoları kuruyoruz.",
    metadataDistrictCoverage:
      "Akdeniz, Mezitli, Yenişehir ve çevre ilçelerde kurulum desteği veriyoruz.",
    districts: ["Akdeniz", "Mezitli", "Yenişehir", "Toroslar", "Tarsus", "Erdemli"],
  },
  yalova: {
    intro:
      "İstanbul ve Bursa'ya yakın konumuyla yazlık, villa ve site projelerinin yoğun olduğu Yalova'da özellikle sezonluk mülklerde uzaktan izleme destekli güvenlik sistemlerine talep artmaktadır. Konut, site ve küçük işletmeler için profesyonel kurulum yapıyoruz.",
    districtsNote:
      "Yalova'da yazlık, villa ve küçük işletmeler için kullanım kolaylığı yüksek sistemler planlıyoruz.",
    metadataDistrictCoverage:
      "Merkez, Çiftlikköy, Çınarcık ve çevre ilçelerde keşif ve kurulum desteği sunuyoruz.",
    districts: ["Merkez", "Çiftlikköy", "Çınarcık", "Altınova", "Armutlu", "Termal"],
  },
  edirne: {
    intro:
      "Bulgaristan ve Yunanistan sınırında yer alan Edirne'de sınır ticareti, tarımsal tesisler ve şehir merkezindeki ticari alanlar güvenlik sistemi ihtiyacını şekillendirir. Kamera, alarm ve geçiş kontrol kurulumu ile konut ve ticari projeler için hizmet sunuyoruz.",
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
      "Trakya'nın sanayi ve tarım potansiyeli yüksek illerinden Kırklareli'nde Lüleburgaz sanayi bölgesi, çiftlik alanları ve şehir merkezindeki ticari yapılar güvenlik yatırımı gerektiren başlıca alanlardır. İşyeri, depo ve apartman projeleri için profesyonel montaj hizmeti sağlıyoruz.",
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
