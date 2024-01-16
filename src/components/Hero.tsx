"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export function Hero() {
  const pathname = usePathname();

  if (true || pathname === "/") {
    return (
      <div className="w-full bg-hero min-h-[460px] bg-center bg-no-repeat bg-cover" />
    );
  }
  return null;
}
