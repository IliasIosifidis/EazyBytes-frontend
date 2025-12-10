<script setup>

import HeaderView from "./Views/HeaderView.vue";
import FooterView from "./Views/FooterView.vue";
import CategoriesView from "./Views/CategoriesView.vue";
import SearchView from "./Views/SearchView.vue";
import TextureSpringList from "./Views/TextureSpringList.vue";
import {ref} from "vue";

</script>

<template>
  <div class="h-screen flex flex-col dark:bg-zinc-900 dark:text-zinc-100">
    <HeaderView class="sticky top-0 z-10"/>
    <div class="flex flex-1 overflow-hidden">
      <div class="flex flex-col border-r border-gray-400 flex-none w-30 md:w-50">
        <SearchView/>
        <CategoriesView/>
      </div>
      <div class="flex-1 overflow-y-auto ">
        <RouterView/>
      </div>
    </div>
    <FooterView/>
  </div>

</template>

<style scoped>

</style>