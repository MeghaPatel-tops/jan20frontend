// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2I4Xe5T1667s9tYG8nCMDnrjO-7sTZ_I",
  authDomain: "travelappdb-b11b7.firebaseapp.com",
  projectId: "travelappdb-b11b7",
  storageBucket: "travelappdb-b11b7.firebasestorage.app",
  messagingSenderId: "106904622229",
  appId: "1:106904622229:web:e3ff91d35cbab044efb79c",
  measurementId: "G-7S6VGCJ66G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);
export default   db