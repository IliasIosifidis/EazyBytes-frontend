import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from "../views/ContactView.vue";
import LoginView from "../views/LoginView.vue";
import TextureDetailsView from '../views/TextureDetailsView.vue'
import CartView from "../views/CartView.vue";

const routes = [
  {path: '/',name: 'Home',component: HomeView},
  {path: '/about',name: 'About',component: AboutView},
  {path: '/contact',name: 'Contact',component: ContactView},
  {path: '/login',name: 'Login',component: LoginView},
  {path: '/cart',name: 'Cart',component: CartView},
  {path: '/textures/:id',name: 'Texture-details',component: TextureDetailsView,props: true}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
