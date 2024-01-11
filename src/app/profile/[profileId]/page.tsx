import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

interface Props {
  params: { profileId: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { profileId } = params;

  // fetch data
  const profile = await fetch(
    `https://firestore.googleapis.com/v1/projects/fir-abc-a965d/databases/(default)/documents/entity/${profileId}`
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  console.log("profile", profile);
  return {
    title: `${profile.fields.name.stringValue} / why awesome`,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export default function Profile({ params: { profileId } }: Props) {
  return "profile id / " + profileId;
}
