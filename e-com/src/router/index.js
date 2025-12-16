import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from "../views/ContactView.vue";
import LoginView from "../views/LoginView.vue";
import TextureDetailsView from '../views/TextureDetailsView.vue'
import CartView from "../views/CartView.vue";

const routes = [
  {path: '/',name: 'home',component: HomeView},
  {path: '/about',name: 'about',component: AboutView},
  {path: '/contact',name: 'contact',component: ContactView},
  {path: '/login',name: 'login',component: LoginView},
  {path: '/cart',name: 'cart',component: CartView},
  {path: '/textures/:id',name: 'texture-details',component: TextureDetailsView,props: true}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
