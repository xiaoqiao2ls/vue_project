<template>
    <!-- 组件中的模版全部写到这里，vue最终自动关联 -->
    <section class="swipe">
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(item,i) in list" :key=i>
                <a :href="item.url">
                    <img :src="item.img" />
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </section>

</template>

<script>
    // vue文件中的脚本要求我们导出一个组件的配置项
    export default {
        data(){
            return{
                list:[]
            }
        },
        methods:{
            getLunbo(){
                //获取轮播图
                let url= "http://139.199.192.48:8888/api/getlunbo";
                this.$http.get(url).then(rep => {
                    if(rep.body.status == 0){
                        this.list = rep.body.message;
                    }
                })
            }
        },
        //初始化完成后时间要自行进行调用
        created(){
            this.getLunbo();
        }
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