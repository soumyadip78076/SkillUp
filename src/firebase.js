// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsMq-v1Wcr5uvQwQbuIc_e3Zyzjx53kko",
  authDomain: "skillup-21d81.firebaseapp.com",
  projectId: "skillup-21d81",
  storageBucket: "skillup-21d81.appspot.com",
  messagingSenderId: "85523646580",
  appId: "1:85523646580:web:e43134ffa9d9746f77a921",
  measurementId: "G-8V0K1J7XT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
