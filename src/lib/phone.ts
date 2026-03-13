function cleanPhoneInput(value: unknown) {
  return String(value ?? "").trim();
}

export function getPhoneDigits(value: unknown) {
  return cleanPhoneInput(value).replace(/\D/g, "");
}

export function normalizeTurkishPhone(value: unknown): string {
  const digits = getPhoneDigits(value);

  if (!digits) {
    return "";
  }

  let candidate = digits;

  if (candidate.startsWith("0090") && candidate.length === 14) {
    candidate = candidate.slice(2);
  }

  if (candidate.length === 11 && candidate.startsWith("0")) {
    candidate = `90${candidate.slice(1)}`;
  }

  if (candidate.length === 10 && candidate.startsWith("5")) {
    candidate = `90${candidate}`;
  }

  if (!/^905\d{9}$/.test(candidate)) {
    return "";
  }

  return candidate;
}

export function isValidTurkishPhone(value: unknown) {
  return Boolean(normalizeTurkishPhone(value));
}

export function formatTurkishPhoneInput(value: unknown) {
  const normalized = normalizeTurkishPhone(value);
  const digits = getPhoneDigits(value);

  let local = normalized ? `0${normalized.slice(2)}` : digits;

  if (!normalized && digits.length <= 10 && digits.startsWith("5")) {
    local = `0${digits}`;
  }

  local = local.slice(0, 11);

  if (local.length <= 4) return local;
  if (local.length <= 7) return `${local.slice(0, 4)} ${local.slice(4)}`;
  if (local.length <= 9) {
    return `${local.slice(0, 4)} ${local.slice(4, 7)} ${local.slice(7)}`;
  }

  return `${local.slice(0, 4)} ${local.slice(4, 7)} ${local.slice(7, 9)} ${local.slice(9, 11)}`;
}

export function getTurkishPhoneValidationMessage(value: unknown) {
  const raw = cleanPhoneInput(value);

  if (!raw) {
    return "Telefon numarası zorunludur.";
  }

  if (!isValidTurkishPhone(raw)) {
    return "Geçerli bir telefon numarası girin. Örnek: 05XX XXX XX XX";
  }

  return "";
}
