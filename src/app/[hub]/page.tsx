import { Page } from "@/components/Page";
import { ProfileHScroll } from "@/components/ProfileHScroll";
import { Albums } from "@/components/albums";
import { Badge } from "@/components/ui/badge";
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
    fetchEntities([hub, "place"]),
  ];

  const [[people], [movies], [places]] = await Promise.all(ps);

  return (
    <div className="col-span-3 lg:col-span-4 lg:border-l">
      <div className="sm:px-0 md:px-12 pt-6">
        <h2 className="text-3xl font-semibold tracking-tight mb-8">
          Find out why things in {hub}
          are awesome.
        </h2>
      </div>
      <ProfileHScroll
        path={`/${hub}/person`}
        title={`${hub} > people`}
        description="Find awesome people in arts & entertainment, sports, politics, science, academia, and more."
        profiles={people}
      />
      <ProfileHScroll
        path={`/${hub}/place`}
        title={`${hub} > places`}
        description={`Find awesome places around ${hub}`}
        profiles={places}
      />
      <ProfileHScroll
        path={`/${hub}/movie`}
        title={`${hub} > movies`}
        description={`Find awesome movies around ${hub}`}
        profiles={movies}
      />
    </div>
  );
}
