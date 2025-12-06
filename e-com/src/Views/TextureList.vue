<script setup>

import {useTextureStore} from "../stores/textureStore.js";
import {onMounted} from "vue";

const textureStore = useTextureStore()
const getImageUrl = (image) => new URL(`../assets/products/${image}`, import.meta.url).href
onMounted(() =>{
  if (textureStore.textures !== null)
    textureStore.loadTextures()
})


</script>

<template>
<div class="p-2 mt-4">
  <h1 class="text-4xl my-5 font-bold italic text-center"> Find a texture that you like! </h1>
  <div class="flex bg-white flex-wrap gap-1">
    <div class="p-1" v-for="texture in textureStore.paginatedTextures">
      <article class="border bg-white border-gray-500 rounded-xl p-1 w-30 flex flex-col hover:scale-110 duration-150">
        <img :src="getImageUrl(texture.image)">
        <p class="text-gray-500 text-xs">{{ texture.categories }}</p>
        <p class="text-center line-clamp-2">{{texture.name}}</p>
        <p class="text-center text-md font-bold text-blue-500">${{texture.price}}</p>
      </article>
    </div>

  </div>
  <div class="flex items-center justify-center text-center gap-5 text-lg">
    <button class="cursor-pointer" @click="textureStore.prevPage()"><i class="text-sm text-gray-700 fa-solid fa-backward"></i>PrevPage</button>
    <p>{{textureStore.currentPage}} of {{textureStore.totalPages}}</p>
    <button class="cursor-pointer" @click="textureStore.nextPage">NextPage<i class="text-sm text-gray-700 fa-solid fa-forward"></i></button>
  </div>

</div>
</template>

<style scoped>

</style>