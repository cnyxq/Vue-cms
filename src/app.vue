<template>
    <div class="app-container">
        <!--header-->
        <mt-header fixed title="Vue-cms">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <!--Main-->

        <!--Tabbar-->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">消息</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">通讯录</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </a>
        </nav>
    </div>
</template>
<script>
    import Vue from 'vue/dist/vue.js'
    import MintUI from 'mint-ui'
    import 'mint-ui/lib/style.css'
    import './lib/mui/css/mui.css'
    Vue.use(MintUI)
    export default {

    }
</script>
<style>
    .app-container{
        padding-top: 40px;
    }
</style>
