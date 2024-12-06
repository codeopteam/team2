import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    actions: {
        addItemToCart(item) {
            this.items.push(item)
            console.log(this.items)
        }
    },
    getters: {
        cartSize() {
            return this.items.length
        }
    }
         
})