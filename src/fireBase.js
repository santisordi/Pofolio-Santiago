import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCKuYZzJwSgoVGV-rx9jwyPhGxk2P6IwY4",
  authDomain: "santiporfolio.firebaseapp.com",
  projectId: "santiporfolio",
  storageBucket: "santiporfolio.appspot.com",
  messagingSenderId: "270999650713",
  appId: "1:270999650713:web:3ff70b470ce8336849d308"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
