import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAnUkJ3osuRzJfD05YgssQDHnye7mYZ35s",
  authDomain: "sporty-mind-online-store.firebaseapp.com",
  databaseURL: "https://sporty-mind-online-store.firebaseio.com",
  projectId: "sporty-mind-online-store",
  storageBucket: "sporty-mind-online-store.appspot.com",
  messagingSenderId: "1058810450994",
  appId: "1:1058810450994:web:0ff854ea17ce7a6217d82b",
  measurementId: "G-ZDX9568JFS"
};

firebase.initializeApp(config);

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
