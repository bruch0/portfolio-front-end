import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export { api };
