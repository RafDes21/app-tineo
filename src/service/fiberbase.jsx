// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC448n1FAtM3vjVvd_etkB5LQ_hbbwFzZs",
  authDomain: "proyect-react-a0034.firebaseapp.com",
  projectId: "proyect-react-a0034",
  storageBucket: "proyect-react-a0034.appspot.com",
  messagingSenderId: "826432719491",
  appId: "1:826432719491:web:d2b1c40eda8961053f69b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db