"use client";

import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <main className="mx-auto w-full max-w-[800px] pt-24 sm:pt-32 pb-8 sm:pb-16 px-5">
      <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-6">
        Terms & Conditions
      </h1>

      <section className="text-gray-700 text-base leading-relaxed space-y-6">
        <p>
          Welcome to <strong className="text-main">Unsaid</strong>, a space to
          share your unspoken thoughts and emotions through anonymous messages.
          By submitting a message or using our platform, you agree to the
          following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold text-foreground">
          1. Respectful Content
        </h2>
        <p>
          You must not submit any content that is explicit, hateful,
          discriminatory, harassing, violent, or otherwise inappropriate. This
          includes sexually explicit language, graphic violence, personal
          attacks, or abusive behavior.
        </p>

        <h2 className="text-xl font-semibold text-foreground">
          2. AI Moderation
        </h2>
        <p>
          All messages submitted to{" "}
          <strong className="text-main">Unsaid</strong> are reviewed by
          automated moderation systems before being published. If a message is
          flagged as inappropriate or harmful, it will not be posted to the
          public feed.
        </p>

        <h2 className="text-xl font-semibold text-foreground">
          3. Anonymous Submissions
        </h2>
        <p>
          Messages are submitted anonymously. We do not collect personally
          identifiable information unless explicitly provided by you. Please do
          not include sensitive personal details in your message.
        </p>

        <h2 className="text-xl font-semibold text-foreground">
          4. Submission Limit
        </h2>
        <p>
          You may only submit one message every 4 hours. This cooldown is
          intended to encourage meaningful, intentional sharing.
        </p>

        <h2 className="text-xl font-semibold text-foreground">
          5. Content Usage
        </h2>
        <p>
          By submitting a message to{" "}
          <strong className="text-main">Unsaid</strong>, you grant us the right
          to display and distribute your message (anonymously) on our platform,
          including home and explore pages, and in future compilations or
          campaigns.
        </p>

        <h2 className="text-xl font-semibold text-foreground">6. Updates</h2>
        <p>
          We may update these terms at any time. Continued use of the platform
          constitutes acceptance of the revised terms.
        </p>
      </section>

      <div className="mt-10 ">
        <Link href="/" className="text-primary underline hover:text-primary/80">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
