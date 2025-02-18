
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { getFirestore, doc, setDoc, getDocs, collection, deleteDoc } from "firebase/firestore";

const fireBaseKey = import.meta.env.VITE_FIREBASE_api_key;

const firebaseConfig = {
    apiKey: fireBaseKey,
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


// Configurar persistencia para mantener la sesión
setPersistence(auth, browserLocalPersistence)
    .then(() => {
        // Esto asegura que la sesión de usuario se mantenga en el navegador
        console.log("Persistence set to local");
    })
    .catch((error) => {
        console.error("Error setting persistence:", error);
    });

export async function registerUser(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user; // Devuelve el usuario creado

    } catch (error) {
      throw error; // Lanza el error para que lo maneje el componente
    }
  }


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
export async function addToInterestedFirestore(event, userId) {
    try {
        const docRef = doc(dbFirestore, `users/${userId}/interested`, event.id);  // Usa el ID del evento como documento único
        await setDoc(docRef, event);
        console.log("Event added to Firestore (interested)");
    } catch (error) {
        console.error("Error adding event to Firestore:", error);
    }
}

// Obtener todos los eventos de la colección "interested" (Firestore Database)
export async function getInterestedFirestore(userId) {
    try {
        const userCollection = collection(dbFirestore, `users/${userId}/interested`);
        const querySnapshot = await getDocs(userCollection);
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
export async function deleteFromInterestedFirestore(eventId, userId) {
    if (!eventId) {
        console.error("Invalid eventId: cannot delete undefined event.");
        return;
      }
    try {
        const docRef = doc(dbFirestore, `users/${userId}/interested`, eventId);
        await deleteDoc(docRef);
        console.log("Event deleted from Firestore (interested)");

    } catch (error) {
        console.error("Error deleting event from Firestore:", error);
    }
}

export { app, auth, db, dbFirestore };