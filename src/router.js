import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import vip from './components/tabbar/vip.vue'
import shopCar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import newList from "./components/news/newlist.vue"
import newsInfo from "./components/news/newsinfo.vue"
import photolist from "./components/photos/photolist.vue"
import photoinfo from "./components/photos/photoinfo.vue"
import goodslist from "./components/goods/goodslist.vue";

let routerObj = new VueRouter({
  routes: [
    { path: '/',redirect: '/home' },
    { path: '/home',component: home },
    { path: '/vip',component: vip },
    { path: '/shopcar',component: shopCar },
    { path: '/search',component: search },
    { path: '/home/newlist',component: newList },
    { path: '/home/newlist/newsinfo/:id',component: newsInfo },
    { path: '/home/photolist',component: photolist},
    { path: '/home/photoinfo/:id',component: photoinfo},
    { path: '/home/goodslist',component: goodslist},
  ],
  linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类，默认的类叫做router-link-active
})

export default routerObj//向外暴露对象
