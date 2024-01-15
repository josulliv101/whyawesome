"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export function Hero() {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className="w-full bg-hero min-h-[360px] bg-bottom bg-no-repeat bg-cover" />
    );
  }
  return null;
}
