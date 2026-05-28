import Image from 'next/image';

interface ProductMomentProps {
  index: string;
  eyebrow: string;
  headline: string;
  body: string;
  imageUrl: string;
  imageAlt: string;
  stickyTopRem: number;
  zIndex: number;
}

export function ProductMoment({
  index,
  eyebrow,
  headline,
  body,
  imageUrl,
  imageAlt,
  stickyTopRem,
  zIndex,
}: ProductMomentProps) {
  return (
    <div
      className="sticky px-4 sm:px-6"
      style={{ top: `${stickyTopRem}rem`, zIndex }}
    >
      <article className="relative mx-auto h-[78svh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-border/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 72rem, 100vw"
          className="object-cover"
          draggable={false}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/55 to-black/15"
        />
        <div className="relative z-10 flex h-full flex-col justify-between p-8 text-white sm:p-12 md:p-16">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
            {index} · {eyebrow}
          </div>
          <div>
            <h2 className="text-balance max-w-2xl text-3xl font-medium leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              {headline}
            </h2>
            <p className="text-balance mt-5 max-w-md text-base text-white/85 sm:text-lg">
              {body}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
