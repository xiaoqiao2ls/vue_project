<template>
    <!-- 组件中的模版全部写到这里，vue最终自动关联 -->
    <header class="header">
        <mt-header fixed title="微商"></mt-header>
        <div></div>
    </header>
</template>

<script>
    // vue文件中的脚本要求我们导出一个组件的配置项
//    export default {
//        data() {
//            return {
//                content: '组件内容'
//            };
//        }
//    }
</script>

<style>
    /* 这里书写组件的样式 */
    .header div {
        height: 40px;
    }
</style>