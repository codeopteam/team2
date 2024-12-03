<template>
    <div class="event-card shadow-md rounded p-4">
        <h3 class="text-lg font-bold">{{ event.name }}</h3>
        <p>{{ event.date }}</p>
        <p>{{ event.location }}</p>
        <a :href="event.link" target="_blank" class="text-blue-500 underline mt-2 block">
            More Details
        </a>
    </div>
</template>

<script>
export default {
    name: "EventCard",
    props: {
        event: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.event-card {
    background-color: #f9f9f9;
}
</style>