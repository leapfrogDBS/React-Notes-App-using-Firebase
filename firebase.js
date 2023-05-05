import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADudC__QIsnLAFg-Yo5sfMvMZnywURajk",
  authDomain: "react-notes-4d455.firebaseapp.com",
  projectId: "react-notes-4d455",
  storageBucket: "react-notes-4d455.appspot.com",
  messagingSenderId: "693805253695",
  appId: "1:693805253695:web:cb480f407e4c89e478e48a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");