import axios from 'axios'
import { AIPT_WEB_TOKEN } from 'utils/constants/config'
import { getServerBaseUrl, hashString } from 'utils/helps'
import { message } from 'antd'
import Cookies from "js-cookie"
import Qs from 'qs'

const axiosInstance = axios.create({
  baseURL: getServerBaseUrl(),
  paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'repeat' }),
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = Cookies.get(AIPT_WEB_TOKEN)
    config.headers['x-api-key'] = hashString(process.env.REACT_APP_API_KEY)
    return config
  },
  (error) => {
    message.error(error?.message || "Có lỗi xảy ra")
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    message.error(error?.response?.data?.message || error?.message || "Có lỗi xảy ra")
    return Promise.reject(error)
  }
)

export default axiosInstance
