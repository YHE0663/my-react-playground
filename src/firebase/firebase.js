// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWGwziISUZJUJFqF4CUiqnLtRurafEoNg",
  authDomain: "react-next-shop-app-66b9f.firebaseapp.com",
  projectId: "react-next-shop-app-66b9f",
  storageBucket: "react-next-shop-app-66b9f.firebasestorage.app",
  messagingSenderId: "1001023395052",
  appId: "1:1001023395052:web:969320f5e8660fc43bc1c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
