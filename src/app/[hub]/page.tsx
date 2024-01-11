import Image from "next/image";

interface Props {
  params: { hub: string };
}

export default function Hub({ params: { hub } }: Props) {
  return "hub / " + hub;
}
