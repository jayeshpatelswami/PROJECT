// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnGFVV-3HXcBV3F1nU6tvJj9xVl3KdqO4",
  authDomain: "project-last-year-pu.firebaseapp.com",
  databaseURL: "https://project-last-year-pu-default-rtdb.firebaseio.com",
  projectId: "project-last-year-pu",
  storageBucket: "project-last-year-pu.appspot.com",
  messagingSenderId: "647844198258",
  appId: "1:647844198258:web:3397dc699520053da7cfeb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
