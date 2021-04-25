import React, {useEffect, useState} from "react";
import ProductItem from "@/components/product/productItem";
import axios from "axios";
import Head from "next/head";

const Post = ({item}: any) => {
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description}/>
      </Head>
      {item && <ProductItem item={item} />}
    </>
  )
}

export default Post;

export async function getServerSideProps(context) {
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