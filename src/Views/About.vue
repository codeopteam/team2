<template>
  <div class="flex justify-center items-center h-auto my-10 gap-5 flex-col md:flex-row">
    <div v-for="(person, index) in people" :key="index" class="w-40 justify-center items-center text-center text-xs">
      <img class="rounded-full shadow-lg" :src="person.image" alt="">
      <p class="text-sm">{{ person.name }}</p>
      <p>{{ person.description }}</p>
      <div class="flex justify-around items-center">
        <a :href="person.links.linkedin" target="_blank">
          <img class="rounded w-5" src="/linkedIn-logo2.gif" alt="">
        </a>
        <a :href="person.links.github" target="_blank">
          <img class="rounded w-6" src="/github-logo.gif" alt="">
        </a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      people: [
        {
          name: "Zora",
          description: "Meditativa",
          image: "/zoraida.jpeg",
          links: {
            linkedin: "https://www.linkedin.com/in/zoraida-moreno/",
            github: "https://github.com/ZoraidaMorenoCadenas"
          }
        },
        {
          name: "Yali",
          description: "La Veloz",
          image: "/yalina.png",
          links: {
            linkedin: "https://www.linkedin.com/in/yalinag%C3%B3mez-frontend-developer/",
            github: "https://github.com/yali1986"
          }
        },
        {
          name: "Ale",
          description: "El Paciente",
          image: "/mavita.png",
          links: {
            linkedin: "https://www.linkedin.com/in/mavafigalloz/",
            github: "https://github.com/AlejandroMurr"
          }
        },
        {
          name: "Mava",
          description: "La Persistente",
          image: "/mavita.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/mavafigalloz/",
            github: "https://github.com/mavafiza"
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Puedes añadir estilos adicionales si lo necesitas */
</style>
