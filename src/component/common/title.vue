<template>
    <!-- 组件中的模版全部写到这里，vue最终自动关联 -->
    <section class="list mint-header">
        <div  @click="rollback" class="mint-header-button is-left">
            <button class="mint-button mint-button--default mint-button--normal">
                <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
                <label class="mint-button-text">返回</label>
            </button>
        </div>
        <h1 class="mint-header-title">{{title}}</h1>
        <div class="mint-header-button is-right"></div>
    </section>
</template>

<script>
    // vue文件中的脚本要求我们导出一个组件的配置项
    export default {
        props: ['title'],
        methods:{
            rollback(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less">
    /* 这里书写组件的样式 */
    .list {
        background-color: #c9c9c9;
        border-bottom: 1px solid #003C78;
    }
</style>