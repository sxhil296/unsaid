import MsgCardGrid from "@/components/sections/msgCardGrid";
import SearchSection from "@/components/sections/searchSection";

export default function ArchivesPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full max-w-[800px] pt-32 pb-8 sm:pb-16 px-5 ">
        <h1 className="text-3xl md:text-6xl font-heading text-foreground text-center">
          Archives
        </h1>
        <p className="mt-4 text-lg text-center text-gray-600">
          <strong>2345</strong> messages have been shared on{" "}
          <em className="font-bold">Unsaid</em> so far — each one a window into
          someone&apos;s unspoken thoughts. Here, you can explore the heartfelt
          words people chose not to send, but still wanted to be heard.
        </p>
      </div>
      <div className="mx-auto w-full max-w-[800px] pb-8 sm:pb-16  px-5">
        <SearchSection />
      </div>
      <MsgCardGrid />
    </div>
  );
}
