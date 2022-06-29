
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP4nwrcoU-NdNusgPc_9YiciC2VyRZzFM",
  authDomain: "portfolio-8c036.firebaseapp.com",
  projectId: "portfolio-8c036",
  storageBucket: "portfolio-8c036.appspot.com",
  messagingSenderId: "1038682160030",
  appId: "1:1038682160030:web:44b89d7cde4fd07026f48f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);