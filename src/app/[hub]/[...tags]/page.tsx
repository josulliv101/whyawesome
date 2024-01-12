import { Page } from "@/components/Page";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { tags: string[] };
  searchParams: { profile: string };
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

export default async function Tags({
  params: { tags },
  searchParams: { profile },
}: Props) {
  let profileData;

  if (profile) {
    profileData = await fetch(
      `https://firestore.googleapis.com/v1/projects/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/databases/(default)/documents/entity/${profile}`
    ).then((res) => res.json());
  }
  return (
    <Page profileId={profile} profileData={profileData}>
      <div>
        <div>{"tags / " + tags.join(" & ")}</div>
        <div>
          <Link href="?profile=kevin-garnett">Drawer Kevin Garnett</Link> |
          <Link href="?profile=larry-bird">Drawer Larry Bird</Link>
        </div>
      </div>
    </Page>
  );
}
