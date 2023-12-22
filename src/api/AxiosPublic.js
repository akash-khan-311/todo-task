import axios from "axios";

const axiosPublic = axios.create({
  baseURL: `https://task-craft-server.vercel.app`,
  withCredentials: true,
});

export default axiosPublic;
