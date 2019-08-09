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
        <transition>
            <router-view></router-view>
        </transition>
        <!--Tabbar-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-llb" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-llb" to="/vip">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-llb" to="shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-llb" to="search">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
    import Vue from 'vue/dist/vue.js'
    import MintUI from 'mint-ui'
    import 'mint-ui/lib/style.css'
    import './lib/mui/css/mui.css'
    import './lib/mui/css/icons-extra.css'
    Vue.use(MintUI)
    export default {

    }
</script>
<style scoped>
    .app-container{
        padding-top: 40px;
        padding-bottom: 45px;
    }
    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
    }
    .mui-bar-tab .mui-tab-item-llb.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-llb {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item-llb .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item-llb .mui-icon~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
