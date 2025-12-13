import {defineStore} from "pinia";
import http from "../api/http.js";

export const useTextureSpringStore = defineStore('textureSpring', {
  state: () => ({
    categories: [],
    textures: [],
    allTextures: [],
    darkMode: 'light',
    error:null,
  }),
  actions: {
    async loadTextures(){
      try{
        const res = await http.get("http://localhost:8080/api/v1/textures")
        this.textures = res.data
        this.allTextures = res.data
      }catch (err){
        console.log("error", err)
        this.error = "Failed to load textures - " + err
      }
    },
    async loadCategories(){
      try{
        const res = await http.get("http://localhost:8080/api/v1/categories")
        this.categories = res.data
        // console.log(res.data)
      }catch (error){
        console.log(error)
        this.error = "Failed to load Categories"
      }
    },
    filterCategory(cat) {
      if (cat){
        this.filtered = true
        this.textures = this.allTextures.filter(item => item.category === cat)
      } else {
        this.textures = this.allTextures
      }
    },
    allCategories(){
      this.textures = this.allTextures
      this.filtered = false
    },
    searchTexture(s){
      console.log(s)
      if (!s){
        this.textures = this.allTextures
      }
      this.textures = this.textures.filter(item => item.name.toLowerCase().includes(s.trim()))
    },
  },

})