import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
  }
  },
  actions: {
    getPosts({ commit }) {
      axios.get('/data.json')
          .then(response => {
          commit('SET_POSTS', response.data)
      })
  }
  },
  modules: {
  }
})
