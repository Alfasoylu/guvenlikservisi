# Google Sheets Lead Kolon Standardı

> BL-02 kapsamında sabitlenen kolon yapısı.
> Tüm lead’ler bu şemaya göre Google Sheets’e yazılır.

-----

## Kolon Sırası (A → V)

|#|Kolon Adı      |Açıklama                                                         |Dolduran |
|-|---------------|-----------------------------------------------------------------|---------|
|A|`timestamp`    |Lead geliş zamanı (Europe/Istanbul)                              |Otomatik |
|B|`name`         |Müşteri adı soyadı                                               |Form     |
|C|`phone`        |Normalize telefon (05XX XXX XX XX)                               |Form     |
|D|`email`        |E-posta (opsiyonel)                                              |Form     |
|E|`city`         |İl adı                                                           |Form     |
|F|`district`     |İlçe adı                                                         |Form     |
|G|`service_type` |Hizmet türü kodu                                                 |Form     |
|H|`location_type`|Mekan türü kodu                                                  |Form     |
|I|`camera_count` |Tahmini kamera sayısı                                            |Form     |
|J|`message`      |Serbest metin / proje notu                                       |Form     |
|K|`page_url`     |Lead’in geldiği sayfa URL’si                                     |Otomatik |
|L|`form_source`  |Form tanımlayıcı (quote_form / istanbul_ip_kamera / landing_page)|Otomatik |
|M|`utm_source`   |Trafik kaynağı                                                   |URL param|
|N|`utm_medium`   |Trafik aracı                                                     |URL param|
|O|`utm_campaign` |Kampanya adı                                                     |URL param|
|P|`utm_term`     |Anahtar kelime                                                   |URL param|
|Q|`gclid`        |Google Ads click ID                                              |URL param|
|R|`lead_status`  |Yeni / Arandı / Teklif / Kazanıldı / Kaybedildi                  |Manuel   |
|S|`assigned_to`  |Satış sorumlusu                                                  |Manuel   |
|T|`offer_amount` |Verilen teklif tutarı (₺)                                        |Manuel   |
|U|`lost_reason`  |Kayıp nedeni                                                     |Manuel   |
|V|`notes`        |Satış notları                                                    |Manuel   |

-----

## Hizmet Türü Kodları (`service_type`)

|Kod            |Açıklama                       |
|---------------|-------------------------------|
|`kamera`       |Güvenlik Kamerası Kurulumu     |
|`alarm`        |Alarm Sistemi Kurulumu         |
|`yangin`       |Yangın Alarm Sistemi           |
|`kartli-gecis` |Kartlı Geçiş / Turnike Sistemi |
|`apartman-site`|Apartman / Site Güvenlik       |
|`isyeri`       |İşyeri Güvenlik Sistemi        |
|`fabrika-depo` |Fabrika / Depo Güvenlik        |
|`bakim-servis` |Bakım / Servis / Uzaktan İzleme|
|`komple`       |Komple Güvenlik Çözümü         |

Durum Notu: `service_type` artık route slug’ından veya formdan gelen ham değerden normalize edilir. `kamera-sistemi-bakim-sozlesmesi`, `guvenlik-sistemi-teknik-servis`, `kamera-ariza-servisi`, `kartli-gecis-sistemi-kurulumu` gibi slug’lar lead sheet’te doğru hizmet koduna dönüşür; district page formları tek kelimeye düşürülmez.

-----

## Mekan Türü Kodları (`location_type`)

|Kod            |Açıklama               |
|---------------|-----------------------|
|`ev`           |Ev / Konut             |
|`villa`        |Villa / Müstakil Ev    |
|`isyeri`       |İşyeri / Ofis          |
|`magaza`       |Mağaza / Dükkan        |
|`apartman-site`|Apartman / Site        |
|`fabrika-depo` |Fabrika / Depo / Atölye|
|`otopark`      |Otopark / Açık Alan    |
|`diger`        |Diğer                  |

-----

## Lead Durumları (`lead_status`)

|Durum       |Anlamı                                          |
|------------|------------------------------------------------|
|`Yeni`      |Lead geldi, henüz aranmadı                      |
|`Arandı`    |İlk arama yapıldı                               |
|`Teklif`    |Teklif verildi                                  |
|`Kazanıldı` |Satış kapandı                                   |
|`Kaybedildi`|Lead kaybedildi (nedeni `lost_reason`’a yazılır)|

-----

## Form Kaynakları (`form_source`)

|Kaynak              |Açıklama                             |
|--------------------|-------------------------------------|
|`quote_form`        |Genel QuoteForm bileşeni (/api/quote)|
|`istanbul_ip_kamera`|İstanbul IP kamera formu (/api/lead) |
|`landing_page`      |/teklif/* landing sayfası formları   |

Durum Notu: Canlı kod tarafında `form_source` artık daha ayrıştırıcı normalize edilir. `istanbul_kamera_kurulum`, `istanbul_kamera_bakim`, `istanbul_kamera_teknik_servis`, `istanbul_alarm`, `istanbul_yangin_alarm`, `istanbul_kartli_gecis`, `landing_quote_form` ve `alarm_landing_page` de korunur; tablo minimum ortak kümeyi gösterir.

-----

## Google Apps Script Güncelleme Notu

Mevcut Apps Script webhook’un `doPost(e)` fonksiyonunda gelen JSON alanlarını yeni kolon sırasına göre eşleştirmek gerekir. Örnek:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp,
    data.name,
    data.phone,
    data.email,
    data.city,
    data.district,
    data.service_type,
    data.location_type,
    data.camera_count,
    data.message,
    data.page_url,
    data.form_source,
    data.utm_source,
    data.utm_medium,
    data.utm_campaign,
    data.utm_term,
    data.gclid,
    data.lead_status,
    data.assigned_to,
    data.offer_amount,
    data.lost_reason,
    data.notes
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

> **ÖNEMLİ:** Sheet’in ilk satırı (header row) yukarıdaki kolon sırasını takip etmelidir.
> Mevcut Sheet’teki eski kolonları bu standarda taşımadan önce mevcut verileri yedekleyin.

-----

## Teknik Referans

Kaynak dosya: `src/lib/lead-schema.ts`

Bu dosya tüm lead verisi için single source of truth’tur. Yeni alan eklendiğinde:

1. `LeadRecord` interface’ine ekle
1. `SHEET_COLUMNS` dizisine ekle
1. `buildLeadRecord` fonksiyonuna mapping ekle
1. Bu dokümanı güncelle
1. Apps Script’i güncelle
Durum Notu:
- Lead attribution katmanÄ±nda `page_type` route-aware sÄ±nÄ±flandÄ±rma ile merkezileÅŸtirildi; `form_source` normalizasyonu da Ä°stanbul money page ve landing varyasyonlarÄ±nÄ± daha ayrÄ±ÅŸtÄ±rÄ±cÄ± ÅŸekilde koruyacak biÃ§imde geniÅŸletildi.
