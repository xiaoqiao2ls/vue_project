<template>
    <!-- 组件中的模版全部写到这里，vue最终自动关联 -->
    <div class="mui-numbox">
        <button class="mui-btn mui-btn-numbox-minus" @click="subtract">-</button>
        <input class="mui-input-numbox" type="number" v-model="value">
        <button class="mui-btn mui-btn-numbox-plus" @click="add">+</button>
    </div>
</template>

<script>
    // vue文件中的脚本要求我们导出一个组件的配置项
    export default {
        data() {
            return {
                value:this.initVal || 0
            };
        },
        props:['initVal'],
        methods:{
            add(){
                 this.value++;
            },
            //减
            subtract(){
                this.value && this.value--;
            }
        },
        watch:{
            value(){
                this.$emit('change',this.value)
            }
        }
    }
</script>

<style>
    /* 这里书写组件的样式 */
</style>