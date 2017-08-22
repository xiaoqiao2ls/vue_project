/**
 * Created by Administrator on 2017/8/18.
 */
"user strict";
const cache = {};
const maxAge = 10000;

export  default {

    set(key,data){
        cache[key] = {
            data:data,
            time:Date.now()
        }
    },

    get(key){
        let tempObj = cache[key];
        if(!tempObj || Date.now() - tempObj.time > maxAge) {
            this.remove(key);
            return null
        }else{
            return tempObj.data
        }
    },

    remove(key){
        delete cache[key]
    }

}