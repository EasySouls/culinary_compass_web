import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyA7OuafSyJLw-Sa19I1zxz_alPWCqHtnDM",

  authDomain: "culinary-compass.firebaseapp.com",

  projectId: "culinary-compass",

  storageBucket: "culinary-compass.appspot.com",

  messagingSenderId: "1089294314059",

  appId: "1:1089294314059:web:ad9927087720bd5f32bbce",

  measurementId: "G-01RQ9VQ5GJ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const analytics = getAnalytics(app);