//配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'

//导入组件(没有懒加载方式)
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

//导入组件(懒加载方式)
const Home = () => import('../components/Home');
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');
const About = () => import('../components/About');
const User = () => import('../components/User');
const Profile=()=>import('../components/Profile')

//1.通过Vue.ues(插件)，安装插件
Vue.use(Router)
//2.创建VueRouter对象
export default new Router({
  //配置路由和组件之间的映射关系
  routes: [
    {
      //设置默认路径 path是地址可以是''或者'/' 都一样，redirect是重定向页面地址。意思就是
      path: '',
      redirect: "/home"
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
           path: '',
           redirect: "news"
        },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:userId',
      component: User
    },
    {
      path: '/Profile',
      component: Profile
    }

  ],
  //使浏览器的url栏里面的url改变由location.hash="about"模式变为history.pushState({},'','about')
  //location.hash和history.pushState的区别在于前者会在url前加一个#号：'#/about'后者则直接'/about'
  mode: 'history',
  linkActiveClass: 'active'
})
