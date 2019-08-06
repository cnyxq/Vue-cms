<template>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="(item,index) in newList" :key="index">
            <router-link :to="'/home/newlist/newsinfo/'+item.id" class="" >
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    <h1>{{item.title}}</h1>
                    <p class="mui-ellipsis">
                        <span>发表时间：{{item.add_time | dateFormat}}</span>
                        <span>点击：{{item.click}}次</span>
                    </p>
                </div>
            </router-link>
        </li>
    </ul>
</template>
<script>
    import Vue from 'vue/dist/vue.js'
    import PubSub from 'pubsub-js'
    import { Toast } from 'mint-ui'
    Vue.use(Toast.name,Toast)
    export default {
      data () {
        return {
          newList: []
        }
      },
      created () {
        this.getData()
      },
      methods: {
        getData () {
          this.axios.get("http://www.liulongbin.top:3005/api/getnewslist").then( response => {
            if (response.data.status === 0) {
              this.newList = response.data.message
              /*PubSub.publish('newList',this.newList)*/
            }else {
              Toast("获取数据失败!")
            }
          })
        }
      }
    }
</script>
<style>
    .mui-table-view li h1 {
        font-size: 14px;
    }
    .mui-table-view .mui-ellipsis {
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;/*弹性布局，向两端对齐*/
    }
</style>
