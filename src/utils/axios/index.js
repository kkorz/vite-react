import axios from "axios";
import CancelRequest from "./CancelRequest";
import { HTTP_STATUS_CODE } from "@/config/global";
import { message } from "antd";

// 实例化取消请求对象
let cancelRequest = new CancelRequest();

// 实例化axios对象
const instance = axios.create({
  // baseURL: "https://my-json-server.typicode.com/kkorz/vite-react-api",
  baseURL: "http://localhost:3333",
  timeout: 4000,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 检查之前是否存在相同的请求，如果存在则取消。
    cancelRequest.cancelReq(config);
    // 记录当前请求
    cancelRequest.addCancelReqKey(config, axios.CancelToken);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // 移除成功请求记录
    cancelRequest.removeRequestKey(res.config);
    return res;
  },
  (err) => {
    // 移除失败的请求记录
    cancelRequest.removeRequestKey(err.config || {});
    if (axios.isCancel(err)) {
      console.log("重复请求信息：" + err.message);
    }

    // 处理错误状态
    const err_status = err.response?.status;
    if (err_status === HTTP_STATUS_CODE.STATUS_Unauthorized) {
      message.error("401：未授权");
    } else if (err_status === HTTP_STATUS_CODE.STATUS_NOT_FOUND) {
      message.error("404：资源不存在");
    } else if (err_status === HTTP_STATUS_CODE.STATUS_Server_Error) {
      message.error("500：服务器错误");
    } else {
      message.error("未知错误");
    }
    return Promise.reject(err);
  },
);

// 封装请求get post delete patch
const get = (url, params) => {
  return instance.get(url, { params });
};

const post = (url, data) => {
  return instance.post(url, data);
};

const patch = (url, data) => {
  return instance.patch(url, data);
};

const deleteMethod = (url, params) => {
  return instance.delete(url, { params });
};

export default {
  get,
  post,
  patch,
  delete: deleteMethod,
};
