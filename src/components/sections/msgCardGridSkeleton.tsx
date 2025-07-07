import MsgCardSkeleton from "./msgCardSkeleton";

export default function MsgCardGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-4 md:gap-8 max-w-[1300px] mx-auto px-5 pb-12">
      {Array.from({ length: count }).map((_, i) => (
        <MsgCardSkeleton key={i} />
      ))}
    </div>
  );
}
