import './assets/main.css'
// import * as fundebug from "fundebug-javascript";
// import FundebugVue from "fundebug-vue";

// fundebug.apikey = "571366f27e1041e99f66cb7813d5dae5112abd00703a722886e768385be1e1e1"

import { createApp } from 'vue'
import App from './App.vue'

let a= '测试'
console.log(a);
// createApp(App).use(new FundebugVue(fundebug)).mount("#app");
createApp(App).mount('#app')
