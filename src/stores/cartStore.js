import { defineStore } from "pinia";
import { updateCart, getCart } from "../firebase";
import { useAuthStore } from "./authStore";

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],        
        quantity: 0,
    }),
    actions: {
        async addItemToCart(item) {
            console.log(item)
            const authStore = useAuthStore();
            const userId = authStore.user ? authStore.user.uid : null;
            const existingItemIndex = this.items.findIndex(existingItem => existingItem.name === item.name)
          
            if (existingItemIndex !== -1) {            
                this.items[existingItemIndex].quantity += 1
            } else {
                this.items.push({ ...item, quantity: 1 })
            }    
            
            // Guarda en Firebase solo si el usuario está autenticado
            if (userId) {
               updateCart(this.items, userId)
            } else {
                alert("User not logged in. Cart is local only")
            }

            },        
            

        async getItemsFromFirebase() {
            const authStore = useAuthStore();
            const userId = authStore.user ? authStore.user.uid : null;
            if (userId) {
                this.items = await getCart(userId);
            } else {
                alert("User not logged in. No cart data to fetch.");
            }       
        },

        deleteItem(index) {
            if (this.items[index].quantity > 1) {
                this.items[index].quantity -= 1
            } else {
               this.items.splice(index, 1)                 
            }
        this.items = [...this.items];


        const authStore = useAuthStore();
        const userId = authStore.user ? authStore.user.uid : null;
            if (userId) {
                updateCart(this.items, userId);
            }
        },

        deleteEventInCart(index) {             
            this.items.splice(index, 1); 
            this.items = [...this.items];
            const authStore = useAuthStore();
            const userId = authStore.user ? authStore.user.uid : null;
            
            
            if (userId) {
                updateCart(this.items, userId);
            } else {
                // Si no está autenticado, almacenamos el carrito localmente.
                localStorage.setItem("cart", JSON.stringify(this.items));
            }
        },
        setItems(items) { 
            this.items = items || [];
          },
    },
    getters: {       
        getTotalPrice() {
            return this.items.reduce((total, item) => {
                return total + item.priceRanges[0].min * item.quantity;
            }, 0);
        },
        cartSize() {
            return this.items.reduce((sum, item) => sum + item.quantity, 0);
        },
    }         
})