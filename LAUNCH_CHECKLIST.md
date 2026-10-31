# Launch checklist

Work through this before the site goes live on the real domain.

**Rule:** any donation block that still shows "Details will be added here." must be switched off before launch. Set `SHOW_BANK_TRANSFER` and `SHOW_WERO` to `false` in `client/src/lib/donationConfig.ts` unless the real details are filled in.

## Donations (`client/src/lib/donationConfig.ts`)

- [ ] Bank transfer: fill `BANK_ACCOUNT_HOLDER`, `BANK_IBAN` and `BANK_BIC`. Use the real values only, never examples. Otherwise set `SHOW_BANK_TRANSFER = false`.
- [ ] WERO: add `WERO_QR_IMAGE_URL` and `WERO_PAYEE_NAME`. Otherwise set `SHOW_WERO = false`.
- [x] Zeffy is hidden by decision (Jen confirmed it is not available to IOU). `SHOW_ZEFFY` is `false` and all Zeffy code and constants are kept. Set `SHOW_ZEFFY` back to `true` only if that changes, and then fill `ZEFFY_CAMPAIGN_URL` and `ZEFFY_RECIPIENT_NAME`.
- [ ] Mollie: confirm the flow end to end with `MOLLIE_URL`, and confirm the Mollie page title and recipient (`MOLLIE_RECIPIENT`) read correctly.
- [ ] `SUPPORT_EMAIL` is a monitored mailbox.

## Content flags (`client/src/lib/siteFlags.ts`)

- [ ] `SHOW_SAFEGUARDING` (Youth Ensembles, "A safe place for children"): currently `false`. Needs Jen's approval of the wording before it is set to `true`.
- [ ] `SHOW_RECORDING_NOTICE` (School Concerts): currently `false`. Needs Jen's wording and a consent process before it is set to `true`.

## Who We Are, musicians and locations

- [ ] Jen's personal "why" story is still needed for the Who We Are page (`client/src/pages/About.tsx`, "Why we exist"). Do not invent one.
- [ ] Meet the musicians (`client/src/lib/musicians.ts`) is empty, so the section and the Home teaser are hidden. Before adding anyone, each musician must consent to appear online, and the music played must be cleared for online use.
- [ ] Locations (`client/src/lib/ensembles.ts`): all seven cities are `emerging`. Change a city's `status` to `active` only when its group is meeting.
- [ ] Jen's welcome message (`client/src/lib/welcome.ts`) is used exactly as written. Get her sign-off on any change.

## Legal copy

- [ ] Add the verified KvK number and legal name, only if approved. Places to update: `client/src/components/Footer.tsx` (registration lines) and `client/src/pages/Privacy.tsx` (controller paragraph).
- [ ] Approve the Dutch copy on every page.
- [ ] Set AUTO_DETECT_LANGUAGE to true once the Dutch copy is approved (`client/src/contexts/LanguageContext.tsx`).

## Environment (Vercel project settings, see `.env.example`)

- [ ] Switch `FORM_TO_EMAIL` to IOU's inbox.
- [ ] Check `RESEND_API_KEY` and `FORM_FROM_EMAIL` (sender on a domain verified in Resend).
- [ ] Set `VITE_MEDIA_BASE_URL` if media moves to a custom domain.
