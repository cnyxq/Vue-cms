<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">练习我们</div></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
      data () {
        return {

        }
      },
      created() {
        /*this.getdata()*/
      },
      methods: {
        /*getdata() {
          this.axios.get("http://www.liulongbin.top:3005/api/getprodlist").then(result => {
            console.log(result)
          })
        }*/
      },
    }
</script>
<style scoped>
    .mint-swipe {
        height: 200px;
    }
    .mint-swipe-item:nth-child(1) {
        background-color: red;
    }
    .mint-swipe-item:nth-child(2) {
        background-color: yellow;
    }
    .mint-swipe-item:nth-child(3) {
        background-color: blue;
    }
    .mui-grid-view.mui-grid-9 {
        background-color: white;
        border: 0;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }
</style>
