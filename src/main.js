import Vue from 'vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

// 处理返回的数据，捕获异常
axios.interceptors.response.use(function(response) {
  const res = response.data;
  if (res.status === 0) {
    return res.data;
  } else if (data.status === 10) {
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
