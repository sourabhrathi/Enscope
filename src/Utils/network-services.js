import axios from 'axios'
import { REFRESH_TOKEN } from './routes'

const NetworkServices = () => {
  // Add a request interceptor
  axios.interceptors.request.use(
    (config) => {
      if (config.url !== '/auth/refresh') {
        const access = localStorage.getItem('token')

        if (access) {
          config.headers['Authorization'] = 'Bearer ' + access
        }

        return config
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  // // Add a response interceptor
  // axios.interceptors.response.use(
  //   function (response) {
  //     return response
  //   },
  //   async function (error) {
  //     const originalRequest = error.config
  //     const refresh = localStorage.getItem('refreshToken')

  //     if (error.response) {
  //       // Catching axios errors

  //       if (error.response.data.message) {
  //         //catches if the session ended!
  //         if (error.response.data.message.includes('jwt expired')) {
  //           console.log('token-expired')
  //           originalRequest._retry = true
  //           const data = { refreshToken: refresh }
  //           const response = await axios.post(REFRESH_TOKEN, data)
  //           window.localStorage.setItem('token', response.accessToken)
  //           axios.defaults.headers.common[
  //             'Authorization'
  //           ] = `Bearer ${response.accessToken}`
  //           return axios(originalRequest)
  //         }
  //       }
  //     }
  //     return Promise.reject(error)
  //   },
  // )
}
export default NetworkServices
