// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtOM5XSSiwMxOObs5kPqGwBotlh7ub6E0",
  authDomain: "hottel-ting.firebaseapp.com",
  projectId: "hottel-ting",
  storageBucket: "hottel-ting.appspot.com",
  messagingSenderId: "136021975308",
  appId: "1:136021975308:web:a715d4fb93e373a4212929"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };