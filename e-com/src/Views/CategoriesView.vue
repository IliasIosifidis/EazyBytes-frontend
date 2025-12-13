<script setup>
import {onMounted, ref} from "vue";
import {useTextureSpringStore} from "../stores/textureSpringStore.js";

const textureStore = useTextureSpringStore()
const open = ref(false)
onMounted(() =>
textureStore.loadCategories()
)
</script>

<template>
<nav class="flex flex-col h-screen px-0  sm:px-3" >
  <div class="cursor-pointer flex whitespace-nowrap text-lg font-bold">
    <div class="flex flex-col">
      <p class="px-0 sm:px-2 text-lg sm:text-2xl text-gray-700 dark:text-zinc-100"
         @click="open=!open">Categories <i :class="['sm:text-lg text-sm fa-solid fa-angles-right', open? 'rotate-90 duration-300':'rotate-0 duration-400']"></i></p>
      <div class="p-2 rounded-l rounded-2xl hover:bg-amber-300 hover:text-rose-800 overflow-hidden transition-all duration-400" :class="[open?'max-h opacity-100':'max-h-0 opacity-0 -translate-y-100 scale-x-0 scale-y-0']" v-for="cat in textureStore.textures">
        <p class="ml-5" @click="textureStore.filterCategory(cat.category)">{{cat.category}}</p>
      </div>
      <div class="p-2 mt-2 border-t border-gray-500 rounded-l hover:bg-red-400 hover:text-yellow-100" v-if="textureStore.filtered" >
        <button class="cursor-pointer " @click="textureStore.allCategories()">All Categories <i class="text-xl fa-solid fa-circle-xmark"></i></button>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>

</style>