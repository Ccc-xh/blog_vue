import axios from 'axios'
// 创建axios实例
const service = axios.create({
    // headers: {'Content-Type': 'application/json;charset=utf-8'},
    baseURL: 'http://www.cxhorange.com/blog', // api 的 base_url
    // baseURL: '/api',
    // baseURL: process.env.BASE_API, // api 的 base_url
    timeout: 50000 // 请求超时时间
})
// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem('Authorization')) {
            config.headers.Authorization = localStorage.getItem('Authorization');
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    });

export default service