import { createApp } from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import router from './router'
import store from './store'

import directives from './directives.js'

const app = createApp(App)
.use(Antd)
.use(router)
.use(store)

directives.forEach((value, key)=>{
    app.directive(key, value)
})

app.mount('#app')
