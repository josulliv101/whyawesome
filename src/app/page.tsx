import { Page } from "@/components/Page";
import { ProfileHScroll } from "@/components/ProfileHScroll";
import { Albums } from "@/components/albums";
import { db, fetchEntities } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";

interface Props {
  // params: { hub: string };
  // searchParams: { profile: string };
}

export default async function Home({}: Props) {
  const ps = [
    fetchEntities(["person"]),
    fetchEntities(["place"]),
    fetchEntities(["movie"]),
  ];

  const [[people], [places], [movies]] = await Promise.all(ps);

  // let profileData;
  // if (profile) {
  //   profileData = await fetch(
  //     `https://firestore.googleapis.com/v1/projects/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/databases/(default)/documents/entity/${profile}`
  //   ).then((res) => res.json());
  // }
  return (
    <div className="col-span-3 lg:col-span-4 lg:border-l">
      <ProfileHScroll
        path="/all/person"
        title="People"
        description="Find awesome people in arts & entertainment, sports, politics, science, academia, and more."
        profiles={people}
      />
      <ProfileHScroll
        path="/all/place"
        title="Places"
        description="Find awesome places."
        profiles={places}
      />
      <ProfileHScroll
        path="/all/movie"
        title="Movies"
        description="Find awesome movies."
        profiles={movies}
      />{" "}
    </div>
  );
}
