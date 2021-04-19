import Link from "next/link";
import {css} from "@emotion/react";

const productItem = css`
    float: left;
    width: 33.333%;
    padding: 30px;
    &:after {
        content: '';
        display: block;
        clear: both;
    }
    .txt_wrap {
        height: 40px;
        overflow: hidden;
    }
`

const ProductItem = (props: any) => (
    <props.tag css={productItem}>
      <Link href={`/product/${props.item.id}`}>
        <a>
          <div className="image_wrap">
            <img src={props.item.image_link} alt={props.item.name}/>
          </div>
          <div className="txt_wrap">
            <span>{props.item.name}</span>
          </div>
        </a>
      </Link>
    </props.tag>
)

export default ProductItem