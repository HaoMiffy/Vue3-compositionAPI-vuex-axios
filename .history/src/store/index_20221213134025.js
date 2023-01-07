import { createStore } from 'vuex'
import axios from 'axios'

const userRequest = axios.create({
  baseURL: "/data.json",
})

export default createStore({
  state: {
    getUsers() { return userRequest.get( "/data.json") },
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
