import { defineStore } from "pinia";
import { updateCart, getCart } from "../firebase";


export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        // showTickets: true,
    }),
    actions: {
        addItemToCart(item) {
            console.log(item)
            

            this.items.push(item)
            console.log(this.items)
            updateCart(this.items)
            // this.showCart()
        },

        // showCart(){
        //     this.showTickets= true;
        // },

        // dontShow(){
        //     this.showTickets= false;
        // },

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