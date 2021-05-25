import { I_API } from '@/typings'

const API: I_API = {
  LOGIN: {
    url: '/api/login',
    method: 'post'
  },
  LOGOUT: {
    url: '/api/logout',
    method: 'get'
  },
  IS_LOGIN: {
    url: '/api/isLogin',
    method: 'get'
  }
}

export default API
