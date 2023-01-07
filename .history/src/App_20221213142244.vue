<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div id="app">
    <h1>Bitcoin Price Index</h1>
    <div v-for="currency in info" class="currency" :key="currency.id">
      {{ currency.id }}:
    </div>
    <div>
      {{ currency.name }}
    </div>
  </div>
</template>
<script>
import axios from 'axios'
const data = newsdata
const url ='/data.json'
export default {
  data() {
    return {
      newsdata: ""
    }
  },
  mounted() {
    axios.get(url)
      .then((res) => {
        console.log(res.data)
        data.newsdata = res.data
      })
  }
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
