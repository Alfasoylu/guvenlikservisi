export interface DuplicateCheckResult {
  ok: boolean;
  found: boolean;
  duplicate: boolean;
  duplicate_type?: string;
  matched_lead_id?: string;
  matched_timestamp?: string;
  matched_form_source?: string;
  matched_page_url?: string;
  error?: string;
}

export async function checkDuplicateLead(phone: string): Promise<DuplicateCheckResult> {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_WEBHOOK_URL;

    if (!scriptUrl) {
      return {
        ok: false,
        found: false,
        duplicate: false,
        error: "missing_google_script_webhook_url",
      };
    }

    if (!phone) {
      return {
        ok: true,
        found: false,
        duplicate: false,
      };
    }

    const url = `${scriptUrl}?action=check_duplicate&phone=${encodeURIComponent(phone)}`;

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        ok: false,
        found: false,
        duplicate: false,
        error: `duplicate_check_http_${response.status}`,
      };
    }

    const data = await response.json();

    return {
      ok: Boolean(data.ok),
      found: Boolean(data.found),
      duplicate: Boolean(data.duplicate),
      duplicate_type: data.duplicate_type || "",
      matched_lead_id: data.matched_lead_id || "",
      matched_timestamp: data.matched_timestamp || "",
      matched_form_source: data.matched_form_source || "",
      matched_page_url: data.matched_page_url || "",
      error: data.error || "",
    };
  } catch (error) {
    return {
      ok: false,
      found: false,
      duplicate: false,
      error: error instanceof Error ? error.message : "unknown_duplicate_check_error",
    };
  }
}
