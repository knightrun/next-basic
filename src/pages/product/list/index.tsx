import React, {useEffect, useState} from "react"
import axios from "axios";
import Heading from "@/components/common/heading";
import ProductList from "@/components/product/productList";
import Head from "next/head";
import {GetServerSideProps} from "next";

const List = ({list}: any) => {
  return (
    <>
      <Head>
        <title>상품리스트</title>
        <meta name="description" content="상품리스트"/>
      </Head>
      <div className="container">
        <Heading level="2" title="상품 리스트"/>

        <Heading level="3" title="베스트 상품"/>
        <ProductList list={list.slice(0, 9)}/>

        <Heading level="3" title="새로운 상품"/>
        <ProductList list={list.slice(9, 18)}/>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apiUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
  const res = await axios.get(apiUrl)
  const data = res.data

  return {
    props: {
      list: data,
    },
  }
}

export default List