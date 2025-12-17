import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:8080/api/v1"
    : "https://boringtexturesbackend-production.up.railway.app/api/v1",
  timeout: 10000,
  withCredentials: true,
});

export default http;
