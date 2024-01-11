import { MyDrawer } from "@/components/MyDrawer";
import { Page } from "@/components/Page";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

interface Props {
  params: { hub: string };
  searchParams: { profile: string };
}

export default function Hub({
  params: { hub },
  searchParams: { profile },
}: Props) {
  return (
    <>
      <Page>
        {"hub / " + hub} / {profile}
        <Link href="/boston?profile=larry-bird">Drawer Larry Bird</Link>
      </Page>

      <MyDrawer open={!!profile} />
    </>
  );
}
