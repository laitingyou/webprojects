import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import App from './App.vue'
import router from './router'
// import vant from 'vant'
import 'vant/lib/index.css'
import './style/common.less'

const app = createApp(App)
// app.use(vant)
app.use(router)
app.mount('#app')
