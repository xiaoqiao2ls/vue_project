<template>
    <article class="goods-detail">
        <!--详情页标题-->
        <v-title :title="title"></v-title>
        <!--轮播图-->
        <v-swipe :list="lunbos"></v-swipe>

        <!-- 商品购买 -->
        <div class="mui-card">
            <!-- 名称 -->
            <div class="mui-card-header">{{goods.title}}</div>
            <!-- 价格 -->
            <div class="mui-card-content mui-card-content-inner">
                <div class="price"> <s>市场价:￥{{goods.market_price}}</s> <span>销售价: </span> <em>￥{{goods.sell_price}}</em> </div>
                <div> <span>购买数量：</span>
                    <!--数字输入框 -->
                    <v-numbox :initVal="total" @change="upTotal"></v-numbox>
                </div>
            </div>
            <!-- 按钮 -->
            <div class="mui-card-footer">
                <router-link  to="/shopcart/list" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</router-link>
                <div></div>
                <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined" @click="addShopcart">加入购物车</button>
            </div>
        </div>

        <!-- 评论与介绍 -->
        <div class="mui-card">
            <!-- 选项卡 -->
            <mt-navbar v-model="selectedTab">
                <mt-tab-item id="content">商品评论</mt-tab-item>
                <mt-tab-item id="info">图文介绍</mt-tab-item>
            </mt-navbar>
            <!-- 内容 -->
            <mt-tab-container v-model="selectedTab">
                <mt-tab-container-item id="content">
                    <v-comment :id="id"></v-comment>
                </mt-tab-container-item>
                <mt-tab-container-item id="info">
                    <v-info :id="id"></v-info>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

    </article>
</template>

<script>
    import config from "../../js/config.js";
    import goodStorage from "../../js/model/goods.js"
    import Ctitle from "../common/title.vue";
    import Cswipe from "../common/swipe.vue";
    import Ccomment from "../common/comment.vue";
    import Cinfo from   "./son/info.vue";
    import Cnumbox from "../common/numbox.vue";

    export default {
        data(){
            return {
                title:"商品购买",
                lunbos:[],
                id:this.$route.params.id,
                goods:{},
                selectedTab:"content",
                total:goodStorage.get(this.$route.params.id)
            }
        },
        methods:{
            //获取轮播图
            getLunbos(){
                let url = config.photoHums + this.id;
                this.$http.get(url).then(rep => {
                    let body = rep.body;
                    if(body.status == 0){
                        this.lunbos = body.message.map(item => {
                            item.src = config.imgDomain + item.src;
                            return item
                        })
                    }
                })
            },
            //获取商品详情信息
            getPrice(){
                let url = config.goodsPrice + this.id;
                this.$http.get(url).then(rep => {
                    let body = rep.body;
                    if(body.status == 0){
//                        console.log(body.message);
                        this.goods = body.message[0]
                    }
                })
            },
            //更新选择数量值
            upTotal(v){
                this.total = v;
            },
            //加入购物车
            addShopcart(){
                // 点击购物车，就把这个商品的购买数量持久化记录下来
                goodStorage.set(this.id,this.total)

                document.querySelector(".mui-badge").innerHTML = goodStorage.get();
            }
        },
        created(){
            this. getLunbos();
            this.getPrice();
        },
        components:{
            'v-title':Ctitle,
            'v-swipe':Cswipe,
            'v-comment':Ccomment,
            'v-info':Cinfo,
            'v-numbox':Cnumbox,
        }
    }

</script>

<style lang="less">
    .goods-detail {
    .mui-card-content {
    .price {
        color: rgb(51, 51, 51);
        margin-bottom: 4px;
    span {
        margin-left: 6px;
    }
    em {
        font-size: 18px;
        color: red;
    }
    }
    }
    .mui-card-footer {
    div {
        width: 100%;
    }
    .mui-btn {
        padding: 8px 0;
        font-size: 16px;
    }
    }
    .mint-tab-item {
    &.is-selected {
         margin-bottom: 0;
         border-bottom: 3px solid #2ce094;
         color: #2ce094;
     }
    }
    .mint-tab-item-label {
        font-size: 18px;
        color: #2ce094;
    }
    }
</style>