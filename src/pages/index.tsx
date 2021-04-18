import React, {useEffect, useState} from "react"
import axios from "axios"
import ItemList from '@/components/product/itemList'

function Heading(props: any){
  return (
    <div className="title">
      <props.as>{props.heading}</props.as>
    </div>
  )
}

export default function Home() {
  const [text, setText] = useState<string>('자바스크립트')
  const [list, setList] = useState([])
  const API_URL: string = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'

  setTimeout(() => {
    setText('타입스크립트')
  }, 1000)

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
      <Heading as="h1" heading="heading" />
      <div>
        <span>{text} 적용 완료</span>
      </div>
      <Heading as="h3" heading="베스트 상품" />
      {list.length && <ItemList list={list} />}
    </div>
  )
}
