import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-[800px] pt-24 sm:pt-32 pb-8 sm:pb-16 px-5">
        <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-6">
          About <span className="text-main italic">Unsaid</span>
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          <em className="text-main">Unsaid</em> is a quiet space for the words we never spoke.
          Messages we couldn&apos;t send. Feelings left unshared. Here, you&apos;re free
          to write what you've always wanted to say — without judgment, without
          expectation.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Whether it&apos;s love, regret, gratitude, or closure — your message
          becomes part of a growing collection of anonymous thoughts that others
          can read and relate to. You&apos;re not alone. Someone out there may need
          to hear what you couldn&apos;t say.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          Every message stays anonymous. Submissions are limited to one every 4
          hours, giving you space to reflect and be intentional with what you
          write.
        </p>

        <Link href="/" className="text-primary underline hover:text-primary/80">
          ← Back to Home
        </Link>
      </div>
    </>
  );
}
