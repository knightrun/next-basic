import Gnb from '@/components/common/gnb'
import styled from "@emotion/styled";
import React from "react";
import {css} from "@emotion/react";
import {useRouter} from "next/router";

const NoneWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
`

const btn = css`
  cursor: pointer;
  font-size: 16px;
  background-color: #222;
  width: 150px;
  height: 50px;
  border: 0;
  color: #fff;
  font-weight: 500;
  margin: 20px auto 0;
  border-radius: 10px;
`


const NoneLayout = ({ children }) => {
  const route = useRouter()
  const goMain = async () => {
    await route.push('/')
  }

  return (
    <div className="none-container">
      <NoneWrap>
        {children}
        <button css={btn} onClick={goMain}>메인으로</button>
      </NoneWrap>
    </div>
  )
}

export default NoneLayout