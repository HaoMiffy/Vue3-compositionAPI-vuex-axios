import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    "data":[]
  },
  getters: {
  },
  actions: {
    getPosts({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          commit('SET_POSTS', response.data)
        })
    }
  },
  //to handle mutations
  mutations: {
    SET_POSTS(state, p) {
      state.data = p
    }
  },
  modules: {
  }
})
