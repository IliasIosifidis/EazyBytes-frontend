<script setup>

import HeaderView from "./Views/HeaderView.vue";
import FooterView from "./Views/FooterView.vue";
import CategoriesView from "./Views/CategoriesView.vue";
import TextureList from "./Views/TextureList.vue";
import SearchView from "./Views/SearchView.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <HeaderView class="sticky top-0 "/>
    <div class="flex">
      <div class="flex flex-col border-r border-gray-400 ">
        <SearchView/>
        <CategoriesView/>
      </div>
      <TextureList class="flex-4"/>
    </div>
    <FooterView/>
  </div>

</template>

<style scoped>

</style>