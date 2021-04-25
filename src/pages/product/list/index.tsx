import React, {useEffect, useState} from "react"
import axios from "axios";
import Heading from "@/components/common/heading";
import ProductList from "@/components/product/productList";
import Head from "next/head";

export default function List() {
  const [list, setList] = useState([])
  const API_URL: string = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'

  function getData() {
    axios.get(API_URL).then(res => {
      setList(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Head>
        <title>상품리스트</title>
        <meta name="description" content="상품리스트"/>
      </Head>
      <div className="container">
        <Heading level="2" title="상품 리스트"/>

        <Heading level="3" title="베스트 상품"/>
        {list.length && <ProductList list={list.slice(0, 9)}/>}

        <Heading level="3" title="새로운 상품"/>
        {list.length && <ProductList list={list.slice(9)}/>}
      </div>
    </>
  )
}
