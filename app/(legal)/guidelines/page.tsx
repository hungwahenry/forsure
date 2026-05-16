import {
  CONTACT_EMAIL,
  LEGAL_LAST_UPDATED,
  MIN_AGE,
} from '@/lib/legal';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Community Guidelines — forsure',
  description:
    'The rules that keep forsure a safe, friendly place to find people to do things with.',
};

export default function GuidelinesPage() {
  return (
    <article className="legal-content">
      <p className="legal-eyebrow">Last updated {LEGAL_LAST_UPDATED}</p>
      <h1>Community Guidelines</h1>

      <p>
        forsure works because people show up, are kind, and are real. These
        Community Guidelines explain what we expect from everyone and what
        isn&rsquo;t allowed. They apply to everything you do on forsure — your
        profile, activities, chats, memories, and how you treat people in
        person. Breaking them can cost you your account.
      </p>
      <p>
        These guidelines are part of our{' '}
        <Link href="/terms">Terms of Service</Link>.
      </p>

      <h2>The basics</h2>
      <ul>
        <li>
          <strong>Be real.</strong> Use your real name or a genuine handle, a
          real photo of yourself, and accurate information. No fake profiles or
          impersonation.
        </li>
        <li>
          <strong>Be kind.</strong> Treat people the way you&rsquo;d want to be
          treated — online and when you meet up.
        </li>
        <li>
          <strong>Be {MIN_AGE}+.</strong> forsure is for adults only. You must
          be at least {MIN_AGE} years old.
        </li>
        <li>
          <strong>Show up.</strong> If you join an activity, do your best to
          actually come, and let people know if plans change.
        </li>
      </ul>

      <h2>What is not allowed</h2>
      <p>
        We have zero tolerance for objectionable content and abusive behavior.
        Do not:
      </p>
      <ul>
        <li>
          <strong>Harass or bully.</strong> No threats, stalking,
          intimidation, hateful pile-ons, or unwanted contact after someone
          asks you to stop.
        </li>
        <li>
          <strong>Spread hate.</strong> No content that attacks or dehumanizes
          people based on race, ethnicity, national origin, religion, sex,
          gender, sexual orientation, disability, or any protected
          characteristic.
        </li>
        <li>
          <strong>Post sexual or explicit content.</strong> No nudity,
          pornography, or content that sexualizes others. forsure is not a
          dating or hookup app — no sexual solicitation, escort services, or
          prostitution.
        </li>
        <li>
          <strong>Endanger minors.</strong> Absolutely no content that
          sexualizes or exploits anyone under 18. We report this to the
          authorities — see our{' '}
          <Link href="/child-safety">Child Safety Standards</Link>.
        </li>
        <li>
          <strong>Promote violence or harm.</strong> No threats, no
          glorifying violence, terrorism, or self-harm, and no organizing
          dangerous or harmful activities.
        </li>
        <li>
          <strong>Break the law.</strong> No illegal drugs, weapons sales,
          fraud, theft, or any other unlawful activity.
        </li>
        <li>
          <strong>Scam or spam.</strong> No scams, phishing, pyramid schemes,
          unsolicited advertising, recruiting, or mass messaging.
        </li>
        <li>
          <strong>Violate privacy.</strong> Don&rsquo;t share other
          people&rsquo;s private information, photos, or chats without their
          consent.
        </li>
        <li>
          <strong>Misrepresent yourself.</strong> No fake profiles, no
          impersonation, no pretending to be a different age or person.
        </li>
      </ul>

      <h2>Meeting up safely</h2>
      <p>
        forsure helps you meet people in the real world. A few habits keep it
        fun and safe:
      </p>
      <ul>
        <li>Meet in public places, especially the first time.</li>
        <li>Tell a friend where you&rsquo;ll be and who you&rsquo;re meeting.</li>
        <li>Keep personal and financial details to yourself.</li>
        <li>
          Trust your gut — if something feels off, it&rsquo;s okay to leave.
        </li>
        <li>In an emergency, contact local emergency services.</li>
      </ul>

      <h2>Reporting and blocking</h2>
      <p>
        If you see something that breaks these guidelines, tell us:
      </p>
      <ul>
        <li>
          <strong>Report</strong> any person, activity, message, memory, or
          venue using the report option in the app.
        </li>
        <li>
          <strong>Block</strong> anyone you don&rsquo;t want to interact with —
          it hides their content and stops them contacting you.
        </li>
      </ul>
      <p>
        Reports are confidential. We review reports of objectionable content
        and abuse and act on them within 24 hours. You can also email us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>How we enforce</h2>
      <p>
        Depending on what happened and how serious it is, we may remove
        content, issue a warning, limit account features, suspend an account,
        or permanently ban someone. Serious violations — such as content that
        endangers minors, threats of violence, or illegal activity — lead to an
        immediate ban and, where appropriate, a report to law enforcement. We
        may act without prior notice when needed to protect our community.
      </p>

      <h2>Questions</h2>
      <p>
        If you&rsquo;re unsure about something, reach out at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Thanks for
        helping keep forsure a good place to be.
      </p>
    </article>
  );
}
