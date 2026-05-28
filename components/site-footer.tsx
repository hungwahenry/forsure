import Link from 'next/link';
import { getFooterLinks } from '@/lib/cms/server';

interface SiteFooterProps {
  floating?: boolean;
  tone?: 'default' | 'brand';
}

export async function SiteFooter({
  floating = false,
  tone = 'default',
}: SiteFooterProps) {
  const links = await getFooterLinks();

  const isBrand = tone === 'brand';

  let footerClass: string;
  if (floating) {
    footerClass = 'mt-4 sm:absolute sm:inset-x-0 sm:bottom-0 sm:z-10 sm:mt-0';
  } else if (isBrand) {
    footerClass = 'relative z-10 text-primary-foreground';
  } else {
    footerClass = 'border-border/60 border-t';
  }

  const linkClass = isBrand
    ? 'text-primary-foreground/80 hover:text-primary-foreground transition-colors'
    : 'text-muted-foreground hover:text-foreground transition-colors';

  const copyClass = isBrand
    ? 'text-primary-foreground/60 w-full text-center text-xs sm:w-auto'
    : 'text-muted-foreground/70 w-full text-center text-xs sm:w-auto';

  return (
    <footer className={footerClass}>
      <div
        className={`mx-auto flex w-full max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-1.5 px-6 py-6 text-sm ${isBrand ? '' : 'text-muted-foreground'}`}
      >
        {links.map((link) => (
          <Link key={link.slug} href={`/p/${link.slug}`} className={linkClass}>
            {link.title}
          </Link>
        ))}
        <span className={copyClass}>© 2026 Issorite</span>
      </div>
    </footer>
  );
}
