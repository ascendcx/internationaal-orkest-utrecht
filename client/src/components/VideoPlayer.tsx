import { useRef, useState } from 'react';
import { Play } from 'lucide-react';

type Props = {
  src: string;
  poster: string;
  /** Accessible name of the video. */
  label: string;
  /** Accessible name of the play button. */
  playLabel: string;
  /** Optional WebVTT captions URL. */
  captionsSrc?: string;
  captionsLang?: string;
  captionsLabel?: string;
  /** 'metadata' for a featured video, 'none' for cards so nothing downloads until the visitor plays. */
  preload?: 'none' | 'metadata';
  width?: number;
  height?: number;
  /** Tailwind classes for the play button size. */
  buttonClass?: string;
  iconSize?: number;
};

/** Poster, big play button, native controls, no autoplay. Shared by the concert video and musician cards. */
export default function VideoPlayer({
  src,
  poster,
  label,
  playLabel,
  captionsSrc,
  captionsLang = 'en',
  captionsLabel = 'Captions',
  preload = 'metadata',
  width = 854,
  height = 480,
  buttonClass = 'h-20 w-20',
  iconSize = 32,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const handlePlay = () => {
    // If play() is rejected the button stays, so the visitor can try again or use the native controls.
    videoRef.current?.play().catch(() => {});
  };

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls
        playsInline
        preload={preload}
        width={width}
        height={height}
        onPlay={() => setStarted(true)}
        aria-label={label}
        className="absolute inset-0 w-full h-full max-w-full"
      >
        {captionsSrc && <track kind="captions" src={captionsSrc} srcLang={captionsLang} label={captionsLabel} />}
      </video>
      {!started && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <button
            type="button"
            onClick={handlePlay}
            aria-label={playLabel}
            className={`pointer-events-auto flex ${buttonClass} items-center justify-center rounded-full bg-[oklch(0.98_0.008_80)] text-[oklch(0.38_0.09_195)] shadow-lg ring-4 ring-white/40 transition-transform duration-150 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 focus-visible:outline-none focus-visible:ring-[oklch(0.72_0.12_75)]`}
          >
            <Play size={iconSize} fill="currentColor" aria-hidden="true" className="ml-1" />
          </button>
        </div>
      )}
    </div>
  );
}
