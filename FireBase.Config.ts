// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAam7KYdg6exGlRWg1YsLnH5a7tDWe5F7Y",
  authDomain: "aluminiadypsoe.firebaseapp.com",
  projectId: "aluminiadypsoe",
  storageBucket: "aluminiadypsoe.appspot.com",
  messagingSenderId: "502671649609",
  appId: "1:502671649609:web:4b414ce279e9a07d5e0898"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);  
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);  
export const FIREBASE_STORE=getFirestore(FIREBASE_APP);