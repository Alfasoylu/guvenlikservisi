# Page Value Map

## 1. Kısa Yönetici Özeti

Repo içindeki mevcut yapı iki ana değer katmanı oluşturuyor: doğrudan dönüşüm odaklı sayfalar ve programmatic SEO destek ağı. En yüksek doğrudan lead değeri, form veya net teklif akışı taşıyan `/teklif/*`, `/iletisim` ve `/bakim-servis-uzaktan-izleme` sayfalarında. En yüksek ölçeklenebilir SEO + ticari değer ise `/<city>/<service>` ağında; bu grup hem gerçek hizmet intent'i taşıyor hem de 18 şehir x 8 servis ile büyüyebiliyor.

Blog katmanı şu an ağırlıklı olarak trafik ve otorite üretir; doğrudan para sayfası değildir. Recurring gelir açısından açık ara en güçlü grup bakım / servis / uzaktan izleme sayfalarıdır. Risk tarafında en önemli başlıklar, `next.config.ts` ile `/<city>-guvenlik-sistemi-kurulumu` -> `/<city>` redirect'i nedeniyle riskli hale gelen `/istanbul-guvenlik-sistemi-kurulumu`, ayrıca `kartli-gecis-ve-turnike-sistemi` ile veri katmanındaki `kartli-gecis-sistemi-kurulumu` slug ayrışması ve iki ayrı İstanbul IP kamera teklif route'udur.

## 2. Route Grup Bazlı Sınıflandırma

### Static Pages

| Route | Category | Commercial Intent | Lead Potential | Recurring Revenue | SEO Support | Gerekçe |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| `/` | Lead Support Page | 4 | 4 | 3 | 5 | Hero CTA, servis yönlendirmeleri ve şehir ağına giriş kapısı; kendi başına form yok ama güçlü dağıtım sayfası. |
| `/kamera-sistemi-kurulumu` | Money Page | 5 | 4 | 4 | 4 | Doğrudan kurulum intent'i, CTASection ve fiyat/kurulum dili güçlü. |
| `/alarm-sistemi-kurulumu` | Money Page | 5 | 4 | 4 | 4 | Doğrudan alarm kurulum intent'i ve teklif CTA'sı güçlü. |
| `/yangin-alarm-sistemi-kurulumu` | Money Page | 5 | 4 | 3 | 4 | Yasal uyum + kurulum ihtiyacı taşıyor; yüksek ticari niyet. |
| `/kartli-gecis-ve-turnike-sistemi` | Money Page | 4 | 3 | 4 | 3 | B2B intent güçlü, fakat slug/veri modeli uyumsuzluğu nedeniyle risk taşıyor. |
| `/apartman-site-guvenlik-sistemi` | Money Page | 4 | 4 | 4 | 4 | Site yönetimi ve toplu proje dili var; proje başı ticket yüksek. |
| `/isyeri-guvenlik-sistemi` | Money Page | 5 | 4 | 4 | 4 | İşletme odaklı teklif CTA'sı var; satışa yakın. |
| `/fabrika-depo-guvenlik-sistemi` | Money Page | 5 | 4 | 5 | 4 | Büyük proje ve bakım potansiyeli yüksek; B2B ticket değeri kuvvetli. |
| `/bakim-servis-uzaktan-izleme` | Money Page | 5 | 5 | 5 | 4 | `MaintenanceQuoteForm`, telefon CTA ve aylık sözleşme dili nedeniyle en güçlü recurring gelir sayfası. |
| `/paketler-ve-fiyatlandirma` | Lead Support Page | 4 | 3 | 3 | 4 | Fiyat araştırma intent'i güçlü; karar destek sayfası. |
| `/iletisim` | Money Page | 5 | 5 | 4 | 3 | `QuoteForm`, telefon, WhatsApp ve e-posta ile en direkt lead capture sayfası. |
| `/hakkimizda` | SEO Support Page | 2 | 2 | 2 | 3 | Güven ve marka desteği üretir; doğrudan satış sayfası değildir. |
| `/istanbul-guvenlik-sistemi-kurulumu` | Risky / Duplicate Page | 4 | 3 | 3 | 2 | İçeriği ticari olsa da `next.config.ts` içindeki legacy city redirect mantığı nedeniyle `/istanbul` ile çakışma riski taşır. |

### `/teklif/*`

