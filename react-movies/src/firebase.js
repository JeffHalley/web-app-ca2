

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIywkzfFb-Gx2oqW_UHPZbb8pL6Z1mCpg",
  authDomain: "react-auth-test-d2515.firebaseapp.com",
  projectId: "react-auth-test-d2515",
  storageBucket: "react-auth-test-d2515.firebasestorage.app",
  messagingSenderId: "115428744787",
  appId: "1:115428744787:web:9a0aa2f33b0a7486e8f0a6",
  measurementId: "G-3ZEYGGZWXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

const analytics = getAnalytics(app);