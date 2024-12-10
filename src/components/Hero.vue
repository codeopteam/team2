<template>
  <div :class="[heightClass, 'bg-cover p-8 bg-[#2B293D] opacity-95']" :style="{ backgroundImage: `url(${imagePath})` }">
    <div class="flex justify-center">
      <div>
        <h2 class="text-2xl font-bold text-white mt-20 font-montserrat">{{ mainText }}</h2>
        <h3 class="text-2xl font-bold text-white mt-2 font-montserrat">
          {{ subTextBefore }} <span class="text-yellowApp">{{ highlightedText }}</span> {{ subTextAfter }}
        </h3>
        <input
          type="text"
          v-model="inputCityUser"
          class="mt-4 rounded-sm bg-[url('../../Lupa.png')] bg-no-repeat bg-[left_10px_center] bg-[length:20px_20px] pl-9 w-full pb-1"
          placeholder="City"
          @keydown.enter="handleKeyDown"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    mainText: {
      type: String,
      required: true,
    },
    subTextBefore: {
      type: String,
      required: true,
    },
    highlightedText: {
      type: String,
      required: true,
    },
    subTextAfter: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
    backgroundClass: {
      type: String,
      default: "",
    },
    heightClass: {
      type: String,
      default: "h-80",
    },
  },
  data() {
    return {
      inputCityUser: "",
    };
  },
  methods: {
    handleKeyDown() {
      this.$router.push({ name: "Results", params: { city: this.inputCityUser } }); // Redirige a la ruta '/results'
    },
  },
};
</script>
