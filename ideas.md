# IOU Website — Design Philosophy

## Three Approaches Considered

**Approach A — Nordic Warmth** (probability: 0.07)
Warm cream and forest green palette, Scandinavian editorial spacing, serif headlines. Calm, trustworthy, slightly academic. Risk: too quiet for a youth-focused mission.

**Approach B — Dutch Modernism** (probability: 0.06)
Bold asymmetric grid, primary colour blocking inspired by De Stijl, strong typographic hierarchy. Energetic, distinctive, culturally rooted. Risk: could feel too graphic for a non-profit.

**Approach C — Refined Civic Warmth** (probability: 0.05)
Warm off-white and deep teal with gold accents, editorial serif/sans pairing, generous whitespace, photography-forward. Professional, calm, and emotionally resonant. Feels like a trusted institution that also genuinely loves children.

---

## Chosen Approach: Refined Civic Warmth

This approach was selected because it directly answers Jennifer's brief: "calm, even though there are multiple options." It also serves both primary audiences — school administrators who need to trust an institution, and parents who need to feel warmth and safety.

### Design Movement
Contemporary editorial non-profit — think Britten Sinfonia meets a Dutch cultural foundation annual report. Restrained but not cold. Purposeful but not corporate.

### Core Principles
1. **Calm hierarchy**: Every page has one dominant action. Supporting content is visually subordinate.
2. **Photography-forward**: Real images of children and musicians carry more emotional weight than any copy.
3. **Generous whitespace**: Sections breathe. Nothing crowds. The site feels like a well-designed concert programme.
4. **Bilingual symmetry**: EN and NL versions are visually identical — the toggle is a utility, not a design element.

### Colour Philosophy
- **Primary — Deep Teal** `oklch(0.38 0.09 195)`: The IOU brand colour from their existing logo. Authoritative, musical, calm.
- **Accent — Warm Gold** `oklch(0.72 0.12 75)`: Used sparingly for CTAs and highlights. Evokes concert hall warmth.
- **Background — Warm Off-White** `oklch(0.98 0.008 80)`: Never pure white. Feels like quality paper.
- **Surface — Pale Teal Wash** `oklch(0.95 0.02 195)`: Used for section backgrounds to create gentle rhythm.
- **Text — Deep Charcoal** `oklch(0.22 0.01 60)`: Rich, readable, not harsh black.

### Layout Paradigm
Asymmetric editorial grid. Hero sections use full-bleed photography with text anchored left. Content sections alternate between text-left/image-right and full-width editorial blocks. No centred hero text — everything is grounded to an edge.

### Signature Elements
1. **The thin teal rule**: A 2px teal horizontal line appears above section headings as a visual motif throughout.
2. **The pull quote block**: Key statements (like the 900-children quote) appear in oversized serif italic, set apart from body copy.
3. **The audience card**: On the homepage, the two primary audiences (Schools / Parents) are presented as distinct, visually separated cards with their own CTA.

### Interaction Philosophy
Hover states are subtle — a slight opacity shift and underline on links, a gentle lift on cards. Nothing bounces or flashes. The site should feel like a well-maintained instrument: responsive, precise, never showy.

### Animation
Entrance animations on scroll: sections fade up from `translateY(20px)` with `opacity: 0` to `translateY(0)` with `opacity: 1` over 500ms ease-out. Stagger 80ms between sibling elements. No parallax. No auto-playing video. Respect `prefers-reduced-motion`.

### Typography System
- **Display / Headlines**: Playfair Display — a classical serif with musical elegance. Used for H1 and H2.
- **Body / UI**: DM Sans — clean, humanist sans-serif. Warm and readable at all sizes.
- **Hierarchy**: H1 at 3.5rem/bold, H2 at 2rem/semibold, H3 at 1.25rem/semibold, body at 1rem/regular, small at 0.875rem.

### Brand Essence
*The orchestra that turns a concert into a beginning.* — Inspiring, accessible, international.
Personality adjectives: **Warm. Credible. Purposeful.**

### Brand Voice
Headlines are direct and human. CTAs are invitations, not commands. No jargon. No superlatives.
Example headline: "Inspiring Children Through the Power of Symphonic Music."
Example CTA: "Book a School Concert" — not "Get Started" or "Learn More."

### Wordmark & Logo
The existing IOU turquoise music note logo is retained as the brand mark. It appears in the header at 40px height alongside the full name "Internationaal Orkest Utrecht" in Playfair Display.

### Signature Brand Colour
Deep Teal `oklch(0.38 0.09 195)` — the IOU turquoise, ownable and consistent across all touchpoints.

## Style Decisions
- Navigation uses a scroll-aware header: transparent over hero, solid white/90 backdrop-blur on scroll.
- Donation page (Support) order: hero with a Donate button that scrolls to the donation section, what donations support, a Mollie donation route first, (Zeffy route hidden by decision, SHOW_ZEFFY = false; the code is kept so it can be restored), a note that taking part is always free, and an optional Stay in touch signup. Under the donation routes, a compact "Other ways to donate" area shows bank transfer and WERO as quiet side by side blocks (stacked on mobile), never styled like the main donation button. Each shows a placeholder line until real details are set, and can be hidden with SHOW_BANK_TRANSFER and SHOW_WERO. See LAUNCH_CHECKLIST.md. Constants live in client/src/lib/donationConfig.ts.
- Language toggle (EN/NL) lives in the top-right utility area of the nav, always visible.
- Forms use generous padding, visible labels above inputs, and a single primary CTA per form.
- Composition: inner-page sections default to an asymmetric editorial grid with edge-anchored headings; centred headings are reserved only for quotes, stats, or major fundraising appeals.
- Cards: use boxed cards only for true decision points or compact transactional information; long rosters and process content use annual-report layout with thin rules, typographic grouping, and restrained surfaces.
- CTA colour: warm gold is reserved for the single highest-priority action on a page; deep teal is used for secondary actions and structural brand elements.

## Writing rules
- Every user-facing string goes through `t(english, dutch)`. Never hardcode strings.
- English spelling is British (organisation, programme, centre, recognise, colour, favourite, licence, enquiry). Do not change code identifiers, CSS properties, URLs, file names, or the programme name "Nederland in Harmonie". `<html lang>` is `en-GB` for English.
- "Programme" means a performance programme or a scheme of activities.
- No em dashes or hyphen separators. Dutch uses u/uw and sentence case.
- The ensembles are nationwide (Utrecht, Leeuwarden, Rotterdam, Arnhem, Almelo, Enschede, Roosendaal). Keep Utrecht only in the organisation name and in facts that are specifically about Utrecht.
- Link previews use one share image on every page (`images/iou-og-image.jpg`, set in `useSEO`).
- Content blocks that need approval sit behind flags in `client/src/lib/siteFlags.ts` (`SHOW_SAFEGUARDING`, `SHOW_RECORDING_NOTICE`). Donation flags are in `client/src/lib/donationConfig.ts`. Zeffy is hidden by decision (`SHOW_ZEFFY = false`).
- Pages added: Who We Are (`/about`, nav label changed), Locations (`/locations`, data in `client/src/lib/ensembles.ts`, leaflet map loaded only after "Show map"), FAQ (`/faq`). Meet the musicians data is in `client/src/lib/musicians.ts` and stays hidden while empty. Jen's welcome message is the constant in `client/src/lib/welcome.ts`.
