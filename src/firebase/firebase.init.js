// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFufpwWtRcC6e_fnPPrGb5l3Az_CHsbac",
  authDomain: "coffee-store-app-d51bb.firebaseapp.com",
  projectId: "coffee-store-app-d51bb",
  storageBucket: "coffee-store-app-d51bb.firebasestorage.app",
  messagingSenderId: "154695575512",
  appId: "1:154695575512:web:5ed6da3538a0ccf14674ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);