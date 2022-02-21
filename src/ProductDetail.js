import React from "react";
import "./ProductDetail.css";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams, Link, Redirect } from "react-router-dom";
import { add, remove } from "./actions";
import { Button } from "reactstrap";

const ProductDetail = () => {

  const { id } = useParams();

  const { products, cart } = useSelector(
    st => ({ products: st.products, cart: st.cart }),
    shallowEqual // does a shallow equality check on the values
  );

  const dispatch = useDispatch();

  const product = products[id];

  if (!product) return (<Redirect to="/" />);

  const { name, price, description, image_url } = product;

  function addToCart(evt) { dispatch(add(id)) };
  function removeFromCart(evt) { dispatch(remove(id)) };

  return (
    <div className="ProductDetail">
      <h3>{name}</h3>
      <h4>${price}</h4>
      <p>{description}</p>
      <img src={image_url} />
      <div>
        <Button color="success" className="m-3 btn-lg" onClick={addToCart} data-testid={`add-${name}`}>Add To Cart</Button>
        <Button color="danger" className="m-3 btn-lg" onClick={removeFromCart} data-testid={`remove-${name}`}>Remove From Cart</Button>
        <Link to="/"><Button color="info" className="m-3 btn-lg">Back to Product List</Button></Link>
      </div>
    </div>
  );
}

export default ProductDetail;