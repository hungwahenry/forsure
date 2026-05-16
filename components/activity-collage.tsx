import type { CSSProperties } from 'react';

interface CollageCard {
  user: string;
  emoji: string;
  activity: string;
  place: string;
  /** Absolute position + tilt. */
  style: CSSProperties;
  /** Drift timing so cards don't move in lockstep. */
  duration: number;
  delay: number;
  /** Hidden on small screens to keep the phone viewport uncluttered. */
  desktopOnly?: boolean;
}

// Two flanking columns of 6 — the centre stays clear for the headline.
const CARDS: CollageCard[] = [
  // Left column.
  {
    user: 'maya', emoji: '☕', activity: 'grab coffee', place: 'blue bottle',
    style: { top: '3%', left: '-4%', transform: 'rotate(-7deg)' },
    duration: 7, delay: 0,
  },
  {
    user: 'ana', emoji: '🎬', activity: 'catch a movie', place: 'the rooftop',
    style: { top: '19%', left: '-6%', transform: 'rotate(5deg)' },
    duration: 8.4, delay: 0.7, desktopOnly: true,
  },
  {
    user: 'sam', emoji: '🍜', activity: 'get ramen', place: 'ippudo',
    style: { top: '35%', left: '-3%', transform: 'rotate(6deg)' },
    duration: 7.8, delay: 1.1,
  },
  {
    user: 'leo', emoji: '🌆', activity: 'see the sunset', place: 'the pier',
    style: { top: '52%', left: '-6%', transform: 'rotate(-5deg)' },
    duration: 9, delay: 0.3, desktopOnly: true,
  },
  {
    user: 'zara', emoji: '🍣', activity: 'try sushi', place: 'tokyo table',
    style: { top: '68%', left: '-4%', transform: 'rotate(7deg)' },
    duration: 8.2, delay: 1.3, desktopOnly: true,
  },
  {
    user: 'priya', emoji: '🧋', activity: 'get boba', place: 'chatime',
    style: { top: '84%', left: '0%', transform: 'rotate(-6deg)' },
    duration: 7.5, delay: 0.5,
  },
  // Right column.
  {
    user: 'theo', emoji: '🎾', activity: 'play tennis', place: 'the courts',
    style: { top: '9%', right: '-4%', transform: 'rotate(7deg)' },
    duration: 8.6, delay: 0.4,
  },
  {
    user: 'jules', emoji: '🥾', activity: 'go for a hike', place: 'eagle trail',
    style: { top: '25%', right: '-6%', transform: 'rotate(-6deg)' },
    duration: 9.2, delay: 1, desktopOnly: true,
  },
  {
    user: 'noor', emoji: '🎨', activity: 'try pottery', place: 'the studio',
    style: { top: '42%', right: '-3%', transform: 'rotate(5deg)' },
    duration: 7.6, delay: 0.2,
  },
  {
    user: 'kai', emoji: '🎶', activity: 'see live music', place: 'the basement',
    style: { top: '58%', right: '-6%', transform: 'rotate(-7deg)' },
    duration: 8.9, delay: 0.8, desktopOnly: true,
  },
  {
    user: 'omar', emoji: '🏀', activity: 'shoot hoops', place: 'the court',
    style: { top: '74%', right: '-4%', transform: 'rotate(6deg)' },
    duration: 7.9, delay: 1.4, desktopOnly: true,
  },
  {
    user: 'iris', emoji: '🛹', activity: 'go skating', place: 'the park',
    style: { top: '90%', right: '1%', transform: 'rotate(-5deg)' },
    duration: 8.3, delay: 0.6,
  },
];

function avatarUrl(seed: string): string {
  return `https://api.dicebear.com/9.x/thumbs/png?seed=${seed}&size=96`;
}

function Card({ card }: { card: CollageCard }) {
  return (
    <div
      className={card.desktopOnly ? 'absolute hidden md:block' : 'absolute'}
      style={card.style}
    >
      {/* Drift lives on its own layer so it never fights the tilt transform. */}
      <div
        style={{
          animation: `drift ${card.duration}s ease-in-out infinite`,
          animationDelay: `${card.delay}s`,
        }}
      >
        <div className="bg-card/90 border-border w-[15rem] rounded-2xl border p-4 shadow-xl backdrop-blur-sm">
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm leading-snug">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatarUrl(card.user)}
              alt=""
              className="bg-muted mr-0.5 size-6 rounded-full"
            />
            <span className="text-primary font-medium">@{card.user}</span>
            <span className="text-muted-foreground">wants to</span>
            <span>{card.emoji}</span>
            <span className="text-foreground font-semibold">
              {card.activity}
            </span>
            <span className="text-muted-foreground">at</span>
            <span className="text-primary">{card.place}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Decorative backdrop: sample activity cards drifting around the viewport. */
export function ActivityCollage() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {CARDS.map((card) => (
        <Card key={card.user} card={card} />
      ))}
    </div>
  );
}
