<template>

    <article class="index">
        <v-swipe :list="lunbos"></v-swipe>
        <v-nav></v-nav>
    </article>

</template>

<script>
    import Cswipe from "../common/swipe.vue";
    import Cnav from "./nav.vue";
    import Http from "../../js/common/http.js";
    export default {
        data(){
            return{
                lunbos:[]
            }
        },
        methods:{
            getLunbo(){
                //获取轮播图
                let url= "http://139.199.192.48:8888/api/getlunbo";
                let that = this
                Http.get(url,function (body) {
                    that.lunbos = body.message.map(item => (item.src=item.img) && item);
                })

//                Http.get(url, body => {
//                    // 因为公共的轮播图使用的图片地址属性名为src，这里的图片地址名为img，所以转换一下
//                    this.lunbos = body.message.map(item => (item.src = item.img) && item);
//                });
                











//                this.$http.get(url).then(rep => {
//                    if(rep.body.status == 0){
//                        this.lunbos = rep.body.message.map(item => (item.src=item.img) && item);
//                    }
//                })
            }
        },
        //初始化完成后时间要自行进行调用
        created(){
            this.getLunbo();
        },
        components:{
            'v-swipe':Cswipe,
            'v-nav':Cnav
        }
    }

</script>