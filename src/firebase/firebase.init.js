// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUsuGnQGWjJ6VRsk9MDgOLThAcN8-Ppk8",
  authDomain: "study-mate-22c7d.firebaseapp.com",
  projectId: "study-mate-22c7d",
  storageBucket: "study-mate-22c7d.firebasestorage.app",
  messagingSenderId: "397538552843",
  appId: "1:397538552843:web:21fdbca06aaa95d5776b0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
