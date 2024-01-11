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
