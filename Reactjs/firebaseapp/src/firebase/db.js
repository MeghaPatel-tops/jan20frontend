import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLiw1M3EODMqTafp9xvuRlkkw07IFLuSA",
  authDomain: "easy-mart-8e507.firebaseapp.com",
  projectId: "easy-mart-8e507",
  storageBucket: "easy-mart-8e507.firebasestorage.app",
  messagingSenderId: "80639203900",
  appId: "1:80639203900:web:30ffa6a30ff8101888c139",
  measurementId: "G-HPRXS1Y68N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;