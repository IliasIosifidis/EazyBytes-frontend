<script setup>
import {onMounted} from "vue";
import {useTextureSpringStore} from "../stores/textureSpringStore.js";

const textureStore = useTextureSpringStore()
onMounted(() =>{
  if (textureStore.textures !== null)
    textureStore.loadCategories()
    textureStore.loadTextures()
})
</script>

<template>
<div>
  <div>
    <div class="sm:p-2 p-0 sm:mt-4 mt-0" v-if="!textureStore.error">
<!--      Textures List-->
      <h1 class="sm:text-4xl tex-lg my-5 font-bold italic text-center"> Find a texture that you like! </h1>
      <div class="flex  flex-wrap gap-1">
        <div class="sm:p-1" v-for="texture in textureStore.textures" :key="texture.id">
          <RouterLink :to="{name:'texture-details', params: {id: texture.id}}" class="block">
            <article class="border dark:bg-zinc-700 dark:text-zinc-50 border-gray-500 rounded-xl p-1 sm:w-30 w-20 flex flex-col hover:scale-110 duration-150">
              <img class="rounded-lg" :src="`/products/${texture.imageUrl}`">
              <p class="text-gray-500 text-center dark:text-zinc-300 text-sm sm:visible invisible sm:h-auto h-0">{{ texture.category }}</p>
              <p class="text-center sm:text-md text-xs line-clamp-2 sm:h-12">{{texture.name}}</p>
              <p class="text-center sm:text-md text-xs font-bold text-blue-500">${{texture.price}}</p>
            </article>
          </RouterLink>
        </div>
      </div>
<!--      Pagination-->
      <div class="flex items-center justify-center text-center gap-5 text-lg">
        <button class="cursor-pointer" @click="textureStore.prevPage()"><i class="text-sm text-gray-700 fa-solid fa-backward"></i>PrevPage</button>
        <p>{{textureStore.page}} of {{textureStore.totalPages}}</p>
        <button class="cursor-pointer" @click="textureStore.nextPage">NextPage<i class="text-sm text-gray-700 fa-solid fa-forward"></i></button>
      </div>
    </div>
    <div v-if="textureStore.error" class="text-4xl flex flex-col gap-4 items-center justify-center h-screen">
      <h1>Can't load the textures (≧﹏ ≦)</h1>
      <p class="italic text-2xl text-red-800">({{textureStore.error}})</p>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>