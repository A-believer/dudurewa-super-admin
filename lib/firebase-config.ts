
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from 'firebase/auth'
import { Firestore, getFirestore } from "firebase/firestore"


const firebaseConfig = {
apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  appId: process.env.REACT_APP_FIREBASE_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};


const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app)
export const db: Firestore = getFirestore(app)