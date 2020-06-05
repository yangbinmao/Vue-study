import Vue from 'vue';
import Router from 'vue-router';

//引入组件
const Home = () => import('../views/home/Home');

const Cart = () => import('../views/cart/Cart');
const Profile = () =>import('../views/profile/Profile');
const Category = () =>import('../views/category/Category');

Vue.use(Router);

const router= new Router({
  routes: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/profile',
        component: Profile
      },
      {
        path: '/category',
        component: Category
      }
  ],
  mode: 'history'
})

export default router;















//在main引用css,但是一般不建议在这个位置引用，而是在对应组件内的style标签内用@import(url)来引用css
// require('./assets/css/base.css')