import axios from 'axios'
import {promise} from "ora";
export function request(config){
// return new Promise((resolve,reject)=> {
  //1、创建axios实列
  const instance1 = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })
//2、axios的拦截器
  instance1.interceptors.request.use(config=>{
    // 1、比如config中的一些信息不符合服务器的要求
    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图表

    // 3、某些网络请求（比如登录(token)），必须携带一些特殊的信息
    console.log(config)
    // return config
  },err=>{
    console.log(err)
  })
  //3.axios相应拦截
  instance1.interceptors.response.use(config=>{
    console.log(config)
  },err=>{
    console.log(err)
  })
  return instance1(config)

//   instance1(config
//   ).then(result=>{
//     resolve(result);
//   }).catch(err=>{
//     reject(err);
//   })
// })
// export function request(config,success,failure){
//   const instance1=axios.create({
//     baseURL:"http://123.88.32.32:8000",
//     timeout:5000
//   })
// instance1(config
// ).then(result=>{
//   // success(result);
//   confing.success(result);
// }).catch(err=>{
//   confing.failure(err);
// })
}
