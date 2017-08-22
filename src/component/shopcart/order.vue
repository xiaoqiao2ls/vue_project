<template>
    <!-- 组件中的模版全部写到这里，vue最终自动关联 -->
    <div>
        <v-title :title="titles"></v-title>
        <div>
            {{ content }}
        </div>
    </div>
</template>

<script>
    // vue文件中的脚本要求我们导出一个组件的配置项
    import Ctitle from "../common/title.vue";
    export default {
        data() {
            return {
                titles: '订单详情页',
                content:"我是订单详情页里面的内容"
            };
        },
        components:{
            'v-title':Ctitle
        }
    }
</script>

<style>
    /* 这里书写组件的样式 */
</style>