
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8MRe01oJPZZu_MCEjoRp1j1BQ1LuOOOI",
  authDomain: "atelier-86153.firebaseapp.com",
  projectId: "atelier-86153",
  storageBucket: "atelier-86153.appspot.com",
  messagingSenderId: "53660839891",
  appId: "1:53660839891:web:96386ccc3e15eb5f2ac926"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db