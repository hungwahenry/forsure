import { ActivityCollage } from '@/components/activity-collage';
import { CyclingTagline } from '@/components/cycling-tagline';
import { StoreButtons } from '@/components/store-buttons';
import { WaitlistForm } from '@/components/waitlist-form';
import { LAUNCH_MODE } from '@/lib/launch';

export default function Page() {
  return (
    <main className="relative flex h-svh flex-col items-center justify-center overflow-hidden px-6">
      {/* Drifting activity cards around the edges. */}
      <ActivityCollage />

      {/* Soft scrim so the centre stays readable over any card. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          background:
            'radial-gradient(ellipse 46% 42% at 50% 48%, var(--background) 55%, transparent 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <h1 className="text-6xl font-bold tracking-tight sm:text-8xl">
          forsure
        </h1>
        <CyclingTagline />
        <div className="mt-2 flex justify-center">
          {LAUNCH_MODE === 'waitlist' ? <WaitlistForm /> : <StoreButtons />}
        </div>
      </div>
    </main>
  );
}
