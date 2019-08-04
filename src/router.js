import VueRouter from 'vue-router'
import home from './components/home.vue'
import vip from './components/vip.vue'
import shopcar from './components/shopcar.vue'
import search from './components/search.vue'

let routerObj = new VueRouter({
  routes: [
    {path: '/',redirect: '/home'},
    {path: '/home',component: home},
    {path: '/vip',component: vip},
    {path: '/shopcar',component: shopcar},
    {path: '/search',component: search},
  ],
  linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类，默认的类叫做router-link-active
})

export default routerObj//向外暴露对象
