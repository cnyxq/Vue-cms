<template>
    <div class="mui-content">
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
        <div class="mui-card" v-for="(item,index) in goodsInfo" :key="index">
            <div class="mui-card-header">{{item.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="price">
                        市场价：<span class="market">{{item.market_price}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        销售价：<span class="sell">{{item.sell_price}}</span>
                    </div>
                    <p>购买数量：</p>
                    <div class="mui-numbox">
                        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                        <input class="mui-input-numbox" type="number" value="1">
                        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                    </div>
                    <div class="button">
                        <mt-button type="primary">立即购买</mt-button>
                        <mt-button type="danger">加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header mui-card-media" style="height:40vw;"></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>Posted on January 18, 2016</p>
                    <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <a class="mui-card-link">Like</a>
                <a class="mui-card-link">Read more</a>
            </div>
        </div>


        <!--<div class="mui-card">
            <div class="mui-card-header mui-card-media">
                <div class="mui-card-media-object mui-pull-left">
                    <img src="../images/logo.png" width="34px" height="34px" />
                </div>
                <div class="mui-card-media-body">
                    小M
                    <p class="mui-ellipsis">发表于 6小时前</p>
                </div>
            </div>
            <div class="mui-card-content mui-card-media" style="height:40vw;background-image:url(../images/yuantiao.jpg)"></div>
            <div class="mui-card-footer">
                <a class="mui-card-link">Like</a>
                <a class="mui-card-link">Comment</a>
                <a class="mui-card-link">Read more</a>
            </div>
        </div>-->

        <div class="mui-card">
            <div class="mui-card-header mui-card-media">
                <img src="">
                <div class="mui-media-body">
                    小M
                    <p>发表于 2016-06-30 15:30</p>
                </div>
                <!--<img class="mui-pull-left" src="../images/logo.png" width="34px" height="34px" />
                <h2>小M</h2>
                <p>发表于 2016-06-30 15:30</p>-->
            </div>
            <div class="mui-card-content">
                <img src="" alt="" width="100%">
            </div>
            <div class="mui-card-footer">
                <a class="mui-card-link">Like</a>
                <a class="mui-card-link">Comment</a>
                <a class="mui-card-link">Read more</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          id: this.$route.params.id,
          imageList: [],
          goodsInfo: [],
        }
      },
      created() {
        this.getData()
        this.getInfo()
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
              this.goodsInfo = result.data.message
            }else{
              Toast("获取数据失败！")
            }
          })
        }
      },
    }
</script>
<style>
    .mint-swipe {
        height: 200px;
        text-align: center;
    }
    .mint-swipe img {
        height: 100%;
    }
    .mui-card .mui-card-content-inner p {
        font-size: 15px;
        display: inline-block;
    }
</style>