| Route | Category | Commercial Intent | Lead Potential | Recurring Revenue | SEO Support | Gerekçe |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| `/teklif/alarm` | Money Page | 5 | 5 | 4 | 3 | `AlarmQuoteForm`, güçlü ürün/marka teklifi ve aynı gün montaj dili var. |
| `/teklif/istanbul-ip-kamera-montaji` | Money Page | 5 | 5 | 4 | 3 | Özel form, telefon/WhatsApp, fiyat ve ilçe kapsamı ile repo içindeki en güçlü satış landing'lerinden biri. |
| `/teklif/kamera` | Money Page | 5 | 4 | 4 | 3 | Landing template ile yüksek teklif intent'i taşıyor; özel form yerine CTASection kullanıyor. |
| `/teklif/yangin` | Money Page | 5 | 4 | 3 | 3 | Yangın sistemi teklif intent'i yüksek; lead toplama odaklı landing. |
| `/teklif/isyeri` | Money Page | 5 | 4 | 4 | 3 | İşletme ihtiyacına yakın, teklif odaklı landing. |
| `/teklif/apartman` | Money Page | 4 | 4 | 4 | 3 | Site/apartman projeleri için yüksek ticket var; karar verici kitlesi daha dar. |
| `/teklif/kamera/istanbul-ip-kamera-montaji` | Risky / Duplicate Page | 5 | 4 | 4 | 2 | Ticari intent güçlü ama `/teklif/istanbul-ip-kamera-montaji` ile niyet ve konu yakınlığı nedeniyle duplication riski yüksek. |

Not: Template tabanlı `/teklif/*` sayfaları, `LandingPageTemplate` üzerinden `CTASection` ile lead topluyor. Özel form kullanan sayfalar, aynı konuya ait template sayfalardan daha yüksek lead potansiyeline sahip.

### `/[city]`

| Route Pattern | Category | Commercial Intent | Lead Potential | Recurring Revenue | SEO Support | Gerekçe |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| `/<city>` | Lead Support Page | 4 | 3 | 4 | 5 | Şehir bazlı ticari aramayı yakalıyor, telefon + teklif CTA'sı var, ancak form yok; asıl görevi şehir içi servis sayfalarına dağıtım yapmak. |

Kapsam: `cities.ts` içindeki 18 şehrin tamamı bu sınıfa girer. Bu grup doğrudan kapanış sayfasından çok, city/service para sayfalarına bot ve kullanıcı akışı taşıyan hub katmanıdır.

### `/[city]/[service]`

Kapsam: `cities.ts` içindeki 18 şehir x `services.ts` içindeki 8 servis = 144 URL. Tüm bu sayfalar aynı şablonu kullanır; skorlar servis intent'ine göre ayrışır.

| Route Pattern | Category | Commercial Intent | Lead Potential | Recurring Revenue | SEO Support | Gerekçe |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| `/<city>/kamera-sistemi-kurulumu` | Money Page | 5 | 4 | 4 | 5 | Doğrudan kurulum intent'i taşır; şehir + servis kombinasyonu çok güçlü alt funnel sorgudur. |
| `/<city>/alarm-sistemi-kurulumu` | Money Page | 5 | 4 | 4 | 5 | Ticari intent net; telefon ve teklif CTA'sı ile satışa yakın. |
| `/<city>/yangin-alarm-sistemi-kurulumu` | Money Page | 5 | 4 | 3 | 5 | Yasal zorunluluk ve kurulum ihtiyacı nedeniyle yüksek değerli. |
| `/<city>/kartli-gecis-sistemi-kurulumu` | Money Page | 4 | 3 | 4 | 5 | B2B intent iyi, fakat mevcut statik route ismiyle farklılık içeriyor. |
| `/<city>/apartman-site-guvenlik-sistemi` | Money Page | 4 | 4 | 4 | 5 | Proje bazlı site yönetimi sorgularını toplar; yüksek SEO ölçeği var. |
| `/<city>/isyeri-guvenlik-sistemi` | Money Page | 5 | 4 | 4 | 5 | İşletme intent'i ve teklif dilinin birleşimi nedeniyle çok değerli. |
| `/<city>/fabrika-depo-guvenlik-sistemi` | Money Page | 5 | 4 | 5 | 5 | Büyük B2B ticket ve bakım sözleşmesine dönüşme ihtimali yüksek. |
| `/<city>/bakim-servis-uzaktan-izleme` | Money Page | 5 | 5 | 5 | 5 | Programmatic ağ içindeki en yüksek recurring gelir potansiyelli URL seti. |

Not: `/<city>/<service>` sayfaları özel form yerine güçlü CTA, telefon aksiyonu, city hub geri linki, related service ve related city blokları kullanıyor. Bu nedenle özel teklif landing'leri kadar sıcak olmasa da ölçeklenebilir para sayfası olarak çok daha değerliler.

