/**
 * Created by Administrator on 2017/8/18.
 */
import Vue from "vue";
import {Toast} from "mint-ui";
import cache from "./cache.js";

export default {

    get(url,success){
        //先用缓存
        let data = cache.get(url);
        if(data){
            success(data)
        }
        //如果没有则邹下面
        else {
            Vue.http.get(url).then(rep => {
                let body = rep.body;
                if(body.status == 0){
                    cache.set(url,body);
                    success(body);
                }else {
                    Toast("请求失败")
                }
            })
        }
    },

    post(){

    }

}