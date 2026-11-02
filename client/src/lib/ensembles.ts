/**
 * The cities where Nederland in Harmonie is building youth ensembles.
 *
 * To flip a city to active, change its `status` from 'emerging' to 'active'. That is the only edit
 * needed: the status word, the city text, the map pin and the FAQ all follow. Optionally add `note`
 * and `scheduleText` (shown only when the city is active). Do not add school names here.
 */
export type Status = 'emerging' | 'active';

export type Ensemble = {
  name: string;
  /** Used in the registration link (?city=slug) and the form. */
  slug: string;
  lat: number;
  lng: number;
  status: Status;
  note?: { en: string; nl: string };
  scheduleText?: { en: string; nl: string };
};

export const ENSEMBLES: Ensemble[] = [
  { name: 'Utrecht', slug: 'utrecht', lat: 52.0907, lng: 5.1214, status: 'emerging' },
  { name: 'Leeuwarden', slug: 'leeuwarden', lat: 53.2012, lng: 5.7999, status: 'emerging' },
  { name: 'Rotterdam', slug: 'rotterdam', lat: 51.9244, lng: 4.4777, status: 'emerging' },
  { name: 'Arnhem', slug: 'arnhem', lat: 51.9851, lng: 5.8987, status: 'emerging' },
  { name: 'Almelo', slug: 'almelo', lat: 52.357, lng: 6.6625, status: 'emerging' },
  { name: 'Enschede', slug: 'enschede', lat: 52.2215, lng: 6.8937, status: 'emerging' },
  { name: 'Roosendaal', slug: 'roosendaal', lat: 51.5308, lng: 4.4653, status: 'emerging' },
];
