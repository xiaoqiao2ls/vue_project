<template>

    <article class="index">
        <v-swipe :list="lunbos"></v-swipe>
        <v-nav></v-nav>
    </article>

</template>

<script>
    import Cswipe from "../common/swipe.vue";
    import Cnav from "./nav.vue";

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
                this.$http.get(url).then(rep => {
                    if(rep.body.status == 0){
                        this.lunbos = rep.body.message.map(item => (item.src=item.img) && item);
//                        console.log(this.lunbos);
                    }
                })
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