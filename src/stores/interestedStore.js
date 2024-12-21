import { defineStore } from "pinia";
import { addToInterestedFirestore, getInterestedFirestore, deleteFromInterestedFirestore } from "../firebase";

export const useInterestedStore = defineStore('interested', {
  state: () => ({
    favoritesEvents: [],
    interested: false,
  }),

  getters: {
    interestedSize() {
      return this.favoritesEvents.length;
    },
  },

  actions: {
    // Método para cargar todos los eventos "interested" desde Firestore
    async loadInterestedFromFirestore() {
        try {
          const events = await getInterestedFirestore();
          if (Array.isArray(events)) {
            this.favoritesEvents = events.filter(event => event?.id && event?.name); // Filtrar eventos válidos
          } else {
            this.favoritesEvents = [];
          }
          this.interested = this.favoritesEvents.length > 0;
        } catch (error) {
          console.error("Error loading interested events from Firestore:", error);
          this.favoritesEvents = []; // Asegúrate de no mostrar datos inválidos
          this.interested = false;
        }
      },

    // Método para agregar un evento a la lista de favoritos
    async addToInterested(event) {
        if (!event || !event.id) {
            console.error("Invalid event: cannot add or remove from interested.");
            return;
        }
    
        // Verificar si el evento ya está en favoritos
        const index = this.favoritesEvents.findIndex(e => e.id === event.id);
    
        try {
            if (index === -1) {
                // Si no está en favoritos, lo agregamos
                this.favoritesEvents.push(event);
                await addToInterestedFirestore(event);
            } else {
                // Si ya está en favoritos, lo eliminamos
                this.favoritesEvents.splice(index, 1);
                await deleteFromInterestedFirestore(event.id);                
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

      const index = this.favoritesEvents.findIndex(event => event.id === eventId);
      if (index === -1) {
        console.warn("El evento no existe en favoritos.");
        return;
      }

      try {
        this.favoritesEvents.splice(index, 1);
        await deleteFromInterestedFirestore(eventId);
        this.interested = this.favoritesEvents.length > 0;
      } catch (error) {
        console.error("Error deleting event from Firestore:", error);
      }
    },
  },
});
