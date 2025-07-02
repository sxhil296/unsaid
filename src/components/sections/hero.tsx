export default function Hero() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col overflow-hidden py-12 items-center bg-background px-5 md:py-[200px] bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto w-full max-w-[800px]">
        <h1 className="leading-normal text-center text-3xl md:text-6xl font-heading text-foreground">
          A Place for the Messages <br /> That Never Made It.
        </h1>
        <p className="mt-4 text-center text-base md:text-lg font-base text-foreground">
          Not every message finds the right time or place. <br /> Here, you can
          write what was left behind—what you wished you said, but couldn't.{" "}
          <br /> Because your feelings still matter, even if they went unspoken.
        </p>
      </div>
    </main>
  );
}
