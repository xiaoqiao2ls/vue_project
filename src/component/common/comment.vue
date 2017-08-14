<template>
    <!-- 组件中的模版全部写到这里，vue最终自动关联 -->
    <section class="title">
        <!--提交评论-->
        <div class="mui-card">
            <div class="mui-card-header">
                <h4>提交评论</h4>
            </div>
            <div class="mui-card-content">
                <textarea v-model="val" id="textarea" placeholder="请输入内容"></textarea>
                <button @click="submitContent" type="button" class="mui-btn mui-btn-royal mui-btn-block">提交评论</button>
            </div>
        </div>
        <!--评论列表-->
        <div class="mui-card">
            <div class="mui-card-header">
                <h4>评论列表</h4>
            </div>
            <div class="mui-card-content">
                <ul class="mui-table-view">
                    <li v-for="(item, i) in list" :key="i" class="mui-table-view-cell">
                        <div>
                            <span>第{{ i + 1 }}楼</span>
                            <span>用户：{{ item.user_name }}</span>
                            <span>发表时间：{{ item.add_time | formatDate }}</span>
                        </div>
                        <p>{{ item.content }}</p>
                    </li>
                </ul>
                <button ref="loadMoreBtn" @click="getComment" type="button"
                        class="mui-btn mui-btn-success mui-btn-block">加载更多
                </button>
            </div>
        </div>
    </section>
</template>


<script>
    // vue文件中的脚本要求我们导出一个组件的配置项
    import config from "../../js/config.js";
    import {Toast} from "mint-ui";
    export default {
        data() {
            return {
                val: "",
                pageindex: 1,
                list: [],
            };
        },
        props: ['id'],
        methods: {
            submitContent(){
                let url = config.commentPut + this.id;
                let data = {val: this.val};
                this.$http.post(url, data, {emulateJSON: true}).then(rep => {
                    if (rep.body.status == 0) {
                        Toast({
                            message: '操作成功',
                            iconClass: 'icon icon-success'
                        });
                        this.list.unshift({
                            user_name: '小桥',
                            add_time: Date.now(),
                            content: this.val
                        })
                        this.val = "";
                    }
                })
            },
            //获取评论列表
            getComment(){
                let url = `${config.commentList + this.id}?pageindex=${this.pageindex}`;
                this.$http.get(url).then(rep => {
                    if (rep.body.status == 0 && rep.body.message.length > 0) {
                        this.list.push(...rep.body.message);
                        this.pageindex++;
                    }else {
                        this.$refs.loadMoreBtn.disabled = true;
                    }
                })
            },
        },

        created(){
            this.getComment();
        }
    }
</script>

<style>
    /* 这里书写组件的样式 */
</style>