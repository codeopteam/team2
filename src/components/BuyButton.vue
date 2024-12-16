<template>

    <button :class="['flex items-center text-darkBlue font-montserrat text-2xl rounded-md px-6 py-2 gap-2', customClasses]">
        <img :src="icon" alt="Button Icon" class="w-6 h-6"> {{ label }}
    </button>
 </template>
    
<script>

export default{

name: "BuyTicketButton",
props: {
    label: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    customClasses: {
      type: String,
      default: "", 
    },
},

};
    
    
</script>
    
    
<style>

</style>
    
    