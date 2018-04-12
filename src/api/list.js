import axios from "axios";
import qs from "qs";
axios.interceptors.request.use(
  config => {
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const baseURL = "http://114.55.133.228:8080/";

export function getAllList(data) {
  return axios({
    method: "POST",
    baseURL: baseURL,
    // headers: {
    //   "Content-Type": "application/x-www-form-urlencoded"
    // },
    url: "navigation-page/querybycategory.htm",
    data
  }).then(res => res.data);
  // var fd = new FormData();
  // fd.append("file", "111");
  // let config = { headers: { "Content-Type": "multipart/form-data" }, data };
  // return axios
  //   .post("http://114.55.133.228:8080/navigation-page/querybycategory.htm", fd, config)
  //   .then(res => res.data);
}

export function addList(data) {
  return axios({
    method: "POST",
    baseURL: baseURL,
    url: "navigation-page/addsys.htm",
    data
  }).then(res => res.data);
}

export function queryList(data) {
  return axios({
    method: "POST",
    baseURL: baseURL,
    url: "navigation-page/querysys.htm",
    data
  }).then(res => res.data);
}
export function querySystem(systemName) {
  return axios({
    method: "POST",
    baseURL: baseURL,
    url: "navigation-page/querysys.htm",
    data: {
      rows: 50,
      page: 1,
      // sidx: "SORTID",
      // sord: "asc",
      casein_category: "N,W",
      flag: "Y",
      like_name: systemName
    }
  }).then(res => res.data);
}

export function getBook(data) {
  return axios({
    method: "get",
    // baseURL: baseURL,
    url: "http://api.zhuishushenqi.com/book/5816b415b06d1d32157790b1",
    data: data
  });
}
