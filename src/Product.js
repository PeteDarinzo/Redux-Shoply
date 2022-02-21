import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { add, remove } from "./actions";
import { Button } from "reactstrap";

const Product = ({ name, price, description, id, image_url }) => {

  // const dispatch = useDispatch();

  // function addToCart(evt) { dispatch(add(id)) };
  // function removeFromCart(evt) { dispatch(remove(id)) };

  return (
    <div className="Product">
      <h3>{name}</h3>
      <h4>${price}</h4>
      {/* <p>{description}</p> */}
      {/* <img src={image_url} /> */}
      {/* <div>
        <Button color="success" className="m-3 btn-lg" onClick={addToCart} data-testid={`add-${name}`}>Add To Cart</Button>
        <Button color="danger" className="m-3 btn-lg" onClick={removeFromCart} data-testid={`remove-${name}`}>Remove From Cart</Button>
      </div> */}
    </div>
  );
}

export default Product;