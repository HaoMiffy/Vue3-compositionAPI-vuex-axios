import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
const url = "/public/data.json";
export default {
  setup() {
    axios.get(url).then((res) => {
      console.log(res.data)
    })
  },
}


createApp(App).use(store).use(axios).use(router).mount('#app')
