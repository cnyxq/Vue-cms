<template>
    <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
            <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;" >
                <a :class="['mui-control-item',item.id === 0 ? 'mui-active':'']" v-for="(item,index) in cates" :key="index">{{item.title}}</a>
            </div>
        </div>

    </div>
</template>
<script>
  import mui from '../../lib/mui/js/mui.js'
  export default {
    data () {
      return {
        cates: []
      }
    },
    created () {
      this.getAllCategory()
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
      }
    }
  }
</script>
<style scoped>
    *{
        touch-action: pan-x;
    }
</style>
