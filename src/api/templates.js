import request from '../../service/request.js'
//主页用户idCard数据信息
export function TestIdCard(data){
    return request({
        url:'/api/pub/user.do',
        method: 'post',
        params:data
    })
}

//文章信息
export function articleInfo(data){
    return request({
        url:'/api/pub/article.do',
        method:'post',
        params:data
    })
}
//简单文章信息
export function simpArticleInfo(data){
    return request({
        url:'/api/pub/simpleInfo.do',
        method:'post',
        params:data
    })
}
//分类统计
export function sorts(data){
    return request({
        url:'/api/pub/sort.do',
        method:'post',
        params:data
    })
    
}

//登录控制，检查是否登录
export function isLogin(token){
    return request({
        url:'/api/admin/check_login_root.do',
        method:'get',
        params:'',
        headers:{'token':token}
    })

 }
//文章录入
export function insertBlog(data){
    return request({
        url : '/api/admin/insert.do',
        // transformRequest:[function(data){
        //     data = Qs.stringify(data)
        //     return data
        // }],
        method: 'post',
        headers:{'Content-Type': 'application/json;charset=utf-8'},
        data:data,
    })
}

//操作文章
export function editorBlog(data,type){
    return request({
        url:'/api/admin/update.do',
        method:'post',
        headers:{'Content-Type': 'application/json;charset=utf-8'},
        data:data,
        params:type
    })
}

//标签
export function tags(data){
    return request({
        url:'/api/pub/tags.do',
        method: 'post',
        headers:{'Content-Type': 'application/json;charset=utf-8'},
        params:data
    })
}
//友链标签

export function link(data){
    return request({
        url:'/api/pub/link.do',
        method:'post',
        headers:{'Content-Type': 'application/json;charset=utf-8'},
        params:data
    })
}
//留言
export function message(data,type){
    return request({
        url:'/api/pub/message.do',
        method:'post',
        headers:{'Content-Type': 'application/json;charset=utf-8'},
        params:type,
        data:data
    })
}
//登录
export function login(data){
    return request({
        url:'/api/pub/login.do',
        method:'post',
        data:data
    })
}
//登出
export function logout(data){
    return request({
        url:'/api/pub/logout',
        method:'get',
        params:data
    })
} 
//获取验证码
export function getNum(data){
    return request({
        url : '/api/pub/beforeRegister.do',
        method:'post',
        params:data
    })
}
//注册
export function register(data){
    return request({
        url : 'api/pub/register.do',
        method:'post',
        data:data
    })
}
//获取统计数
export function getCounts(){
    return request({
        url:'api/pub/count.do',
        method:'get'
    })
}
