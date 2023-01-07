import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import{reactive, onMounted} from 'vue';

const url = '/data.json';
export default {
    setup() {
        const data = reactive({
            newsdata:'',
        })
        onMounted(() => {
            axios.get(url)
            .then((res)=>{
            console.log(res.data)
            data.newsdata = res.data
        })
    });
    return {data};
   },
}



createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app')
