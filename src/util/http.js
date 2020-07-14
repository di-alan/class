import axios from 'axios'
const instance = axios.create({
    baseURL: '',
    timeout: 3000,
    //配置请求头
    headers: {
        'X-Requested-With': 'XMLHttpRequest',

    },
    //跨域请求，也携带鉴权信息
    withCredentials:true

});
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //token 鉴权，可以再请求拦截器，统一的设置请求token
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
let onFulfilled = function (response) {
    // 对响应数据做点什么
    //对不同的错误进行统一的捕获和处理
    if(response.status === 200){
        return response.data;
    }
    if (response.data.code == 401){
        //代表登陆过期
        //清除登陆状态
        alert("登录过期")
    }

    return response;
};
instance.interceptors.response.use(onFulfilled, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export  default  instance