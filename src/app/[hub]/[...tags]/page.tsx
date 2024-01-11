import { Page } from "@/components/Page";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { tags: string[] };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { tags } = params;
  const previousTitle = (await parent).title;
  console.log("tags previousTitle", previousTitle);
  return {
    title: `${tags.reverse().join(" & ")} / ${previousTitle?.absolute}`,
  };
}

export default function Tags({ params: { tags } }: Props) {
  return (
    <Page>
      <div>
        <div>{"tags / " + tags.join(" & ")}</div>
        <div>
          <Link href="/profile/larry-bird">Profile Larry Bird</Link> |
          <Link href="/boston?profile=larry-bird">Drawer Larry Bird</Link>
        </div>
      </div>
    </Page>
  );
}
