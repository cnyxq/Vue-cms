<template>
    <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
            <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
                <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                    推荐
                </a>
                <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                    热点
                </a>
                <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                    北京
                </a>
                <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                    社会
                </a>
                <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                    娱乐
                </a>
                <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                    科技
                </a>
                <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                    其他
                </a>
            </div>
        </div>

    </div>
</template>
<script>
  import mui from '../../lib/mui/js/mui.js'
  mui.init()
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
  export default {

  }
</script>
<style scoped>
    *{
        touch-action: pan-y;
    }
</style>
