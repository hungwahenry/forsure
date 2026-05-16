import { CONTACT_EMAIL, LEGAL_LAST_UPDATED, OPERATOR } from '@/lib/legal';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support — forsure',
  description: 'Get help with forsure — contact, common questions, and safety.',
};

export default function SupportPage() {
  return (
    <article className="legal-content">
      <p className="legal-eyebrow">Last updated {LEGAL_LAST_UPDATED}</p>
      <h1>Support</h1>

      <p>
        Need a hand with forsure? We&rsquo;re happy to help.
      </p>

      <h2>Contact us</h2>
      <p>
        Email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and
        we&rsquo;ll get back to you as soon as we can — usually within a couple
        of business days. To help us help you faster, include the email
        address on your account and a clear description of the issue.
      </p>

      <h2>Common topics</h2>

      <h3>Signing in</h3>
      <p>
        forsure uses passwordless sign-in. Enter your email and we&rsquo;ll
        send a one-time code. If the code doesn&rsquo;t arrive, check your spam
        folder, make sure the email address is correct, and request a new code
        after a short wait.
      </p>

      <h3>Notifications</h3>
      <p>
        If you&rsquo;re not receiving push notifications, make sure
        notifications are enabled for forsure in your device settings, then
        check your in-app notification preferences. You can fine-tune which
        notifications you get there.
      </p>

      <h3>Reporting and blocking</h3>
      <p>
        You can report any user, activity, message, memory, or venue, and block
        any user, directly in the app. We review reports and act on
        objectionable content within 24 hours. See our{' '}
        <Link href="/guidelines">Community Guidelines</Link> for what&rsquo;s
        allowed.
      </p>

      <h3>Safety</h3>
      <p>
        forsure helps you meet people in person — always meet in public, tell a
        friend your plans, and trust your instincts. If you ever feel unsafe,
        leave and contact local emergency services. To report a safety or
        child-safety concern, see our{' '}
        <Link href="/child-safety">Child Safety Standards</Link> or email us
        directly.
      </p>

      <h3>Your data and account</h3>
      <p>
        You can export your data or delete your account from the app&rsquo;s
        settings. See <Link href="/account-deletion">Account &amp; Data
        Deletion</Link> for the steps and the{' '}
        <Link href="/privacy">Privacy Policy</Link> for how we handle your
        information.
      </p>

      <h2>More information</h2>
      <ul>
        <li>
          <Link href="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/terms">Terms of Service</Link>
        </li>
        <li>
          <Link href="/guidelines">Community Guidelines</Link>
        </li>
        <li>
          <Link href="/child-safety">Child Safety Standards</Link>
        </li>
        <li>
          <Link href="/account-deletion">Account &amp; Data Deletion</Link>
        </li>
      </ul>

      <p>
        forsure is operated by {OPERATOR}. For anything not covered here, reach
        us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </article>
  );
}
