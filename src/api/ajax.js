import axios from 'axios';
import { Toast} from 'antd-mobile';

export default function ajax(url, data={},method="GET"){
	// console.log("axios",data)
	// 新建一个执行器 创建自己的promise对象
	return new Promise(function(resolve,reject){
		let promise
		//执行异步 ajax 请求
		if(method==='GET'){
			promise=axios.get(url,{//一个配置对象，内包括了请求的参数
				params:data
			})
			// console.log(url,data)
		}else{
			promise=axios.post(url,data)//执行post请求
		}
		// 如果成功了, 调用 resolve(response.data)
		promise.then(response=>{
			// console.log("ajax",response)
			resolve(response.data)//返回相应的数据
		})
		// 如果失败了, 提示请求后台出错
		.catch(error=>{
			Toast.fail('请求错误'+error.message) 
		})
	})
}

