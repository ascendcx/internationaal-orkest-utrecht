// Before launch, work through LAUNCH_CHECKLIST.md at the repo root.
/** Donation routes shown on the Support page. Edit here only. */
const MOLLIE_PAYMENT_ID = 'nHXpkaYBF7uaFt2kIpYJR';

/** The Mollie payment page in the site language. Anything other than 'nl' (missing or unexpected) gives the English page. */
export function getMollieUrl(language?: string | null): string {
  const locale = language === 'nl' ? 'nl' : 'en';
  return `https://payment-links.mollie.com/${locale}/payment/${MOLLIE_PAYMENT_ID}/details`;
}
export const MOLLIE_RECIPIENT = 'Stichting Internationaal Orkest Utrecht';

/** Zeffy is hidden by decision (Jen confirmed it is not available to IOU). Set to true only if that changes. With an empty campaign URL a visible block shows a plain placeholder line and no button. */
export const SHOW_ZEFFY = false;
/** Set both values once the owning legal entity and campaign are confirmed. */
export const ZEFFY_CAMPAIGN_URL = '';
export const ZEFFY_RECIPIENT_NAME = '';

export const SUPPORT_EMAIL = 'info@internationaalorkest.nl';

/** Bank transfer details. Empty values show a placeholder line. Never enter example numbers. */
export const BANK_ACCOUNT_HOLDER = 'Stichting Internationaal Orkest Utrecht';
/** Stored without spaces. The Support page shows it in groups of four and copies it as stored. */
export const BANK_IBAN = 'NL66BUNQ2114422240';
export const BANK_BIC = 'BUNQNL2A';

/** WERO details. An empty image URL shows a placeholder line and no image. */
export const WERO_QR_IMAGE_URL = '';
export const WERO_PAYEE_NAME = '';

/** Set a flag to false to hide that block entirely. */
export const SHOW_WERO = true;
export const SHOW_BANK_TRANSFER = true;
