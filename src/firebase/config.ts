// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwdp4tklHLA-E5UonkhhQXklFPYNJaHZg",
  authDomain: "image-gallery-44952.firebaseapp.com",
  projectId: "image-gallery-44952",
  storageBucket: "image-gallery-44952.appspot.com",
  messagingSenderId: "1096278162367",
  appId: "1:1096278162367:web:66d339c968f5b7428e3f0a"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export {auth, storage, db};