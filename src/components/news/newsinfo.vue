<template>
    <div class="newsinfo-container" >
        <h3 class="title">{{newsInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{newsInfo.add_time | dateFormat}}</span>
            <span>点击：{{newsInfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsInfo.content"></div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
    import PubSub from 'pubsub-js'
    import comment from '../subcomponents/comment.vue'
    export default {
      data () {
        return {
          id: this.$route.params.id,
          newsInfo: {}
        }
      },
      created (){},
      mounted (){

        /*PubSub.subscribe('newList',(mes,newList) => {
          this.newList = newList
        })*/
        this.getdata()
      },
      methods: {
        getdata(){
          this.axios.get("http://www.liulongbin.top:3005/api/getnew/"+this.id).then(result => {
            if(result.data.status === 0){
              this.newsInfo = result.data.message[0]
            }else{
              Toast("获取新闻失败！")
            }
          })
        }
      },
      components: {
        "comment-box": comment
      }
    }
</script>
<style scoped>
    .newsinfo-container {
        padding: 0 5px;
    }
    .newsinfo-container h3 {
        font-size: 16px;
        text-align: center;
    }
    .newsinfo-container .subtitle {
        color: deepskyblue;
        display: flex;
        justify-content: space-between;
    }
</style>
