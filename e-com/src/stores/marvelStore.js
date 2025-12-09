import {defineStore} from "pinia";
import axios from "axios";
import http from "../api/http.js";

export const useMarvelStore = defineStore('marvel', {
  state: () => ({
    heroList: [],
  }),
  actions:{
    async fetchHeroes(){
      try{
        const res = await http.get("/products")
        this.heroList = res.data
      }catch (err){
        console.log(err)
      }
    }
  }
})