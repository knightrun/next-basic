import React, {useEffect, useState} from "react"
import axios from "axios";
import Heading from "@/components/common/heading";
import ProductItemList from "@/components/product/productItemList";

export default function ProductList() {
  const [list, setList] = useState([])
  const API_URL: string = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'

  function getData(){
    axios.get(API_URL).then(res => {
      setList(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
      <div className="container">
        <Heading level="2" title="상품 리스트" />

        <Heading level="3" title="베스트 상품" />
        {list.length && <ProductItemList list={list} />}
      </div>
  )
}
