// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB2aF6HuLi_F5FiSm2rW8RgEDLd4sd_hQ",
  authDomain: "camaroncinesdiscorruption.firebaseapp.com",
  projectId: "camaroncinesdiscorruption",
  storageBucket: "camaroncinesdiscorruption.appspot.com",
  messagingSenderId: "38563945847",
  appId: "1:38563945847:web:c0d344a1f724028f101572"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

