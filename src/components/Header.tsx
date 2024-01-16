"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Sparkle } from "lucide-react";

const navItems = [
  { path: "/about", label: "About" },
  { path: "/faq", label: "FAQ" },
  { path: "/developer", label: "Developer API" },
  { path: "/login", label: "Login" },
  // { path: "/profile/larry-bird", label: "Larry Bird" },
];

export const Header = memo(function HeaderComponent() {
  // const pathname = usePathname();
  return (
    <header className="fixed top-0 z-[10] w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="pl-4 pr-12 flex h-14 max-w-screen-3xl items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-sm bg-brand text-brand-foreground mr-4">
            <Sparkle />
          </div>
          why awesome
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              className={cn(
                "transition-colors hover:text-foreground/80"
                // pathname === path ? "text-foreground" : "text-foreground/60"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
});
