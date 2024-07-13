// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHEUDB9eyVo4JdtIJyj_Pyb-7nPp5eyTs",
  authDomain: "job24-ae151.firebaseapp.com",
  databaseurl:"https://job24-ae151-default-rtdb.firebaseio.com/",
  projectId: "job24-ae151",
  storageBucket: "job24-ae151.appspot.com",
  messagingSenderId: "486228837636",
  appId: "1:486228837636:web:db00dad08cf18b3d853c51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
const database = getDatabase(app);

export  {db,database,app};