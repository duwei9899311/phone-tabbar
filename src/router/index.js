import Vue from 'vue'
import Router from 'vue-router'

const Home=()=>import('../views/home/Home');
const Catetory=()=>import('../views/category/Catetory');
const Cart=()=>import('../views/cart/Cart');
const Profile=()=>import('../views/profile/Profile');

Vue.use(Router)
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/catetory',
    component:Catetory
  },
  {
    path:'/profile',
    component:Profile
  }
]

export default new Router({
  routes,
  mode:'history'
})
