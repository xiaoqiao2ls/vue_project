<template>
    <!-- 组件中的模版全部写到这里，vue最终自动关联 -->
    <section class="list">
        <v-title :title="title"></v-title>
        <div class="mui-card">
            <div class="mui-card-header">{{news.title}}</div>
            <div class="mui-card-footer">
                <span>创建时间:{{news.add_time | formatDate('YYYY-MM-DD')}}</span>
                <span>浏览量:{{news.click}}</span>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    {{news.content}}
                </div>
            </div>
        </div>
        <v-comment :id="id"></v-comment>
    </section>
</template>

<script>
    // vue文件中的脚本要求我们导出一个组件的配置项
    import Ctitle from "../common/title.vue";
    import config from "../../js/config";
    import Ccomment from "../common/comment.vue";
    export default {
        data() {
            return {
                title: '新闻详情',
                news: [],
                id:this.$route.params.id
            };
        },
        methods: {
            getDetatils: function () {
                let url = config.newsDetails + this.$route.params.id;
                console.log(url);
                this.$http.get(url).then(rep => {
                    rep.body.status == 0 && (this.news = rep.body.message[0]);
                })
            }
        },
        created(){
            this.getDetatils()
        },
        components: {
            'v-title': Ctitle,
            'v-comment':Ccomment
        }
    }
</script>

<style lang="less">
    /* 这里书写组件的样式 */

</style>