const DEFAULT_MEDIA_BASE_URL = 'https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev';

export const MEDIA_BASE_URL: string = (import.meta.env.VITE_MEDIA_BASE_URL || DEFAULT_MEDIA_BASE_URL).replace(/\/+$/, '');

export function mediaUrl(path: string): string {
  return `${MEDIA_BASE_URL}/${path.replace(/^\/+/, '')}`;
}
