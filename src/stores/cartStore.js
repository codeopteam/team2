import { defineStore } from "pinia";
import { updateCart, getCart } from "../firebase";
import { useAuthStore } from "./auth

// function changeFormat(event){
//     let item = {
//         name: event.name,
//         sales: {
//             public: {
//                 startDateTime: "",
//                 endDateTime: ""
//             }
//         },
//         dates: {
//             start: {
//                 localDate: "",
//                 localTime: ""
//             }
//         },
//         images: []
//     };
//     return item; 
// }


export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        // showTickets: true,
        quantity: 0,
    }),
    actions: {
        addItemToCart(item) {
            console.log(item)

        const existingItemIndex = this.items.findIndex(existingItem => existingItem.name === item.name)
          
        if (existingItemIndex !== -1) {            
            this.items[existingItemIndex].quantity += 1
        } else {
            this.items.push({ ...item, quantity: 1 })
        }            
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
            if (this.items[index].quantity > 1) {
                this.items[index].quantity -= 1
            } else {
               this.items.splice(index, 1)                 
            }
        this.items = [...this.items];
        updateCart(this.items) 
        },
        deleteEventInCart(index) {           
            this.items.splice(index, 1)                 
            
            this.items = [...this.items];
            updateCart(this.items) 
        }
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