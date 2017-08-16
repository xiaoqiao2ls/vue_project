/**
 * Created by Administrator on 2017/8/17.
 */

import storage from "../common/storage.js";
const storageKye = "suiyi";

let goodsTotal = storage.get(storageKye);
// 商品购买数量的数据格式为：{ id1: total, id2: total, id3: total }
// key为商品的id，value为商品的选择数量。
export default {
    //根据id选择数量
    set(id,total){
        goodsTotal[id] = total;
        storage.set(storageKye,goodsTotal);
    },

    //根据id选择数量总和
    get(id){
        if(id) {
            return goodsTotal[id] || 0;
        }
        else {
            // 注意，如果数组length为0，reduce会报错，所以做个判断处理
            let totals = this.getTotalList();
            return totals.length && totals.reduce((v1,v2) => (+v1) + (+v2));
        }
    },

    //获取所有id组成的数组
    getIDList(){
        return Object.keys(goodsTotal)
    },

    //获取total组成的数组
    getTotalList(){
        return Object.values(goodsTotal)
    }

}