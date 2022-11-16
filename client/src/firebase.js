//import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8YMt595F4ZEi_Ldq7zJ13DmoCi1WWY-M",
  authDomain: "garage-sale-3ebe1.firebaseapp.com",
  databaseURL:
    "https://garage-sale-3ebe1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "garage-sale-3ebe1",
  storageBucket: "garage-sale-3ebe1.appspot.com",
  messagingSenderId: "721136507576",
  appId: "1:721136507576:web:08c0d6e43e7a6e57bf724d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

