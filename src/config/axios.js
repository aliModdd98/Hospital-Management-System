import Axios from "axios";
import { API_BASE_URL } from "../utils/const";

// Function to get the current token from localStorage
const getToken = () => localStorage.getItem("token");

// Axios interceptor to add the Authorization header dynamically before each request
export const axiosInstance = Axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add the Authorization header with the current token
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  (error) => {
    // If the request resulted in an error, handle it here
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Request error:", error.response.data);
      console.error("Status code:", error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error("Error setting up request:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
