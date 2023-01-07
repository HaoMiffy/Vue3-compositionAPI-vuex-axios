import { createStore } from 'vuex'
import axios from 'axios'

const userRequest = axios.create({
  baseURL:"http://localhost:8080/",
  headers: { 'Content-Type': "/" },
})

export default createStore({
  state: {
   
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getUsers() { return userRequest.get( "/data.json") },
  },
  modules: {
  }
})
