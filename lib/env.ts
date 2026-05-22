function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export const env = {
  BACKEND_API_URL: required('BACKEND_API_URL', process.env.BACKEND_API_URL),
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://forsure.fyi',
} as const;
