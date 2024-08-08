// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjYjE6xJNDUHZhdelK89QafQXAYYM_daY",
  authDomain: "pantry-tracker-26a6c.firebaseapp.com",
  projectId: "pantry-tracker-26a6c",
  storageBucket: "pantry-tracker-26a6c.appspot.com",
  messagingSenderId: "590494732581",
  appId: "1:590494732581:web:639ea437fca4fbe7cbcacc",
  measurementId: "G-EJ189SRCPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}