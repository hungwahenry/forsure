import {
  CONTACT_EMAIL,
  LEGAL_LAST_UPDATED,
  MIN_AGE,
  OPERATOR,
} from '@/lib/legal';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — forsure',
  description:
    'How forsure collects, uses, shares, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <article className="legal-content">
      <p className="legal-eyebrow">Last updated {LEGAL_LAST_UPDATED}</p>
      <h1>Privacy Policy</h1>

      <p>
        forsure is a local hangouts app — you post something you want to do,
        other people nearby join in, and you meet up in person. This Privacy
        Policy explains what personal information forsure collects, how we use
        it, who we share it with, and the choices and rights you have.
      </p>
      <p>
        forsure is operated by {OPERATOR} (&ldquo;{OPERATOR}&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;). By creating an account or using
        forsure, you agree to this policy. If you do not agree, please do not
        use the app.
      </p>

      <h2>1. Who can use forsure</h2>
      <p>
        forsure is only for adults. You must be at least {MIN_AGE} years old to
        create an account or use the app. forsure is not intended for anyone
        under {MIN_AGE}, and we do not knowingly collect information from them.
        See our{' '}
        <Link href="/child-safety">Child Safety Standards</Link> for more.
      </p>

      <h2>2. Information we collect</h2>

      <h3>Information you give us</h3>
      <ul>
        <li>
          <strong>Account information.</strong> Your email address. forsure
          uses passwordless sign-in: we email you a one-time code to verify
          it. We do not collect a password or phone number.
        </li>
        <li>
          <strong>Profile information.</strong> A username, display name, an
          optional bio, your date of birth, your gender (you may choose
          &ldquo;prefer not to say&rdquo;), and a profile photo.
        </li>
        <li>
          <strong>Your location.</strong> During onboarding you set a base
          location (approximate area where you want to find activities),
          stored as precise coordinates. You also choose specific places when
          you create or join activities.
        </li>
        <li>
          <strong>Content you create.</strong> Activities you post (title,
          emoji, time, place, capacity, preferences), chat messages and images
          you send, and &ldquo;memories&rdquo; — photos and captions you share
          from a hangout.
        </li>
        <li>
          <strong>Reports and safety information.</strong> If you report a
          person or content, we collect the reason and any details you
          provide. If you block someone, we record that.
        </li>
        <li>
          <strong>Support communications.</strong> Messages you send us by
          email.
        </li>
      </ul>

      <h3>Information we collect automatically</h3>
      <ul>
        <li>
          <strong>Device and technical information.</strong> Your device
          push-notification token, IP address, browser/device type and user
          agent, app version, and sign-in timestamps.
        </li>
        <li>
          <strong>Diagnostic information.</strong> Crash reports and error
          logs that help us find and fix bugs.
        </li>
        <li>
          <strong>Usage activity.</strong> Activities you host, join, and
          complete, messages and memories you post, and similar in-app
          counters.
        </li>
      </ul>

      <h3>Business accounts</h3>
      <p>
        If you manage a business on forsure, we also collect business details
        (name, support email and phone, logo and venue information) and
        payment-related identifiers. Card payments are processed by Stripe —{' '}
        <strong>
          we never see or store your full card number
        </strong>
        ; we only keep Stripe customer and subscription identifiers.
      </p>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To create and operate your account and profile.</li>
        <li>
          To run the core service — showing you activities near you, letting
          you host and join hangouts, and powering chat and memories.
        </li>
        <li>
          To send you one-time sign-in codes and account emails (such as a
          link to your data export).
        </li>
        <li>
          To send push notifications you have not turned off (you can manage
          these in the app).
        </li>
        <li>
          To keep forsure safe — reviewing reports, moderating content,
          detecting abuse, and enforcing our{' '}
          <Link href="/terms">Terms of Service</Link> and{' '}
          <Link href="/guidelines">Community Guidelines</Link>.
        </li>
        <li>To provide customer support and respond to your requests.</li>
        <li>
          To fix bugs, understand how the app is used, and improve forsure.
        </li>
        <li>
          To process payments and manage subscriptions for business accounts.
        </li>
        <li>
          To comply with the law and protect the rights, safety, and property
          of our users, the public, and {OPERATOR}.
        </li>
      </ul>

      <h2>4. How we share information</h2>
      <p>
        We do <strong>not</strong> sell your personal information. We share it
        only in these ways:
      </p>
      <ul>
        <li>
          <strong>With other users.</strong> Your profile (username, display
          name, photo, bio), the activities you post, your chat messages, and
          your memories are visible to other users according to each
          feature&rsquo;s visibility — for example, chat is visible to the
          participants of that activity, and a memory may be set to
          participants-only or public.
        </li>
        <li>
          <strong>With service providers</strong> who process data on our
          behalf, under contract, only to provide their service to us:
          <ul>
            <li>
              <strong>Resend</strong> — sends our transactional emails (sign-in
              codes, account emails). Receives your email address.
            </li>
            <li>
              <strong>Expo</strong> — delivers push notifications. Receives
              your device push token and notification content.
            </li>
            <li>
              <strong>Google (Places API)</strong> — powers place search and
              details. Receives your search query and approximate coordinates.
            </li>
            <li>
              <strong>Sentry</strong> — collects crash and error reports.
            </li>
            <li>
              <strong>Cloud storage provider</strong> — stores uploaded photos
              (profile, chat images, memories) and data-export files.
            </li>
            <li>
              <strong>Stripe</strong> — processes payments for business
              accounts.
            </li>
            <li>
              <strong>Cloudflare (Turnstile)</strong> — bot protection on our
              marketing-site contact form.
            </li>
          </ul>
        </li>
        <li>
          <strong>For safety and legal reasons.</strong> We may share
          information if we believe it is reasonably necessary to comply with a
          law or legal request, enforce our terms, or protect the safety,
          rights, or property of any person.
        </li>
        <li>
          <strong>In a business transfer.</strong> If {OPERATOR} is involved in
          a merger, acquisition, or sale of assets, your information may be
          transferred as part of that transaction.
        </li>
      </ul>

      <h2>5. Location information</h2>
      <p>
        forsure depends on location to connect you with activities near you. We
        use the base location you set and the places attached to activities.
        You control location permission through your device settings; if you
        turn it off, location-based discovery will not work. Place search is
        powered by Google and is subject to{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&rsquo;s Privacy Policy
        </a>
        .
      </p>

      <h2>6. Push notifications</h2>
      <p>
        With your permission, forsure sends push notifications about your
        activities, chats, and reminders. We store a device token to deliver
        them. You can turn notifications off entirely in your device settings,
        or fine-tune them per type in the app&rsquo;s notification
        preferences.
      </p>

      <h2>7. Your rights and choices</h2>
      <ul>
        <li>
          <strong>Access and export.</strong> You can request a copy of your
          data from within the app; we prepare a file and email you a download
          link.
        </li>
        <li>
          <strong>Correction.</strong> You can edit your profile information at
          any time in the app.
        </li>
        <li>
          <strong>Deletion.</strong> You can delete your account from the app.
          See our{' '}
          <Link href="/account-deletion">Account &amp; Data Deletion</Link>{' '}
          page for exactly what is removed.
        </li>
        <li>
          <strong>Blocking and reporting.</strong> You can block users and
          report people or content directly in the app.
        </li>
        <li>
          <strong>Notifications.</strong> You can manage push and email
          notification preferences in the app.
        </li>
      </ul>
      <p>
        Depending on where you live, you may also have rights under data
        protection laws to object to or restrict certain processing. To
        exercise any right, contact us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will not
        discriminate against you for exercising your rights.
      </p>

      <h2>8. Data retention</h2>
      <p>
        We keep your information for as long as your account is active. When
        you delete your account, we remove your profile, photos, and memories,
        and we remove the content of your chat messages. Some records are kept
        in an anonymized form — for example, an activity&rsquo;s history and
        the fact that a (now-anonymous) participant was part of it — so the
        experience of other users is not broken and so we can meet safety and
        legal obligations. Sign-in sessions expire automatically (refresh
        tokens after 30 days), and data-export files are deleted a short time
        after they are generated.
      </p>

      <h2>9. How we protect your information</h2>
      <p>
        We use industry-standard measures to protect your data, including
        encryption in transit, hashing of one-time codes and session tokens,
        and access controls. No method of transmission or storage is completely
        secure, so we cannot guarantee absolute security. Please note that chat
        messages are stored on our servers and are{' '}
        <strong>not end-to-end encrypted</strong> — our systems can process
        them for delivery, moderation, and safety.
      </p>

      <h2>10. International data transfers</h2>
      <p>
        forsure relies on service providers that may store and process data in
        countries other than your own. Where this happens, we take steps to
        ensure your information continues to be protected in line with this
        policy.
      </p>

      <h2>11. Children</h2>
      <p>
        forsure is for adults {MIN_AGE} and over only. We do not knowingly
        collect personal information from anyone under {MIN_AGE}. If we learn
        that an underage person has created an account, we will remove it. If
        you believe a minor is using forsure, contact us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we make
        material changes, we will update the &ldquo;Last updated&rdquo; date
        above and, where appropriate, notify you in the app. Your continued use
        of forsure after an update means you accept the revised policy.
      </p>

      <h2>13. Contact us</h2>
      <p>
        If you have questions about this policy or how we handle your data,
        contact {OPERATOR} at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </article>
  );
}
