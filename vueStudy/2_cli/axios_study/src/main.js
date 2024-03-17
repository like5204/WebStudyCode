import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8002";
//定义统一url，后续使用axios发送请求可以不用写这部分

Vue.prototype.$http = axios;
//vue2 挂载axios到Vue上， 在组件里使用this.$http() 调用

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
