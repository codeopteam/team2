import { defineStore } from "pinia";
import { auth, addToInterestedFirestore, getInterestedFirestore, deleteFromInterestedFirestore } from "../firebase";

export const useInterestedStore = defineStore('interested', {
  state: () => ({
    favoritesEvents: [],
    interested: false,
  }),

  getters: {
    interestedSize(state) {
      return state.favoritesEvents.length;
    },
  },

  actions: {
    // Método para cargar todos los eventos "interested" desde Firestore
    async loadInterestedFromFirestore() {
        const user = auth.currentUser;
        if (!user) {
            alert("No user logged in. Cannot load interested events.");
            this.favoritesEvents = [];
            this.interested = false;
            return;
        }

        try {
          const events = await getInterestedFirestore(user.uid);
          if (Array.isArray(events)) {
            this.favoritesEvents = events.filter(event => event?.id && event?.name); // Filtrar eventos válidos
          } else {
            this.favoritesEvents = [];
          }
          this.interested = this.favoritesEvents.length > 0;
        } catch (error) {
          console.error("Error loading interested events from Firestore:", error);
          this.favoritesEvents = []; 
          this.interested = false;
        }        
      },

    // Método para agregar un evento a la lista de favoritos
    async addToInterested(event) {
        if (!event || !event.id) {
            alert("Invalid event: cannot add or remove from interested.");
            return;
        }
        const user = auth.currentUser;
        if(!user) {
            alert("No user logged in. Cannot add to interested events.");
            return;
        }
    
        // Verificar si el evento ya está en favoritos
        const index = this.favoritesEvents.findIndex(e => e.id === event.id);
    
        try {
            if (index === -1) {
                // Si no está en favoritos, lo agregamos
                this.favoritesEvents.push(event);
                await addToInterestedFirestore(event, user.uid);
            } else {
                // Si ya está en favoritos, lo eliminamos
                this.favoritesEvents.splice(index, 1);
                await deleteFromInterestedFirestore(event.id, user.uid);                
            }
    
            // Actualizar el estado de `interested`
            this.interested = this.favoritesEvents.length > 0;
        } catch (error) {
            console.error("Error updating interested events:", error);
        }
    },

    // Método para eliminar un evento de la lista de favoritos
    async deleteFromInterested(eventId) {
      if (!eventId) {
        console.error("Invalid event ID: cannot delete.");
        return;
      }

      const user = auth.currentUser;
      if(!user) {
        alert("No user logged in. Cannot delete from interested events.");
        return;
      }

      const index = this.favoritesEvents.findIndex(event => event.id === eventId);
      if (index === -1) {
        console.log("El evento no existe en favoritos.");
        return;
      }

      try {
        this.favoritesEvents.splice(index, 1);
        await deleteFromInterestedFirestore(eventId, user.uid);
        this.interested = this.favoritesEvents.length > 0;
      } catch (error) {
        console.error("Error deleting event from Firestore:", error);
      }
    },
  },
});