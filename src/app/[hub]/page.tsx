import { Page } from "@/components/Page";
import Link from "next/link";

interface Props {
  params: { hub: string };
  searchParams: { profile: string };
}

export default async function Hub({
  params: { hub },
  searchParams: { profile },
}: Props) {
  let profileData;

  if (profile) {
    profileData = await fetch(
      `https://firestore.googleapis.com/v1/projects/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/databases/(default)/documents/entity/${profile}`
    ).then((res) => res.json());
  }

  console.log("page :: hub", hub);
  return (
    <>
      <Page profileId={profile} profileData={profileData}>
        {!!profile && (
          <div className=" bg-gray-100 rounded-sm min-h-[360px]">{profile}</div>
        )}
        {!profile && (
          <div>
            {"hub / " + hub} / {profile}
            <Link href="?profile=larry-bird">Drawer Larry Bird</Link>
          </div>
        )}
      </Page>
    </>
  );
}
