//这个main.js是我们项目的js入口文件

import Vue from 'vue/dist/vue.js'

//导入MintUI和Mui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
Vue.use(MintUI)

//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//
import app from './app.vue'
import routerObj from "./router.js"

//导入axios和vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'
//安装axios和vue-axios
Vue.use(VueAxios,axios)

//导入格式化时间的插件moment
import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat',function (dataStr,pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

//导入缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

let vm = new Vue({
  el: '#app',
  data: {},
  render: function (createElement) {
    return createElement(app)
  },
  router: routerObj
})
