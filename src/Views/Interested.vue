<template>
    <div class="flex flex-col items-center">


        <div
            class="bg-gray-50 w-full max-w-screen-sm lg:w-1/2 overflow-y-auto pb-4 min-h-[60vh] flex flex-col mt-10 mb-10 px-4 lg:px-0">
            <div class="flex justify-start items-center my-2">
                <button class="border text-5xl border-none m-4" @click="$router.go(-1)">←</button>
                <!--Este método hace que el navegador regrese a la página anterior en el historial, similar a presionar el botón "atrás" del navegador. -->
                <h1 class="text-3xl ms-4">Interested Events</h1>
            </div>

            <!-- Lista de Tickets -->
            <ul v-for="(ev, index) in interestedStore.favoritesEvents" :key="index"
                class="bg-darkBlue text-white mt-4 border-b flex flex-col shadow-lg rounded-lg items-end w-full">
                <li
                    class="flex h-20 border-l-8 border-yellowApp text-md font-montserrat text-left pl-8 justify-between items-center w-full">
                    <span class="w-2/3">{{ ev.name }}</span>
                    <!-- <h6>{{ev.priceRanges[0].min}} €</h6> -->
                    <h6></h6>
                    <div class="ml-auto pr-8">
                        <div class="flex items-center">


                            <button class="shadow-lg rounded-xl w-6 px-1 ms-1"
                                @click="interestedStore.deleteEventInInterested(index)">
                                <img src="/Interested-Button.png" alt="Start blue Icon">
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { useInterestedStore } from '../stores/interestedStore';
import { mapStores } from 'pinia';

export default {
    name: "Interested",
    async mounted() {
        await this.interestedStore.loadInterestedFromFirestore();
    },
    methods: {
        async deleteEvent(ev, index) {
            await this.interestedStore.deleteEventInInterested(index);
        },
    },
    // components: {

    // },
    computed: {
        ...mapStores(useInterestedStore), //object interestedStore created
    }
}

</script>