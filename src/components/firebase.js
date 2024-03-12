import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA4g_fMKOaCJbxGY7XiLCAQ3SthpN4T54A",
    authDomain: "fullbrand-ba107.firebaseapp.com",
    projectId: "fullbrand-ba107",
    storageBucket: "fullbrand-ba107.appspot.com",
    messagingSenderId: "822160202747",
    appId: "1:822160202747:web:8d175ef2d62f77a9e6095e",
    measurementId: "G-KC1JVNZW5H"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
