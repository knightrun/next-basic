import {useRouter} from "next/router";
import Axios from 'axios'
import {useEffect, useState} from "react";
import ProductItem from "@/components/product/productItem";
import axios from "axios";

const Post = () => {
  const router = useRouter()
  const {id} = router.query
  const [item, setItem] = useState({});

  const API_URL: string = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    axios.get(API_URL).then(res => {
      setItem(res.data)
    })
  }

  useEffect(() => {
    if (id && +id > 0) {
      getData()
    }
  }, [id])

  return <ProductItem item={item} />
}

export default Post