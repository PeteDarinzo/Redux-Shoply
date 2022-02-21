import React from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import "./ProductList.css";

const ProductList = () => {
  const { products, cart } = useSelector(
    st => ({ products: st.products, cart: st.cart }),
    shallowEqual // does a shallow equality check on the values
  );

  const prodIds = Object.keys(products);

  return (
    <div className="ProductList">
      <h1 className="m-3" style={{ color: "hotpink" }}>All Products</h1>
      {prodIds.map(id => {
        const p = products[id];
        return (
          <Link
            key={id}
            to={`/${id}`}
            className="ProductList-link">
            <h3>{p.name}</h3>
            <h4>${p.price}</h4>
          </Link>);
      })}
    </div>
  );
}

export default ProductList;