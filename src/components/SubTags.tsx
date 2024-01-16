import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { tags } from "@/lib/tags";
import { Badge } from "./ui/badge";
import { TagPrimary } from "@/types";
import Link from "next/link";

export function SubTags({
  tagId,
  tags: tagsProp,
  hub,
  activeTag,
}: {
  hub: string;
  tags: string[];
  tagId: TagPrimary;
  activeTag?: string;
}) {
  const subTags = tags[tagId].children;
  return (
    <div className="space-x-4 py-4">
      <Link href={`/${hub}/${tagsProp[0]}`}>
        <Badge>all</Badge>
      </Link>
      {subTags.map(({ id, label }) => (
        <Link href={`/${hub}/${tagsProp[0]}/${id}`}>
          <Badge>{label}</Badge>
        </Link>
      ))}
    </div>
  );
}
