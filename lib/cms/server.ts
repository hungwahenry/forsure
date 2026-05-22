import { cache } from 'react';
import { serverFetch } from '../http/server';
import type { FooterLink, PublicPage } from './types';

export const getPublicPage = cache(async (slug: string): Promise<PublicPage> => {
  return serverFetch<PublicPage>(`/pages/${encodeURIComponent(slug)}`);
});

export const getFooterLinks = cache(async (): Promise<FooterLink[]> => {
  try {
    return await serverFetch<FooterLink[]>('/pages/footer');
  } catch {
    return [];
  }
});
