import firebase from "firebase/app";
import "firebase/auth";
const Config = {
  apiKey: "AIzaSyBtFugj7Bq2CMXc8I8e2-rVkzPZRJJhCsk",
  authDomain: "g-auth-cfed9.firebaseapp.com",
  projectId: "g-auth-cfed9",
  storageBucket: "g-auth-cfed9.appspot.com",
  messagingSenderId: "395058006369",
  appId: "1:395058006369:web:4d55dbd9f69a3ef2c0dd20",
  measurementId: "G-NXELB3VYZ7"
};
firebase.initializeApp(Config);
export const auth = firebase.auth();
console.log({ auth });
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
