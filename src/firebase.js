import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/firestore";

export const auth = firebase.initializeApp({
    apiKey: "",
    authDomain: "unichat-e93a9.firebaseapp.com",
    projectId: "unichat-e93a9",
    storageBucket: "unichat-e93a9.appspot.com",
    messagingSenderId: "627788378128",
    appId: "1:627788378128:web:a301ef26fcecad05479a95"
  }).auth();
