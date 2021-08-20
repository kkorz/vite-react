import qs from "qs";

export default class CancelRequest {
  constructor(map) {
    this.cancelReqMap = this.isMap(map) ? map : new Map();
  }

  // 判断是否是map数据格式
  isMap(data) {
    if (Object.prototype.toString.call(data) === "[object Map]") return true;
  }

  // 根据请求配置信息`config`进行拼接，生成由`url、method、params、data`组成的字符串
  generateCancelReqKey(config) {
    let { url, method, params, data } = config;
    return [url, method, qs.stringify(params), qs.stringify(data)].join("&");
  }

  // 添加请求信息和对应的取消方法到cancelReqMap属性
  addCancelReqKey(config, cancelToken) {
    const cancelReqKey = this.generateCancelReqKey(config);
    config.cancelToken =
      config.cancelToken ||
      new cancelToken((cancel) => {
        if (!this.cancelReqMap.has(cancelReqKey)) {
          this.cancelReqMap.set(cancelReqKey, cancel);
        }
      });
  }

  // 根据当前的请求信息调用对应的取消方法
  cancelReq(config) {
    const cancelReqKey = this.generateCancelReqKey(config);
    if (this.cancelReqMap.has(cancelReqKey)) {
      const cancel = this.cancelReqMap.get(cancelReqKey);
      cancel(cancelReqKey);
      this.removeRequestKey(config);
    }
  }

  // 删除cancelReqMap属性上的值
  removeRequestKey(config) {
    const cancelReqKey = this.generateCancelReqKey(config);
    this.cancelReqMap.delete(cancelReqKey);
  }
}
