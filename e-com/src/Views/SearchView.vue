<script setup>
import {useTextureStore} from "../stores/textureStore.js";
import {ref} from "vue";

const store = useTextureStore()
const searchText = ref()
const open = ref(false)
</script>

<template>
  <div class="px-5 text-lg font-bold  mt-15 text-gray-700">
    <p class="text-2xl text-gray-700 cursor-pointer" @click="open=!open">Search  <i class="fa-solid fa-magnifying-glass" v-if="!open"></i> <i class="fa-solid fa-circle-xmark" v-if="open"></i></p>
    <input class="border-3 max-w-40 indent-2 rounded border-black" v-model="searchText" @keyup="store.searchTexture(searchText)" v-if="open"/>
    <button @click="store.searchTexture(searchText)"></button>
    <div v-for="f in store.filteredTextures">
      {{f.name}}
    </div>
  </div>
</template>

<style scoped>

</style>