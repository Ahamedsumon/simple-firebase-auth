// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeRvnBr4c94m5qpc5akvoPdvfU6OeqiOU",
  authDomain: "simple-firebase-auth-d648c.firebaseapp.com",
  projectId: "simple-firebase-auth-d648c",
  storageBucket: "simple-firebase-auth-d648c.firebasestorage.app",
  messagingSenderId: "1064592397592",
  appId: "1:1064592397592:web:0e16ec769b9a158f5e7a6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize authentication
export const auth = getAuth(app);
