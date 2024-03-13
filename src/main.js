import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import HomePage from './components/HomePage.vue'

import 'primevue/resources/themes/aura-light-lime/theme.css'

const app = createApp(HomePage);

app.use(PrimeVue);

app.mount('#app');