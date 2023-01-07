import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    users:[]
  },
  getters: {
    getUsers: (state) => state.users,
  },
  actions: {
async fetchUsers({ commit }) {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        commit("SET_USERS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  //to handle mutations
  mutations: {
    SET_POSTS(state, datas) {
      state.data = datas
    }
  },
  modules: {
  }
})