### `/blog`

| Route | Category | Commercial Intent | Lead Potential | Recurring Revenue | SEO Support | Gerekçe |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| `/blog` | SEO Support Page | 1 | 1 | 1 | 5 | İçerik merkezi; ana işlevi bilgi amaçlı aramaları yakalamak ve iç link desteği sağlamak. |

### `/blog/[slug]`

| Route | Category | Commercial Intent | Lead Potential | Recurring Revenue | SEO Support | Gerekçe |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| `/blog/guvenlik-kamerasi-montaj-ucreti-2026` | Authority Content | 3 | 2 | 2 | 5 | Fiyat araştırması intent'i taşıyor; para sayfalarına geçiş için en güçlü blog yazılarından biri. |
| `/blog/isyerine-kac-kamera-lazim` | Authority Content | 2 | 1 | 2 | 4 | Bilgilendirici ve üst funnel; keşif ihtiyacını tetikleyebilir ama doğrudan satış sayfası değil. |
| `/blog/alarm-sistemi-fiyatlari-2026` | Authority Content | 3 | 2 | 2 | 5 | Fiyat intent'i sayesinde lead desteği var ama kapanış sayfası değil. |
| `/blog/yangin-alarm-sistemi-zorunlu-mu` | Authority Content | 3 | 2 | 2 | 5 | Regülasyon / zorunluluk intent'i güçlü; yangın teklif sayfalarına destek verir. |

Blog için net sonuç: Mevcut içerik seti trafik ve otorite üretir. Kendi başına para getiren katman değildir; geliri ancak servis ve teklif sayfalarına yönlendirme gücü kadar destekler.

## 3. En Değerli Sayfa Grupları

1. `/<city>/<service>` ağı, özellikle kamera, alarm, yangın ve bakım varyasyonları.
2. Özel form taşıyan `/teklif/istanbul-ip-kamera-montaji` ve `/teklif/alarm`.
3. `/bakim-servis-uzaktan-izleme` ve bunun programmatic şehir varyasyonları.
4. `/iletisim`.
5. Yüksek intent'li statik servis sayfaları: `/kamera-sistemi-kurulumu`, `/alarm-sistemi-kurulumu`, `/yangin-alarm-sistemi-kurulumu`, `/fabrika-depo-guvenlik-sistemi`, `/isyeri-guvenlik-sistemi`.

## 4. En Zayıf Sayfa Grupları

1. `/blog` ve çoğu `/blog/[slug]` doğrudan lead üretmez; üst funnel ve destek katmanıdır.
2. `/hakkimizda` güven üretir ama ticari kapanış rolü zayıftır.
3. `/[city]` sayfaları tek başına kapanış sayfası değil; asıl gücü dağıtım ve lokal relevance üretmesidir.
4. Template tabanlı bazı `/teklif/*` landing'leri özel form içeren sayfalara göre daha zayıf kapanış yapar.

## 5. Riskli / Duplicate Olabilecek Sayfalar

| Route | Risk | Not |
| --- | --- | --- |
| `/istanbul-guvenlik-sistemi-kurulumu` | Redirect / duplicate riski | `next.config.ts` içindeki `/${city.slug}-guvenlik-sistemi-kurulumu` -> `/${city.slug}` redirect mantığı bu URL ile çakışıyor. |
| `/teklif/kamera/istanbul-ip-kamera-montaji` | Yakın niyet duplication riski | `/teklif/istanbul-ip-kamera-montaji` ile aynı konuya çok yakın. |
| `/kartli-gecis-ve-turnike-sistemi` | Slug / intent uyumsuzluğu | Statik route adı ile `services.ts` içindeki `kartli-gecis-sistemi-kurulumu` farklı. İç link ve ölçekleme tarafında parçalanma riski yaratır. |
| `/<city>/kartli-gecis-sistemi-kurulumu` | Eşleşme riski | Programmatic slug ile statik sayfa adı farklı olduğu için otorite bölünmesi olabilir. |
| Template tabanlı `/teklif/*` grubu | İnce farklarla yakınlaşma riski | Aynı CTASection akışı ve benzer teklif dili nedeniyle dikkatli çoğaltılmazsa birbirine yaklaşabilir. |

## 6. Önce Çoğaltılması Gereken Sayfalar

1. `/<city>/bakim-servis-uzaktan-izleme`
2. `/<city>/kamera-sistemi-kurulumu`
3. `/<city>/alarm-sistemi-kurulumu`
4. `/<city>/yangin-alarm-sistemi-kurulumu`
5. `/<city>/fabrika-depo-guvenlik-sistemi`
6. `/<city>/isyeri-guvenlik-sistemi`
7. Özel form mantığı kanıtlanmış `/teklif/*` varyasyonları

