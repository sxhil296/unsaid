import { Skeleton } from "@/components/ui/skeleton";

export default function MsgCardSkeleton() {
  return (
    <div className="w-full border-3 border-black p-4 bg-secondary-background shadow-md space-y-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-6" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-5 w-5 rounded-full" />
      </div>

      <Skeleton className="w-full h-[200px] rounded-md" />

      <div className="flex justify-center">
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  );
}
