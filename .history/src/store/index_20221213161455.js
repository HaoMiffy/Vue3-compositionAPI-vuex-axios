import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    users: []
  },
  getters: {
    getUsers: (state) => state.users,
  },
  actions: {
    fetchUsers({ commit }) {

      const res = axios.get(
        "/data.json"
      );
      commit("SET_USERS", res.data);

    },
  },
  //to handle mutations
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  modules: {
  }
})
