// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyAzBsis-sounWDg7UDf-zC7YnU7YZ1qDkY",
     authDomain: "simple-firebase-ece07.firebaseapp.com",
     projectId: "simple-firebase-ece07",
     storageBucket: "simple-firebase-ece07.appspot.com",
     messagingSenderId: "515362264462",
     appId: "1:515362264462:web:a4cb77be5412b1add140df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;