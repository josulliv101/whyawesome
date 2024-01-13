import { db } from "@/lib/firebase";
import ResponsiveModal from "./ResponsiveModal";

export default async function ProfileModal({
  params: { profileId },
}: {
  params: { profileId: string };
}) {
  const data = (await db.collection("entity").doc(profileId).get()).data();

  return (
    <ResponsiveModal name={data?.name}>
      {profileId} / {data?.name}
    </ResponsiveModal>
  );
}
