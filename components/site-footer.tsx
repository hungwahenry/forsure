import Link from 'next/link';
import { getFooterLinks } from '@/lib/cms/server';

export async function SiteFooter({ floating = false }: { floating?: boolean }) {
  const links = await getFooterLinks();

  return (
    <footer
      className={
        floating
          ? 'mt-4 sm:absolute sm:inset-x-0 sm:bottom-0 sm:z-10 sm:mt-0'
          : 'border-border/60 mt-8 border-t'
      }
    >
      <div className="text-muted-foreground mx-auto flex w-full max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-1.5 px-6 py-6 text-sm">
        {links.map((link) => (
          <Link
            key={link.slug}
            href={`/p/${link.slug}`}
            className="hover:text-foreground transition-colors"
          >
            {link.title}
          </Link>
        ))}
        <span className="text-muted-foreground/70 w-full text-center text-xs sm:w-auto">
          © 2026 Issorite
        </span>
      </div>
    </footer>
  );
}
