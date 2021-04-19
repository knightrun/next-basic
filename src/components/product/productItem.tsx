import React from "react";
import {css} from "@emotion/react";

const ProductItem = ({item}) => {
  const { image_link, name, price, description } = item;
  return (
    <>
      <div>
        <img src={image_link} alt={name} />
      </div>
      <div>
        <strong>{name}</strong>
        <strong>${price}</strong>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </>
  )
}

export default ProductItem