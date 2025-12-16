<script setup>
import HeaderView from "./views/HeaderView.vue";
import FooterView from "./views/FooterView.vue";
import CategoriesView from "./views/CategoriesView.vue";
import SearchView from "./views/SearchView.vue";
import {onMounted} from "vue";
import {useUserStore} from "./stores/UserStore.js";

const userStore = useUserStore()
onMounted(() => userStore.restoreSession())
</script>

<template>

  <div class="h-screen flex flex-col dark:bg-zinc-900 dark:text-zinc-100">
    <HeaderView class="sticky top-0 z-10"/>
    <div class="flex flex-1 overflow-hidden">
      <div class="flex flex-col border-r border-gray-400 flex-none w-30 md:w-55 overflow-y-auto">
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