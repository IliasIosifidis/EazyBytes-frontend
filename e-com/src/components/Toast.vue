<script setup>

const props = defineProps({
  show:null,
  type:"success",
  messages:"message"
})

</script>
  <transition name="fade">
    <div v-if="show" class="fixed top-4, right-4 z-50 p-3 rounded-xl shadow-lg">
<!--      {{message}}-->
    </div>
  </transition>
<template>

</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>