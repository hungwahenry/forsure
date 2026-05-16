'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { submitWaitlist } from '@/lib/waitlist';

type Status = 'idle' | 'loading' | 'done';

export function WaitlistForm() {
  const [email, setEmail] = React.useState('');
  const [website, setWebsite] = React.useState(''); // honeypot
  const [status, setStatus] = React.useState<Status>('idle');
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'loading' || !email.trim()) return;
    setError(null);
    setStatus('loading');
    try {
      await submitWaitlist({ email: email.trim(), website });
      setStatus('done');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('idle');
    }
  };

  if (status === 'done') {
    return (
      <div className="w-full max-w-sm text-center">
        <p className="text-foreground text-lg font-semibold">
          you&apos;re on the list.
        </p>
        <p className="text-muted-foreground mt-1 text-sm">
          we&apos;ll email you the moment forsure is ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm">
      <div className="flex gap-2">
        <Input
          type="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className="flex-1"
        />
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'joining…' : 'join waitlist'}
        </Button>
      </div>

      {/* Honeypot — hidden from real users; bots fill it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {error ? (
        <p className="text-destructive mt-2 text-sm">{error}</p>
      ) : (
        <p className="text-muted-foreground mt-2 text-sm">
          be first to know when forsure launches near you.
        </p>
      )}
    </form>
  );
}
