<script setup>
import {useTextureSpringStore} from "../stores/textureSpringStore.js";
import {ref} from "vue";

const isDark = ref(false)
const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

</script>

<template>
  <div class="p-4 bg-gray-100 dark:bg-zinc-950 shadow-xl flex whitespace-nowrap items-center font-bold justify-center sm:gap-30 gap-2 outline-1 outline-stone-300 dark:shadow-xl dark:shadow-purple-950 dark:text-purple-400 text-purple-700 dark:text-shadow-violet-100 text-shadow-violet-950 text-mdg sm:text-2xl">
<!--    Logo-->
    <div class="bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent text-lg sm:text-xl font-bold">
      <h1 class="">Eazy Textures <i class="fa-solid fa-paint-roller"></i></h1>
    </div>
<!--    Header Items-->
    <header class="cursor-pointer flex text-shadow-sm sm:gap-15 gap-3 justify-center">
      <RouterLink class="hover:transform hover:scale-120 duration-100" to="/">Home</RouterLink>
      <RouterLink class="hover:transform hover:scale-120 duration-100" to="/about">About</RouterLink>
      <RouterLink class="hover:transform hover:scale-120 duration-100 " to="/contact">Contact</RouterLink>
      <RouterLink class="hover:transform hover:scale-120 duration-100" to="Login">Login</RouterLink>
      <div class="">
        <h1 class="hover:transform hover:scale-120 duration-100" v-if="isDark" ><i class="fa-solid text-yellow-400 fa-sun hover:text-shadow-sm text-shadow-yellow-500" @click="toggleDark"></i></h1>
        <h1 class="hover:transform hover:scale-120 duration-100" v-if="!isDark"><i class="fa-solid text-purple-900 fa-moon hover:text-shadow-lg text-shadow-purple-500" @click="toggleDark"></i></h1>
      </div>
    </header>
<!--    Basket icon-->
    <div class="hover:transform hover:scale-120 duration-100 sm:text-4xl cursor-pointer"><i class="fa-solid fa-cart-shopping"></i></div>
  </div>

</template>

<style scoped>

</style>