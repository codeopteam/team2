<template>
    <h1>Search</h1>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "Search",
    data() {
      return {
        search: null,
        error: "",
        loading: false,
        events: []
      };
    },
    methods: {
      searchData() {
        this.error = "";
        this.loading = true;
  
        axios('https://app.ticketmaster.com/discovery/v2/events.json?apikey=dnXP9GPEbiPAAeB7O61vBwuP1pp1MY1t')
          .then(resp => {
            this.search = resp.data 
            console.log(this.search)
      })
          .catch(err => {
            console.error(err);
            this.error = "Error fetching data";
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    mounted() {
      this.searchData();
    }
  };
  </script>
  
  <style></style>
  
