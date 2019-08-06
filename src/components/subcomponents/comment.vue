<template>
    <div>
        <h1>评论区</h1>
        <hr>
        <textarea placeholder="请输入评论的内容（上限120字符）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list" v-for="(item,index) in comments" :key="index">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content === '' ? '此用户很懒，啥都没说~':item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          pageIndex: 1,
          comments: []
        }
      },
      props: ["id"],
      created() {
        this.getComments()
      },
      methods: {
        getComments() {
          this.axios.get("http://www.liulongbin.top:3005/api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(result => {
            if(result.data.status === 0){
              this.comments = this.comments.concat(result.data.message)
            }else{
              Toast("获取评论数据失败！")
            }
          })
        },
        getMore() {
          this.pageIndex++
          this.getComments()
        }
      }
    }
</script>
<style>
.cmt-list .cmt-item .cmt-title {
    font-size: 14px;
    background-color: #aeb7ac;
    line-height: 30px;
}
.cmt-list .cmt-item .cmt-body {
    font-size: 14px;
    line-height: 30px;
    text-indent: 2em;
}
</style>
