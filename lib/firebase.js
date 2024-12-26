// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaz6mp1Pq8EJrAVjOaqyElBCQNy2Ulnak",
  authDomain: "invoice-7af90.firebaseapp.com",
  projectId: "invoice-7af90",
  storageBucket: "invoice-7af90.firebasestorage.app",
  messagingSenderId: "429520079899",
  appId: "1:429520079899:web:942e5161b56db51690fcbe",
  measurementId: "G-6TTT3VNMQM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
