import axios from "axios";
const request = axios.create({
  baseURL: "https://127.0.0.1:7890",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
export default request;
