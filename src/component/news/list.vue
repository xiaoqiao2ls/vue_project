<template>
    <!-- 组件中的模版全部写到这里，vue最终自动关联 -->
    <section class="list">
        <v-title :title='title'></v-title>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list"  :key="item.id">
                <router-link :to="'details/' + item.id ">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <p class="mui-ellipsis">{{item.title}}</p>
                        <div class="list_item">
                            <p>创建时间:{{item.add_time | formatDate('YYYY-MM-DD')}}</p>
                            <p>点击量:{{item.click}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
    // vue文件中的脚本要求我们导出一个组件的配置项
    import config from "../../js/config";
    import Ctitle from "../common/title.vue";
    export default {
        data() {
            return {
                title:"新闻咨询",
                list:[]
            };
        },
        methods:{
            //获取新闻列表
            getNews(){
                let url = config.newsList;
                this.$http.get(url).then(rep => {
                    rep.body.status == 0 && (this.list = rep.body.message)
//                    console.log(this.list);
                })
            }
        },
        created(){
            this.getNews();
        },
        components:{
            'v-title':Ctitle
        }
    }
</script>

<style lang="less">
    /* 这里书写组件的样式 */
    .list {
        &_item p {
             display: inline-block;
         }
    }
</style>