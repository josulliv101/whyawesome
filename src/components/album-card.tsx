import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Sparkle as Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { PreviewCard } from "./preview-card";
import { Badge } from "./ui/badge";
import { Profile } from "@/types";

export interface Album {
  name: string;
  oinks: number | string;
  pic: string;
  id: string;
  description: string;
}

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  profile: Profile;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function AlbumCard({
  album,
  profile,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <Link href={`/profile/${album.id}`} passHref>
      <div
        className={cn(
          "space-y-0",
          "transition-all ease-in-out duration-300 hover:scale-[1.02]",
          className
        )}
        {...props}
      >
        {/* <div
          className={`flex-grow-1 flex-shrink-0 relative overflow-hidden rounded-md ${minWidth}`}
        >
          <Image
            src={album.pic}
            alt={album.name}
            width={width}
            height={height}
            className={cn(
              "max-h-[160px] object-center md:max-h-fit border-gray-200 border rounded-sm object-cover ",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}
          />
        </div> */}
        {/* <div className="relative space-y-0 text-md pt-4">
          <h3 className="text-lg font-medium leading-none mb-4">@{album.id}</h3>
          <div className="relative text-md text-muted-foreground bg-muted px-3 pt-2 pb-2 h-[168px] overflow-hidden whitespace-normal">
            <div className="flex items-center justify-between font-medium mb-2">
              <div className="opacity-0">
                <em>top reason</em>
              </div>
              <Badge className="absolute top-2 right-4 bg-orange-500">
                top reason{" "}
                <Star className="relative ml-2 left-[-3px] text-white h-[.85rem] w-[.85rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                {album.oinks}
              </Badge>
            </div>

            {album.description.substring(0, 138)}
            <div className="relative top-1 text-sm text-right">View All</div>
          </div>
        </div> */}
      </div>
    </Link>
  );
}
