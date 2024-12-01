<template>
<div class="flex justify-center gap-3">
 <input v-model="cityUser" type="text" label="City" placeholder="City" class="bg-slate-200 rounded px-2 w-32 placeholder:text-gray-500">
 <input v-model="date" type="date" placeholder="Date" class="bg-slate-200 rounded px-2">
 <select v-model="eventType" class="bg-slate-200 rounded px-2">
 <option value="0">Event type</option>
 <option value="1">Sport</option>
 <option value="2">Movie</option>
 <option value="3">Music</option>
</select>
<button @click="emitSearch" class="bg-slate-200 rounded px-2">Find</button>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      cityUser: "",
      // date: "",
      // eventType: "",
    }
  },
  methods: {
    emitSearch() {
      if (this.cityUser.trim()) {
      this.$emit('search', this.cityUser) // Emitimos la ciudad al componente padre
      } else {
        alert("Por favor, ingresa una ciudad válida.");
      }
  
    }
  }
}
</script>

<style></style>