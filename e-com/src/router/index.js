import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from "../Views/ContactView.vue";
import LoginView from "../Views/LoginView.vue";
import TextureDetailsView from '../views/TextureDetailsView.vue'

const routes = [
  {path: '/',name: 'home',component: HomeView},
  {path: '/about',name: 'about',component: AboutView},
  {path: '/contact',name: 'contact',component: ContactView},
  {path: '/login',name: 'login',component: LoginView},
  {path: '/textures/:id',name: 'texture-details',component: TextureDetailsView,props: true}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
