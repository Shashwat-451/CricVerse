import axios from "axios"

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["x-rapidapi-key"] = process.env.CRICBUZZ_API_KEY;
    config.headers["x-rapidapi-host"] = process.env.CRICBUZZ_API_HOST;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API Connector Function
export const apiConnector = (method, url, bodyData = null, headers = {
  'Content-Type': 'image/jpeg',
}, params = {}) => {
  return axiosInstance({
    method,
    url,
    data: bodyData,
    headers,
    params,
  });
};
