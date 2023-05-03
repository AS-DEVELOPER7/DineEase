// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcOBrbXnFVVYXEfscMbmQUFNjAZ3lPRZo",
  authDomain: "restaurant-pos-5cac4.firebaseapp.com",
  projectId: "restaurant-pos-5cac4",
  storageBucket: "restaurant-pos-5cac4.appspot.com",
  messagingSenderId: "923160416466",
  appId: "1:923160416466:web:1b038762f486cdd5181d0b",
  measurementId: "G-1SF960BZGE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
