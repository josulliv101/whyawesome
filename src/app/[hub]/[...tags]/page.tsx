import { Page } from "@/components/Page";
import { AlbumGrid } from "@/components/album-grid";
import { Albums } from "@/components/albums";
import { db, fetchEntities } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { SubTags } from "@/components/SubTags";
import { TagPrimary } from "@/types";
import { Sparkle } from "lucide-react";

interface Props {
  params: { hub: string; tags: Array<TagPrimary> };
  searchParams: { lastCursor: number; prev: boolean };
}

const PAGINATION_ITEMS_PER_PAGE = 10;

export default async function Hub({
  params: { hub, tags },
  searchParams: { lastCursor, prev = false },
}: Props) {
  const h = hub === "all" ? [] : [hub];
  const [items, count, lastItem, firstItem] = await fetchEntities(
    [...h, ...tags],
    PAGINATION_ITEMS_PER_PAGE,
    Number(lastCursor),
    Boolean(prev)
  );
  // await new Promise((r) => setTimeout(r, 2000));
  console.log("lastItem", prev, lastCursor);
  const totalPages = Math.ceil(count / PAGINATION_ITEMS_PER_PAGE);
  return (
    <div className="col-span-3 lg:col-span-4 lg:border-l p-4">
      <div>
        HUB {hub} / {tags.join(" / ")} / total {count}
      </div>
      <SubTags hub={hub} tags={tags} tagId={tags[0]} activeTag={tags[1]} />
      {items.map((item) => (
        <Link key={item.id} href={`/profile/${item.id}`} className="">
          <div className="flex items-start pl-0 pr-4 py-0 my-4 space-x-6 hover:bg-primary/5">
            <Image
              alt={item.name}
              src={item.pic}
              width={96}
              height={96}
              className="block w-[96px] h-[96px] p-1 object-cover rounded-sm object-center aspect-square"
            />
            <div className="flex-1">
              <p className="text-lg font-medium leading-none mb-2">
                {item.name} / <span className="text-md ">@{item.id}</span>
              </p>

              <p className="text-md text-muted-foreground border px-3 py-2">
                <span className="text-blue-500">#whyawesome</span>{" "}
                <Sparkle className="inline-block relative mr-1 left-[1px] text-brand h-[.85rem] w-[.85rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />{" "}
                {item.description?.substring(0, 150)}
              </p>
            </div>
            <Badge className="w-fit whitespace-nowrap">
              {item.oinks} votes
            </Badge>
          </div>
        </Link>
      ))}
      {count > PAGINATION_ITEMS_PER_PAGE && (
        <Pagination>
          <PaginationContent>
            <PaginationPrevious href={`?lastCursor=${lastItem}&prev=true`} />
            {[...new Array(totalPages)].map((_, index) => (
              <PaginationLink key={index} href={`?page=${index + 1}`}>
                {index + 1}
              </PaginationLink>
            ))}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationNext href={`?lastCursor=${lastItem}`} />
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
