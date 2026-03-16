# Google Apps Script `update_lead` Handler

Amaç:
- Mevcut append akışını bozmadan,
- `lead_id` bazlı operasyon güncellemesini
- aynı Google Sheet üzerinde yapmak.

Bu handler repo içindeki [ops route](/C:/dev/guvenlikservisi/src/app/api/lead/ops/route.ts) ile uyumludur.

## Beklenen Request

`POST` body:

```json
{
  "action": "update_lead",
  "lead_id": "LD-20260316-ABC12",
  "call_status": "arandi",
  "lead_status": "teklif_verildi",
  "assigned_to": "Ali",
  "notes_append": "first_call_at:2026-03-16T10:15:00+03:00 | last_action_at:2026-03-16T10:22:00+03:00"
}
```

Kurallar:
- `lead_id` zorunlu
- diğer alanlardan en az biri dolu olmalı
- `notes_append` mevcut `notes` sonuna eklenir
- mevcut kolon sırası korunur

## Örnek Apps Script

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents || "{}");
    var action = String(data.action || "").trim();

    if (action === "update_lead") {
      return handleUpdateLead(sheet, data);
    }

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var row = headers.map(function(header) {
      return data[header] !== undefined ? data[header] : "";
    });

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: String(error)
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function handleUpdateLead(sheet, data) {
  var leadId = String(data.lead_id || "").trim();

  if (!leadId) {
    return jsonResponse({
      success: false,
      error: "missing_lead_id"
    });
  }

  var values = sheet.getDataRange().getValues();

  if (!values || values.length < 2) {
    return jsonResponse({
      success: false,
      error: "sheet_empty"
    });
  }

  var headers = values[0].map(function(header) {
    return String(header).trim();
  });

  var leadIdIndex = headers.indexOf("lead_id");
  var callStatusIndex = headers.indexOf("call_status");
  var leadStatusIndex = headers.indexOf("lead_status");
  var assignedToIndex = headers.indexOf("assigned_to");
  var notesIndex = headers.indexOf("notes");

  if (leadIdIndex === -1) {
    return jsonResponse({
      success: false,
      error: "lead_id_column_not_found"
    });
  }

  for (var i = values.length - 1; i >= 1; i--) {
    var rowLeadId = String(values[i][leadIdIndex] || "").trim();

    if (rowLeadId !== leadId) {
      continue;
    }

    var rowNumber = i + 1;

    if (callStatusIndex > -1 && data.call_status !== undefined) {
      sheet.getRange(rowNumber, callStatusIndex + 1).setValue(String(data.call_status || "").trim());
    }

    if (leadStatusIndex > -1 && data.lead_status !== undefined) {
      sheet.getRange(rowNumber, leadStatusIndex + 1).setValue(String(data.lead_status || "").trim());
    }

    if (assignedToIndex > -1 && data.assigned_to !== undefined) {
      sheet.getRange(rowNumber, assignedToIndex + 1).setValue(String(data.assigned_to || "").trim());
    }

    if (notesIndex > -1 && data.notes_append !== undefined) {
      var currentNotes = String(sheet.getRange(rowNumber, notesIndex + 1).getValue() || "").trim();
      var nextNotes = String(data.notes_append || "").trim();
      var mergedNotes = [currentNotes, nextNotes].filter(Boolean).join(" | ");
      sheet.getRange(rowNumber, notesIndex + 1).setValue(mergedNotes);
    }

    return jsonResponse({
      success: true,
      updated: true,
      lead_id: leadId
    });
  }

  return jsonResponse({
    success: false,
    error: "lead_not_found",
    lead_id: leadId
  });
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Neden Bu Tasarım

- Mevcut `doPost` append davranışı korunur.
- Yeni kolon açmadan operasyon zaman damgaları `notes` içinde tutulabilir.
- `lead_id` ile arama yapıldığı için telefon bazlı çakışma riski azaltılır.
- Son kayıttan geriye doğru arama, tekrar eden test kayıtlarında en güncel satırı bulmayı kolaylaştırır.

## Sonraki Adım

- Canlı Apps Script'e bu branch eklenmeli.
- Deploy sonrası [ops route](/C:/dev/guvenlikservisi/src/app/api/lead/ops/route.ts) ile smoke test yapılmalı.
- İlk doğrulama payload'ı:
  - `lead_id`
  - `call_status=arandi`
  - `notes_append=first_call_at:...`
