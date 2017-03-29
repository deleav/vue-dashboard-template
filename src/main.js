// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import VueCookie from 'vue-cookie';
// third party add script
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// third party add css style
// edit the file to change main style
import '@/assets/vendor/bootstrap-4.0.0/scss/bootstrap.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/scss/font-awesome.scss';
// import '@/assets/vendor/bootstrap-4.0.0/dist/js/bootstrap';
// global scss
import '@/assets/index.scss';

Vue.use(VueCookie);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
