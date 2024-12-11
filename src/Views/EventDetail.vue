<template>
    <div>
      <h1 class="text-2xl font-bold">Event Detail {{  eventStore.item.name }}</h1>
      {{ console.log(eventStore) }}
    </div>
  </template>

  <script>
  import { useEventStore } from '../stores/eventStore';
  import { mapStores } from 'pinia';
  export default {
  name: "EventDetail",

  computed: {
        ...mapStores(useEventStore)
        
    },
   
}
  </script>