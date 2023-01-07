<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div>
      <ul v-for='post in posts' :key='post.id'>
        <li>Post Title: {{post.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data () {
    return {
      msg: 'We are learning vuex!!'
    }
  },
  computed: {
    computed: mapGetters(['allPosts']),
  },
  mounted() {
    this.$store.dispatch("getPosts");
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
