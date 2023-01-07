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
        const res = await axios.get(
          "/data.json"
        );
        commit("SET_USERS", res.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  //to handle mutations
  mutations: {
    SET_USERS(state, data) {
      state.users = data;
    },
  },
  modules: {
  }
})
