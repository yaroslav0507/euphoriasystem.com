// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2x4_l2gaIFs_gtDlCOAcSilR2xvTpaq8",
  authDomain: "euphoria-system.firebaseapp.com",
  projectId: "euphoria-system",
  storageBucket: "euphoria-system.appspot.com",
  messagingSenderId: "964755437101",
  appId: "1:964755437101:web:abad064c10dd715f96eaa4",
  measurementId: "G-ZY738632M7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);