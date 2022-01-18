import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDhlcAkAy4iutPbKbp_qdLRJ1djtfAbJtU",
    authDomain: "whats-app-clone-6f90d.firebaseapp.com",
    projectId: "whats-app-clone-6f90d",
    storageBucket: "whats-app-clone-6f90d.appspot.com",
    messagingSenderId: "943642447483",
    appId: "1:943642447483:web:34b5de9726c905ab0e1cde",
    measurementId: "G-PBKM8CG503"
  }; 

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;