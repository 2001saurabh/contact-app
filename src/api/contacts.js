import axios from "axios";

export default axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com/users/2",
  // baseURL: "https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca",
  baseURL: "http://localhost:3008/",
});
