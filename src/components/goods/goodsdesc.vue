<template>
    <div class="goodsdesc-container">
        <div class="title">{{desc.title}}</div>
        <hr>
        <div class="content" v-html="desc.content"></div>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          id: this.$route.params.id,
          desc: {}
        }
      },
      created() {
        this.getDesc()
      },
      methods: {
        getDesc() {
          this.axios.get("http://www.liulongbin.top:3005/api/goods/getdesc/"+this.id).then(result => {
            console.log(result)
            if(result.data.status === 0){
              this.desc = result.data.message[0]
            }else{
              Toast("获取数据失败！")
            }
          })
        }
      }
    }
</script>
<style>
    .goodsdesc-container {
        padding: 5px;
    }
    .goodsdesc-container .title {
        text-align: center;
        color: deepskyblue;
    }
    .goodsdesc-container .content img {
        width: 100%;
    }
</style>
