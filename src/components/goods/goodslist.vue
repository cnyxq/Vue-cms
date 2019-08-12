<template>
    <div class="goods-list">
        <div class="goods-item" v-for="item in prodlist" :key="item.img_url">
            <img :src="item.img_url" alt="">
            <h1>{{item.title}}</h1>
            <div class="info">
                <div class="price">
                    <span class="now">{{item.sell_price}}</span>
                    <span class="old">{{item.market_price}}</span>
                </div>
                <div class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </div>
            </div>
        </div>
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
            console.log(result)
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
    .goods-list .goods-item {
        width: 45%;
        display: inline-block;
        box-shadow: 0 0 10px #999;
    }
    .goods-list .goods-item img{
        width: 100%;
    }
    .goods-list .goods-item h1{
        font-size: 16px;
    }

</style>
