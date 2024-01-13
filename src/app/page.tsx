import { Page } from "@/components/Page";
import { Albums } from "@/components/albums";
import { db } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";

interface Props {
  // params: { hub: string };
  // searchParams: { profile: string };
}

export default async function Home({}: Props) {
  const refPeople = db
    .collection("entity")
    .where("tagMap.person", "==", true)
    .orderBy("oinks", "desc")
    .limit(8);
  const snapshotPeople = await refPeople.get();

  const people: Array<any> = [];

  snapshotPeople.forEach((doc: any) =>
    people.push({ id: doc.id, ...doc.data() })
  );

  // let profileData;
  // if (profile) {
  //   profileData = await fetch(
  //     `https://firestore.googleapis.com/v1/projects/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/databases/(default)/documents/entity/${profile}`
  //   ).then((res) => res.json());
  // }
  return (
    <div className="col-span-3 lg:col-span-4 lg:border-l">
      <div className="sm:px-0 md:px-12 pt-6">
        <h2 className="text-3xl font-semibold tracking-tight mb-8">
          Explor the Awesome Jungle
        </h2>
      </div>
      <div className="px-0 md:px-12 py-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">People</h2>
            <p className="text-sm text-muted-foreground">
              Find awesome people in arts & entertainment, sports, politics,
              science, academia, and more.
            </p>
          </div>
        </div>
        <Albums items={people} />
      </div>
    </div>
  );
}
