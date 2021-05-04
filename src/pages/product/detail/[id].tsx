import React, {useEffect, useState} from "react";
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

const Post = ({item}: any) => {
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
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.id
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  const res = await axios.get(apiUrl)
  const data = res.data

  return {
    props: {
      item: data,
    },
  }
}

export default Post