/**
 * Created by Administrator on 2017/8/13.
 */
"use strict";
const domain = 'http://139.199.192.48:8888';
export default {
    imgDomain: 'http://ofv795nmp.bkt.clouddn.com/',
    domain:domain,
    newsList:domain + "/api/getNewslist",
    newsDetails: domain + '/api/getnew/',
    //评论
    commentPut: domain + '/api/postcomment/',
    commentList: domain + '/api/getcomments/',
    //图文分享
    imgList:domain+'/api/getimages/',
    photoCategoryList: domain + '/api/getimgcategory/', // 图片分类
    photoHums: domain + '/api/getthumimages/', // 缩略图
    photoInfo: domain + '/api/getimageInfo/', // 图片详情数据
    // 商品
    goodsList: domain + '/api/getgoods/',  // 商品列表
    goodsPrice: domain + '/api/goods/getinfo/',  // 商品价格相关信息
    goodsDetails: domain + '/api/goods/getdesc/', // 商品图文介绍
}
