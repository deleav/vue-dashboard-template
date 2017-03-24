// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// third party add css style
import '@/assets/vendor/bootstrap-4.0.0/dist/css/bootstrap.css';
// third party add script
import '@/assets/vendor/bootstrap-4.0.0/dist/js/bootstrap';
// global scss
import '@/assets/index.scss';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
