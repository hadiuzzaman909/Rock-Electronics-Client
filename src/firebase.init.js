// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDegl77Npf_GyhkMUEaoVw5O4FqQQLZ2YA",
  authDomain: "warehouse-management-33fdd.firebaseapp.com",
  projectId: "warehouse-management-33fdd",
  storageBucket: "warehouse-management-33fdd.appspot.com",
  messagingSenderId: "294100676595",
  appId: "1:294100676595:web:c646dce44ef00ace6fec86",
  measurementId: "G-9XJF48TSSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;