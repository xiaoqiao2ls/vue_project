<template>
    <!-- 组件中的模版全部写到这里，vue最终自动关联 -->
    <section class="title">
        <!--图片分类-->
        <!-- 图片分类 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <router-link  to="/img/list/0">全部</router-link>
            </li>
            <li class="mui-table-view-cell" v-for="item in categoryList" :key="item.id">
                <router-link :to="'/img/list/' + item.id">{{ item.title }}</router-link>
            </li>
        </ul>
        <!--图片列表-->
        <div class="mui-card" v-for="item in photoList" :key="item.id">
            <div class="mui-card-header">
                <img v-lazy="item.img_url">
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>{{item.title}}</p>
                    <p style="color: #333;">{{item.zhaiyao}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    // vue文件中的脚本要求我们导出一个组件的配置项
    import config from "../../js/config.js";
    export default {
        data() {
            return {
                categoryList:[],
                photoList:[],
            };
        },
        watch: {
            $route() {
                this.getPhotoList(this.$route.params.id);
            }
        },
        methods:{
            // 获取分类列表
            getCategoryList() {
                let url = config.photoCategoryList;
                this.$http.get(url).then(rep => {
                    let body = rep.body;
                    body.status == 0 && (this.categoryList = body.message);
                });
            },
            //获取图片列表
            getPhotoList(id){
                let url = config.imgList +id;
                this.$http.get(url).then(rep => {
                    let body = rep.body;
                    if(body.status == 0){
                        this.photoList = body.message.map(function (photo,i) {
                            photo.img_url = config.imgDomain + photo.img_url;
                            return photo;
                        })
                    }
                })
            },
            //获取背景
            getStyle(item){
                return  'height:40vw; background-image:url("' + item.img_url + '")';
            },
        },
        created(){
            this.getCategoryList();
            this.getPhotoList(this.$route.params.id);
        }
    }
</script>

<style lang="less">
    /* 这里书写组件的样式 */
    .title {
        .mui-table-view {
            overflow:hidden;
            li{
                float: left;
            }
        }
        .mui-card img {
            width: 100%;
            height: 100%;
            &[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
        }
    }
</style>