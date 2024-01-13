"use client";

import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AlbumArtwork, type Album } from "@/components/album-artwork";
import { Separator } from "./ui/separator";

export function Albums({ items = [] }: { items: Array<Album> }) {
  return (
    <>
      <div className="relative max-w-[100vw]">
        <ScrollArea className="whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {items.map((album) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                className="w-[320px] object-cover mt-8"
                aspectRatio="square"
                width={320}
                height={250}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}
