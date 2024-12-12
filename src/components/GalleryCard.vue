<template>
    <!-- <div class=" text-center items-center  py-4 px-2 rounded w-[300px] h-[300px] font-opensanz">
        <img :src="event.images[2]?.url" alt="Event image" class="w-full h-40 object-cover rounded" />
        <div class="flex flex-row">
            <div class="p-2">
                <p>MES</p>
                <p>dia</p>
                <h2>{{ event.date }}</h2>
            </div>
            <div class="text-left p-2">
                <p class="font-bold">{{ event.name }}</p>
                <p>{{ event.location }}</p>

            </div>
        </div>
    </div> -->

    <div
        class="text-center items-center py-2 px-2 rounded w-[300px] h-[260px] font-opensanz text-darkBlue flex-shrink-0">
        <img :src="event.images[2]?.url" alt="Event image" class="w-full h-36 object-cover rounded" />
        <div class="flex flex-row p-2">
            <div class="w-1/5 h-3/5">
                <p class="text-sm text-purple font-bold">{{ new Date(event.dates.start.localDate).toLocaleString('en-EN', {
                    month: 'short'
                }).toUpperCase() }}
                </p>
                <p class="text-sm">{{ new Date(event.dates.start.localDate).getDate() }}</p>
            </div>
            <div class="text-left w-4/5 h-2/5">
                <p class="font-bold  text-xs">{{ event.name }}</p>
                <p class="text-xs">{{ event._embedded.venues[0]?.name }}</p>
                <p class="text-xs">{{ event._embedded.attractions[0]?.name }}</p>
                <h2 class="text-xs">{{ new Date(`${event.dates.start.localDate}T${event.dates.start.localTime}`).toLocaleTimeString('en-EN', { hour: '2-digit', minute: '2-digit', hour12: false }) }}</h2>
                <div>
                    <img src="" alt="">
                    <h4 class="text-xs font-bold">
                    <!-- Mostrar precio mínimo o rango -->
                    {{ event.priceRanges ? `$${event.priceRanges[0]?.min} - $${event.priceRanges[0]?.max}` : 'Price not available' }}
                </h4>
                </div>
            </div>
        </div>
    </div>


</template>
<!-- <div class="flex flex-col justify-between h-full">
    <h4 class="font-bold"> {{ event.name }} </h4>

    <div v-for="(venue, index) in event._embedded.venues" :key="index">
        <p>City: {{ venue.city?.name }}</p>
        <p>Country: {{ venue.country?.name }}</p>
    </div>

    <p class="font-bold text-gray-500">More info</p>
    </div> -->

<script>
export default {
    name: "GalleryCard",
    props: {
        event: {
            type: Object,
            required: true,
        },
    },

};
</script>

<style scoped>
.gallery-card {
    background-color: #f9f9f9;
}
</style>