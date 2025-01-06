
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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


const app = initializeApp(firebaseConfig); // Initialize Firebase

const auth = getAuth(app);  // Inicializar autenticación

const db = getDatabase(app); // Realtime Database

const dbFirestore = getFirestore(app); //firestore


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


// Agregar un evento a "interested" (Firestore Database)
export async function addToInterestedFirestore(event) {
    try {
        const docRef = doc(dbFirestore, "interested", event.id);  // Usa el ID del evento como documento único
        await setDoc(docRef, event);
        console.log("Event added to Firestore (interested)");
    } catch (error) {
        console.error("Error adding event to Firestore:", error);
    }
}

// Obtener todos los eventos de la colección "interested" (Firestore Database)
export async function getInterestedFirestore() {
    try {
        const querySnapshot = await getDocs(collection(dbFirestore, "interested"));
        const events = [];
        querySnapshot.forEach((doc) => {
        events.push(doc.data());
        });
        return events;
    } catch (error) {
        console.error("Error fetching interested events:", error);
    }
}

// Eliminar un evento de la colección "interested" (Firestore Database)
export async function deleteFromInterestedFirestore(eventId) {
    if (!eventId) {
        console.error("Invalid eventId: cannot delete undefined event.");
        return;
      }
    try {
        const docRef = doc(dbFirestore, "interested", eventId);
        await deleteDoc(docRef);
        console.log("Event deleted from Firestore (interested)");

    } catch (error) {
        console.error("Error deleting event from Firestore:", error);
    }
}



export { app, auth, db, dbFirestore };



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth,  createUserWithEmailAndPassword } from "firebase/auth";
// import { getDatabase, ref, set, get, child } from "firebase/database";
// import { getFirestore, doc, setDoc, getDoc, collection, getDocs, deleteDoc } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// const fireBaseKey = import.meta.env.VITE_FIREBASE_api_key;

// const firebaseConfig = {
//     apiKey: `${fireBaseKey}`,
//     authDomain: "eventop-codeop.firebaseapp.com",
//     databaseURL: "https://eventop-codeop-default-rtdb.europe-west1.firebasedatabase.app/",
//     projectId: "eventop-codeop",
//     storageBucket: "eventop-codeop.firebasestorage.app",
//     messagingSenderId: "262106920516",
//     appId: "1:262106920516:web:5d7bdab519dac1354d6e11"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// // Get a reference to the database service
// const db = getDatabase(app); //realtime
// const dbFirestore = getFirestore(app); //firestore

// export async function registerUser(email, password) {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       return userCredential.user; // Devuelve el usuario creado


//     } catch (error) {
//       throw error; // Lanza el error para que lo maneje el componente
//     }
//   }

// //setter method - escribir datos a la coleccion "cart" de mi DB 
// export function updateCart(cartItems) {
//     set(ref(db, "cart/"), cartItems);
// }

// //getter method - leer los datos de la coleccion "cart"
// export async function getCart() {
//     const dbRef = ref(db);
//     try {
//         const snapshot = await get(child(dbRef, "cart/"));
//         if(snapshot.exists()) {
//             return snapshot.val();
//         } else {
//             console.log("No data available");
//             return []; 
//         }
//     } catch(error) {
//         console.error(error);
//     } 
// }



// export { db, dbFirestore, auth };