import axios from "axios";

const api = axios.create({
  baseURL: "https://provi-json-server.herokuapp.com/",
});

export default api;
