import './assets/main.css'

import { createApp, readonly } from 'vue'
import App from './App.vue'
import router from './router'
import TheWelcome from './components/TheWelcome.vue'

const app = createApp(App)

app.component('GlobalCompA', TheWelcome).component('GlobalCompB', TheWelcome)

// provide global data, readonly - can't be changed
app.provide('msgFromMain', readonly('Message from main.js'))

app.use(router)

app.mount('#app')
