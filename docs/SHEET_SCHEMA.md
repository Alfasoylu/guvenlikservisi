# Google Sheets Lead Kolon Standardı

> BL-02 kapsamında sabitlenen canlı kolon yapısı.
> Tüm lead'ler bu şemaya göre Google Sheets'e yazılır.
> Source of truth: `src/lib/lead-schema.ts`

---

## Durum Özeti

- `tamamlandı`: Lead veri şeması kod tarafında tek merkezden (`src/lib/lead-schema.ts`) yönetiliyor.
- `tamamlandı`: `/api/lead` ve `/api/quote` aynı kolon standardına normalize payload gönderiyor.
- `tamamlandı`: Canlı Google Sheets kolonu ve Apps Script sözleşmesi doğrulandı; append işlemi sheet header sırasına göre yapılıyor.
- `düzeltildi`: Bu dokümandaki önceki mojibake/encoding bozulması giderildi; doküman canlı şemaya yeniden hizalandı.

---

## Canlı Kolon Sırası (A -> V değil, güncel kod sırası)

Bugünkü payload sırası `SHEET_COLUMNS` dizisine göre şöyledir:

| # | Kolon Adı | Açıklama | Dolduran |
|---|---|---|---|
| A | `lead_id` | Benzersiz lead kimliği (`LD-...`) | Otomatik |
| B | `timestamp` | Lead geliş zamanı (Europe/Istanbul) | Otomatik |
| C | `form_source` | Form / landing / çağrı kaynağı | Otomatik |
| D | `page_url` | Lead'in geldiği sayfa URL'si | Otomatik |
| E | `service_type` | Normalize hizmet kodu | Otomatik |
| F | `city` | İl adı | Form |
| G | `district` | İlçe adı | Form |
| H | `name` | Müşteri adı soyadı | Form |
| I | `phone` | Normalize telefon | Otomatik |
| J | `email` | E-posta (opsiyonel) | Form |
| K | `location_type` | Normalize mekan türü | Otomatik |
| L | `camera_count` | Normalize kamera sayısı | Otomatik |
| M | `message` | Serbest metin / proje notu | Form |
| N | `utm_source` | Trafik kaynağı | URL param |
| O | `utm_medium` | Trafik aracı | URL param |
| P | `utm_campaign` | Kampanya adı | URL param |
| Q | `utm_term` | Anahtar kelime / terim | URL param |
| R | `gclid` | Google Ads click ID | URL param |
| S | `call_status` | Çağrı operasyon durumu | Otomatik başlangıç: `aranmadi` |
| T | `lead_status` | Lead pipeline durumu | Otomatik başlangıç: `yeni` |
| U | `assigned_to` | Satış sorumlusu | Manuel |
| V | `notes` | Attribution + duplicate + operasyon notları | Otomatik / Manuel |

Durum Notu:
- Önceki doküman sürümü `offer_amount` ve `lost_reason` kolonlarını aktif şemanın parçası gibi gösteriyordu.
- Canlı kodda bugün gönderilen payload içinde bu alanlar yok.
- Apps Script header-driven append kullandığı için fiili source of truth sheet header + `SHEET_COLUMNS` uyumudur.
- Eğer ileride bu alanlara yeniden ihtiyaç varsa önce `LeadRecord` ve `SHEET_COLUMNS` içinde tanımlanmalıdır.

---

## Hizmet Türü Kodları (`service_type`)

Canlı normalizasyon şu ortak kümeye düşer:

| Kod | Açıklama |
|---|---|
| `kamera` | Güvenlik kamerası / CCTV / IP kamera talepleri |
| `alarm` | Alarm sistemi kurulumu |
| `yangin` | Yangın alarm sistemi |
| `kartli-gecis` | Kartlı geçiş / turnike sistemi |
| `apartman-site` | Apartman / site güvenlik talepleri |
| `isyeri` | İşyeri / ofis güvenlik talepleri |
| `fabrika-depo` | Fabrika / depo güvenlik talepleri |
| `bakim-servis` | Bakım / teknik servis / arıza / uzaktan izleme |
| `komple` | Genel / kapsamlı güvenlik çözümü |

Durum Notu:
- `kamera-sistemi-bakim-sozlesmesi`
- `guvenlik-sistemi-teknik-servis`
- `kamera-ariza-servisi`
- `kartli-gecis-sistemi-kurulumu`

