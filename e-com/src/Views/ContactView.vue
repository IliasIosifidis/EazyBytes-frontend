<script setup>
import axios from "axios";
import {ref} from "vue";

const name = ref('')
const email = ref('')
const mobileNumber = ref('')
const message = ref('')

const success = ref(null)
const error = ref(null)

const sendContact = async() => {
  success.value = null
  error.value = null

  try{
    await axios.post("http://localhost:8080/api/v1/contacts", {
      name: name.value,
      email: email.value,
      mobileNumber: mobileNumber.value,
      message: message.value,
    })
    success.value = "Message sent",
      name.value = ''
      email.value = ''
      mobileNumber.value = ''
      message.value = ''
      console.log(mobileNumber.value)
  } catch (err){
    console.log(err)
    error.value = "Failed to send the message"
  }
}
</script>

<template>
<div class="flex mt-12 justify-center items-center gap-2 text-xl text-slate-700 dark:text-slate-200">
  <div class="flex flex-col w-150 gap-2 bg-slate-100 dark:bg-slate-800 border border-slate-500 dark:border-slate-700 p-6 rounded-xl">
    <h1 class="text-center text-2xl font-bold">Contact Us (well... me)</h1>
<!--    name input-->
    <div class="flex flex-col">
      <p>Name</p>
      <input type="text" class="bg-slate-50 border dark:bg-slate-300 border-slate-500 rounded-lg text-slate-800 text-lg px-1" placeholder="Your Name" v-model="name" required/>
    </div>
<!--    email and mobile-->
    <div class="flex gap-4 justify-stretch ">
<!--      email-->
      <div class="flex flex-col w-full">
        <p>Email</p>
        <input type="text" class="bg-slate-50 border dark:bg-slate-300 border-slate-500 rounded-lg text-slate-800 text-lg px-1" placeholder="email like name@gmail.com" v-model="email" required/>
      </div>
<!--      mobile-->
      <div class="flex flex-col w-full">
        <p>Mobile Number</p>
        <input type="tel" class="bg-slate-50 border dark:bg-slate-300 border-slate-500 rounded-lg text-slate-800 text-lg px-1" placeholder="69********" v-model="mobileNumber" required/>
      </div>
    </div>
    <!--      Message-->
    <div class="flex flex-col">
      <p>Message</p>
      <textarea rows="4" class="bg-slate-50 border dark:bg-slate-300 border-slate-500 rounded-lg text-slate-800 text-lg px-1" placeholder="Your message..." v-model="message" required/>
    </div>
    <div class="flex justify-center gap-5 items-center">
      <button class="shadow-sm hover:shadow-md shadow-purple-800 bg-purple-600 hover:bg-purple-500 py-1 px-2 text-2xl text-yellow-200 hover:text-yellow-300 rounded-lg hover:cursor-pointer hover:transform hover:scale-105 duration-150" @click="sendContact">Send Message</button>
      <p class="text-md text-green-500" v-if="success"> I received your message!</p>
      <p class="text-md text-red-500" v-if="error"> Something went wrong 🤔</p>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>