"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Modal } from "./Modal";
import { MyDrawer } from "@/components/MyDrawer";
import { PropsWithChildren } from "react";

export default function ResponsiveModal({
  children,
}: // params: { profileId },
PropsWithChildren<{
  // params: { profileId: string };
}>) {
  const isDesktop = useMediaQuery("(min-width: 660px)");

  if (isDesktop) {
    return <Modal>{children}</Modal>;
  }
  return <MyDrawer open>{children}</MyDrawer>;
}
