import Axios from "axios";
import axiosCookieJarSupport from "axios-cookiejar-support";
import toughCookie from "tough-cookie";

export const server = "http://157.245.57.136/blog";
export const localhost = "http://10.100.16.37:8083/blog";
const axios = Axios.create({
  baseURL: localhost,
  headers: {
    Cookie: "app",
  },

  xsrfCookieName: "app",

  withCredentials: true,
});
axiosCookieJarSupport(axios);
export const cookieJar = new toughCookie.CookieJar();
axios.defaults.jar = cookieJar;

export default axios;
