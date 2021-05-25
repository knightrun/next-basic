import axios, {AxiosResponse} from "axios"
import {I_API} from '@/typings'

type T_OPTIONS = {
  [key: string]: any
}

const axiosOn = async(api: I_API['item'], options: T_OPTIONS = {}) => {
  let res: AxiosResponse
  if(api.method === 'post'){
    res = await axios.post(api.url)
  } else{
    res = await axios.get(api.url)
  }

  const { data, status } = res
  return { data, status }
}