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
  apiKey: "AIzaSyDxIN4NedZ88P53EVaFsaEbaDWPz_-dLsk",
  authDomain: "globant-financetf.firebaseapp.com",
  projectId: "globant-financetf",
  storageBucket: "globant-financetf.appspot.com",
  messagingSenderId: "715354408208",
  appId: "1:715354408208:web:ab5b45452b7cadfbb75195",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

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
