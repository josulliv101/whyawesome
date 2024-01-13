import { Modal } from "./Modal";

export default function ProfileModal({
  params: { profileId },
}: {
  params: { profileId: string };
}) {
  return <Modal>{profileId}</Modal>;
}
