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
  apiKey: "AIzaSyAUY2rCPJXpP-Zyk0mRcAzWbPhiL4mvX_w",
  authDomain: "facebook-clone-be90a.firebaseapp.com",
  projectId: "facebook-clone-be90a",
  storageBucket: "facebook-clone-be90a.appspot.com",
  messagingSenderId: "102136832449",
  appId: "1:102136832449:web:08cd362caade5ffcaa8f40"
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