import { Page } from "@/components/Page";
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
      <Page profileId={profile}>
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
