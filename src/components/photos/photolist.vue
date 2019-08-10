<template>
    <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
            <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;" >
                <a :class="['mui-control-item',item.id === 0 ? 'mui-active':'']" v-for="(item,index) in cates" :key="index" @click="getImages(item.id)">{{item.title}}</a>
            </div>
        </div>
        <ul>
            <li v-for="item in list" :key="item.id">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
  import mui from '../../lib/mui/js/mui.js'
  export default {
    data () {
      return {
        cates: [],
        list: [],
      }
    },
    created () {
      this.getAllCategory()
      this.getImages(0)//默认显示全部页面
    },
    mounted () {
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      })
    },
    methods: {
      getAllCategory () {
        this.axios.get("http://www.liulongbin.top:3005/api/getimgcategory").then(result => {
          if(result.data.status === 0){
            result.data.message.unshift({title: "全部",id: 0})
            this.cates = result.data.message
          }else{
            Toast("获取数据失败！")
          }
        })
      },
      getImages (cateId) {
        this.axios.get("http://www.liulongbin.top:3005/api/getimages/"+cateId).then(result => {
          if(result.data.status === 0){
            this.list = result.data.message
          }else{
            Toast("获取数据失败！")
          }
        })
      }
    }
  }
</script>
<style scoped>
    *{
        touch-action: pan-x;
    }
    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    #slider ul{
        margin: 0;
        padding: 10px;
    }
    #slider ul li {
        list-style: none;
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 10px #999;
        border-radius: 5px;
        position: relative;

    }
    #slider ul li img {
        width: 100%;
        vertical-align: middle;/*把此元素放在父元素的中部*/
        border-radius: 5px;
    }
    .info {
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,0.4);
        padding: 0 5px;
        max-height: 90px;
    }
    .info .info-title {
        font-size: 14px;
    }
    .info .info-body {
        font-size: 13px;
    }
</style>
