import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import './plugins/bootstrap-vue'


Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.prototype.$ROOT_ORDENS = 'https://minhawebapi.azurewebsites.net/api/ordens';
Vue.prototype.$ROOT_ATIVOS = 'https://minhawebapi.azurewebsites.net/api/ativos';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app') 
