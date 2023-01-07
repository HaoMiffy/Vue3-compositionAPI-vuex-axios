import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
   
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    login (context) {
      axios({
        method: 'get',
        url: '/data.json',
        id: context.state.id,
        name: context.state.name,
      })
    }  },
  modules: {
  }
})
