<template>
    <!-- 组件中的模版全部写到这里，vue最终自动关联 -->
    <main>
        <v-header></v-header>
        <router-view></router-view>
        <v-footer></v-footer>
    </main>
</template>

<script>

    import Cheader from "./home/header.vue";
    import Cfooter from "./home/footer.vue";
    // vue文件中的脚本要求我们导出一个组件的配置项
    export default {
        components:{
            'v-header':Cheader,
            'v-footer':Cfooter
        }
    }
</script>



<style>
    /* 这里书写组件的样式 */
</style>