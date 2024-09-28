import axios from 'axios';

// Create Axios Instance with a base URL (optional)
export const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,  // Optional if you have a common base URL
});

// Add Request Interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     config.headers["x-rapidapi-key"] = process.env.REACT_APP_API_KEY;
//     config.headers["x-rapidapi-host"] = process.env.REACT_APP_API_HOST;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// API Connector Function
export const apiConnector = (method, url, bodyData = null, headers = {}, params = {}) => {
  return axiosInstance({
    method,
    url,
    data: bodyData,
    headers,
    params,
  });
};
