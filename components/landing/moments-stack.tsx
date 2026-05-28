import { ProductMoment } from './product-moment';

const MOMENTS = [
  {
    index: '01',
    eyebrow: 'find',
    headline: 'see what’s happening nearby.',
    body: 'open the app, scroll your local feed for activities people are putting together right now, or post your own. all within a few blocks of where you are.',
    imageUrl: '/landing/find.jpg',
    imageAlt: 'phone screen showing a local feed',
  },
  {
    index: '02',
    eyebrow: 'plan',
    headline: 'everyone in one chat. sort the small things.',
    body: 'tap join and you’re in the group. share the time, lock the place, swap memes about who’s actually showing up. all the back-and-forth in one room.',
    imageUrl: '/landing/plan.jpg',
    imageAlt: 'friends sharing a phone screen',
  },
  {
    index: '03',
    eyebrow: 'pull up',
    headline: 'show up. that’s it.',
    body: 'we ping you an hour before, then thirty minutes before. you just have to get there. no group-text math, no checking five different apps.',
    imageUrl: '/landing/pull-up.jpg',
    imageAlt: 'friends arriving somewhere at golden hour',
  },
  {
    index: '04',
    eyebrow: 'remember',
    headline: 'post the bits worth keeping.',
    body: 'afterwards, drop photos for everyone who was there. keep it to the group, or share it with your city. your call.',
    imageUrl: '/landing/remember.jpg',
    imageAlt: 'instant photos laid out on a table',
  },
];

const BASE_TOP_REM = 5;
const STAGGER_REM = 2.5;

export function MomentsStack() {
  return (
    <section
      id="how-it-works"
      className="relative bg-brand-tint py-16 sm:py-24"
    >
      <div className="space-y-6">
        {MOMENTS.map((m, i) => (
          <ProductMoment
            key={m.index}
            {...m}
            stickyTopRem={BASE_TOP_REM + i * STAGGER_REM}
            zIndex={10 + i}
          />
        ))}
      </div>
      <div className="h-[20vh]" aria-hidden />
    </section>
  );
}
