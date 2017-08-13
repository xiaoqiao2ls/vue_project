/**
 * Created by Administrator on 2017/8/11.
 */
//1.1导入第三方包
import Vue from 'vue';
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import "mui/dist/css/mui.css";  //mui只能引用样式
import  "mui/examples/hello-mui/css/icons-extra.css"; //引入额外扩展样式

//1.2手动启用插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);

//2.导入自己的东西

//2.1导入自己的组件；
import App  from "../component/App.vue"; //根组件
//2.2导入配置好的路由对象
import router from "./router.js" //路由

//3.创建vue实例，关联视图，把根组件渲染到视图中
new Vue({
    el:"#app",
    render:c => c(App),
    router
})