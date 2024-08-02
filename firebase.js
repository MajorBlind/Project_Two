// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyQQTmTlr1b7mP1UCuUAB0YQ0Me_UXEOA",
  authDomain: "inventory-management-f5dcf.firebaseapp.com",
  projectId: "inventory-management-f5dcf",
  storageBucket: "inventory-management-f5dcf.appspot.com",
  messagingSenderId: "393475891949",
  appId: "1:393475891949:web:0ec8a9202542b2e15822e4",
  measurementId: "G-MVJSSSSPNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
