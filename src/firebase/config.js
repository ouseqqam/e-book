import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBKTbP10cx_fDgG1I3vPXBMtUoxQiv0PqE",
    authDomain: "e-book-84c78.firebaseapp.com",
    projectId: "e-book-84c78",
    storageBucket: "e-book-84c78.appspot.com",
    messagingSenderId: "846242375024",
    appId: "1:846242375024:web:f3cb913480947c766a9bb5",
    measurementId: "G-RPZPE35755"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {
  auth
}