// import { useParams, usePathname } from "next/navigation";
import { ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { Fragment } from "react";
import { SidebarSubNav } from "./SidebarSubNav";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  hub?: string;
}

const navItems = [
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
];

export function Sidebar({ className, hub }: SidebarProps) {
  // const pathName = usePathname();
  // const params = useParams();
  console.log("Sidebar render()");
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4">
        <div className="py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Explore
          </h2>
          <div className="space-y-1">
            {navItems.map(({ label, id, path }) => (
              <Fragment key={id}>
                {" "}
                <Button
                  key={label}
                  variant="ghost"
                  // variant={pathName === path ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={path}>{label}</Link>
                </Button>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
