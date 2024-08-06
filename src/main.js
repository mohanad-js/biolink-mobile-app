import './assets/main.css'
import 'https://unpkg.com/@phosphor-icons/web'
import './assets/js/service-worker-settings'
import './assets/js/plugins/bootstrap'
import './assets/js/main'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
