import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBKMDc0ZrBI4SVcwZs_WcADo7Cpv9szlA",
  authDomain: "formporfolio.firebaseapp.com",
  projectId: "formporfolio",
  storageBucket: "formporfolio.appspot.com",
  messagingSenderId: "779938225507",
  appId: "1:779938225507:web:e48afa4ced4789ff8a4756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };