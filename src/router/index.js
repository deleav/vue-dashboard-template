import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
// const Hello = resolve => require(['@/components/Hello'], resolve);
const Hello = () => import('@/components/Hello');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
  ],
});
