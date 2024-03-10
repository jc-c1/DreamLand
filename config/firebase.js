// Import the functions you need from the SDKs you need
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1MjRC5fUm1sqqWV5nsdzOg-Ynf0ZvlLs",
  authDomain: "storytime-a08b0.firebaseapp.com",
  projectId: "storytime-a08b0",
  storageBucket: "storytime-a08b0.appspot.com",
  messagingSenderId: "524270919595",
  appId: "1:524270919595:web:9472db121186fc7982fcee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);