import { db } from "@/lib/firebase";
import ResponsiveModal from "./ResponsiveModal";
import { Profile, Reason } from "@/types";
import { ProfileCard } from "@/components/ProfileCard";

export default async function ProfileModal({
  params: { profileId },
}: {
  params: { profileId: string };
}) {
  const profile = (
    await db.collection("entity").doc(profileId).get()
  ).data() as Profile;

  const refReasons = db
    .collection("entity")
    .doc(profileId)
    .collection("whyawesome");
  const snapshotReasons = await refReasons.orderBy("votes", "desc").get();
  const reasons: Array<Reason> = [];

  snapshotReasons.forEach((doc: any) =>
    reasons.push({ id: doc.id, ...doc.data() })
  );

  const fullProfile = {
    ...profile,
    reasons,
  };

  return (
    <div>
      <ProfileCard {...fullProfile} />
    </div>
  );
}
