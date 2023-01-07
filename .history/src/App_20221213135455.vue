<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="container">
    <h1>{{ result.data.title }}</h1>
    <h1></h1>
    <div class="row">
      <div class="col-3" v-for="item in result.data" :key="item.title">
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

export default {
  mounted() {
    this.axios.get('/data.json')
      .then((res) => { console.table(res.data) })
      .catch((error) => { console.error(error) })

    this.axios({
      method: 'get',
      url: '/data.json',
    })
      .then((result) => { console.log(result.data) })
      .catch((err) => { console.error(err) })
  },
  setup() {

    return {};
  },
}


</script>



axios({
  method: 'get',
  url: "/data.json",
  data: {
    id: 'id',
    name: 'name'
  }
});


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
