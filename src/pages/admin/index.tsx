import {useRouter} from "next/router";
import axios from "axios";
import {useEffect, useState} from "react";
import {css} from "@emotion/react";

const btn = css`
  cursor: pointer;
  font-size: 14px;
  background-color: #222;
  width: 200px;
  height: 40px;
  border: 0;
  color: #fff;
  font-weight: 500;
  margin-top: 10px;
`

const Admin = () => {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(false)
  const checkLogin = async () => {
    const res = await axios.get('/api/isLogin')

    if(res.status === 200 && res.data.name) {
      console.log('로그인')
      setIsLogin(true)
    } else{
      console.log('비로그인')
      await router.push('/login')
    }
  }

  const logout = async () => {
    const res = await axios.get('/api/logout')
    if(res.status === 200){
      setIsLogin(false)
      await router.push('/')
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])


  return (
    <div className="admin">
      admin
      <br />
      {isLogin&& <button css={btn} onClick={logout}>LogOut</button>}
    </div>
  )
}

export default Admin