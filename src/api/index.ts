import Axios from "axios";

export const server =
  `${process.env.SERVER}/blog` || "https://www.lotus-blogs-api.xyz/blog";
export const localhost = "http://10.100.25.59:8081/blog";
export const cookie = "app=";
const axios = Axios.create({
  baseURL: server,
  withCredentials: true,
});

export default axios;
