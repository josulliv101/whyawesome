import { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: { hub: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { hub } = params;
  const previousTitle = (await parent).title;

  return {
    title: `${hub} / ${previousTitle?.absolute}`,
  };
}
export default function HubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
