// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
export const googlePopUp = () => signInWithPopup(auth, provider);
// export const db = getFirestore(app);

export const loginWithGoogle = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    const displayNameUser = user.displayName;
    const emailUser = user.email;
    const photoURLUser = user.photoURL;
    const emailVerifiedUser = user.emailVerified;
    const uid = user.uid;
    console.log("usuario ingresado: ", emailUser);
    console.log("usuario display: ", displayNameUser);
  }
  return googlePopUp();
};

export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
};
