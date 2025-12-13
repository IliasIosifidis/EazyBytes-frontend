import {defineStore} from "pinia";
import http from "../api/http.js";

export const useContactStore = defineStore('contact', {
  state:() => ({
    toast: {
      show:false,
      type:"success",
    },
    form: {
           name: '',
           email: '',
           mobileNumber:'',
           message: '',
         },
    loading: false,
    error: null,
    success:null
  }),
  actions: {
    async sendContact(){
      this.loading = true
      this.error = null
      this.succless = null
      try {
        const res = await http.post("http://localhost:8080/api/v1/contacts", this.form)
        this.success = "Message sent!"
        res.data
        alert("message sent", )
      } catch (err){
        console.log("error ", err)
        this.error = "Failed to send the message" + err
        alert("The message was not send, check for empty fields", this.error)
      } finally {
        this.loading = false
      }
    },
  }
})





