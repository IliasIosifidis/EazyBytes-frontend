<script setup>
import {useTextureSpringStore} from "../stores/textureSpringStore.js";
import {computed, ref} from "vue";

const props = defineProps({
  id: {
    type:String,
    required: true
  }
})
const textureStore = useTextureSpringStore()
const texture = computed(() =>
  textureStore.textures.find(t => t.id === Number(props.id))
)
const quantity = ref(1)
</script>

<template>
<div class="dark:bg-zinc-900 p-5 sm:p-2 h-dvh">
  <div class="sm:flex sm:flex-row flex flex-col h-130 bg-slate-100 sm:h-1/2 w-1/2 min-h-30 sm:min-h-100 min-w-60 sm:min-w-120 dark:bg-zinc-600 rounded-2xl border border-slate-400">
    <div class="bg-white sm:rounded-l-2xl rounded-2xl">
      <img class="p-1 w-full h-full object-contain grow" :src="`/products/${texture.imageUrl}`">
    </div>

    <div class="grow flex flex-col text-center gap-4 sm:gap-1 p-2 sm:p-6 justify-between">
      <p class="text-xl font-bold sm:text-2xl">{{texture.name}}</p>
      <p class="text-lg sm:text-xl dark:text-slate-100 text-slate-600">Category: {{texture.category}}</p>
      <p class="text-lg  sm:text-xl ">Price: <span class=" text-blue-600 dark:text-blue-400 text-lg sm:text-xl ">${{texture.price}}</span></p>

      <div class=" items-center">
        Qty: <input type="text" placeholder="1" class="text-xl text-center border rounded w-10" v-model="quantity"/>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col gap-2">
          <button class="shadow-sm hover:shadow-md shadow-purple-800 bg-purple-600 hover:bg-purple-500 py-1 px-2 text-lg sm:text-xl text-yellow-200 hover:text-yellow-300 rounded-lg hover:cursor-pointer hover:transform hover:scale-105 duration-150">Add to Cart <i class="fa-solid fa-cart-plus"></i></button>
          <button class="shadow-sm hover:shadow-md shadow-purple-800 bg-purple-600 hover:bg-purple-500 py-1 px-2 text-lg sm:text-xl text-yellow-200 hover:text-yellow-300 rounded-lg hover:cursor-pointer hover:transform hover:scale-105 duration-150  sm:text-lg ">View Cart <i class="fa-solid fa-cart-shopping text-lg sm:text-xl "></i></button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<style scoped>

</style>