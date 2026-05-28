import { ActivityCollage } from '@/components/activity-collage';
import { FinalCta } from '@/components/landing/final-cta';
import { Hero } from '@/components/landing/hero';
import { MomentsStack } from '@/components/landing/moments-stack';
import { SiteFooter } from '@/components/site-footer';

export default function Page() {
  return (
    <main className="bg-background text-foreground min-h-svh">
      <Hero />
      <MomentsStack />
      <div className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <ActivityCollage />
        <FinalCta />
        <SiteFooter tone="brand" />
      </div>
    </main>
  );
}
