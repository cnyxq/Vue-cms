<template>
    <div class="shopCar-container">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch></mt-switch>
                    <img style="height: 60px;width: 60px;" src="../../images/img2.png" alt="">
                    <div class="content">
                        <h1>大双买大沙发啊沙发上啊是大</h1>
                        <p>￥2199</p>
                        <shopCar-numbox></shopCar-numbox>
                        <a>删除</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import numbox from "../subcomponents/shopcar_numbox.vue"
    export default {
      components: {
        "shopCar-numbox": numbox
      }
    }
</script>
<style>
    .shopCar-container .content h1 {
        font-size: 13px;
    }
</style>
