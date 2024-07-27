// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1_yEVhnzzJ80ND7kAdrSxyUuiaNYapEk",
  authDomain: "agastya-international.firebaseapp.com",
  projectId: "agastya-international",
  storageBucket: "agastya-international.appspot.com",
  messagingSenderId: "359388293297",
  appId: "1:359388293297:web:499fd0eecb293800811a90",
  measurementId: "G-4T4FNNLHG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);