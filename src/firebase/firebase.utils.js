import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDgQR1g2_JaJ5KRYnEGcrYByqaTz5BfDds",
  authDomain: "crwn-db-86977.firebaseapp.com",
  projectId: "crwn-db-86977",
  storageBucket: "crwn-db-86977.appspot.com",
  messagingSenderId: "972785905521",
  appId: "1:972785905521:web:0aff95c67983f0150550d0",
  measurementId: "G-T8MKBV44GS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
