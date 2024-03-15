import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhkNc9AdkiG8nkDViHYjILiQ8tU72kxVw",
  authDomain: "elubo-67ac0.firebaseapp.com",
  projectId: "elubo-67ac0",
  storageBucket: "elubo-67ac0.appspot.com",
  messagingSenderId: "814329883536",
  appId: "1:814329883536:web:13fcb25c6d137c4b542115"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);