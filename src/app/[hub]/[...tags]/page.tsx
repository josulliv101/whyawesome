import { PropsWithChildren } from "react";

export default function HubWithTags({
  params: { tags },
}: {
  params: { tags: string[] };
}) {
  return tags;
}
