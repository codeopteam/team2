<template>
    <div v-if="search" class="flex flex-wrap gap-4 justify-center mt-8">
        <div v-for="event in search._embedded.events" :key="event.id"
            class="text-center mb-4 card py-4 px-2 shadow-md rounded w-[180px] h-60">
            <div class="flex flex-col justify-between h-full">
                <h4 class="font-bold"> {{ event.name }} </h4>


                <div v-for="(venue, index) in event._embedded.venues" :key="index">
                    <p>City: {{ venue.city?.name }}</p>
                    <p>Country: {{ venue.locale }}</p>
                </div>

                <p class="font-bold text-gray-500">More info</p>
            </div>


        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Header from '@/components/Header.vue';
import Search from '../components/Search.vue';
export default {
    name: "Home",
    data() {
        return {
            search: null,
            error: "",
            loading: false,
            // cities: [],
            // eventsByCity: []
        };
    },
    components: {
        Header, Search,
    },
    methods: {
        searchData(city) {

            this.error = "";
            this.loading = true;

            const apiKey = import.meta.env.VITE_API_KEY;

            const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&countryCode=ES`;

            
            axios(url)
                .then(resp => {
                    this.search = resp.data
                    // console.log(this.search)

                    if (city) {
                        this.search._embedded.events = this.search._embedded.events.filter(event =>
                            event._embedded.venues.some(venue =>
                                venue.city?.name.toLowerCase() === city.toLowerCase()
                            )
                        );
                    }

                    if (this.search._embedded.events.length === 0) {
                        this.error = "No se encontraron eventos para la ciudad ingresada.";
                    }
                })


                .catch(err => {
                    console.error(err);
                    this.error = "Error fetching data";
                })
                .finally(() => {
                    this.loading = false;
                });
        }
    },
    mounted() {
        this.searchData();
    }
};
</script>

<style>
.loader {
    width: 60px;
    aspect-ratio: 1;
    border-radius: 50%;
    -webkit-mask: linear-gradient(0deg, #000 55%, #0000 0) bottom/100% 18.18%;
    background:
        linear-gradient(#f03355 0 0) bottom/100% 0% no-repeat #ddd;
    animation: l8 2s infinite steps(7);
}

@keyframes l8 {
    100% {
        background-size: 100% 115%
    }
}
</style>