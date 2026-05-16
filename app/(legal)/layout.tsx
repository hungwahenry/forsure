import { SiteFooter } from '@/components/site-footer';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="border-border/60 border-b">
        <div className="mx-auto flex w-full max-w-3xl items-center px-6 py-5">
          <Link href="/" aria-label="forsure home">
            <Image
              src="/wordmark.png"
              alt="forsure"
              width={1800}
              height={500}
              priority
              className="h-7 w-auto select-none"
            />
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 sm:py-16">
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
