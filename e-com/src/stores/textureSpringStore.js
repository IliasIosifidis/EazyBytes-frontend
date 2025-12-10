import {defineStore} from "pinia";
import http from "../api/http.js";

export const useTextureSpringStore = defineStore('textureSpring', {
  state: () => ({
    textures: [],
    allTextures: [],
    darkMode: 'light',
    error:null,
  }),
  actions: {
    async loadTextures(){
      try{
        const res = await http.get("/textures")
        this.textures = res.data
        this.allTextures = res.data
        console.log(res.data)
      }catch (err){
        console.log("error", err)
        this.error = "failed to load textures - " + err
      }
    },
    filterCategory(cat) {
      if (cat){
        this.filtered = true
        this.textures = this.allTextures.filter(item => item.categories === cat)
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