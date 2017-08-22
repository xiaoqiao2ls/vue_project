<template>
    <article class="shopcart-list">
        <v-title :title="title"></v-title>
        <!-- 商品列表 -->
        <div class="goods" v-for="item in cartList">
            <mt-switch v-model="item.selected" class="switch"></mt-switch>
            <img class="img" :src="item.src">
            <div class="inforight">
                <h4 class="mui-ellipsis-2">{{item.title}}</h4>
                <div class="bottom">
                    <ul>
                        <li>￥{{item.sell_price}}</li>
                        <li>
                            <!--引入商品加减组件-->
                            <v-numbox :initVal="getInitVal(item.id)" @change="upTotal(item.id,$event)"></v-numbox>
                        </li>
                        <li>
                            <a href="javascript:void(0)" @click="remove(item.id)">删除</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 总价 -->
        <div class="total">
            <div class="total_val">
                <ul>
                    <li>总计（不含运费）</li>
                    <li>已勾选商品 {{ sumTotal }} 件,总价:￥ {{ priceTotal }} 元</li>
                </ul>
            </div>
            <div class="total_btn">
                <mt-button type="primary" @click.native="primary">付 款</mt-button>
            </div>
        </div>

    </article>
</template>

<script>
    import  {Toast} from "mint-ui";
    import Ctitle from "../common/title.vue";
    import config from "../../js/config.js";
    import goodsStorage from "../../js/model/goods.js";
    import Cnumbox from "../common/numbox.vue";

    export default{
        data(){
            return {
                title: "购物车",
                cartList: []
            }
        },
        computed: { //该属性用于计算，当里面的值发生变化的时候，则会触发里面的函数
            //计算总数量
            sumTotal(){
                let totalArr = this.cartList.map(item => item.selected ? +goodsStorage.get(item.id) : 0);
                return totalArr.length && totalArr.reduce((v1, v2) => v1 + v2)
            },
            //计算总价格
            priceTotal(){
//                let title = this.title;
                let priceArr = this.cartList.map(item => item.selected ? +goodsStorage.get(item.id) * item.sell_price : 0);
                return priceArr.length && priceArr.reduce((v1, v2) => v1 + v2)
            }
        },
        methods: {
            //获取购物车列表
            getShopcartList(){
                let IDlist = goodsStorage.getIDList();
                if (!IDlist.length) {
                    return
                }
                let url = config.shopcartList + IDlist;
                console.log(url);
                this.$http.get(url).then(rep => {
                    let body = rep.body;
                    if (body.status == 0) {
                        this.cartList = body.message.map(item => {
                            item.selected = true;
                            item.src = config.imgDomain + item.thumb_path;
                            return item;
                        })
                    }
                })
            },

            //删除商品点击删除
            remove(id){
                //下标删除
                let index = this.cartList.findIndex(item => item.id = id);
                index > -1 && this.cartList.splice(index, 1)

                //本地缓存永久删除
                goodsStorage.remove(id);
            },

            //获取商品的数量
            getInitVal(id){
                return goodsStorage.get(id);
            },

            //更新指定商品购买数量
            upTotal(id, total){
                this.cartList[0].selected = !this.cartList[0].selected;
                this.cartList[0].selected = !this.cartList[0].selected;
                goodsStorage.set(id, total);
                // 把商品的总数挂载上去
                document.querySelector('.mui-badge').innerHTML = goodsStorage.get();
            },

            //付款
            primary(){
                let hasSelected = this.cartList.some(item => item.selected && goodsStorage.get(item.id));
                if (!hasSelected) {
                    Toast("请至少选择一个商品哟")
                }
                //判断是否登录
                else if (!/SESSIONID=\w+/.test(document.cookie)) {
                    this.$router.push({name: 'loginL', query: {nextpage: '/shopcart/order'}})
                    console.log(this.$router);
                    console.log(this.$route);
                }
                else {
                    this.$router.push('/shopcart/order')
                }
            }
        },
        created(){
            this.getShopcartList()
        },
        components: {
            'v-title': Ctitle,
            'v-numbox': Cnumbox
        }
    }


</script>

<style lang="less">
    .shopcart-list {

    .goods {
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        height: 102px;
        display: flex;
        padding: 5px;

    .switch {
        flex: 0 0 52px;
    }

    .img {
        margin-left: 5px;
        height: 75px;
        width: 75px;
        flex: 0 0 85px;
    }

    .inforight {
        margin-left: 5px;
        flex: 1;
    }

    .inforight ul {
        padding-left: 0px;
    }

    .inforight li {
        list-style: none;
        display: inline-block;
    }

    .inforight h4 {
        color: #0094ff;
        font-size: 14px;
    }

    .bottom li:first-child {
        color: red;
        margin-right: 5px;
    }

    .bottom li:last-child {
        margin-left: 5px;
    }

    }
    .total {
        height: 84px;
        background-color: rgba(0, 0, 0, 0.1);
        display: flex;
        padding: 5px 14px;

    ul {
        padding-left: 0px;
        margin: 14px 0;

    li {
        list-style: none;
        font-size: 14px;
    }

    }
    &
    _val {
        flex: 1;
    }

    &
    _btn {
        flex: 0 0 60px;
        margin: 18px 0 0 0;
    }

    }
    }
</style>