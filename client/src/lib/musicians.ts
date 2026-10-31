/**
 * Musicians shown in "Meet the musicians" (Who We Are page, and a teaser on Home).
 * While this array is empty, the section and the Home teaser render nothing.
 *
 * To add a musician, append an entry and upload the files to R2 under the keys given:
 *   { slug: 'jane-doe', name: 'Jane Doe', instrumentEn: 'Violin', instrumentNl: 'Viool',
 *     videoKey: 'videos/musicians/jane-doe.mp4', posterKey: 'images/musicians/jane-doe.jpg',
 *     captionsKey: 'videos/musicians/jane-doe.vtt' }   // captionsKey is optional
 *
 * Before adding anyone, see LAUNCH_CHECKLIST.md: consent to appear online, and music cleared for online use.
 */
export type Musician = {
  slug: string;
  name: string;
  instrumentEn: string;
  instrumentNl: string;
  /** R2 key, for example videos/musicians/<slug>.mp4 */
  videoKey: string;
  /** R2 key, for example images/musicians/<slug>.jpg */
  posterKey: string;
  /** Optional R2 key of a WebVTT captions file, for example videos/musicians/<slug>.vtt */
  captionsKey?: string;
};

export const MUSICIANS: Musician[] = [];
