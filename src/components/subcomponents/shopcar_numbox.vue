<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input class="mui-input-numbox" type="number" :value="count" @change="countChange" ref="number">
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
  import mui from '../../lib/mui/js/mui'
  export default {
    data() {
      return {

      }
    },
    props: ['count','id'],
    created() {

    },
    mounted() {
      mui(".mui-numbox").numbox()

    },
    methods: {
      countChange() {
        console.log(this.id)
        this.$store.commit('updateGoodsInfo',{
          id: this.id,
          count: this.$refs.number.value
        })
      }
    },
    watch: {

    },
  }
</script>
<style>

</style>
