import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { format } from 'date-fns';
import { getPublicPage } from '@/lib/cms/server';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const page = await getPublicPage(slug);
    return { title: `${page.title} — forsure` };
  } catch {
    return { title: 'Not found' };
  }
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  let page;
  try {
    page = await getPublicPage(slug);
  } catch {
    notFound();
  }

  return (
    <article className="legal-content">
      <p className="legal-eyebrow">
        Last updated {format(new Date(page.updatedAt), 'MMMM d, yyyy')}
      </p>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.bodyHtml }} />
    </article>
  );
}
