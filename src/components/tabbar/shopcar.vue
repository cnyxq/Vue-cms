<template>
    <div class="shopCar-container">
        <div class="mui-card" v-for="(item,index) in shopCarList" :key="index">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="goodsSelectChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                    <img style="height: 60px;width: 60px;" :src="item.thumb_path" alt="">
                    <div class="content">
                        <h1>{{item.title}}</h1>
                        <p>￥{{item.sell_price}}</p>
                        <shopCar-numbox :id="item.id" :count="$store.getters.getGoodsCount[item.id]"></shopCar-numbox>
                        <a @click.prevent="remove(item.id,index)">删除</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card mui-card-account">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="account">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品<span>{{$store.getters.getGoodsCountAndAmount.count}}</span>件，总价<span>￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
                    </div>
                    <button type="button" class="mui-btn mui-btn-danger">去结算</button>
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
        },
        remove(id,index) {
          this.shopCarList.splice(index,1)//删除本地购物车数据
          this.$store.commit("removeShopCarData",id)//删除数据源
        },
        goodsSelectChanged(id,bool) {
          console.log(id,bool)
          this.$store.commit("updateGoodsSelected",{id: id,selected: bool})
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
    .shopCar-container .mui-card-account .mui-card-content-inner{
        display: flex;
        justify-content: space-between;
    }
    .shopCar-container .mui-card-account .mui-card-content-inner p span {
        color: red;
        font-size: 15px;
    }
</style>
