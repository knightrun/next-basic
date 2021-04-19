import {css} from '@emotion/react'
import ProductListItem from "@/components/product/productListItem";

const itemWrap = css`
  width: 800px;
  margin: 0 auto;
  overflow: hidden;
`

const ProductList = ({list}) => (
  <div>
    <ul css={itemWrap}>
      {
        list.length && list.map((item, index) => (
          <ProductListItem tag={"li"} item={item} key={index}/>
        ))
      }
    </ul>
  </div>
)

export default ProductList