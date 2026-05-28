import Image from 'next/image';

const APP_STORE_URL =
  'https://apps.apple.com/ng/app/forsure-local-hangouts/id6770074771';
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=fyi.forsure';

export function AppStoreButton() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Download forsure on the App Store"
      className="inline-block transition-opacity hover:opacity-85"
    >
      <Image
        src="/badge-app-store.svg"
        alt="Download on the App Store"
        width={144}
        height={48}
        priority
        draggable={false}
        className="h-10 w-auto select-none"
      />
    </a>
  );
}

export function PlayStoreButton() {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Get forsure on Google Play"
      className="inline-block transition-opacity hover:opacity-85"
    >
      <Image
        src="/badge-google-play.png"
        alt="Get it on Google Play"
        width={162}
        height={48}
        priority
        draggable={false}
        className="h-14 w-auto select-none"
      />
    </a>
  );
}

export function StoreButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <AppStoreButton />
      <PlayStoreButton />
    </div>
  );
}
