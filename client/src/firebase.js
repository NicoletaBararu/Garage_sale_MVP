// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8YMt595F4ZEi_Ldq7zJ13DmoCi1WWY-M",
  authDomain: "garage-sale-3ebe1.firebaseapp.com",
  projectId: "garage-sale-3ebe1",
  storageBucket: "garage-sale-3ebe1.appspot.com",
  messagingSenderId: "721136507576",
  appId: "1:721136507576:web:08c0d6e43e7a6e57bf724d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuthv = getAuth(app);
