import { Page } from "@/components/Page";
import { Albums } from "@/components/albums";
import { db } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { hub: string };
  // searchParams: { profile: string };
}

export default async function Hub({ params: { hub } }: Props) {
  return <div className="col-span-3 lg:col-span-4 lg:border-l">HUB</div>;
}
