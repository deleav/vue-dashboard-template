import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
// import Login from '@/components/Login';
// single async components
const Hello = () => import('@/components/Hello');
const Login = () => import('@/components/Login');
const SignIn = () => import('@/components/SignIn');

// const Hello = resolve => require(['@/components/Hello'], resolve)
// const Login = resolve => require(['@/components/Login'], resolve)

// const Hello = r => require.ensure([], () => r(require('@/components/Hello')), 'hello-foo')
// const Login = r => require.ensure([], () => r(require('@/components/Login')), 'hello-foo')

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
    }, {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }, {
      path: '*',
      redirect: '/login'
    }
  ],
});
