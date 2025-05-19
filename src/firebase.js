import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/firestore";

export const auth = firebase.initializeApp({
    apiKey: "process.env.apikey",
    authDomain: "process.env.authDomain",
    projectId: "process.env.projectId",
    storageBucket: "process.env.storageBucket",
    messagingSenderId: "process.env.messagingSenderId",
    appId: "process.env.appId"
  }).auth();
