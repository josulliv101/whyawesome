import { Page } from "@/components/Page";
import Image from "next/image";

interface Props {
  params: { hub: string };
}

export default function Hub({ params: { hub } }: Props) {
  return <Page>{"hub / " + hub}</Page>;
}
