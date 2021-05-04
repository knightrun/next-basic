import styled from "@emotion/styled";
import React from "react";
import {css} from "@emotion/react";
import {useRouter} from "next/router";

const ErrorWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 200px 0;
  text-align: center;
  font-size: 30px;
`
const btn = css`
  cursor: pointer;
  font-size: 16px;
  background-color: #222;
  width: 400px;
  height: 50px;
  border: 0;
  color: #fff;
  font-weight: 500;
  margin-top: 20px;
`

const ErrorLayout = ({children}) => {
  const route = useRouter()
  const goBack = async () => {
    await route.back()
  }

  return (
    <ErrorWrap>
      {children}
      <button css={btn} onClick={goBack}>뒤로가기</button>
    </ErrorWrap>
  )
}

export default ErrorLayout