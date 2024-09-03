import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  // baseURL: "https://provi-json-server.herokuapp.com/", # not anymore free...
});

export default api;
