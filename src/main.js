import './assets/main.css'
import 'https://unpkg.com/@phosphor-icons/web'
import './assets/js/service-worker-settings'
import './assets/js/plugins/bootstrap'
import './assets/js/main'

import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia();

app.use(pinia)
app.use(router)

app.use(LoadingPlugin)

app.mount('#app')
