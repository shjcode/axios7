import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
// axios({
//   url:"http://123.207.32.32:8000/home/multidata",
//   method:'get'
// }).then(res=>{
//   console.log(res);
// })
// axios({
//   url:"http://123.207.32.32:8000/home/data?type=sell&page=3",
//   // url:"http://123.207.32.32:8000/home/data",
//   params:{
//     type:'pop',
//     page:1
//   },
//   method:'get'
// }).then(res=>{
//   console.log("第二段网络请求");
//   console.log(res);
// })
//使用全局的配置请求
// axios.defaults.baseURL="http://123.207.32.32:8000"
// axios.all([axios({
//   url:"/home/multidata"
//   }
// ),axios({
//   url:"/home/data",
//   params:{
//     type:"sell",
//     page:5
//   }
// })
// ]).then(axios.spread((results1,results2) =>{
// console.log(results1);
// console.log(results2);
//   }
// ))

//4.串讲对应的axios的实列
// const instanct1=axios.create({
//   baseURL:"http://123.207.32.32:8000",
//   timeout:5000
// })
// const instanct2=axios.create({
//   baseURL:"http://123.88.32.32:8000",
//   timeout:5000
// })
// instanct1({
//   url:"/home/multidata"
// }).then(resut=>{
//   console.log(resut)
// })
// instanct1({
//   url:"/home/data",
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(resut2=>{
//   console.log(resut2)
// })
//5.封装request模块
import {request} from "./network/request";
// request({
//   url:"/home/data",
// },res=>{
//   console.log(res)
// },err=>{
//   console.log(err)
// })
request({
    url:"/home/data"
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
