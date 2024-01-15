import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col mb-8">
      {[...new Array(8)].map((_, index) => (
        <div key={index} className="flex items-center space-x-4">
          <Skeleton className="h-20 w-20 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-[850px]" />
            <Skeleton className="h-6 w-[800px]" />
            <Skeleton className="h-6 w-[850px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
