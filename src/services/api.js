import axios from "axios";

const api = axios.create({
  baseURL: "linkToFind",
});

export default api;
