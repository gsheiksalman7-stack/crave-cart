// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiHmybVvkE1770qi9QdLOEgYc7Ym_UE_I",
  authDomain: "crave-cart-711c2.firebaseapp.com",
  projectId: "crave-cart-711c2",
  storageBucket: "crave-cart-711c2.firebasestorage.app",
  messagingSenderId: "756036437085",
  appId: "1:756036437085:web:e98910d329ecf3ff0df9b4",
  measurementId: "G-10CSDR9HWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();