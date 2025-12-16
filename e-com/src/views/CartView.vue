<script setup>
import {useCartStore} from "../stores/CartStore.js";
import {onActivated, onMounted} from "vue";
import {useTextureSpringStore} from "../stores/TextureSpringStore.js";

const cartStore = useCartStore()
onMounted(async () => { await cartStore.loadCart()})
onActivated(async () => {await cartStore.loadCart(), console.log("activated")})

const decrementQty = (i) => {
  i.qty -= 1
  cartStore.updateQty(i.id, i.qty)
}
const incrementQty = (i) => {
  i.qty += 1
  cartStore.updateQty(i.id, i.qty)
}
</script>

<template>
<div class="p-6">
  <div v-if="cartStore.cart?.items?.length">
    <table class="min-w-full border-collapse border-zinc-700 text-lg">
      <thead class="text-left border-b">
        <tr>
          <th scope="col"> ID</th>
          <th scope="col"> Image</th>
          <th scope="col"> Texture ID</th>
          <th scope="col"> Quantity</th>
          <th scope="col"> Price</th>
          <th class="w-15" scope="col"> Total</th>
          <th scope="col" class="w-10"> Remove</th>
        </tr>
      </thead>
      <tbody v-for="item in cartStore.cart.items" class="text-start divide-y divide-gray-200 dark:divide-zinc-700 border-zinc-700">
        <tr class="hover:bg-zinc-200 dark:hover:bg-zinc-700">
          <td>{{item.id}}</td>
          <td><img :src="`/products/${item.textureImage}`" class="h-10"/></td>
          <td>{{item.textureName}}</td>
          <td> <i class="fa-solid fa-minus text-xs pr-4 cursor-pointer" @click="decrementQty(item)"></i> <span class="text-xl"> {{item.qty}} </span> <i class="fa-solid fa-plus cursor-pointer text-xs pl-2 " @click="incrementQty(item)"></i></td>
          <td class="text-blue-600 dark:text-blue-400">${{item.unitPrice}}</td>
          <td class="text-blue-600 dark:text-blue-400">${{(item.unitPrice * item.qty)}}</td>
          <td  @click="cartStore.removeItem(item.id)"><i class="fa-solid fa-circle-minus cursor-pointer hover:text-rose-500 hover:scale-115 duration-100"></i></td>
        </tr>
      </tbody>
      <tfoot class="text-lg font-bold">
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Total</td>
          <td class="text-emerald-600 dark:text-emerald-400">${{cartStore.total}}</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
  <div class="flex w-full justify-end" v-if="cartStore.total">
    <p class="text-xl text-rose-500 cursor-pointer hover:scale-140 p-6 duration-150 " @click="cartStore.clearCart"><i class="fa-solid fa-trash-can"></i></p>
  </div>

</div>
</template>

<style scoped>

</style>