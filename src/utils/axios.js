import axios from "axios";
import Qs from "qs";


// 创建一个axios的实例instance, 这样做的目的是为了不与其他人创建的实例冲突, 这样再用axios的时候可以直接使用instance这个实例
let instance = axios.create()

// 设置axios请求默认基地址, 这里设置的是 http://localhost:8888,端口是8888--是前端访问地址，这样做的目的是为了跨域请求
instance.defaults.baseURL = 'http://localhost:8888/'

// 设置请求头的类型 Content-Type = 'multipart/form-data'
// instance.defaults.headers['Content-Type'] = 'multipart/form-data';

// 如果请求头的类型不是'multipart/form-data'时, 需要将传递的参数变成name=zhangsan&age=18的形式
// instance.defaults.transformRequest = (data, headers) => {
//     const contentType = headers['AxiosHeaders']
//     if(contentType === "application/x-www-form-urlencoded"){
//
//         return Qs.stringify;
//     }
//     return data;
// }

export default instance

