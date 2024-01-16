import { db } from "@/lib/firebase";
import ResponsiveModal from "./ResponsiveModal";
import { Profile, Reason } from "@/types";
import { ProfileCard } from "@/components/ProfileCard";
import { PropsWithChildren } from "react";

export default async function LayoutProfileModal({
  children,
}: PropsWithChildren<{}>) {
  return <ResponsiveModal>{children}</ResponsiveModal>;
}
