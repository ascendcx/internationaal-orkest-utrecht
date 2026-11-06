/** Content switches for blocks that need approval before they go live. Edit here only. Before launch, see LAUNCH_CHECKLIST.md at the repo root. */

/** Safeguarding block on the Youth Ensembles page. Needs Jen's approval of the wording. */
export const SHOW_SAFEGUARDING = false;

/** Recording notice on the School Concerts page. Needs Jen's wording and a consent process. */
export const SHOW_RECORDING_NOTICE = false;

/** Sistema Europe note on the Youth Ensembles page, shown with the confirmed wording. */
export const SHOW_SISTEMA_NOTE = true;

/** The foundation's official name, shown on Home, Support, Sponsors and in the Footer. Change it here only. Do not use it for the bank account holder (BANK_ACCOUNT_HOLDER) or the Mollie recipient: those must match the bank and Mollie records exactly. */
export const ORG_LEGAL_NAME = 'Stichting Internationaal Orkest Utrecht';

/**
 * Safeguarding wording, shared by Youth Ensembles, the FAQ and Who We Are ("A safe, welcoming place"). Needs Jen's
 * approval before SHOW_SAFEGUARDING is set to true. Edit the sentences here only: `intro` is the community sentence,
 * `checks` is the background check sentences, and `body` is the two together.
 */
const SAFEGUARDING_INTRO = {
  en: 'A safe, child-friendly community.',
  nl: 'Een veilige, kindvriendelijke gemeenschap.',
} as const;
const SAFEGUARDING_CHECKS = {
  en: 'Every musician has a background check. Adults are always present.',
  nl: 'Elke muzikant is gescreend. Er zijn altijd volwassenen aanwezig.',
} as const;
export const SAFEGUARDING_TEXT = {
  title: { en: 'A safe place for children', nl: 'Een veilige plek voor kinderen' },
  intro: SAFEGUARDING_INTRO,
  checks: SAFEGUARDING_CHECKS,
  body: {
    en: `${SAFEGUARDING_INTRO.en} ${SAFEGUARDING_CHECKS.en}`,
    nl: `${SAFEGUARDING_INTRO.nl} ${SAFEGUARDING_CHECKS.nl}`,
  },
} as const;

/** Recording wording, shared by School Concerts and the FAQ. Needs Jen's wording and a consent process before SHOW_RECORDING_NOTICE is set to true. */
export const RECORDING_TEXT = {
  en: 'Some concerts are recorded so that more people can hear the music. Children who should not be filmed can still attend and sit to one side.',
  nl: 'Sommige concerten worden opgenomen, zodat meer mensen de muziek kunnen horen. Kinderen die niet gefilmd mogen worden, kunnen er toch bij zijn en aan de zijkant zitten.',
} as const;
