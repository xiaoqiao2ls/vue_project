/**
 * Created by Administrator on 2017/8/13.
 */
"use strict";
const domain = 'http://139.199.192.48:8888';
export default {
    domain:domain,
    newsList:domain + "/api/getNewslist",
    newsDetails: domain + '/api/getnew/',
    //评论
    commentPut: domain + '/api/postcomment/',
    commentList: domain + '/api/getcomments/',
    //图文分享
    imgList:domain+'/api/getimages'
}
