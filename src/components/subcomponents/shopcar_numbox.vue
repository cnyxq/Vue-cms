<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input class="mui-input-numbox" type="number">
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

    },
    watch: {

    },
  }
</script>
<style>

</style>
