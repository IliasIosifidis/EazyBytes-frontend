import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import '@fortawesome/fontawesome-free/css/all.min.css';


const pinia = createPinia(App)
createApp(App)
  .use(pinia)
  .mount('#app')
