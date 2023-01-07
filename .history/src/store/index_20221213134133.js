import { createStore } from 'vuex'
import axios from 'axios'

const userRequest = axios.create({
  baseURL: "/data.json",
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
