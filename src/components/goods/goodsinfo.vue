<template>
    <div class="mui-content" >
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item v-for="(item,index) in imageList" :key="index">
                            <img :src="item.src" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="price">
                        市场价：<span class="market">{{goodsInfo.market_price}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        销售价：<span class="sell">{{goodsInfo.sell_price}}</span>
                    </div>
                    <p class="num">购买数量：</p>
                    <numbox @getSelectCount="getSelectCount" :stockQuantity="goodsInfo.stock_quantity"></numbox>
                    <div class="button">
                        <mt-button type="primary">立即购买</mt-button>
                        <mt-button type="danger" @click="getSelectCount">加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsInfo.goods_no}}</p>
                    <p>库存情况：{{goodsInfo.stock_quantity}}</p>
                    <p>上架时间：{{goodsInfo.add_time | dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goGoodsDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goGoodsComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    import numbox from '../subcomponents/goodsinfo_numbox.vue'
    export default {
      data() {
        return {
          id: this.$route.params.id,
          imageList: [],
          goodsInfo: {},
          selectCount: 1,
        }
      },
      created() {
        this.getData()
        this.getInfo()
      },
      mounted() {

      },
      methods: {
        getData() {
          this.axios.get("http://www.liulongbin.top:3005/api/getthumimages/"+this.id).then(result => {
            if(result.data.status === 0){
              this.imageList = result.data.message
            }else{
              Toast("获取数据失败！")
            }
          })
        },
        getInfo() {
          this.axios.get("http://www.liulongbin.top:3005/api/goods/getinfo/"+this.id).then(result => {
            if(result.data.status === 0){
              this.goodsInfo = result.data.message[0]
            }else{
              Toast("获取数据失败！")
            }
          })
        },
        getSelectCount(count) {
          this.selectCount = count
        },
        goGoodsDesc(id) {
          this.$router.push({name: 'goodsDesc',params: { id }})//程序化导航
        },
        goGoodsComment(id) {
          this.$router.push({name: 'goodsComment',params: { id }})
        },
      },
      components: {
        "numbox": numbox
      }
    }
</script>
<style scoped>
    .mui-content {
        overflow: hidden;
    }
    .mint-swipe {
        height: 200px;
        text-align: center;
    }
    .mint-swipe img {
        height: 100%;
    }
    .mui-card .mui-card-content-inner .num {
        font-size: 15px;
        display: inline-block;
    }
    .mui-card-footer {
        display: block;
    }
    .mint-button {
        margin: 10px 0;
    }
    .market {
        text-decoration: line-through;
    }
    .sell {
        font-size: 20px;
        color: red;
    }
</style>
