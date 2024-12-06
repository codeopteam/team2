// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase, ref, set, get, child} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCF0hPnACeI6xbabM0v5LsAEnYmoAXZJuE",
    authDomain: "eventop-codeop.firebaseapp.com",
    databaseURL: "https://eventop-codeop-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "eventop-codeop",
    storageBucket: "eventop-codeop.firebasestorage.app",
    messagingSenderId: "262106920516",
    appId: "1:262106920516:web:5d7bdab519dac1354d6e11"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);


//setter method - escribir datos a la coleccion "cart" de mi DB 
export function updateCart(cartItems) {
    set(ref(db, "cart/"), cartItems);
}


//getter method - leer los datos de la coleccion "cart"
export async function getCart() {
    const dbRef = ref(db);
    try {
        const snapshot = await get(child(dbRef, "cart/"));
        if(snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data available");
            return []; 
        }
    } catch(error) {
        console.error(error);
    } 
}


