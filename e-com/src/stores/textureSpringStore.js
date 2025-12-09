import {defineStore} from "pinia";
import http from "../api/http.js";

export const useTextureSpringStore = defineStore('textureSpring', {
  state: () => ({
    textures: [],
    categories: [],
    allTextures: [],
    filtered:false,
    isLoading: false,
    error:null,
    pageSize: 20,
    currentPage: 1,
    search: [],
  }),
  actions: {
    async loadTextures(){
      try{
        const res = await http.get("/textures")
        this.textures = res.data
        this.allTextures = res.data
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
    // setPage(page){
    //   if (page < 1) page = 1
    //   if (page > this.totalPages) page = this.totalPages
    //   this.currentPage = page
    // },
    // nextPage(){
    //   if (this.currentPage < this.totalPages) this.currentPage++
    // },
    // prevPage(){
    //   if (this.currentPage > 1) this.currentPage--
    // }
    searchTexture(s){
      if (!s){
        this.textures = this.allTextures
      }
      this.textures = this.textures.filter(item => item.name.toLowerCase().includes(s.trim()))
    }
  },
  // getters:{
  //   totalItems: (state) => state.textures.length,
  //   totalPages: (state) => Math.max(1, Math.ceil(state.textures.length / state.pageSize)),
  //   paginatedTextures: (state) => {
  //     const start = (state.currentPage -1) * state.pageSize
  //     const end = start + state.pageSize
  //     return state.textures.slice(start, end)},
  //   }
})