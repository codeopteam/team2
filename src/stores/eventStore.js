import { defineStore } from "pinia";


export const useEventStore = defineStore('event', {
    state: () => ({
        item: { },       
    }),
    actions: {
        eventDetail(item) {
          this.item = item
            console.log(this.item)           
        },       
    },    
         
})