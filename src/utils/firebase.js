// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY-lidlA0ZECsJphP-xUe51crc7cJnVxw",
  authDomain: "mohit-netflix-gpt.firebaseapp.com",
  projectId: "mohit-netflix-gpt",
  storageBucket: "mohit-netflix-gpt.appspot.com",
  messagingSenderId: "339309032085",
  appId: "1:339309032085:web:c15e04a777053be214219c",
  measurementId: "G-GMQRR9Y53T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();