/**
 * Created by Administrator on 2017/8/11.
 */
//导入包
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueRouter = require("vue-router");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _index = require("../component/index/index.vue");

var _index2 = _interopRequireDefault(_index);

var _list = require("../component/news/list.vue");

var _list2 = _interopRequireDefault(_list);

var _details = require("../component/news/details.vue");

var _details2 = _interopRequireDefault(_details);

var _comment = require("../component/common/comment.vue");

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//导出一个路由实例


//导入index组件
exports.default = new _vueRouter2.default({
    routes: [{ path: '/', redirect: "./index" }, { path: '/index', component: _index2.default },
    //新闻路由
    { path: "/news/list", component: _list2.default }, { path: "/news/details/:id", component: _details2.default }, { path: "/post" }]
});
//评论

//导入新闻组件

//# sourceMappingURL=router-compiled.js.map