import { db } from "@/lib/firebase";
import { Modal } from "./Modal";

export default async function ProfileModal({
  params: { profileId },
}: {
  params: { profileId: string };
}) {
  const data = (await db.collection("entity").doc(profileId).get()).data();

  return (
    <Modal>
      {profileId} / {data?.name}
    </Modal>
  );
}
