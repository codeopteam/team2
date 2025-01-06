// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// import router from "./router"
// import { createPinia } from 'pinia'
// import { useAuthStore } from './stores/auth';


// createApp(App)
// .use(router)
// .use(createPinia())
// .mount('#app')


import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { useAuthStore } from './stores/authStore'

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia).mount('#app');

// Verificar el estado de autenticación después de montar la app
const authStore = useAuthStore(pinia);
authStore.fetchUser();