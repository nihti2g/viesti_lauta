import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/Home', name: 'Home', component: Home,
  },
  {
    path: '/Register', name: 'Register', component: Register,
  },
  {
    path: '/Login', name: 'Login', component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
