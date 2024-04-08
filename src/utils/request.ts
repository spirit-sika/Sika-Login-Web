import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5223',
  timeout: 3000
})

axiosInstance.interceptors.response.use(response => {
  return response.data
})

export default axiosInstance;