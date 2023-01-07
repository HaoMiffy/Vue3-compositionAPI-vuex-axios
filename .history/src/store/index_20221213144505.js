import { createStore } from 'vuex'
import axios from 'axios'


const url ='/data.json'

export default createStore({
  state: {
    newsdata:''
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getdata() {
      axios.get(url)
      .then((res) => {
        console.log(res.data)
        this.newsdata = res.data
      })
    }
  },
  modules: {
  }
})
