import { initializeApp } from "firebase/app";
import {  
    getAuth,
    signInWithPopup,
    FacebookAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot
} from "firebase/firestore";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjxiuPodAGgi12I_vHj0acbt11aDSvNEE",
  authDomain: "facebook-clone-f5ea7.firebaseapp.com",
  projectId: "facebook-clone-f5ea7",
  storageBucket: "facebook-clone-f5ea7.appspot.com",
  messagingSenderId: "692637034594",
  appId: "1:692637034594:web:8e04fb784611dcd754493b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new FacebookAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export {
    auth,
    signInWithPopup,
    provider,
    onAuthStateChanged,
    signOut,
    db,
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL
}