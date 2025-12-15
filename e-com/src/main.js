import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import router from "./router/index.js";
import {useUserStore} from "./stores/UserStore.js";



const pinia = createPinia(App)
createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')

const userStore = useUserStore()
userStore.applyTheme()
