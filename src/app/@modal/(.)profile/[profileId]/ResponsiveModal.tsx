"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Modal } from "./Modal";
import { MyDrawer } from "@/components/MyDrawer";
import { PropsWithChildren } from "react";

export default function ResponsiveModal(
  props: // params: { profileId },
  PropsWithChildren<{
    name: string;
  }>
) {
  const isDesktop = useMediaQuery("(min-width: 780px)");

  if (isDesktop) {
    return <Modal {...props} />;
  }
  return <MyDrawer open {...props} />;
}
