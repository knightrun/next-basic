import { IAPI } from '@/typings'

/**
 * 여기서 모든 API 리스트를 상수로서 관리한다.
 * ex) { url: '', method: '' }
 */

const API: IAPI = {
  LOGIN: {
    url: '/core/api/isLogin',
    method: 'get'
  },
}

export default API;
