import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

interface Props {
  params: { profileId: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { profileId } = params;
  const profile = await fetch(
    `https://firestore.googleapis.com/v1/projects/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/databases/(default)/documents/entity/${profileId}`
  ).then((res) => res.json());

  const previousTitle = (await parent).title;
  console.log("previousTitle", previousTitle);
  return {
    title: `${profile.fields.name.stringValue} / ${previousTitle?.absolute}`,
  };
}

export default function Profile({ params: { profileId } }: Props) {
  return "profile id / " + profileId;
}
