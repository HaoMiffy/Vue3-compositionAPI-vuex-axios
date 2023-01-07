<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Made By Getters</h1>
    <div v-for="user in getUsers.posts" :key="user.id">
      {{ user.title }}
    </div>
    <h1>Made By Actions</h1>
    <div v-for="user in users.datas" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div>
  </div>
</template>

<script >
export default{
  computed:{
     users(){
      return this.$store.state.users
    },
    getUsers(){
      return this.$store.state.users
    }
  },
  mounted(){
    this.$store.dispatch("fetchUsers");
  },
  data() {
    return {
      msg:"Welcome to my Vuex Store"
    }
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
