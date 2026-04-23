import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheWelcome from './components/TheWelcome.vue'

const app = createApp(App)

app.component('GlobalCompA', TheWelcome).component('GlobalCompB', TheWelcome)

app.use(router)

app.mount('#app')
