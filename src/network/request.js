import axios from 'axios'
export function request(config){
  // 1.创建axios的实例
  const instance1=axios.create({
    baseURL:'http://123.207.32.32:8000/api/h8',
    timeout:10000
  })

  //2. axios的拦截器
  // 每次请求或者得到响应的后,进行对应处理
  // 使用拦截器
  // 响应拦截
  instance1.interceptors.response.use(res=>{
    return res.data
  })

  
  // 3.发送网络请求
  return instance1(config)
}

