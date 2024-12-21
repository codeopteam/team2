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
        // Método para agregar o quitar un evento a la lista de "interested"
        async addToInterested(ev) {
            try {
                if (!ev || !ev.id) {
                    console.error("Invalid event: cannot add to interested.");
                    return;
                }
                // Verifica si el evento ya está en favoritos
                const index = this.favoritesEvents.findIndex(eve => eve.id === ev.id);
                if (index === -1) {
                    // Si el evento no está en la lista, lo agregamos
                    this.favoritesEvents.push(ev);
                    this.interested = true;
                    // También agregamos el evento a Firestore
                    await addToInterestedFirestore(ev);
                } else {
                    // Si ya está en la lista, lo eliminamos
                    this.favoritesEvents.splice(index, 1);
                    this.interested = this.favoritesEvents.length > 0;
                    // Eliminamos el evento de Firestore
                    await deleteFromInterestedFirestore(ev.id);
                }
            } catch (error) {
                console.error("Error updating interested list:", error);
            }
            this.interested = this.favoritesEvents.length > 0;
        },

        // Método para eliminar un evento de la lista de favoritos
        async deleteEventInInterested(index) {
            try {
                if (this.favoritesEvents.length > index) {
                    const removedEvent = this.favoritesEvents.splice(index, 1)[0];
                    this.interested = this.favoritesEvents.length > 0;
                    // Eliminamos el evento de Firestore
                    await deleteFromInterestedFirestore(removedEvent.id);
                }
            } catch {
                console.error("Error deleting event from interested list:", error);
            }

        },

        // Método para cargar todos los eventos "interested" desde Firestore
        async loadInterestedFromFirestore() {
            try {
                const events = await getInterestedFirestore();
                this.favoritesEvents = events.filter(ev => ev?.id && ev?.name);// Filtra eventos válidos
                this.interested = this.favoritesEvents.length > 0;
            } catch {
                console.error("Error loading interested events from Firestore:", error);
            }
        },
    },
});