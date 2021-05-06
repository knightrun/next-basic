import React from "react"
import axios from "axios";
import Heading from "@/components/common/heading";
import ProductList from "@/components/product/productList";
import Head from "next/head";
import {GetStaticProps} from "next";

const List = ({list, name}) => {
  return (
    <>
      <Head>
        <title>상품리스트</title>
        <meta name="description" content="상품리스트"/>
      </Head>
      <div className="container">
        {name} 환경입니다.
        <Heading level="2" title="상품 리스트"/>

        <Heading level="3" title="베스트 상품"/>
        <ProductList list={list.slice(0, 9)}/>

        <Heading level="3" title="새로운 상품"/>
        <ProductList list={list.slice(9, 18)}/>
      </div>
    </>
  )
}

//마케팅 페이지, 블로그 게시물, 제품목록, 도움말, 문서 (미리만들어 놓아도 되는 문서)
export const getStaticProps: GetStaticProps = async () => {
  const apiUrl = process.env.apiUrl
  const res = await axios.get(apiUrl)
  const data = res.data

  return {
    props: {
      list: data,
      name: process.env.name
    },
  }
}

export default List