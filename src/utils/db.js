// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Eps3HcS9epq0JsRq2pjusifVvZSFJb8",
  authDomain: "finca-fa576.firebaseapp.com",
  projectId: "finca-fa576",
  storageBucket: "finca-fa576.firebasestorage.app",
  messagingSenderId: "353078457055",
  appId: "1:353078457055:web:7a0db328e39ba0f798af6a",
  measurementId: "G-65VSHG9PNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);