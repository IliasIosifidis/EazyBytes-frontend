import {defineStore} from "pinia";
import http from "../api/http.js";

export const useCartStore = defineStore("cart",{
  state: () => ({
    cart:null,
    loading: false,
    error:null,
    total:0,
  }),
  actions: {
    async loadCart(){
      this.loading = true
      try{
        const res = await http.get("/cart")
        this.cart = res.data
        this.total = res.data.total
      } catch (e) {
        this.error = "Failed to load cart"
      } finally {
        this.loading = false
      }
    },
    async addToCart(textureId, qty = 1){
      const res = await http.post("/cart/items", {textureId, qty})
      this.cart = res.data
    },
    async updateQty(itemId, qty){
      const res = await http.put(`/cart/items/${itemId}`, {qty})
      this.cart = res.data
      await this.loadCart()
    },
    async removeItem(itemId){
      const res = await http.delete(`/cart/items/${itemId}`)
      this.cart = res.data
    },
    async clearCart(){
      const res =await http.delete("/cart")
      this.cart = res.data
    }
  }
})