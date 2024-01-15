import { Page } from "@/components/Page";
import { ProfileHScroll } from "@/components/ProfileHScroll";
import { Albums } from "@/components/albums";
import { db, fetchEntities } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { hub: string };
  // searchParams: { profile: string };
}

export default async function Hub({ params: { hub } }: Props) {
  const ps = [
    fetchEntities([hub, "person"]),
    fetchEntities([hub, "movie"]),
    fetchEntities([hub, "sports"]),
    fetchEntities([hub, "restaurant"]),
  ];

  const [people, movies, sports, restaurants] = await Promise.all(ps);

  return (
    <div className="col-span-3 lg:col-span-4 lg:border-l">
      <div className="sm:px-0 md:px-12 pt-6">
        <h2 className="text-3xl font-semibold tracking-tight mb-8">
          Find out why things are awesome.
        </h2>
      </div>
      <ProfileHScroll
        title="People"
        description="Find awesome people in arts & entertainment, sports, politics, science, academia, and more."
        profiles={people}
      />
      <ProfileHScroll
        title="Sports"
        description="Find awesome sports profiles."
        profiles={sports}
      />
      <ProfileHScroll
        title="Restaurants"
        description="Find awesome restaurants."
        profiles={restaurants}
      />{" "}
      <ProfileHScroll
        title="Movies"
        description="Find awesome movies."
        profiles={movies}
      />
    </div>
  );
}
