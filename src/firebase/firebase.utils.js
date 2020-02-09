import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBQ3smSf1Js38eqD9vBO4aulvB-7xFVBNg",
  authDomain: "crwn-db-2a181.firebaseapp.com",
  databaseURL: "https://crwn-db-2a181.firebaseio.com",
  projectId: "crwn-db-2a181",
  storageBucket: "crwn-db-2a181.appspot.com",
  messagingSenderId: "113302915054",
  appId: "1:113302915054:web:44c9429cba8378165a30ff",
  measurementId: "G-Q6THLYHLC1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
