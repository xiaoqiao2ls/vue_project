/**
 * Created by Administrator on 2017/8/9.
 */
"use strict";
//引入node内置模块path
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

//普通  exports.min = function(){}

//es6   export function xxx(){}
//      export default function(){}

module.exports = {
    //打包入口文件
    entry:"./src/js/main.js",
    //输出文件路径
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:"build.js"
    },
    //配置添加各种插件
    plugins:[
        new htmlWebpackPlugin({
            template:"./src/index.html",  //原html
            filename:"index.html",//新文件名
            injext:"body"  //脚本注入到页面中
        })
    ],
    module:{
            rules:[
                {
                    test:/\.css$/,
                    use:[
                        'style-loader',
                        'css-loader',
                    ]
                },
                {
                    test:/\.less$/,
                    use:[
                        'style-loader',
                        'css-loader',
                        'less-loader'
                    ]
                },
                {
                    test:/\.scss$/,
                    use:[
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test:/\.tpl$/,
                    use:[
                        "html-loader"
                    ]
                },
                {
                    test:/\.(png|jpg|gif|ttf)$/,
                    use:[
                        {loader:'url-loader',options:{limit:5000}},
                        'image-webpack-loader'
                    ]
                },
                {
                    //转换js脚本为es5语法
                    test:/\.js&/,
                    exclude:/node_modules/,
                    use:[
                        {
                            loader:"babel-loader",
                            options:{
                                presets:["es2015"],
                                plugins:["transform-runtime"]
                            }
                        }
                    ]
                },
                //配置vue解析文件
                {
                    test:/\.vue$/,
                    use:[
                        "vue-loader"
                    ]
                }
            ]
    }
}



