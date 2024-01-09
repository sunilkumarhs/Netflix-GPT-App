// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-gpt-d4f7d.firebaseapp.com",
  projectId: "netflix-gpt-d4f7d",
  storageBucket: "netflix-gpt-d4f7d.appspot.com",
  messagingSenderId: "939339425432",
  appId: "1:939339425432:web:d5662e195f648b04be92ed",
  measurementId: "G-WGX4ZR0X14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
