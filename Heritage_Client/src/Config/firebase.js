
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFbs2k2FgRA-SiMx0MLmbMhKdeHTS148E",
  authDomain: "haritage-dc829.firebaseapp.com",
  projectId: "haritage-dc829",
  storageBucket: "haritage-dc829.appspot.com",
  messagingSenderId: "289426364812",
  appId: "1:289426364812:web:318c67bf88f5bf3a119ea9",
  measurementId: "G-7HCKD61D8W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
