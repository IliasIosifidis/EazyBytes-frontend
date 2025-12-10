<script setup>
import {onMounted} from "vue";
import {useTextureSpringStore} from "../stores/textureSpringStore.js";

const textureStore = useTextureSpringStore()
onMounted(() =>{
  if (textureStore.textures !== null)
    textureStore.loadTextures()
})
</script>

<template>
  <div>
    <div class="p-2 mt-4 " v-if="!textureStore.error">
      <h1 class="text-4xl my-5 font-bold italic text-center"> Find a texture that you like! </h1>
      <div class="flex  flex-wrap gap-1">
        <div class="p-1" v-for="texture in textureStore.textures">
          <article class="border dark:bg-zinc-700 dark:text-zinc-50 border-gray-500 rounded-xl p-1 w-30 flex flex-col hover:scale-110 duration-150">
            <img class="rounded-lg" :src="`/products/${texture.image_url}`">
            <p class="text-gray-500 text-center dark:text-zinc-300 text-xs">{{ texture.categories }}</p>
            <p class="text-center line-clamp-2 h-12">{{texture.name}}</p>
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
    <div v-if="textureStore.error" class="text-4xl flex flex-col gap-4 items-center justify-center h-screen">
      <h1>Can't load the textures (≧﹏ ≦)</h1>
      <p class="italic text-2xl text-red-800">({{textureStore.error}})</p>
    </div>
  </div>


</template>

<style scoped>

</style>