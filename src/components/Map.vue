<template>
    <div id="map" class="p-1 h-72"></div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default {
    name: "Map",
    data() {
        return {
            map: null,
        }
    },
    props: {
        longitude: {
            type: Number,
            required: true,
        },
        latitude: {
            type: Number,
            required: true,
        },
    },
    // methods: {

    // },
    mounted() {
        if (this.latitude && this.longitude) {
            console.log(this.latitude)
            console.log(this.longitude)
           this.map = L.map("map").setView([this.latitude, this.longitude], 13); // Coordenadas y zoom inicial (Madrid)
        // Capa de OpenStreetMap
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);

        // Añade un marcador de ejemplo
        L.marker([this.latitude, this.longitude])
            .addTo(this.map)
            .bindPopup("Hola!")
            .openPopup();  
        } else {
            console.error("Coordenadas no válidas para inicializar el mapa.");
        }
       
    },
};
</script>

<style></style>