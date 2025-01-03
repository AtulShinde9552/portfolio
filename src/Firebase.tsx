import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCQg7ywu9QFniHnh-aUNfi7KZVx6PeLy40",
  authDomain: "portfolio-d9470.firebaseapp.com",
  projectId: "portfolio-d9470",
  storageBucket: "portfolio-d9470.firebasestorage.app",
  messagingSenderId: "370795158454",
  appId: "1:370795158454:web:3d4c6cf847aca23930ff17",
  measurementId: "G-7LJT45FF6H"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);