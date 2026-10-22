# Launch checklist

Work through this before the site goes live on the real domain.

**Rule:** any donation block that still shows "Details will be added here." must be switched off before launch. Set `SHOW_BANK_TRANSFER` and `SHOW_WERO` to `false` in `client/src/lib/donationConfig.ts` unless the real details are filled in.

## Donations (`client/src/lib/donationConfig.ts`)

- [ ] Bank transfer: fill `BANK_ACCOUNT_HOLDER`, `BANK_IBAN` and `BANK_BIC`. Use the real values only, never examples. Otherwise set `SHOW_BANK_TRANSFER = false`.
- [ ] WERO: add `WERO_QR_IMAGE_URL` and `WERO_PAYEE_NAME`. Otherwise set `SHOW_WERO = false`.
- [ ] Zeffy: set `ZEFFY_CAMPAIGN_URL` and `ZEFFY_RECIPIENT_NAME`, or leave both empty so nothing Zeffy shows.
- [ ] Mollie: confirm the flow end to end with `MOLLIE_URL`, and confirm the Mollie page title and recipient (`MOLLIE_RECIPIENT`) read correctly.
- [ ] `SUPPORT_EMAIL` is a monitored mailbox.

## Legal copy

- [ ] Add the verified KvK number and legal name, only if approved. Places to update: `client/src/components/Footer.tsx` (registration lines) and `client/src/pages/Privacy.tsx` (controller paragraph).
- [ ] Approve the Dutch copy on every page.
- [ ] Set AUTO_DETECT_LANGUAGE to true once the Dutch copy is approved (`client/src/contexts/LanguageContext.tsx`).

## Environment (Vercel project settings, see `.env.example`)

- [ ] Switch `FORM_TO_EMAIL` to IOU's inbox.
- [ ] Check `RESEND_API_KEY` and `FORM_FROM_EMAIL` (sender on a domain verified in Resend).
- [ ] Set `VITE_MEDIA_BASE_URL` if media moves to a custom domain.
