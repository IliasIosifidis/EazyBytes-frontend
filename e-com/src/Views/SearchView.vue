<script setup>
import {ref} from "vue";
import {useTextureSpringStore} from "../stores/textureSpringStore.js";

const store = useTextureSpringStore()
const searchText = ref()
const open = ref(false)
</script>

<template>
  <div class="px-0 text-lg font-bold mt-5  sm:mt-15 text-gray-700 sm:px-5">
    <p class="text-lg sm:text-2xl dark:text-zinc-100 text-gray-700 cursor-pointer" @click="open=!open">Search  <i class="fa-solid fa-magnifying-glass" v-if="!open"></i> <i class="fa-solid fa-circle-xmark" v-if="open"></i></p>
    <input class="border-3 bg-zinc-100  max-w-28 sm:max-w-40 indent-2 rounded-lg border-black" v-model="searchText" @keyup="store.searchTexture(searchText)" v-if="open"/>
    <button @click="store.searchTexture(searchText)"></button>
    <div v-for="f in store.filteredTextures">
      {{f.name}}
    </div>
  </div>
</template>

<style scoped>

</style>