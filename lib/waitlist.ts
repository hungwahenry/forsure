interface WaitlistPayload {
  email: string;
  /** Honeypot — always empty for real users. */
  website: string;
}

export async function submitWaitlist(payload: WaitlistPayload): Promise<void> {
  const res = await fetch('/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const data = (await res.json().catch(() => null)) as {
      error?: string;
    } | null;
    throw new Error(data?.error ?? 'Could not join the waitlist.');
  }
}
