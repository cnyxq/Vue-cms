<template>
    <div class="shopCar-container">
        <div class="mui-card" v-for="(item,index) in shopCarList" :key="index">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch></mt-switch>
                    <img style="height: 60px;width: 60px;" :src="item.thumb_path" alt="">
                    <div class="content">
                        <h1>{{item.title}}</h1>
                        <p>￥{{item.sell_price}}</p>
                        <shopCar-numbox></shopCar-numbox>
                        <a>删除</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import numbox from "../subcomponents/shopcar_numbox.vue"
    export default {
      data() {
        return {
          shopCarList: []
        }
      },
      created() {
        this.getGoodsList()
      },
      methods: {
        getGoodsList() {
          let idArr = []
          this.$store.state.shopCar.forEach(item => {
            idArr.push(item.id)
          })
          if(idArr.length === 0){
            return
          }
          this.axios.get("http://www.liulongbin.top:3005/api/goods/getshopcarlist/"+idArr.join()).then(result => {
            this.shopCarList = result.data.message
          })
        }
      },
      components: {
        "shopCar-numbox": numbox
      }
    }
</script>
<style scoped>
    .shopCar-container .mui-card-content-inner {
        overflow: hidden;
        display: flex;
        align-items: center;
    }
    .shopCar-container .mui-card-content-inner .mint-switch , .content , img{
        float: left;
        padding-left: 5px;
    }
    .shopCar-container .content h1 {
        font-size: 13px;
        margin: 10px 0;
    }
    .shopCar-container .content p {
        display: inline;
        color: red;

    }
    .shopCar-container .content .mui-numbox {
        height: 25px;
    }
</style>
