// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvD159eoLrqBEcg7R_7QGHDZizZq-p4DU",
  authDomain: "job24n-98c42.firebaseapp.com",
  databaseURL: "https://job24n-98c42-default-rtdb.firebaseio.com",
  projectId: "job24n-98c42",
  storageBucket: "job24n-98c42.appspot.com",
  messagingSenderId: "542624439895",
  appId: "1:542624439895:web:d8d90db45619de8bbe8d12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
const database = getDatabase(app);

export  {db,database,app};
