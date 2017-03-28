import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
// import Login from '@/components/Login';
// single async components
const Hello = () => import('@/components/Hello');
const Login = () => import('@/components/Login');
const SignIn = () => import('@/components/SignIn');
const Dashboard = () => import('@/components/Dashboard');
const Home = () => import('@/components/Home');
const Project = () => import('@/components/Project');

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
      component: Dashboard,
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          component: Home
        }, {
          path: 'project',
          component: Project
        }
      ]
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
