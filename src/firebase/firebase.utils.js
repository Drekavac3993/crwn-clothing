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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
