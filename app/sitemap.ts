import type { MetadataRoute } from 'next';
import { getFooterLinks } from '@/lib/cms/server';
import { env } from '@/lib/env';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.SITE_URL.replace(/\/$/, '');
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, priority: 1 },
  ];

  const links = await getFooterLinks();
  const cmsRoutes: MetadataRoute.Sitemap = links.map((l) => ({
    url: `${base}/p/${l.slug}`,
    lastModified: now,
    priority: 0.3,
  }));

  return [...staticRoutes, ...cmsRoutes];
}
