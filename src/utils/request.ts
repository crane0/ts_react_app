import originAxios from 'axios';
import { message } from 'antd';

// 自定义实例，超时时间20s
const axios = originAxios.create({
    timeout: 20000
});

axios.interceptors.response.use(
    function(response) {
        // 拦截并判断，后端返回类型的标志位，
        if (response.data && response.data.flag === 1) {
            /*
                successful response:
                {"flag": 0, "data": ""}

                unsuccessful response:
                {"flag": 1, "msg": "server error"}
            */
            let errorMsg = response.data.msg;
            message.error(errorMsg);
            return Promise.reject(errorMsg);
        }
        return response.data;
    },
    function(error) {
        return Promise.reject(error);
    }
);

export function get(url: string, data: any) {
    return axios.get(url, {
        params: data
    });
};

/* 
没有直接调用 axios.post，
因为默认 axios.post 请求，会将数据序列化为，JSON的数据格式发送，
所以对 post 进行了封装，使发送的数据变为表单格式，后端就不用做JSON解析了。
*/
export function post(url: string, data: any) {
    return axios({
        method: 'post',
        url,
        data
    });
};

export default axios;
