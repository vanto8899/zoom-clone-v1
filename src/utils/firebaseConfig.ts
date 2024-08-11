// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRAygl0Al1dFLoFK3WcaoSJH4WgmGIoDg",
  authDomain: "zoom-clone-6c7d0.firebaseapp.com",
  projectId: "zoom-clone-6c7d0",
  storageBucket: "zoom-clone-6c7d0.appspot.com",
  messagingSenderId: "426059740180",
  appId: "1:426059740180:web:304a51230e343a94106301",
  measurementId: "G-1ZBHBFFTWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
