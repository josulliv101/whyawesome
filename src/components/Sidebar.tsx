"use client";

import { useParams, usePathname } from "next/navigation";
import { ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { Fragment } from "react";

export type Playlist = (typeof playlistsData)[number];

export const playlistsData = ["People", "Places", "Other Stuff"];
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists?: Playlist[];
}

const subNav = [
  { id: "person", label: "People" },
  { id: "restaraunt", label: "Restaraunts" },
  { id: "night-life", label: "Night Life" },
  { id: "movie", label: "Movies" },
];

export function Sidebar({
  className,
  playlists = playlistsData,
}: SidebarProps) {
  const pathName = usePathname();
  const params = useParams();
  console.log("params", params);
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4">
        <div className="py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Explore
          </h2>
          <div className="space-y-1">
            {[
              { label: "All", path: "/", id: "all" },
              { label: "Boston", path: "/boston", id: "boston" },
              {
                label: "New York City",
                path: "/new-york-city",
                id: "new-york-city",
              },
              {
                label: "Chicago",
                path: "/chicago",
                id: "chicago",
              },
            ].map(({ label, id, path }) => (
              <Fragment key={id}>
                {" "}
                <Button
                  key={label}
                  variant={pathName === path ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={path}>{label}</Link>
                </Button>
                {params.hub === id && (
                  <>
                    {subNav.map((item) => (
                      <Button
                        key={item.id}
                        variant={
                          pathName === `${path}/${item.id}`
                            ? "secondary"
                            : "ghost"
                        }
                        className="w-full justify-start"
                        asChild
                      >
                        <Link href={`/${params.hub}/${item.id}`}>
                          <ChevronRight className="relative mr-2 left-[0px] h-[.85rem] w-[.85rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                          {item.label}
                        </Link>
                      </Button>
                    ))}
                  </>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
