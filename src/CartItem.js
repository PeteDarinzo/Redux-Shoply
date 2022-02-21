import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { add, remove } from "./actions";
import { Button } from "reactstrap";
import "./ProductDetail.css";

const CartItem = ({ id, name, price, image_url, quantity }) => {

  const dispatch = useDispatch();

  function addToCart(evt) { dispatch(add(id)) };
  function removeFromCart(evt) { dispatch(remove(id)) };

  return (
    <div className="ProductDetail ProductDetail-cart">
      <h3>{name}</h3>
      <h4>$ {price}</h4>
      <img src={image_url} />
      <p>Quantity: {quantity}</p>
      <div>
        <Button color="danger" className="m-2" onClick={removeFromCart} data-testid={`remove-${name}`}>-</Button>
        <Button color="success" className="m-2" onClick={addToCart} data-testid={`add-${name}`}>+</Button>
      </div>
    </div>
  )
}

export default CartItem;