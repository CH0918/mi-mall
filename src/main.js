import Vue from 'vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import baseURL from './env';
import App from './App.vue';
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = baseURL.baseURL;
// mock 开关
const flag = true;
if (flag) {
  require('./mock/api');
}
// 处理返回的数据，捕获异常
axios.interceptors.response.use(function(response) {
  const res = response.data;
  if (res.status === 0) {
    return res.data;
  } else if (res.status === 10) {
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
});
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