Neden: Bu sıra hem yüksek intent'i hem de daha yüksek ticket veya recurring potansiyelini birleştiriyor. Özellikle bakım/servis ve fabrika/depo grubu tek seferlik kurulumdan çok daha kârlı müşteri segmenti üretebilir.

## 7. Sonra Çoğaltılması Gereken Sayfalar

1. `/<city>/apartman-site-guvenlik-sistemi`
2. `/<city>/kartli-gecis-sistemi-kurulumu`
3. Yeni fiyat / zorunluluk / karşılaştırma odaklı blog yazıları
4. Daha fazla özel teklif landing'i, ancak yalnızca net farklı teklif açısı varsa
5. `/paketler-ve-fiyatlandirma` benzeri karar destek içerikleri

## 8. Kesilmesi / Birleştirilmesi Gereken Sayfalar

1. `/istanbul-guvenlik-sistemi-kurulumu` ile `/istanbul` ilişkisi netleştirilmeli; mevcut haliyle iki farklı hedefe çalışıyor.
2. `/teklif/kamera/istanbul-ip-kamera-montaji` ile `/teklif/istanbul-ip-kamera-montaji` tek güçlü landing altında birleştirilmeye aday.
3. `kartli-gecis-ve-turnike-sistemi` ile `kartli-gecis-sistemi-kurulumu` isimlendirmesi tek çizgiye çekilmeli.
4. Çok yakın varyasyonlu yeni `/teklif/*` sayfalar, ayrı teklif açısı veya ayrı form mantığı yoksa çoğaltılmamalı.

## 9. Kısa Audit Özeti

### En İyi 10 Para Sayfası

1. `/bakim-servis-uzaktan-izleme`
2. `/iletisim`
3. `/teklif/istanbul-ip-kamera-montaji`
4. `/teklif/alarm`
5. `/<city>/bakim-servis-uzaktan-izleme`
6. `/<city>/kamera-sistemi-kurulumu`
7. `/<city>/alarm-sistemi-kurulumu`
8. `/<city>/yangin-alarm-sistemi-kurulumu`
9. `/fabrika-depo-guvenlik-sistemi`
10. `/isyeri-guvenlik-sistemi`

### En İyi 10 SEO Destek Sayfası

1. `/`
2. `/<city>`
3. `/<city>/kamera-sistemi-kurulumu`
4. `/<city>/alarm-sistemi-kurulumu`
5. `/<city>/yangin-alarm-sistemi-kurulumu`
6. `/<city>/fabrika-depo-guvenlik-sistemi`
7. `/blog`
8. `/blog/guvenlik-kamerasi-montaj-ucreti-2026`
9. `/blog/alarm-sistemi-fiyatlari-2026`
10. `/blog/yangin-alarm-sistemi-zorunlu-mu`

### En Riskli 5 Sayfa

1. `/istanbul-guvenlik-sistemi-kurulumu`
2. `/teklif/kamera/istanbul-ip-kamera-montaji`
3. `/kartli-gecis-ve-turnike-sistemi`
4. `/<city>/kartli-gecis-sistemi-kurulumu`
5. Formsuz template `/teklif/*` varyasyonları

### En Yüksek Recurring Gelir Potansiyeli Olan Sayfalar

1. `/bakim-servis-uzaktan-izleme`
2. `/<city>/bakim-servis-uzaktan-izleme`
3. `/fabrika-depo-guvenlik-sistemi`
4. `/<city>/fabrika-depo-guvenlik-sistemi`
5. `/apartman-site-guvenlik-sistemi`
6. `/<city>/apartman-site-guvenlik-sistemi`
7. `/teklif/kamera`
8. `/<city>/kamera-sistemi-kurulumu`

## Sonuç

Para getirme önceliği açısından repo içindeki en güçlü büyüme motoru `/<city>/<service>` ağıdır; bunun içinde bakım/servis, kamera, alarm, yangın ve fabrika/depo kümeleri öne çıkar. `/teklif/*` sayfaları daha sıcak lead toplar ama sınırlı sayıda route'tur. Blog katmanı doğrudan gelir üretmez; esas görevi discovery ve trust yaratmaktır. Sonraki genişleme planı, önce yüksek intent + recurring potansiyelli city/service para sayfalarını, sonra özel teklif landing'lerini ve en son blog destek katmanını büyütmek olmalıdır.
