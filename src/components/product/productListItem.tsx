import Link from "next/link";
import {css} from "@emotion/react";

const productListItem = css`
  float: left;
  width: 33.333%;
  padding: 20px 30px;
  text-align: center;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
  
  span{
    display: block;
    height: 40px;
    padding: 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  strong {
    display: block;
    color:#00bab8;
    padding-top:10px;
    font-weight: 500;
  }
`

const ProductListItem = (props: any) => (
  <props.tag css={productListItem}>
    <Link href={`/product/detail/${props.item.id}`}>
      <a>
        <div className="image_wrap">
          <img src={props.item.image_link} alt={props.item.name}/>
        </div>
        <div className="txt_wrap">
          <span>{props.item.name}</span>
          <strong>{props.item.price}</strong>
        </div>
      </a>
    </Link>
  </props.tag>
)

export default ProductListItem