gibi slug'lar sheet tarafına doğrudan ham haliyle düşmez; normalize edilerek uygun service koduna çevrilir.

---

## Mekan Türü Normalizasyonu (`location_type`)

Kod tarafında serbest girişler aşağıdaki normalize değerlere yakınsır:

| Normalize Değer | Açıklama |
|---|---|
| `ev / daire` | Ev, daire, konut |
| `villa` | Villa / müstakil ev |
| `apartman / site` | Apartman ve site yaşam alanları |
| `ofis` | Ofis |
| `isyeri` | İşyeri |
| `magaza` | Mağaza / dükkan |
| `fabrika` | Fabrika |
| `depo` | Depo |
| serbest değer | Yukarıdakilere girmeyen temizlenmiş giriş |

---

## Form Kaynakları (`form_source`)

Canlı kodun tanıdığı temel kaynaklar:

| Kaynak | Açıklama |
|---|---|
| `quote_form` | Genel quote akışı |
| `istanbul_ip_kamera` | İstanbul IP kamera özel akışı |
| `istanbul_kamera_kurulum` | İstanbul kamera kurulum formu |
| `istanbul_kamera_bakim` | İstanbul bakım formu |
| `istanbul_kamera_teknik_servis` | İstanbul teknik servis formu |
| `istanbul_alarm` | İstanbul alarm formu |
| `istanbul_yangin_alarm` | İstanbul yangın alarm formu |
| `istanbul_kartli_gecis` | İstanbul kartlı geçiş formu |
| `istanbul_lead_form` | İstanbul lead form varyasyonu |
| `landing_page` | Genel `/teklif/*` landing akışı |
| `landing_quote_form` | Landing içi quote form |
| `alarm_landing_page` | Alarm landing varyasyonu |
| `whatsapp` | WhatsApp kaynaklı giriş |
| `phone_call` | Telefon kaynaklı giriş |
| `manual` | Manuel kayıt |

Durum Notu:
- `page_url` `/teklif/` altında ise boş/ham kaynaklar otomatik olarak `landing_page` lehine normalize edilir.
- Ham kaynak değeri kaybolmaz; gerektiğinde `notes` içinde `form_source_raw:*` olarak izlenir.

---

## Operasyon Durum Alanları

### Çağrı durumu (`call_status`)

| Değer | Anlamı |
|---|---|
| `aranmadi` | Henüz aranmadı |
| `arandi` | Arandı |
| `ulasilamadi` | Ulaşılamadı |
| `tekrar_ara` | Tekrar aranacak |
| `randevu` | Randevu / keşif planlandı |
| `kapandi` | Operasyonel olarak kapandı |

### Lead durumu (`lead_status`)

| Değer | Anlamı |
|---|---|
| `yeni` | Yeni lead |
| `teklif_verildi` | Teklif verildi |
| `kazanildi` | Satış kazanıldı |
| `kaybedildi` | Lead kaybedildi |
| `spam` | Spam / geçersiz |

Durum Notu:
- API tarafı yeni kayıtları varsayılan olarak `call_status=aranmadi` ve `lead_status=yeni` ile açar.
- Sheet operasyonu olgunlaştıkça bu alanlar satış sürecinin gerçek pipeline'ı için kullanılmalıdır.
- Repo tarafında artık opsiyonel `/api/lead/ops` writeback sözleşmesi vardır. Bu sözleşme `lead_id` bazlı `call_status`, `lead_status`, `assigned_to` ve `notes_append` güncellemesi gönderebilir.
- Mevcut tercih: `first_call_at` ve `last_action_at` için yeni kolon açılmayacak; operasyon geçmişi şimdilik `notes` içindeki tag'lerle tutulacak.
- `first_call_at` ve `last_action_at` gibi ek operasyon zaman damgaları yeni kolona zorlanmaz; güvenli geri uyumluluk için `notes` alanına tag olarak (`first_call_at:*`, `last_action_at:*`) eklenebilir.

---

## `notes` Alanı Ne Taşır?

`notes` artık yalnızca serbest satış notu değildir. Kod tarafında aşağıdaki sinyalleri de taşıyabilir:

- `form_source_raw:*`
- `page_type:*`
- `utm_content:*`
- `referrer:*`
- `page_title:*`
- `page_path:*`
- `session_id:*`
- `landing_page_url:*`
- `landing_page_type:*`
- `landing_page_path:*`
- `landing_timestamp:*`
- `fbclid:*`
- `msclkid:*`
- duplicate check sonuçları

