// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{GoogleAuthProvider, getAuth,signInWithPopup, signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut,} from "firebase/auth";
import{getFirestore, query, getDocs, collection, where, addDoc,} from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAcYdcmGI0a2qEEUsQeQ7g2eoT28NZOVv4",
    authDomain: "kurir-4fec4.firebaseapp.com",
    // databaseURL: "https://reactnativefirebase-00000.firebaseio.com",
    projectId: "kurir-4fec4",
    storageBucket: "kurir-4fec4.appspot.com",
    messagingSenderId: "111000193801",
    appId: "1:111000193801:web:2e6056a17772fd0100e1d8"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db};