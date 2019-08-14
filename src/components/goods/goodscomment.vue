<template>
    <div>
        <comment-box :id="id"></comment-box>
    </div>
</template>
<script>
  import comment from '../subcomponents/comment.vue'
  export default {
    data() {
      return {
        id: this.$route.params.id
      }
    },
    components: {
      "comment-box": comment
    }
  }
</script>
<style>

</style>
