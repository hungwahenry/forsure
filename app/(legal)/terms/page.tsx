import {
  CONTACT_EMAIL,
  LEGAL_LAST_UPDATED,
  MIN_AGE,
  OPERATOR,
} from '@/lib/legal';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — forsure',
  description:
    'The terms and conditions for using the forsure app, including acceptable use and safety rules.',
};

export default function TermsPage() {
  return (
    <article className="legal-content">
      <p className="legal-eyebrow">Last updated {LEGAL_LAST_UPDATED}</p>
      <h1>Terms of Service</h1>

      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) are an agreement between
        you and {OPERATOR} (&ldquo;{OPERATOR}&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;), the operator of the forsure app
        (&ldquo;forsure&rdquo; or the &ldquo;Service&rdquo;). By creating an
        account or using forsure, you agree to these Terms, our{' '}
        <Link href="/privacy">Privacy Policy</Link>, and our{' '}
        <Link href="/guidelines">Community Guidelines</Link>. If you do not
        agree, do not use forsure.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least {MIN_AGE} years old to use forsure. By using the
        Service you represent that you are {MIN_AGE} or older, that you can
        form a binding contract, and that you are not barred from using the
        Service under any applicable law. forsure is for personal,
        non-commercial use, except for approved business accounts.
      </p>

      <h2>2. Your account</h2>
      <p>
        forsure uses passwordless sign-in with a one-time code sent to your
        email. You are responsible for keeping access to your email secure and
        for all activity on your account. Provide accurate information, keep it
        up to date, and do not create an account for anyone else or maintain
        more than one account to evade enforcement. Notify us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> if you suspect
        unauthorized use.
      </p>

      <h2>3. What forsure is</h2>
      <p>
        forsure lets you post activities you&rsquo;d like to do, discover
        activities posted by people near you, join them, chat with other
        participants, and share &ldquo;memories&rdquo; afterwards. forsure is a
        platform that helps people connect — we do not host the activities,
        supervise meetings, or vet the people you meet.
      </p>

      <h2>4. Meeting people in person — your safety</h2>
      <p>
        <strong>
          forsure is used to arrange meetings with other people in the real
          world. You do this at your own risk.
        </strong>{' '}
        We do not perform criminal background checks or identity verification
        on users. We do not vouch for any user, activity, or venue. You are
        solely responsible for your interactions with others.
      </p>
      <p>Use common sense and stay safe:</p>
      <ul>
        <li>Meet in public places, especially the first time.</li>
        <li>Tell a friend or family member where you are going.</li>
        <li>Do not share sensitive personal or financial information.</li>
        <li>
          Trust your instincts and leave any situation that feels unsafe.
        </li>
        <li>
          Contact local emergency services if you are ever in danger.
        </li>
      </ul>

      <h2>5. Your content</h2>
      <p>
        &ldquo;User Content&rdquo; means anything you post or send on forsure —
        activities, chat messages, images, memories, captions, your profile,
        and reports. You keep ownership of your User Content. You grant{' '}
        {OPERATOR} a worldwide, non-exclusive, royalty-free license to host,
        store, reproduce, display, and distribute your User Content solely to
        operate, provide, and improve the Service. This license ends when you
        delete the content or your account, except for content others have
        already saved or copies retained as required for legal or safety
        reasons.
      </p>
      <p>
        You are responsible for your User Content and represent that you have
        the rights to post it and that it does not violate these Terms, our
        Community Guidelines, or the law.
      </p>

      <h2>6. Acceptable use — zero tolerance for objectionable content</h2>
      <p>
        forsure has a <strong>zero-tolerance policy</strong> for objectionable
        content and abusive behavior. You agree not to use forsure to create,
        post, send, or do any of the following:
      </p>
      <ul>
        <li>
          Harass, bully, threaten, stalk, intimidate, or impersonate anyone.
        </li>
        <li>
          Post hate speech or content that attacks or demeans people based on
          race, ethnicity, national origin, religion, sex, gender, sexual
          orientation, disability, or any protected characteristic.
        </li>
        <li>
          Post sexually explicit content, nudity, or content that sexualizes
          others; or use forsure for sexual solicitation, prostitution, or
          escort services.
        </li>
        <li>
          Post content that sexualizes, endangers, or exploits minors in any
          way. This is reported to the authorities — see our{' '}
          <Link href="/child-safety">Child Safety Standards</Link>.
        </li>
        <li>
          Promote, organize, or facilitate violence, self-harm, terrorism,
          illegal drugs, weapons, fraud, scams, or any other illegal activity.
        </li>
        <li>
          Spam, advertise, recruit, or promote schemes; scrape or harvest data;
          or use bots or automated access.
        </li>
        <li>
          Share other people&rsquo;s private or identifying information
          without their consent.
        </li>
        <li>
          Post false, misleading, or deceptive content, fake profiles, or
          fake activities.
        </li>
        <li>
          Interfere with, disrupt, reverse-engineer, or attempt to gain
          unauthorized access to the Service or its security.
        </li>
        <li>
          Infringe anyone&rsquo;s intellectual property or other rights.
        </li>
      </ul>

      <h2>7. Reporting, blocking, and moderation</h2>
      <p>
        We give every user tools to stay in control:
      </p>
      <ul>
        <li>
          <strong>Report</strong> — you can report any user, activity, chat
          message, memory, or venue from within the app.
        </li>
        <li>
          <strong>Block</strong> — you can block any user, which hides their
          content from you and prevents further contact.
        </li>
      </ul>
      <p>
        We review reports of objectionable content and abusive behavior and{' '}
        <strong>
          act on them within 24 hours
        </strong>{' '}
        — removing content and/or suspending or banning the users responsible.
        We may remove any content or restrict, suspend, or terminate any
        account at our discretion, with or without notice, when we believe
        these Terms or our Community Guidelines have been violated. We are not
        obligated to monitor all content, but we may do so.
      </p>

      <h2>8. Business accounts and paid features</h2>
      <p>
        Businesses may use forsure to manage venues and purchase optional paid
        features such as subscriptions and activity boosts. Paid features are
        billed through Stripe. Fees are described at the point of purchase.
        Unless required by law or stated otherwise, payments are
        non-refundable. We may change pricing or features on a prospective
        basis. Misuse of business features may result in suspension.
      </p>

      <h2>9. Intellectual property</h2>
      <p>
        forsure, its name, logo, design, and software are owned by {OPERATOR}{' '}
        and protected by intellectual property laws. We grant you a limited,
        personal, non-transferable, revocable license to use the app as
        intended by these Terms. You may not copy, modify, distribute, sell, or
        create derivative works of the Service without our permission.
      </p>

      <h2>10. Third-party services</h2>
      <p>
        forsure relies on third-party services (for example, place data,
        payments, email, and push notifications). We are not responsible for
        third-party services, and your use of them may be subject to their own
        terms.
      </p>

      <h2>11. Termination</h2>
      <p>
        You may stop using forsure and delete your account at any time. We may
        suspend or terminate your access if you violate these Terms, if
        required by law, or to protect the Service or other users. Sections
        that by their nature should survive termination — including content
        license terms for already-shared content, disclaimers, limitation of
        liability, and indemnification — will survive.
      </p>

      <h2>12. Disclaimers</h2>
      <p>
        forsure is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
        without warranties of any kind, whether express or implied, to the
        fullest extent permitted by law. We do not warrant that the Service
        will be uninterrupted, secure, or error-free, or that any user,
        activity, or meeting will meet your expectations or be safe.
      </p>

      <h2>13. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {OPERATOR} and its officers,
        employees, and partners will not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or for any
        loss arising out of your use of — or inability to use — forsure,
        including any interactions or meetings with other users. Where
        liability cannot be excluded, it is limited to the greater of the
        amount you paid us in the 12 months before the claim or USD 100.
      </p>

      <h2>14. Indemnification</h2>
      <p>
        You agree to indemnify and hold {OPERATOR} harmless from any claims,
        damages, losses, and expenses (including reasonable legal fees) arising
        from your User Content, your use of the Service, your interactions with
        other users, or your violation of these Terms or any law.
      </p>

      <h2>15. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of the jurisdiction in which{' '}
        {OPERATOR} is established, without regard to conflict-of-law rules. You
        agree that the courts of that jurisdiction will have exclusive
        jurisdiction over any dispute arising from these Terms or your use of
        forsure, unless a mandatory law in your country of residence provides
        otherwise.
      </p>

      <h2>16. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. When we make material
        changes, we will update the &ldquo;Last updated&rdquo; date and, where
        appropriate, notify you in the app. Your continued use of forsure after
        an update means you accept the revised Terms.
      </p>

      <h2>17. Contact us</h2>
      <p>
        Questions about these Terms? Contact {OPERATOR} at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </article>
  );
}
