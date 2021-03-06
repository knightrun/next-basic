import React from "react";
import ProductItem from "@/components/product/productItem";
import axios from "axios";
import Head from "next/head";
import {GetServerSideProps} from "next";
import {css} from "@emotion/react";
import styled from "@emotion/styled";

const btn = css`
  cursor: pointer;
  font-size: 16px;
  background-color: #00bab8;
  width: 100px;
  height: 50px;
  border: 0;
  color: #fff;
  font-weight: 500;
  margin-top: 20px;
`
const DetailWrap = styled.div`
  padding: 0 30px;
`

const Post = ({item, name}) => {
  const goBack = () => {
    window.history.back()
  }

  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description}/>
      </Head>
      <DetailWrap>
        <ProductItem item={item}/>
        <button css={btn} onClick={goBack}>뒤로가기</button>
      </DetailWrap>
      {name} 환경입니다.
    </>
  )
}

//항상 최신 상태유지, 관리자 페이지, 분석차트
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.id
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  const res = await axios.get(apiUrl)
  const data = res.data

  return {
    props: {
      item: data,
      name: process.env.name
    },
  }
}

export default Post