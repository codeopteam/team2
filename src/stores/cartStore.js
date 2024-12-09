import { defineStore } from "pinia";
import { updateCart, getCart } from "../firebase";


export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        showTickets: true,
    }),
    actions: {
        addItemToCart(item) {
            this.items.push(item)
            console.log(this.items)
            updateCart(this.items)
            // this.showCart()
        },

        showCart(){
            this.showTickets=this.showTickets;
        },

        dontShow(){
            this.showTickets=!this.showTickets;
        },

        async getItemsFromFirebase() {
            this.items = await getCart()
        },

        deleteItem(index) {
            this.items.splice(index, 1)
            updateCart(this.items)

        }
    },
    getters: {
        cartSize() {
            return this.items.length
        }
    }
         
})