import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBPGK8F267EZqLh0Nw79ge2yARt4ha0-TM",
  authDomain: "linkedin-clone-7ca83.firebaseapp.com",
  projectId: "linkedin-clone-7ca83",
  storageBucket: "linkedin-clone-7ca83.appspot.com",
  messagingSenderId: "651677348025",
  appId: "1:651677348025:web:6b77e436dc4ffb48522b68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Getting firestore
const db = getFirestore();

// Getting firestorage
const storage = getStorage();

// Getting autorization
const auth = getAuth();

export { db, auth, storage, app }