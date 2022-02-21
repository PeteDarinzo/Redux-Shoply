import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import CartItem from "./CartItem";
import {Button} from "reactstrap";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {

  const { products, cart } = useSelector(
    st => ({ products: st.products, cart: st.cart }),
    shallowEqual // does a shallow equality check on the values
  );

  return (
    <div className="Cart">
      <h1>Your cart:</h1>
      <Link to="/"><Button color="info">Home</Button></Link>
      {cart.map(i => {
        const { name, price, image_url } = products[i.id];
        return (<CartItem
          id={i.id}
          key={i.id}
          name={name}
          price={price}
          image_url={image_url}
          quantity={i.qty} />)
      })}
    </div>
  );
}

export default Cart;