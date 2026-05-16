import Link from 'next/link';

const LINKS = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/guidelines', label: 'Community Guidelines' },
  { href: '/child-safety', label: 'Child Safety' },
  { href: '/account-deletion', label: 'Delete Account' },
  { href: '/support', label: 'Support' },
];

export function SiteFooter({ floating = false }: { floating?: boolean }) {
  return (
    <footer
      className={
        floating
          ? 'absolute inset-x-0 bottom-0 z-10'
          : 'border-border/60 mt-8 border-t'
      }
    >
      <div className="text-muted-foreground mx-auto flex w-full max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-1.5 px-6 py-6 text-sm">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <span className="text-muted-foreground/70 w-full text-center text-xs sm:w-auto">
          © 2026 Issorite
        </span>
      </div>
    </footer>
  );
}
