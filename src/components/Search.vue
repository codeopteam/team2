<template>
  <div class="border-r border-gray-300 gap-6 flex flex-col p-4 h-full">
    <h2 class="font-montserrat font-semibold text-xl">Filters</h2>
    <!-- <input v-model="cityUser" type="text" label="City" placeholder="City"
      class="bg-slate-200 rounded px-2 placeholder:text-darkGray h-10 font-montserrat"> -->
    <input v-model="date" type="date" placeholder="Date" class="bg-slate-200 rounded px-2 h-10 text-darkGray font-montserrat">
    <select v-model="eventType" class="bg-slate-200 rounded px-2 h-10 w-full text-darkGray font-montserrat">
      <option value="0">Event type</option>
      <option v-for="type in eventTypes" :key="type.id" :value="type.name">{{  type.name }}</option>
      <!-- <option value="1">Sport</option>
      <option value="2">Movie</option>
      <option value="3">Music</option> -->
    </select>
    <button @click="emitSearch" class="bg-yellowApp rounded px-2 h-10 font-montserrat">Find</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
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
              this.$emit('search', {date:this.date, eventType:this.eventType}) // Emitimos la ciudad al componente padre
         console.log({ date: this.date, eventType:this.eventType });

    }
  }
}
</script>

<style></style>