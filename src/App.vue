<template>
  <div id="app">
    <Layout />
  </div>
</template>



<script>
import Layout from './views/Layout.vue';
import { useCartStore } from './stores/cartStore';
import { mapStores } from 'pinia';
export default {
  components: {
    Layout,
  },

  mounted() {
      this.cartStore.getItemsFromFirebase()

    },
    computed: {
        ...mapStores(useCartStore)

    },

};
</script>




<!-- <template>
  <Search></Search>
</template>

<script>

import Search from './views/Search.vue';
export default {
  name: "App",
  components: {
    Search,
},

}
</script>

<style></style> -->