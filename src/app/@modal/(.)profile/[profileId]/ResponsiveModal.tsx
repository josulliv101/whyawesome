"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Modal } from "./Modal";
import { MyDrawer } from "@/components/MyDrawer";
import { PropsWithChildren } from "react";
import { Profile } from "@/types";

export default function ResponsiveModal({
  children,
  profile,
}: PropsWithChildren<{
  profile: Profile;
}>) {
  const isDesktop = useMediaQuery("(min-width: 780px)");

  if (isDesktop) {
    return <Modal profile={profile} children={children} />;
  }
  return <MyDrawer open profile={profile} children={children} />;
}
