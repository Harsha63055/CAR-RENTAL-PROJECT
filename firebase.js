// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCptEuHVvVM3ZOX8wcaFNMtD8dTqM3uUHs",
  authDomain: "car-rental-5f157.firebaseapp.com",
  projectId: "car-rental-5f157",
  storageBucket: "car-rental-5f157.firebasestorage.app",
  messagingSenderId: "1001059043951",
  appId: "1:1001059043951:web:af36b09983cf2c1bd71b9a",
  measurementId: "G-D32TXH92BT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); //initializing firebase authentication

export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword}
