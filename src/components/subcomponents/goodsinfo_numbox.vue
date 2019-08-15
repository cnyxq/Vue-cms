<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input class="mui-input-numbox" type="number" value="1" ref="numbox" @change="changeCount">
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
      mounted() {
        mui(".mui-numbox").numbox()
      },
      methods: {
        changeCount() {
          this.$emit('getSelectCount',this.$refs.numbox.value)//将子组件的数据传递给父组件
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
