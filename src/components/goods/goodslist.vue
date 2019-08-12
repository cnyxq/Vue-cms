<template>
    <div class="goods-list">
        <router-link :to="'/home/goodsinfo/'+item.id" class="goods-item" v-for="item in prodlist" :key="item.img_url" tag="div">
            <img :src="item.img_url" alt="">
            <h1>{{item.title}}</h1>
            <div class="info">
                <div class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </div>
                <div class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </div>
            </div>
        </router-link>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          pageIndex: 1,
          prodlist: []
        }
      },
      created() {
        this.getProdList()
      },
      methods: {
        getProdList() {
          this.axios.get("http://www.liulongbin.top:3005/api/getgoods/"+"?pageindex="+this.pageIndex).then(result => {
            if(result.data.status === 0){
              this.prodlist = this.prodlist.concat(result.data.message)
            }else{
              Toast("获取数据失败！")
            }
          })
        },
        getMore() {
          this.pageIndex++
          this.getProdList()
        }
      }
    }
</script>
<style>
    .goods-list {
        display: flex;
        flex-wrap: wrap;/*规定灵活的项目在必要的时候拆行或拆列。*/
        padding:0 7px;
        justify-content: space-between;
    }
    .goods-list .goods-item {
        width: 49%;
        margin-top: 7px;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        display: flex;
        flex-direction: column;/*灵活的项目将垂直显示，正如一个列一样。*/
        justify-content: space-between;
        min-height: 288px;
    }
    .goods-list .goods-item img{
        width: 100%;
    }
    .goods-list .goods-item h1{
        font-size: 16px;
    }
    .goods-list .goods-item .info {
        background-color: #eee;
        padding: 6px;
    }
    .goods-list .goods-item .info .price .now {
        color: red;
        font-size: 20px;
    }
    .goods-list .goods-item .info .price .old {
        font-size: 15px;
        text-decoration: line-through;
        margin-left: 10px;
    }
    .goods-list .goods-item .info .sell {
        color: #c0c0c0;
        font-size: 15px;
        display: flex;
        justify-content: space-between;
    }
</style>
