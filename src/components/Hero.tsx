"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export function Hero() {
  const pathname = usePathname();
  return <div className="h-[58px]"></div>;
  if (true || pathname === "/") {
    return (
      <div className="w-full bg-hero h-[460px] bg-center bg-no-repeat bg-cover" />
    );
  }
  return null;
}
