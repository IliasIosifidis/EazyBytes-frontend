import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";


const pinia = createPinia(App)
createApp(App)
  .use(pinia)
  .mount('#app')
