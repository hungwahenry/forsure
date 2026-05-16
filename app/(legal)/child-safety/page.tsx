import {
  CONTACT_EMAIL,
  LEGAL_LAST_UPDATED,
  MIN_AGE,
  OPERATOR,
} from '@/lib/legal';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Child Safety Standards — forsure',
  description:
    'forsure has zero tolerance for child sexual abuse and exploitation. Our standards and how we act on it.',
};

export default function ChildSafetyPage() {
  return (
    <article className="legal-content">
      <p className="legal-eyebrow">Last updated {LEGAL_LAST_UPDATED}</p>
      <h1>Child Safety Standards</h1>

      <p>
        forsure and its operator, {OPERATOR}, are committed to preventing child
        sexual abuse and exploitation. We have a{' '}
        <strong>zero-tolerance policy</strong> toward child sexual abuse
        material (CSAM) and any content or conduct that sexualizes, endangers,
        or exploits minors. This page describes our standards for preventing
        child sexual abuse and exploitation (CSAE), in line with the
        requirements of Google Play and Apple.
      </p>

      <h2>forsure is for adults only</h2>
      <p>
        forsure is strictly for adults aged {MIN_AGE} and over. We collect each
        user&rsquo;s date of birth during sign-up and block anyone under our
        minimum age from completing onboarding. forsure is not designed for,
        marketed to, or intended for use by children.
      </p>

      <h2>What is prohibited</h2>
      <p>The following are absolutely forbidden on forsure:</p>
      <ul>
        <li>
          Any child sexual abuse material (CSAM), or content that sexualizes a
          minor in any way.
        </li>
        <li>
          Grooming, sexual solicitation of a minor, or attempting to make
          contact with a minor for sexual purposes.
        </li>
        <li>
          Sextortion, trafficking, or any exploitation of a minor.
        </li>
        <li>
          Use of forsure by anyone under {MIN_AGE}, including adults helping a
          minor create or use an account.
        </li>
      </ul>

      <h2>How we act on it</h2>
      <p>When we become aware of CSAE content or conduct, we will:</p>
      <ul>
        <li>Remove the content immediately.</li>
        <li>
          Permanently ban the account(s) involved and block the people behind
          them from returning.
        </li>
        <li>
          Preserve relevant evidence and{' '}
          <strong>
            report to law enforcement and the appropriate authorities
          </strong>
          , including child-protection bodies and hotlines such as the
          National Center for Missing &amp; Exploited Children (NCMEC), as
          required by law.
        </li>
        <li>
          Cooperate fully with law enforcement investigations.
        </li>
      </ul>

      <h2>Reporting child safety concerns</h2>
      <p>
        If you encounter content or behavior that endangers a minor, report it
        right away:
      </p>
      <ul>
        <li>
          <strong>In the app</strong> — use the report option on the user,
          message, activity, memory, or venue. Reports are reviewed urgently.
        </li>
        <li>
          <strong>By email</strong> — contact our child-safety team at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the
          subject &ldquo;Child Safety&rdquo;.
        </li>
      </ul>
      <p>
        If a child is in immediate danger, contact your local emergency
        services first.
      </p>

      <h2>Our child-safety practices</h2>
      <ul>
        <li>
          An adults-only ({MIN_AGE}+) age requirement, checked at sign-up.
        </li>
        <li>
          In-app reporting and blocking tools available on all user content.
        </li>
        <li>
          A moderation team that reviews reports and acts on objectionable
          content within 24 hours, and immediately for child-safety reports.
        </li>
        <li>
          Prohibitions on CSAE set out in our{' '}
          <Link href="/terms">Terms of Service</Link> and{' '}
          <Link href="/guidelines">Community Guidelines</Link>.
        </li>
        <li>
          A standing commitment to report CSAE to the relevant authorities.
        </li>
      </ul>

      <h2>Contact</h2>
      <p>
        Our child-safety point of contact is {OPERATOR}, reachable at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We review and
        respond to child-safety reports as a matter of urgency.
      </p>
    </article>
  );
}
