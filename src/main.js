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

//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {//相当于data，this.$store.state.***
    shopCar: JSON.parse(localStorage.getItem("shopCar") || "[]")
  },
  mutations: {//相当于methods, this.$store.commit('方法名称',参数)
    addToCar(state,goodsinfo) {
      let flag = false//判断是否有相同的商品加入购物车
      state.shopCar.some(item => {//如果相同，则直接将对象中的数量累加，而不是添加新的对象
        if(item.id === goodsinfo.id){//这里不能转换成数值型
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      if(!flag){
        state.shopCar.unshift(goodsinfo)
      }
      localStorage.setItem("shopCar",JSON.stringify(state.shopCar))//将购物车数据存储到本地
    },
    updateGoodsInfo(state,goodsinfo) {
      state.shopCar.some(item => {
        if(parseInt(item.id) === goodsinfo.id){
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      localStorage.setItem("shopCar",JSON.stringify(state.shopCar))
    },
    removeShopCarData(state,id) {
      state.shopCar.some((item,index) => {
        if(parseInt(item.id) === id){
          state.shopCar.splice(index,1)
          return true
        }
      })
      localStorage.setItem("shopCar",JSON.stringify(state.shopCar))
    }
  },
  getters: {//相当于计算属性，也相当于filters，this.$store.getters.***
    getAllCount(state) {
      let allCount = 0
      state.shopCar.forEach(item => {
        allCount += item.count
      })
      return allCount
    },
    getGoodsCount(state) {
      let obj = {}
      state.shopCar.forEach(item => {
        obj[item.id] = item.count
      })
      return obj
    }
  }
})

let vm = new Vue({
  el: '#app',
  data: {},
  render: function (createElement) {
    return createElement(app)
  },
  router: routerObj,
  store
})
