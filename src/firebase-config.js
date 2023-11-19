import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyBXVw-zOQPntYQsUwtSD4WVcWUbeEM7OGQ",
 authDomain: "ynow-539f5.firebaseapp.com",
 projectId: "ynow-539f5",
 storageBucket: "ynow-539f5.appspot.com",
 messagingSenderId: "769928384303",
 appId: "1:769928384303:web:a1d798a8ba81f4adfedbda",
 measurementId: "G-03XVLGK6ET"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();