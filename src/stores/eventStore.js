import { defineStore } from "pinia";


export const useEventStore = defineStore('event', {
    state: () => ({
        item: {
            name: "",
            sales: {
                public: {
                    startDateTime: "",
                    endDateTime: ""
                }
            },
            dates: {
                start: {
                    localDate: "",
                    localTime: ""
                }
            },
            images: []
        },          
    }),
    actions: {
        eventDetail(item) {
          this.item = item
            console.log(this.item)           
        },       
    },    
         
})