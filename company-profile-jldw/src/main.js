import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../public/template/assets/css/bootstrap.min.css'
import '../public/template/assets/css/boxicon.min.css'
import '../public/template/assets/css/templatemo.css'
import '../public/template/assets/css/custom.css'

createApp(App).use(router).mount('#app')
