import admin from "firebase-admin";

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

const initializeApp = () => {
  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any),
  });
};

export const getFirebaseAdminApp = () => {
  if (admin.apps.length > 0) {
    return admin.apps[0] as admin.app.App;
  }

  return initializeApp();
};

export const db = admin.firestore(getFirebaseAdminApp());

export async function fetchEntities(tags: Array<string> = []) {
  let query = db.collection("entity").where("oinks", ">", 0);

  tags.forEach((tag) => {
    query = query.where(`tagMap.${tag}`, "==", true);
  });

  const snapshotPeople = await query.orderBy("oinks", "desc").limit(8).get();

  const people: Array<any> = [];

  snapshotPeople.forEach((doc: any) =>
    people.push({ id: doc.id, ...doc.data() })
  );

  return people;
}
