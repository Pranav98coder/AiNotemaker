// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

import {  GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvU3r0YEMkjqYm4jdesw584AfmXdjdBCg",
  authDomain: "ai-note-assistant-2bc2d.firebaseapp.com",
  projectId: "ai-note-assistant-2bc2d",
  storageBucket: "ai-note-assistant-2bc2d.firebasestorage.app",
  messagingSenderId: "594288057857",
  appId: "1:594288057857:web:31563f765c5ba1ec712a00",
  measurementId: "G-J2BTXXZ1SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth(app);