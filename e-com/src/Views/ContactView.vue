<script setup>

import {useContactStore} from "../stores/ContactStore.js";

const store = useContactStore()

</script>

<template>
<form class="flex mt-12 justify-center items-center gap-2 text-xl text-slate-700 dark:text-slate-200">
  <form class="flex flex-col w-150 gap-2 bg-slate-100 dark:bg-slate-800 border border-slate-500 dark:border-slate-700 p-6 rounded-xl">
    <h1 class="text-center text-2xl font-bold">Contact Us (well... me)</h1>
<!--    name input-->
    <div class="flex flex-col">
      <p>Name</p>
      <input type="text" class="bg-slate-50 border dark:bg-slate-300 border-slate-500 rounded-lg text-slate-800 text-lg px-1" placeholder="Your Name" v-model="store.form.name" required/>
    </div>
<!--    email and mobile-->
    <div class="flex gap-4 justify-stretch ">
<!--      email-->
      <div class="flex flex-col w-full">
        <p>Email</p>
        <input type="text" class="bg-slate-50 border dark:bg-slate-300 border-slate-500 rounded-lg text-slate-800 text-lg px-1" placeholder="email like name@gmail.com" v-model="store.form.email" required/>
      </div>
<!--      mobile-->
      <div class="flex flex-col w-full">
        <p>Mobile Number</p>
        <input type="tel" class="bg-slate-50 border dark:bg-slate-300 border-slate-500 rounded-lg text-slate-800 text-lg px-1" placeholder="69********" v-model="store.form.mobileNumber" required/>
      </div>
    </div>
    <!--      Message-->
    <div class="flex flex-col">
      <p>Message</p>
      <textarea rows="4" class="bg-slate-50 border dark:bg-slate-300 border-slate-500 rounded-lg text-slate-800 text-lg px-1" placeholder="Your message..." v-model="store.form.message" required/>
    </div>
    <div class="flex justify-center gap-5 items-center">
      <button class="shadow-sm hover:shadow-md shadow-purple-800 bg-purple-600 hover:bg-purple-500 py-1 px-2 text-2xl text-yellow-200 hover:text-yellow-300 rounded-lg hover:cursor-pointer hover:transform hover:scale-105 duration-150" @click="store.sendContact">Send Message</button>
      <p class="text-md text-green-500" v-if="store.success"> I received your message!</p>
      <p class="text-md text-red-500" v-if="store.error"> Something went wrong 🤔</p>
    </div>
  </form>
</form>


</template>

<style scoped>

</style>