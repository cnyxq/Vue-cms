<template>
    <div class="newsinfo-container" >
        <h3 class="title"></h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击：次</span>
        </p>
        <hr>
        <div class="content"></div>
    </div>
</template>
<script>
    import PubSub from 'pubsub-js'
    export default {
      data () {
        return {
          id: this.$route.params.id,
          newList: []
        }
      },
      created (){},
      mounted (){

        /*PubSub.subscribe('newList',(mes,newList) => {
          this.newList = newList
        })*/
        this.getdata()
        console.log(this.newList)
      },
      methods: {
        getdata(){
          this.axios.get("https://www.easy-mock.com/mock/5d47c2de5b330f0e9112ea9e/example/a/u/user").then(result => {
            console.log(result)
          })
        }
      },
    }
</script>
<style scoped>

</style>
