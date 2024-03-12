// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4zJy1UX1SvPnXNX6R6em0F14mjomtd34",
  authDomain: "file-sharing-6cc4b.firebaseapp.com",
  projectId: "file-sharing-6cc4b",
  storageBucket: "file-sharing-6cc4b.appspot.com",
  messagingSenderId: "810318006825",
  appId: "1:810318006825:web:e287c033dd0c95f55baa38",
  measurementId: "G-EXWNWK9GVS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);