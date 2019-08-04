//这个main.js是我们项目的js入口文件

import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import app from './app.vue'
import routerObj from "./router.js"

Vue.use(VueRouter)

let vm = new Vue({
  el: '#app',
  data: {},
  render: function (createElement) {
    return createElement(app)
  },
  router: routerObj
})
