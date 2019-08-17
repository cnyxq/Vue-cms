<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input class="mui-input-numbox" type="number" @change="changeCount">
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
      created() {

      },
      mounted() {
        mui(".mui-numbox").numbox()
      },
      methods: {
        changeCount() {
          this.$emit('getSelectCount',mui(".mui-numbox").numbox().getValue())//将子组件的数据传递给父组件
        }
      },
      watch: {
        'stockQuantity': function (newVal,oldVal) {
          mui(".mui-numbox").numbox().setOption('max',newVal)
        }
      },
      props: ['stockQuantity']
    }
</script>
<style>

</style>
