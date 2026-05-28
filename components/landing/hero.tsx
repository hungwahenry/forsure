import Image from 'next/image';
import { StoreButtons } from '@/components/store-buttons';

const HERO_PHOTO = '/landing/hero.jpg';

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden">
      <Image
        src={HERO_PHOTO}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        draggable={false}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-tr from-black/85 via-black/45 to-black/10"
      />

      <header className="relative z-10 grid grid-cols-3 items-center px-6 py-5 sm:px-10 sm:py-7">
        <div />
        <div className="flex justify-center">
          <Image
            src="/wordmark.png"
            alt="forsure"
            width={1800}
            height={500}
            priority
            draggable={false}
            className="h-7 w-auto select-none brightness-0 invert sm:h-8"
          />
        </div>
        <div className="flex justify-end">
          <a
            href="https://forsure.business"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/85 transition-colors hover:text-white"
          >
            for business →
          </a>
        </div>
      </header>

      <div className="relative z-10 mt-auto flex items-end justify-between gap-6 px-6 pb-14 sm:px-10 sm:pb-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            find someone to do anything, nearby.
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            forsure is a local hangouts app. scroll what people are doing
            nearby right now, tap join, and pull up.
          </p>
          <div className="mt-8">
            <StoreButtons />
          </div>
        </div>

        <a
          href="#how-it-works"
          className="hidden flex-col items-center pb-2 text-white/55 transition-colors hover:text-white/85 sm:flex"
        >
          <span className="text-xs uppercase tracking-[0.2em]">scroll</span>
          <div className="mt-3 h-12 w-px bg-white/30" />
        </a>
      </div>
    </section>
  );
}
