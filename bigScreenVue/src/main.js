import { createApp } from 'vue'
// 重置样式
import "normalize.css"
import '@/assets/index.css'
import router from './router/index'
import App from './App.vue'

createApp(App).use(router).mount('#app')
