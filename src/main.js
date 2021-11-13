import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
// import Vuex from 'vuex'
import router from './router'
import store from './store';
import  useElementPlus from "../src/plugins/element-plus/index";
import  useTable from "../src/plugins/vxe-table/index";

import './assets/css/index.css'

const app = createApp(App)
app.use(useElementPlus).use(useTable).use(store).use(router)
app.mount('#app')
