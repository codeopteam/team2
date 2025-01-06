// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const fireBaseKey = import.meta.env.FIREBASE_api_key;


const firebaseConfig = {
    apiKey: "{fireBaseKey}",
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
export function updateCart(cartItems, userId) {
    if (!userId) {
        alert("User not logged in. Cannot save cart to database.");
        return
    }
    set(ref(db, `cart/${userId}`), cartItems);
}


//getter method - leer los datos de la coleccion "cart"
export async function getCart(userId) {
    if (!userId) {
        alert("User not logged in. Cannot fetch cart from database."); 
        return [];
    }
    const dbRef = ref(db);
    try {
        const snapshot = await get(child(dbRef, `cart/${userId}`));
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


