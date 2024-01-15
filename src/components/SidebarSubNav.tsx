"use client";

import { useParams } from "next/navigation";
import { memo, Fragment, PropsWithChildren } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const subNav = [
  { id: "person", label: "People" },
  { id: "restaurant", label: "Restaurants" },
  { id: "sports", label: "Sports" },
  { id: "movie", label: "Movies" },
];

const SubNavList = memo(function List({
  firstTag,
  hub,
  activeHub,
}: PropsWithChildren<{ firstTag?: string; activeHub: string; hub: string }>) {
  console.log("SubNavList render() activeHub", activeHub);
  if (activeHub !== hub) {
    return null;
  }

  return (
    <>
      {subNav.map(({ label, id }) => (
        <Button
          key={id}
          variant={firstTag === id ? "secondary" : "ghost"}
          className="w-full justify-start"
          asChild
        >
          <Link href={`/${hub}/${id}`}>
            <ChevronRight className="h-4 w-4" />
            {label}
          </Link>
        </Button>
      ))}
    </>
  );
});

export const SidebarSubNav = function SubNav({
  hub,
}: PropsWithChildren<{ hub?: string }>) {
  const params = useParams();
  const firstTag = Array.isArray(params.tags) ? params.tags[0] : params.tags;
  console.log("SidebarSubNav render::params", params);
  if (params.hub !== hub) {
    return null;
  }

  return <SubNavList activeHub={params.hub} hub={hub} firstTag={firstTag} />;
};
