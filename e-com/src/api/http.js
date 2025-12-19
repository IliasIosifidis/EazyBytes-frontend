import axios from "axios";

const http = axios.create({
  baseURL: "https://boringtexturesbackend-production.up.railway.app/api/v1",
  timeout: 10000,
  withCredentials: false,
});

export default http;
