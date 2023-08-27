// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// console.log(process.env.FB_API_KEY);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV26E4HLFeYK4AahoHxb1dh5CQFcE1Udw",
  // apiKey: import.meta.process.env.FB_API_KEY,
  // apiKey: process.env.FB_API_KEY,
  // apiKey: process.env.FB_API_KEY,

  authDomain: "react-auth-b5ced.firebaseapp.com",
  projectId: "react-auth-b5ced",
  storageBucket: "react-auth-b5ced.appspot.com",
  messagingSenderId: "296757521506",
  appId: "1:296757521506:web:8b7d6a81b8a14439fab53b",
  // authDomain: process.env.FB_AUTHDOMAIN,
  // projectId: process.env.FB_PROJECTID,
  // storageBucket: process.env.FB_STORAGEBUCKET,
  // messagingSenderId: process.env.FB_MESSAGINGSENDERID,
  // appId: process.env.FB_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
