import {defineStore} from "pinia";
import textureData from "../assets/products/products.json"

export const useTextureStore = defineStore('texture', {
  state: () => ({
    textures: [],
    categories: [],
    filtered:false,
    isLoading: false,
    error:null,
    pageSize: 20,
    currentPage: 1,
    search: [],
  }),
  actions: {
    loadTextures() {
      try {
        this.isLoading = true
        this.error = null
        this.textures = textureData
      } catch (err) {
        console.error(err)
        this.error = "failed to load the textures"
      } finally {
        this.isLoading = false
      }
      const uniqueSet = new Set(this.textures.map(item => item.categories))
      this.categories = Array.from(uniqueSet)
    },
    filterCategory(cat) {
      if (cat){
        this.filtered = true
        this.textures = textureData
        this.textures = this.textures.filter(item => item.categories === cat)
      } else {
        this.textures = textureData
      }
    },
    allCategories(){
      this.textures = textureData
      this.filtered = false
    },
    setPage(page){
      if (page < 1) page = 1
      if (page > this.totalPages) page = this.totalPages
      this.currentPage = page
    },
    nextPage(){
      if (this.currentPage < this.totalPages) this.currentPage++
    },
    prevPage(){
      if (this.currentPage > 1) this.currentPage--
    },
    searchTexture(s){
      if (!s){
        this.textures =  textureData
      }
      this.textures = this.textures.filter(item => item.name.toLowerCase().includes(s.trim()))
    }
  },
  getters:{
    totalItems: (state) => state.textures.length,
    totalPages: (state) => Math.max(1, Math.ceil(state.textures.length / state.pageSize)),
    paginatedTextures: (state) => {
      const start = (state.currentPage -1) * state.pageSize
      const end = start + state.pageSize
      return state.textures.slice(start, end)},
    }
})