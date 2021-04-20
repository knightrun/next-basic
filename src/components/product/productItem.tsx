import React from "react";
import {css, jsx} from "@emotion/react";
import {useRouter} from "next/router";

const itemInfo = css`
  display: table;
  & > div {
    display: table-cell;
    vertical-align: top;
    text-align: left;
  }
  .img-wrap {
    width:200px;
  }
  strong {
    display: block;
    font-size: 20px;
    font-weight: 500;
    color: #222;
  }
  em{
    display: block;
    margin-top:10px;
    font-size:16px;
    color:#00bab8;
  }
`

const desc = css`
  margin: 10px;
  padding: 20px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  color: #222;
`

const btn = css`
  cursor: pointer;
  font-size: 16px;
`

const ProductItem = ({item}) => {
  const { image_link, name, price, description } = item;
  const goBack = () => {
    window.history.back()
  }

  return (
    <div style={{padding:"40px 30px 0"}}>
      <div className="info" css={itemInfo}>
        <div className="img-wrap">
          <img src={image_link} alt={name} />
        </div>
        <div className="txt-wrap">
          <strong>{name}</strong>
          <em>${price}</em>
        </div>
      </div>
      <div className="desc" css={desc}>
        <p>{description}</p>
      </div>
      <button css={btn} onClick={goBack}>뒤로가기</button>
    </div>
  )
}

export default ProductItem