import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "https://job-task-server-ecru.vercel.app",
  baseURL: "http://localhost:5000",
  withCredentials: false,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;