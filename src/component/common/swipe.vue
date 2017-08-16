<template>
    <!-- 组件中的模版全部写到这里，vue最终自动关联 -->
    <section class="swipe">
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(item,i) in list" :key=i>
                <a :href="item.url">
                    <img :src="item.src" />
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </section>

</template>

<script>
    // vue文件中的脚本要求我们导出一个组件的配置项
    export default {
        props:['list']
    }
</script>

<style lang="less">
    /* 这里书写组件的样式 */
    .swipe{
        height:250px;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>