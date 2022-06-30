import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9iAgu1_RSDhLMdXIX19MtRrTlQp7hY2A",
  authDomain: "linkedin-project-d514d.firebaseapp.com",
  projectId: "linkedin-project-d514d",
  storageBucket: "linkedin-project-d514d.appspot.com",
  messagingSenderId: "605253360189",
  appId: "1:605253360189:web:094ba557aa04d2ac89a854",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
