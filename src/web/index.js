import axios from "axios";
import store from "../store";

var axiosObject = axios.create({
  baseURL: "http://192.168.1.199:8080/",
  timeout: 6000
});

axiosObject.interceptors.request.use(
  (config) => {
    let token = window.localStorage.getItem("TOKEN");
    
    if (
      undefined === token || 
      null === token || 
      "" === token.trim()) {
      
    } else {
      config.headers.get.TOKEN = token;
      config.headers.post.TOKEN = token;
      config.headers.delete.TOKEN = token;
      config.headers.put.TOKEN = token;
    }
    
    return config;
  },
  (error) => {
    store.commit("messageShow");
    store.commit("messageContestSet", "请求发送失败，请检查网络。");
  }
);


axiosObject.interceptors.response.use(
  (res) => {
    let token = res.headers.token;
    
    if (
      undefined !== token &&
      null !== token && 
      "" !== token.trim()) {
      window.localStorage.setItem("TOKEN", token);
    }
      
    if ("SUCCESS" !== res.data.STATUS) {
      let e = new Error();
      e.message = res.data.MESSAGE_BODY;
      e.name = res.data.STATUS;
      throw e;
    }

    return res.data;
  },
  (error) => {
    let e = new Error();
    e.message = "响应失败，请检查网络！";
    e.name = "COMMON";
    throw e;
  }
);

export default {
  get: function(url) {
    return new Promise((resolve, reject) => {
      axiosObject.get(url)
        .then((res) => {
          console.log(res);
          resolve(res);
        }).catch((err) => {
          
          store.commit("messageShow");
          store.commit("messageContestSet", err.message);
          
          if ("LOGIN_FAIL" === err.name) {
            // TODO 跳转的逻辑
          }
        });
    });
  },
  post: function() {
    
  },
  delete: function() {
    
  },
  put: function() {
    
  }
}
