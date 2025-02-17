import { defineStore } from 'pinia';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, getAuth } from "firebase/auth";
import { auth } from '../firebase';
import { useCartStore } from './cartStore'; // Ajusta la ruta según tu estructura
import { useInterestedStore } from './interestedStore';

// Inicializa Firebase Auth
//const auth = getAuth();

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        loading: false,
        error: null,
    }),
    actions: {
        async login(email, password) {
         this.loading = true;
         this.error = null;
         try {
         const userCredential = await signInWithEmailAndPassword(auth, email, password);
         this.user = userCredential.user;   
         } catch (error) {
            this.error = error.message;
         } finally {
            this.loading = false;
         } 
        
        },
      async register(email, password) {
        this.loading = true;
        this.error = null;
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            this.user = userCredential.user;
        } catch (error) {
            this.error = error.message;
        } finally {
            this.loading = false;
        }     
      },
      async logout() {
        this.error = null;
        
        try {
            await signOut(auth).then( () => {
             this.user = null; 
            //  this.user = null; 
            });
                     
        } catch (error) {
          this.error = error.message;
        }
      },
      async fetchUser() {
        this.loading = true;
        this.error = null;
        try {
          return new Promise((resolve) => {
            onAuthStateChanged(auth, async (user) => {
              console.log("Estado de autenticación cambiado:", user);
              this.user = user;
      
              if (user) {
                // Sincronizar datos relacionados
                const cartStore = useCartStore();
                const interestedStore = useInterestedStore();
      
                await cartStore.getItemsFromFirebase();
                await interestedStore.loadInterestedFromFirestore();
              }
      
              resolve(user);
              this.loading = false;
            });
          });
        } catch (error) {
          console.error("Error en fetchUser:", error);
          this.error = error.message;
        }
      }
    },

});