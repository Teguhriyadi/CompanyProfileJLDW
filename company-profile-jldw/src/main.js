import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import '../public/template/assets/css/bootstrap.min.css'
import '../public/template/assets/css/boxicon.min.css'
import '../public/template/assets/css/templatemo.css'
import '../public/template/assets/css/custom.css'

axios.defaults.baseURL = "http://127.0.0.1:1234/api/"

createApp(App).use(router).mount('#app')
