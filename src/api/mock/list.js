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

/**
 * 导航页数据模拟
 */
const mockBaseURL = "https://easy-mock.com/mock/5acebe6d22fa747d25384a86/";
export function testMock(data) {
  return axios({
    method: "GET",
    baseURL: mockBaseURL,
    url: "list/test",
    data
  }).then(res => res.data.lists);
}
