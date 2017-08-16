<template>
    <!-- 组件中的模版全部写到这里，vue最终自动关联 -->
    <div class="mui-card">
        <div class="mui-card-header">{{ info.title }}</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner" v-html="info.content"></div>
        </div>
    </div>
</template>

<script>
    // vue文件中的脚本要求我们导出一个组件的配置项
    import config from "../../../js/config.js";

    export default {
        data() {
            return {
                info:{}
            };
        },
        props:['id'],
        methods:{
            getInfo(){
                //获取商品图文介绍
                let url = config.goodsDetails + this.id;
                this.$http.get(url).then(rep => {
                    let body = rep.body;
                    body.status == 0 && (this.info = body.message[0]);
                });
            }
        },
        created(){
            this.getInfo();
        }
    }
</script>

<style>
    /* 这里书写组件的样式 */
</style>