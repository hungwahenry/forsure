'use client';

import * as React from 'react';

const ACTIVITIES = [
  { emoji: '☕', label: 'grab coffee' },
  { emoji: '🎾', label: 'play tennis' },
  { emoji: '🎬', label: 'catch a movie' },
  { emoji: '🥾', label: 'go for a hike' },
  { emoji: '🍜', label: 'get ramen' },
  { emoji: '🎨', label: 'try pottery' },
  { emoji: '🏀', label: 'shoot hoops' },
  { emoji: '🎶', label: 'see live music' },
  { emoji: '🧗', label: 'go climbing' },
  { emoji: '🍳', label: 'do brunch' },
  { emoji: '📸', label: 'take a photo walk' },
  { emoji: '🎳', label: 'go bowling' },
  { emoji: '🌅', label: 'catch the sunrise' },
  { emoji: '🧋', label: 'get boba' },
  { emoji: '🎤', label: 'do karaoke' },
  { emoji: '🛹', label: 'go skating' },
];

const INTERVAL = 2200;

/** "find someone to ☕ grab coffee" — the activity line cycles at random. */
export function CyclingTagline() {
  const [index, setIndex] = React.useState(() =>
    Math.floor(Math.random() * ACTIVITIES.length),
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => {
        let next = current;
        while (next === current) {
          next = Math.floor(Math.random() * ACTIVITIES.length);
        }
        return next;
      });
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const activity = ACTIVITIES[index];

  return (
    <div className="text-2xl leading-tight sm:text-3xl">
      <p className="text-muted-foreground">find someone to</p>
      <p className="mt-1">
        <span
          key={index}
          className="text-foreground animate-in fade-in slide-in-from-bottom-2 inline-block font-semibold duration-300"
        >
          {activity.emoji} {activity.label}
        </span>
      </p>
    </div>
  );
}
