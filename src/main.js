import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import router from './router'
import store from './store';
import  useElementPlus from "../src/plugins/element-plus/index";
import  useTable from "../src/plugins/vxe-table/index";
import 'element-plus/dist/index.css'

import './assets/css/index.css'
console.log(import.meta.env)
console.log(ElementPlus)
const app = createApp(App)
app.use(ElementPlus).use(useTable).use(store).use(router)
app.mount('#app')
