// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW_7J-sxwUqJGmgkzszArcBmWrrAS9WL8",
  authDomain: "jobs-teritory.firebaseapp.com",
  projectId: "jobs-teritory",
  storageBucket: "jobs-teritory.appspot.com",
  messagingSenderId: "955460699397",
  appId: "1:955460699397:web:b9c34823a5e8de9723e36c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authhelper = getAuth(app);
