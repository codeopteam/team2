<template>
  <div class="border-r border-gray-300 gap-6 flex flex-col p-4 h-full">
    <h2 class="font-montserrat font-semibold text-xl">Filters</h2>
     <input v-model="eventName" type="text" label="City" placeholder="Event name"
      class="bg-slate-200 rounded px-2 placeholder:text-darkGray h-10 font-montserrat">
    <input v-model="date" type="date" placeholder="Date" class="bg-slate-200 rounded px-2 h-10 text-darkGray font-montserrat">
    <!-- <select v-model="eventType" class="bg-slate-200 rounded px-2 h-10 w-full text-darkGray font-montserrat">
      <option value="0">Event type</option>
      <option v-for="type in eventTypes" :key="type.id" :value="type.name">{{  type.name }}</option>
    </select> -->
    <button @click="emitSearch" class="bg-yellowApp rounded px-2 h-10 font-montserrat">Find</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      eventName: "",
       date: "",
       eventType: "",
       eventTypes: [
        {id: 1, name: "Sports"},
        {id: 2, name: "Movie"},
        {id: 3, name: "Music"},
       ]
    }
  },
  methods: {
    emitSearch() {
              this.$emit('search', {eventName: this.eventName, date:this.date, eventType:this.eventType}) // Emitimos la ciudad al componente padre
         console.log({ date: this.date, eventType:this.eventType });

    }
  }
}
</script>

<style></style>