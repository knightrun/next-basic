import {css} from "@emotion/react";
import axios from "axios";
import {useRouter} from "next/router";

const input = css`
  width: 200px;
  height: 40px;
  padding: 0 10px;
`

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

const Login = () => {
  const router = useRouter()
  const submit = async () => {
    const res = await axios.post('/api/login')
    if(res.status === 200) {
      console.log('로그인 성공')
      await router.push('/admin')
    }
  }

  return (
    <div className="login" style={{textAlign: "center"}}>
      <div style={{marginTop: 40}}>
        <input type="text" placeholder="ID" css={input}/>
      </div>
      <div style={{marginTop: 10}}>
        <input type="password" placeholder="PASSWORD" css={input}/>
      </div>
      <button css={btn} onClick={submit}>Login</button>
    </div>
  )
}
export default Login