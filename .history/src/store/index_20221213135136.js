import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    "title": "table",

    data: [
      {
        "id": 1,
        "name": "Max"
      },
      {
        "id": 2,
        "name": "Joy"
      },
      {
        "id": 3,
        "name": "Josh"
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    login(context) {
      axios({
        method: 'get',
        url: '/data.json',
        data: context.state.data
      })
    }
  },
  modules: {
  }
})
