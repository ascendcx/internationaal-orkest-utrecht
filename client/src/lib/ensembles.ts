/**
 * The cities where Nederland in Harmonie is building youth ensembles.
 *
 * To flip a city to active, change its `status` from 'emerging' to 'active'. That is the only edit
 * needed: the badge, the card text, the map popup and the FAQ all follow. Optionally add `note`
 * and `scheduleText` (shown only when the city is active). Do not add school names here.
 */
export type Status = 'emerging' | 'active';

export type Ensemble = {
  name: string;
  lat: number;
  lng: number;
  status: Status;
  note?: { en: string; nl: string };
  scheduleText?: { en: string; nl: string };
};

export const ENSEMBLES: Ensemble[] = [
  { name: 'Utrecht', lat: 52.0907, lng: 5.1214, status: 'emerging' },
  { name: 'Leeuwarden', lat: 53.2012, lng: 5.7999, status: 'emerging' },
  { name: 'Rotterdam', lat: 51.9244, lng: 4.4777, status: 'emerging' },
  { name: 'Arnhem', lat: 51.9851, lng: 5.8987, status: 'emerging' },
  { name: 'Almelo', lat: 52.357, lng: 6.6625, status: 'emerging' },
  { name: 'Enschede', lat: 52.2215, lng: 6.8937, status: 'emerging' },
  { name: 'Roosendaal', lat: 51.5308, lng: 4.4653, status: 'emerging' },
];
