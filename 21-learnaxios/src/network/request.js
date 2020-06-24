import axios from 'axios'
//最终  
//因为axios是用的了Promise做了封装的，所以可以像下面做抽离，直接return/
//但是如果以后要替换axios的第三方没有封装promise就要像，方法三一样做promise封装，这样就不用改组件内的请求方式什么的。
export function request(config){
  
     //1.创建axios实例
    const instance = axios.create({
      baseURL:'http://httpbin.org',
      timeout: 100000
    })
    //2.创建axios拦截器
      //2.1请求拦截
        //为什么要请求拦截
        //1、比如config中的信息不符合服务器的要求。
        //2、比如每次发送网络请求时，都希望在界面显示一个请求的图标
        //3.某些网络请求（比如登录（token）） 必须提携一些特殊的信息
    instance.interceptors.request.use(config =>{
        console.log(config);
        return config
        
    },err => {
        //一般是没有请求错误。
        console.log(err);
        
    });
      //2.2响应拦截
    instance.interceptors.response.use(res=>{
      console.log(res);
      return res.data
    },err => {
      console.log(err);
      
    });


     return instance(config)

    }

// 在组件内调用（下面代码是写在组件内的）
// import {request} from './network/request'
// request({
//   url: '/ip',
// }).then(res => console.log('res',res)
// ).catch(err => console.log('err',err)
// )


// 方式三

// export function request(config){
//   return new Promise((reslove,reject) => {
//      //创建axios
//     const instance = axios.create({
//       baseURL:'http://httpbin.org',
//       timeout: 100000
//     })

//     instance(config)
//       .then(res=>{
//         reslove(res)
//       })
//       .catch( err =>{
//         reject(err)
//       })

//     })

// }

// 在组件内调用（下面代码是写在组件内的）
// import {request} from './network/request'
// request({
//   url: '/ip',
// }).then(res => console.log('res',res)
// ).catch(err => console.log('err',err)
// )


//方式二
// export function request(config){
//   //创建axios
//   const instance = axios.create({
//     baseURL:'http://httpbin.org',
//     timeout: 100000
//   })

//   instance(config.baseConfig)
//     .then(res=>{
//       config.success(res)
//     })
//     .catch( res =>{
//       config.failure(res)
//     })


// }


// 在组件内调用（下面代码是写在组件内的）
// import {request} from './network/request'
// request({
//   baseConfig:'/ip',
//   success(res){
//     console.log('res',res);
    
//   },
//   failure(err){
//     console.log('err',err);
    
//   }
// }
// ) 

//方式一：
// export function request(config,success,failure){
//   //创建axios
//   const instance = axios.create({
//     baseURL:'http://httpbin.org',
//     timeout: 100000
//   })

//   instance(config)
//     .then(res=>{
//       success(res)
//     })
//     .catch( res =>{
//       failure(res)
//     })
// }

// 在组件内调用（下面代码是写在组件内的）
// import {request} from './network/request'
// request({
//   url:'/ip'
// },
// res=>{console.log('res',res);
// },
// err=>{console.log('err',err);
// })

