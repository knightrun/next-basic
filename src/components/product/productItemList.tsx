import Link from "next/link";
import {css, jsx} from '@emotion/react'
import ProductItem from "@/components/product/productItem";

const itemWrap = css`
  width: 800px;
  margin: 0 auto;
  overflow: hidden;
`

const ProductItemList = ({list}) => (
  <div>
    <ul css={itemWrap}>
      {
        list.length && list.map((item, index) => (
            <ProductItem tag={"li"} item={item} key={index}/>
        ))
      }
    </ul>
  </div>
)

export default ProductItemList