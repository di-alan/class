import request from '../util/http'
//账号密码登录
export  function loginApi(userName,password) {
 const  formData=new FormData();
 formData.append('username',userName);
 formData.append('password',password);
 formData.append('rememberMe',true);
 //如果是 Json的 话 在地址后边加对象
        return  request.post(`/pcUser/login`,formData)
 }