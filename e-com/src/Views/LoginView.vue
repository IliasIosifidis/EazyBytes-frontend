<script setup xmlns:dark="http://www.w3.org/1999/xhtml">
import {useUserStore} from "../stores/UserStore.js";

const store = useUserStore()
</script>

<template>
<!--    login-->
    <div v-if="!store.loggedIn && !store.showSignUp">
      <form class="flex mt-12 justify-center items-center gap-2 text-xl text-slate-700 dark:text-slate-200" @submit.prevent="store.logIn">
        <div class="flex flex-col gap-2 bg-slate-100 dark:bg-slate-800 border border-slate-500 dark:border-slate-700 p-6 rounded-xl">
          <h1 class="text-3xl text-center">Login</h1>
          <p>Email:</p>
          <input type="text" class="bg-slate-50 border dark:bg-slate-300 border-slate-500 rounded-lg text-slate-800 text-lg px-1" v-model="store.signInForm.email" required/>
          <p>Password:</p>
          <input type="password" class="bg-slate-50 border dark:bg-slate-300 border-slate-500 rounded-lg text-slate-800 text-lg px-1" v-model="store.signInForm.password" required/>
          <div class="flex flex-col gap-1 justify-center items-center mt-3">
            <button type="submit" class="shadow-sm hover:shadow-md shadow-purple-800 bg-purple-600 hover:bg-purple-500 py-1 px-2 text-xl text-yellow-200 hover:text-yellow-300 rounded-lg hover:cursor-pointer hover:transform hover:scale-105 duration-150">Sign In</button>
            <p>-or-</p>
            <button type="button" class="shadow-sm hover:shadow-md shadow-purple-800 bg-purple-600 hover:bg-purple-500 py-1 px-2 text-xl text-yellow-200 hover:text-yellow-300 rounded-lg hover:cursor-pointer hover:transform hover:scale-105 duration-150" @click="store.showSignUp = true">Sign Up</button>
          </div>
        </div>
      </form>
    </div>

<!--    SignUp-->
    <div v-if="store.showSignUp">
      <form class="flex mt-12 justify-center items-center gap-2 text-xl text-slate-700 dark:text-slate-200" @submit.prevent="store.signUp">
        <div class="flex flex-col gap-2 bg-slate-100 dark:bg-slate-800 border border-slate-500 dark:border-slate-700 p-6 rounded-xl">
          <h1 class="text-3xl text-center">Sign Up</h1>
          <p>Username:</p>
          <input type="text" class="bg-slate-50 border dark:bg-slate-300 border-slate-500 rounded-lg text-slate-800 text-lg px-1" v-model="store.signUpForm.name" required/>
          <p>Password:</p>
          <input type="password" class="bg-slate-50 border dark:bg-slate-300 border-slate-500 rounded-lg text-slate-800 text-lg px-1" v-model="store.signUpForm.password" required/>
          <p>Repeat Password:</p>
          <input type="password" class="bg-slate-50 border dark:bg-slate-300 border-slate-500 rounded-lg text-slate-800 text-lg px-1" v-model="store.repeatPassword" required/>
          <p>Email:</p>
          <input type="email" class="bg-slate-50 border dark:bg-slate-300 border-slate-500 rounded-lg text-slate-800 text-lg px-1" v-model="store.signUpForm.email" required/>
          <button type="submit" class="shadow-sm hover:shadow-md shadow-purple-800 bg-purple-600 hover:bg-purple-500 py-1 px-2 text-xl text-yellow-200 hover:text-yellow-300 rounded-lg hover:cursor-pointer hover:transform hover:scale-105 duration-150 mt-4" @click="store.signUp()">Sign Up</button>
          <button type="submit" class="shadow-sm hover:shadow-md shadow-purple-800 bg-purple-600 hover:bg-purple-500 py-1 px-2 text-xl text-yellow-200 hover:text-yellow-300 rounded-lg hover:cursor-pointer hover:transform hover:scale-105 duration-150 mt-4" @click="store.showSignUp = false">Back</button>
        </div>
      </form>
    </div>

<!--  LogOut-->
  <div v-if="store.loggedIn">
    <div class=" flex items-center justify-center p-6">
      <div class="flex flex-col gap-2 bg-slate-100 dark:bg-slate-800 border border-slate-500 dark:border-slate-700 p-6 rounded-xl">
        <h1 class="text-3xl text-center">Log out</h1>
        <button type="submit" class="shadow-sm hover:shadow-md shadow-rose-800 bg-rose-600 hover:bg-rose-500 py-1 px-2 text-xl text-yellow-200 hover:text-yellow-300 rounded-lg hover:cursor-pointer hover:transform hover:scale-105 duration-150 mt-4" @click="store.logOut()">Log out</button>
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>