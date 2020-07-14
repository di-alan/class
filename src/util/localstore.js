//通用工具类


//创建localstore中的Key值
export function creatKey(name) {
     return window.location.host +'_'+ name;

}
//对缓存进行封装,在函数中加一个过期时间
export  function setItem(key,value,expire) {
     const valueObj={
          value,
          expire
     }
     window.localStorage.setItem('key',JSON.stringify(valueObj));

}
//设置过期时间
export  function getItem(key) {
     let obj= window.localStorage.getItem(key);
     if (obj){
          let valueObj = JSON.parse(obj);
          if (Date.now() - valueObj.expire > 0){
               return null;
          }else {
               return  valueObj.value;
          }
     }else {
          return null;
     }

}