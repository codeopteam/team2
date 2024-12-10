<template>
  <div :class="[heightClass, 'bg-cover p-8 bg-[#2B293D] opacity-95']" :style="{ backgroundImage: `url(${imagePath})` }">
    <div class="flex justify-center">
      <div>
        <h2 class="text-4xl font-bold text-white mt-20 font-montserrat">{{ mainText }}</h2>
        <h3 class="text-4xl font-bold text-white mt-2 font-montserrat">
          {{ subTextBefore }} <span class="text-yellowApp">{{ highlightedText }}</span> {{ subTextAfter }}
        </h3>
        <div class="w-8/12 mx-auto">
        <input
          type="text"
          v-model="inputCityUser"
          class="mt-4 rounded-md bg-[url('../../Lupa.png')] bg-no-repeat bg-[left_14px_center] bg-[length:25px_25px] pl-14 w-full p-3 placeholder:text-2xl placeholder:text-[#636363]"
          placeholder="City"
          @keydown.enter="handleKeyDown"
        />
      </div>
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
