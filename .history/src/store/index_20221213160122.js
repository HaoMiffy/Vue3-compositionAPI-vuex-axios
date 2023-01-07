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
          "/data.json"
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
    SET_USERS(state, datas) {
      state.users = datas;
    },
  },
  modules: {
  }
})
