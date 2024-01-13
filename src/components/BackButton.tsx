"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function BackButton() {
  const router = useRouter();
  return <Button onClick={router.back}>close</Button>;
}