Bu nedenle Apps Script veya Sheet tarafında `notes` alanı kesilmemeli, truncate edilmemeli ve ayrı kolona parçalanacaksa stratejik notlar korunmalıdır.

Önerilen operasyon tag formatı:
- `first_call_at:2026-03-16T11:50:30+03:00`
- `last_action_at:2026-03-16T11:52:00+03:00`
- `test_type:ops_smoke_update`
- `direct_script_check:ok`

---

## Google Apps Script Güncelleme Notu

Doğrulanan canlı davranış:
- uygulama JSON payload'ı `SHEET_COLUMNS` sırasına göre üretir.
- Apps Script header row'u okuyup `headers.map(...)` ile değerleri header adına göre yerleştirir.
- Bu nedenle append güvenliği kolon pozisyonundan değil header isimlerinden gelir.

Opsiyonel operasyon writeback sözleşmesi:
- Repo içindeki `/api/lead/ops` route'u dış webhook'a `action=update_lead` payload'ı gönderebilir.
- Bu katman mevcut append akışını değiştirmez; yalnızca operasyon güncellemesi için ikinci bir sözleşme açar.
- Önerilen minimum update payload'ı:
  - `lead_id`
  - `call_status`
  - `lead_status`
  - `assigned_to`
  - `notes_append`
- Repo içinde deploy-ready örnek handler: `docs/GOOGLE_APPS_SCRIPT_OPS_HANDLER.md`

Canlı Apps Script mantığı bu sözleşmeyi izler:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.lead_id,
    data.timestamp,
    data.form_source,
    data.page_url,
    data.service_type,
    data.city,
    data.district,
    data.name,
    data.phone,
    data.email,
    data.location_type,
    data.camera_count,
    data.message,
    data.utm_source,
    data.utm_medium,
    data.utm_campaign,
    data.utm_term,
    data.gclid,
    data.call_status,
    data.lead_status,
    data.assigned_to,
    data.notes
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Önemli:
- Sheet header row yukarıdaki alan adlarıyla hizalı kaldığı sürece append işlemi bozulmaz.
- Header adı değişirse ilgili veri boş düşer veya yanlış kolona kayar.
- Mevcut stabil sözleşmede header isimleri korunmalıdır.

---

## Duplicate Check Sözleşmesi

Canlı Apps Script duplicate endpoint davranışı:

- `action=check_duplicate`
- zorunlu tek sinyal: `phone`
- eşleşme: aynı telefon
- pencere:
  - son 24 saat -> `duplicate_hot`
  - son 30 gün -> `duplicate_30d`

Dönen alanlar:

- `duplicate`
- `duplicate_type`
- `matched_lead_id`
- `matched_timestamp`
- `matched_form_source`
- `matched_page_url`

Durum Notu:
- Uygulama içi local duplicate kontrolü daha sıkıdır ve fingerprint-aware çalışır.
- Harici Google Sheets duplicate kontrolü ise sistemi bozmamak için bugün phone-only tutulur.
- Bu iki katman birbiriyle çelişmez; dış katman daha geniş, iç katman daha hassastır.

---

## Legacy Notu: Eski Şema Neden Geçersiz?

Önceki doküman sürümü şu alanları canlı şema gibi sunuyordu:

- `offer_amount`
- `lost_reason`

Ayrıca şu alanları eksik bırakıyordu:

- `lead_id`
- `call_status`

Bu yüzden önceki tablo, operasyon niyeti açısından faydalı olsa da canlı payload için artık source of truth değildir.
Bilgi kaybı yaratmamak için bu niyet notu korunur:

- `offer_amount` ve `lost_reason` satış pipeline'ı olgunlaştığında yeniden eklenebilecek aday CRM kolonlarıdır.
- Ancak bunlar bugün API tarafından Google Sheets'e zorunlu gönderilen kolonlar değildir.

---

## Teknik Referans

Kaynak dosya: `src/lib/lead-schema.ts`

Bir alan eklendiğinde minimum güncelleme sırası:

1. `LeadRecord` interface'ine ekle
2. `SHEET_COLUMNS` dizisine ekle
3. `buildLeadRecord` içine normalize mapping ekle
4. `docs/SHEET_SCHEMA.md` dosyasını güncelle
5. Google Sheets header sözleşmesini ve gerekiyorsa Apps Script alan adlarını hizala
