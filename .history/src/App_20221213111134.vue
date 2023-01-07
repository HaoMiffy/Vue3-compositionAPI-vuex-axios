<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="container">
    <h1>{{data.newsdata.title}}</h1>
    <div class="row">
      <div class="col-3" v-for="item in data.newsdata.datas" :key="item.title">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ item.id }}</h5>
            <h5 class="card-text">
              {{ item.name }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
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
    return { data };
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
