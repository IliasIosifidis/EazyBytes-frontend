<script setup>
import {useTextureStore} from "../stores/textureStore.js";
import {ref} from "vue";

const textureStore = useTextureStore()
const open = ref(false)
</script>

<template>
<nav class="flex flex-col h-screen px-3 " >
  <div class="cursor-pointer flex flex-col text-lg font-bold">
    <p class="px-2 text-2xl text-gray-700"
       @click="open=!open">Categories <i :class="['text-lg fa-solid fa-angles-right', open? 'rotate-90 duration-300':'rotate-0 duration-400']"></i></p>
    <div class="p-2 rounded-l rounded-2xl hover:bg-amber-300 hover:text-rose-800 overflow-hidden transition-all duration-400" :class="[, open?'max-h opacity-100':'max-h-0 opacity-0 -translate-y-100 scale-x-0 scale-y-0']" v-for="cat in textureStore.categories" @click="textureStore.filterCategory(cat)">
      <p>{{cat}}</p>
    </div>
    <div class="p-2 mt-2 border-t border-gray-500 rounded-l hover:bg-red-400 hover:text-yellow-100" v-if="textureStore.filtered">
      <button class="cursor-pointer " @click="textureStore.allCategories()">All Categories <i class="text-xl fa-solid fa-circle-xmark"></i></button>
    </div>
<!--    {{textureStore.numberOfPages}}-->
  </div>
</nav>
</template>

<style scoped>

</style>