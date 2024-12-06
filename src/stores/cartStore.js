import { defineStore } from "pinia";
import { updateCart, getCart } from "../firebase";


export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    actions: {
        addItemToCart(item) {
            this.items.push(item)
            console.log(this.items)
            updateCart(this.items)
        },
        async getItemFromFirebase() {
            this.items= await getCart()

        }
    },
    getters: {
        cartSize() {
            return this.items.length
        }
    }
         
})