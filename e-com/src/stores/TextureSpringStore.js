import {defineStore} from "pinia";
import http from "../api/http.js";

export const useTextureSpringStore = defineStore('textureSpring', {
  state: () => ({
    categories: [],
    textures: [],
    allTextures: [],
    darkMode: 'light',
    error:null,
    page: 0,
    size: 25,
    priceSort: "",
    selectedCategory: "",
    totalPages:"",
    isFirst:false,
    isLast:false,
  }),
  actions: {
    async loadTextures(){
      try{
        const res = await http.get("http://localhost:8080/api/v1/textures", {
          params: {
            page: this.page,
            size: this.size,
            category: this.selectedCategory,
            priceSort: this.priceSort
          }
        })
        this.textures = res.data.content
        this.allTextures = res.data.content
        this.totalPages = res.data.totalPages
        this.page = res.data.number
        this.isFirst = res.data.first
        this.isLast = res.data.last
      }catch (err){
        console.log("error ", err)
        this.error = "Failed to load textures - " + err
      }
    },
    async loadCategories(){
      try {
        const res = await http.get("http://localhost:8080/api/v1/categories")
        this.categories = res.data
      } catch (err) {
        this.error = "Failed to load Categories"
      }
    },
    async filterCategory(cat) {
      if (cat){
        this.filtered = true
        this.selectedCategory = cat
        console.log(cat)
        await this.loadTextures()
      } else {
        this.this.selectedCategory = ""
      }
    },
    async allCategories(){
      this.textures = this.allTextures
      this.filtered = false
      this.selectedCategory = ""
      this.page = 0
      await this.loadTextures()
    },
    searchTexture(s){
      console.log(s)
      if (!s){
        this.textures = this.allTextures
      }
      this.textures = this.textures.filter(item => item.name.toLowerCase().includes(s.trim()))
    },
    async nextPage(){
      if (!this.isLast) {
        this.page += 1
        await this.loadTextures()
      }
    },
    async prevPage(){
      if (!this.isFirst){
        this.page -=1
        await this.loadTextures()
      }
    }
  },
})