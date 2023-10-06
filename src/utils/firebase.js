// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-efb14.firebaseapp.com",
  projectId: "blog-efb14",
  storageBucket: "blog-efb14.appspot.com",
  messagingSenderId: "96574583728",
  appId: "1:96574583728:web:b6e846ee0d488f11899c75"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);