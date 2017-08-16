/**
 * Created by Administrator on 2017/8/17.
 */

export default  {

    set(key,data){
        let strData;
        try{
            strData = Object.toString(data);
        }catch(e){
            strData = data;
        } finally{
            localStorage.setItem(key,strData)
        }
    },

    //获取商品值
    get(key){
        let result = localStorage.getItem(key)  ;
        try{
            result = JSON.parse(result)
        }catch (e){
            result = {}
        }finally {
            return result || {}
        }
    }



    //   // 先尝试转为字符串，最后存储
//   set(key, data) {
//     try {
//         data = JSON.stringify(data);
//     }finally {
//         localStorage.setItem(key, data);
//     }
//   },

//   // 获取本地存储的值，尝试转为对象，最后返回
//   get(key) {
//     let strData = localStorage.getItem(key);
//     try {
//         strData = JSON.parse(strData);
//     }finally {
//         return strData || {};
//     }
//   }
}