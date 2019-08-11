<template>
    <div class="photoinfo-container" >
        <h3 class="title">{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
            <span>点击：{{photoinfo.click}}次</span>
        </p>
        <hr>
        <vue-preview :slides="slide1" @close="handleClose" ></vue-preview>
        <div class="content" v-html="photoinfo.content"></div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
    import comment from '../subcomponents/comment.vue'
    export default {
      data() {
        return {
          id: this.$route.params.id,
          photoinfo: {},
          slide1: []
        }
      },
      created() {
        this.getImageInfo()
        this.getThumbs()
      },
      mounted() {

      },
      methods: {
        getImageInfo() {
          this.axios.get("http://www.liulongbin.top:3005/api/getimageInfo/"+this.id).then(result => {
            if(result.data.status === 0){
              this.photoinfo = result.data.message[0]
            }else{
              Toast("获取数据失败！")
            }
          })
        },
        getThumbs() {
          this.axios.get("http://www.liulongbin.top:3005/api/getthumimages/"+this.id).then(result => {
            if(result.data.status === 0){
              result.data.message.forEach(item => {
                item.msrc = item.src
                item.w = 600
                item.h = 400
              })
              this.slide1 = result.data.message
            }else{
              Toast("获取数据失败！")
            }
          })
        },
        handleClose () {
          console.log('close event')
        }
      },
      components: {
        'comment-box': comment
      }
    }
</script>
<style>
    .photoinfo-container {
        padding: 0 5px;
    }
    .photoinfo-container .title {
        text-align: center;
        color: skyblue;
        font-size: 16px;
    }
    .photoinfo-container .subtitle {
        display: flex;
        justify-content: space-between;
    }
    .my-gallery figure {
        display: inline-block;
        padding: 0;
        margin: 0;
    }
    .my-gallery img {
        width: 100px;
        height: 100px;
    }

</style>
