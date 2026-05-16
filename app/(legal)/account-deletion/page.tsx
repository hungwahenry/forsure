import { CONTACT_EMAIL, LEGAL_LAST_UPDATED, OPERATOR } from '@/lib/legal';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Account & Data Deletion — forsure',
  description:
    'How to delete your forsure account and what happens to your data when you do.',
};

export default function AccountDeletionPage() {
  return (
    <article className="legal-content">
      <p className="legal-eyebrow">Last updated {LEGAL_LAST_UPDATED}</p>
      <h1>Account &amp; Data Deletion</h1>

      <p>
        You can delete your forsure account and personal data at any time. This
        page explains how to do it and exactly what happens to your
        information.
      </p>

      <h2>Delete your account from the app</h2>
      <ol>
        <li>Open the forsure app and sign in.</li>
        <li>
          Go to <strong>Settings</strong>.
        </li>
        <li>
          Choose <strong>Delete Account</strong>.
        </li>
        <li>
          Confirm your identity with the one-time code we email you, and
          confirm the deletion.
        </li>
      </ol>
      <p>
        Once confirmed, your account is deactivated immediately and deletion is
        processed. This action cannot be undone.
      </p>

      <h2>Delete your account without the app</h2>
      <p>
        If you can&rsquo;t access the app, email us from the address on your
        account at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with
        the subject &ldquo;Delete my account&rdquo;. We will verify your
        request and complete the deletion, normally within 30 days.
      </p>

      <h2>What gets deleted</h2>
      <p>When your account is deleted, we remove:</p>
      <ul>
        <li>Your profile — display name, username, bio, date of birth, and gender.</li>
        <li>Your profile photo and any other photos you uploaded.</li>
        <li>Your memories (photo posts) and their images.</li>
        <li>The contents of your chat messages, including any images.</li>
        <li>Your saved location.</li>
        <li>
          Your device push tokens, notification preferences, notifications,
          blocks, and any pending data-export files.
        </li>
        <li>Your sign-in sessions, which are revoked.</li>
      </ul>
      <p>
        Activities you are hosting that are still open are cancelled so other
        participants are not left waiting.
      </p>

      <h2>What is kept, and why</h2>
      <p>
        To keep the app working for other people and to meet safety and legal
        obligations, a small amount of information is retained in an{' '}
        <strong>anonymized</strong> form — it is no longer linked to you by
        name, email, or profile:
      </p>
      <ul>
        <li>
          The history of activities and the fact that an anonymous participant
          took part, so other users&rsquo; activity records stay intact.
        </li>
        <li>
          Chat message records with their content removed, so conversations
          others were part of don&rsquo;t break.
        </li>
        <li>
          Limited records we are required to keep — for example, information
          related to safety reports, fraud prevention, or legal compliance.
        </li>
      </ul>

      <h2>Export your data first</h2>
      <p>
        Before deleting, you can request a copy of your data from within the
        app — go to <strong>Settings</strong> and choose the data export
        option. We&rsquo;ll prepare a file and email you a download link. See
        our <Link href="/privacy">Privacy Policy</Link> for more on your data
        rights.
      </p>

      <h2>Questions</h2>
      <p>
        If you need help with deleting your account or data, contact{' '}
        {OPERATOR} at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </article>
  );
}
