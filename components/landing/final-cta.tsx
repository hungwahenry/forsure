import { StoreButtons } from '@/components/store-buttons';

export function FinalCta() {
  return (
    <section id="download" className="relative z-10 px-6 pt-28 pb-16 text-center sm:pt-40 sm:pb-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          your city is making plans without you.
        </h2>
        <p className="text-balance mx-auto mt-5 max-w-lg text-base text-primary-foreground/80 sm:text-lg">
          download forsure, see what&apos;s happening within a few blocks or
          post a plan of your own, and show up.
        </p>
        <div className="mt-10 flex justify-center">
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}
