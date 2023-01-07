import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    data: []
  },
  getters: {
  },
  mutations: {
    SET_POSTS(state, data) {
      state.data = data
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
