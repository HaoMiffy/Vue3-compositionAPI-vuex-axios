<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
  <h1>{{data.newsdata}}</h1>
</template>

<script>
import { onMounted,reactive } from 'vue';
import axios from 'axios';
const url = "/data.json";
export default {
  setup() {
    onMounted(() => {
      axios.get(url)
        .then((res) => {
          console.log(res.data)
          data.newsdata = res.data
        })
    });
    const data = reactive({
      newsdata: '',
    })
    return {data};
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
