<template>
<div class="flex justify-center gap-3">
 <input type="text" label="City" placeholder="City" class="bg-slate-200 rounded px-2 w-32 placeholder:text-gray-500">
 <input type="date" placeholder="Date" class="bg-slate-200 rounded px-2">
 <select class="bg-slate-200 rounded px-2">
 <option value="0">Event type</option>
 <option value="1">Sport</option>
 <option value="2">Movie</option>
 <option value="3">Music</option>
</select>
<button class="bg-slate-200 rounded px-2">Find</button>
  </div>
</template>

<script>
export default {
  name: "Filters",
}
</script>

<style></style>