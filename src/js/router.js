/**
 * Created by Administrator on 2017/8/11.
 */
//导入包
import VueRouter from "vue-router";

//导入index组件
import Cindex from "../component/index/index.vue";
//导入新闻组件
import CnewList from "../component/news/list.vue";
import CnewsDetails from "../component/news/details.vue";

//导出一个路由实例
export default new VueRouter({
    routes:[
        {path:'/',redirect:"./index"},
        {path:'/index',component:Cindex},
        //新闻路由
        {path:"/news/list",component:CnewList},
        {path:"/news/details/:id",component:CnewsDetails}
    ]
})