<template>
    <!-- 组件中的模版全部写到这里，vue最终自动关联 -->
    <section class="nav">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/news/list">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
                    <div class="mui-media-body">新闻咨询</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/img/list/0">
                    <span class="mui-icon mui-icon-image"></span>
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/goods/list">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">搜一搜</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">联系我们</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-gear"></span>
                <div class="mui-media-body">设置</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-info"></span>
                <div class="mui-media-body">关于我们</div>
            </a></li>
        </ul>
    </section>
</template>

<script>
    // vue文件中的脚本要求我们导出一个组件的配置项
    export default {}
</script>

<style>
    /* 这里书写组件的样式 */
</style>