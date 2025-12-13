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
        console.log("error ", err)
        this.error = "Failed to load textures - " + err
      }
    },
    filterCategory(cat) {
      if (cat){
        this.filtered = true
        this.textures = this.allTextures.filter(item => item.category.replace("Physical","").replace("4K","").replace("5","").trim() === cat)
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
  getters:{
    categories(state){
      const uniqueCat = new Set(state.allTextures.map(t => t.category.replace("Physical","").replace("4K","").replace("5","").trim()))
      return Array.from(uniqueCat)
    }
  }

})