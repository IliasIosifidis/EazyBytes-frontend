import {defineStore} from "pinia";
import http from "../api/http.js";
import {useCartStore} from "./CartStore.js";

export const useUserStore = defineStore("user",{
  state: () => ({
    signUpForm:{
      theme: localStorage.getItem("app:theme") || "light",
      name:"",
      email:"",
      password:"",
    },
    signInForm:{
      email:"",
      password:"",
    },
    user:null,
    repeatPassword:"",
    token:"",
    loggedIn:false,
    registered:false,
    showSignUp:false,
    success:"",
    error:"",
  }),
  actions:{
    async logIn(){
      this.success = null
      try{
        const res = await http.post(
          "/auth/login",
          this.signInForm,
          {withCredentials: true}
        )
        this.token = res.data.token
        this.userName = {
          name: res.data.name,
          email: res.data.email
        }
        this.loggedIn = true
        this.signInForm.email = ""
        this.signInForm.password = ""
        this.success = "Logged in successfully!"
        const cartStore = useCartStore()
        await cartStore.loadCart()
        alert(this.success)
        this.error = null
      }catch(err){
        console.log(err)
        this.loggedIn = false
        this.error = "Failed to log in"
        alert(this.error)
      }
    },
    async signUp(){
      this.success = null
      if (this.signUpForm.password !== this.repeatPassword){
        this.error = "Passwords do not match"
        alert(this.error)
        return}
      try{
        const res = await http.post("http://localhost:8080/api/v1/auth/register", this.signUpForm)
        this.success = "Registered Successfully!"
        this.registered = true
        this.error = null
        this.success = "Sign up successfully"
        alert(this.success)
      }catch (err){
        console.log(err)
        this.error = "Failed to Sign Up"
        alert(this.error)
        this.registered = false
        this.showSignUp = false
      }
    },
    async logOut(){
      const res = await http.post("/auth/logout")

      this.loggedIn = false
      this.user = res.data
    },
    async restoreSession(){
      try{
        const res = await http.get("/auth/me",{withCredentials: true})
        this.loggedIn = true
        this.user = res.data
      } catch {
        // if (err?.response?.status === 401) return
        this.loggedIn = false
        this.user = null
      }
    }
  }
})