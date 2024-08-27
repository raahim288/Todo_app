// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKIhLwzAYUjT3erJErbFbqkz3NrwXzKR4",
  authDomain: "fir-authentication-19c24.firebaseapp.com",
  projectId: "fir-authentication-19c24",
  storageBucket: "fir-authentication-19c24.appspot.com",
  messagingSenderId: "227557480706",
  appId: "1:227557480706:web:d21a98ac4ce2faae34ca1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()

//initialize cloud firebase
const db=getFirestore();
export default db