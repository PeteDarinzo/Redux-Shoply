import React from "react";
import "./Product.css";

const Product = ({ name, price }) => {

  return (
    <div className="Product">
      <h3>{name}</h3>
      <h4>${price}</h4>
    </div>
  );
}

export default Product;